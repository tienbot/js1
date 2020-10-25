/*jshint esversion: 6 */

let money, time;

function start () {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}
start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true,
	chooseExpenses: function() {
		for(let i=0; i < 2; i++) {
			let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
				b = +prompt("Во сколько обойдется?", '');
			if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
				console.log("done");
				appData.expenses[a]  = b;
			}  else {
				console.log ("bad result");
				i--;
			}
		}
	},
	detectDayBudget: function() {
		appData.moneyPerDay = (appData.budget / 30).toFixed();
		alert("Бюджет на 1 день составляет: " + appData.moneyPerDay);
	},
	detectLevel: function() {
		if(appData.moneyPerDay < 100) {
			console.log("Минимальный уровень достатка");
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log("Средний уровень достатка");
		} else if (appData.moneyPerDay > 2000) {
			console.log("Высокий уровень достатка");
		} else {
			console.log("Произошла ошибка");
		}
	},
	checkSaving: function() {
		if (appData.savings == true) {
			let save =+prompt("Какова сумма накоплений?"),
				percent =+prompt("Под какой процент?");
	
			appData.monthIncome = save/100/12*percent;
			alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
		}
	},
	chooseOptExpenses: function() {
		for(let i=1; i < 4; i++) {
			let a = prompt("Статья необязательных расходов?", '');
			if( (typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
				appData.optionalExpenses[i] = a;
				console.log(appData.optionalExpenses);
			}  else {
				console.log ("bad result");
				i--;
			}
		}
	},
	chooseIncome: function() {
		let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
		if((typeof(items)) != 'string' || (typeof(items)) == null || items == '') {
			console.log("Вы ввели некорректные данные или не ввели их вовсе");
		} else {
			appData.income = items.split(', ');
			appData.income.push(prompt('Может что-то еще?'));
			appData.income.sort();
		}
		appData.income.forEach(function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });
	}
};

for (let key in appData) {
	alert("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}