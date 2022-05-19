let cars = ["Mazda","Opel","Citroen","Fiat","Ferrari","Bentley"];
let models = ["323","Corsa","C4","500L","California","Continental"];
let futbollTeams = ["Fenerbahce","Galatasaray","Besiktas","Trabzonspor","Bursaspor","Gaziantep"];
let futbollPlayers = ["Ferdi","Kerem","Talisca","Bakasetas","Burak","Muhammed"]
let Randoms = [...cars,...models,...futbollPlayers,...futbollTeams];
console.log(carsModels);
console.log('\n');
Randoms.forEach(function(hello){
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
