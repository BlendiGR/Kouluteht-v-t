from PyOlioTehtävä9 import Auto

# PY OLIO TEHTÄVÄT 11 - PERITYTYMINEN 

########## - TEHTÄVÄ 1 - ############

class Julkaisu:
    def __init__(self, nimi):
        self.nimi = nimi

class Kirja(Julkaisu):
    def __init__(self, nimi, julkaisija, sivumäärä):
        super().__init__(nimi)
        self.sivumäärä = sivumäärä
        self.julkaisija = julkaisija

    
    def tulosta_tiedot(self):
        print(f"Kirjan nimi : {self.nimi }, kirjoittaja :  {self.julkaisija}, sivumäärä : {self.sivumäärä} sivua.")

class Lehti(Julkaisu):
    def __init__(self, nimi, päätoimittaja):
        super().__init__(nimi)
        self.päätoimittaja = päätoimittaja
    
    def tulosta_tiedot(self):
        print(f"Lehden nimi : {self.nimi}, päätoimittaja : {self.päätoimittaja}.")

aku_ankka = Lehti("Aku Ankka", "Aki Hyyppä")

aku_ankka.tulosta_tiedot()

hytti = Kirja("Hytti n:o 6", "Rosa Liksom", 200)

hytti.tulosta_tiedot()

############# - TEHTÄVÄ 2 - #############

class Sähköauto(Auto):
    def __init__(self, rekisteritunnus, huippunopeus, akkukapasiteetti):
        super().__init__(rekisteritunnus, huippunopeus)
        self.akkukapasiteetti = akkukapasiteetti

class Polttomoottoriauto(Auto):
    def __init__(self, rekisteritunnus, huippunopeus, bensatankki):
        super().__init__(rekisteritunnus, huippunopeus)
        self.bensatankki = bensatankki

Tesla = Sähköauto("ABC-15", 180, 52.5)

bensa_auto = Polttomoottoriauto("ACD-123", 165, 32.3)

Tesla.kiihdytä(100)
Tesla.kulje(3)
print(f"Tesla on kulkenut {Tesla.kuljettu_matka}  !")

bensa_auto.kiihdytä(120)
bensa_auto.kulje(3)
print(f"Bensa-auto on kulkenut {bensa_auto.kuljettu_matka} km !")