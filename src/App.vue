<template>
  <div class="container-fluid h-100">
    <div class="row h-100">
      <Sidebar />
      <main class="col-lg-10 col-12 p-0">
        <Navbar />
        <div class="col-12 p-5">
          <div class="infoGang">
            <div
              class="d-flex col-lg-9 col-12 p-0 justify-content-between flex-md-row flex-column"
            >
              <div
                class="gang-image-div col-lg-2 col-12 p-0 align-self-center align-self-lg-start mb-4"
              >
                <img
                  class="img-fluid gang-image"
                  src="https://images-ext-1.discordapp.net/external/RRdzZ36J6ISvyxBvtbh5HjICwZ8zB3S8u83RzgfAwWQ/https/www.owntec.com.br/wp-content/uploads/2020/09/owntec.png"
                  alt="Logo Owntec"
                />
              </div>
              <div id="dataGang" class="col-md-10 col-12 ps-lg-4">
                <h1>Gangue [BVO] Owntec</h1>
                <p class="m-0">Oligarcas honrados</p>
                <p class="m-0">Trabalhadores assalariados</p>
                <p class="m-0">Defensores do livre mercado</p>
                <p class="m-0"><b>Vagas abertas</b></p>
              </div>
            </div>
            <div
              id="caixaGang"
              class="col-lg-2 col-12 p-0 pt-4 justify-content-between"
            >
              <div class="col-6 col-lg-auto">
                <div class="secondary m-0">Valor em caixa</div>
                <h4 class="m-0">R$ 41.268.857</h4>
              </div>
              <div class="col-6 col-lg-auto text-end">
                <div class="secondary m-0">Depósito Máximo</div>
                <h4 class="m-0">R$ 3.500.000</h4>
              </div>
            </div>
          </div>
          <div class="d-flex row">
            <div class="col-md-3 col-12 pt-4">
              <div class="cardCR">
                <div class="d-flex justify-content-between">
                  <h6>Membros</h6>
                  <h5 class="secondary text-end">9/15</h5>
                </div>
                <div class="col">
                  <div class="d-flex flex-column">
                    <div class="list-group list-group-flush">
                      <div class="leader">LopeszeraRS</div>
                      <div class="vice">WzLord</div>
                      <div class="recruiter">Julianah</div>
                      <div class="recruiter">Jake</div>
                      <div class="member">Davi Siqz</div>
                      <div class="member">Rain</div>
                      <div class="member">Cesar</div>
                      <div class="member">yfcamila</div>
                      <div class="member">Brandz</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-12 order-first order-md-0 pt-4">
              <div id="base-gang-card" class="cardCR base-gang h-100 p-0">
                <div class="base-gang-div d-flex justify-content-between">
                  <h6>Base</h6>
                  <h5 class="secondary text-end">Level 10</h5>
                </div>
                <h4 class="px-4">Aeroporto Abandonado</h4>
                <div
                  class="d-flex flex-column h-75 justify-content-lg-end justify-content-sm-evenly"
                >
                  <div id="carregamento" class="p-4">
                    Carregamento em transporte
                  </div>
                  <div id="info-carregamento" class="px-4">
                    <div class="progress" style="height: 4px">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 25%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div id="info-content" class="p-3 d-flex">
                    <div class="col-6">
                      <h6 class="m-0">DEF</h6>
                      <h1 class="m-0">60</h1>
                    </div>
                    <div class="col-6 text-end">
                      <h6 class="m-0">Estoque</h6>
                      <div clas="m0 d-flex flex-row align-items-center">
                        <img
                          class="estoque-ocupado"
                          src="https://media.discordapp.net/attachments/531174573463306240/818832295242498068/Caminho_14.png"
                          alt=""
                        />
                        <img
                          class="estoque-ocupado"
                          src="https://cdn.discordapp.com/attachments/531174573463306240/818832308291239976/Caminho_15.png"
                          alt=""
                        />
                        <img
                          class="estoque-ocupado"
                          src="https://cdn.discordapp.com/attachments/531174573463306240/818832308291239976/Caminho_15.png"
                          alt=""
                        />
                        <img
                          class="estoque-vazio"
                          src="https://cdn.discordapp.com/attachments/531174573463306240/818832308291239976/Caminho_15.png"
                          alt=""
                        />
                        <img
                          class="estoque-vazio"
                          src="https://cdn.discordapp.com/attachments/531174573463306240/818832318932058162/Caminho_18.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div id="tempo-restante" class="col-12 px-4">
                    Chega em 8 hora e 45 minutos
                  </div>
                  <div id="info-content-hover" class="p-3 d-flex">
                    <div class="col-6">
                      <h6 class="m-0">Chance de sucesso</h6>
                      <h1 class="m-0">66,5%</h1>
                    </div>
                    <div class="col-6 text-end">
                      <h6 class="m-0">Tempo de espera</h6>
                      <h1 class="m-0">18h</h1>
                    </div>
                  </div>
                </div>
                <img
                  class="img-fluid base-image"
                  src="https://media.discordapp.net/attachments/531174573463306240/757330414342766676/unknown.png"
                  alt="Base Aeroporto Abandonado"
                />
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
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Sidebar,
    Navbar,
  },

  data() {
    return {
      active: false,
    };
  },
};
</script>

<style>
:root {
  --user-background: #292b2f;
  --sidebar-background: #2f3136;
  --body-background: #36393f;
  --dark-card: #474a50;
  --button-enabled: #787d85;
  --button-hover: #8c9198;

  --navbar-item-enabled: #8c9198;
  --navbar-item-hover: #ccd1d9;
  --navbar-item-active: #474a50;

  --text-primary: white;
  --text-secondary: #8c9198;

  --danger: #f04747;
  --danger-hover: #f95858;
  --warning: #faa61a;
  --warning-hover: #ffb231;
  --sucess: #43b581;
  --sucess-hover: #50be8c;
  --action: #7289da;
  --action-hover: #8398e1;

  --shadow-low: 0px 3px 6px #00000020;

  --shadow-high: 2px 5px 6px #00000020;
}

html,
body {
  height: 100%;
  background: var(--body-background);
  color: var(--text-primary);
}

a {
  color: var(--text-primary);
}
a:hover {
  color: var(--text-primary);
}

.infoGang {
  display: flex;
  flex-direction: column;
}

.cardCR {
  background-color: var(--dark-card);
  padding: 20px;
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

.gang-image {
  width: 100%;
  height: 130px;
  border-radius: 100%;
  border: 3px solid;
  border-color: #1b62f8;
  object-fit: contain;
}

.gang-image-div {
  background-color: var(--user-background);
  height: 130px;
  width: 130px;
  border-radius: 100%;
  box-shadow: var(--shadow-low);
}

#caixaGang {
  display: flex;
  text-align: left;
  flex-direction: row;
  justify-content: space-around;
}

.base-gang {
  background-color: #1b62f840;
  position: relative;
  transition: background-color 0.4s ease-in-out;
}
.base-gang:hover {
  background-color: #1b62f890;
  position: relative;
}

.base-gang-div {
  padding: 20px 20px 0px 20px;
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
}
#base-gang-card:hover #info-content div {
  position: absolute;
  opacity: 0%;
  height: 0;
  overflow: hidden;
}
#base-gang-card:hover #info-content {
  opacity: 0%;
  height: 0;
  overflow: hidden;
}
#base-gang-card:hover #info-content-hover {
  position: relative;
  width: 100%;
  opacity: 100%;
}
#base-gang-card:hover #info-carregamento {
  width: 100%;
}
#base-gang-card:hover #carregamento {
  font-size: 1.5rem;
}
#base-gang-card:hover .progress-bar::before,
#base-gang-card:hover .progress-bar::after {
  display: inline-block;
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

.btn,
.cardCR {
  border-radius: 20px;
  box-shadow: var(--shadow-low);
}

.secondary {
  color: var(--text-secondary);
}

.btn-primary {
  background-color: var(--button-enabled);
  border-color: var(--button-enabled);
}
.btn-primary:hover {
  background-color: var(--button-hover);
  border-color: var(--button-hover);
}
.btn-outline-danger {
  color: var(--danger);
  border-color: var(--danger);
  box-shadow: none;
}
.btn-outline-danger:hover {
  background-color: var(--danger-hover);
  color: var(--text-primary);
  border-color: var(--danger-hover);
  box-shadow: var(--shadow-low);
}

.progress {
  background-color: var(--button-enabled);
}

.progress-bar {
  background-color: white;
}

.progress-bar::before {
  background-image: url(https://cdn.discordapp.com/emojis/539497345197277214.png?v=1);
  transform: scaleX(-1);
  height: 20px;
  top: -22px;
  content: "";
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  width: 25%;
  display: none;
}

.progress-bar::after {
  height: 20px;
  top: 10px;
  content: "25%";
  position: absolute;
  width: auto;
  align-self: flex-end;
  display: none;
}

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

.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12,
.col,
.col-auto,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm,
.col-sm-auto,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md,
.col-md-auto,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg,
.col-lg-auto,
.col-xl-1,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl,
.col-xl-auto {
  padding-right: 10px;
  padding-left: 10px;
}
</style>

