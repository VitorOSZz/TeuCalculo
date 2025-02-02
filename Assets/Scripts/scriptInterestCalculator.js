function InterestCalculate(InitialValue,InterestRate,Time,InterestTime,TypeOfTime,CompostBoolean, MonthlyValue) {
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
        if (CompostBoolean == false) {InterestRate = InterestRate / 12}
        else if (CompostBoolean == true) {
            InterestRate = ((1+InterestRate)**(1/12))-1
        }
        console.log('InterestTime Correct')
    }
    if (TypeOfTime == 'TimeYearly') {
        Time = Time * 12
        console.log('Time Correct')
    }


    
    Interest = 0
    Month = 0
    /* Start of table, with the Month 0*/
    txt = `<div id="table-scrolling"><table><tr><th>Mês</th><th>Juros</th><th>Total Investido</th><th>Total Juros</th><th>Total Acumulado</th></tr>`

    Total_invested = InitialValue
    Total_interest = 0 
    Total_money = InitialValue
    while (Time > 0) {
        
        if (CompostBoolean == false) {
            Interest = InitialValue * InterestRate /* 100 *0.01 = 1 */
            Total_invested = InitialValue /* 100 */
            Total_interest = Total_interest + Interest
            Total_money = InitialValue + Total_interest

            console.log(Interest, ' | ', Time)
            txt += `<tr><td>${Month}</td><td>${(Interest).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td><td>${(InitialValue).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td><td>${(Total_interest).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td><td>${(Total_money).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td></tr>`
        }
        else if(CompostBoolean == true) {
            Interest = Total_money * InterestRate /* 100 *0.01 = 1 */
            Total_invested += MonthlyValue /* 100 */
            Total_interest = Total_interest + Interest
            Total_money = InitialValue + Total_interest

            txt += `<tr><td>${Month}</td><td>${(Interest).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td><td>${(InitialValue).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td><td>${(Total_interest).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td><td>${(Total_money).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td></tr>`
        }
        Month +=1 
        Time -=1
    }

    div.innerHTML = `${txt}</table></div>`
    console.log(InitialValue+Interest)


}