"""
class fraction(): # x=fraction(15,10)
    def __init__(self,n,d):
        self.numerator,self.denominator=fraction.reduce(n,d)
    @staticmethod
    def gcd(a,b):
        while b!=0:
            a,b=b,a%b
        return a
    @classmethod
    def reduce(cls,n1,n2):
        g=cls.gcd(n1,n2)
        return (n1//g,n2//g)
    def __str__(self):
        return str(self.numerator)+ '/'+ str(self.denominator)
x=fraction(8,24)
print(x)
"""
"""
class Pet:
    _class_info=" pet animals "
    @classmethod
    def about(cls):
        print(" This class is about " + cls._class_info +"!")
class Dog(Pet):
    _class_info =" Men's best friend"
class Cat(Pet):
    _class_info =" Very pretty animals"
Pet.about()
Dog.about()
Cat.about()
"""
"""
AMAÇ AŞAĞIDAKİ ŞEKİLDE ÇAĞIRIM ELDE ETMEK
Pet.about()
Dog.about()
Cat.about()
"""
"""
class Calisan:
    zam_oranı=1.06
    def __init__(self,ad,soyad,maas):
        self.ad=ad
        self.soyad=soyad
        self.maas=maas
    def tamad(self):
        return "Ad:{} Soyad:{}".format(self.ad,self.soyad)
    def arttır(self):
        self.maas=self.maas*self.zam_oranı
    @classmethod
    def zam_oranı_degis(cls,yeni_oran):
        cls.zam_oranı=yeni_oran
    #personel bilgisi="Nurcan-Kaymak-4000"
    @classmethod
    def ypersonel(cls,per_bil):
        ad,soyad,maas=per_bil.split("-")
        return cls(ad,soyad,maas)
    #tel_bil="0232 461 36 23"
    @staticmethod
    def telNo(tel_bilgisi):
        return tel_bilgisi.split(" ")
tel_bilg="0233 456 67 89"
print(Calisan.telNo(tel_bilg))
"""
"""
per_bil1="Veli-Can-8000"
yeni_per1=Calisan.ypersonel(per_bil1)
print(yeni_per1.ad)
print(yeni_per1.soyad)
print(yeni_per1.maas)

per1=Calisan("Esra","Kaymak",10000)
per2=Calisan("Ali","Atalay",1000)
Calisan.zam_oranı_degis(1.08)
per1.arttır()
#print(per1.maas)
"""
class Calisan:
    zam_oranı=1.06
    def __init__(self,ad,soyad):
        self.ad=ad
        self.soyad=soyad
        #self.eposta=self.ad + self.soyad + "@sirket.com.tr"
    @property # fonksiyonun parametre giri algılanmasını sağlar
    def eposta(self):
        self.email=self.ad+self.soyad + "@sirket.com.tr"
        return self.email
    @property
    def tamad(self):
        return "Ad:{} Soyad:{}".format(self.ad,self.soyad)
    # gelenisim="Asya Kaymak"
    @tamad.setter
    def tamad(self,gelenisim):
        ad,soyad=gelenisim.split(" ")
        self.ad=ad
        self.soyad=soyad
    @tamad.deleter
    def tamad(self):
        self.ad=None
        self.soyad=None
        print("Kullanıcı Bilgileri Silindi")
per1=Calisan("nurcan","kaymak")
del per1.tamad
print(per1.ad)

"""
per1.tamad="Asya Atalay"
print(per1.ad)
print(per1.eposta)
print(per1.tamad)
"""
#print(per1.ad)

