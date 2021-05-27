const SaleMod = (function(){
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

    const getYearlyIncome = () => yearlyIncomeArray;
    const getWeeklyIncome = () => weeklyIncomeArray;
    const getDailyIncome = () => dailyIncomeArray;

    return {getYearlyIncome, getWeeklyIncome, getDailyIncome, getYearFromYearlyIncome, getIncomeFromYearlyIncome, getIncomeFromDailyIncome, getIncomeFromWeeklyIncome, getDayFromWeeklyIncome};
 }());
 export default SaleMod;