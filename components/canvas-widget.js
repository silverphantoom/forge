/* CanvasWidget: renders upcoming Canvas assignments from global CANVAS_DATA */
(function () {
  const STYLE_ID = 'canvas-widget-styles';
  const BLUE = '#3B82F6';

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .canvas-widget {
        background: #0a0a0f;
        border: 1px solid rgba(59,130,246,0.35);
        border-radius: 16px;
        padding: 16px;
      }
      .canvas-widget-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 12px;
      }
      .canvas-widget-title {
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: #eaf2ff;
      }
      .canvas-widget-count {
        color: ${BLUE};
      }
      .canvas-widget-sync {
        border: 1px solid rgba(59,130,246,0.45);
        background: rgba(59,130,246,0.12);
        color: #dbeafe;
        border-radius: 10px;
        font-size: 12px;
        font-weight: 600;
        padding: 7px 10px;
      }
      .canvas-widget-sync:hover {
        background: rgba(59,130,246,0.2);
      }
      .canvas-widget-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .canvas-widget-item {
        border: 1px solid rgba(255,255,255,0.07);
        background: #141419;
        border-left-width: 3px;
        border-radius: 12px;
        padding: 10px 12px;
      }
      .canvas-widget-item.red { border-left-color: #ef4444; }
      .canvas-widget-item.yellow { border-left-color: #f59e0b; }
      .canvas-widget-item.green { border-left-color: #22c55e; }
      .canvas-widget-course {
        font-size: 11px;
        color: #93c5fd;
        margin-bottom: 3px;
      }
      .canvas-widget-name {
        font-size: 14px;
        font-weight: 600;
        color: #f0f0f5;
      }
      .canvas-widget-meta {
        margin-top: 6px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
        font-size: 12px;
        color: #b0b0c0;
      }
      .canvas-widget-empty {
        font-size: 13px;
        color: #9ca3af;
        border: 1px dashed rgba(59,130,246,0.35);
        border-radius: 12px;
        padding: 12px;
      }
    `;
    document.head.appendChild(style);
  }

  function formatDueDate(isoDate) {
    if (!isoDate) return 'No due date';
    const date = new Date(isoDate);
    if (Number.isNaN(date.getTime())) return 'No due date';
    return date.toLocaleString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  }

  function urgencyClass(isoDate) {
    const due = new Date(isoDate).getTime();
    if (Number.isNaN(due)) return 'green';
    const hoursUntil = (due - Date.now()) / 36e5;
    if (hoursUntil <= 24) return 'red';
    if (hoursUntil <= 72) return 'yellow';
    return 'green';
  }

  async function syncCanvasData() {
    if (typeof window.runCanvasSync === 'function') {
      return window.runCanvasSync();
    }
    // Placeholder hook: attempts to call canvas-sync.sh via HTTP endpoint if available.
    return fetch('canvas-sync.sh', { method: 'POST' });
  }

  function createCanvasWidget() {
    injectStyles();

    const assignments = Array.isArray(window.CANVAS_DATA?.upcoming_assignments)
      ? [...window.CANVAS_DATA.upcoming_assignments]
      : [];
    assignments.sort((a, b) => new Date(a.due_at) - new Date(b.due_at));

    const root = document.createElement('section');
    root.className = 'canvas-widget';

    const header = document.createElement('div');
    header.className = 'canvas-widget-header';

    const title = document.createElement('div');
    title.className = 'canvas-widget-title';
    title.innerHTML = `Upcoming Assignments <span class="canvas-widget-count">(${assignments.length})</span>`;

    const syncBtn = document.createElement('button');
    syncBtn.type = 'button';
    syncBtn.className = 'canvas-widget-sync';
    syncBtn.textContent = 'Sync';
    syncBtn.addEventListener('click', async () => {
      syncBtn.disabled = true;
      syncBtn.textContent = 'Syncing...';
      try {
        await syncCanvasData();
      } catch (err) {
        console.error('Canvas sync failed:', err);
      } finally {
        syncBtn.disabled = false;
        syncBtn.textContent = 'Sync';
      }
    });

    header.appendChild(title);
    header.appendChild(syncBtn);
    root.appendChild(header);

    const list = document.createElement('div');
    list.className = 'canvas-widget-list';

    if (!assignments.length) {
      const empty = document.createElement('div');
      empty.className = 'canvas-widget-empty';
      empty.textContent = 'No upcoming assignments.';
      list.appendChild(empty);
    } else {
      assignments.forEach((item) => {
        const row = document.createElement('article');
        row.className = `canvas-widget-item ${urgencyClass(item.due_at)}`;

        const course = document.createElement('div');
        course.className = 'canvas-widget-course';
        course.textContent = item.course_name || 'Unknown Course';

        const name = document.createElement('div');
        name.className = 'canvas-widget-name';
        name.textContent = item.name || 'Untitled Assignment';

        const meta = document.createElement('div');
        meta.className = 'canvas-widget-meta';

        const due = document.createElement('span');
        due.textContent = `Due: ${formatDueDate(item.due_at)}`;

        const points = document.createElement('span');
        points.textContent = `${item.points_possible ?? 0} pts`;

        meta.appendChild(due);
        meta.appendChild(points);
        row.appendChild(course);
        row.appendChild(name);
        row.appendChild(meta);
        list.appendChild(row);
      });
    }

    root.appendChild(list);
    return root;
  }

  window.CanvasWidget = { create: createCanvasWidget };
})();
