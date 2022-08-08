let computers ={
    notebook:[
        {name:"Asus",model:"blabla2020",color:"black"},
        {name:"Casper",model:"Excalibur",color:"yellow"},
        {name:"GameGaraj",model:"blaster7tn",color:"red"},
        {name:"Apple",model:"macbook",color:"white"},
        {name:"Monster",model:"abraa5",color:"gray"},
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
let phones = {
    iphone:[
        {model:"x",color:"red",disk:"128gb"},
        {model:"11",color:"black",disk:"64gb"},
        {model:"12",color:"blue",disk:"32gb"},
        {model:"13",color:"red",disk:"264gb"}
    ],
    samsung:[
        {model:"s20",color:"black",disk:"64gb"},
        {model:"s21",color:"blue",disk:"128gb"},
        {model:"s22",color:"white",disk:"64gb"}
    ],
    xiomi:[
        {model:"pocox3pro",color:"gray",disk:"128gb"},
        {model:"redmi",color:"red",disk:"32gb"},
        {model:"note9",color:"black",disk:"256gb"}
    ]
};
let cameras = {
    sony:[
        {model:"bla",mood:"ip",color:"white"},
        {model:"blabla",mood:"cctv",color:"black"}
    ],
    samsung: [
        {model:"blablabla",mood:"iptv",color:"orange"},
        {model:"bla",mood:"iptvcctv",color:"gray"}
    ],
};
let cars = {
    audi:[
        {name:"a5",model:"coupe",motors:"2.0",color:"red"},
        {name:"a4",model:"sedan",motors:"1.6",color:"black"},
        {name:"a3",model:"hatchback",motors:"1.5",color:"orange"}
    ],
    toyota:[
        {name:"corolla",model:"sedan",motors:"1.6",color:"white"},
        {name:"yaris",model:"hatchback",motors:"1.4",color:"yellow"},
        {name:"supra",model:"sedan",motors:"8.0",color:"OrangeAndBlack"}
    ],
    opel:[
        {name:"astra",model:"hatchback",motors:"1.6",color:"white"},
        {name:"corsa",model:"hatchback",motors:"1.8",color:"red"},
        {name:"mokka",model:"suv",motors:"1.5",color:"gray"}
    ]
};
let glass = {
    rayban:[
        {model:"AO9027 C.205 47*23*150",kime:"kadın",color:"yellow"},
        {model:"RB 2140 901 50*22*150",kime:"unisex",color:"black"},
        {model:"RB 3447 029 50*21*145",kime:"çocuk",color:"black"},
    ],
    mustang:[
        {model:"GU034134",kime:"erkek",color:"gray"},
        {model:"2136 56 17 145 01",kime:"erkek",color:"black"},
        {model:"MU 1116 COL 07 70-10",kime:"erkek",color:"blue"},
    ],
};
console.log(phones.xiomi);
console.log('\n');
var x = 1;
while  (x < 10){
    console.log(x);
    x++;
}
console.log('\n');
var y = 1 ;
do {
    console.log(y);
    y++;
}
 while (y > 10);

var t=1;
while (t < 10){
    console.log(t);
    t++;
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
		console.log("www.tarakcii.com");
	}
console.log('\n');
for (var i=1;i<=50;i++)
	{
		if(i%2==0)
			{
				console.log(i);
			}
	}
console.log('\n');
for (var i=1;i<=100;i++)
	{
		if(i%3==0 && i%5==0)
			{
				console.log(i);
			}
	}
console.log('\n');
//var i=0;
//do
//{
//      console.log((i+1) + "Merhaba");
//      i++;w
//while (i<20)
//};
for (var q=1;q<=100;q++)
	{
		if(q%2==0 && q%7==0)
			{
				console.log(q);
			}
	}
console.log('\n');
let sayilar = [1, 2, 3];

    sayilar.forEach(myFunction);
    
    function myFunction(sayi) {
      console.log(sayi);
    }
console.log('\n');
let sayı = [1, 2, 3];

    sayı.forEach((sayi, index) => {
        console.log(index + ' => ' + sayi);
    });
console.log('\n');
let deneme = ['a', 'b', 'c', 'd', 'e'];

    deneme.forEach(function(elem) {
      
      console.log(elem);
    
    });
console.log('\n');
let arr = ['a', 'b', 'c', 'd', 'e'];
 
arr.forEach(function(elem, index) {

    console.log(`${index} . ${elem}`);
});
console.log('\n');
var ı = 1;
while  (ı <= 20){
    console.log(ı);
    ı++;
}
console.log('\n');
for ( var p = 4; p < 10; p++){
    if (p==7){
        break;
    }
    console.log(p);
}
console.log('\n');
for(var m=1;m<=20;m++)
	{
		console.log("FENERBAHÇE");
	}
console.log('\n');
for (var ö=1;ö<=200;ö++)
	{
		if(ö%2==0 && ö%3==0 && ö%5==0)
			{
				console.log(ö);
			}
	}
console.log('\n');
let arap = ["mahmut0","mahmut1","mahmut2"];

    arap.forEach((sayi, index) => {
        console.log(index + ' => ' + sayi);
    });
console.log('\n');