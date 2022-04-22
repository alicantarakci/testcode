"""
class Robot(): # parent class--super class--base class
    def __init__(self,name,build_year):
       self.name=name
       self.build_year=build_year
    def say_hi(self):
        print("Hi, I am " + self.name)
        print("I am build in "+ self.build_year)
class PhysicianRobot(Robot): #child class - sub class
    pass
x=Robot("Marvin","1992")
doc=PhysicianRobot("Kepler","1989") # child class instance
print(doc.build_year)
doc.say_hi() # parent class metodunu aktarıyor
"""
"""
class Robot(): # parent class--super class--base class
    def __init__(self,name,build_year):
       self.name=name
       self.build_year=build_year
    def say_hi(self):
        print("Hi, I am " + self.name)
        print("I am build in "+ self.build_year)
class PhysicianRobot(Robot): #child class - sub class
    def __init__(self,name,build_year,color):
        #Robot.__init__(self,name,build_year)
        super().__init__(name,build_year)
        self.color=color
    def say_hi(self): #overriding
        super().say_hi()
        #print("Hi, I am " + self.name)
        #print("I am build in "+ self.build_year)
        print("Its color is "+ self.color)
doc=PhysicianRobot("Marvin","1990","Blue") #child class nesnesi
x=Robot("Elegant","1990") #parent class
doc.say_hi()
Robot.say_hi(x) # parent class içerisindeki say_hi() metoduna erişim
"""
"""
import random
class Robot():
    def __init__(self,name):
        self.name=name
        self.health_level=random.random()
    def say_hi(self):
        print("Hi I am " + self.name)
    def needs_a_doctor(self):
        if self.health_level<0.8:
            return True
        else:
            return False
class PhysicianRobot(Robot):
    def say_hi(self):
        print("Everything will be okay !")
        print(self.name+ "takes care of you !")
    def heal(self,robo):
        robo.health_level=random.uniform(0.8,1)
        print(robo.name + "has been healed by " + self.name + "!")

x=Robot("Marvin")
doc=PhysicianRobot("Dr Kepler")
print(x.health_level)
print(x.needs_a_doctor())
doc.heal(x)
print(x.health_level)
"""
"""
Calısan sınıfı--parent class--
nesne öznitelik:
isim maas departman
metotları:
bilgilerigoster--format kullan
departmandegistir(yeni_departman)
"""
"""
class Calisan():
    def __init__(self,isim,maas,departman):
        self.isim=isim
        self.maas=maas
        self.departman=departman
    def bilgilerigoster(self):
        print("Calısan Sınıfının Bilgileri:..")
        print("İsim: {} \nMaas: {} \nDepartman: {}\n".format(self.isim,self.maas,self.departman))
    def depart_degis(self,yeni_departman):
        print("Departman değiştiriliyor...")
        self.departman=yeni_departman

class Yonetici(Calisan):
    def __init__(self,isim,maas,departman,kisi_sayısı):
        #Calisan.__init__(self,isim,maas,departman)
        super().__init__(isim,maas,departman)
        self.kisi_sayısı=kisi_sayısı
    def zam_yap(self,zam_miktarı):
        self.maas+=zam_miktarı
    def bilgilerigoster(self):
        super().bilgilerigoster()
        print("Sorumlu olduğu kişi sayısı:..", self.kisi_sayısı)
yön1=Yonetici("Hasan Kara",20000,"IT","500")
yön1.depart_degis("İnsan Kaynakları")
print(yön1.departman)
yön1.zam_yap(5000)
print(yön1.maas)
yön1.bilgilerigoster() # yeni, overriding edilmiş bilgilerigöster metodunu kullanır
Cal1=Calisan("Ceyda Düvenci","10000","Tanıtım")
yon1=Yonetici("Ceyda Düvenci","10000","Tanıtım",500)
print(issubclass(Yonetici,Calisan))
print(isinstance(yön1,Calisan))
print(isinstance(Cal1,Yonetici))
"""
"""
Rectangle class --- parent class
width height center
metot:
__repr__() bilgileri versin
compute_area-- alan hesabı
-----------------------------
Square class--subclass
"""
class Rectangle():
    def __init__(self,width, height, center=(0,0)):
        self.width=width
        self.height=height
        self.center=center
    def __repr__(self):
        return "Rectangle( width={}, height={}, center={})".format(self.width,self.height,self.center)
    def computer_area(self):
        return self.width*self.height
class Square(Rectangle):
    def __init__(self,side,center=(0,0)):
        super().__init__(side,side,center)
rec1=Rectangle(5,10)
sqr1=Square(10) #child class
print(sqr1.computer_area())
print(rec1.computer_area())
#sqr1.__repr__()
print(sqr1)