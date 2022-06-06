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
console.log(phones.xiomi);
console.log('\n');

//computers.forEach(computer => console.log(computer)); olmadı burası...

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