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