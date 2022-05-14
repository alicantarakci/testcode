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
