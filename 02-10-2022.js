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

let cars = ["Mazda","Opel","Citroen","Fiat","Ferrari","Bentley"];
let models = ["323","Corsa","C4","500L","California","Continental"];
let carsModels = [...cars,...models];
console.log(carsModels);
console.log('\n');
cars.forEach(function(hello){
  console.log(`En iyi araba ${hello}`);});
console.log('\n');
cars.map((p)=>{
  console.log(`En iyi araba ${p}`);});
console.log('\n');
let guys = models.indexOf("323");
//console.log(models[guys]);
models[guys]="RX8";
console.log(models);
console.log('\n');
let arraysfilter = cars.filter((z)=>z!=="Mazda" && z!=="Fiat");
console.log(arraysfilter);
cars.push("Ford");
console.log(cars);
models.push("Fiesta");
console.log(models);


console.log(sonuc);
console.log(computers.notebook)
let araba={
    Ferrari:{
        Sedan:[
            {Model:"F430",Price:"1500000$",HorsePower:"500bg"},
            {Model:"F355",Price:"14950000$",HorsePower:"450bg"},
            {Model:"F375",Price:"135087362$",HorsePower:"375bg"},
        ],
        Suv:[
            {Model:"F224",Price:"37452345$",HorsePower:"200bg"},
            {Model:"F241",Price:"1236531$",HorsePower:"259bg"},
            {Model:"F192",Price:"367128364$",HorsePower:"699bg"},
        ],
        Hachback:[
            {Model:"F942",Price:"23458723$",HorsePower:"124bg"},
            {Model:"F987",Price:"23741234$",HorsePower:"734bg"},
            {Model:"F982",Price:"2387423$",HorsePower:"383bg"}
        ],
    },
    Mersedes:{
        Sedan:[
            {Model:"Cla180",Price:"10000$",HorsePower:"100bg"},
            {Model:"Cla200",Price:"85000$",HorsePower:"120bg"},
            {Model:"C200",Price:"76500$",HorsePower:"140bg"},
        ],
        Suv:[
            {Model:"Glc180",Price:"75000$",HorsePower:"200bg"},
            {Model:"Glc200",Price:"60000$",HorsePower:"220bg"},
            {Model:"Glc190",Price:"65000$",HorsePower:"210bg"},
        ],
        Hachback:[
            {Model:"Gle100",Price:"35000$",HorsePower:"170bg"},
            {Model:"Gle110",Price:"36000$",HorsePower:"180bg"},
            {Model:"Gle120",Price:"37000$",HorsePower:"190bg"},
        ]
    },
    Mclaren:{
        Sedan:[
            {Model:"asd",Price:"2354234$",HorsePower:"120bg"},
            {Model:"asffd",Price:"85349875$",HorsePower:"140bg"},
            {Model:"sdfgj",Price:"753245$",HorsePower:"834bg"},
        ],
        Suv:[
            {Model:"dfsgsdfg",Price:"485345$",HorsePower:"942bg"},
            {Model:"jdlfkgjfg",Price:"853458$",HorsePower:"243bg"},
            {Model:"jdfgkldfgdf",Price:"23742734$",HorsePower:"823bg"},
        ],
        Hachback:[
            {Model:"fjghmflgjh",Price:"485345$",HorsePower:"934bg"},
            {Model:"dlfkghdfljhkl",Price:"946945435$",HorsePower:"945bg"},
            {Model:"jndbldfgjld",Price:"9649569456$",HorsePower:"923bg"},
        ],
    },
   
};
araba.Ferrari.Suv.forEach(function(element,index) {
    console.log(index +'Ferrari modeli'+ element.Model+ 'Fiyatı ' + element.Price + 'Motor Gücü'+element.HorsePower);
  });