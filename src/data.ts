export type Folder = {id:string; name:string; parentId:string|null; description:string; department:string; modified:string; starred?:boolean};
export type Doc = {id:string; name:string; folderId:string; type:'PDF'|'DOCX'|'XLSX'|'PPTX'; department:string; owner:string; modified:string; size:string; status:'Approved'|'For review'|'Draft'|'Archived'; sensitivity:'Internal'|'Public'|'Restricted'; version:string; description:string; starred?:boolean; trashed?:boolean};
export const initialFolders:Folder[]=[
{id:'governance',name:'Governance & Administration',parentId:null,description:'Policies, circulars, and official directives',department:'Municipal Administrator',modified:'Oct 17, 2026'},
{id:'finance',name:'Finance & Procurement',parentId:null,description:'Budgets, purchasing, and financial reports',department:'Municipal Budget',modified:'Oct 16, 2026'},
{id:'planning',name:'Planning & Development',parentId:null,description:'Development plans and project documentation',department:'MPDO',modified:'Oct 15, 2026'},
{id:'departments',name:'Department Records',parentId:null,description:'Working documents from municipal offices',department:'All departments',modified:'Oct 14, 2026'},
{id:'legal',name:'Legal & Compliance',parentId:null,description:'Policies, contracts, and compliance files',department:'Municipal Administrator',modified:'Oct 12, 2026'},
{id:'archives',name:'Archives',parentId:null,description:'Closed and historical records',department:'Records Office',modified:'Oct 10, 2026'},
{id:'memos',name:'Memorandums & Circulars',parentId:'governance',description:'Official internal communications',department:'Municipal Administrator',modified:'Oct 17, 2026'},
{id:'orders',name:'Executive Orders',parentId:'governance',description:'Executive office directives',department:'Municipal Administrator',modified:'Oct 11, 2026'},
{id:'resolutions',name:'Council Resolutions',parentId:'governance',description:'Council resolutions and related files',department:'Municipal Administrator',modified:'Oct 08, 2026'},
{id:'budgets',name:'Budget & Appropriations',parentId:'finance',description:'Budget preparation and allocations',department:'Municipal Budget',modified:'Oct 16, 2026'},
{id:'procurement',name:'Procurement Records',parentId:'finance',description:'Purchase requests and bidding files',department:'Municipal Budget',modified:'Oct 09, 2026'},
{id:'reports',name:'Financial Reports',parentId:'finance',description:'Financial statements and reports',department:'Municipal Accounting',modified:'Oct 14, 2026'},
{id:'devplans',name:'Development Plans',parentId:'planning',description:'Municipal plans and strategic documents',department:'MPDO',modified:'Oct 15, 2026'},
{id:'projects',name:'Programs & Projects',parentId:'planning',description:'Project implementation documents',department:'MPDO',modified:'Oct 13, 2026'},
{id:'monitoring',name:'Monitoring Reports',parentId:'planning',description:'Project monitoring and evaluation',department:'MPDO',modified:'Oct 12, 2026'},
{id:'office',name:'Office-Specific Documents',parentId:'departments',description:'Department-level working files',department:'All departments',modified:'Oct 14, 2026'},
{id:'submissions',name:'Reports & Submissions',parentId:'departments',description:'Submitted reports and correspondence',department:'All departments',modified:'Oct 11, 2026'},
{id:'policies',name:'Policies & Guidelines',parentId:'legal',description:'Policy references',department:'Municipal Administrator',modified:'Oct 12, 2026'},
{id:'contracts',name:'Agreements & Contracts',parentId:'legal',description:'Legal instruments and agreements',department:'Municipal Administrator',modified:'Oct 10, 2026'},
{id:'compliance',name:'Compliance Records',parentId:'legal',description:'Compliance submissions',department:'Municipal Administrator',modified:'Oct 09, 2026'},
{id:'closed',name:'Closed Records',parentId:'archives',description:'Completed and closed records',department:'Records Office',modified:'Oct 10, 2026'},
{id:'historical',name:'Historical Documents',parentId:'archives',description:'Older reference documents',department:'Records Office',modified:'Oct 05, 2026'}
];
export const initialDocs:Doc[]=[
{id:'d1',name:'Office Memorandum — Records Submission Guidelines.pdf',folderId:'memos',type:'PDF',department:'Municipal Administrator',owner:'Records Unit',modified:'Oct 17, 2026',size:'1.8 MB',status:'Approved',sensitivity:'Internal',version:'2.1',description:'Illustrative guidance on preparing and submitting municipal records.',starred:true},
{id:'d2',name:'Administrative Circular — Document Handling.docx',folderId:'memos',type:'DOCX',department:'Municipal Administrator',owner:'Admin Office',modified:'Oct 16, 2026',size:'348 KB',status:'For review',sensitivity:'Internal',version:'1.0',description:'Draft circular describing internal document handling procedures.'},
{id:'d3',name:'Annual Budget Summary 2026.xlsx',folderId:'budgets',type:'XLSX',department:'Municipal Budget',owner:'Budget Office',modified:'Oct 16, 2026',size:'842 KB',status:'Approved',sensitivity:'Restricted',version:'3.0',description:'Fictional sample annual budget summary for interface demonstration.',starred:true},
{id:'d4',name:'Appropriations Review Worksheet.xlsx',folderId:'budgets',type:'XLSX',department:'Municipal Budget',owner:'Budget Office',modified:'Oct 14, 2026',size:'496 KB',status:'Draft',sensitivity:'Internal',version:'0.8',description:'Sample working worksheet for appropriations review.'},
{id:'d5',name:'Municipal Development Plan — Working Draft.pdf',folderId:'devplans',type:'PDF',department:'MPDO',owner:'Planning Office',modified:'Oct 15, 2026',size:'4.2 MB',status:'For review',sensitivity:'Internal',version:'1.4',description:'Illustrative planning document used only for prototype demonstration.'},
{id:'d6',name:'Project Implementation Tracker.xlsx',folderId:'projects',type:'XLSX',department:'MPDO',owner:'Planning Office',modified:'Oct 13, 2026',size:'692 KB',status:'Draft',sensitivity:'Internal',version:'0.6',description:'Mock project tracking spreadsheet.'},
{id:'d7',name:'Quarterly Monitoring Brief.pdf',folderId:'monitoring',type:'PDF',department:'MPDO',owner:'Monitoring Unit',modified:'Oct 12, 2026',size:'2.1 MB',status:'Approved',sensitivity:'Public',version:'1.0',description:'Example monitoring report for the demonstration.',starred:true},
{id:'d8',name:'Departmental Submission Checklist.docx',folderId:'submissions',type:'DOCX',department:'All departments',owner:'Records Unit',modified:'Oct 11, 2026',size:'218 KB',status:'Approved',sensitivity:'Internal',version:'1.2',description:'Example checklist for departmental records submissions.'},
{id:'d9',name:'Policy Reference Manual.pdf',folderId:'policies',type:'PDF',department:'Municipal Administrator',owner:'Admin Office',modified:'Oct 12, 2026',size:'3.5 MB',status:'Approved',sensitivity:'Internal',version:'2.0',description:'Illustrative reference manual.'},
{id:'d10',name:'Service Agreement — Sample.docx',folderId:'contracts',type:'DOCX',department:'Municipal Administrator',owner:'Legal Desk',modified:'Oct 10, 2026',size:'312 KB',status:'For review',sensitivity:'Restricted',version:'1.1',description:'Fictional sample agreement for interface review.'},
{id:'d11',name:'Archived Activity Report 2025.pdf',folderId:'closed',type:'PDF',department:'Records Office',owner:'Records Unit',modified:'Oct 10, 2026',size:'1.4 MB',status:'Archived',sensitivity:'Internal',version:'1.0',description:'Example archived activity report.'},
{id:'d12',name:'Executive Order Index.xlsx',folderId:'orders',type:'XLSX',department:'Municipal Administrator',owner:'Admin Office',modified:'Oct 11, 2026',size:'274 KB',status:'Approved',sensitivity:'Public',version:'1.0',description:'Illustrative index of executive orders.'},
{id:'d13',name:'Council Resolution Register.pdf',folderId:'resolutions',type:'PDF',department:'Municipal Administrator',owner:'Records Unit',modified:'Oct 08, 2026',size:'1.1 MB',status:'Approved',sensitivity:'Public',version:'1.0',description:'Sample register of resolutions.'},
{id:'d14',name:'Procurement Request Log.xlsx',folderId:'procurement',type:'XLSX',department:'Municipal Budget',owner:'Procurement Unit',modified:'Oct 09, 2026',size:'402 KB',status:'Draft',sensitivity:'Internal',version:'0.9',description:'Fictional procurement tracking log.'},
{id:'d15',name:'Quarterly Financial Statement.pdf',folderId:'reports',type:'PDF',department:'Municipal Accounting',owner:'Accounting Office',modified:'Oct 14, 2026',size:'2.4 MB',status:'For review',sensitivity:'Restricted',version:'1.3',description:'Fictional financial statement for the prototype.'}
];
export const departments=['Municipal Administrator','Municipal Budget','Municipal Accounting','MPDO','Records Office','All departments'];
