import { luhn } from "./luhn.js";

function validateBarcode(input){
    if(toString(luhn(input,true))!=""){
        return luhn(input,true) == input[input.length-1] ? true : false
    } 
    else{
        return luhn(input,true)
    }
}

export function getCodeInfo(input){
    if(validateBarcode(input)){
        let codeCountry="Unknown"
        if(input[0]=="0"){codeCountry="USA"}
        else if(input.substring(0,3)=="350"){codeCountry="Bulgaria"}
        else if(input.substring(0,2)=="50"){codeCountry="England"}
        else if(input.substring(0,3)=="539"){codeCountry="Ireland"}
        else if(input.substring(0,3)=="560"){codeCountry="Portugal"}
        else if(input.substring(0,2)=="70"){codeCountry="Norway"}
        else if(input.substring(0,3)=="759"){codeCountry="Venezuela"}
        else if(input.substring(0,3)=="850"){codeCountry="Cuba"}
        else if(input.substring(0,3)=="890"){codeCountry="India"}
        return "Valido - "+codeCountry;
    }
    else if(!validateBarcode(input)){
        return("Invalid barcode input!!")
    }
    else{
        return(validateBarcode(input))
    }
}