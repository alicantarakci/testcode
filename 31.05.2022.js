let Kisi = {
    isim: 'Ahmet',
    soyisim: 'Cancan',
    yas: 38,
    bilgi: ['C#', 'CSS', 'PHP'],
    site:"https:www.yazilimbilisim.net"
};
 
let jsonKisi = JSON.stringify(Kisi);
 
 console.log(jsonKisi);
 console.log('\n');
 let Sayfa = {
    adres: 'https://www.yazilimbilisim.net/javascript/javascript-dersleri/',
    logo: 'https://www.yazilimbilisim.net/wp-content/uploads/2018/02/yenilogox120.jpg',
    kategori: 'JavaScript',
    yayinTarihi: 'Sun, 11 Feb 2018 15:07:43 +0000',
    yazar:'hayri'
};
 
let jsonSayfa = JSON.stringify(Sayfa);
 
 console.log(jsonSayfa);
 console.log('\n');
 {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      }
    }