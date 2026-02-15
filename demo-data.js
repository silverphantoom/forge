// Demo data for Forge public showcase — completely fictional business
window.DEMO_MODE = true;
window.QB_DATA = {
  lastSync: new Date().toISOString(),
  company: "Bright Side Landscaping",
  customers: [
    { name: "Tom Whitfield", phone: "555-8821", email: "tom.w@example.com", balance: 0 },
    { name: "Rachel Kim", phone: "555-7743", email: "rachel.k@example.com", balance: 320 },
    { name: "Marcus Green", phone: "555-6612", email: "marcus.g@example.com", balance: 0 },
    { name: "Ashley Cooper", phone: "555-4459", email: "ashley.c@example.com", balance: 580 },
    { name: "Derek Nguyen", phone: "555-9934", email: "derek.n@example.com", balance: 0 },
    { name: "Megan Foster", phone: "555-2218", email: "megan.f@example.com", balance: 175 },
    { name: "Carlos Rivera", phone: "555-3376", email: "carlos.r@example.com", balance: 0 },
    { name: "Brianna Scott", phone: "555-1145", email: "brianna.s@example.com", balance: 0 },
    { name: "Nathan Hayes", phone: "555-5567", email: "nathan.h@example.com", balance: 420 },
    { name: "Olivia Park", phone: "555-8890", email: "olivia.p@example.com", balance: 0 }
  ],
  invoices: [
    { num: "2401", customer: "Rachel Kim", date: "2025-02-12", due: "2025-03-12", total: 320, balance: 320, status: "Outstanding" },
    { num: "2402", customer: "Ashley Cooper", date: "2025-02-09", due: "2025-03-09", total: 580, balance: 580, status: "Outstanding" },
    { num: "2403", customer: "Megan Foster", date: "2025-02-07", due: "2025-03-07", total: 175, balance: 175, status: "Outstanding" },
    { num: "2404", customer: "Nathan Hayes", date: "2025-02-03", due: "2025-03-03", total: 420, balance: 420, status: "Outstanding" },
    { num: "2405", customer: "Tom Whitfield", date: "2025-01-25", due: "2025-02-25", total: 750, balance: 0, status: "Paid" },
    { num: "2406", customer: "Marcus Green", date: "2025-01-18", due: "2025-02-18", total: 490, balance: 0, status: "Paid" },
    { num: "2407", customer: "Derek Nguyen", date: "2025-01-12", due: "2025-02-12", total: 1350, balance: 0, status: "Paid" },
    { num: "2408", customer: "Carlos Rivera", date: "2025-01-05", due: "2025-02-05", total: 280, balance: 0, status: "Paid" },
    { num: "2409", customer: "Brianna Scott", date: "2024-12-28", due: "2025-01-28", total: 620, balance: 0, status: "Paid" },
    { num: "2410", customer: "Olivia Park", date: "2024-12-15", due: "2025-01-15", total: 890, balance: 0, status: "Paid" }
  ],
  expenses: {
    "2024-10": [
      { category: "Equipment Rental", amount: 680 },
      { category: "Fuel", amount: 290 },
      { category: "Seeds & Materials", amount: 520 },
      { category: "Insurance", amount: 145 },
      { category: "Advertising", amount: 200 }
    ],
    "2024-11": [
      { category: "Equipment Rental", amount: 450 },
      { category: "Fuel", amount: 310 },
      { category: "Seeds & Materials", amount: 380 },
      { category: "Insurance", amount: 145 },
      { category: "Advertising", amount: 175 }
    ],
    "2024-12": [
      { category: "Equipment Rental", amount: 320 },
      { category: "Fuel", amount: 210 },
      { category: "Seeds & Materials", amount: 190 },
      { category: "Insurance", amount: 145 },
      { category: "Advertising", amount: 100 }
    ],
    "2025-01": [
      { category: "Equipment Rental", amount: 710 },
      { category: "Fuel", amount: 340 },
      { category: "Seeds & Materials", amount: 590 },
      { category: "Insurance", amount: 145 },
      { category: "Software & Tools", amount: 79 }
    ],
    "2025-02": [
      { category: "Equipment Rental", amount: 530 },
      { category: "Fuel", amount: 280 },
      { category: "Seeds & Materials", amount: 440 },
      { category: "Insurance", amount: 145 },
      { category: "Software & Tools", amount: 79 }
    ]
  },
  revenue: {
    "2024-08": 3100, "2024-09": 4200, "2024-10": 3850, "2024-11": 2900, "2024-12": 1510,
    "2025-01": 5490, "2025-02": 4875
  },
  accounts: {
    checking: 6340,
    savings: 2200
  },
  summary: {
    totalRevenue: 25925,
    totalExpenses: 17280,
    netProfit: 8645,
    outstandingAR: 1495
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
    total: 1243,
    thisWeek: 187,
    avgTokensPerSession: 2800
  },
  health: {
    cpu: "8%",
    ram: "29%",
    disk: "37%",
    uptime: "21d 14h 52m"
  }
};
