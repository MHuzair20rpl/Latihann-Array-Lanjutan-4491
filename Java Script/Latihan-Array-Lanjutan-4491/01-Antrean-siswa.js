const antreanSiswa = [
    "Andi",
    "Budi",
    "Citra"

];
//menambahkan Deni//
antreanSiswa.push("Deni");
console.log(antreanSiswa);
//menambahkan Eka ke paling depan//
antreanSiswa.unshift("Eka");
console.log(antreanSiswa);
//menghapus elemen pertama//
antreanSiswa.shift();
console.log(antreanSiswa);
//menghapus elemen terakhir//
antreanSiswa.pop();
console.log(antreanSiswa);

//menampilkan jumlah antrean siswa//
console.log(antreanSiswa.length);
