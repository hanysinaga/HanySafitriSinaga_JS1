// contoh if, else, nested if
let nilai = 80;

if (nilai >= 90) {
  console.log("Grade A");
} else if (nilai >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

// contoh switch case
let warna = "Biru";

switch (warna) {
  case "Hijau":
    console.log("Warna Hijau");
    break;
  case "Hitam":
    console.log("Warna Hitam");
    break;
  case "Biru":
    console.log("Warna Biru");
    break;
  default:
    console.log("Warna tidak terdeteksi");
}

// contoh for statement
for (let i = 1; i <= 3; i++) {
  console.log("Minggu ke-" + i);
}

// contoh while
let i = 10;

while (i > 0) {
  console.log("Anak Ayam Turun "+i);
  i--;
}

// contoh do while
let angka = 1;

do {
  console.log(angka);
  angka++;
} while (angka <5)

// contoh function
function tambahkanLima(angka) {
  return angka + 5;
}

let hasil = tambahkanLima(8);
console.log("Hasil penambahan: " + hasil);