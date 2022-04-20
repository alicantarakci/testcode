"""
class Robot():
    def __init__(self,name=None): # x=Robot("henry")
        self.name=name
    def say_hi(self):
        if self.name:
            print("Hi, I am " + self.name)
        else: #x=Robot()
            print("I am a robot without a name")
    def set_name(self,name):
        self.name=name
    def get_name(self):
        return self.name
x=Robot("Henry")
x.name
print(x.get_name())
x.set_name("Marvin") #değişiklik oluyor- isim ataması oluyor
print(x.get_name())
"""
"""
class Robot():
    def __init__(self,name,build_yr):
        self.name=name
        self.build_yr=build_yr
    def say_hi(self):
        if self.name:
            print("Hi, I am " + self.name)
        else:
            print("I am a robot without a name")
    def set_name(self,name):
        self.name=name
    def get_name(self):
        return self.name
    def set_build_yr(self,build_yr):
        self.build_yr=build_yr
    def get_build_yr(self):
        return self.build_yr
x=Robot("Henry",1998)
print(x.get_name())
print(x.get_build_yr())
x.set_build_yr(1990)
print(x.get_build_yr())
"""
"""
print(eval("4+5+9"))
x=1
print(eval("2*x+5"))
"""
"""
class A:
    def __repr__(self):
        return "42"
a=A()
print(repr(a))
"""
"""
class A:
    def __str__(self):
        return "42"
a=A()
print(repr(a))
"""
"""
import datetime
today=datetime.datetime.now()
repr_s=repr(today)
t=eval(repr_s)
print(type(t))
"""
#public-protected-private attributes
"""
class A():
    def __init__(self):
        self.pub="I am public"
        self._prot="I am protected"
        self.__priv="I am private"
x=A()
print(x.pub)
print(x._prot)
print(x.__priv) # information hiding
"""
#GİZLİ ÜYELERLE İLGİLİ KAPSAMLI ROBOT SINIFI
"""
class Robot():
    def __init__(self,name,build_yr,timer=None):
        self.__name=name
        self.__build_yr=build_yr
        self.timer=timer #ekledik PUBLIC
    def say_hi(self):
        if self.__name:
            print("Hi, I am " + self.__name)
        else:
            print("I am a robot without a name")
    def set_name(self,name):
        self.__name=name
    def get_name(self):
        return self.__name
    def set_build_yr(self,build_yr):
        self.__build_yr=build_yr
    def get_build_yr(self):
        return self.__build_yr
    def set_timer(self,timer):
        self.timer=timer
    def get_timer(self):
        return self.timer
    def __repr__(self):
        return "Robot(" + self.__name + "," + str(self.__build_yr) + ")"
    def __str__(self):
        return "Name: " + self.__name + "Build year: " + str(self.__build_yr)

x=Robot("Henry", 1993)
y=Robot("Marvin",1997)
#x.name şeklinde gizli veriye ulaşamadım
print(x.get_name())  #getter metodu aracılığı ulaştım
x.set_name("Uzo")
print(x.get_name())
print(y.get_build_yr()) # inşa yılını okumak için kullanılır
z=Robot("helo",1990,"12 gün")
print(z.timer)
print(z.get_timer())
p=str(x)
print(p,type(p))
r=repr(z)
print(r,type(r))
"""
#YIKICI METOT __del__
"""
from test_dosyası import Robot
x=Robot("henry")
"""
"""
class Personel:
    def __init__(self,name,age):
        self.name=name
        self.age=age
a=Personel("Ela",25)
b=Personel("Hasan",35)
#del a #örneğin kendisini silebilir
del a.age #örneğin özniteliğini silebilirm
print(a.name)

a.name
"""
"""
Student—sınıf yaz
Sınıf özniteliği=Number_of_students
Her örnek oluştusunda +1
Her örnek silinişinde -1 
"""
"""
class Student():
    number_of_students=0
    def __init__(self,name,age):
        self.name=name
        self.age=age
        Student.number_of_students +=1
    def __del__(self):
        Student.number_of_students -= 1

print(Student.number_of_students)
s1=Student("Ayşe Arman",55)
s2=Student("Ali Atalay",30)
print(Student.number_of_students)
del s1
print(Student.number_of_students)
del s2
print(Student.number_of_students)
print(s2.name)
"""
#Sınıf özniteliğini kullanarak, örnek sayısını nasıl toplatabilirim
"""
class C:
    counter=0
    def __init__(self):
        C.counter+=1
        #type(self).counter+=1
    def __del__(self):
        C.counter-=1
x=C()
y=C()
print(C.counter)
del y
print(C.counter)
"""
"""
class Robot:
    __counter=0
    def __init__(self):
        Robot.__counter+=1
        #type(self).counter+=1
    def Robotinstances(self):
        return Robot.__counter
x=Robot()
print(x.Robotinstances()) #örnek aracılığı ile gizli veriye eriştim
Robot.Robotinstances() #self olmadığı içi hata verir
"""
"""
class Robot:
    __counter=0
    def __init__(self):
        Robot.__counter+=1
        #type(self).counter+=1
    def Robotinstances():
        return Robot.__counter
x=Robot()
#print(x.Robotinstances()) #hata veriyor
print(Robot.Robotinstances()) #bu şekilde erişiliyor
"""
class Robot:
    __counter=0
    def __init__(self):
        Robot.__counter+=1
        #type(self).counter+=1
    @staticmethod
    def Robotinstances():
        return Robot.__counter
x=Robot()
y=Robot()
print(y.Robotinstances())
#x ya da y aracılı ile gizli sınıf özniteliğine eriştik (__counter)
print(Robot.Robotinstances())
