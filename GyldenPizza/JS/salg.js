import SaleMod from './modules/saleModule.js';

let incomeAvr = document.getElementById("income-avr");
let expensesDiv = document.getElementById("expenses-out");

var c = document.getElementById('chart');
var ctx = c.getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [ SaleMod.getYearFromYearlyIncome(0), SaleMod.getYearFromYearlyIncome(1), SaleMod.getYearFromYearlyIncome(2), SaleMod.getYearFromYearlyIncome(3), SaleMod.getYearFromYearlyIncome(4), SaleMod.getYearFromYearlyIncome(5)],
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

let incomeAvrSum = 0;
SaleMod.getYearlyIncome().forEach(year => {
    incomeAvrSum += year.income;
});
incomeAvrFinal = incomeAvrSum/ 6;
incomeAvr.innerHTML = `Gjennomsnittlig inntekt siste 6 årene = ${incomeAvrFinal}`;