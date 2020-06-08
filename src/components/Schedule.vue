<template>
  <div class="wrap">
    <div class="header heading1">
      <span> Registrasi Misa <br> <div class="heading2"> Santo Thomas Rasul </div> </span>
    </div>
    <div class="body">
      <div class="bodywrap">
        <div class="heading4"> Jadwal </div>
        <table class="table" style="margin-top: 1vh;">
          <thead>
            <tr>
              <th>Hari</th>
              <th>Jam</th>
              <th>Gereja</th>
              <th>GKP Lt.3</th>
              <th>GKP Lt.4</th>
              <th>Registrasi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="jadwal in jadwals" :key="jadwal.jam">
              <td v-for="value in jadwal" :key="value"> <div style="margin: 15% auto;">{{value}}</div></td>
              <td><b-button class="register" v-on:click="emitSchedule(jadwal.hari, jadwal.jam)">Register</b-button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="footer heading1">
      <span> Paroki Santo Thomas Rasul <br> <div class="heading3"> Jl. Pakis Raya Blok G/5, Bojong Indah </div> </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'schedule',
  data: function () {
    return {
      jadwals: [
        {
          hari: 'Sabtu',
          jam: '16:00',
          gereja: 450,
          gkp3: 66,
          gkp4: 148
        },
        {
          hari: 'Sabtu',
          jam: '18:30',
          gereja: 450,
          gkp3: 66,
          gkp4: 148
        },
        {
          hari: 'Minggu',
          jam: '06:00',
          gereja: 450,
          gkp3: 66,
          gkp4: 148
        },
        {
          hari: 'Minggu',
          jam: '08:30',
          gereja: 450,
          gkp3: 66,
          gkp4: 148
        },
        {
          hari: 'Minggu',
          jam: '11:00',
          gereja: 450,
          gkp3: 66,
          gkp4: 148
        },
        {
          hari: 'Minggu',
          jam: '16:00',
          gereja: 450,
          gkp3: 66,
          gkp4: 148
        },
        {
          hari: 'Minggu',
          jam: '18:00',
          gereja: 450,
          gkp3: 66,
          gkp4: 148
        }
      ],
      items: {
        hari: null,
        jam: null
      }
    }
  },
  methods: {
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
.wrap {
  background-color: rgb(255, 221, 221);
  width: 100vw;
  height: 100vh;
}
.header {
  height: 10%;
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
.register:active {
  background-color: black;
  color: white;
}
.register {
  padding: 3% 8%;
  background-color: rgb(255, 63, 63);
  color: white;
  box-sizing: border-box;
  transition: 0.2s ease;
  border: 0;
  border-radius: 500px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 0.7rem;
  text-decoration: none;
  margin: 5% auto;
}
table.table {
  background-color: #FFFFFF;
  width: 95%;
  text-align: center;
  border-collapse: collapse;
  font-size: 0.7rem;
  margin: 0 auto;
}
table.table tr {
  border: 1px solid rgb(42, 42, 42);
  padding: 5% auto;
}
table.table td {
  border: 1px solid rgb(42, 42, 42);
  padding: auto;
}
table.table thead {
  background: rgb(42, 42, 42);
}
table.table thead th {
  font-size: 0.8rem;
  color: #FFFFFF;
  text-align: center;
  padding: 4% 2%;
  border: 1px solid rgb(42, 42, 42);
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
  position: absolute;
  bottom: 8vh;
}
.button:active {
  background-color: black;
  color: white
}
</style>
