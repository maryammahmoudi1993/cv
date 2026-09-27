// Static project data for the portfolio's Projects section.
// Rendered directly (no async fetch) so the section never shows a loading state.
export const projects = [
  {
    id: 'supportpilot-ai',
    title: { en: 'SupportPilot AI', zh: 'SupportPilot AI — 智慧客服平台' },
    role: 'Lead Backend Architect & AI Engineer',
    tagline: {
      en: 'Production-grade AI customer support platform with agent tools, human review, and workspace-level access control',
      zh: '具備智能代理工具、人工審核機制與工作區權限管理的生產級 AI 客服平台',
    },
    stack: ['Django', 'Next.js', 'React', 'PostgreSQL', 'pgvector', 'Celery', 'Redis', 'OpenAI Tool Calling', 'RBAC', 'CI/CD'],
    bullets: {
      en: [
        'Architected a modular Django API serving a Next.js/React frontend with workspace isolation, role-based access control, and full audit trails',
        'Integrated AI agent tooling with human-in-the-loop review gates — no autonomous action without explicit approval path',
        'Implemented semantic search over support history using pgvector embeddings for context-aware response generation',
        'Shipped 25 acceptance-tested phases to production; main branch continuously synchronized with final approved version',
        'Designed for observability: structured logging, error boundaries, and documented rollback procedures per feature',
      ],
      zh: [
        '設計模組化 Django API，搭配 Next.js/React 前端，實現工作區隔離、角色存取控制與完整稽核記錄',
        '整合 AI 代理工具，並設有人工審核關卡——任何自動操作皆須通過明確核准流程',
        '透過 pgvector 嵌入向量對支援歷史記錄進行語意搜尋，提升回應情境感知能力',
        '完成 25 個驗收測試階段並部署至正式環境；主分支持續與最終核准版本同步',
        '以可觀測性為設計核心：結構化日誌、錯誤邊界及每功能文件化回滾程序',
      ],
    },
    status: { en: 'Phase 25 Complete ✓', zh: '第 25 階段已完成 ✓' },
    featured: true,
  },
  {
    id: 'docpilot-ai',
    title: { en: 'DocPilot AI', zh: 'DocPilot AI — 智慧文件處理系統' },
    role: 'Full-Stack AI Engineer',
    tagline: {
      en: 'RAG-powered document intelligence system with human review, approval workflows, and activity reporting',
      zh: '基於 RAG 的文件智慧系統，具備人工審核、核准工作流程與活動報告功能',
    },
    stack: ['Django', 'React', 'PostgreSQL', 'pgvector', 'Celery', 'Redis', 'RAG', 'LangChain', 'REST API', 'JWT'],
    bullets: {
      en: [
        'Built a 12-app Django modular monolith handling document ingestion, chunking, embedding, and retrieval at scale',
        'Implemented RAG pipeline with human-review checkpoints before any document-sourced answer is surfaced to end users',
        '445 backend tests covering extraction accuracy, permission boundaries, and audit log integrity',
        'Approval and activity-reporting subsystem provides full traceability for compliance-sensitive document workflows',
      ],
      zh: [
        '建構 12 個 Django 應用程式的模組化單體架構，大規模處理文件擷取、分塊、嵌入與檢索',
        '實作 RAG 管線，在向終端使用者呈現任何文件來源答案前設有人工審核關卡',
        '445 項後端測試，涵蓋擷取準確性、權限邊界與稽核日誌完整性',
        '核准與活動報告子系統為合規敏感型文件工作流程提供完整的可追溯性',
      ],
    },
    status: { en: 'Production Case Study', zh: '生產環境案例研究' },
    metrics: { en: '12 Django apps · 445 tests', zh: '12 個 Django 應用程式 · 445 項測試' },
  },
  {
    id: 'bloomflow-ai',
    title: { en: 'BloomFlow AI', zh: 'BloomFlow AI — 商業預約管理平台' },
    role: 'Backend & AI Integration Engineer',
    tagline: {
      en: 'Business reservation and management platform with role-based access, AI scheduling assistance via Gemini, and 331 passing tests',
      zh: '具備角色型存取控制、Gemini AI 排程輔助功能的企業預約管理平台，通過 331 項測試',
    },
    stack: ['Django', 'DRF', 'React', 'TypeScript', 'PostgreSQL', 'Gemini API', 'Cloudflare Pages', 'Render', 'CI/CD'],
    bullets: {
      en: [
        'End-to-end reservation system: client booking flow, staff dashboard, and owner management panel with scoped permissions per role',
        'AI scheduling layer (Gemini) suggests optimal appointment slots based on historical booking patterns',
        'Frontend deployed on Cloudflare Pages; backend API on Render — live demo available',
        '331 passing tests across unit, integration, and permission boundary scenarios',
      ],
      zh: [
        '端對端預約系統：客戶預訂流程、員工儀表板與業主管理面板，各角色具備範圍限定的權限',
        'AI 排程層（Gemini）根據歷史預訂模式建議最佳預約時段',
        '前端部署於 Cloudflare Pages；後端 API 部署於 Render——提供線上展示',
        '涵蓋單元測試、整合測試與權限邊界場景的 331 項通過測試',
      ],
    },
    status: { en: 'Live Demo', zh: '線上展示' },
    metrics: { en: '331 tests · Live', zh: '331 項測試 · 線上運行' },
  },
  {
    id: 'inspectflow',
    title: { en: 'InspectFlow — Vision QC Dashboard', zh: 'InspectFlow — 視覺品質控制儀表板' },
    role: 'AI Engineer & Backend Developer',
    tagline: {
      en: 'Machine vision quality control dashboard with uncertainty review, label correction, model comparison, and release gating',
      zh: '具備不確定性審核、標籤修正、模型版本比對與發布把關功能的機器視覺品質控制儀表板',
    },
    stack: ['Django', 'Python', 'Computer Vision', 'Model Evaluation', 'pytest'],
    bullets: {
      en: [
        'Uncertainty-aware review queue: flags low-confidence predictions for human inspection before they affect production labels',
        'Side-by-side model comparison view for A/B evaluating two classifier versions before deployment decision',
        'Label correction workflow with full change history — supports iterative dataset improvement without overwriting originals',
        '22 passing tests; responsive across desktop and mobile; classifier adapter designed for plug-in replacement with real models',
      ],
      zh: [
        '不確定性感知審核佇列：在低信賴度預測影響正式標籤前，標記供人工檢查',
        '並排模型比對視圖，可在部署決策前對兩個分類器版本進行 A/B 評估',
        '具完整變更歷史的標籤修正工作流程——支援反覆改進資料集而不覆蓋原始資料',
        '22 項通過測試；支援桌面與行動裝置響應式顯示；分類器適配器設計為可插拔替換真實模型',
      ],
    },
    note: {
      en: 'Current classifier and accuracy figures use demonstration data; adapter layer ready for production model integration',
      zh: '目前分類器與準確率數據使用展示用資料；適配器層已備妥供正式模型整合',
    },
    status: { en: '95% Complete', zh: '完成度 95%' },
    metrics: { en: '22 tests', zh: '22 項測試' },
  },
  {
    id: 'ellison-portfolio',
    title: { en: 'Ellison Hsu — Interior Design Portfolio', zh: 'Ellison Hsu — 室內設計作品集網站' },
    role: 'Frontend Architect & Full-Stack Developer',
    tagline: {
      en: 'Multilingual Next.js portfolio with scratch-to-reveal interactions, password-protected admin CMS, and JSON-driven content management',
      zh: '多語言 Next.js 作品集網站，具備刮刮樂互動效果、密碼保護管理後台與 JSON 驅動內容管理',
    },
    stack: ['Next.js', 'React', 'TypeScript', 'JSON CMS', 'Docker', 'Cloudflare'],
    bullets: {
      en: [
        'Scratch-to-reveal project gallery interaction — differentiates the brand experience from standard portfolio templates',
        'Password-protected admin panel for content and image management without requiring a database or external CMS dependency',
        'Multilingual architecture (EN/ZH-TW/FA) with locale-aware routing',
        'Docker-ready; structured for zero-downtime content updates via JSON config files',
      ],
      zh: [
        '刮刮樂式作品集展示互動——讓品牌體驗有別於標準作品集模板',
        '密碼保護的管理面板，用於內容與圖片管理，無需資料庫或外部 CMS 依賴',
        '多語言架構（英文／繁體中文／波斯語），具備地區感知路由',
        'Docker 就緒；透過 JSON 設定檔實現零停機內容更新的結構化設計',
      ],
    },
    status: { en: 'In Development', zh: '開發中' },
    category: 'design',
  },
  {
    id: 'bloom-studio-design',
    title: { en: 'Bloom Studio — Booking UX Case Study', zh: 'Bloom Studio — 預約流程 UX 設計案例' },
    role: 'UI/UX Designer',
    tagline: {
      en: 'Mobile-first UI design case study: 9-screen customer booking flow and business management dashboard',
      zh: '行動優先的 UI 設計案例研究：9 頁客戶預約流程與企業管理儀表板',
    },
    stack: ['Figma', 'Mobile-first Design', 'UX Research'],
    bullets: {
      en: [
        'End-to-end customer journey: discovery → booking → confirmation across 9 mobile screens',
        'Parallel business-owner dashboard design for booking management, analytics, and staff scheduling',
        'Documented design decisions, component rationale, and user flow in PDF case study format',
      ],
      zh: [
        '端對端客戶旅程：探索→預約→確認，涵蓋 9 個行動裝置畫面',
        '業主管理儀表板並行設計，包含預約管理、數據分析與員工排班',
        '以 PDF 案例研究格式記錄設計決策、元件設計理由與使用者流程',
      ],
    },
    status: { en: 'Design Case Study', zh: '設計案例研究' },
    category: 'design',
  },
];
