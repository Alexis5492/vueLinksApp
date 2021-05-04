<template>
  <div id="app" class="container">
    <h1>Vue and Firebase</h1>

    <div class="card">
      <div class="card-header">
        <h3>Add A Link</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="addLink" class="form-inline">
          <div class="form-group">
            <label for="">Title</label>
            <input
              class="form-control"
              v-model="newLink.title"
              placeholder="Title"
              type="text"
            />
          </div>
          <div class="form-group">
            <label for="">Author</label>
            <input
              class="form-control"
              v-model="newLink.author"
              placeholder="Author"
              type="text"
            />
          </div>
          <div class="form-group">
            <label for="">URL</label>
            <input
              class="form-control"
              v-model="newLink.url"
              placeholder="URL"
              type="text"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import FireBase from "firebase";

let config = {
  apiKey: "AIzaSyDlQm5loGU8tyoNHfrFpiisEIEsL1-wkVU",
  authDomain: "vuelinkappfire.firebaseapp.com",
  projectId: "vuelinkappfire",
  storageBucket: "vuelinkappfire.appspot.com",
  messagingSenderId: "198201933434",
  appId: "1:198201933434:web:84a37cde9ac787bde545c3",
  measurementId: "G-0YNHWPMRYB",
};

let app = FireBase.initializeApp(config);
let db = app.database();

let linksRef = db.ref("links");

export default {
  name: "App",
  firebase: {
    links: linksRef,
  },
  data() {
    return {
      newLink: {
        title: "",
        author: "",
        url: "",
      },
    };
  },
  methods: {
    addLink() {
      console.log("addLink");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
