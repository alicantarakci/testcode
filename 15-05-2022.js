let futbollTeams = ["Fenerbahce","Galatasaray","Besiktas","Trabzonspor","Bursaspor","Gaziantep"];
let futbollPlayers = ["Ferdi","Kerem","Talisca","Bakasetas","Burak","Muhammed"]
let FutbollTeamsAndPlayers = [...futbollPlayers,...futbollTeams];
console.log(FutbollTeamsAndPlayers);
console.log('\n');
futbollPlayers.shift("Ferdi");
console.log(futbollPlayers);
console.log('\n');
futbollPlayers.unshift("Arda");
console.log(futbollPlayers);
console.log('\n');
futbollPlayers.forEach(function(elem) 
{
console.log(elem);
});