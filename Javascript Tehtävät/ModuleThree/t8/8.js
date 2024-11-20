document.querySelector("#start").addEventListener("click", () => {
    const whatValue = document.querySelector("#operation").value;
    const num1 = parseInt(document.querySelector("#num1").value);
    const num2 = parseInt(document.querySelector("#num2").value);

    let result;

    switch (whatValue) {
        case "add":
            result = num1 + num2;
            break;
        case "sub":
            result = num1 - num2;
            break;
        case "multi":
            result = num1 * num2;
            break;
        case "div":
            result = num1 / num2;
            break;
        default:
            result = "Invalid operation";
    }

    document.querySelector("#result").innerHTML = result;
});
