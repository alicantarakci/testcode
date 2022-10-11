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
models[guys]="RX8";
console.log(models);
let sira = models.indexOf("Corsa");
console.log(sira);
models[sira]="Astra";
console.log(models);