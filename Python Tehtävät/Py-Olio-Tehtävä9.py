import random


#KOULUTEHTÄVÄT 

#-----Luokka, olio, alustaja-------#

#----- TEHTÄVÄT 1 - 4 -----#

class Auto:

    #-----TEHTÄVÄ - 1 -----#

    def __init__(self, rekisteritunnus, huippunopeus):
        self.rekisteritunnus = rekisteritunnus
        self.huippunopeus = huippunopeus
        self.tämänhetkinen_nopeus = 0
        self.kuljettu_matka = 0
    
    #----- TEHTÄVÄ - 2-----#

    def kiihdytä(self, nopeuden_muutos):
        self.tämänhetkinen_nopeus += nopeuden_muutos
        if self.tämänhetkinen_nopeus > self.huippunopeus:
            self.tämänhetkinen_nopeus = self.huippunopeus
        elif self.tämänhetkinen_nopeus < 0:
            self.tämänhetkinen_nopeus = 0

    #----- TEHTÄVÄ - 3 -----#

    def kulje(self, tuntimäärä):
        self.kuljettu_matka += self.tämänhetkinen_nopeus * tuntimäärä


Mercedes = Auto("ESH-107", 240)
print(f"Auton rekkari : {Mercedes.rekisteritunnus} ja huippunopeus on {Mercedes.huippunopeus}Km/h.") 

Mercedes.kiihdytä(30)
Mercedes.kiihdytä(70)
Mercedes.kiihdytä(50)

print(f"Auton tämänhetkinen nopeus on {Mercedes.tämänhetkinen_nopeus} Km/h.")

Mercedes.kiihdytä(-200)

print(f"Hätäjarrutuksen jälkeen auton nopeus on : {Mercedes.tämänhetkinen_nopeus} Km/h.")

Mercedes.kiihdytä(100)
Mercedes.kulje(10)

print(f"Mercedes kulkee tällä hetkellä {Mercedes.tämänhetkinen_nopeus}km/h ja matkaa on kulunut {Mercedes.kuljettu_matka}km")

#----- TEHTÄVÄ -  4 -----#
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

kilpailu = True

while kilpailu:
     for kisa_auto in kisa_autot:
        nopeus_muutos = random.randint(-15, 15)
        kisa_auto.kiihdytä(nopeus_muutos)

        kisa_auto.kulje(1)

        if kisa_auto.kuljettu_matka >= 10000:
            kilpailu = False
            break
    
kisa_autot.sort(key=lambda auto: auto.kuljettu_matka, reverse = True) # ------ OLEN KATSONUT TÄMÄN NETISTÄ! -------
sija = 0
for kisa_auto in kisa_autot:
    sija +=1
    print(f"{sija}. Auton rekkari {kisa_auto.rekisteritunnus}, kuljettu matka {kisa_auto.kuljettu_matka} km!")

print("Kisa loppu")

