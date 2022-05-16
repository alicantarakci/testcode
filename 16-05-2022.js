let cities = ["İstanbul","Bursa","Çanakkale","Balıkesir","Amasya","Erzincan"]
let counties = ["Kartal","Mudanya","Küçükkuyu","Susurluk","Merzifon","Kemah"]
let citiesCounties = cities.concat(counties);
console.log(citiesCounties);
console.log('\n');
let Citiescounties = [...cities,...counties];
console.log(Citiescounties);
console.log('\n');
console.log(cities.copyWithin(2,-2));
var iterator = counties.entries();
for (let e of iterator) {
  console.log(e);
}
console.log('\n');
var iterator = cities.entries();
for (let e of iterator) {
  console.log(e);
}
console.log('\n');

