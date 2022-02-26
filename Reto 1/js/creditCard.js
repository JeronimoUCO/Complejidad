import { luhn } from "./luhn.js";

function validateCard(input) {
    if (toString(luhn(input))!="") {
        return luhn(input) == input[input.length - 1] ? true : false
    }
    else {
        return luhn(input)
    }
}

export function getDataFromCard(input) {
    if (validateCard(input)) {
        let cardEmissor = "Unknown"
        if (input[0] == "4") { cardEmissor = "Visa" }
        else if (input[0] == "5") { cardEmissor = "Mastercard" }
        else if (input.substring(0, 2) == "34" || input.substring(0, 2) == "37") { cardEmissor = "American Express" }
        return `Valido - ${cardEmissor}`
    }
    else if (!validateCard(input)) {
        return ("Your input has proven invalid!!")
    }
    else {
        return (validateCard(input))
    }
}