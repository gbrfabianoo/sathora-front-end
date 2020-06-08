<template>
  <div class="wrap">
    <div class="header heading1">
      <span> Registrasi Misa <br> <div class="heading2"> Santo Thomas Rasul </div> </span>
    </div>
    <div class="body">
      <div class="bodywrap">
        <div class="heading2" style="color: black; margin-bottom: 5%; margin-top: 5%"> Peraturan dan Ketentuan </div>
        <div class="margin">
          1. Batasan Usia : akan menunggu arahan KAJ untuk penetapan batas usia umat yang boleh ikut misa normal baru. Anak dan lansia sementara diminta mengikuti misa live streaming dari rumah
        Batasan usia yang dibolehkan : 13 – 59 tahun
        <br><br>2. Perayaan Ekaristi di gereja pelaksanaannya akan mengikuti Surat Edaran Menteri Agama No 15 tahun 2020 serta menunggu keputusan KAJ. Team New normal akan mempelajari prosedur untuk pengajuan pelaksaaan Misa di gereja ke instansi terkait, sesuai dengan peraturan dari Menteri Agama dan Gubernur DKI
        <br><br>3. Misa direncanakan hanya di Gereja Sathora, sementara misa di Notredame tidak diadakan
        <br><br>4. Pengaturan parkir motor dan mobil dikoordinir oleh Seksi Keamanan dengan memperhatikan / meminalkan risiko kerumunan
        <br><br>5. Kapasitas : Umat yang misa di gereja dibatasi dengan kuota berbeda di setiap jadwal misa.
        </div>
      </div>
      <b-button class="button heading1" to="/schedule">
        Registrasi
      </b-button>
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
.margin {
  margin: 5%;
  font-size: 0.7rem;
}
</style>
