const pesertaLomba = [
    "Alya",
    "Bintang",
    "Citra",
    "Daffa",
    "Nabila"
];

const namaDicari = "Citra";

console.log("=== PENCARIAN PESERTA LOMBA ===");

pesertaLomba.includes("Citra");
console.log(namaDicari)


if(pesertaLomba.includes(namaDicari)){
    let indeks = pesertaLomba.indexOf(namaDicari);
    let nomorUurt = indeks + 1;
    console.log("Status terdaftar")
}