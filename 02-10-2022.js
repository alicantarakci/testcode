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
let computers ={
    notebook:[
        {name:"Asus",model:"blabla2020",color:"black"},
        {name:"Casper",model:"Excalibur",color:"yellow"},
        {name:"GameGaraj",model:"blaster7tn",color:"red"},
        {name:"Apple",model:"macbook",color:"white"},
        {name:"Mons ter",model:"abraa5",color:"gray"},
        {name:"Dell",model:"dellgaming",color:"blue"}
    ],
    computerAccessuars:[
        {name:"mause",model:"Razer",color:"orange"},
        {name:"headphone",model:"rampage",color:"green"},
        {name:"keyboard",model:"steelseries",color:"orange"}
    ]
    
};
let data={
    kisiler:[
        {name:"Alican",surname:"Tarakci",age:"22"},
        {name:"Tolga",surname:"Cinar",age:"42"},
        {name:"Arda",surname:"Capar",age:"19"}
    ],
};

sonuc = urunler[0].urun_adi;

console.log(sonuc);
console.log(computers.notebook)