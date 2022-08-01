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
let data={
    kisiler:[
        {name:"Alican",surname:"Tarakci",age:"22"},
        {name:"Tolga",surname:"Cinar",age:"42"},
        {name:"Arda",surname:"Capar",age:"19"}
    ],
};
data.kisiler.forEach(function(elem) {
  
    console.log(elem);
});

cars.audi.forEach(function(elem) {
  
    console.log(elem);
});

//cars.toyota.forEach(function (asd, index) {
  //console.log(`${index} . ${asd}`);
//});