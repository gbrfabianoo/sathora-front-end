<template>
  <div class="wrap">
    <div class="header heading1">
      <span> Registrasi Misa <br> <div class="heading2"> Santo Thomas Rasul </div> </span>
    </div>
    <div class="body">
      <div class="bodywrap">
        <!-- <div class="heading4">
          Form
        </div> -->
      <b-card no-body>
      <b-tabs card>
        <!-- Render Tabs, supply a unique `key` to each tab -->
        <b-tab v-for="i in tabs" :key="'dyn-tab-' + i" :title="'Umat ' + i">
          <div class="forms">
          <form class="form">
            <label class="label" style="margin-top: 0">Jadwal:</label><br>
            <label>{{items.hari}} {{}}</label><br>
            <label for="name" class="label">Nama lengkap Umat {{i}}:</label><br>
            <input type="text" id="name" v-model="name">
            <br>
            <label for="age" class="label">Age:</label><br>
            <input type="number" id="age" v-model="age">
            <br>
            <label class="label">Gender:</label><br>
            <input type="radio" id="male" value="male" v-model="gender">
            <label for="male" style="margin: 0">Male</label><br>
            <input type="radio" id="female" value="female" v-model="gender">
            <label for="female" style="margin: 0">Female</label><br>
            <label class="label">Type:</label><br>
            <input type="radio" id="online" value="online" v-model="type">
            <label for="online" style="margin: 0">Online</label><br>
            <input type="radio" id="card" value="card" v-model="type">
            <label for="card" style="margin: 0">Card</label><br>
          </form>
        </div>
          <b-button size="sm" variant="danger" @click="closeTab(i)">
            Cancel
          </b-button>
          <b-button size="sm" variant="success" to="/verification" class="float-right">
            Finish
          </b-button>
        </b-tab>

        <!-- New Tab Button (Using tabs-end slot) -->
        <template v-slot:tabs-end>
          <b-nav-item role="presentation" @click.prevent="newTab" href="#"><b>+</b></b-nav-item>
        </template>

        <!-- Render this if no tabs -->
        <template v-slot:empty>
          <div class="text-center text-muted">
            Pendaftaran umat<br>
            Tambah umat dengan menekan <b>+</b>.
          </div>
        </template>
      </b-tabs>
    </b-card>
      </div>
    </div>
    <div class="footer heading1">
      <span> Paroki Santo Thomas Rasul <br> <div class="heading3"> Jl. Pakis Raya Blok G/5, Bojong Indah </div> </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'registration',
  props: ['items'],
  data() {
      return {
        name: '',
        gender: '',
        type: '',
        age: null,
        tabs: [],
        tabCounter: 1,
        data: {
          hari: null,
          jam: null
        }
      }
    },
  methods: {
    closeTab(x) {
        for (let i = 0; i < this.tabs.length; i++) {
          if (this.tabs[i] === x) {
            this.tabs.splice(i, 1)
          }
        }
        this.tabCounter--
      },
    newTab() {
      this.tabs.push(this.tabCounter++)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
* {
  font-family: 'Roboto', sans-serif;
}
.wrap {
  background-color: rgb(255, 221, 221);
  width: 100vw;
  height: 100%;
}
.header {
  height: 10vh;
  width: 100%;
  background-color: rgb(42, 42, 42);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
}
.heading1 {
  font-size: 1.2rem;
  text-align: center;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
}
.heading2 {
  font-size: 1rem;
  text-align: center;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
}
.heading3 {
  font-size: 0.7rem;
  text-align: center;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
}
.heading4 {
  font-size: 1.2rem;
  text-align: center;
  color: rgb(0, 0, 0);
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  margin-top: 4vh;
}
.body {
  min-height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bodywrap {
  width: 90%;
  height: 90%;
  background-color: white;
  border-radius: 1rem;
  margin: 0 auto;
  box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.459);
}
.footer {
  height: 10vh;
  width: 100%;
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
}
.button {
  padding: 3% 10%;
  margin-top: 0;
  background-color: rgb(255, 63, 63);
  color: white;
  box-sizing: border-box;
  transition: 0.2s ease;
  border-radius: 500px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 1rem;
}
.button:active {
  background-color: black;
  color: white
}
/* .forms {
  width: 90%;
  margin: auto;
  height: auto;
  margin-top: 3vh;
  border-radius: 1vw;
  padding: 1vw;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.459);
} */
.form {
  margin: 2%;
  font-size: 0.8rem;
}
#name, #age{
  width: 70%;
  border-radius: 500px;
  border: 1px black solid;
  
}
.label {
  margin-bottom: 0;
  margin-top: 5%;
}
</style>
