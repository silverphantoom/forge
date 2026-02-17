/* ═══════════════════════════════════════
   FORGE v4.1 — Application Engine
   Lead pipeline, client details, task cycling
   ═══════════════════════════════════════ */

const IS_DEMO = new URLSearchParams(location.search).has('demo');
const TASKS_KEY = 'forge_tasks_v4';
const NOTES_KEY = 'forge_notes_v4';

// Bridge QB_DATA → qbData (qb-data.js exports window.QB_DATA)
if (window.QB_DATA && !window.qbData) window.qbData = window.QB_DATA;

// ─── Helpers ────────────────────────────
function formatMoney(n) {
  if (n == null || isNaN(n)) return '$0';
  const neg = n < 0;
  const abs = Math.abs(n);
  const str = abs >= 1000 ? abs.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : abs.toFixed(2);
  return (neg ? '-$' : '$') + str;
}

function formatDate(d) {
  if (!d) return '';
  const date = new Date(d);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function formatDateShort(d) {
  if (!d) return '';
  const date = new Date(d);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
}

function getInitials(name) {
  if (!name) return '?';
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

// ─── Data Access ────────────────────────
function getData() {
  if (IS_DEMO && window.demoData) return window.demoData;
  if (window.qbData) return window.qbData;
  return null;
}

function getCustomers() {
  const d = getData();
  if (!d) return [];
  // Normalize: qb-data.js uses {name, phone, email} vs raw QB {DisplayName, PrimaryPhone}
  return (d.customers || []).map(c => ({
    ...c,
    DisplayName: c.DisplayName || c.name || 'Unknown',
    PrimaryPhone: c.PrimaryPhone || (c.phone ? { FreeFormNumber: c.phone } : null),
    PrimaryEmailAddr: c.PrimaryEmailAddr || (c.email ? { Address: c.email } : null),
  }));
}

function getInvoices() {
  const d = getData();
  if (!d) return [];
  // Normalize: qb-data.js uses {date, customer, total, balance} vs raw QB {TxnDate, CustomerRef, TotalAmt, Balance}
  return (d.invoices || []).map(inv => ({
    ...inv,
    TxnDate: inv.TxnDate || inv.date || '',
    CustomerRef: inv.CustomerRef || { name: inv.customer || 'Customer' },
    TotalAmt: inv.TotalAmt != null ? inv.TotalAmt : (inv.total != null ? inv.total : 0),
    Balance: inv.Balance != null ? inv.Balance : (inv.balance != null ? inv.balance : 0),
    DocNumber: inv.DocNumber || inv.number || inv.id || '',
  }));
}

function getMonthlyRevenue() {
  const d = getData();
  if (!d) return [];
  if (d.monthlyDetail) return d.monthlyDetail;
  if (d.invoiceMonthly) return d.invoiceMonthly;
  return [];
}

function getExpenses() {
  const d = getData();
  if (!d) return [];
  // Normalize: qb-data.js uses {date, amount, account, description} vs raw QB {TxnDate, TotalAmt, Line[]}
  return (d.expenses || []).map(exp => ({
    ...exp,
    TxnDate: exp.TxnDate || exp.date || '',
    TotalAmt: exp.TotalAmt != null ? exp.TotalAmt : (exp.amount != null ? exp.amount : 0),
    Line: exp.Line || [{ Description: exp.description || '', AccountBasedExpenseLineDetail: { AccountRef: { name: exp.account || exp.category || 'Expense' } } }],
  }));
}

function getBusinessName() {
  if (IS_DEMO && window.demoData) return window.demoData.businessName || 'Demo Business';
  return 'Red Clay Garage Services';
}

function getOwnerName() {
  if (IS_DEMO) return 'Demo User';
  return 'Peyton';
}

// ─── Tasks Storage ──────────────────────
function getTasks() {
  try {
    const raw = localStorage.getItem(TASKS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return seedTasks();
}

function saveTasks(tasks) {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

function seedTasks() {
  const tasks = [
    { id: uid(), title: 'Send Google review texts', status: 'todo', category: 'red-clay', owner: 'Peyton', created: new Date().toISOString() },
    { id: uid(), title: 'Post launch thread on X', status: 'todo', category: 'content', owner: 'Peyton', created: new Date().toISOString() },
    { id: uid(), title: 'Set up iMac with SSD', status: 'todo', category: 'zephyr-infra', owner: 'Peyton', created: new Date().toISOString() },
    { id: uid(), title: 'Deploy Forge v4.0', status: 'in-progress', category: 'business', owner: 'Zephyr', created: new Date().toISOString() },
    { id: uid(), title: 'Agency competitor research', status: 'done', category: 'business', owner: 'Zephyr', created: new Date().toISOString() },
  ];
  if (IS_DEMO) {
    tasks.length = 0;
    tasks.push(
      { id: uid(), title: 'Follow up with Johnson estimate', status: 'todo', category: 'business', owner: 'You', created: new Date().toISOString() },
      { id: uid(), title: 'Order supplies from supplier', status: 'todo', category: 'business', owner: 'You', created: new Date().toISOString() },
      { id: uid(), title: 'Schedule Thompson service call', status: 'in-progress', category: 'business', owner: 'AI', created: new Date().toISOString() },
      { id: uid(), title: 'Send monthly report to clients', status: 'in-progress', category: 'business', owner: 'AI', created: new Date().toISOString() },
      { id: uid(), title: 'Update website pricing page', status: 'done', category: 'business', owner: 'AI', created: new Date().toISOString() },
    );
  }
  saveTasks(tasks);
  return tasks;
}

// ─── Notes Storage ──────────────────────
function getNotes() {
  try {
    const raw = localStorage.getItem(NOTES_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return [];
}

function saveNotes(notes) {
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}

// ─── Leads Storage ──────────────────────
const LEADS_KEY = 'forge_leads_v4';
const LEAD_STAGES = ['new', 'contacted', 'quoted', 'won', 'lost'];
const LEAD_STAGE_LABELS = { 'new': 'New Lead', 'contacted': 'Contacted', 'quoted': 'Quoted', 'won': 'Won', 'lost': 'Lost' };
const LEAD_STAGE_COLORS = { 'new': 'info', 'contacted': 'warning', 'quoted': 'primary', 'won': 'success', 'lost': 'danger' };

function getLeads() {
  try {
    const raw = localStorage.getItem(LEADS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return seedLeads();
}

function saveLeads(leads) { localStorage.setItem(LEADS_KEY, JSON.stringify(leads)); }

function seedLeads() {
  const leads = IS_DEMO ? [
    { id: uid(), name: 'Mike Reynolds', phone: '(334) 555-0101', service: 'Spring replacement', value: 250, stage: 'new', source: 'Google', created: new Date().toISOString(), notes: '' },
    { id: uid(), name: 'Sarah Chen', phone: '(334) 555-0202', service: 'New door install', value: 1200, stage: 'quoted', source: 'Referral', created: new Date(Date.now() - 86400000).toISOString(), notes: 'Sent quote Tuesday' },
    { id: uid(), name: 'Tom Bradley', phone: '(334) 555-0303', service: 'Opener install', value: 350, stage: 'contacted', source: 'Yelp', created: new Date(Date.now() - 172800000).toISOString(), notes: '' },
    { id: uid(), name: 'Lisa Park', phone: '(334) 555-0404', service: 'Tune-up', value: 89, stage: 'won', source: 'Repeat', created: new Date(Date.now() - 432000000).toISOString(), notes: 'Completed Friday' },
  ] : [];
  saveLeads(leads);
  return leads;
}

// ═══════════════════════════════════════
// RENDER: Dashboard
// ═══════════════════════════════════════
function renderDashboard() {
  const el = document.getElementById('tab-dashboard');
  const customers = getCustomers();
  const invoices = getInvoices();
  const tasks = getTasks();
  const leads = getLeads();
  const activeTasks = tasks.filter(t => t.status !== 'done').length;
  const activeLeads = leads.filter(l => !['won', 'lost'].includes(l.stage));
  const pipelineValue = activeLeads.reduce((s, l) => s + (l.value || 0), 0);

  // Calculate revenue this month
  const now = new Date();
  const thisMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  let monthRevenue = 0;
  let totalOutstanding = 0;
  invoices.forEach(inv => {
    if (inv.TxnDate && inv.TxnDate.startsWith(thisMonth)) monthRevenue += parseFloat(inv.TotalAmt || 0);
    totalOutstanding += parseFloat(inv.Balance || 0);
  });

  // Last 6 months revenue for chart
  const months = [];
  const revenues = [];
  for (let i = 5; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
    const label = d.toLocaleDateString('en-US', { month: 'short' });
    months.push(label);
    let rev = 0;
    invoices.forEach(inv => {
      if (inv.TxnDate && inv.TxnDate.startsWith(key)) rev += parseFloat(inv.TotalAmt || 0);
    });
    revenues.push(rev);
  }

  // Lead pipeline summary
  const pipelineCounts = {};
  LEAD_STAGES.forEach(s => pipelineCounts[s] = leads.filter(l => l.stage === s).length);
  const filledStages = LEAD_STAGES.filter(s => pipelineCounts[s] > 0);

  el.innerHTML = `
    ${IS_DEMO ? '<div style="background:var(--danger-soft);color:var(--danger);padding:var(--sp-3) var(--sp-4);border-radius:var(--radius-md);margin-bottom:var(--sp-4);font-size:13px;font-weight:600;text-align:center">🔥 DEMO MODE — Sample data shown · <a href="https://x.com/paske_project" style="color:var(--danger);text-decoration:underline">@paske_project</a></div>' : ''}
    <div style="margin-bottom:var(--sp-5)">
      <div class="text-lg font-bold">${getGreeting()}, ${getOwnerName()}</div>
      <div class="text-sm text-muted">${getBusinessName()} · ${now.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</div>
    </div>

    <div class="stats-grid mb-4">
      <div class="stat-card">
        <div class="stat-icon" style="background:var(--success-soft)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <div class="stat-label">Revenue (Month)</div>
        <div class="stat-value text-success">${formatMoney(monthRevenue)}</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon" style="background:var(--warning-soft)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--warning)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
        </div>
        <div class="stat-label">Outstanding</div>
        <div class="stat-value" style="color:var(--warning)">${formatMoney(totalOutstanding)}</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon" style="background:var(--info-soft)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--info)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        </div>
        <div class="stat-label">Pipeline</div>
        <div class="stat-value" style="color:var(--info)">${formatMoney(pipelineValue)}</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon" style="background:var(--primary-soft)">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
        </div>
        <div class="stat-label">Customers</div>
        <div class="stat-value" style="color:var(--primary)">${customers.length}</div>
      </div>
    </div>

    ${activeLeads.length ? `
    <div class="card mb-4">
      <div class="card-header">
        <span class="card-title">Lead Pipeline</span>
        <button class="btn btn-ghost btn-sm" onclick="switchTab('tab-leads')">View All</button>
      </div>
      <div class="pipeline mb-3">
        ${LEAD_STAGES.slice(0, -1).map(s => {
          const count = pipelineCounts[s];
          return `<div class="pipeline-stage ${count > 0 ? (s === 'won' ? 'filled' : 'current') : ''}" title="${LEAD_STAGE_LABELS[s]}: ${count}"></div>`;
        }).join('')}
      </div>
      <div class="flex gap-3 flex-wrap">
        ${LEAD_STAGES.slice(0, -1).map(s => `<div class="flex items-center gap-1"><span class="badge badge-${LEAD_STAGE_COLORS[s]}" style="font-size:10px">${pipelineCounts[s]}</span><span class="text-sm text-muted">${LEAD_STAGE_LABELS[s]}</span></div>`).join('')}
      </div>
    </div>
    ` : ''}

    <div class="card mb-4">
      <div class="card-header">
        <span class="card-title">Revenue (6 Months)</span>
      </div>
      <div class="chart-container"><canvas id="chart-revenue"></canvas></div>
    </div>

    <div class="section-header">
      <span class="section-title">Recent Activity</span>
    </div>
    <div class="card mb-4" style="padding:0;overflow:hidden">
      ${invoices.slice(0, 5).map(inv => `
        <div class="list-item">
          <div class="avatar-sm avatar" style="font-size:10px">${getInitials(inv.CustomerRef?.name || 'NA')}</div>
          <div class="list-item-content">
            <div class="list-item-title">${inv.CustomerRef?.name || 'Customer'}</div>
            <div class="list-item-sub">${formatDateShort(inv.TxnDate)}</div>
          </div>
          <div class="list-item-end font-mono font-semibold ${parseFloat(inv.Balance) === 0 ? 'text-success' : 'text-danger'}">${formatMoney(inv.TotalAmt)}</div>
        </div>
      `).join('') || '<div class="empty-state"><div class="empty-state-text">No recent activity</div></div>'}
    </div>

    ${activeTasks > 0 ? `
    <div class="section-header">
      <span class="section-title">Up Next</span>
      <button class="section-link" onclick="switchTab('tab-tasks')">All Tasks →</button>
    </div>
    <div class="flex-col gap-2 mb-4">
      ${tasks.filter(t => t.status !== 'done').slice(0, 3).map(t => `
        <div class="card" style="padding:var(--sp-3);display:flex;align-items:center;gap:var(--sp-3)">
          <button class="btn-icon" onclick="cycleTaskStatus('${t.id}')" style="width:24px;height:24px;border:2px solid ${t.status === 'in-progress' ? 'var(--info)' : 'var(--border-strong)'};border-radius:50%;flex-shrink:0;${t.status === 'in-progress' ? 'background:var(--info-soft)' : ''}"></button>
          <div style="flex:1;min-width:0">
            <div class="text-sm font-semibold truncate">${t.title}</div>
            <div class="text-sm text-muted">${t.owner === 'Zephyr' || t.owner === 'AI' ? '🌪️' : '👤'} ${t.owner || ''}</div>
          </div>
        </div>
      `).join('')}
    </div>` : ''}

    <div class="flex gap-2">
      <button class="btn btn-primary btn-sm w-full" onclick="switchTab('tab-quote')">📋 New Quote</button>
      <button class="btn btn-ghost btn-sm w-full" onclick="showAddTask()">✅ Add Task</button>
    </div>
  `;

  // Render revenue chart
  setTimeout(() => {
    const ctx = document.getElementById('chart-revenue');
    if (!ctx) return;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: months,
        datasets: [{
          data: revenues,
          backgroundColor: revenues.map((_, i) => i === revenues.length - 1 ? 'rgba(212,69,26,0.9)' : 'rgba(212,69,26,0.5)'),
          hoverBackgroundColor: 'rgba(212, 69, 26, 0.95)',
          borderRadius: 6,
          borderSkipped: false,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: (c) => formatMoney(c.raw) } } },
        scales: {
          x: { grid: { display: false }, ticks: { color: '#6b6b80', font: { size: 11 } } },
          y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#6b6b80', font: { size: 11 }, callback: v => '$' + v } }
        }
      }
    });
  }, 100);
}

function cycleTaskStatus(id) {
  const tasks = getTasks();
  const task = tasks.find(t => t.id === id);
  if (!task) return;
  const cycle = { 'todo': 'in-progress', 'in-progress': 'done', 'done': 'todo' };
  task.status = cycle[task.status] || 'todo';
  saveTasks(tasks);
  renderDashboard();
  renderTasks();
}

// ═══════════════════════════════════════
// RENDER: Tasks
// ═══════════════════════════════════════
let taskView = 'kanban';
let taskFilter = 'all';

function renderTasks() {
  const el = document.getElementById('tab-tasks');
  const tasks = getTasks();
  const filtered = taskFilter === 'all' ? tasks : tasks.filter(t => t.status === taskFilter);

  const statusMap = { 'todo': 'To Do', 'in-progress': 'In Progress', 'done': 'Done' };
  const statusBadge = { 'todo': 'badge-warning', 'in-progress': 'badge-info', 'done': 'badge-success' };

  const chips = ['all', 'todo', 'in-progress', 'done'].map(f =>
    `<button class="chip ${taskFilter === f ? 'active' : ''}" onclick="taskFilter='${f}';renderTasks()">${f === 'all' ? 'All' : statusMap[f]}</button>`
  ).join('');

  const viewToggle = `<button class="btn btn-ghost btn-sm" onclick="taskView=taskView==='kanban'?'list':'kanban';renderTasks()">${taskView === 'kanban' ? '☰ List' : '▥ Board'}</button>`;

  let content = '';
  if (taskView === 'kanban') {
    const cols = ['todo', 'in-progress', 'done'];
    content = `<div class="kanban">${cols.map(status => {
      const colTasks = tasks.filter(t => t.status === status);
      return `<div class="kanban-col">
        <div class="kanban-col-header">
          <span class="kanban-col-title">${statusMap[status]}</span>
          <span class="kanban-col-count">${colTasks.length}</span>
        </div>
        ${colTasks.map(t => `
          <div class="kanban-card" data-id="${t.id}" onclick="cycleTaskStatus('${t.id}')">
            <div class="kanban-card-title">${t.title}</div>
            <div class="kanban-card-meta">
              <span class="chip" style="font-size:10px">${t.category || 'general'}</span>
              <span>${t.owner === 'Zephyr' || t.owner === 'AI' ? '🌪️' : '👤'} ${t.owner || ''}</span>
            </div>
          </div>
        `).join('')}
      </div>`;
    }).join('')}</div>`;
  } else {
    content = `<div class="flex-col gap-1">${filtered.map(t => `
      <div class="list-item" style="border:1px solid var(--border);border-radius:var(--radius-md);margin-bottom:var(--sp-2)">
        <div class="list-item-content">
          <div class="list-item-title">${t.title}</div>
          <div class="list-item-sub">${t.owner || ''} · ${t.category || ''}</div>
        </div>
        <span class="badge ${statusBadge[t.status]}">${statusMap[t.status]}</span>
      </div>
    `).join('')}</div>`;
  }

  el.innerHTML = `
    <div class="flex-between mb-3">
      <div class="flex gap-2 flex-wrap">${chips}</div>
      ${viewToggle}
    </div>
    ${content}
    <div style="position:fixed;bottom:calc(var(--nav-h) + 16px);right:16px;z-index:50">
      <button class="btn btn-primary" style="width:52px;height:52px;border-radius:50%;font-size:24px;box-shadow:var(--shadow-lg)" onclick="showAddTask()">+</button>
    </div>
    <div id="task-modal"></div>
  `;
}

function showAddTask() {
  const modal = document.getElementById('task-modal');
  modal.innerHTML = `
    <div style="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:300;display:flex;align-items:flex-end;justify-content:center" onclick="if(event.target===this)document.getElementById('task-modal').innerHTML=''">
      <div style="background:var(--surface);border-radius:var(--radius-xl) var(--radius-xl) 0 0;padding:var(--sp-6);width:100%;max-width:480px;animation:slideUp 0.3s var(--ease-out)">
        <div class="font-bold text-lg mb-3">New Task</div>
        <input class="input mb-3" id="new-task-title" placeholder="Task title..." autofocus>
        <div class="flex gap-2 mb-3">
          <select class="select" id="new-task-cat" style="flex:1"><option value="business">Business</option><option value="red-clay">Red Clay</option><option value="personal">Personal</option><option value="content">Content</option><option value="zephyr-infra">Zephyr</option></select>
          <select class="select" id="new-task-owner" style="flex:1"><option value="${IS_DEMO ? 'You' : 'Peyton'}">${IS_DEMO ? 'You' : 'Peyton'}</option><option value="${IS_DEMO ? 'AI' : 'Zephyr'}">${IS_DEMO ? 'AI' : 'Zephyr'}</option></select>
        </div>
        <button class="btn btn-primary w-full" onclick="addTask()">Add Task</button>
      </div>
    </div>
  `;
  setTimeout(() => document.getElementById('new-task-title')?.focus(), 100);
}

function addTask() {
  const title = document.getElementById('new-task-title')?.value?.trim();
  if (!title) return;
  const tasks = getTasks();
  tasks.unshift({
    id: uid(), title,
    status: 'todo',
    category: document.getElementById('new-task-cat')?.value || 'business',
    owner: document.getElementById('new-task-owner')?.value || 'Peyton',
    created: new Date().toISOString()
  });
  saveTasks(tasks);
  document.getElementById('task-modal').innerHTML = '';
  renderTasks();
}

// ═══════════════════════════════════════
// RENDER: Finance
// ═══════════════════════════════════════
function renderFinance() {
  const el = document.getElementById('tab-finance');
  const invoices = getInvoices();
  const expenses = getExpenses();

  let totalRevenue = 0, totalExpenses = 0;
  invoices.forEach(inv => totalRevenue += parseFloat(inv.TotalAmt || 0));
  expenses.forEach(exp => totalExpenses += parseFloat(exp.TotalAmt || 0));
  const net = totalRevenue - totalExpenses;

  // Build monthly data for chart
  const monthMap = {};
  invoices.forEach(inv => {
    if (!inv.TxnDate) return;
    const key = inv.TxnDate.slice(0, 7);
    monthMap[key] = monthMap[key] || { rev: 0, exp: 0 };
    monthMap[key].rev += parseFloat(inv.TotalAmt || 0);
  });
  expenses.forEach(exp => {
    if (!exp.TxnDate) return;
    const key = exp.TxnDate.slice(0, 7);
    monthMap[key] = monthMap[key] || { rev: 0, exp: 0 };
    monthMap[key].exp += parseFloat(exp.TotalAmt || 0);
  });
  const sortedMonths = Object.keys(monthMap).sort().slice(-8);
  const chartLabels = sortedMonths.map(m => {
    const [y, mo] = m.split('-');
    return new Date(y, mo - 1).toLocaleDateString('en-US', { month: 'short' });
  });
  const chartRev = sortedMonths.map(m => monthMap[m].rev);
  const chartExp = sortedMonths.map(m => monthMap[m].exp);

  // Recent transactions (combine invoices + expenses, sort by date)
  const txns = [
    ...invoices.map(inv => ({ type: 'income', name: inv.CustomerRef?.name || 'Invoice', date: inv.TxnDate, amount: parseFloat(inv.TotalAmt || 0) })),
    ...expenses.slice(0, 20).map(exp => {
      const line = exp.Line?.[0];
      const acct = line?.AccountBasedExpenseLineDetail?.AccountRef?.name || 'Expense';
      return { type: 'expense', name: line?.Description || acct, date: exp.TxnDate, amount: parseFloat(exp.TotalAmt || 0) };
    })
  ].sort((a, b) => (b.date || '').localeCompare(a.date || '')).slice(0, 10);

  el.innerHTML = `
    <div class="stats-grid mb-4" style="grid-template-columns:repeat(3,1fr)">
      <div class="stat-card">
        <div class="stat-label">Revenue</div>
        <div class="stat-value text-success" style="font-size:20px">${formatMoney(totalRevenue)}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Expenses</div>
        <div class="stat-value text-danger" style="font-size:20px">${formatMoney(totalExpenses)}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Net P&L</div>
        <div class="stat-value ${net >= 0 ? 'text-success' : 'text-danger'}" style="font-size:20px">${formatMoney(net)}</div>
      </div>
    </div>

    <div class="card mb-4">
      <div class="card-header"><span class="card-title">Revenue vs Expenses</span></div>
      <div class="chart-container"><canvas id="chart-finance"></canvas></div>
    </div>

    <div class="section-header"><span class="section-title">Recent Transactions</span></div>
    <div class="card" style="padding:var(--sp-3)">
      ${txns.map(t => `
        <div class="txn-row">
          <div class="txn-icon" style="background:${t.type === 'income' ? 'var(--success-soft)' : 'var(--danger-soft)'}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${t.type === 'income' ? 'var(--success)' : 'var(--danger)'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              ${t.type === 'income' ? '<line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>' : '<line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>'}
            </svg>
          </div>
          <div class="txn-details">
            <div class="txn-name">${t.name}</div>
            <div class="txn-category">${formatDateShort(t.date)}</div>
          </div>
          <div class="txn-amount ${t.type}">${t.type === 'income' ? '+' : '-'}${formatMoney(t.amount)}</div>
        </div>
      `).join('')}
    </div>
  `;

  setTimeout(() => {
    const ctx = document.getElementById('chart-finance');
    if (!ctx) return;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: chartLabels,
        datasets: [
          { label: 'Revenue', data: chartRev, borderColor: 'rgba(34,197,94,0.8)', backgroundColor: 'rgba(34,197,94,0.1)', fill: true, tension: 0.4, pointRadius: 3 },
          { label: 'Expenses', data: chartExp, borderColor: 'rgba(239,68,68,0.8)', backgroundColor: 'rgba(239,68,68,0.1)', fill: true, tension: 0.4, pointRadius: 3 }
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { labels: { color: '#6b6b80', font: { size: 11 } } }, tooltip: { callbacks: { label: c => c.dataset.label + ': ' + formatMoney(c.raw) } } },
        scales: {
          x: { grid: { display: false }, ticks: { color: '#6b6b80', font: { size: 11 } } },
          y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#6b6b80', font: { size: 11 }, callback: v => '$' + v } }
        }
      }
    });
  }, 100);
}

// ═══════════════════════════════════════
// RENDER: Clients
// ═══════════════════════════════════════
function renderClients() {
  const el = document.getElementById('tab-clients');
  const customers = getCustomers();

  el.innerHTML = `
    <div class="search-bar">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/></svg>
      <input type="text" placeholder="Search customers..." id="client-search" oninput="filterClients()">
    </div>
    <div id="client-list">
      ${renderClientList(customers)}
    </div>
  `;
}

function renderClientList(customers) {
  if (!customers.length) return '<div class="empty-state"><div class="empty-state-title">No customers yet</div><div class="empty-state-text">Customers will appear here from your QuickBooks data</div></div>';
  const invoices = getInvoices();
  return customers.map(c => {
    const name = c.DisplayName || c.name || 'Unknown';
    const phone = c.PrimaryPhone?.FreeFormNumber || c.phone || '';
    const email = c.PrimaryEmailAddr?.Address || c.email || '';
    const custInvoices = invoices.filter(inv => {
      const invName = inv.CustomerRef?.name || '';
      return invName.toLowerCase() === name.toLowerCase();
    });
    const totalSpent = custInvoices.reduce((s, inv) => s + parseFloat(inv.TotalAmt || 0), 0);
    const outstanding = custInvoices.reduce((s, inv) => s + parseFloat(inv.Balance || 0), 0);
    return `
      <div class="list-item" style="border-bottom:1px solid var(--border)" onclick="showClientDetail('${name.replace(/'/g, "\\'")}')">
        <div class="avatar">${getInitials(name)}</div>
        <div class="list-item-content">
          <div class="list-item-title">${name}</div>
          <div class="list-item-sub">${phone || email || 'No contact info'}</div>
        </div>
        <div class="list-item-end">
          ${totalSpent > 0 ? `<div class="font-mono font-semibold text-sm">${formatMoney(totalSpent)}</div>` : ''}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
        </div>
      </div>
    `;
  }).join('');
}

function showClientDetail(name) {
  const customers = getCustomers();
  const customer = customers.find(c => (c.DisplayName || c.name) === name);
  if (!customer) return;
  const invoices = getInvoices().filter(inv => (inv.CustomerRef?.name || '').toLowerCase() === name.toLowerCase());
  const totalSpent = invoices.reduce((s, inv) => s + parseFloat(inv.TotalAmt || 0), 0);
  const outstanding = invoices.reduce((s, inv) => s + parseFloat(inv.Balance || 0), 0);
  const phone = customer.PrimaryPhone?.FreeFormNumber || customer.phone || '';
  const email = customer.PrimaryEmailAddr?.Address || customer.email || '';

  const el = document.getElementById('tab-clients');
  el.innerHTML = `
    <button class="btn btn-ghost btn-sm mb-4" onclick="renderClients()">← Back</button>
    <div class="flex items-center gap-3 mb-4">
      <div class="avatar avatar-lg">${getInitials(name)}</div>
      <div>
        <div class="text-lg font-bold">${name}</div>
        ${phone ? `<div class="text-sm text-muted">${phone}</div>` : ''}
        ${email ? `<div class="text-sm text-muted">${email}</div>` : ''}
      </div>
    </div>
    <div class="stats-grid mb-4" style="grid-template-columns:repeat(2,1fr)">
      <div class="stat-card">
        <div class="stat-label">Total Spent</div>
        <div class="stat-value text-success" style="font-size:22px">${formatMoney(totalSpent)}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Outstanding</div>
        <div class="stat-value ${outstanding > 0 ? 'text-danger' : 'text-success'}" style="font-size:22px">${formatMoney(outstanding)}</div>
      </div>
    </div>
    <div class="section-header"><span class="section-title">Invoices (${invoices.length})</span></div>
    ${invoices.length ? `<div class="card" style="padding:0;overflow:hidden">
      ${invoices.map(inv => `
        <div class="list-item">
          <div class="list-item-content">
            <div class="list-item-title">Invoice #${inv.DocNumber || '—'}</div>
            <div class="list-item-sub">${formatDateShort(inv.TxnDate)}</div>
          </div>
          <div class="list-item-end">
            <div class="font-mono font-semibold">${formatMoney(inv.TotalAmt)}</div>
            <span class="badge ${parseFloat(inv.Balance) === 0 ? 'badge-success' : 'badge-warning'}" style="font-size:10px">${parseFloat(inv.Balance) === 0 ? 'Paid' : 'Due ' + formatMoney(inv.Balance)}</span>
          </div>
        </div>
      `).join('')}
    </div>` : '<div class="empty-state"><div class="empty-state-text">No invoices for this customer</div></div>'}
  `;
}

function filterClients() {
  const q = document.getElementById('client-search')?.value?.toLowerCase() || '';
  const customers = getCustomers().filter(c => {
    const name = (c.DisplayName || c.name || '').toLowerCase();
    return name.includes(q);
  });
  document.getElementById('client-list').innerHTML = renderClientList(customers);
}

// ═══════════════════════════════════════
// RENDER: Quote Builder
// ═══════════════════════════════════════
const SERVICES = [
  { name: 'Garage Door Spring Replacement', price: 250 },
  { name: 'Garage Door Opener Install', price: 350 },
  { name: 'Garage Door Panel Replacement', price: 400 },
  { name: 'Garage Door Tune-Up', price: 89 },
  { name: 'Garage Door Off Track Repair', price: 175 },
  { name: 'New Garage Door Install', price: 1200 },
  { name: 'Garage Door Seal Replacement', price: 75 },
  { name: 'Service Call / Diagnostic', price: 50 },
  { name: 'Custom / Other', price: 0 },
];

let quoteItems = [];

function renderQuote() {
  const el = document.getElementById('tab-quote');
  const total = quoteItems.reduce((sum, item) => sum + (item.price * item.qty), 0);

  el.innerHTML = `
    <div class="section-header"><span class="section-title">Quote Builder</span></div>
    <div class="card mb-4">
      <div class="card-header"><span class="card-title">Add Service</span></div>
      <select class="select mb-3" id="quote-service">
        ${SERVICES.map((s, i) => `<option value="${i}">${s.name} — ${formatMoney(s.price)}</option>`).join('')}
      </select>
      <div class="flex gap-2">
        <input class="input" type="number" id="quote-qty" value="1" min="1" style="width:80px">
        <button class="btn btn-primary w-full" onclick="addQuoteItem()">Add to Quote</button>
      </div>
    </div>

    ${quoteItems.length ? `
      <div class="card mb-4" style="padding:0;overflow:hidden">
        ${quoteItems.map((item, i) => `
          <div class="list-item">
            <div class="list-item-content">
              <div class="list-item-title">${item.name}</div>
              <div class="list-item-sub">Qty: ${item.qty}</div>
            </div>
            <div class="list-item-end font-mono font-semibold">${formatMoney(item.price * item.qty)}</div>
            <button class="btn-icon" onclick="quoteItems.splice(${i},1);renderQuote()" style="margin-left:var(--sp-2);color:var(--danger)">✕</button>
          </div>
        `).join('')}
        <div class="list-item" style="background:var(--surface-2)">
          <div class="list-item-content"><div class="list-item-title font-bold">Total</div></div>
          <div class="list-item-end font-mono font-bold text-lg">${formatMoney(total)}</div>
        </div>
      </div>
      <button class="btn btn-primary w-full" onclick="copyQuote()">📋 Copy Quote to Clipboard</button>
    ` : '<div class="empty-state"><div class="empty-state-title">No items yet</div><div class="empty-state-text">Add services above to build a quote</div></div>'}
  `;
}

function addQuoteItem() {
  const idx = parseInt(document.getElementById('quote-service').value);
  const qty = parseInt(document.getElementById('quote-qty').value) || 1;
  const svc = SERVICES[idx];
  quoteItems.push({ name: svc.name, price: svc.price, qty });
  renderQuote();
}

function copyQuote() {
  const biz = getBusinessName();
  const total = quoteItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let text = `QUOTE — ${biz}\n${new Date().toLocaleDateString()}\n${'─'.repeat(30)}\n`;
  quoteItems.forEach(item => {
    text += `${item.name}\n  ${item.qty} × ${formatMoney(item.price)} = ${formatMoney(item.price * item.qty)}\n`;
  });
  text += `${'─'.repeat(30)}\nTOTAL: ${formatMoney(total)}\n\nThank you for choosing ${biz}!`;
  navigator.clipboard?.writeText(text).then(() => {
    const btn = document.querySelector('#tab-quote .btn-primary:last-child');
    if (btn) { btn.textContent = '✅ Copied!'; setTimeout(() => btn.textContent = '📋 Copy Quote to Clipboard', 2000); }
  });
}

// ═══════════════════════════════════════
// RENDER: Notes
// ═══════════════════════════════════════
function renderNotes() {
  const el = document.getElementById('tab-notes');
  const notes = getNotes();

  el.innerHTML = `
    <div class="card mb-4">
      <textarea class="textarea mb-3" id="note-input" placeholder="Write a note..." rows="3"></textarea>
      <button class="btn btn-primary w-full" onclick="addNote()">Save Note</button>
    </div>
    <div class="flex-col gap-2">
      ${notes.map((n, i) => `
        <div class="card" style="padding:var(--sp-3)">
          <div class="flex-between mb-2">
            <span class="text-sm text-muted">${formatDate(n.created)}</span>
            <button class="btn-icon text-danger" onclick="deleteNote(${i})" style="font-size:14px">✕</button>
          </div>
          <div class="text-base" style="white-space:pre-wrap">${n.text}</div>
        </div>
      `).join('') || '<div class="empty-state"><div class="empty-state-title">No notes yet</div><div class="empty-state-text">Add your first note above</div></div>'}
    </div>
  `;
}

function addNote() {
  const text = document.getElementById('note-input')?.value?.trim();
  if (!text) return;
  const notes = getNotes();
  notes.unshift({ text, created: new Date().toISOString() });
  saveNotes(notes);
  renderNotes();
}

function deleteNote(idx) {
  const notes = getNotes();
  notes.splice(idx, 1);
  saveNotes(notes);
  renderNotes();
}

// ═══════════════════════════════════════
// RENDER: Usage
// ═══════════════════════════════════════
function renderUsage() {
  const el = document.getElementById('tab-usage');
  const usage = window.usageData || {};

  el.innerHTML = `
    <div class="section-header"><span class="section-title">Subscriptions</span></div>
    <div class="card mb-4">
      <div class="txn-row"><div class="txn-details"><div class="txn-name">Claude Max</div><div class="txn-category">Primary AI brain (Opus 4.6)</div></div><div class="txn-amount expense">$200/mo</div></div>
      <div class="txn-row"><div class="txn-details"><div class="txn-name">ChatGPT Plus</div><div class="txn-category">Codex CLI (gpt-5.2-codex)</div></div><div class="txn-amount expense">$20/mo</div></div>
      <div class="txn-row"><div class="txn-details"><div class="txn-name">Kimi K2.5</div><div class="txn-category">Sub-agent tasks</div></div><div class="txn-amount expense">$19/mo</div></div>
      <div class="txn-row" style="border-top:2px solid var(--border)"><div class="txn-details"><div class="txn-name font-bold">Total AI Spend</div></div><div class="txn-amount font-bold" style="color:var(--text)">$239/mo</div></div>
    </div>

    <div class="section-header"><span class="section-title">System Info</span></div>
    <div class="card">
      <div class="flex-between mb-2"><span class="text-muted text-sm">Version</span><span class="text-sm font-semibold">Forge v4.0</span></div>
      <div class="flex-between mb-2"><span class="text-muted text-sm">Mode</span><span class="badge ${IS_DEMO ? 'badge-danger' : 'badge-success'}">${IS_DEMO ? 'Demo' : 'Live'}</span></div>
      <div class="flex-between mb-2"><span class="text-muted text-sm">Business</span><span class="text-sm font-semibold">${getBusinessName()}</span></div>
      <div class="flex-between"><span class="text-muted text-sm">Data Source</span><span class="text-sm font-semibold">${IS_DEMO ? 'Demo Data' : 'QuickBooks'}</span></div>
    </div>
  `;
}

// ═══════════════════════════════════════
// RENDER: Leads
// ═══════════════════════════════════════
let leadFilter = 'active';

function renderLeads() {
  const el = document.getElementById('tab-leads');
  if (!el) return;
  const leads = getLeads();
  const filtered = leadFilter === 'all' ? leads :
    leadFilter === 'active' ? leads.filter(l => !['won', 'lost'].includes(l.stage)) :
    leads.filter(l => l.stage === leadFilter);

  const totalValue = filtered.reduce((s, l) => s + (l.value || 0), 0);

  const chips = ['active', 'all', ...LEAD_STAGES].map(f =>
    `<button class="chip ${leadFilter === f ? 'active' : ''}" onclick="leadFilter='${f}';renderLeads()">${f === 'active' ? 'Active' : f === 'all' ? 'All' : LEAD_STAGE_LABELS[f]}</button>`
  ).join('');

  el.innerHTML = `
    <div class="flex-between mb-3">
      <div class="section-title">Leads</div>
      <span class="font-mono text-sm text-muted">${filtered.length} leads · ${formatMoney(totalValue)}</span>
    </div>
    <div class="flex gap-2 flex-wrap mb-4">${chips}</div>
    <div class="flex-col gap-2">
      ${filtered.map(l => `
        <div class="card" style="padding:var(--sp-3)">
          <div class="flex-between mb-2">
            <div class="flex items-center gap-2">
              <div class="avatar-sm avatar">${getInitials(l.name)}</div>
              <div>
                <div class="text-sm font-bold">${l.name}</div>
                <div class="text-sm text-muted">${l.phone || 'No phone'}</div>
              </div>
            </div>
            <span class="badge badge-${LEAD_STAGE_COLORS[l.stage]}">${LEAD_STAGE_LABELS[l.stage]}</span>
          </div>
          <div class="flex-between">
            <div class="text-sm text-secondary">${l.service || ''}</div>
            <div class="font-mono font-semibold text-sm">${formatMoney(l.value)}</div>
          </div>
          ${l.notes ? `<div class="text-sm text-muted mt-2" style="font-style:italic">${l.notes}</div>` : ''}
          <div class="flex gap-1 mt-2">
            ${LEAD_STAGES.filter(s => s !== l.stage && s !== 'lost').map(s =>
              `<button class="btn btn-ghost btn-sm" style="font-size:10px;padding:4px 8px" onclick="moveLeadStage('${l.id}','${s}')">${LEAD_STAGE_LABELS[s]}</button>`
            ).join('')}
          </div>
        </div>
      `).join('') || '<div class="empty-state"><div class="empty-state-title">No leads</div><div class="empty-state-text">Add leads to track your sales pipeline</div></div>'}
    </div>
    <div style="position:fixed;bottom:calc(var(--nav-h) + 16px);right:16px;z-index:50">
      <button class="btn btn-primary" style="width:52px;height:52px;border-radius:50%;font-size:24px;box-shadow:var(--shadow-lg)" onclick="showAddLead()">+</button>
    </div>
    <div id="lead-modal"></div>
  `;
}

function moveLeadStage(id, stage) {
  const leads = getLeads();
  const lead = leads.find(l => l.id === id);
  if (lead) { lead.stage = stage; saveLeads(leads); renderLeads(); renderDashboard(); }
}

function showAddLead() {
  const modal = document.getElementById('lead-modal');
  modal.innerHTML = `
    <div style="position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:300;display:flex;align-items:flex-end;justify-content:center" onclick="if(event.target===this)document.getElementById('lead-modal').innerHTML=''">
      <div style="background:var(--surface);border-radius:var(--radius-xl) var(--radius-xl) 0 0;padding:var(--sp-6);width:100%;max-width:480px;animation:slideUp 0.3s var(--ease-out)">
        <div class="font-bold text-lg mb-3">New Lead</div>
        <input class="input mb-3" id="lead-name" placeholder="Customer name" autofocus>
        <input class="input mb-3" id="lead-phone" placeholder="Phone number">
        <input class="input mb-3" id="lead-service" placeholder="Service needed">
        <input class="input mb-3" id="lead-value" type="number" placeholder="Estimated value ($)">
        <select class="select mb-3" id="lead-source">
          <option value="Google">Google</option><option value="Referral">Referral</option>
          <option value="Yelp">Yelp</option><option value="Facebook">Facebook</option>
          <option value="Repeat">Repeat Customer</option><option value="Other">Other</option>
        </select>
        <button class="btn btn-primary w-full" onclick="addLead()">Add Lead</button>
      </div>
    </div>
  `;
  setTimeout(() => document.getElementById('lead-name')?.focus(), 100);
}

function addLead() {
  const name = document.getElementById('lead-name')?.value?.trim();
  if (!name) return;
  const leads = getLeads();
  leads.unshift({
    id: uid(), name,
    phone: document.getElementById('lead-phone')?.value?.trim() || '',
    service: document.getElementById('lead-service')?.value?.trim() || '',
    value: parseFloat(document.getElementById('lead-value')?.value) || 0,
    stage: 'new',
    source: document.getElementById('lead-source')?.value || 'Other',
    created: new Date().toISOString(),
    notes: ''
  });
  saveLeads(leads);
  document.getElementById('lead-modal').innerHTML = '';
  renderLeads();
  renderDashboard();
}

// ═══════════════════════════════════════
// RENDER: Settings
// ═══════════════════════════════════════
function renderSettings() {
  const el = document.getElementById('tab-settings');
  el.innerHTML = `
    <div class="section-header"><span class="section-title">Settings</span></div>
    <div class="card mb-4">
      <div class="flex-between mb-3"><span class="font-semibold">Business Name</span><span class="text-secondary">${getBusinessName()}</span></div>
      <div class="flex-between mb-3"><span class="font-semibold">Version</span><span class="text-secondary">Forge v4.0</span></div>
      <div class="flex-between"><span class="font-semibold">Theme</span><span class="text-secondary">Dark</span></div>
    </div>
    <div class="card">
      <div class="font-semibold mb-2">About Forge</div>
      <div class="text-sm text-muted">Forge is an AI-powered business command center built by The Paske Project. It connects to your QuickBooks data and gives you real-time visibility into your business operations.</div>
    </div>
  `;
}

// ═══════════════════════════════════════
// Tab Switching Helper
// ═══════════════════════════════════════
function switchTab(tabId) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const panel = document.getElementById(tabId);
  if (panel) panel.classList.add('active');
  const navBtn = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
  if (navBtn) navBtn.classList.add('active');
  // Close sheet if open
  document.getElementById('sheet-overlay')?.classList.remove('open');
  document.getElementById('sheet-more')?.classList.remove('open');
}

// ═══════════════════════════════════════
// Initialize
// ═══════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  renderDashboard();
  renderTasks();
  renderFinance();
  renderClients();
  renderQuote();
  renderLeads();
  renderNotes();
  renderUsage();
  renderSettings();
});
