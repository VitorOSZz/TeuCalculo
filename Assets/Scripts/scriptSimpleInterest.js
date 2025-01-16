function SimpleInterest(InitialValue,InterestRate,Time,InterestTime,TypeOfTime) {
    InitialValue = parseInt(InitialValue)
    InterestRate = InterestRate/100
    
    div = document.querySelector("#Result")
    if (InitialValue == '' || InterestRate == '' || Time == '') {
        console.log('Say a number')
        return div.innerHTML = '<p>Por favor, preencha todos os campos</p>'
    }
    console.log(`Initial Value :${InitialValue}`) 
    console.log(`Interest Rate :${InterestRate}`) 
    console.log(`Time          :${Time}`) 
    console.log(`Interest Time :${InterestTime}`) /* Yearly / Month of Interest*/
    console.log(`Type Of Time  :${TypeOfTime}`) /* Yearly / Month of TIME */

    /* change InterestYearly , TimeYearly to InterestMonth ,  TimeMonth*/

    if (InterestTime == 'InterestYearly') {
        InterestRate = InterestRate / 12
        console.log('InterestTime Correct')
    }
    if (TypeOfTime == 'TimeYearly') {
        Time = Time * 12
        console.log('Time Correct')
    }


    
    Interest = 0
    Month = 0
    /* Start of table, with the Month 0*/
    txt = `<table><tr><th>Mês</th><th>Juros</th><th>Total Investido</th><th>Total Juros</th><th>Total Acumulado</th></tr><tr><td>${Month}</td><td>${(InitialValue*InterestRate).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td><td>${InitialValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td><td>${Interest.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td><td>${(InitialValue+Interest).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td></tr>`
    while (Time > 0) {
        Month +=1

        Interest = Interest + ( InitialValue*InterestRate)

        console.log(Interest, ' | ', Time)
        txt += `<tr><td>${Month}</td><td>${(InitialValue*InterestRate).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td><td>${(InitialValue).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td><td>${(Interest).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td><td>${(InitialValue+Interest).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td></tr>`
        Time -=1
    }

    div.innerHTML = `${txt}</table>`
    console.log(InitialValue+Interest)


}