let days = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
let months = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran"];
let daysMonths = [...days,...months];
let alternativeMonths = ["Ocak","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
days.forEach(function(value,index)
{
    console.log(`${index+1}. gün ${value} `);
})
console.log('\n');
days.map(x=>(console.log(x)))
console.log('\n');
console.log(daysMonths);
console.log('\n');
console.log(daysMonths[4]);
console.log('\n');
let degisme = daysMonths.indexOf("Perşembe");
daysMonths[degisme]="Alican";
console.log(daysMonths);
console.log('\n');
daysMonths.push("Temmuz");
console.log(daysMonths);
daysMonths.unshift("A");
console.log(daysMonths);
console.log('\n');
alternativeMonths.forEach(function(value,index)
{
    if(!months.includes(value)){
        months.push(value)
    }
})
console.log(months);
let cars={
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