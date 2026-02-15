// Forge Demo Data — "Bright Side Landscaping" (completely fictional)
window.DEMO_MODE = true;
window.QB_DATA = {
  lastSync: new Date().toISOString(),
  company: "Bright Side Landscaping",

  customers: [
    { id: "c1", name: "Tom Whitfield", phone: "555-8821", email: "tom.w@example.com", created: "2024-06-15" },
    { id: "c2", name: "Rachel Kim", phone: "555-7743", email: "rachel.k@example.com", created: "2024-07-22" },
    { id: "c3", name: "Marcus Green", phone: "555-6612", email: "marcus.g@example.com", created: "2024-08-10" },
    { id: "c4", name: "Ashley Cooper", phone: "555-4459", email: "ashley.c@example.com", created: "2024-09-03" },
    { id: "c5", name: "Derek Nguyen", phone: "555-9934", email: "derek.n@example.com", created: "2024-09-18" },
    { id: "c6", name: "Megan Foster", phone: "555-2218", email: "megan.f@example.com", created: "2024-10-07" },
    { id: "c7", name: "Carlos Rivera", phone: "555-3376", email: "carlos.r@example.com", created: "2024-11-12" },
    { id: "c8", name: "Brianna Scott", phone: "555-1145", email: "brianna.s@example.com", created: "2024-11-28" },
    { id: "c9", name: "Nathan Hayes", phone: "555-5567", email: "nathan.h@example.com", created: "2025-01-05" },
    { id: "c10", name: "Olivia Park", phone: "555-8890", email: "olivia.p@example.com", created: "2025-01-20" },
    { id: "c11", name: "James Mitchell", phone: "555-4423", email: "james.m@example.com", created: "2025-02-01" },
    { id: "c12", name: "Sophia Bennett", phone: "555-6678", email: "sophia.b@example.com", created: "2025-02-08" }
  ],

  invoices: [
    { number: "2401", customer: "Tom Whitfield", customerId: "c1", date: "2024-08-15", total: 750, status: "Paid", lines: [{ description: "Full yard cleanup + mulching", amount: 750 }] },
    { number: "2402", customer: "Rachel Kim", customerId: "c2", date: "2024-09-10", total: 480, status: "Paid", lines: [{ description: "Hedge trimming & garden bed", amount: 480 }] },
    { number: "2403", customer: "Marcus Green", customerId: "c3", date: "2024-10-05", total: 1350, status: "Paid", lines: [{ description: "Sod installation — front yard", amount: 1100 }, { description: "Sprinkler repair", amount: 250 }] },
    { number: "2404", customer: "Ashley Cooper", customerId: "c4", date: "2024-10-22", total: 620, status: "Paid", lines: [{ description: "Fall leaf removal + gutter clean", amount: 620 }] },
    { number: "2405", customer: "Derek Nguyen", customerId: "c5", date: "2024-11-08", total: 890, status: "Paid", lines: [{ description: "Patio pavers — back deck area", amount: 890 }] },
    { number: "2406", customer: "Tom Whitfield", customerId: "c1", date: "2024-12-01", total: 320, status: "Paid", lines: [{ description: "Winter prep — shrub wrapping", amount: 320 }] },
    { number: "2407", customer: "Carlos Rivera", customerId: "c7", date: "2025-01-12", total: 1450, status: "Paid", lines: [{ description: "Landscape design + planting", amount: 1200 }, { description: "Delivery & materials", amount: 250 }] },
    { number: "2408", customer: "Brianna Scott", customerId: "c8", date: "2025-01-18", total: 560, status: "Paid", lines: [{ description: "Monthly maintenance (Jan)", amount: 560 }] },
    { number: "2409", customer: "Nathan Hayes", customerId: "c9", date: "2025-01-25", total: 780, status: "Paid", lines: [{ description: "Tree trimming (3 oaks)", amount: 780 }] },
    { number: "2410", customer: "Olivia Park", customerId: "c10", date: "2025-02-03", total: 950, status: "Paid", lines: [{ description: "Spring bed prep + perennials", amount: 950 }] },
    { number: "2411", customer: "Rachel Kim", customerId: "c2", date: "2025-02-07", total: 420, status: "Outstanding", lines: [{ description: "Monthly maintenance (Feb)", amount: 420 }] },
    { number: "2412", customer: "James Mitchell", customerId: "c11", date: "2025-02-10", total: 1680, status: "Outstanding", lines: [{ description: "Full backyard renovation", amount: 1400 }, { description: "Drainage install", amount: 280 }] },
    { number: "2413", customer: "Sophia Bennett", customerId: "c12", date: "2025-02-12", total: 375, status: "Outstanding", lines: [{ description: "Flower bed design consultation", amount: 375 }] }
  ],

  pnl2025: {
    income: 7215,
    totalExpenses: 3840,
    netIncome: 3375,
    cogs: 1650
  },

  pnl2026: {
    income: 0,
    totalExpenses: 0,
    netIncome: 0
  },

  monthlyDetail: {
    "2024-08": {
      business: 680,
      personal: 220,
      items: [
        { vendor: "Home Depot", category: "Supplies", amount: 340, date: "2024-08-05", type: "business" },
        { vendor: "Shell Gas", category: "Fuel", amount: 180, date: "2024-08-12", type: "business" },
        { vendor: "Lowe's", category: "Equipment", amount: 160, date: "2024-08-20", type: "business" },
        { vendor: "Walmart", category: "Groceries", amount: 120, date: "2024-08-08", type: "personal" },
        { vendor: "Spotify", category: "Subscription", amount: 12, date: "2024-08-15", type: "personal" },
        { vendor: "Amazon", category: "Shopping", amount: 88, date: "2024-08-22", type: "personal" }
      ]
    },
    "2024-09": {
      business: 520,
      personal: 195,
      items: [
        { vendor: "Home Depot", category: "Supplies", amount: 280, date: "2024-09-03", type: "business" },
        { vendor: "Chevron", category: "Fuel", amount: 165, date: "2024-09-10", type: "business" },
        { vendor: "STIHL Dealer", category: "Equipment", amount: 75, date: "2024-09-18", type: "business" },
        { vendor: "Target", category: "Shopping", amount: 95, date: "2024-09-06", type: "personal" },
        { vendor: "Netflix", category: "Subscription", amount: 16, date: "2024-09-15", type: "personal" },
        { vendor: "Chick-fil-A", category: "Food", amount: 84, date: "2024-09-25", type: "personal" }
      ]
    },
    "2024-10": {
      business: 810,
      personal: 310,
      items: [
        { vendor: "Nursery Supply Co", category: "Materials", amount: 420, date: "2024-10-02", type: "business" },
        { vendor: "Shell Gas", category: "Fuel", amount: 195, date: "2024-10-08", type: "business" },
        { vendor: "Insurance Co", category: "Insurance", amount: 145, date: "2024-10-15", type: "business" },
        { vendor: "Facebook Ads", category: "Marketing", amount: 50, date: "2024-10-20", type: "business" },
        { vendor: "Amazon", category: "Shopping", amount: 165, date: "2024-10-05", type: "personal" },
        { vendor: "Kroger", category: "Groceries", amount: 145, date: "2024-10-18", type: "personal" }
      ]
    },
    "2024-11": {
      business: 590,
      personal: 280,
      items: [
        { vendor: "Home Depot", category: "Supplies", amount: 310, date: "2024-11-04", type: "business" },
        { vendor: "Chevron", category: "Fuel", amount: 135, date: "2024-11-11", type: "business" },
        { vendor: "Insurance Co", category: "Insurance", amount: 145, date: "2024-11-15", type: "business" },
        { vendor: "Best Buy", category: "Electronics", amount: 180, date: "2024-11-25", type: "personal" },
        { vendor: "Grocery Outlet", category: "Groceries", amount: 100, date: "2024-11-08", type: "personal" }
      ]
    },
    "2024-12": {
      business: 380,
      personal: 450,
      items: [
        { vendor: "Lowe's", category: "Supplies", amount: 150, date: "2024-12-03", type: "business" },
        { vendor: "Shell Gas", category: "Fuel", amount: 85, date: "2024-12-10", type: "business" },
        { vendor: "Insurance Co", category: "Insurance", amount: 145, date: "2024-12-15", type: "business" },
        { vendor: "Amazon", category: "Gifts", amount: 250, date: "2024-12-18", type: "personal" },
        { vendor: "Target", category: "Gifts", amount: 120, date: "2024-12-20", type: "personal" },
        { vendor: "Kroger", category: "Groceries", amount: 80, date: "2024-12-22", type: "personal" }
      ]
    },
    "2025-01": {
      business: 920,
      personal: 340,
      items: [
        { vendor: "Nursery Supply Co", category: "Materials", amount: 380, date: "2025-01-06", type: "business" },
        { vendor: "Home Depot", category: "Supplies", amount: 210, date: "2025-01-13", type: "business" },
        { vendor: "Shell Gas", category: "Fuel", amount: 185, date: "2025-01-20", type: "business" },
        { vendor: "Insurance Co", category: "Insurance", amount: 145, date: "2025-01-15", type: "business" },
        { vendor: "Walmart", category: "Groceries", amount: 140, date: "2025-01-05", type: "personal" },
        { vendor: "Amazon", category: "Shopping", amount: 120, date: "2025-01-18", type: "personal" },
        { vendor: "Spotify", category: "Subscription", amount: 12, date: "2025-01-15", type: "personal" },
        { vendor: "Planet Fitness", category: "Fitness", amount: 25, date: "2025-01-01", type: "personal" },
        { vendor: "Chick-fil-A", category: "Food", amount: 43, date: "2025-01-22", type: "personal" }
      ]
    },
    "2025-02": {
      business: 740,
      personal: 295,
      items: [
        { vendor: "Home Depot", category: "Supplies", amount: 290, date: "2025-02-03", type: "business" },
        { vendor: "Nursery Supply Co", category: "Materials", amount: 195, date: "2025-02-07", type: "business" },
        { vendor: "Chevron", category: "Fuel", amount: 110, date: "2025-02-10", type: "business" },
        { vendor: "Insurance Co", category: "Insurance", amount: 145, date: "2025-02-15", type: "business" },
        { vendor: "Kroger", category: "Groceries", amount: 130, date: "2025-02-04", type: "personal" },
        { vendor: "Amazon", category: "Shopping", amount: 95, date: "2025-02-09", type: "personal" },
        { vendor: "Planet Fitness", category: "Fitness", amount: 25, date: "2025-02-01", type: "personal" },
        { vendor: "Netflix", category: "Subscription", amount: 16, date: "2025-02-15", type: "personal" },
        { vendor: "Taco Bell", category: "Food", amount: 29, date: "2025-02-12", type: "personal" }
      ]
    }
  },

  invoiceMonthly: {
    "2024-08": { count: 1, total: 750 },
    "2024-09": { count: 1, total: 480 },
    "2024-10": { count: 2, total: 1970 },
    "2024-11": { count: 1, total: 890 },
    "2024-12": { count: 1, total: 320 },
    "2025-01": { count: 3, total: 2790 },
    "2025-02": { count: 3, total: 2475 }
  },

  accounts: [
    { name: "Business Checking", balance: 6340 },
    { name: "Savings", balance: 2200 }
  ],

  balanceSheet: {
    cash: 8540,
    ar: 2475,
    equipment: 3200,
    totalAssets: 14215,
    creditCard: -1850,
    totalLiabilities: -1850,
    equity: 12365
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
  apiCalls: { total: 1243, estimated_cost: 42.80 },
  sessions: [
    { name: "main-session", calls: 847, input_tokens: 2450000, output_tokens: 380000, cache_read: 1800000, cost: 28.50 },
    { name: "sub-agent-kimi", calls: 312, input_tokens: 680000, output_tokens: 95000, cache_read: 0, cost: 11.20 },
    { name: "codex-tasks", calls: 84, input_tokens: 290000, output_tokens: 78000, cache_read: 0, cost: 3.10 }
  ],
  health: {
    cpu: "8%",
    ram: "29%",
    disk: "37%",
    uptime: "21d 14h 52m"
  },
  weekStart: new Date(Date.now() - 4 * 86400000).toISOString()
};
