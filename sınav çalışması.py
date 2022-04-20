"""
class Restorant():
    yiyecek={"Et":25,"Tavuk":20,"Balık":25,"Köfte":15}
    icecek={"Su":1,"Ayran":2,"Kola":3,"Fanta":3}
    tatlılar={"Baklava":8,"Söbiyat":8,"Künefe":10}
    print()
    print("Yiyecekler: {}".format(yiyecek))
    print("İçecekler: {}".format(icecek))
    print("Tatlılar:{}".format(tatlılar))
    print()
    def __init__(self,ucret=0):
        self.hesap=ucret
        print("Hesap:{}".format(self.hesap))

    def yiyecekSec(self,secilenyiyecek):
        self.hesap+=self.yiyecek[secilenyiyecek]
    def icecekSec(self,secilenyiyecek):
        self.hesap+=self.icecek[secilenyiyecek]
    def tatlıSec(self,secilenyiyecek):
        self.hesap+=self.tatlılar[secilenyiyecek]
    def Hesap(self):
        print("Ödenekcek miktar: {}".format(self.hesap))
Nurcan=Restorant()
Nurcan.yiyecekSec(input("Yiyecek:"))
Nurcan.icecekSec(input("İçecek:"))
Nurcan.tatlıSec(input("Tatlılar:.."))
Nurcan.Hesap()
"""
"""
class BankaHesabı():
    def __init__(self,ilkmiktar=0):
        self.kalanpara=ilkmiktar
        print("Yeni Hesap {} ile açılmıştır".format(ilkmiktar))
    def kalanPara(self):
        print("Kalan Para: {}".format(self.kalanpara))
    def ParaYatır(self,yatılıcakmiktar):
        self.kalanpara+=yatılıcakmiktar
    def ParaCek(self,cekilecekmiktar):
        self.kalanpara-=cekilecekmiktar
    def Havale(self,miktar,havaleedilecekisi):
        self.ParaCek(miktar)
        havaleedilecekisi.ParaYatır(miktar)
Ali=BankaHesabı(10000) #Ali için banka hesabı oluştu
Nurcan=BankaHesabı(5000)#Nurcan için baka hesabı oluştu
Ali.ParaYatır(2000) #Alinin hesabına 2000 yatırdım
Ali.kalanPara()#Alinin kalan parası
Ali.Havale(4500,Nurcan) # ALinin hesabından Nurcan'ın hesabına 4500 aktardım
Nurcan.kalanPara()#Nurcanın kalan parası
Ali.kalanPara()#Alinin kalan parası
"""
"""
class Robot():
    def __init__(self,name,build_year,potential_physical=0.5,potential_psychic=0.2):
        self.name=name
        self.build_year=build_year
        self.__potential_physical=potential_physical
        self.__potential_psychic=potential_psychic
    @property
    def condition(self):
        s=self.__potential_physical+self.__potential_psychic
        if s <=-1:
            return "I feel miserable"
        elif s<=0:
            return "I feel bad"
        elif s<=0.5:
            return "Could be worse"
        elif s<=1:
            return "Seems to be ok"
        else:
            return "Great"
rob1=Robot("Karmen",1990,0.2,0.5)
rob2=Robot("Karmen",1990,0.5,0.7)
print(rob1.condition)
print(rob2.condition)
print(rob1.name) # name: public erişim sağlandı
print(rob1.potential_physical) #potential_physical: private erişilemedi HATa veridi
"""
import os
mevcutdizin=os.getcwd()
print(os.listdir(mevcutdizin))
for i in os.listdir(mevcutdizin):
    if i.endswith('.py'):
        print(i)
"""
import os
class DirectorySize:
    def __get__(self, obj, objtype=None):
        return len(os.listdir(obj.dirname))
class Directory:
    size = DirectorySize()              # Descriptor instance
    def __init__(self, dirname):
        self.dirname = dirname          # Regular instance attribute
a=Directory('Songs')
print(a.size)
os.remove('Songs/cat.jpg')
"""
import logging
logging.basicConfig(filename="kediler.txt",level=logging.INFO)
class LoggedAgeAccess:
    def __get__(self, obj, objtype=None):
        value = obj._age
        logging.info('Accessing %r giving %r', 'age', value)
        return value
    def __set__(self, obj, value):
        logging.info('Updating %r to %r', 'age', value)
        obj._age = value

class Person:
    age = LoggedAgeAccess()             # Descriptor instance
    def __init__(self, name, age):
        self.name = name                # Regular instance attribute
        self.age = age                  # Calls __set__()
    def birthday(self):
        self.age += 1                   # Calls both __get__() and       __set__()

nurcan=Person("Nurcan G.",35)
ali=Person("Ali Ş.",20)
ali.birthday()
print(nurcan.name)
print(nurcan.age)