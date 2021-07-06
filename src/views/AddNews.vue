<template>
  <div id="addNews">
    <div id="title">
      <h1>Agregar noticias</h1>
      <p>Llena el siguiente formulario para enviar una noticia.</p>
    </div>
    <div id="newsForm">
      <form @submit.prevent="sendNews">
        <input v-model="newInfo.title" placeholder="Título de la noticia" />
        <input v-model="newInfo.summary" placeholder="Resumen de la noticia" />
        <input
          v-model="newInfo.img"
          placeholder="URL de la imagen de portada"
        />
        <div id="radioInput">
          <label>Categoría de la Noticia: </label>
          <input type="radio" id="one" value="1" v-model="newInfo.section" />
          <label for="one">Política</label>
          <input type="radio" id="two" value="2" v-model="newInfo.section" />
          <label for="two">Deportes</label>
          <input type="radio" id="three" value="3" v-model="newInfo.section" />
          <label for="three">Farandula</label>
        </div>
        <textarea
          v-model="newInfo.text"
          placeholder="Texto de la noticia"
        ></textarea>
        <button type="submit">ENVIAR NOTICIA</button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "AddNews",
  data: function () {
    return {
      newInfo: {
        title: "",
        summary: "",
        img: "",
        section: "",
        text: "",
      },
    };
  },
  methods: {
    ...mapActions(["addNews"]),
    sendNews: function () {
      this.addNews(this.newInfo);
    },
  },
};
</script>
<style lang="scss" scoped>
#addNews {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 20px;
  background-color: lightgray;
}
#title {
  text-align: center;
}
#newsForm {
  padding: 20px;
  form {
    input {
      width: 100%;
      height: 40px;
      border-radius: 12px;
      padding-left: 15px;
      margin-bottom: 10px;
    }
    #radioInput {
      text-align: center;
      input {
        width: initial;
        height: initial;
      }
    }
    textarea {
      width: 100%;
      height: 180px;
      padding: 15px;
      border-radius: 12px;
      margin-bottom: 10px;
    }
    button {
      width: 100%;
      height: 50px;
      border-radius: 12px;
      margin-bottom: 10px;
    }
  }
}
</style>