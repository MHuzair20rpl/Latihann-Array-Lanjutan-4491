const daftarBuku = [
    "HTML Dasar",
    "CSS Dasar",
    "JavaScript Dasar",
    "PHP Dasar"

];

console.log(daftarBuku);
//mencari buku "CSS Dasar"//
const indeksBuku = daftarBuku.indexOf("CSS Dasar");
console.log(indeksBuku);
//mengganti "CSS Dasar" menjadi "CSS Modern"//
const dataLama = daftarBuku.splice(1, 1, "CSS Modern");
console.log(daftarBuku);
//menambahkan "Git Dasar" setelah "JavaScript Dasar"//
daftarBuku.splice(3, 0, "Git Dasar");
console.log(daftarBuku);
//menghapus "PHP Dasar"//
daftarBuku.splice(4);
console.log(daftarBuku);
//menmpilkan seluruh daftarBuku//
console.log(daftarBuku);
