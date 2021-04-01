<template>
  <div class="container-fluid h-100">
    <div class="row h-100">
      <Sidebar />
        <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";

export default {
  name: "App",
  components: {
    Sidebar,
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
  text-decoration: none;
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

