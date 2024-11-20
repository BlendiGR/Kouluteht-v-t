document.querySelector("#start").addEventListener("click", () => {
    const inputti = document.querySelector("#calculation").value;
    const laskut = ["+", "-", "*", "/"];

    for (let lasku of laskut) {
        if (inputti.includes(lasku)) {
            const paikka = inputti.indexOf(lasku);
            const vasenLuku = parseInt(inputti.slice(0, paikka).trim()); 
            const oikeaLuku = parseInt(inputti.slice(paikka + 1).trim()); 
            
           
            let tulos;
            switch (lasku) {
                case "+":
                    tulos = vasenLuku + oikeaLuku;
                    break;
                case "-":
                    tulos = vasenLuku - oikeaLuku;
                    break;
                case "*":
                    tulos = vasenLuku * oikeaLuku;
                    break;
                case "/":
                    tulos = vasenLuku / oikeaLuku
                    break;
            }

            document.querySelector("#result").innerHTML = `${tulos}`;
            return; 
        }
    }
});
