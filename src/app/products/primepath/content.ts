// All visible copy for /products/primepath. Claims are checked against the PrimePath Payroll repo
// in docs/primepath-page-claims.md. Change a claim there first, then here.
// Copy rules: no em dashes, no semicolons, no banned words (see scripts/check-copy-primepath.ps1).

export const DEMO_URL = "mailto:aruni@aigniteconsulting.ai?subject=PrimePath%20HR%20demo";
export const SIGNIN_URL = "https://lk.primepathhr.ai/login";
export const PAGE_PATH = "/products/primepath";

export const meta = {
  title: "PrimePath HR | Payroll Software for Sri Lanka",
  description:
    "Run payroll for your Sri Lankan business with EPF, ETF and APIT built in. PDF payslips, EPF and ETF files, leave and employee records in one place.",
  ogAlt: "PrimePath HR logo beside a demo payslip with EPF and ETF lines",
};

export const brandSrc = (file: string) => `/img/primepath/brand/${file}`;

// Rupee format used across the page, same as the DrapeStudio page.
export const rs = (n: number) => `Rs. ${Math.round(n).toLocaleString("en-US")}`;

export const hero = {
  eyebrow: "PrimePath HR",
  title: "Salary sheet in. Payslips and EPF files out.",
  // REVIEW: Aruni. Translated with the gemini-translate skill (Gemini 2.5 Flash). EPF, ETF and APIT stay in Latin script.
  sinhala: "EPF, ETF සහ APIT අන්තර්ගත ශ්‍රී ලංකා වැටුප්.",
  sub: "Run monthly payroll, leave and employee records in one place. Built for small and medium businesses in Sri Lanka.",
  primary: "Book a demo",
  secondary: "Sign in",
  chips: ["EPF 8% + 12%", "ETF 3%", "APIT/PAYE", "Pay in LKR"],
  // Return names from the PrimePath reports module (EPF C Form, ETF Form II), shown as files out.
  files: ["EPF C Form", "ETF Form II"],
  payslipAlt: "Demo PrimePath payslip for K. Perera at Lanka Spice Traders, with EPF and ETF lines",
};

// Fictional demo payslip. Overtime follows the PrimePath formula: Basic / 240 x 1.5 per hour.
// EPF base is basic salary. APIT is left off on purpose: the page shows no APIT figures.
export const payslip = {
  tag: "Demo payslip",
  company: "Lanka Spice Traders (Pvt) Ltd",
  title: "Payslip",
  period: "October 2026",
  employee: "K. Perera",
  designation: "Warehouse Supervisor",
  fields: [
    { label: "Employee no.", value: "LST-014" },
    { label: "NIC", value: "XXXXXXXXXV" },
    { label: "EPF no.", value: "XXXX14" },
  ],
  earningsTitle: "Earnings",
  earnings: [
    { label: "Basic salary", amount: 100000 },
    { label: "Overtime, 12 h at 1.5x", amount: 7500 },
  ],
  grossLabel: "Gross pay",
  deductionsTitle: "Deductions",
  // Matches row 2 of the demo salary sheet: net 99,500 on both sides of the compare slider.
  deductions: [{ label: "EPF employee 8%", amount: 8000 }],
  totalDeductionsLabel: "Total deductions",
  netLabel: "Net pay",
  employerTitle: "Employer contributions",
  employer: [
    { label: "EPF employer 12%", amount: 12000 },
    { label: "ETF employer 3%", amount: 3000 },
  ],
  stamp: "Ready",
};

export const problem = {
  eyebrow: "The problem",
  title: "Spreadsheet payroll costs you every month",
  cards: [
    { title: "One formula, every payslip", body: "A single wrong cell spreads errors across the whole team." },
    { title: "Statutory files take hours", body: "Building EPF and ETF returns by hand eats the month end." },
    { title: "Payslip questions pile up", body: "Staff ask HR for payslips and leave balances again and again." },
  ],
};

export const steps = {
  eyebrow: "How PrimePath works",
  title: "Three steps to payday",
  items: [
    // Brief copy offered an Excel template upload. PrimePath has no employee import yet.
    { title: "Add your team", body: "Add each employee with department, bank and EPF details." },
    {
      title: "Run payroll",
      body: "PrimePath works out overtime, deductions, EPF, ETF and APIT for each employee.",
    },
    { title: "Pay and file", body: "Download PDF payslips plus EPF and ETF files in Excel format." },
  ],
};

// Fictional salary sheet for the before side. Row 3 holds the wrong formula, copied down.
export const sheet = {
  fileName: "Salary_Oct_FINAL_v3.xlsx",
  cellRef: "C3",
  formula: "=PRODUCT(B3,0.8)",
  columns: ["A", "B", "C", "D", "E"],
  headers: ["Name", "Basic", "EPF 8%", "OT", "Net"],
  rows: [
    { cells: ["K. Perera", "100,000", "8,000", "7,500", "99,500"], wrong: false },
    { cells: ["S. Fernando", "85,000", "68,000", "0", "17,000"], wrong: true },
    { cells: ["R. Silva", "120,000", "96,000", "4,500", "28,500"], wrong: true },
    { cells: ["N. Jayasinghe", "70,000", "56,000", "2,625", "16,625"], wrong: true },
  ],
  note: "0.8 typed for 0.08, then copied down the column",
};

export const compare = {
  eyebrow: "Before and after",
  title: "From salary sheet to payslip",
  sliderLabel: "Drag to compare the salary sheet with the PrimePath payslip",
  beforeLabel: "Salary sheet",
  afterLabel: "PrimePath payslip",
  caption: "Demo data. Names and numbers are fictional.",
  beforeAlt: "Demo salary sheet where a wrong EPF formula, 0.8 for 0.08, is copied down the column",
  afterAlt: "Demo PrimePath payslip for K. Perera with earnings, EPF, net pay and employer EPF and ETF",
};

export type ModuleKey =
  | "records"
  | "payroll"
  | "statutory"
  | "payslips"
  | "leave"
  | "portal"
  | "attendance"
  | "reports";

export const modules = {
  eyebrow: "Modules",
  title: "Everything HR runs on, in one system",
  items: [
    { key: "records", title: "Employee records", body: "Profiles, departments, bank details, EPF and ETF numbers." },
    { key: "payroll", title: "Payroll engine", body: "Monthly runs with overtime at 1.5x, advances and loan deductions." },
    { key: "statutory", title: "Statutory files", body: "EPF and ETF contribution files in Excel format." },
    { key: "payslips", title: "PDF payslips", body: "A clean payslip for each employee, each month." },
    { key: "leave", title: "Leave", body: "Requests, approvals and balances for annual, casual and medical leave." },
    // Brief copy listed documents. The portal has payslips, leave, attendance and tax summary pages.
    { key: "portal", title: "Employee portal", body: "Staff see their own payslips, leave, attendance and tax summary." },
    // Replaces the Documents card: PrimePath stores no document files yet.
    { key: "attendance", title: "Attendance and shifts", body: "Shift rosters, monthly attendance and no-pay days." },
    {
      key: "reports",
      title: "Reports and audit trail",
      body: "Salary master by department, overtime and gratuity reports, plus an audit log of changes.",
    },
  ] satisfies { key: ModuleKey; title: string; body: string }[],
};

export const calculator = {
  eyebrow: "Statutory math",
  title: "See the statutory math",
  sub: "Move the slider to set monthly liable earnings.",
  inputLabel: "Liable earnings",
  min: 30000,
  max: 500000,
  step: 1000,
  initial: 100000,
  outputs: [
    { key: "epfEmployee", label: "Employee EPF (8%)", rate: 0.08 },
    { key: "epfEmployer", label: "Employer EPF (12%)", rate: 0.12 },
    { key: "etf", label: "Employer ETF (3%)", rate: 0.03 },
    { key: "employerCost", label: "Total employer cost", rate: 1.15 },
    { key: "afterEpf", label: "After EPF, before APIT and other deductions", rate: 0.92 },
  ],
  note: "APIT applies per IRD tables inside PrimePath. Example only.",
};

export const roles = {
  eyebrow: "Roles",
  // Brief said three roles. PrimePath also has a branch manager role, so the heading drops the count.
  title: "One system, the right access for each role",
  items: [
    // Brief copy said creates users and reads the audit log. Neither screen exists yet.
    {
      title: "System admin",
      body: "Sets up companies, branches, holidays, leave types and system settings.",
    },
    { title: "HR admin", body: "Manages employees, runs payroll, approves leave, builds reports." },
    // Brief copy said sends HR requests. No HR request feature exists yet.
    { title: "Employee", body: "Views payslips, requests leave, checks attendance and tax summary." },
  ],
};

export const sriLanka = {
  eyebrow: "Built for Sri Lanka",
  title: "Made for payroll in Sri Lanka",
  chips: [
    "EPF, ETF, APIT and PAYE",
    "EPF and ETF file formats",
    "LKR pay",
    "Sinhala and English interface",
    "Overtime at 1.5x",
    "Works in any browser",
    "Role-based access",
  ],
  company:
    "PrimePath HR is a product of AIgnite Software (Private) Limited, company number PV 00362580, Colombo, Sri Lanka.",
};

export const getStarted = {
  eyebrow: "Get started",
  title: "From demo to first payroll",
  items: [
    { title: "Demo call", body: "We walk you through PrimePath with sample data." },
    { title: "Set up", body: "We load your company settings, holidays and employees." },
    { title: "Test run", body: "Run a test payroll and check every figure." },
    { title: "Go live", body: "Run your first real payroll and submit EPF and ETF files." },
  ],
  cta: "Book a demo",
};

export const faq = {
  title: "Questions and answers",
  items: [
    {
      q: "Which statutory items does PrimePath handle?",
      a: "EPF at 8% employee and 12% employer, ETF at 3% employer, APIT/PAYE and overtime.",
    },
    // ETF Form II is a half-year return, so the answer names both returns.
    {
      q: "Does PrimePath create EPF and ETF files?",
      a: "Yes. PrimePath builds the monthly EPF C Form and the half-yearly ETF Form II return, ready to export to Excel.",
    },
    {
      q: "Do employees see their own payslips?",
      a: "Yes. Each employee gets a login to view payslips, request leave and check attendance.",
    },
    {
      q: "Which languages does PrimePath support?",
      a: "Sinhala and English. Statutory terms stay as EPF, ETF, APIT and PAYE.",
    },
    {
      q: "How is our data protected?",
      a: "Role-based access for each user, scoped to a company or a branch, and an audit log of changes.",
    },
    {
      q: "How do we start?",
      a: "Book a demo. We set up PrimePath with your company data and run a test payroll with you.",
    },
    {
      q: "Who makes PrimePath HR?",
      a: "AIgnite Software (Private) Limited, company number PV 00362580, based in Colombo, Sri Lanka.",
    },
  ],
};

export const finalCta = {
  title: "Run your next payroll on PrimePath",
  primary: "Book a demo",
  secondary: "Sign in",
};

export const stickyCta = "Book a demo";
