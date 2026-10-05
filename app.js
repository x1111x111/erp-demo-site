/* 独立静态演示：以下所有数据均为手写虚构样例，不读取接口或浏览器存储。 */
const modules = {
  trading: {
    label: '进销存', title: '采购、销售与库存', lead: '浏览从采购入库到销售出库的样例单据与库存视图。',
    metrics: [['本月采购订单', '28', '虚构样例'], ['本月销售订单', '34', '虚构样例'], ['在库物料', '86', '虚构样例'], ['待处理单据', '7', '仅展示']],
    tabs: [
      { key: 'materials', label: '物料', columns: ['物料编码', '物料名称', '规格', '单位', '状态'], rows: [
        ['MAT-1001', '不锈钢板', '304 / 2.0 mm', '张', '启用'], ['MAT-1002', '伺服电机', '750 W', '台', '启用'], ['MAT-1003', '包装纸箱', '600 × 400 mm', '个', '启用'] ] },
      { key: 'partners', label: '客户／供应商', columns: ['往来编号', '名称', '类型', '地区', '状态'], rows: [
        ['PAR-001', '示例客户 · 华东', '客户', '上海', '启用'], ['PAR-002', '示例供应商 · 精工', '供应商', '苏州', '启用'], ['PAR-003', '示例客户 · 华南', '客户', '深圳', '启用'] ] },
      { key: 'warehouses', label: '仓库', columns: ['仓库编码', '仓库名称', '用途', '负责人', '状态'], rows: [
        ['WH-01', '原材料仓', '采购收货／领料', '演示仓管', '启用'], ['WH-02', '成品仓', '完工入库／销售出库', '演示仓管', '启用'] ] },
      { key: 'purchase-orders', label: '采购订单', columns: ['订单号', '供应商', '下单日期', '金额', '状态'], rows: [
        ['PO-DEMO-001', '示例供应商 · 精工', '2026-09-26', '¥ 18,600', '待审核'], ['PO-DEMO-002', '示例供应商 · 包材', '2026-09-24', '¥ 6,450', '已审核'], ['PO-DEMO-003', '示例供应商 · 精工', '2026-09-19', '¥ 12,800', '已完成'] ] },
      { key: 'sales-orders', label: '销售订单', columns: ['订单号', '客户', '交付日期', '金额', '状态'], rows: [
        ['SO-DEMO-001', '示例客户 · 华东', '2026-10-12', '¥ 42,000', '生产中'], ['SO-DEMO-002', '示例客户 · 华南', '2026-10-08', '¥ 16,800', '待发货'], ['SO-DEMO-003', '示例客户 · 华东', '2026-09-30', '¥ 28,500', '已完成'] ] },
      { key: 'inventory/balances', label: '库存余额', columns: ['物料编码', '物料名称', '仓库', '现存量', '状态'], rows: [
        ['MAT-1001', '不锈钢板', '原材料仓', '128 张', '正常'], ['MAT-1002', '伺服电机', '原材料仓', '12 台', '低于预警'], ['FG-2001', '智能装配箱', '成品仓', '24 套', '正常'] ] },
      { key: 'inventory/ledger', label: '库存流水', columns: ['流水号', '类型', '物料', '数量', '日期'], rows: [
        ['ST-DEMO-001', '采购入库', '不锈钢板', '+ 40 张', '2026-09-28'], ['ST-DEMO-002', '生产领料', '伺服电机', '− 6 台', '2026-09-27'], ['ST-DEMO-003', '销售出库', '智能装配箱', '− 3 套', '2026-09-25'] ] },
      { key: 'inventory/transfers', label: '库存调拨', columns: ['调拨号', '调出仓', '调入仓', '物料', '数量'], rows: [
        ['TR-DEMO-001', '原材料仓', '生产备料仓', '不锈钢板', '20 张'] ] },
      { key: 'inventory/freezes', label: '库存冻结', columns: ['冻结号', '仓库', '物料', '数量', '原因'], rows: [
        ['FR-DEMO-001', '原材料仓', '伺服电机', '2 台', '质量复检样例'] ] },
    ],
  },
  production: {
    label: '生产管理', title: '从物料清单到生产工单', lead: '展示 BOM、工单与物料需求之间的关系；不产生真实领料或完工入库。',
    metrics: [['有效 BOM', '12', '虚构样例'], ['进行中工单', '8', '虚构样例'], ['待领料工单', '3', '仅展示'], ['预计本周完工', '42 套', '虚构样例']],
    tabs: [
      { key: 'boms', label: 'BOM 版本', columns: ['BOM 编号', '产品', '版本', '生效日期', '状态'], rows: [
        ['BOM-DEMO-001', '智能装配箱', 'V2.1', '2026-09-01', '有效'], ['BOM-DEMO-002', '轻型控制柜', 'V1.0', '2026-08-15', '有效'], ['BOM-DEMO-003', '智能装配箱', 'V2.0', '2026-06-01', '已停用'] ] },
      { key: 'work-orders', label: '生产工单', columns: ['工单号', '产品', '计划数量', '计划完工', '状态'], rows: [
        ['WO-DEMO-001', '智能装配箱', '30 套', '2026-10-10', '生产中'], ['WO-DEMO-002', '轻型控制柜', '12 台', '2026-10-13', '待领料'], ['WO-DEMO-003', '智能装配箱', '18 套', '2026-10-05', '待审核'] ] },
      { key: 'material-issues', label: '生产领料', columns: ['领料单号', '工单号', '物料', '数量', '状态'], rows: [
        ['MI-DEMO-001', 'WO-DEMO-001', '不锈钢板', '40 张', '草稿'], ['MI-DEMO-002', 'WO-DEMO-001', '伺服电机', '6 台', '已记账'] ] },
      { key: 'material-returns', label: '生产退料', columns: ['退料单号', '原领料单', '物料', '数量', '状态'], rows: [
        ['MR-DEMO-001', 'MI-DEMO-002', '伺服电机', '1 台', '已记账'] ] },
      { key: 'finished-receipts', label: '成品入库草稿', columns: ['草稿编号', '工单号', '产品', '数量', '状态'], rows: [
        ['FR-DEMO-001', 'WO-DEMO-001', '智能装配箱', '6 套', '仅草稿'] ] },
      { key: 'shortage', label: '工单用料缺口', columns: ['工单号', '所需物料', '需求量', '可用量', '提示'], rows: [
        ['WO-DEMO-001', '不锈钢板', '60 张', '128 张', '充足'], ['WO-DEMO-001', '伺服电机', '30 台', '12 台', '缺口 18 台'], ['WO-DEMO-002', '包装纸箱', '12 个', '76 个', '充足'] ] },
    ],
  },
  finance: {
    label: '财务管理', title: '业务核对与手工总账', lead: '演示期间、科目和凭证的页面结构；金额不构成财务账簿。',
    metrics: [['演示会计期间', '2026-09', '虚构样例'], ['待复核凭证', '3', '仅展示'], ['已过账凭证', '18', '虚构样例'], ['借贷差额', '¥ 0', '虚构样例']],
    tabs: [
      { key: 'amounts', label: '业务金额核对', columns: ['业务单号', '往来单位', '业务类型', '金额', '状态'], rows: [
        ['PO-DEMO-002', '示例供应商 · 包材', '采购收货', '¥ 6,450', '已过账'], ['SO-DEMO-003', '示例客户 · 华东', '销售发货', '¥ 28,500', '已过账'] ] },
      { key: 'cost', label: '库存成本来源', columns: ['流水号', '业务类型', '物料', '库存成本', '日期'], rows: [
        ['ST-DEMO-001', '采购收货', '不锈钢板', '¥ 8,600', '2026-09-28'] ] },
      { key: 'partners', label: '往来单位业务汇总', columns: ['往来单位', '类型', '过账笔数', '业务金额', '状态'], rows: [
        ['示例客户 · 华东', '客户', '2', '¥ 70,500', '示意记录'] ] },
      { key: 'checks', label: '来源完整性检查', columns: ['订单号', '来源单据', '库存流水', '业务数量', '结果'], rows: [
        ['PO-DEMO-002', '收货样例', 'ST-DEMO-001', '40 张', '已匹配'] ] },
      { key: 'ledger', label: '手工凭证与总账', columns: ['凭证号', '摘要', '期间', '借方合计', '状态'], rows: [
        ['V-DEMO-018', '采购结算样例', '2026-09', '¥ 18,600', '待复核'], ['V-DEMO-017', '原材料入账样例', '2026-09', '¥ 12,800', '已过账'] ] },
      { key: 'periods', label: '会计期间', columns: ['期间', '开始日期', '结束日期', '凭证数', '状态'], rows: [
        ['2026-09', '2026-09-01', '2026-09-30', '21', '开放'], ['2026-08', '2026-08-01', '2026-08-31', '19', '已关闭'] ] },
      { key: 'accounts', label: '会计科目', columns: ['科目编码', '科目名称', '类别', '级次', '状态'], rows: [
        ['1002', '银行存款', '资产', '一级', '启用'], ['1403', '原材料', '资产', '一级', '启用'], ['2202', '应付账款', '负债', '一级', '启用'], ['6001', '主营业务收入', '损益', '一级', '启用'] ] },
      { key: 'vouchers', label: '凭证台账', columns: ['凭证号', '摘要', '期间', '借方合计', '状态'], rows: [
        ['V-DEMO-018', '采购结算样例', '2026-09', '¥ 18,600', '待复核'], ['V-DEMO-017', '原材料入账样例', '2026-09', '¥ 12,800', '已过账'], ['V-DEMO-016', '银行收款样例', '2026-09', '¥ 28,500', '已过账'] ] },
    ],
  },
  reports: {
    label: '经营报表', title: '经营执行统计', lead: '按已过账业务动作的笔数展示采购、销售与生产执行；不含收入、利润或应收应付。',
    metrics: [['销售发货', '31', '虚构笔数'], ['采购收货', '24', '虚构笔数'], ['生产领料', '18', '虚构笔数'], ['未完订单', '7', '虚构快照']],
    tabs: [
      { key: 'actions', label: '业务动作', columns: ['业务动作', '笔数', '统计口径'], rows: [
        ['销售发货', '31', '已过账业务记录'], ['采购收货', '24', '已过账业务记录'], ['生产领料', '18', '已记账领料记录'] ] },
      { key: 'backlog', label: '当前待执行', columns: ['业务项目', '数量', '统计口径'], rows: [
        ['未完采购订单', '3', '当前快照'], ['未完销售订单', '4', '当前快照'], ['进行中工单', '8', '当前快照'] ] },
      { key: 'stock', label: '当前库存覆盖', columns: ['指标', '数量', '统计口径'], rows: [
        ['有库存物料种类', '86', '当前快照'], ['有库存仓库', '2', '当前快照'] ] },
    ],
  },
  approvals: {
    label: '审批与流程', title: '审批任务与流程记录', lead: '查看样例任务状态和审批链；按钮不会触发真实审批。',
    metrics: [['待我处理', '5', '虚构样例'], ['本月已办', '23', '虚构样例'], ['平均处理时长', '1.6 天', '虚构样例'], ['异常实例', '1', '仅展示']],
    tabs: [
      { key: 'instances', label: '流程实例台账', columns: ['实例编号', '关联单据', '流程', '当前环节', '状态'], rows: [
        ['WF-DEMO-001', 'PO-DEMO-001', '采购审核', '部门负责人', '进行中'], ['WF-DEMO-002', 'WO-DEMO-001', '工单审核', '生产主管', '已完成'], ['WF-DEMO-003', 'V-DEMO-018', '凭证复核', '财务主管', '进行中'] ] },
      { key: 'definitions', label: '流程定义', columns: ['定义编码', '业务类型', '版本', '适用范围', '状态'], rows: [
        ['WF-PURCHASE', '采购审核', 'V1', '当前公司', '已发布'], ['WF-WORK', '工单审核', 'V1', '当前公司', '草稿'] ] },
    ],
  },
  integrations: {
    label: '系统集成', title: '外部系统连接概览', lead: '展示集成台账的界面；这里不会向 OA、飞书或对象存储发送请求。',
    metrics: [['计划连接', '4', '虚构样例'], ['已配置', '2', '虚构样例'], ['待验证', '2', '仅展示'], ['最近同步', '—', '未连接']],
    tabs: [
      { key: 'status', label: '连接与接入状态', columns: ['连接项', '用途', '环境', '状态', '说明'], rows: [
        ['流程引擎', '审批流程', '演示', '未检测', '静态页面不连接后端'], ['对象存储', '附件服务', '演示', '未检测', '静态页面不连接后端'], ['企业 OA', '单点登录', '演示', '未接入', '正式版尚未开发'], ['飞书', '业务提醒', '演示', '未接入', '正式版尚未开发'] ] },
    ],
  },
  platform: {
    label: '组织与账号', title: '组织、用户与权限', lead: '浏览租户组织结构、角色与权限配置的示意页面。',
    metrics: [['演示公司', '1', '虚构样例'], ['部门', '5', '虚构样例'], ['演示账号', '12', '未启用登录'], ['角色', '6', '虚构样例']],
    tabs: [
      { key: 'companies', label: '公司', columns: ['组织编号', '名称', '上级组织', '类型', '状态'], rows: [
        ['ORG-001', '青禾机电（虚构）', '—', '公司', '启用'] ] },
      { key: 'departments', label: '部门', columns: ['部门编号', '名称', '所属公司', '负责人', '状态'], rows: [
        ['DEP-001', '采购部', '青禾机电（虚构）', '演示采购主管', '启用'], ['DEP-002', '生产部', '青禾机电（虚构）', '演示生产主管', '启用'] ] },
      { key: 'positions', label: '岗位', columns: ['岗位编号', '名称', '所属部门', '岗位类型', '状态'], rows: [
        ['POS-001', '采购专员', '采购部', '业务', '启用'], ['POS-002', '仓库管理员', '仓储部', '业务', '启用'] ] },
      { key: 'employees', label: '员工', columns: ['员工编号', '姓名', '所属部门', '岗位', '状态'], rows: [
        ['EMP-001', '演示采购员', '采购部', '采购专员', '在职'], ['EMP-002', '演示仓管员', '仓储部', '仓库管理员', '在职'] ] },
      { key: 'users', label: '用户账号', columns: ['账号', '显示名称', '部门', '角色', '状态'], rows: [
        ['demo.purchase', '演示采购员', '采购部', '采购专员', '示意账号'], ['demo.planner', '演示计划员', '生产部', '生产计划', '示意账号'], ['demo.finance', '演示会计', '财务部', '会计', '示意账号'] ] },
      { key: 'roles', label: '角色权限', columns: ['角色编码', '角色名称', '业务范围', '成员数', '状态'], rows: [
        ['ROLE-01', '采购专员', '采购订单／供应商', '3', '启用'], ['ROLE-02', '仓库管理员', '收发货／库存', '2', '启用'], ['ROLE-03', '会计', '凭证／报表', '2', '启用'] ] },
      { key: 'messages/my', label: '我的消息', columns: ['消息编号', '类型', '摘要', '时间', '状态'], rows: [
        ['MSG-DEMO-001', '业务提醒', '采购订单待审核样例', '2026-09-28 10:30', '未读'] ] },
    ],
  },
};

const main = document.querySelector('#main-content');
const nav = document.querySelector('#nav');
const breadcrumb = document.querySelector('#breadcrumb');
const sidebar = document.querySelector('#sidebar');
const mobileMenu = document.querySelector('#mobile-menu');
const navBackdrop = document.querySelector('#nav-backdrop');
const dialog = document.querySelector('#detail-dialog');
const dialogTitle = document.querySelector('#dialog-title');
const dialogContent = document.querySelector('#dialog-content');
const status = document.querySelector('#status');
const expanded = new Set();

function node(tag, className, content) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (content !== undefined) element.textContent = content;
  return element;
}
function append(parent, ...children) { parent.append(...children); return parent; }
function route() {
  const [moduleKey = 'home', ...sectionParts] = (location.hash.replace(/^#\/?/, '') || 'home').split('/');
  const tabKey = sectionParts.join('/');
  if (!modules[moduleKey]) return { moduleKey: 'home', tabKey: '' };
  const module = modules[moduleKey];
  return { moduleKey, tabKey: module.tabs.some((tab) => tab.key === tabKey) ? tabKey : module.tabs[0].key };
}
function closeMobileNav() {
  sidebar.classList.remove('is-open');
  navBackdrop.hidden = true;
  mobileMenu.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-label', '打开业务导航');
}
function renderNav(activeModule, activeTab) {
  nav.replaceChildren();
  const descriptions = {
    home: '总览', trading: '采购 · 销售 · 库存', production: 'BOM · 工单',
    finance: '业务核对 · 手工总账', reports: '业务统计', approvals: '实例台账 · 定义',
    integrations: 'OA · 飞书 · 存储', platform: '基础平台',
  };
  for (const [key, module] of [['home', { label: '工作台' }], ...Object.entries(modules)]) {
    const grouped = key === 'trading' || key === 'platform';
    const link = node('a', `nav-item ${grouped ? 'nav-group-link' : ''} ${activeModule === key && !grouped ? 'active' : ''}`);
    link.href = key === 'home' ? '#/home' : `#/${key}/${module.tabs[0].key}`;
    if (activeModule === key && !grouped) link.setAttribute('aria-current', 'page');
    append(link, node('span', 'nav-indicator'), append(node('span'), node('strong', '', module.label), node('small', '', descriptions[key])));
    if (grouped) {
      const group = node('div', 'nav-group');
      const row = node('div', `nav-group-row ${activeModule === key ? 'active' : ''}`);
      const toggle = node('button', 'nav-expand');
      toggle.type = 'button';
      toggle.setAttribute('aria-label', `${expanded.has(key) ? '收起' : '展开'}${module.label}子菜单`);
      toggle.setAttribute('aria-expanded', String(expanded.has(key)));
      toggle.setAttribute('aria-controls', `subnav-${key}`);
      append(toggle, node('span', 'nav-chevron'));
      toggle.addEventListener('click', () => { expanded.has(key) ? expanded.delete(key) : expanded.add(key); renderNav(activeModule, activeTab); });
      append(row, link, toggle); append(group, row);
      const subnav = node('div', 'nav-submenu'); subnav.id = `subnav-${key}`; subnav.hidden = !expanded.has(key);
      for (const tab of module.tabs) {
        const sublink = node('a', `nav-subitem ${activeModule === key && activeTab === tab.key ? 'active' : ''}`, tab.label);
        sublink.href = `#/${key}/${tab.key}`;
        if (activeModule === key && activeTab === tab.key) sublink.setAttribute('aria-current', 'page');
        append(subnav, sublink);
      }
      append(group, subnav); append(nav, group);
    } else append(nav, link);
  }
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMobileNav));
}
function pageHeading(kicker, title, lead, badge = '') {
  const wrap = node('div', 'page-heading');
  const text = node('div');
  append(text, node('p', 'section-kicker', kicker), node('h1', '', title), node('p', '', lead));
  append(wrap, text);
  if (badge) append(wrap, node('span', 'formal-badge', badge));
  return wrap;
}
function metrics(items) {
  const grid = node('div', 'metric-grid');
  for (const [label, value, note] of items) {
    const card = node('div', 'metric');
    append(card, node('span', 'metric-label', label), node('strong', '', value), node('small', '', note));
    append(grid, card);
  }
  return grid;
}
function sectionHead(title, note) {
  return append(node('div', 'section-head'), node('h2', '', title), node('span', '', note));
}
function homeView() {
  const view = node('div', 'workspace home-view');
  append(view, pageHeading('业务工作台', '业务从这里开始', '采购、销售、库存与生产，集中查看当前进度。'));
  const feature = node('section', 'home-feature');
  const featureMain = node('div', 'feature-main');
  append(featureMain, node('p', 'feature-label', '当前工作范围'), node('h2', '', '业务流转，一处掌握'), node('p', '', '沿用正式 ERP 的业务页面结构，使用虚构样例浏览模块；这里不会产生正式业务账。'));
  const actions = node('div', 'feature-actions');
  const trading = node('a', 'feature-link', '进入进销存'); trading.href = '#/trading/materials';
  const production = node('a', 'feature-link secondary', '查看生产管理'); production.href = '#/production/boms';
  append(actions, trading, production); append(featureMain, actions);
  const featureSide = node('div', 'feature-side');
  append(featureSide, node('span', '', '当前阶段'), node('strong', '', '演示与验证'), node('p', '', '只读界面样例；正式投产仍需业务验收与后端服务。'));
  append(feature, featureMain, featureSide); append(view, feature);

  const overview = node('section', 'overview-section');
  append(overview, sectionHead('业务概况', '当前租户 · 虚构样例'));
  const strip = node('div', 'metric-strip');
  [['采购订单', '28'], ['销售订单', '34'], ['生产工单', '8'], ['BOM 版本', '12']].forEach(([label, value]) => {
    append(strip, append(node('div', 'metric-item'), node('span', '', label), node('strong', '', value), node('small', '', '条样例')));
  });
  append(overview, strip); append(view, overview);

  const modulesSection = node('section', 'overview-section');
  append(modulesSection, sectionHead('业务模块', '按工作内容进入'));
  const grid = node('div', 'module-grid');
  const homeModules = [
    ['trading', '采购与销售', '订单、收发货及客户供应商', '可浏览'],
    ['trading', '库存管理', '库存余额与收发流水', '可浏览', 'inventory/balances'],
    ['production', '生产管理', 'BOM 版本与生产工单', '界面演示'],
    ['finance', '财务管理', '业务金额核对与手工总账凭证', '界面演示'],
    ['reports', '经营报表', '采购、销售和生产单据统计', '界面演示'],
    ['approvals', '审批与流程', '流程实例台账与定义', '界面演示'],
    ['integrations', '系统集成', '流程、存储与外部连接进度', '界面演示'],
    ['platform', '组织与账号', '公司、部门、人员和权限', '可浏览'],
  ];
  homeModules.forEach(([key, title, detail, state, section]) => {
    const link = node('a', 'module-item'); link.href = `#/${key}/${section || modules[key].tabs[0].key}`;
    const top = node('div', 'module-item-top');
    append(top, node('h3', '', title), node('span', 'formal-badge muted-badge', state));
    append(link, top, node('p', '', detail), node('span', 'module-enter', '打开模块 ↗')); append(grid, link);
  });
  append(modulesSection, grid); append(view, modulesSection);

  const recent = node('section', 'overview-section recent-section');
  const recentHead = sectionHead('最近工单', '');
  const all = node('a', '', '查看全部'); all.href = '#/production/work-orders'; recentHead.lastChild.replaceWith(all);
  append(recent, recentHead);
  const list = node('div', 'recent-list');
  [['WO-DEMO-001', '智能装配箱', '30 套', '生产中'], ['WO-DEMO-002', '轻型控制柜', '12 台', '待领料']].forEach((row) => {
    append(list, append(node('div', 'recent-row'), node('strong', '', row[0]), node('span', '', row[1]), node('span', '', row[2]), node('span', 'formal-badge', row[3])));
  });
  append(recent, list); append(view, recent);
  return view;
}
function statusClass(value) {
  if (/待|缺口|低于|未连接|异常/.test(value)) return 'pending';
  if (/停用|关闭|示意|—/.test(value)) return 'neutral';
  return '';
}
function showDetails(tab, row) {
  dialogTitle.textContent = row[0];
  const list = node('dl', 'detail-list');
  tab.columns.forEach((column, index) => append(list, node('dt', '', column), node('dd', '', row[index])));
  dialogContent.replaceChildren(list);
  dialog.showModal();
  status.textContent = `已打开 ${row[0]} 的样例详情`;
}
function renderTable(tab, query, target) {
  const matches = tab.rows.filter((row) => row.some((value) => value.toLocaleLowerCase('zh-CN').includes(query.toLocaleLowerCase('zh-CN'))));
  const scroll = node('div', 'table-scroll');
  const table = node('table');
  append(table, node('caption', 'sr-only', `${tab.label}虚构样例`));
  const head = node('thead'); const headRow = node('tr');
  [...tab.columns, '查看'].forEach((column) => append(headRow, node('th', '', column)));
  append(head, headRow); append(table, head);
  const body = node('tbody');
  for (const row of matches) {
    const tr = node('tr');
    row.forEach((value, index) => {
      const cell = node('td', /¥|\d+[.%]|[+-] \d/.test(value) ? 'number' : '');
      if (tab.columns[index] === '状态' || tab.columns[index] === '提示' || tab.columns[index] === '结果') append(cell, node('span', `status-tag ${statusClass(value)}`, value));
      else cell.textContent = value;
      append(tr, cell);
    });
    const action = node('td'); const detail = node('button', 'text-button', '查看详情');
    detail.type = 'button'; detail.setAttribute('aria-label', `查看 ${row[0]} 的样例详情`);
    detail.addEventListener('click', () => showDetails(tab, row));
    append(action, detail); append(tr, action); append(body, tr);
  }
  append(table, body); append(scroll, table);
  target.replaceChildren(scroll, node('p', 'table-footer', `显示 ${matches.length} 条虚构样例 · 窄屏可横向滚动表格 · 不连接真实业务数据`));
  if (!matches.length) append(target, node('p', 'empty-state', '没有匹配的样例。试试其他编号或名称。'));
}
function moduleView(moduleKey, tabKey) {
  const module = modules[moduleKey]; const tab = module.tabs.find((item) => item.key === tabKey);
  const formalCopy = {
    trading: ['进销存 · 阶段五', '采购、销售与库存', '管理基础资料、订单与库存流转。', '尚未完成验收'],
    production: ['生产管理 · 阶段六', 'BOM、工单与生产单据', '按已发布 BOM 建立工单，追溯领退料并登记成品入库草稿。', '生产闭环建设中'],
    finance: ['财务管理 · 主模块', '财务管理', '核对进销存业务来源，并办理单币种手工总账凭证。', '业务自动入账未启用'],
    reports: ['报表与分析 · 经营执行', '经营报表', '以当前公司的已过账业务动作为主线，观察采购、销售与生产执行。', '单据笔数口径'],
    approvals: ['审批与流程 · 过程台账', '审批与流程', '核对业务审批实例，管理当前公司使用的流程定义。', '流程示意'],
    integrations: ['系统集成 · 主模块', '系统集成', '检查已接入依赖的可用性，并区分尚未开发的外部连接。', '连接示意'],
    platform: ['基础平台', '组织与账号', '维护当前租户的组织资料、账号和角色授权。', '只读演示'],
  };
  const [kicker, title, lead, badge] = formalCopy[moduleKey];
  const view = node('div', 'page-shell');
  append(view, pageHeading(kicker, title, lead, badge));
  const content = node('div', 'content');
  const note = node('p', 'demo-readonly-note', '公开界面演示：以下均为虚构样例。此页不连接正式 ERP，也不执行新增、审批或过账。');
  append(content, note);
  if (moduleKey === 'reports') append(content, metrics(module.metrics));
  const panel = node('section', 'surface-panel demo-surface');
  const panelHead = node('div', 'demo-panel-head', tab.label);
  append(panel, panelHead);
  if (moduleKey === 'trading') append(panel, node('p', 'demo-panel-description', '新订单先保存为草稿，审核通过后才能收发货。这里仅展示字段和虚构记录。'));
  if (moduleKey === 'platform') append(panel, node('p', 'demo-panel-description', '资料按租户隔离。演示版不提供新增、编辑和授权操作。'));
  const tabs = node('nav', 'demo-section-tabs'); tabs.setAttribute('aria-label', `${module.label}板块`);
  module.tabs.forEach((item) => {
    const link = node('a', `demo-section-tab ${item.key === tabKey ? 'selected' : ''}`, item.label);
    link.href = `#/${moduleKey}/${item.key}`;
    if (item.key === tabKey) link.setAttribute('aria-current', 'page');
    append(tabs, link);
  });
  if (moduleKey !== 'trading' && moduleKey !== 'platform') append(panel, tabs);
  const toolbar = node('div', 'demo-table-toolbar');
  const search = node('label', 'demo-search-label');
  append(search, node('span', '', `搜索${tab.label}样例`));
  const input = node('input'); input.type = 'search'; input.placeholder = '输入编号或名称'; input.autocomplete = 'off';
  append(search, input); append(toolbar, search);
  const refresh = node('button', 'demo-refresh', '刷新'); refresh.type = 'button';
  refresh.addEventListener('click', () => { input.value = ''; renderTable(tab, '', tableTarget); });
  append(toolbar, refresh); append(panel, toolbar);
  const tableTarget = node('div'); append(panel, tableTarget);
  renderTable(tab, '', tableTarget);
  input.addEventListener('input', () => renderTable(tab, input.value.trim(), tableTarget));
  append(content, panel); append(view, content);
  return view;
}
function render() {
  const { moduleKey, tabKey } = route();
  if (moduleKey !== 'home') expanded.add(moduleKey);
  renderNav(moduleKey, tabKey);
  const title = moduleKey === 'home' ? '工作台' : modules[moduleKey].label;
  breadcrumb.replaceChildren(document.createTextNode('工贸 ERP '), node('span', '', '/'), document.createTextNode(title));
  main.replaceChildren(moduleKey === 'home' ? homeView() : moduleView(moduleKey, tabKey));
  document.title = `${title} · 工贸 ERP 界面演示`;
  closeMobileNav();
  if (location.hash) main.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: 'auto' });
}

mobileMenu.addEventListener('click', () => {
  const open = !sidebar.classList.contains('is-open');
  sidebar.classList.toggle('is-open', open);
  navBackdrop.hidden = !open;
  mobileMenu.setAttribute('aria-expanded', String(open));
  mobileMenu.setAttribute('aria-label', open ? '关闭业务导航' : '打开业务导航');
});
navBackdrop.addEventListener('click', closeMobileNav);
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
window.addEventListener('hashchange', render);
render();

