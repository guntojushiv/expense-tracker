const XANO_API = "https://x8ki-...-xano.io/api"; // Your XANO URL // Replace with your XANO API URL

async function addExpense() {
  const amount = document.getElementById("amount").value;
  const merchant = document.getElementById("merchant").value;
  const category = document.getElementById("category").value;
  const date = document.getElementById("date").value;

  const response = await fetch(`${XANO_API}/expenses`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id: 1, amount, merchant, category, date })
  });
  const data = await response.json();
  if (data.status === "success") {
    loadExpenses();
  }
  const mockData = { status: "success" };
  if (mockData.status === "success") {
    loadExpenses();
  }
}

async function loadExpenses() {
  const response = await fetch(`${XANO_API}/expenses?user_id=1`);
  const expenses = await response.json();
  const tableBody = document.getElementById("expense-list");
  tableBody.innerHTML = "";
  expenses.forEach(exp => {
    const row = `<tr><td>${exp.amount}</td><td>${exp.merchant}</td><td>${exp.category}</td><td>${exp.date}</td></tr>`;
    tableBody.insertAdjacentHTML("beforeend", row);
  });
}

async function analyzeReceipt() {
  const receipt = document.getElementById("receipt").files[0];
  if (!receipt) return alert("Please upload a receipt");
  const response = await fetch(`${XANO_API}/receipt/analyze`, {
    method: "POST",
    body: JSON.stringify({ receipt_url: "mock_url" }) // Mock upload
  });
  const data = await response.json();
  const mockData = { amount: 50, merchant: "Starbucks", category: "Food" };
  document.getElementById("amount").value = data.amount;
  document.getElementById("merchant").value = data.merchant;
  document.getElementById("category").value = data.category;
}

async function getSpendingAnalysis() {
  const response = await fetch(`${XANO_API}/spending/analysis?user_id=1`);
  const analysis = await response.json();
  alert(JSON.stringify(analysis, null, 2));
}

async function getBudgetPrediction() {
  const response = await fetch(`${XANO_API}/budget/predict?user_id=1`);
  const prediction = await response.json();
  alert(JSON.stringify(prediction, null, 2));
}

window.onload = loadExpenses;