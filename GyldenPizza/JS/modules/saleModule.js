const SaleMod = (function(){
    /* Lager arrays for data i grafer osv. */
    const yearlyIncomeArray = [
        {year:2015, income: 20000},
        {year:2016, income: 40000},
        {year:2017, income: 10000},
        {year:2018, income: 15000},
        {year:2019, income: 17000},
        {year:2020, income: 34000}
    ];
    const weeklyIncomeArray = [
        {day:"Mandag", income: 2},
        {day:"Tirsdag", income: 10},
        {day:"Onsdag", income: 20},
        {day:"Torsdag", income: 5},
        {day:"Fredag", income: 13},
        {day:"Lørdag", income: 23},
        {day:"Søndag", income: 17}
    ];
    const dailyIncomeArray = [
        {item:"pizza", income: 200000},
        {item:"drink", income: 200000}
    ];
    /* regner ut vekst fra forrige år */
    const changeForNewYear = () =>{
        let a = yearlyIncomeArray[yearlyIncomeArray.length-1].income;
        let b = yearlyIncomeArray[yearlyIncomeArray.length-2].income;
        let result = a/b;
        if(result <= 1){
            result = ((1 - result)*100)*-1;
        }
        else{
            result = ((result-1)*100);
        }
        document.getElementById("change-out").innerHTML = `${result}%`;
    }
    /* Returnerer fra spesifike arrays */
    const getIncomeFromDailyIncome = (index) => {
        return dailyIncomeArray[index].income;
    }
    const getIncomeFromWeeklyIncome = (index) => {
        return weeklyIncomeArray[index].income;
    }
    const getDayFromWeeklyIncome = (index) => {
        return weeklyIncomeArray[index].day;
    }
    const getYearFromYearlyIncome = (index) => {
        return yearlyIncomeArray[index].year;
    }
    const getIncomeFromYearlyIncome = (index) => {
        return yearlyIncomeArray[index].income;
    }
    /* legger til ny dag i dag diagram og uklige, sletter også det den første dagen*/
    const addNewDay = (pizzaIn, drinkIn) => {
        dailyIncomeArray[1].income = drinkIn;
        dailyIncomeArray[0].income = pizzaIn;
        let sum = pizzaIn+drinkIn;
        let newDay = {
            day: weeklyIncomeArray[0].day,
            income: sum
        }
        weeklyIncomeArray.splice(0, 1);
        weeklyIncomeArray.push(newDay);
    }
    /* Legger til nytt år og fjerner siste */
    const addNewYear = (incomeYear)=>{
        let year = yearlyIncomeArray[5].year+1;
        let newYear = {
            year: year,
            income: incomeYear
        }
        yearlyIncomeArray.splice(0, 1);
        yearlyIncomeArray.push(newYear);
    }
    /* Redigerer siste år */
    const editNewYear = (incomeYear)=>{
        yearlyIncomeArray[yearlyIncomeArray.length-1].income = incomeYear;
    }
    /* Redigerer siste dag */
    const editNewDay = (pizzaIn, drinkIn) =>{
        let sum = pizzaIn+drinkIn;
        dailyIncomeArray[0].income = pizzaIn;
        dailyIncomeArray[1].income = drinkIn;
        let arrayLength = weeklyIncomeArray.length;
        weeklyIncomeArray[arrayLength-1].income = sum;
    }
    /* Henter ut arrays */
    const getYearlyIncome = () => yearlyIncomeArray;
    const getWeeklyIncome = () => weeklyIncomeArray;
    const getDailyIncome = () => dailyIncomeArray;

    return { yearlyIncomeArray, changeForNewYear,weeklyIncomeArray, dailyIncomeArray, getYearlyIncome, getWeeklyIncome, getDailyIncome, getYearFromYearlyIncome, getIncomeFromYearlyIncome, getIncomeFromDailyIncome, getIncomeFromWeeklyIncome, getDayFromWeeklyIncome, addNewDay, addNewYear, editNewYear, editNewDay};
 }());
 export default SaleMod;