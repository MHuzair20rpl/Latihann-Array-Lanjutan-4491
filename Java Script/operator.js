//operator aritmatika dasar//
const angkaPertama = 10;
const angkaKedua = 3;

console.log(angkaPertama + angkaKedua);
console.log(angkaPertama - angkaKedua);
console.log(angkaPertama * angkaKedua);
console.log(angkaPertama / angkaKedua);
console.log(angkaPertama % angkaKedua);
console.log(angkaPertama ** angkaKedua);


//Operator Modulus//
console.log(10 % 3);

const angka = 8;
const genap = angka % 2 === 0;

console.log(genap);

//Urutan Operasi//
const hasil = 10 + 5 * 2

console.log(hasil);

//Operator Perbandingan//
const nilai = 80;
const lulus = nilai >= 75;

console.log(`Apakah siswa lulus? ${lulus}`);

//Perbandingan Ketat//
console.log(5 == "5");

console.log(5 === "5");

//Operator Logika//
let umur = 18;
let punyaKTP = true;

let bolehMasuk = umur >=17 && punyaKTP;
console.log(bolehMasuk);

//Operator OR//
const usia = 60;
const anggota = false;

const mendapatDiskon = usia >= 55 ||anggota === true;

console.log(mendapatDiskon);

//Operator NOT (!)//
const sedangLibur = false;

console.log(!sedangLibur);

//============//
const sudahLogin = false;

 if (!sudahLogin)
{
    console.log("Silahkan login terlebih dahulu.");
}

//Operator Penugasan(Assignment)//
let total = 50;
console.log(total += 25);
console.log(total -= 10);

//Operator Increment dan Decrement//
let a = 5;
console.log(a++);
console.log(a);

let b = 5;
console.log(++b);

//Operator Ternary//
let umur1 = 20;
let status = umur1 >= 18 ? "Boleh minum kopi" : "Belum boleh minum kopi";
console.log(status);

let nilai1 = 40;
let hasil1 = nilai >= 75 ? "Lulus" : "Tidak Lulus";
console.log("Hasil: " +  hasil1);

//Operator Ternary Bersarang(Nested)//
let niali= 83;
let prediket = nilai >= 90 ? "A" :
                nilai >= 80 ? "B" :
                nilai >= 70 ? "C" : "D";
console.log("Prediket: " + prediket);

//if Statment//cuma bisa dijalankan jika kondisi bernilai true//
let hujan = true;

if (hujan)
{
    console.log("Jangan lupa bawa payung !");
}

//if...else Statment//
let nilai2 = 45;

if (nilai2 >= 75)
{
    console.log("Kamu lulus");
}
else
{
 console.log("Kamu belum lulus.");
}

//if...else if...else//
let skor = 82;

if (skor >= 90)
{
    console.log("Prediket : A");
}
else if (skor >= 80)
{
    console.log("Prediket: B");
}
else if (skor >= 70)
{
    console.log("Prediket: C");
}
else
{
    console.log("Prediket: D");
}

//Percabangan Bersarang//
const sudahLogin1 = true;
const role = "admin";

if (sudahLogin1)

    if (role === "admin")
    {
        console.log("Selamat datang di halaman admin.");
    }
    else
    {
        console.log("Selamat datang di halaman pengguna");
    }
else
{
    console.log("Silakan login terlebih dahulu");
}

//Menggabungkan kondisi//
let umur2 = 20;
let punyaSIM = true;

if (umur >= 17 && punyaSIM)
{
    console.log("Kamu boleh mengemudi");
}
else
{
    console.log("Maaf, belum memenuhi syarat.");
}

const hari = "Minggu";

if (hari === "Sabtu" || hari === "Minggu")
{
    console.log("Hari libur.");
}
else
{
    console.log("Hari belajar.");
}
