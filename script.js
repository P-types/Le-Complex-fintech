function addBudget() {
    const budget = document.getElementById('budget').value;
    document.getElementById('budgetOutput').innerText = `Your budget is set to ₹${budget}`;
}

function splitExpense() {
    const totalExpense = document.getElementById('totalExpense').value;
    const numPeople = document.getElementById('numPeople').value;
    const splitAmount = totalExpense / numPeople;
    document.getElementById('expenseOutput').innerText = `Each person should contribute ₹${splitAmount.toFixed(2)}`;
}

function trackSavings() {
    const income = document.getElementById('income').value;
    const savingsGoal = document.getElementById('savings').value;
    const savingsOutput = (income - savingsGoal) > 0 ? 
        `You have saved ₹${income - savingsGoal}` :
        `You need ₹${savingsGoal - income} more to reach your savings goal.`;
    document.getElementById('savingsOutput').innerText = savingsOutput;
}
