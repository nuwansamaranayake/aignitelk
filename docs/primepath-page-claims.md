# PrimePath HR page claims and evidence

Page: `/products/primepath`. Copy: `src/app/products/primepath/content.ts`.
Source brief: PrimePath HR product page (Nuwan, 2026-10-05). Evidence checked on 2026-10-05 against the read-only repo `E:\AiGNITE\projects\PrimePath Payroll` (HEAD `bd8fc19`) and the live login page https://lk.primepathhr.ai/login.

Rule: change a claim here first, then in the content module.

## Claims backed by code

| Claim on the page | Evidence |
|---|---|
| EPF 8% employee, 12% employer, ETF 3% employer | `apps/api/src/modules/payroll/payroll-calculator.ts` lines 165 to 167 (`epfBase x 0.08 / 0.12 / 0.03`) |
| Overtime at 1.5x | `payroll-calculator.ts` line 133 (`basic / 240 x 1.5`) |
| APIT/PAYE | `payroll-calculator.ts` APIT slabs (line 285 on), `settings/tax-brackets` page, employee portal tax summary |
| Advances and loan deductions | `payroll-calculator.ts`, `payroll.service.ts` |
| PDF payslips | `apps/api/src/modules/payroll/payslip-pdf.service.ts` (pdfkit), single and combined PDF routes in `payroll.controller.ts` |
| EPF and ETF files in Excel format | `/reports/epf-c-form` (EPF C Form, monthly) and `/reports/etf-form-ii` (ETF Form II, half-yearly). Both pages call `exportToExcel` |
| Leave requests, approvals, balances: annual, casual, medical | `leave.controller.ts` (`requests/:id/approve`), `LeaveType` codes ANNUAL, CASUAL, MEDICAL, `/leave/balances` |
| Employee records: departments, bank details, EPF and ETF numbers | `schema.prisma` model Employee: `departmentId`, `bankName`, `bankAccountNo`, `epfNo`, `etfNo` |
| Employee portal: payslips, leave, attendance, tax summary | Web routes `/portal/payslips`, `/portal/leave`, `/portal/attendance`, `/portal/tax-summary` |
| Attendance and shifts: rosters, monthly attendance, no-pay days | Web routes `/attendance/shifts`, `/attendance/monthly`, `/attendance/nopay` |
| Reports: salary master by department, overtime, gratuity | `/reports/salary-master` (grouped by department), `/reports/ot-calculation`, `/reports/gratuity` |
| Audit log of changes | `AuditLog` model, written by attendance, deductions, employee, leave, organization and payroll services |
| Roles, scoped to a company or branch | `SYSTEM_ADMIN`, `HR_ADMIN`, `BRANCH_MANAGER`, `EMPLOYEE` in `packages/shared/src/schemas/auth.schema.ts`. Scope in `common/services/data-scope.service.ts` |
| System admin sets holidays, leave types, system settings | `settings.controller.ts` holidays, tax brackets, leave types, system settings routes |
| Each employee gets a login | Live login page has "Employee Login" (company code plus employee ID, `auth.schema.ts`) |
| Sinhala and English interface | `apps/web/src/i18n` with `si.json`, `LanguageToggle.tsx`, latest commit "Phase C5, universal Sinhala coverage". Not visible on the login page |

## Claims changed from the brief (code wins)

| Brief copy | Page copy | Reason |
|---|---|---|
| Add your team: Enter employees one by one or upload the Excel template. | Add each employee with department, bank and EPF details. | No employee import route. `employee.controller.ts` has create, update and list only. Bulk upload exists for deductions only |
| Employee portal: Staff see their own payslips, leave and documents. | Staff see their own payslips, leave, attendance and tax summary. | No documents in the portal routes |
| Documents: Contracts and records stored in the cloud. | Attendance and shifts: Shift rosters, monthly attendance and no-pay days. | No document storage model, upload route or storage client |
| Reports and audit trail: Payroll summaries, department reports and a log of every change. | Salary master by department, overtime and gratuity reports, plus an audit log of changes. | Named the real reports. Audit entries cover six services, so "every change" became "changes" |
| One system, three roles | One system, the right access for each role | The code has four roles, including branch manager |
| System admin: Creates users, sets holidays and company settings, reads the audit log. | Sets up companies, branches, holidays, leave types and system settings. | No admin user creation route (only self signup) and no audit log screen |
| Employee: Views payslips, requests leave, sends HR requests. | Views payslips, requests leave, checks attendance and tax summary. | No HR request feature |
| FAQ: PrimePath builds monthly EPF and ETF contribution files in Excel format. | PrimePath builds the monthly EPF C Form and the half-yearly ETF Form II return, ready to export to Excel. | ETF Form II is a half-year return |
| FAQ: request leave and send HR requests | request leave and check attendance | No HR request feature |
| FAQ: Role-based access for each user and an audit log of every change. | Role-based access for each user, scoped to a company or a branch, and an audit log of changes. | Scope per `data-scope.service.ts` |

## Claims guard

Run `scripts/check-copy-primepath.ps1`. Nothing on the page names AI, Tamil, pricing, accuracy, guarantees, APIT brackets, minimum wage, leave day counts or Act sections. PrimePath does ship an AI assistant (`apps/api/src/modules/ai`) and a Tamil locale file. The page leaves both out, per the brief.

## Claims to confirm (Nuwan)

1. Sinhala interface is live on lk.primepathhr.ai. The code has it, but the login page shows no language switch.
2. EPF and ETF file formats match current department requirements. The code builds the EPF C Form and ETF Form II and exports to Excel. Whether those match the departments' upload formats is unverified.
3. "PrimePath HR is a product of AIgnite Software (Private) Limited, PV 00362580". The live login footer says "© 2026 AiGNITE Consulting LLC | PrimePath HR™".
4. Demo requests go to aruni@aigniteconsulting.ai.
5. The home page card phrase "full compliance to Sri Lankan labor regulations" is left unchanged, per the brief. It is an accuracy claim the brief's guard bans on the new page.

## Mock data

Lanka Spice Traders (Pvt) Ltd, K. Perera, S. Fernando, R. Silva and N. Jayasinghe are fictional. NIC and EPF numbers are masked. Payslip math follows the PrimePath formulas:
- Overtime is 100,000 / 240 x 1.5 x 12 h = 7,500.
- EPF is 8% of basic = 8,000.
- Net pay is 99,500, the same as K. Perera's row in the demo salary sheet.
- The payslip shows no APIT line.
