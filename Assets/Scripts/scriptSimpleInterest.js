function SimpleInterest(InitialValue,InterestRate,Time,InterestTime,TypeOfTime) {
    InitialValue = parseInt(InitialValue)
    InterestRate = InterestRate/100

    if (InitialValue == '' || InterestRate == '' || Time == '') {
        return console.log('Say a number')
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

    /* "J = C ∙ i ∙ t" */
    Interest = 0
    while (Time > 0) {

        Interest = Interest + ( InitialValue*InterestRate)

        console.log(Interest, 'LOL', Time)
        Time -=1
    }

    console.log(InitialValue+Interest)

}