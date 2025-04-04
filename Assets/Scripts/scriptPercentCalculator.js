function ThisIsNan(First,Second) {
    console.log(`${First}`)
    console.log(`${Second}`)
    console.log('Error: Nan')
    return resultID.innerHTML = `Diga Algum número!`
}

/* Calculate Percent of total */

function CalculatePercentOfTotal(HowPercent,HowMuchIs) {
    resultID = document.querySelector("#ResultOfTotalFirst")
    console.log(`${HowPercent}, ${HowMuchIs}`)

    if (HowPercent == '' || HowMuchIs =='') {
        return ThisIsNan(HowPercent,HowMuchIs)
    }


    result = (HowPercent/100)*HowMuchIs
    resultID.innerHTML = `Resultado: <span class="Highlight">R$ ${result}</span>`
    console.log(result)
}

/* */

function PercentOf(Percent, Value) {

    resultID = document.querySelector("#ResultOfTotalSecond")
    console.log(Percent,Value)

    if (Percent == '' || Value == '') {
        return ThisIsNan(Percent,Value)
    }

    result = ((Percent/Value)*100).toFixed('2')

    resultID.innerHTML = `Resultado: ${result}%`
}

function DifferenceBeforeAfter(Before, After) {
    Before = parseInt(Before)
    After = parseInt(After)

    resultID = document.querySelector("#ResultOfTotalThird")
    console.log(Before,After)

    result = (((After-Before)/Before)*100).toFixed('4')


    if (Before == '' || After == ''){
        ThisIsNan(Before,After)
    }
    else if (After > Before) {
        console.log('Increased')
        resultID.innerHTML = `Aumentou:  <span class="Highlight">${result}%</span>`
    }
    else if(Before > After) {
        console.log('Decreased')
        resultID.innerHTML = `Diminuiu:  <span class="Highlight">${result}%</span>`
    }
    else if(Before == After) {
        console.log('The value is the same')
        resultID.innerHTML = "O valor é o mesmo."
    }




}