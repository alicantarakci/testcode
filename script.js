let vize1 = 10;
let vize2 = 10;
let final = 70;
let ortalama = (((vize1 + vize2) / 2) * 0.4) + (final * 0.6);
console.log("ortalamanız: " + ortalama);
if (ortalama >= 50 || final >= 70) {
    console.log("geçtiniz");
} else {
    console.log("kaldınız");
}