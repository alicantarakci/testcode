let data={
    kisiler:[
        {name:"Alican",surname:"Tarakci",age:"22"},
        {name:"Tolga",surname:"Cinar",age:"42"},
        {name:"Arda",surname:"Capar",age:"19"}
    ],
    islem:"get" 
};
console.log(data);
var kisiler=document.getElementsByClassName("kisiler")[0];

for(let getir in data)
{
    console.log(data[getir]);
}