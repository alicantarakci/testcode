let notebooks = ["Acer","Monster","Toshiba","GameGaraj","Dell","Asus"];
let accessorys = ["Mause","Keyboard","Headphone","Monitor"];
let accessorysModels = ["Logitech","Rampage","Steelseries","Asus"];
let setups =[...notebooks,...accessorys,...accessorysModels];
console.log(setups);
console.log('\n');
console.log(setups[10]);
console.log('\n');
console.log(setups.length);
setups.push ("Acer");
console.log(setups);
console.log('\n');
setups.sort();
console.log(setups);
setups.forEach(function(hello){
    console.log(`En iyi bilgisayarlar ve ekipmanları ${hello}`);});
  console.log('\n');
  var Setupslist = setups.entries();
  for (let e of Setupslist) {
    console.log(e);
  }
  let arabalar = {
    "Skoda": "Octavia",
    "Opel" : "Corsa",
    "Citroen" : "C5Aircross",
    "Audi" :{
        "A5" : "2.0",
        "A5Coupe" : "1.6"
    }
};
console.log(arabalar.Audi);
console.log('\n');
for(let i = 0; i <= 10; i++){
    console.log("FENERBAHÇE");
}
console.log('\n');
let paralar = [100,10,50,20,5,200,213];
toplam = 0
for (let i=0; i < paralar.length ; i++){
console.log(paralar[i]);
toplam += paralar[i];
}
console.log('\n');
console.log(toplam);
console.log('\n');
let kullanıcıBilgiler = {
    "İsim": "Alican",
    "KullanıcıAdı": "İcabedermi",
    "Şifre": "Osbir",
    "Eposta": "alicantarakci2434@gmail.com"
};
for (let key in kullanıcıBilgiler){
    console.log(kullanıcıBilgiler[key]);
};
console.log('\n');
for(let i=0; i<paralar.length; i++){
if(paralar[i] % 5 == 0){
    console.log(paralar[i]);
}
}
console.log('\n');
let notebooks = ["Acer","Monster","Toshiba","GameGaraj","Dell","Asus"];
let accessorys = ["Mause","Keyboard","Headphone","Monitor"];
let accessorysModels = ["Logitech","Rampage","Steelseries","Asus"];
let setups =[...notebooks,...accessorys,...accessorysModels];
//ferrainin suv modellerini dönder
cars.Ferrari.Suv.forEach(function(element,index) {
  console.log(index +'Ferrari modeli'+ element.Model+ 'Fiyatı ' + element.Price + 'Motor Gücü'+element.HorsePower);
});
//toString() {
  //  return `{Modeli: "${this.Ferrari.Suv.Model}", Fiyatı: ${this.Ferrari.Suv.Price}, Gücü: ${this.Ferrari.Suv.HorsePower} }`;
  //}
  cars.Ferrari.Suv.forEach(function(elem, index) {
    console.log(`${index} 'Ferrari modeli' ${elem.Model} 'Fiyatı ' ${elem.Price}  ${elem.HorsePower} 'Motor Gücü'`);
  });
  //do while ile ekrana yazdırma mersedes hachback i değişkeni tanımlanıcak 0 dan 
  //tanımlacnacak i<=1 olduğu süerece çalışacak i üzerinden mersedesi kullanmak
 var i = 0;
do {
    console.log(cars.Mersedes.Hachback[i].Model + ' Mersedes modeli ' +cars.Mersedes.Hachback[i].Price +  ' Fiyatı ' + cars.Mersedes.Hachback[i].HorsePower + ' Motor Gücü ' );
    i++;
}
while (i<=2);
// yeni bir mersedes modeli oluştur marka model yazıyorum diğer diziyle birleştiriyorum
NewMersedes={Model:"fjghmdsfgflgjh",Price:"23124$",HorsePower:"921bg"};
cars.Mersedes.Hachback.push(NewMersedes);
console.log(cars.Mersedes.Hachback);
var ü = 1;
while  (ü < 10){
    console.log(ü);
    ü++;
}
console.log('\n');
var b = 1 ;
do {
    console.log(b);
    b++;
}
 while (j > 10);

var j=1;
while (j < 10){
    console.log(j);
    j++;
}
console.log('\n');
for ( var y = 1; y < 10; y++){
    console.log(y);
}
console.log('\n');
for ( var s = 1; s < 10; s++){
    if (s==5){
        break;
    }
    console.log(s);
}
console.log('\n');
for(var i=1;i<=10;i++)
	{
		console.log("EN BÜYÜK FENERBAHÇE");
	}
console.log('\n');
console.log(setups);
console.log('\n');
console.log(setups[10]);
console.log('\n');
console.log(setups.length);
setups.push ("Acer");
console.log(setups);
console.log('\n');
setups.sort();
console.log(setups);
setups.forEach(function(hello){
    console.log(`En iyi bilgisayarlar ve ekipmanları ${hello}`);});
  console.log('\n');
  var Setupslist = setups.entries();
  for (let e of Setupslist) {
    console.log(e);
  };
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
let softwareLanguages =["HTML","CSS","PYTHON","JAVASCRİPT","C#","C++","JAVA"];
let companys = ["Micrasoft","Windows","Tesla","SoftwareCompanys"];
let cars = ["Mazda","Opel","Citroen","Fiat","Ferrari","Bentley"];
let DreamSogutluTeam = ["DenizCinar","BulentHarmanci","MesutKaya","KenanCinar"];
let RandomCarAndCompany = [...companys,...cars];
let AllArray = [...softwareLanguages,...companys,...cars,...DreamSogutluTeam];
let Find = [];
console.log(RandomCarAndCompany);
console.log('\n');
DreamSogutluTeam.push("CemilTohumcu");
console.log(DreamSogutluTeam);
console.log('\n');
DreamSogutluTeam.forEach(function(hello){
    console.log(`DÜNYANIN EN İYİ OYUNCUSU! ${hello}!!!!!!!`);});
console.log('\n');
RandomCarAndCompany.sort();
console.log(RandomCarAndCompany);
console.log('\n');
AllArray.sort();
console.log(AllArray);
console.log('\n');
Find = AllArray.indexOf("MesutKaya");
console.log(Find);
console.log('\n');
console.log(AllArray.lenght);
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