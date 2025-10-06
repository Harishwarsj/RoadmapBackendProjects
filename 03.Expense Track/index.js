import { existsSync, readFileSync, writeFileSync } from 'fs';
import { createInterface } from 'readline';
import { parse } from 'json2csv';

const EXPENSE_FILE = 'expenses.json';
const BUDGET_FILE = 'budget.json';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

// Load expenses
function loadExpenses() {
    if (!existsSync(EXPENSE_FILE)) return [];
    return JSON.parse(readFileSync(EXPENSE_FILE));
}

// Save expenses
function saveExpenses(expenses) {
    writeFileSync(EXPENSE_FILE, JSON.stringify(expenses, null, 2));
}

// Load budgets
function loadBudgets() {
    if (!existsSync(BUDGET_FILE)) return {};
    return JSON.parse(readFileSync(BUDGET_FILE));
}

// Save budgets
function saveBudgets(budgets) {
    writeFileSync(BUDGET_FILE, JSON.stringify(budgets, null, 2));
}

// Add expense
function addExpense(description, amount, category) {
    const expenses = loadExpenses();
    const expense = {
        id: Date.now(),
        description,
        amount: parseFloat(amount),
        category,
        date: new Date().toISOString()
    };
    expenses.push(expense);
    saveExpenses(expenses);
    console.log("✅ Expense added successfully.");
    checkBudgetWarning(expense.date);
}

// Update expense
function updateExpense(id, description, amount, category) {
    const expenses = loadExpenses();
    const index = expenses.findIndex(e => e.id === parseInt(id));
    if (index === -1) return console.log("❌ Expense not found.");
    expenses[index] = {
        ...expenses[index],
        description,
        amount: parseFloat(amount),
        category
    };
    saveExpenses(expenses);
    console.log("✅ Expense updated.");
}

// Delete expense
function deleteExpense(id) {
    let expenses = loadExpenses();
    expenses = expenses.filter(e => e.id !== parseInt(id));
    saveExpenses(expenses);
    console.log("✅ Expense deleted.");
}

// View all expenses
function viewExpenses(category = null) {
    const expenses = loadExpenses();
    const filtered = category ? expenses.filter(e => e.category === category) : expenses;
    console.table(filtered, ['id', 'description', 'amount', 'category', 'date']);
}

// View summary
function viewSummary() {
    const expenses = loadExpenses();
    const total = expenses.reduce((sum, e) => sum + e.amount, 0);
    console.log(`💰 Total Expenses: $${total.toFixed(2)}`);
}

// View monthly summary
function viewMonthlySummary(month) {
    const expenses = loadExpenses();
    const now = new Date();
    
    const filtered = expenses.filter(e => {
        console.log(`e is ` + e);
        const d = new Date(e.date);
      
        return d.getMonth() + 1 === parseInt(month) && d.getFullYear() === now.getFullYear();
    });
    const total = filtered.reduce((sum, e) => 
     sum + e.amount, 0);
    console.log(`📅 Expenses for month ${month}: $${total.toFixed(2)}`);
}

// Set budget
function setBudget(month, amount) {
    const budgets = loadBudgets();
    budgets[month] = parseFloat(amount);
    saveBudgets(budgets);
    console.log(`✅ Budget of $${amount} set for month ${month}`);
}

// Check if over budget
function checkBudgetWarning(dateStr) {
    const date = new Date(dateStr);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const expenses = loadExpenses().filter(e => {
        const d = new Date(e.date);
        return d.getMonth() + 1 === month && d.getFullYear() === year;
    });

    const total = expenses.reduce((sum, e) => sum + e.amount, 0);
    const budgets = loadBudgets();
    const budget = budgets[month];

    if (budget && total > budget) {
        console.log(`⚠️ Warning: You exceeded the budget of $${budget} for month ${month}!`);
    }
}

// Export CSV
function exportCSV() {
    const expenses = loadExpenses();
    const csv = parse(expenses);
    writeFileSync('expenses.csv', csv);
    console.log("✅ Expenses exported to expenses.csv");
}

// CLI menu
function menu() {
    console.log(`
======== Expense Tracker ========
1. Add Expense
2. Update Expense
3. Delete Expense
4. View Expenses
5. View Summary
6. View Monthly Summary
7. Set Monthly Budget
8. Filter Expenses by Category
9. Export to CSV
0. Exit
=================================
    `);

    rl.question("Choose an option: ", answer => {
        switch (answer) {
            case '1':
                rl.question("Description: ", desc => {
                    rl.question("Amount: ", amt => {
                        rl.question("Category: ", cat => {
                            addExpense(desc, amt, cat);
                            menu();
                        });
                    });
                });
                break;

            case '2':
                rl.question("Expense ID to update: ", id => {
                    rl.question("New Description: ", desc => {
                        rl.question("New Amount: ", amt => {
                            rl.question("New Category: ", cat => {
                                updateExpense(id, desc, amt, cat);
                                menu();
                            });
                        });
                    });
                });
                break;

            case '3':
                rl.question("Expense ID to delete: ", id => {
                    deleteExpense(id);
                    menu();
                });
                break;

            case '4':
                viewExpenses();
                menu();
                break;

            case '5':
                viewSummary();
                menu();
                break;

            case '6':
                rl.question("Enter month (1-12): ", month => {
                    viewMonthlySummary(month);
                    menu();
                });
                break;

            case '7':
                rl.question("Month (1-12): ", month => {
                    rl.question("Budget Amount: ", amount => {
                        setBudget(month, amount);
                        menu();
                    });
                });
                break;

            case '8':
                rl.question("Enter category to filter: ", cat => {
                    viewExpenses(cat);
                    menu();
                });
                break;

            case '9':
                exportCSV();
                menu();
                break;

            case '0':
                rl.close();
                break;

            default:
                console.log("❌ Invalid option.");
                menu();
        }
    });
}

menu();
