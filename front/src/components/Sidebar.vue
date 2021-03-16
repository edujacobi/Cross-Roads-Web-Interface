<template>
  <div id="sidebarMenu" class="col-lg-2 sidebar m-0 p-0">
    <div>
      <div class="logo-div">
        <img
          class="logo"
          src="https://media.discordapp.net/attachments/531174573463306240/817016858854293504/CrossRoadsLogo.png"
          alt="Logo Cross Roads"
        />
        <span class="secondary">v4.01</span>
      </div>
      <div class="position-sticky menu">
        <a class="nav-link item-menu px-4" href="#"
          ><div class="icon-trabalhos px-3"></div>
          Trabalhos
        </a>
        <a class="nav-link item-menu px-4" href="#"><div class="icon-roubar px-3"></div> Roubar </a>
        <a class="nav-link item-menu px-4" href="#"><div class="icon-vasculhar px-3"></div> Vasculhar </a>
        <a class="nav-link item-menu px-4" href="#"><div class="icon-investimentos px-3"></div> Investimentos </a>
        <a class="nav-link item-menu px-4" href="#"><div class="icon-prisao px-3"></div> Prisão </a>
        <a class="nav-link item-menu px-4" href="#"><div class="icon-hospital px-3"></div> Hospital </a>
        <a class="nav-link item-menu px-4" href="#"><div class="icon-cassino px-3"></div> Cassino </a>
        <a class="nav-link item-menu px-4" href="#"><div class="icon-loja px-3"></div> Loja </a>
        <a class="nav-link item-menu px-4 disabled" href="#"><div class="icon-loja px-3"></div> Mercado Negro </a>
        <a class="nav-link item-menu px-4" href="#"><div class="icon-gangue px-3"></div> Gangue </a>
        <a class="nav-link item-menu px-4" href="#"><div class="icon-rankings px-3"></div> Rankings </a>
      </div>
    </div>
    <a class="sidebar-user nav-link" href="#">
      <div>
        <img
          class="user-img"
          src="https://images-ext-1.discordapp.net/external/o_G82gKq45rF5GXnj-IdeGFd8UJqnBws5mF4GV-rtzk/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/405930523622375424/99322bf4115023fcddb4c993509b55ea.webp"
          alt="Avatar usuário"
        />
      </div>
      <div>
        <div class="m-0 username">Jake</div>
        <div class="id">332228051871989761</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: [],
    };
  },
  methods: {
    addComment(comment) {
      this.comments.push(comment);
    },
    removeComment(index) {
      this.comments.splice(index, 1);
    },
  },
  computed: {
    allComments() {
      return this.comments.map((comment) => ({
        ...comment,
        name: comment.name.trim() === "" ? "Anônimo" : comment.name,
      }));
    },
  },
  watch: {
    comments(val) {
      console.log("val", val);
    },
  },
};
</script>

<style scoped>
.sidebar {
  background-color: #2f3136;
  visibility: hidden;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
.logo {
  height: auto;
  width: 90%;
}
.logo-div {
  padding: 3rem 2rem;
  text-align: center;
  text-align-last: right;
}

.item-menu,
.menu {
  border-top: 1px solid var(--user-background);
  border-bottom: 1px solid var(--user-background);
}
.item-menu {
  flex-direction: row;
  display: flex;
  justify-content: first baseline;
  align-items: center;
}
.disabled .icon-loja {
  opacity: 35%;
}

.item-menu:hover {
  background-color: var(--user-background);
}

.sidebar-user {
  background-color: #292b2f;
  height: 6.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.sidebar-user:hover {
  background-color: #222427;
}

.icon-trabalhos,
.icon-roubar,
.icon-vasculhar,
.icon-investimentos,
.icon-prisao,
.icon-hospital,
.icon-cassino,
.icon-loja,
.icon-gangue,
.icon-rankings {
  width: 20px;
  height: 20px;
  object-fit: contain;
  background-size: contain;
  background-repeat: no-repeat;
}
.icon-trabalhos {
  background-image: url(https://cdn.discordapp.com/attachments/531174573463306240/819515627567054848/539497343905431552.png);
}
.icon-roubar {
  background-image: url(https://cdn.discordapp.com/attachments/531174573463306240/819515638291628052/roubar.png);
}
.icon-vasculhar {
  background-image: url(https://cdn.discordapp.com/attachments/531174573463306240/819515639990583306/vasculhar_20210223172037.png);
}
.icon-investimentos {
  background-image: url(https://cdn.discordapp.com/attachments/531174573463306240/819515629445840947/539497344996212736.png);
}
.icon-prisao {
  background-image: url(https://cdn.discordapp.com/attachments/531174573463306240/819515632289579078/539502682545717288.png);
}
.icon-hospital {
  background-image: url(https://cdn.discordapp.com/attachments/531174573463306240/819515625642000424/539497344450691077.png);
}
.icon-cassino {
  background-image: url(https://cdn.discordapp.com/attachments/531174573463306240/819515630809907200/539497634780676107.png);
}
.icon-loja {
  background-image: url(https://cdn.discordapp.com/attachments/531174573463306240/819515636379418674/loja.png);
}
.icon-gangue {
  background-image: url(https://cdn.discordapp.com/attachments/531174573463306240/819515633737269268/754773626141540423.png);
}
.icon-rankings {
  background-image: url(https://cdn.discordapp.com/attachments/531174573463306240/819515635188891668/badge_top3_grana_s3.png);
}
@media (min-width: 992px) {
  #sidebarMenu {
    visibility: visible;
    position: relative;
  }
  .sidebar-user .username {
    font-size: 1.5rem;
    font-weight: 600;
  }
  .sidebar-user .id {
    font-size: 0.6rem;
  }
  .user-img {
    border-radius: 100%;
    width: 44px;
    height: 44px;
    margin-right: 15px;
  }
}
@media (min-width: 1366px) {
  .sidebar-user .username {
    font-size: 1.6rem;
    font-weight: 600;
  }
  .sidebar-user .id {
    font-size: 0.7rem;
  }
  .user-img {
    border-radius: 100%;
    width: 50px;
    height: 50px;
    margin-right: 17px;
  }
}
</style>