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