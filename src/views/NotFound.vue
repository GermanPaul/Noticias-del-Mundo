<template>
  <div id="notFound">
    <div>
      El contenido requerido no ha sido encontrado. Seras rediccionado a la
      página de <router-link id="linkToHome" to="/">Inicio</router-link>.
    </div>
  </div>
</template>
<script>
import { setTimeout } from "timers";
export default {
  name: "notFound",
  mounted: function () {
    setTimeout(() => {
      this.$router.push("/");
    }, 3000);
  },
  methods: {
    goHome: function () {
      this.$router.push("/");
    },
  },
};
</script>
<style lang="scss" scoped>
#notFound {
  display: flex;
  justify-content: center;
  padding: 30px 20px;
  text-align: center;
  background-color: lightgray;
}
#linkToHome {
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  &:hover {
    cursor: pointer;
  }
  &:visited {
    text-decoration: none;
  }
}
</style>