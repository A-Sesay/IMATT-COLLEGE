const adminCredentials = {
  email: 'abdulaisesay167@gmail.com',
  password: 'Mexcess25132513'
};

const menuTitles = {
  overview: 'Overview',
  students: 'Students',
  staff: 'Staff',
  academics: 'Academics',
  finance: 'Finance',
  exams: 'Exams',
  reports: 'Reports',
  users: 'Users',
  chat: 'Chat',
  settings: 'Settings'
};

const menuContent = {
  overview: {
    quickActions: [
      { title: 'Approve new admissions', tag: 'Priority', tone: 'primary' },
      { title: 'Review staff onboarding', tag: 'HR', tone: 'warning' },
      { title: 'Publish academic calendar', tag: 'Academic', tone: 'success' }
    ],
    activity: [
      { title: 'Academic board report submitted', time: '2 hours ago' },
      { title: 'New finance approval request', time: '6 hours ago' },
      { title: 'Departmental head meeting scheduled', time: 'Today' }
    ],
    chart: [52, 71, 64, 88, 75, 93]
  },
  students: {
    quickActions: [
      { title: 'Add new student record', tag: 'Create', tone: 'primary' },
      { title: 'Update student profiles', tag: 'Profile', tone: 'warning' },
      { title: 'View outstanding students', tag: 'Follow-up', tone: 'success' }
    ],
    activity: [
      { title: 'Student enrollment approved', time: '1 hour ago' },
      { title: 'Student transfer request reviewed', time: '4 hours ago' },
      { title: 'Scholarship list finalized', time: 'Today' }
    ],
    chart: [44, 63, 58, 82, 74, 91]
  },
  staff: {
    quickActions: [
      { title: 'Add new lecturer profile', tag: 'HR', tone: 'primary' },
      { title: 'Review teaching assignments', tag: 'Academic', tone: 'warning' },
      { title: 'Track staff attendance', tag: 'Operations', tone: 'success' }
    ],
    activity: [
      { title: 'Staff onboarding completed', time: '2 hours ago' },
      { title: 'Departmental staffing review', time: 'Yesterday' },
      { title: 'Lecturer duty schedule updated', time: 'Today' }
    ],
    chart: [31, 42, 57, 61, 68, 77]
  },
  academics: {
    quickActions: [
      { title: 'Create academic calendar', tag: 'Planning', tone: 'primary' },
      { title: 'Add course assignments', tag: 'Curriculum', tone: 'warning' },
      { title: 'Review timetable conflicts', tag: 'Scheduling', tone: 'success' }
    ],
    activity: [
      { title: 'Semester timetable published', time: '3 hours ago' },
      { title: 'Module allocations approved', time: 'Yesterday' },
      { title: 'Department review completed', time: 'Today' }
    ],
    chart: [49, 62, 67, 71, 80, 88]
  },
  finance: {
    quickActions: [
      { title: 'Record tuition payments', tag: 'Fees', tone: 'primary' },
      { title: 'Review fee balances', tag: 'Accounts', tone: 'warning' },
      { title: 'Authorize payment remittance', tag: 'Finance', tone: 'success' }
    ],
    activity: [
      { title: 'Student fee payment posted', time: '1 hour ago' },
      { title: 'Payment reconciliation updated', time: '3 hours ago' },
      { title: 'Outstanding balance summary sent', time: 'Today' }
    ],
    chart: [36, 45, 52, 60, 73, 84]
  },
  exams: {
    quickActions: [
      { title: 'Publish exam timetable', tag: 'Schedule', tone: 'primary' },
      { title: 'Upload grade reports', tag: 'Results', tone: 'warning' },
      { title: 'Resolve appeals', tag: 'Review', tone: 'success' }
    ],
    activity: [
      { title: 'Exam timetable approved', time: '2 hours ago' },
      { title: 'Course result review updated', time: '5 hours ago' },
      { title: 'Appeal case assigned', time: 'Today' }
    ],
    chart: [40, 55, 68, 63, 84, 91]
  },
  reports: {
    quickActions: [
      { title: 'Generate weekly report', tag: 'Analytics', tone: 'primary' },
      { title: 'Review institutional summary', tag: 'Board', tone: 'warning' },
      { title: 'Publish KPI dashboard', tag: 'Performance', tone: 'success' }
    ],
    activity: [
      { title: 'Board review file generated', time: '2 hours ago' },
      { title: 'Department report exported', time: 'Yesterday' },
      { title: 'KPI snapshot sent', time: 'Today' }
    ],
    chart: [57, 64, 70, 78, 87, 95]
  },
  users: {
    quickActions: [
      { title: 'Create student account', tag: 'Student', tone: 'primary' },
      { title: 'Assign user role', tag: 'Role', tone: 'warning' },
      { title: 'Review account access', tag: 'Security', tone: 'success' }
    ],
    activity: [
      { title: 'New student profile added', time: '12 minutes ago' },
      { title: 'Lecturer access reviewed', time: '2 hours ago' },
      { title: 'Department admin role updated', time: 'Today' }
    ],
    chart: [27, 39, 43, 58, 66, 73]
  },
  chat: {
    quickActions: [
      { title: 'Message registrar team', tag: 'Group', tone: 'primary' },
      { title: 'Share exam update', tag: 'Notice', tone: 'warning' },
      { title: 'Confirm finance update', tag: 'Team', tone: 'success' }
    ],
    activity: [
      { title: 'New chat from registrar', time: '8 minutes ago' },
      { title: 'Exam office shared results update', time: '25 minutes ago' },
      { title: 'Finance team sent fee notice', time: '1 hour ago' }
    ],
    chart: [28, 41, 50, 60, 72, 80]
  },
  settings: {
    quickActions: [
      { title: 'Manage user roles', tag: 'Access', tone: 'primary' },
      { title: 'Update institution profile', tag: 'System', tone: 'warning' },
      { title: 'Review audit trail', tag: 'Security', tone: 'success' }
    ],
    activity: [
      { title: 'System settings updated', time: '1 hour ago' },
      { title: 'User role permissions reviewed', time: '3 hours ago' },
      { title: 'Security log confirmed', time: 'Today' }
    ],
    chart: [25, 33, 41, 54, 61, 68]
  }
};

const roleConfig = {
  admin: {
    roleName: 'Administrator',
    title: 'Administrator Dashboard',
    responsibility: 'Admin controls all user creation, student and staff records, role assignment, and system-wide operations.',
    stats: [
      { label: 'Students', value: '4,520', meta: '+12.5%', trend: 'up', icon: '🎓' },
      { label: 'Staff', value: '618', meta: '+3.1%', trend: 'up', icon: '👥' },
      { label: 'Revenue', value: 'Le 8,400,000', meta: '+8.7%', trend: 'up', icon: '💰' },
      { label: 'Pending Tasks', value: '27', meta: '-5.3%', trend: 'down', icon: '📋' }
    ],
    quickActions: [
      { title: 'Approve new admissions', tag: 'Priority', tone: 'primary' },
      { title: 'Review staff onboarding', tag: 'HR', tone: 'warning' },
      { title: 'Publish academic calendar', tag: 'Academic', tone: 'success' }
    ],
    activity: [
      { title: 'Academic board report submitted', time: '2 hours ago' },
      { title: 'New finance approval request', time: '6 hours ago' },
      { title: 'Departmental head meeting scheduled', time: 'Today' }
    ],
    chart: [52, 71, 64, 88, 75, 93]
  },
  registrar: {
    roleName: 'Registrar',
    title: 'Registrar Dashboard',
    responsibility: 'Registrar manages student and lecturer records, departments, modules, timetables, and academic enrollment details.',
    stats: [
      { label: 'Admissions', value: '1,240', meta: '+10.8%', trend: 'up', icon: '📝' },
      { label: 'Records', value: '96%', meta: 'Accuracy', trend: 'up', icon: '📚' },
      { label: 'Transfers', value: '118', meta: '+6.4%', trend: 'up', icon: '🔄' },
      { label: 'Pending Cases', value: '14', meta: '-2.1%', trend: 'down', icon: '⚠️' }
    ],
    quickActions: [
      { title: 'Validate student records', tag: 'Records', tone: 'primary' },
      { title: 'Process transfer requests', tag: 'Admissions', tone: 'warning' },
      { title: 'Generate matriculation list', tag: 'Report', tone: 'success' }
    ],
    activity: [
      { title: 'Student verification completed', time: '1 hour ago' },
      { title: 'Transfer approval queued', time: '3 hours ago' },
      { title: 'Semester registration data synced', time: 'Today' }
    ],
    chart: [48, 58, 61, 80, 67, 76]
  },
  exams: {
    roleName: 'Exams Office',
    title: 'Exams Office Dashboard',
    responsibility: 'Exams Office handles examinations, grading, result processing, and academic performance management.',
    stats: [
      { label: 'Courses', value: '184', meta: '+7.2%', trend: 'up', icon: '📘' },
      { label: 'Exam Scripts', value: '3,440', meta: '+14.1%', trend: 'up', icon: '📝' },
      { label: 'Grading Delay', value: '8%', meta: '-4.7%', trend: 'down', icon: '⏱️' },
      { label: 'Appeals', value: '29', meta: '+2.3%', trend: 'up', icon: '📣' }
    ],
    quickActions: [
      { title: 'Publish exam timetable', tag: 'Schedule', tone: 'primary' },
      { title: 'Review result appeals', tag: 'Appeals', tone: 'warning' },
      { title: 'Finalize grading portal', tag: 'Results', tone: 'success' }
    ],
    activity: [
      { title: 'Exam timetable approved', time: '2 hours ago' },
      { title: 'Course repotting in progress', time: 'Yesterday' },
      { title: 'A1 result verification submitted', time: 'Today' }
    ],
    chart: [40, 55, 68, 63, 84, 91]
  },
  finance: {
    roleName: 'Finance Office',
    title: 'Finance Dashboard',
    responsibility: 'Finance Office records student fees, balances, payment updates, and monitors financial records.',
    stats: [
      { label: 'Collections', value: 'Le 5,900,000', meta: '+9.4%', trend: 'up', icon: '💳' },
      { label: 'Scholarships', value: 'Le 1,700,000', meta: '+5.6%', trend: 'up', icon: '🏆' },
      { label: 'Invoices', value: '346', meta: '+3.2%', trend: 'up', icon: '🧾' },
      { label: 'Outstanding', value: 'Le 420,000', meta: '-6.0%', trend: 'down', icon: '📉' }
    ],
    quickActions: [
      { title: 'Review fee waivers', tag: 'Approval', tone: 'primary' },
      { title: 'Release payroll vouchers', tag: 'Payroll', tone: 'warning' },
      { title: 'Process supplier invoice', tag: 'Procurement', tone: 'success' }
    ],
    activity: [
      { title: 'Tuition collection summary sent', time: '1 hour ago' },
      { title: 'Payroll batch approved', time: '5 hours ago' },
      { title: 'Scholarship disbursement updated', time: 'Today' }
    ],
    chart: [38, 46, 58, 65, 72, 79]
  },
  secretary: {
    roleName: 'Secretary',
    title: 'Secretary Dashboard',
    responsibility: 'Secretary collects applicant details and coordinates administrative records for the admin and institution.',
    stats: [
      { label: 'Meetings', value: '28', meta: '+5.8%', trend: 'up', icon: '📅' },
      { label: 'Messages', value: '214', meta: '+12.4%', trend: 'up', icon: '✉️' },
      { label: 'Documents', value: '1,680', meta: 'Monitored', trend: 'up', icon: '📁' },
      { label: 'Pending Tasks', value: '11', meta: '-3.5%', trend: 'down', icon: '🗂️' }
    ],
    quickActions: [
      { title: 'Schedule governing council agenda', tag: 'Board', tone: 'primary' },
      { title: 'Distribute meeting minutes', tag: 'Minutes', tone: 'warning' },
      { title: 'Track external correspondence', tag: 'Admin', tone: 'success' }
    ],
    activity: [
      { title: 'Council memo circulated', time: '45 minutes ago' },
      { title: 'Board meeting documents updated', time: '3 hours ago' },
      { title: 'Official letter archive confirmed', time: 'Today' }
    ],
    chart: [54, 60, 64, 79, 71, 87]
  },
  hod: {
    roleName: 'Head of Department',
    title: 'HOD Dashboard',
    responsibility: 'HODs review students and lecturers in their department and monitor departmental academic performance.',
    stats: [
      { label: 'Courses', value: '26', meta: '+4.2%', trend: 'up', icon: '📚' },
      { label: 'Lecturers', value: '18', meta: '+2.0%', trend: 'up', icon: '👩‍🏫' },
      { label: 'Attendance', value: '92%', meta: '+1.6%', trend: 'up', icon: '✅' },
      { label: 'Issues', value: '7', meta: '-1.8%', trend: 'down', icon: '🚩' }
    ],
    quickActions: [
      { title: 'Review teaching allocations', tag: 'Staff', tone: 'primary' },
      { title: 'Approve department timetable', tag: 'Schedule', tone: 'warning' },
      { title: 'Monitor course performance', tag: 'Academic', tone: 'success' }
    ],
    activity: [
      { title: 'Departmental report approved', time: '2 hours ago' },
      { title: 'Lecturer classroom coverage reviewed', time: '5 hours ago' },
      { title: 'Student advising notes updated', time: 'Today' }
    ],
    chart: [34, 47, 65, 72, 78, 82]
  },
  chairman: {
    roleName: 'Board Chairman',
    title: 'Board Chairman Dashboard',
    responsibility: 'Board Chairman reviews overall institutional performance, strategic reports, and governance summaries.',
    stats: [
      { label: 'Institution Score', value: '92%', meta: '+6.3%', trend: 'up', icon: '🏛️' },
      { label: 'Budget Status', value: 'Le 13,200,000', meta: 'On target', trend: 'up', icon: '💼' },
      { label: 'Strategic KPIs', value: '18/20', meta: '+2.0%', trend: 'up', icon: '📊' },
      { label: 'Risks', value: '3', meta: '-1.5%', trend: 'down', icon: '🛡️' }
    ],
    quickActions: [
      { title: 'Review institutional strategy', tag: 'Strategy', tone: 'primary' },
      { title: 'Assess board performance report', tag: 'Governance', tone: 'warning' },
      { title: 'Approve major policy updates', tag: 'Policy', tone: 'success' }
    ],
    activity: [
      { title: 'Quarterly performance review shared', time: '1 hour ago' },
      { title: 'Infrastructure expansion plan discussed', time: 'Yesterday' },
      { title: 'Board committee minutes approved', time: 'Today' }
    ],
    chart: [58, 69, 74, 83, 91, 96]
  }
};

function applyDashboardTheme() {
  const savedTheme = localStorage.getItem('dashboardTheme') || '#123b8f';
  const themeMap = {
    '#123b8f': { primary: '#123b8f', secondary: '#2ac3bf' },
    '#1f8d72': { primary: '#1f8d72', secondary: '#5ab8aa' },
    '#d93030': { primary: '#d93030', secondary: '#ef8d6d' },
    '#6d4ec4': { primary: '#6d4ec4', secondary: '#9a8ef1' },
    '#1f2937': { primary: '#1f2937', secondary: '#607d8b' }
  };

  const selectedTheme = themeMap[savedTheme] || themeMap['#123b8f'];
  const fontScale = parseFloat(localStorage.getItem('dashboardTextScale') || '1');
  const iconScale = parseFloat(localStorage.getItem('dashboardIconScale') || '1');

  document.documentElement.style.setProperty('--primary', selectedTheme.primary);
  document.documentElement.style.setProperty('--primary-strong', selectedTheme.primary);
  document.documentElement.style.setProperty('--secondary', selectedTheme.secondary);
  document.documentElement.style.setProperty('--text-scale', `${fontScale}`);
  document.documentElement.style.setProperty('--icon-scale', `${iconScale}`);
}

function formatLeone(value) {
  return `Le ${Number(value).toLocaleString('en-SL')}`;
}

function getAdminOverviewStats() {
  const users = readUsers();
  const studentCount = users.filter((user) => user.role === 'student').length;
  const staffRoles = ['admin', 'registrar', 'exams', 'finance', 'secretary', 'hod', 'chairman', 'lecturer'];
  const staffCount = users.filter((user) => staffRoles.includes(user.role)).length;

  return [
    { label: 'Students', value: String(studentCount), meta: '0%', trend: 'up', icon: '🎓' },
    { label: 'Staff', value: String(staffCount), meta: '0%', trend: 'up', icon: '👥' },
    { label: 'Revenue', value: formatLeone(0), meta: '0%', trend: 'up', icon: '💰' },
    { label: 'Pending Tasks', value: '0', meta: '0%', trend: 'down', icon: '📋' }
  ];
}

function readUsers() {
  try {
    return JSON.parse(localStorage.getItem('collegeUsers')) || [];
  } catch (error) {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem('collegeUsers', JSON.stringify(users));
}

function renderUserManagementPanel() {
  const users = readUsers();

  return `
    <div class="user-management-shell">
      <div class="panel-header">
        <h3>Add new user</h3>
        <span class="badge neutral">Admin only</span>
      </div>

      <form id="userForm" class="user-form">
        <div class="user-form-grid">
          <label>
            <span>Full name</span>
            <input type="text" name="name" placeholder="Enter full name" required />
          </label>
          <label>
            <span>Student / Staff ID</span>
            <input type="text" name="id" placeholder="IMATT-0001" required />
          </label>
          <label>
            <span>Role</span>
            <select name="role" required>
              <option value="admin">Administrator</option>
              <option value="registrar">Registrar</option>
              <option value="exams">Exams Office</option>
              <option value="finance">Finance Office</option>
              <option value="secretary">Secretary</option>
              <option value="hod">Head of Department</option>
              <option value="chairman">Board Chairman</option>
              <option value="student">Student</option>
              <option value="lecturer">Lecturer</option>
            </select>
          </label>
          <label>
            <span>Department</span>
            <input type="text" name="department" value="Administration" placeholder="Department" required />
          </label>
        </div>
        <button type="submit" class="primary-btn compact-btn">Add person</button>
      </form>

      <div class="panel-header small-header">
        <h3>Recent registrations</h3>
      </div>

      <div class="user-list">
        ${users.length ? users.map((user) => `
          <div class="user-row">
            <div>
              <strong>${user.name}</strong>
              <small>${user.role}</small>
            </div>
            <span>${user.id}</span>
          </div>
        `).join('') : '<p class="empty-state">No people added yet.</p>'}
      </div>
    </div>
  `;
}

function renderChatPanel() {
  const messages = [
    { sender: 'Registrar', text: 'Student records have been verified for this week.', mine: false },
    { sender: 'Finance', text: 'Fee balances for final-year students are now updated.', mine: false },
    { sender: 'Admin', text: 'Please share the new applicant list before 3 PM.', mine: true },
    { sender: 'Exams', text: 'Final exam timetable has been uploaded.', mine: false }
  ];

  return `
    <div class="chat-shell">
      <div class="chat-header">
        <h3>College Communication</h3>
        <span class="badge success">Online</span>
      </div>
      <div class="chat-window">
        ${messages
          .map(
            (msg) => `
              <div class="message-row ${msg.mine ? 'mine' : ''}">
                <div class="message-bubble">
                  <small>${msg.sender}</small>
                  <p>${msg.text}</p>
                </div>
              </div>
            `
          )
          .join('')}
      </div>
      <div class="chat-input-row">
        <input type="text" placeholder="Type a message..." />
        <button>Send</button>
      </div>
    </div>
  `;
}

function renderSettingsPanel() {
  const themeColors = [
    { label: 'IMATT Blue', value: '#123b8f' },
    { label: 'Green', value: '#1f8d72' },
    { label: 'Red', value: '#d93030' },
    { label: 'Purple', value: '#6d4ec4' },
    { label: 'Dark', value: '#1f2937' }
  ];

  const activeColor = localStorage.getItem('dashboardTheme') || '#123b8f';
  const textScale = localStorage.getItem('dashboardTextScale') || '1';
  const iconScale = localStorage.getItem('dashboardIconScale') || '1';

  return `
    <div class="settings-shell">
      <div class="panel-header">
        <h3>Dashboard Theme</h3>
        <span class="badge neutral">Customize</span>
      </div>

      <div class="theme-palette">
        ${themeColors
          .map(
            (theme) => `
              <button
                class="color-swatch ${activeColor === theme.value ? 'selected' : ''}"
                data-theme="${theme.value}"
                style="background:${theme.value};"
                title="${theme.label}"
                aria-label="${theme.label}"
              ></button>
            `
          )
          .join('')}
      </div>

      <div class="settings-controls">
        <label class="range-control">
          <span>Text size</span>
          <input type="range" min="0.85" max="1.25" step="0.05" value="${textScale}" name="textScale" />
        </label>
        <label class="range-control">
          <span>Icon size</span>
          <input type="range" min="0.8" max="1.4" step="0.05" value="${iconScale}" name="iconScale" />
        </label>
      </div>

      <div class="settings-note">
        This theme applies to the dashboard color system, typography, and icon sizing.
      </div>
    </div>
  `;
}

function renderDashboard() {
  const role = localStorage.getItem('selectedRole') || 'admin';
  const config = roleConfig[role] || roleConfig.admin;
  const activeMenu = localStorage.getItem('selectedMenu') || 'overview';
  const menuData = menuContent[activeMenu] || menuContent.overview;

  const dashboardTitle = document.getElementById('dashboardTitle');
  const roleBadge = document.getElementById('roleBadge');
  const roleSummary = document.getElementById('roleSummary');
  const statsGrid = document.getElementById('statsGrid');
  const quickActions = document.getElementById('quickActions');
  const activityList = document.getElementById('activityList');
  const chartBars = document.getElementById('chartBars');
  const modulePanel = document.getElementById('modulePanel');

  const isCustomView = ['chat', 'settings', 'users'].includes(activeMenu);

  if (modulePanel) {
    modulePanel.style.display = isCustomView ? 'block' : 'none';
    if (activeMenu === 'chat') modulePanel.innerHTML = renderChatPanel();
    if (activeMenu === 'settings') modulePanel.innerHTML = renderSettingsPanel();
    if (activeMenu === 'users' && role === 'admin') modulePanel.innerHTML = renderUserManagementPanel();
  }

  if (statsGrid) statsGrid.style.display = isCustomView ? 'none' : 'grid';
  const contentGrid = document.querySelector('.content-grid');
  if (contentGrid) contentGrid.style.display = isCustomView ? 'none' : 'grid';
  if (chartBars) chartBars.closest('.wide-panel').style.display = isCustomView ? 'none' : 'block';

  if (dashboardTitle) dashboardTitle.textContent = `${config.roleName} - ${menuTitles[activeMenu]}`;
  if (roleBadge) roleBadge.textContent = config.roleName;
  if (roleSummary) roleSummary.innerHTML = `<strong>Role responsibility:</strong> ${config.responsibility}`;

  if (!isCustomView) {
    const baseStats = role === 'admin' && activeMenu === 'overview' ? getAdminOverviewStats() : config.stats;
    const stats = baseStats.map((stat, index) => ({
      ...stat,
      value: index === 0 && activeMenu !== 'overview' ? `${menuTitles[activeMenu]} ${stat.value}` : stat.value,
      meta: activeMenu === 'overview' ? stat.meta : `${menuTitles[activeMenu]} view`,
      trend: activeMenu === 'overview' ? stat.trend : 'up'
    }));

    statsGrid.innerHTML = stats
      .map(
        (stat) => `
          <article class="stat-card">
            <div class="stat-top">
              <span class="stat-label">${stat.label}</span>
              <span class="stat-icon">${stat.icon}</span>
            </div>
            <p class="stat-value">${stat.value}</p>
            <div class="stat-meta">
              <span class="${stat.trend === 'up' ? 'trend-up' : 'trend-down'}">${stat.meta}</span>
              <span>active</span>
            </div>
          </article>
        `
      )
      .join('');

    quickActions.innerHTML = menuData.quickActions
      .map(
        (item) => `
          <li class="list-item">
            <div>
              <strong>${item.title}</strong>
              <span>${item.tag}</span>
            </div>
            <span class="chip ${item.tone}">${item.tag}</span>
          </li>
        `
      )
      .join('');

    activityList.innerHTML = menuData.activity
      .map(
        (item) => `
          <li class="list-item">
            <div>
              <strong>${item.title}</strong>
              <span>${item.time}</span>
            </div>
            <span class="chip success">New</span>
          </li>
        `
      )
      .join('');

    chartBars.innerHTML = menuData.chart
      .map(
        (value, index) => `
          <div class="bar-group">
            <div class="bar ${index % 2 === 0 ? 'alt' : ''}" style="height:${value}%"></div>
            <span class="bar-label">${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][index]}</span>
          </div>
        `
      )
      .join('');
  }

  document.querySelectorAll('.nav-item').forEach((link) => {
    link.classList.toggle('active', link.dataset.menu === activeMenu);
  });

  const colorButtons = document.querySelectorAll('.color-swatch');
  colorButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedColor = button.dataset.theme;
      localStorage.setItem('dashboardTheme', selectedColor);
      applyDashboardTheme();
      renderDashboard();
    });
  });

  const textScaleRange = document.querySelector('input[name="textScale"]');
  const iconScaleRange = document.querySelector('input[name="iconScale"]');

  if (textScaleRange) {
    textScaleRange.addEventListener('input', (event) => {
      localStorage.setItem('dashboardTextScale', event.target.value);
      applyDashboardTheme();
    });
  }

  if (iconScaleRange) {
    iconScaleRange.addEventListener('input', (event) => {
      localStorage.setItem('dashboardIconScale', event.target.value);
      applyDashboardTheme();
    });
  }

  const userForm = document.getElementById('userForm');
  if (userForm) {
    userForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(userForm);
      const newUser = {
        name: formData.get('name').toString().trim(),
        id: formData.get('id').toString().trim(),
        role: formData.get('role').toString().trim(),
        department: formData.get('department').toString().trim(),
      };

      if (!newUser.name || !newUser.id || !newUser.role || !newUser.department) return;

      const users = readUsers();
      users.unshift(newUser);
      saveUsers(users);
      localStorage.setItem('selectedMenu', 'overview');
      renderDashboard();
    });
  }

  const chatInput = document.querySelector('.chat-input-row input');
  const chatButton = document.querySelector('.chat-input-row button');
  const chatWindow = document.querySelector('.chat-window');

  if (chatInput && chatButton && chatWindow) {
    const sendMessage = () => {
      const message = chatInput.value.trim();
      if (!message) return;

      const newRow = document.createElement('div');
      newRow.className = 'message-row mine';
      newRow.innerHTML = `
        <div class="message-bubble">
          <small>Admin</small>
          <p>${message}</p>
        </div>
      `;
      chatWindow.appendChild(newRow);
      chatWindow.scrollTop = chatWindow.scrollHeight;
      chatInput.value = '';

      window.setTimeout(() => {
        const replyRow = document.createElement('div');
        replyRow.className = 'message-row';
        replyRow.innerHTML = `
          <div class="message-bubble">
            <small>Registrar</small>
            <p>Message received. We will respond shortly.</p>
          </div>
        `;
        chatWindow.appendChild(replyRow);
        chatWindow.scrollTop = chatWindow.scrollHeight;
      }, 400);
    };

    chatButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  applyDashboardTheme();

  const loginForm = document.getElementById('loginForm');

  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const emailField = document.getElementById('loginEmail');
      const passwordField = document.getElementById('loginPassword');

      if (!emailField || !passwordField) {
        window.location.href = 'dashboard.html';
        return;
      }

      const enteredEmail = emailField.value.trim().toLowerCase();
      const enteredPassword = passwordField.value.trim();

      if (enteredEmail === adminCredentials.email.toLowerCase() && enteredPassword === adminCredentials.password) {
        localStorage.setItem('selectedRole', 'admin');
        localStorage.setItem('selectedMenu', 'overview');
        window.location.href = 'dashboard.html';
        return;
      }

      alert('Invalid admin credentials. Please use the official IMATT admin account.');
    });
  }

  if (document.body.classList.contains('dashboard-page')) {
    const navLinks = document.querySelectorAll('.nav-item');
    navLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const nextMenu = link.dataset.menu || 'overview';
        const role = localStorage.getItem('selectedRole') || 'admin';
        const allowedMenus = {
          admin: ['overview', 'students', 'staff', 'academics', 'finance', 'exams', 'reports', 'users', 'chat', 'settings'],
          registrar: ['overview', 'students', 'staff', 'academics', 'finance', 'exams', 'reports', 'chat', 'settings'],
          exams: ['overview', 'exams', 'reports', 'chat', 'settings'],
          finance: ['overview', 'finance', 'reports', 'chat', 'settings'],
          secretary: ['overview', 'students', 'staff', 'reports', 'chat', 'settings'],
          hod: ['overview', 'students', 'staff', 'academics', 'reports', 'chat', 'settings'],
          chairman: ['overview', 'reports', 'chat', 'settings']
        };

        if (!allowedMenus[role]?.includes(nextMenu)) {
          return;
        }

        localStorage.setItem('selectedMenu', nextMenu);
        renderDashboard();
      });
    });

    renderDashboard();
  }

  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('selectedRole');
      localStorage.removeItem('selectedMenu');
      window.location.href = 'index.html';
    });
  }
});
