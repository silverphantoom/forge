// Forge Demo Data — "Bright Side Landscaping" (fictional)
// Only active when URL has ?demo parameter
window.demoData = {
  lastSync: new Date().toISOString(),
  businessName: "Bright Side Landscaping",
  ownerName: "Demo User",

  customers: [
    { DisplayName: "Tom Whitfield", PrimaryPhone: { FreeFormNumber: "555-8821" }, PrimaryEmailAddr: { Address: "tom.w@example.com" }, Balance: 0 },
    { DisplayName: "Rachel Kim", PrimaryPhone: { FreeFormNumber: "555-7743" }, PrimaryEmailAddr: { Address: "rachel.k@example.com" }, Balance: 0 },
    { DisplayName: "Marcus Green", PrimaryPhone: { FreeFormNumber: "555-6612" }, PrimaryEmailAddr: { Address: "marcus.g@example.com" }, Balance: 0 },
    { DisplayName: "Ashley Cooper", PrimaryPhone: { FreeFormNumber: "555-4459" }, PrimaryEmailAddr: { Address: "ashley.c@example.com" }, Balance: 0 },
    { DisplayName: "Derek Nguyen", PrimaryPhone: { FreeFormNumber: "555-9934" }, PrimaryEmailAddr: { Address: "derek.n@example.com" }, Balance: 250 },
    { DisplayName: "Megan Foster", PrimaryPhone: { FreeFormNumber: "555-2218" }, PrimaryEmailAddr: { Address: "megan.f@example.com" }, Balance: 0 },
  ],

  invoices: [
    { TxnDate: "2025-08-14", CustomerRef: { name: "Tom Whitfield" }, TotalAmt: 750, Balance: 0 },
    { TxnDate: "2025-09-09", CustomerRef: { name: "Rachel Kim" }, TotalAmt: 480, Balance: 0 },
    { TxnDate: "2025-10-04", CustomerRef: { name: "Marcus Green" }, TotalAmt: 1350, Balance: 0 },
    { TxnDate: "2025-10-21", CustomerRef: { name: "Ashley Cooper" }, TotalAmt: 620, Balance: 0 },
    { TxnDate: "2025-11-07", CustomerRef: { name: "Derek Nguyen" }, TotalAmt: 890, Balance: 250 },
    { TxnDate: "2025-12-02", CustomerRef: { name: "Megan Foster" }, TotalAmt: 415, Balance: 0 },
  ],

  expenses: [
    { TxnDate: "2025-08-01", TotalAmt: 120, Line: [{ Description: "Parts - springs", AccountBasedExpenseLineDetail: { AccountRef: { name: "Cost of Goods Sold" }}}] },
    { TxnDate: "2025-09-15", TotalAmt: 85, Line: [{ Description: "Google Ads", AccountBasedExpenseLineDetail: { AccountRef: { name: "Advertising" }}}] },
    { TxnDate: "2025-10-10", TotalAmt: 200, Line: [{ Description: "Tools", AccountBasedExpenseLineDetail: { AccountRef: { name: "Equipment" }}}] },
  ],
};
