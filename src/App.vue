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
            <label for="title">Title</label>
            <input
              id="title"
              class="form-control"
              v-model="newLink.title"
              placeholder="Title"
              type="text"
            />
          </div>
          <div class="form-group">
            <label for="author">Author</label>
            <input
              id="author"
              class="form-control"
              v-model="newLink.author"
              placeholder="Author"
              type="text"
            />
          </div>
          <div class="form-group">
            <label for="url">URL</label>
            <input
              id="url"
              class="form-control"
              v-model="newLink.url"
              placeholder="URL"
              type="text"
            />
          </div>

          <input type="submit" class="btn btn-success" value="Add a Link" />
        </form>
      </div>

      <hr />
      
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Links List</h3>
        </div>
        <div class="card-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Url</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="link in links" v-bind:key="link.id">
                <td>
                  <a target="_blank" v-bind:href="link.url">{{ link.title }}</a>
                </td>
                <td>
                  {{ link.author }}
                </td>
                <td>
                  <button v-on:click="deleteLink(link)" class="btn btn-danger">
                  </button>
                </td>
              </tr>
            </tbody>

          </table>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import FireBase from "firebase";

let config = {
  apiKey: "AIzaSyDlQm5loGU8tyoNHfrFpiisEIEsL1-wkVU",
  authDomain: "vuelinkappfire.firebaseapp.com",
  databaseURL:
    "https://vuelinkappfire-default-rtdb.europe-west1.firebasedatabase.app",
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
      links: [],
      newLink: {
        title: "",
        author: "",
        url: "",
      },
    };
  },
  methods: {
    addLink() {
      //console.log("addLink");
      linksRef.push(this.newLink);
    },
    deleteLink(link) {
      linksRef.child(link[".key"]).remove();
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
