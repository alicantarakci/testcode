class Film():
    def __init__(self,film_adi):
        self.film_adi=film_adi

    @property
    def film_adi(self):
        return self.__film_adi

    @film_adi.setter
    def film_adi(self,film_adi):
        self.__film_adi=film_adi
    def bilgi_ver(self):
        print("Film Adı:"+self.film_adi)
        print("Film Türü:" + self.film_türü)
        print("Salon Numarası:" + self.salon_no)
        print("Koltuk Sırası:" + self.koltuk_sırası)
        print("Koltuk No:" + self.koltuk_no)
        print("Yiyecek:" + self.yiyecek)
        print("İçecek:" + self.icecek)

class Sinema(Film):
    def __init__(self,film_adi,film_türü,salon_no,koltuk_sırası,koltuk_no,yiyecek,icecek):
        super().__init__(film_adi)
        self.film_türü = film_türü
        self.salon_no=salon_no
        self.koltuk_sırası=koltuk_sırası
        self.koltuk_no=koltuk_no
        self.yiyecek=yiyecek
        self.icecek=icecek


        def bilgi_ver(self):
           super().__init__(bilgi_ver())

orn1=Sinema("hızlı ve öfkeli","aksiyon","2","m","5","mısır","kola")
orn1.bilgi_ver()

