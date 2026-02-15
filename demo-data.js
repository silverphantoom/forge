// Demo data for Forge public showcase — no real customer/financial data
window.DEMO_MODE = true;
window.QB_DATA = {
  lastSync: new Date().toISOString(),
  company: "Demo Business LLC",
  customers: [
    { name: "John Smith", phone: "555-0101", email: "john@example.com", balance: 0 },
    { name: "Sarah Johnson", phone: "555-0102", email: "sarah@example.com", balance: 450 },
    { name: "Mike Williams", phone: "555-0103", email: "mike@example.com", balance: 0 },
    { name: "Emily Davis", phone: "555-0104", email: "emily@example.com", balance: 275 },
    { name: "Robert Brown", phone: "555-0105", email: "robert@example.com", balance: 0 },
    { name: "Lisa Anderson", phone: "555-0106", email: "lisa@example.com", balance: 850 },
    { name: "David Martinez", phone: "555-0107", email: "david@example.com", balance: 0 },
    { name: "Jennifer Taylor", phone: "555-0108", email: "jennifer@example.com", balance: 0 }
  ],
  invoices: [
    { num: "1001", customer: "Sarah Johnson", date: "2025-02-10", due: "2025-03-10", total: 450, balance: 450, status: "Outstanding" },
    { num: "1002", customer: "Lisa Anderson", date: "2025-02-08", due: "2025-03-08", total: 850, balance: 850, status: "Outstanding" },
    { num: "1003", customer: "Emily Davis", date: "2025-02-05", due: "2025-03-05", total: 275, balance: 275, status: "Outstanding" },
    { num: "1004", customer: "John Smith", date: "2025-01-28", due: "2025-02-28", total: 625, balance: 0, status: "Paid" },
    { num: "1005", customer: "Mike Williams", date: "2025-01-20", due: "2025-02-20", total: 380, balance: 0, status: "Paid" },
    { num: "1006", customer: "Robert Brown", date: "2025-01-15", due: "2025-02-15", total: 1200, balance: 0, status: "Paid" },
    { num: "1007", customer: "David Martinez", date: "2025-01-10", due: "2025-02-10", total: 550, balance: 0, status: "Paid" },
    { num: "1008", customer: "Jennifer Taylor", date: "2024-12-20", due: "2025-01-20", total: 425, balance: 0, status: "Paid" }
  ],
  expenses: {
    "2025-01": [
      { category: "Parts & Supplies", amount: 1240 },
      { category: "Gas & Mileage", amount: 380 },
      { category: "Insurance", amount: 175 },
      { category: "Software & Tools", amount: 89 },
      { category: "Marketing", amount: 150 }
    ],
    "2025-02": [
      { category: "Parts & Supplies", amount: 890 },
      { category: "Gas & Mileage", amount: 310 },
      { category: "Insurance", amount: 175 },
      { category: "Software & Tools", amount: 89 },
      { category: "Marketing", amount: 200 }
    ]
  },
  revenue: {
    "2024-10": 2800, "2024-11": 3200, "2024-12": 2100,
    "2025-01": 4180, "2025-02": 3575
  },
  accounts: {
    checking: 4250,
    savings: 1500
  },
  summary: {
    totalRevenue: 15855,
    totalExpenses: 9698,
    netProfit: 6157,
    outstandingAR: 1575
  }
};

window.USAGE_DATA = {
  lastUpdated: new Date().toISOString(),
  subscriptions: [
    { name: "Claude Max", cost: 200, period: "monthly" },
    { name: "ChatGPT Plus", cost: 20, period: "monthly" },
    { name: "Kimi K2.5", cost: 19, period: "monthly" }
  ],
  totalMonthlyCost: 239,
  sessions: {
    total: 847,
    thisWeek: 124,
    avgTokensPerSession: 3200
  },
  health: {
    cpu: "12%",
    ram: "34%",
    disk: "41%",
    uptime: "14d 7h 23m"
  }
};
