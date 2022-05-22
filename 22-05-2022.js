let days = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
let months = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran"];
let daysMonths = [...days,...months];
let alternativeMonths = ["Ocak","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
days.forEach(function(value,index)
{
    console.log(`${index+1}. gün ${value} `);
})
console.log('\n');
days.map(x=>(console.log(x)))
console.log('\n');
console.log(daysMonths);
console.log('\n');
console.log(daysMonths[4]);
console.log('\n');
let degisme = daysMonths.indexOf("Perşembe");
daysMonths[degisme]="Alican";
console.log(daysMonths);
console.log('\n');
daysMonths.push("Temmuz");
console.log(daysMonths);
daysMonths.unshift("A");
console.log(daysMonths);
console.log('\n');
alternativeMonths.forEach(function(value,index)
{
    if(!months.includes(value)){
        months.push(value)
    }
})
console.log(months);