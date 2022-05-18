let notebooks = ["Acer","Monster","Toshiba","GameGaraj","Dell","Asus"];
let accessorys = ["Mause","Keyboard","Headphone","Monitor"];
let accessorysModels = ["Logitech","Rampage","Steelseries","Asus"];
let setups =[...notebooks,...accessorys,...accessorysModels];
console.log(setups);
console.log('\n');
console.log(setups[10]);
console.log('\n');
console.log(setups.length);
setups.push ("Acer");
console.log(setups);
console.log('\n');
setups.sort();
console.log(setups);
setups.forEach(function(hello){
    console.log(`En iyi bilgisayarlar ve ekipmanları ${hello}`);});
  console.log('\n');
  var Setupslist = setups.entries();
  for (let e of Setupslist) {
    console.log(e);
  }