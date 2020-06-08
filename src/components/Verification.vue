<template>
  <div class="wrap">
    <div class="header heading1">
      <span> Registrasi Misa <br> <div class="heading2"> Santo Thomas Rasul </div> </span>
    </div>
    <div class="body">
      <div class="cardcontainer">
        <img src="../assets/Carddesign.png" class="card"/>
      </div>
      <div class="buttons">
        <b-button class="button">
          Back
        </b-button>
        <b-button class="button" style="margin-left: 5%;">
          Next
        </b-button>
      </div>
    </div>
    <div class="footer heading1">
      <span> Paroki Santo Thomas Rasul <br> <div class="heading3"> Jl. Pakis Raya Blok G/5, Bojong Indah </div> </span>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
.logo {
  height: 20vh;
  margin-bottom: 30vh
}
* {
  box-sizing: border-box;
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
  height: 90vh;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.footer {
  height: 10%;
  width: 100%;
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
}
.button {
  padding: 3% 10%;
  background-color: rgb(255, 63, 63);
  color: white;
  box-sizing: border-box;
  transition: 0.2s ease;
  border: 0;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.459);
  border-radius: 500px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 1rem;
}
.button:active {
  background-color: black;
  color: white
}
.cardcontainer {
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  width: auto;
  height: 90%;
  background-color: transparent;
  border: none;
}
.buttons {
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
