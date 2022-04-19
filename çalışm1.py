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
x=Robot("Marvin",1993)
y=Robot("Jesus",2020)