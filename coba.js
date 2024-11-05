function cetakNama(nama) {
  return `Halo, Nama Saya ${nama}`;
}

function cetakUmur(umur) {
  return `Umur : ${umur} tahun`;
}

const profilSaya = {
  nama: "Andika Rusli",
  umur: 28,
  alamat: "Bekasi",
  negara: "Indonesia",
  cetakProfilSaya() {
    return `Halo, Nama Saya ${this.nama} (${this.umur} tahun), saya tinggal di ${this.alamat} ${this.negara}`;
  }
};

module.exports.cetakNama = cetakNama;
module.exports.cetakUmur = cetakUmur;
module.exports.profilSaya = profilSaya;
