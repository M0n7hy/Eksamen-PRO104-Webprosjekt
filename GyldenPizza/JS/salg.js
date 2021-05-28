import SaleMod from './modules/saleModule.js';

let incomeAvr = document.getElementById("income-avr");
let expensesDiv = document.getElementById("expenses-out");
let popupWindow = document.getElementById("popup-container");
let editYear = document.getElementById("edit-year");
let addYear = document.getElementById("add-year");
let editDay = document.getElementById("edit-daily");
let addDay = document.getElementById("add-daily");
let incomeYearDiv = document.querySelectorAll(".income");
let incomeDayDiv = document.querySelectorAll(".daily");
let incomeWeekliyDiv = document.querySelectorAll(".weekly");
var c = document.getElementById('chart');
var ctx = c.getContext('2d');
let yearLables = [ SaleMod.getYearFromYearlyIncome(0), SaleMod.getYearFromYearlyIncome(1), SaleMod.getYearFromYearlyIncome(2), SaleMod.getYearFromYearlyIncome(3), SaleMod.getYearFromYearlyIncome(4), SaleMod.getYearFromYearlyIncome(5)]
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: yearLables,
        datasets: [{
            label: 'Inntekter',
            data: [SaleMod.getIncomeFromYearlyIncome(0), SaleMod.getIncomeFromYearlyIncome(1), SaleMod.getIncomeFromYearlyIncome(2), SaleMod.getIncomeFromYearlyIncome(3), SaleMod.getIncomeFromYearlyIncome(4), SaleMod.getIncomeFromYearlyIncome(5)],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                display: false
            },
            x: {
                display: false
            }
        }
    }
});


var daily = document.getElementById('daily-sale');
var ctxDaily = daily.getContext('2d');
var dailyChart = new Chart(ctxDaily, {
    type: 'doughnut',
    data: {
        labels: ['Pizza', 'Drikke'],
        datasets: [{
            label: 'Daglige inntekter',
            data: [SaleMod.getIncomeFromDailyIncome(0), SaleMod.getIncomeFromDailyIncome(1)],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    
    options: {
        scales: {
            y: {
                beginAtZero: true,
                display: false
            },
            x: {
                display: false
            }
        }
    }
    
});
var weekly = document.getElementById('weekly-sale');
var ctxweekly = weekly.getContext('2d');
var weeklyChart = new Chart(ctxweekly, {
    type: 'bar',
    data: {
        labels: [SaleMod.getDayFromWeeklyIncome(0),SaleMod.getDayFromWeeklyIncome(1), SaleMod.getDayFromWeeklyIncome(2), SaleMod.getDayFromWeeklyIncome(3), SaleMod.getDayFromWeeklyIncome(4), SaleMod.getDayFromWeeklyIncome(5), SaleMod.getDayFromWeeklyIncome(6)],
        datasets: [{
            label: 'Inntekter',
            data: [SaleMod.getIncomeFromWeeklyIncome(0), SaleMod.getIncomeFromWeeklyIncome(1), SaleMod.getIncomeFromWeeklyIncome(2), SaleMod.getIncomeFromWeeklyIncome(3), SaleMod.getIncomeFromWeeklyIncome(4), SaleMod.getIncomeFromWeeklyIncome(5), SaleMod.getIncomeFromWeeklyIncome(6)],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(200, 159, 200, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(200, 159, 200, 1)'

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                display: false,
                beginAtZero: true
            },
        
            x: {
                display: false
            }
        }
    }
});
let avarageCalc = ()=>{
    let incomeAvrSum = 0;

    SaleMod.getYearlyIncome().forEach(year => {
        incomeAvrSum += year.income;
    });
    let  incomeAvrFinal = incomeAvrSum/ 6;
    console.log(incomeAvrFinal);
    
    incomeAvr.innerHTML = incomeAvrFinal;
}
avarageCalc();

function printPopupMenu(id, placeholder){
    let inValue;
    let inValue2;

    if(id == "changeDailyIncome" || id == "addDailyIncome"){
        popupWindow.style.display = "block";
        popupWindow.innerHTML = `            
        <input type="text" placeholder="Enter Soda income for the day" id="input">
        <input type="text" placeholder="Enter Pizza income for the day" id="input2">
        <input type="submit" id="${id}">`;
        inValue = document.getElementById("input").value;
    }
    else{
        console.log("Inne i function");
        popupWindow.style.display = "block";
        popupWindow.innerHTML = `            
        <input type="text" placeholder="${placeholder}" id="input">
        <input type="submit" id="${id}">`;
    }
    function runChange() {
        console.log("Why are you running?");
        switch (id) {
            case "changeDailyIncome":
                inValue2 = document.getElementById("input2").value;
                inValue = document.getElementById("input").value;
                console.log(inValue2);
                SaleMod.editNewDay(Number(inValue2),Number(inValue));
                printStats();
                break;
            case "addDailyIncome":
                inValue2 = document.getElementById("input2").value;
                inValue = document.getElementById("input").value;
                SaleMod.addNewDay(Number(inValue2),Number(inValue));
                printStats();
                break;
            case "changeYearlyIncome":
                inValue = document.getElementById("input").value;
                SaleMod.editNewYear(Number(inValue));
                printStats();
                break;
            case "addYearlyIncome":
                inValue = document.getElementById("input").value;
                SaleMod.addNewYear(Number(inValue));
                printStats();
                break;
            default:
                break;
        }
    }
    let submitId = document.getElementById(id);
    submitId.onclick = runChange;

}

function checkOnclick() {
    switch(this.id){
        case "edit-daily":
            printPopupMenu("changeDailyIncome", "Type daily income");
            break;
        case "add-daily":
            printPopupMenu("addDailyIncome", "Type daily income");
            break;
        case "edit-year":
            printPopupMenu("changeYearlyIncome", "Type yearly income");
            break;
        case "add-year":
            printPopupMenu("addYearlyIncome", "Type yearly income");
            break;
    }
    weeklyChart.update();
    dailyChart.update();

}
function printStats(){
    let dataSet = [SaleMod.yearlyIncomeArray[0].year, SaleMod.yearlyIncomeArray[1].year, SaleMod.yearlyIncomeArray[2].year, SaleMod.yearlyIncomeArray[3].year, SaleMod.yearlyIncomeArray[4].year, SaleMod.yearlyIncomeArray[5].year];
    myChart.data.labels = dataSet;
    myChart.data.datasets[0].data = [SaleMod.yearlyIncomeArray[0].income, SaleMod.yearlyIncomeArray[1].income, SaleMod.yearlyIncomeArray[2].income, SaleMod.yearlyIncomeArray[3].income, SaleMod.yearlyIncomeArray[4].income, SaleMod.yearlyIncomeArray[5].income] ;
    myChart.update();
    console.log(myChart.data.datasets[0]);
    let dataSetWeek = [SaleMod.weeklyIncomeArray[0].day, SaleMod.weeklyIncomeArray[1].day, SaleMod.weeklyIncomeArray[2].day, SaleMod.weeklyIncomeArray[3].day, SaleMod.weeklyIncomeArray[4].day, SaleMod.weeklyIncomeArray[5].day, SaleMod.weeklyIncomeArray[6].day];
    weeklyChart.data.labels = dataSetWeek;
    weeklyChart.data.datasets[0].data = [SaleMod.weeklyIncomeArray[0].income, SaleMod.weeklyIncomeArray[1].income, SaleMod.weeklyIncomeArray[2].income, SaleMod.weeklyIncomeArray[3].income, SaleMod.weeklyIncomeArray[4].income, SaleMod.weeklyIncomeArray[5].income, SaleMod.weeklyIncomeArray[6].income];
    weeklyChart.update();
    let dataSetDay = [SaleMod.dailyIncomeArray[0].item, SaleMod.dailyIncomeArray[1].item];
    dailyChart.data.labels = dataSetDay;
    dailyChart.data.datasets[0].data = [SaleMod.dailyIncomeArray[0].income, SaleMod.dailyIncomeArray[1].income];
    dailyChart.update();
    avarageCalc();
}   
editDay.onclick = checkOnclick;
editYear.onclick = checkOnclick;
addDay.onclick = checkOnclick;
addYear.onclick = checkOnclick;
