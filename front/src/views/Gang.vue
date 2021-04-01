<template>
  <main class="col-lg-10 col-12 p-0">
    <Navbar />
    <!--@onSearchRequested="search" -->
    <div v-if="this.gang.nome != ''" class="col-12 p-5">
      <div class="infoGang">
        <div
          class="d-flex col-lg-9 col-12 p-0 justify-content-between flex-md-row flex-column"
        >
          <div
            class="gang-logo-div col-lg-2 col-12 p-0 align-self-center align-self-lg-start mb-4"
          >
            <img
              v-bind:style="{ borderColor: this.gang.cor }"
              class="img-fluid gang-logo"
              :src="this.gang.icone"
            />
          </div>
          <div id="dataGang" class="col-md-10 col-12 ps-lg-4">
            <h1>
              Gangue {{ this.gang.tag ? "[" + this.gang.tag + "]" : "" }}
              {{ this.gang.nome }}
            </h1>
            <p class="m-0">{{ this.gang.desc }}</p>
          </div>
        </div>
        <div
          id="caixaGang"
          class="col-lg-2 col-12 p-0 pt-4 justify-content-between"
        >
          <div class="col-6 col-lg-auto">
            <div class="secondary m-0">Valor em caixa</div>
            <h4 class="m-0">R$ {{ valorEmCaixa }}</h4>
          </div>
          <div class="col-6 col-lg-auto text-end">
            <div class="secondary m-0">Depósito Máximo</div>
            <h4 class="m-0">R$ {{ depositoMaximo }}</h4>
          </div>
        </div>
      </div>
      <div class="d-flex row">
        <div class="col-md-3 col-12 pt-4">
          <div class="cardCR">
            <div class="d-flex justify-content-between">
              <h6>Membros</h6>
              <h5 class="secondary text-end">
                {{
                  (this.gang.membros.length > 1
                    ? this.gang.membros.length
                    : 0) + (this.gang.vicelider != "" ? 2 : 1)
                }}/{{ this.gang.espacoMembro }}
              </h5>
            </div>
            <div class="col">
              <div class="d-flex flex-column">
                <div class="list-group list-group-flush">
                  <div class="leader">
                    {{ this.gang.lider.username }}
                  </div>
                  <div v-if="this.gang.vicelider != null" class="vice">
                    {{ this.gang.vicelider.username }}
                  </div>
                  <div v-if="this.gang.membros.length >= 1">
                    <div
                      v-for="(membro, index) in this.gang.membros"
                      :key="index"
                    >
                      <div class="member">
                        {{ membro.username }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-12 order-first order-md-0 pt-4">
          <div
            id="base-gang-card"
            class="cardCR base-gang h-100 p-0"
            v-bind:style="styleBaseGang"
          >
            <div class="base-gang-div d-flex justify-content-between">
              <h6>Base</h6>
              <h5 class="secondary text-end">
                Level {{ this.gang.baseLevel }}
              </h5>
            </div>
            <h4 class="px-4">{{ tipoBase }}</h4>
            <div
              v-if="this.gang.base != null"
              class="d-flex flex-column justify-content-lg-end justify-content-sm-evenly"
            >
              <div
                v-if="this.gang.carregamentoAtivo"
                id="carregamento"
                class="p-4"
              >
                Carregamento em transporte
              </div>
              <div
                v-if="this.gang.carregamentoAtivo"
                id="info-carregamento"
                class="px-4"
              >
                <div class="progress" style="height: 4px">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    :style="{ width: tempoRestantePercent }"
                    :aria-valuenow="tempoRestantePercent"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div class="truck"></div>
                  </div>
                </div>
              </div>
              <div id="info-content" class="p-3 d-flex">
                <div class="col-6">
                  <h6 class="m-0">DEF</h6>
                  <h1 class="m-0">
                    {{
                      (this.gang.base == "bunker" ? 30 : 15) +
                      5 * this.gang.baseLevel
                    }}
                  </h1>
                </div>
                <div class="col-6 text-end">
                  <h6 class="m-0">Estoque</h6>
                  <div class="m-0 py-3 d-flex flex-row justify-content-end">
                    <img
                      :class="estoqueGang(1)"
                      src="https://media.discordapp.net/attachments/531174573463306240/818832295242498068/Caminho_14.png"
                    />
                    <img
                      :class="estoqueGang(2)"
                      src="https://cdn.discordapp.com/attachments/531174573463306240/818832308291239976/Caminho_15.png"
                    />
                    <img
                      :class="estoqueGang(3)"
                      src="https://cdn.discordapp.com/attachments/531174573463306240/818832308291239976/Caminho_15.png"
                    />
                    <img
                      :class="estoqueGang(4)"
                      src="https://cdn.discordapp.com/attachments/531174573463306240/818832308291239976/Caminho_15.png"
                    />
                    <img
                      :class="estoqueGang(5)"
                      src="https://cdn.discordapp.com/attachments/531174573463306240/818832318932058162/Caminho_18.png"
                    />
                  </div>
                </div>
              </div>
              <div
                v-if="this.gang.carregamentoAtivo"
                id="tempo-restante"
                class="col-12 px-4"
              >
                {{ tempoRestante }}
              </div>
              <div id="info-content-hover" class="p-3 d-flex">
                <div class="col-6">
                  <h6 class="m-0">Chance de sucesso</h6>
                  <h1 class="m-0">
                    {{
                      35 +
                      (this.gang.base == "aeroporto" ? 3 : 2) *
                        this.gang.baseLevel
                    }}%
                  </h1>
                </div>
                <div class="col-6 text-end">
                  <h6 class="m-0">Tempo de espera</h6>
                  <h1 class="m-0">
                    {{
                      (this.gang.base == "aeroporto" ? 21 : 24) -
                      2 * this.gang.baseLevel
                    }}h
                  </h1>
                </div>
              </div>
            </div>
            <img class="img-fluid base-image" :src="imageBaseGang" />
          </div>
        </div>

        <div
          class="d-flex flex-column col-md-3 col-lg-2 col-12 justify-content-between pt-4"
        >
          <div class="d-flex flex-column gap-3">
            <a class="btn btn-primary">Depositar</a>
            <a class="btn btn-primary">Convidar</a>
          </div>
          <div class="d-flex flex-column pt-4">
            <a class="btn btn-outline-danger">Sair</a>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="col-12 p-5">
      <div class="infoGang">
        <div
          class="d-flex col-lg-9 col-12 p-0 justify-content-between flex-md-row flex-column"
        >
          <div
            class="gang-logo-div col-lg-2 col-12 p-0 align-self-center align-self-lg-start mb-4"
          >
            <img class="img-fluid gang-logo" />
          </div>
          <div id="dataGang" class="col-md-10 col-12 ps-lg-4">
            <h1>Gangue não encontrada</h1>
          </div>
        </div>
      </div>
      <div class="d-flex row">
        <div class="col-md-3 col-12 pt-4">
          <div class="cardCR">
            <div class="d-flex justify-content-between">
            </div>
            <div class="col">
              <div class="d-flex flex-column"></div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-12 order-first order-md-0 pt-4">
          <div
            id="base-gang-card"
            class="cardCR base-gang h-100 p-0"
            v-bind:style="styleBaseGang"
          >
            <div class="base-gang-div d-flex justify-content-between"></div>
            <div
              class="d-flex flex-column justify-content-lg-end justify-content-sm-evenly"
            >
              <div id="info-content" class="p-3 d-flex"></div>
            </div>
          </div>
        </div>

        <div
          class="d-flex flex-column col-md-3 col-lg-2 col-12 justify-content-between pt-4"
        ></div>
      </div>
    </div>
  </main>
</template>

<script>
import Navbar from "../components/Navbar";
import { GANGS /** , USERS*/ } from "../services/Database";

export default {
  name: "Gang",
  components: {
    Navbar,
  },

  data() {
    return {
      gang: {
        base: "",
        baseLevel: 0,
        caixa: 0,
        carregamento: 0,
        carregamentoAtivo: false,
        cor: "#FFFFFF",
        desc: "",
        espacoMembro: 10,
        estoque: 0,
        golpeL: 0,
        golpeW: 0,
        golpeMissao1: { concluido: false, time: 0 },
        golpeMissao2: { concluido: false, time: 0 },
        golpeMissao3: { concluido: false, time: 0 },
        golpeTime: 0,
        icone: null,
        lider: {},
        membros: [],
        nome: "",
        tag: "",
        vicelider: {},
      },
      user: "",
      currTime: 1615893000542,
    };
  },

  mounted() {
    // this.search("");
    GANGS.get("/getGang", {
      params: {
        search: this.$route.params.id,
      },
    }).then((response) => {
      this.gang = response.data;
      console.log("Gang Nome (mounted):", this.gang.nome);
    });
  },
  watch: {
    $route() {
      GANGS.get("/getGang", {
        params: {
          search: this.$route.params.id,
        },
      }).then((response) => {
        this.gang = response.data;
        console.log("Gang Nome (route):", this.gang.nome);
      });
    },
  },
  methods: {
    // search(queryString) {
    //   if (queryString.length != 0) {
    //     GANGS.get("/getGang", {
    //       params: {
    //         search: queryString,
    //       },
    //     }).then((response) => {
    //       this.gang = response.data;
    //       console.log(this.gang);
    //     });
    //   }
    // },
    estoqueGang(index) {
      if (this.gang.estoque >= index) return "estoque-ocupado";
      else return "estoque-vazio";
    },
    // getUserUsername(userId) {
    //   if (userId) {
    //     USERS.get("/getUserUsernameById", {
    //       params: {
    //         search: userId,
    //       },
    //     }).then((response) => {
    //       this.user = response.data;
    //       console.log(this.user);
    //     });
    //   }
    // },
    segToHour(segundos) {
      return `${
        segundos > 3600
          ? `${Math.floor(segundos / 3600)} ${
              segundos < 7200 ? `hora` : `horas`
            }${
              segundos % 3600 == 0
                ? ""
                : ` e ${Math.floor((segundos / 60) % 60)} minutos`
            }`
          : Math.floor(segundos) < 60
          ? `${Math.floor(segundos)} segundos`
          : `${Math.floor(segundos / 60)} minutos`
      }`;
    },
  },

  computed: {
    depositoMaximo() {
      return (500000 + 350000 * this.gang.baseLevel)
        .toLocaleString()
        .replace(/,/g, ".");
    },
    valorEmCaixa() {
      return this.gang.caixa.toLocaleString().replace(/,/g, ".");
    },
    tipoBase() {
      if (this.gang.base == "bunker") return "Bunker Subterrâneo";
      else if (this.gang.base == "motoclube") return "Motoclube Anarquista";
      else if (this.gang.base == "aeroporto") return "Aeroporto Abandonado";
      else return "Sem base";
    },
    styleBaseGang() {
      return {
        "--gang-base-color-highlight": `${this.gang.cor}35`,
        "--gang-base-color-highlight-hover": `${this.gang.cor}90`,
      };
    },
    imageBaseGang() {
      if (this.gang.base == "bunker")
        return "https://cdn.discordapp.com/attachments/531174573463306240/757329826091892736/unknown.png";
      else if (this.gang.base == "motoclube")
        return "https://cdn.discordapp.com/attachments/531174573463306240/757330594303574146/unknown.png";
      else if (this.gang.base == "aeroporto")
        return "https://media.discordapp.net/attachments/531174573463306240/757330414342766676/unknown.png";
      else
        return "https://cdn.discordapp.com/attachments/531174573463306240/821378668327600179/placeholder.png";
    },
    tempoRestante() {
      if (this.currTime > this.gang.carregamento)
        return `Chega em ${this.segToHour(
          (this.currTime - this.gang.carregamento) / 1000
        )}`;
      else return "Chegou!";
    },
    tempoRestantePercent() {
      if (this.currTime > this.gang.carregamento)
        return (
          (this.gang.carregamento -
            (24 - 2 * this.gang.baseLevel) * 60 * 60 * 1000) /
            (this.currTime - this.gang.carregamento) /
            1000 +
          "%"
        );
      else return "100%";
    },
  },
  // watch: {
  //   $route() {
  //     GANGS.get("/getGangByUserId", {
  //     params: {
  //       search: this.$router.params.id,
  //     },
  //   }).then((response) => {
  //     this.gang = response.data;
  //     console.log(this.gang.nome);
  //   });
  //   }
  // }
};
</script>
<style>
/* * {
  border: 1px solid cyan;
} */
.gang-logo {
  width: 100%;
  height: 130px;
  border-radius: 100%;
  border: 3px solid;
  object-fit: contain;
}

.gang-logo-div {
  background-color: var(--user-background);
  height: 130px;
  width: 130px;
  border-radius: 100%;
  box-shadow: var(--shadow-low);
}

.leader,
.vice,
.recruiter,
.member {
  margin-left: 20px;
  position: relative;
  font-size: 20px;
  overflow-wrap: break-word;
}

.leader::before,
.vice::before,
.recruiter::before,
.member::before {
  content: "";
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
}

.leader::before {
  background-image: url(https://cdn.discordapp.com/attachments/531174573463306240/817041062974455808/Caminho_22.png);
  height: 20px;
  left: -20px;
  top: 6px;
}

.vice::before {
  background-image: url(https://cdn.discordapp.com/attachments/531174573463306240/817347520677019698/Poligono_2.png);
  height: 20px;
  left: -24px;
  top: 6px;
}

.recruiter::before {
  background-image: url(https://cdn.discordapp.com/attachments/531174573463306240/817347185791336510/Poligono_5.png);
  height: 35px;
  left: -31px;
  top: -1px;
}

.member::before {
  background-image: url(https://cdn.discordapp.com/attachments/531174573463306240/817347188023623690/white-small-square_25ab.png);
  height: 20px;
  left: -24px;
  top: 6px;
}

/* .leader::after {
  background-image: url(https://cdn.discordapp.com/attachments/531174573463306240/817041062974455808/Caminho_22.png);
  background-size: contain;
  background-repeat: no-repeat;
  height: 20px;
  width: 100%;
  content: "";
  position: absolute;
  right: -100px;
  top: 3px;
} */

#caixaGang {
  display: flex;
  text-align: left;
  flex-direction: row;
  justify-content: space-around;
}

.base-gang {
  position: relative;
  transition: background-color 0.4s ease-in-out;
  background-color: var(--gang-base-color-highlight);
}
.base-gang:hover {
  background-color: var(--gang-base-color-highlight-hover);
}

.base-gang-div {
  padding: 20px;
}

.base-image {
  border-radius: 20px;
  object-fit: cover;
  opacity: 25%;
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  transition: opacity 0.4s ease-in-out;
  z-index: -1;
}

#info-content,
#info-content-hover,
#info-carregamento,
#tempo-restante {
  transition: all 0.4s ease-in-out;
}
#info-content {
  width: 100%;
  opacity: 100%;
}
#info-content-hover {
  position: absolute;
  width: 100%;
  opacity: 0%;
}
#info-carregamento,
#info-carregamento:hover,
#carregamento {
  transition: all 0.4s ease-in-out;
}
#info-carregamento {
  position: relative;
  width: 0px;
  height: 0px;
}
#base-gang-card {
  z-index: 1;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#base-gang-card:hover #info-content div {
  position: absolute;
  opacity: 0%;
  height: 0;
  overflow: hidden;
}
#base-gang-card:hover #info-content {
  opacity: 0%;
  position: absolute;
  height: 0;
  overflow: hidden;
}
#base-gang-card:hover #info-content-hover {
  position: relative;
  opacity: 100%;
}
#base-gang-card:hover #info-carregamento {
  width: 100%;
}
#base-gang-card:hover #carregamento {
  font-size: 1.5rem;
}
#base-gang-card:hover .progress-bar .truck {
  display: flex;
  align-self: flex-end;
  position: absolute;
  width: 20px;
}
#tempo-restante {
  position: absolute;
  opacity: 0%;
  height: 0;
  overflow: hidden;
}
#base-gang-card:hover #tempo-restante {
  position: relative;
  opacity: 100%;
  height: auto;
}

.estoque-ocupado,
.estoque-vazio {
  margin: -0.1rem;
  width: 20%;
  height: auto;
}
.estoque-ocupado {
  opacity: 100%;
}
.estoque-vazio {
  opacity: 50%;
}

.progress {
  background-color: var(--button-enabled);
  overflow: visible;
}

.progress-bar {
  background-color: white;
  overflow: visible;
}

.progress-bar .truck {
  background-image: url(https://cdn.discordapp.com/emojis/539497345197277214.png?v=1);
  transform: scaleX(-1);
  height: 20px;
  margin-bottom: 28px;
  margin-right: -10px;
  background-size: contain;
  background-repeat: no-repeat;
  display: none;
}

/* .progress-bar::after {
  height: 20px;
  top: -22px;
  content: "25%";
  position: absolute;
  width: auto;
  align-self: flex-end;
  display: none;
} */

@media (max-width: 1200px) {
  .leader,
  .vice,
  .recruiter,
  .member {
    font-size: 20px;
  }
}
@media (min-width: 992px) {
  #caixaGang {
    text-align: right;
    flex-direction: column;
    /* justify-content: flex-end; */
  }
  .infoGang {
    flex-direction: row;
  }
}
@media (max-width: 1137.98px) {
  .leader,
  .vice,
  .recruiter,
  .member {
    font-size: 18px;
  }
}
@media (max-width: 767.98px) {
  .leader,
  .vice,
  .recruiter,
  .member {
    font-size: 20px;
  }
}
</style>