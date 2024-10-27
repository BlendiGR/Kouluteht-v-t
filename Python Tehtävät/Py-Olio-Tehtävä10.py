import random
from PyOlioTehtävä9 import Auto

#ASSOSIAATIO PYTHON TEHTÄVÄT MODUULI 10

################ TEHTÄVÄ - 1 ############################

class Hissi:
    def __init__(self, alin_kerros, ylin_kerros):
        self.alin_kerros = alin_kerros
        self.ylin_kerros = ylin_kerros
        self.kerros = alin_kerros
    
    def siirry_kerrokseen(self, tähtäys):
        if tähtäys > self.kerros:
            self.kerros_ylös(tähtäys)
        elif tähtäys < self.kerros:
            self.kerros_alas(tähtäys)
        elif tähtäys == self.kerros:
            print(f"Olet jo kerroksessa {tähtäys}. !")

    def kerros_ylös(self, tähtäys):
        if self.ylin_kerros <= tähtäys:
            tähtäys = self.ylin_kerros
        while self.kerros < tähtäys:
            self.kerros += 1
            print(f"Olemme nyt kerroksessa {self.kerros}. !")
        print(f"Saavuimme kerrokseen {tähtäys}. !")



    def kerros_alas(self, tähtäys):
        if tähtäys < self.alin_kerros:
            tähtäys = self.alin_kerros
        while tähtäys < self.kerros:
            self.kerros -= 1
            print(f"Olemme nyt kerroksessa {self.kerros}")
        print(f"Saavuimme kerrokseen {tähtäys}. !")
            


################# - TEHTÄVÄ 2 ja 3 - ##############################

class Talo:
    def __init__(self, alin_kerros, ylin_kerros, hissimäärä):
        self.alin_kerros = alin_kerros
        self.ylin_kerros = ylin_kerros
        self.hissit = []

        for i in range(hissimäärä):
            hissi = Hissi(alin_kerros, ylin_kerros)
            self.hissit.append(hissi)
    
    def aja_hissiä(self, numero_hissi, tähtäys):
        self.hissit[numero_hissi].siirry_kerrokseen(tähtäys)
    
    def palohälytys(self):
        for hissi in self.hissit:
            hissi.siirry_kerrokseen(hissi.alin_kerros)


kerrostalo = Talo(0, 15, 2)

kerrostalo.aja_hissiä(1, 12)

kerrostalo.aja_hissiä(0, 5)

kerrostalo.aja_hissiä(1, 12)

kerrostalo.palohälytys()

################ - TEHTÄVÄ 4 - ##############

auto1 = Auto("ABC-1", 140)
auto2 = Auto("ABC-2", 200)
auto3 = Auto("ABC-3", 150)
auto4 = Auto("ABC-4", 170)
auto5 = Auto("ABC-5", 190)
auto6 = Auto("ABC-6", 100)
auto7 = Auto("ABC-7", 130)
auto8 = Auto("ABC-8", 180)
auto9 = Auto("ABC-9", 110)
auto10 = Auto("ABC-10", 160)

kisa_autot = [auto1, auto2, auto3, auto4, auto5, auto6, auto7, auto8, auto9, auto10]

class Kilpailu:
    def __init__(self, nimi, kilometrit, osallistuvat_autot):
        self.nimi = nimi
        self.kilometrit = kilometrit
        self.osallistuvat_autot = osallistuvat_autot
    
    def tunti_kuluu(self):
            for auto in self.osallistuvat_autot:
                nopeus_muutos = random.randint(-15, 15)
                auto.kiihdytä(nopeus_muutos)
                auto.kulje(1)
            if self.kilpailu_ohi():
                self.tulosta_tilanne()


    def tulosta_tilanne(self):
        self.osallistuvat_autot.sort(key=lambda auto: auto.kuljettu_matka, reverse = True)
        print (f"↓↓↓↓↓ Kilpailun {self.nimi} tämänhetkinen tilanne ↓↓↓↓↓ ")
        for auto in self.osallistuvat_autot:
            print(f"{auto}, Nopeus : {auto.tämänhetkinen_nopeus} Km/h, Kuljettu Matka : {auto.kuljettu_matka}")
            print("-" * 25)
    
    def kilpailu_ohi(self):
        for auto in self.osallistuvat_autot:
            if auto.kuljettu_matka >= self.kilometrit:
                return True
        return False
    

####### -- Suuri romuralli -- #######

romuralli = Kilpailu("Romuralli", 8000, kisa_autot )

while not romuralli.kilpailu_ohi():
    romuralli.tunti_kuluu()
    romuralli.tulosta_tilanne()