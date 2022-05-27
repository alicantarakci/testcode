let turkey = {
    "City":{
        "İstanbul":{
            "Kartal": "Esentepe",
            "Pendik": "Güzelyalı",
            "Tuzla": "İçmeler"
        },
        "Kocaeli":{
            "Gebze": "Balçık",
            "Darıca": "Eskihisar"
        },
    },
    "Food":{
        "Gaziantep": "Baklava",
        "Adana": "Kebap",
        "Trabzon": "Hamsi"
    }    
    };
let arabalar = {
        "Skoda": "Octavia",
        "Opel" : "Corsa",
        "Citroen" : "C5Aircross",
        "Audi" :{
            "A5" : "2.0",
            "A5Coupe" : "1.6"
        }
    };
let ogrenciler = [
    {"ad":"yigit","soyad":"bilgi","notlar":[60,70,60]},
    {"ad":"alican","soyad":"tarakci","notlar":[80,70,80]},
    {"ad":"kader","soyad":"ozcan","notlar":[70,70,60]}
];
for(let ogrenci of ogrenciler){
    let not_toplam = 0;
    let ortalama = 0;
    let adet = 0;
    for(let not of ogrenci.notlar){
        not_toplam += not;
        adet++;
    }
    ortalama = not_toplam / adet;
    console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli öğrencimnin not ortalaması : ${ortalama}.`);
    if(ortalama>=50){
        console.log("başarılı.");
    }
    else {
        console.log("başarısız.");
    }
}
console.log(turkey.City.İstanbul.Kartal);
console.log('\n');
console.log(turkey);