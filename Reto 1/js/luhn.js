export function luhn(input, isBarcode = false) {
    input=input.substring(0, input.length-1)
    let luhnSum = 0
    try {
        if (!isBarcode) {
            for (let i=0;i<input.length;i++) {
                if (i % 2 != 0) {
                    luhnSum += parseInt(input[i])
                }
                else {
                    let productResult=(parseInt(input[i]) * 2).toString()
                    if(productResult.length>1){
                        luhnSum+=(parseInt(productResult[0])+parseInt(productResult[1]))
                    }
                    else{
                    luhnSum += parseInt(productResult)
                }
            }
        }
        
            return 10-luhnSum % 10
        }
        else {
            for (let i=0;i<input.length;i++) {
                if (i % 2 == 0) {
                    luhnSum += (parseInt(input[i])*3)
                }
                else {
                    luhnSum += parseInt(input[i])
                }
            }
            return (luhnSum % 10 == 0) ? 0 : 10 - (luhnSum % 10)
        }
    }
    catch (error) {
        return `Invalid input: ${error}`
    }
}