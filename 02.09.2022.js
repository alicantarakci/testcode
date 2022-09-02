function kelimeYazdir(kelime, adet) {
    for (let i=0; i < adet; i++) {
        console.log(kelime);
    }
}
kelimeYazdir("merhaba", 2);
function alanCevreHesapla(kisa, uzun) {
    let alan = kisa * uzun;
    let cevre = (kisa + uzun) * 2;

    return `alan: ${alan} çevre: ${cevre}`;
}

let sonuc = alanCevreHesapla(7, 10);
sonuc = alanCevreHesapla(7, 12);
function yaziTuraAt() {
    let random = Math.random(); // 0-1

    if(random < 0.5) {
        console.log("yazı");
    } else {
        console.log("tura");
    }
    console.log(random);
}
function tamBolenler(sayi) {
    let sayilar = [];

    for(let i=2; i < sayi; i++) {
        if(sayi % i == 0) {
            sayilar.push(i);
        }
    }

    return sayilar;
}


console.log(tamBolenler(10));    // 2, 5
console.log(tamBolenler(15));    // 3, 5
console.log(tamBolenler(35));    // 3, 5

function toplam() {
    let sonuc = 0;

    for(let i = 0; i < arguments.length; i++) {
        sonuc += arguments[i];
    }

    return sonuc;
}

console.log(toplam(2, 5));
console.log(toplam(2, 5, 7));   
console.log(toplam(2, 5, 7, 10));   
