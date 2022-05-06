let url = "https://www.sadikturan.com";
let kursAdi = "Komple Web Geliştirme Kursu";
let sonuc;
sonuc = url.length;
sonuc = kursAdi.split(" ").length;
sonuc = url.startsWith("https");
if (sonuc) {
    console.log("evet başlıyor");
}

if (kursAdi.indexOf("Eğitimi") > -1) {
    console.log("evet var");
} else {
    console.log("hayır yok");
}

kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ","-");
kursAdi = kursAdi.replace("ş","s").replace("ı","i");

sonuc = `${url}/${kursAdi}`;

console.log(sonuc);