let kullaniciA = {
    "ad": "Alican",
    "soyad": "Tarakci",
    "yas": 20,
    "adres": {
        "sehir": "İstanbul",
        "ilce": "Kartal"
    },
    "hobiler": ["sinema","spor"]
}
let kullaniciB = {
    "ad": "Çınar",
    "soyad": "Tolga",
    "yas": 38,
    "adres": {
        "sehir": "Londra",
        "ilce": ""
    },
    "hobiler": ["sinema","spor"]
}

let sonuc;

sonuc = kullaniciA.ad;
sonuc = kullaniciA.soyad;
sonuc = kullaniciA["yas"];
sonuc = kullaniciA.adres.sehir;
sonuc = kullaniciA.adres.ilce;
sonuc = kullaniciA.hobiler[0];
sonuc = kullaniciA.hobiler[1];

let kullanicilar = [
    kullaniciA,
    kullaniciB
];
sonuc = kullanicilar[1].ad;

let urunler = [
    {
        "urun_adi": "samsung s22",
        "urun_fiyat": 13000
    },
    {
        "urun_adi": "samsung s23",
        "urun_fiyat": 15000
    }
]

sonuc = urunler[0].urun_adi;

console.log(sonuc);