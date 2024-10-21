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
auto2 = Auto("ABC-3", 150)