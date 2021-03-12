<template>
  <nav class="col-12 navbar navbar-expand-lg navbar-dark bg-dark m-0">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Cross Roads</a>
      <span class="secondary">Temporada 4</span>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <a class="nav-link" href="#">
            <li class="nav-item">
              <div id="vip">
                <div id="vip-img">
                  <img
                    src="https://images-ext-1.discordapp.net/external/962uHdXP9dEZbE9o8xO-3tPQRCujqc3rtQ7UrPvebn8/https/media.discordapp.net/attachments/531174573463306240/799060089503875072/VIP.png"
                    alt="VIP"
                  />
                </div>
                <div id="vip-text">SEJA VIP!</div>
              </div>
            </li>
          </a>
        </ul>
        <ul class="navbar-nav mx-3 mb-2 mb-lg-0">
          <a class="nav-link" href="#">
            <li class="nav-item mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="var(--navbar-item-enabled)"
                class="bi bi-question-circle-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"
                />
              </svg>
            </li>
          </a>
        </ul>
        <form id="search" class="d-flex">
          <input
            class="form-control me-0"
            type="search"
            placeholder="Procurar"
            aria-label="Procurar"
          />
          <button id="search-button" class="btn" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#474a50"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
          </button>
        </form>
        <ul class="navbar-nav mx-3 mb-2 mb-lg-0">
          <a class="nav-link" href="#">
            <li class="nav-item mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="var(--navbar-item-enabled)"
                class="bi bi-inbox-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4H4.98zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374l3.7-4.625z"
                />
              </svg>
            </li>
          </a>
          <a class="nav-link" href="#">
            <li class="nav-item mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="var(--navbar-item-enabled)"
                class="bi bi-gear-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
                />
              </svg>
            </li>
          </a>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
#vip {
  border-radius: 20px;
  background-color: #ffec27;
  height: 20px;
  width: 134px;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 10px;
}
#vip:hover {
  background-color: #fff165;
  box-shadow: 0px 0px 10px #fff165;
}
#vip-text {
  color: #202226;
  font-size: 0.9rem;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
}
#vip:hover #vip-text {
  font-size: 1.05rem;
  margin-top: -1px;
}
#vip-img {
  position: relative;
  transition: all 0.2s ease-in-out;
  right: 0;
}
#vip-img img {
  width: 39px;
  height: auto;
}
#vip:hover #vip-img{
  right: 5px;
}
.navbar-dark {
  background-color: var(--body-background) !important;
  box-shadow: var(--shadow-low);
}
.form-control {
  background-color: #202226 !important;
  color: #474a50;
  border: none;
  border-radius: 20px 0px 0px 20px;
}
#search {
  background-color: #202226 !important;
  color: #474a50;
  border: none;
  border-radius: 20px;
}
#search-button {
  background-color: #202226 !important;
  color: #474a50;
  border: none;
  border-radius: 0px 20px 20px 0px;
}

#search-button:active svg {
  fill: var(--navbar-item-enabled) !important;
}
#search-button:hover svg {
  fill: var(--navbar-item-hover);
}
.form-control,
.form-control:focus {
  color: #fff !important;
}
.form-control:focus,
#search-button {
  box-shadow: none;
}
.nav-item:hover svg {
  fill: var(--navbar-item-hover);
}
</style>