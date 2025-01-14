function CalculatePercentOfTotal(HowPercent,HowMuchIs) {
    resultID = document.querySelector("#ResultOfTotal")
    console.log(`${HowPercent}, ${HowMuchIs}`)

    if (HowPercent == '' || HowMuchIs =='') {
        console.log(`${HowPercent}`)
        console.log(`${HowMuchIs}`)
        console.log('lol')
        return resultID.innerHTML = `Diga Algum número!`
    }


    result = (HowPercent/100)*HowMuchIs
    resultID.innerHTML = `Resultado: <span class="Highlight">R$ ${result}</span>`
    console.log(result)
}