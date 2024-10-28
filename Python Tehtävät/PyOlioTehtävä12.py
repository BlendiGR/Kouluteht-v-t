######## Tehtävät 12 - Ulkoisen rajapinnan käyttö #########
import requests as req


print("Tehtävät 1, 2")
teht = input("Anna tehtävä numero: ")

############ - TEHTÄVÄ 1 - ###################
if teht == "1":
    chucknorris = "https://api.chucknorris.io/jokes/random"

    vastauschuck = req.get(chucknorris)

    if vastauschuck.status_code == 200:
        data = vastauschuck.json()
        print(data["value"])
    else:
        print("Virhe saadakseen dataa")




############ - TEHTÄVÄ 2 - ################

if teht == "2":
    def tulosta_sää_tiedot():
        kaupunki = input("Minkä kaupungin sään haluat katsoa? :  ").lower().capitalize()
        säävastaus = req.get(f"https://api.openweathermap.org/data/2.5/weather?q={kaupunki}&appid=3efaac6e9515fa2f6208841406ef31ad&lang=fi")

        if säävastaus.status_code == 200:
            informaatio = säävastaus.json()
            description = informaatio["weather"][0]["description"]
            kelvin_temp = informaatio["main"]["temp"]
            celsius_temp = round(kelvin_temp - 273.15)

            print(f"City : {kaupunki}, {celsius_temp}° C, {description.capitalize()}")
            
        else:
            print("Virhe saadakseen dataa!")


    tulosta_sää_tiedot()