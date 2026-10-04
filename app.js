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
      { key: 'purchases', label: '采购订单', columns: ['订单号', '供应商', '下单日期', '金额', '状态'], rows: [
        ['PO-DEMO-001', '示例供应商 · 精工', '2026-09-26', '¥ 18,600', '待审核'], ['PO-DEMO-002', '示例供应商 · 包材', '2026-09-24', '¥ 6,450', '已审核'], ['PO-DEMO-003', '示例供应商 · 精工', '2026-09-19', '¥ 12,800', '已完成'] ] },
      { key: 'sales', label: '销售订单', columns: ['订单号', '客户', '交付日期', '金额', '状态'], rows: [
        ['SO-DEMO-001', '示例客户 · 华东', '2026-10-12', '¥ 42,000', '生产中'], ['SO-DEMO-002', '示例客户 · 华南', '2026-10-08', '¥ 16,800', '待发货'], ['SO-DEMO-003', '示例客户 · 华东', '2026-09-30', '¥ 28,500', '已完成'] ] },
      { key: 'balances', label: '库存余额', columns: ['物料编码', '物料名称', '仓库', '现存量', '状态'], rows: [
        ['MAT-1001', '不锈钢板', '原材料仓', '128 张', '正常'], ['MAT-1002', '伺服电机', '原材料仓', '12 台', '低于预警'], ['FG-2001', '智能装配箱', '成品仓', '24 套', '正常'] ] },
      { key: 'movements', label: '库存流水', columns: ['流水号', '类型', '物料', '数量', '日期'], rows: [
        ['ST-DEMO-001', '采购入库', '不锈钢板', '+ 40 张', '2026-09-28'], ['ST-DEMO-002', '生产领料', '伺服电机', '− 6 台', '2026-09-27'], ['ST-DEMO-003', '销售出库', '智能装配箱', '− 3 套', '2026-09-25'] ] },
    ],
  },
  production: {
    label: '生产管理', title: '从物料清单到生产工单', lead: '展示 BOM、工单与物料需求之间的关系；不产生真实领料或完工入库。',
    metrics: [['有效 BOM', '12', '虚构样例'], ['进行中工单', '8', '虚构样例'], ['待领料工单', '3', '仅展示'], ['预计本周完工', '42 套', '虚构样例']],
    tabs: [
      { key: 'bom', label: 'BOM 版本', columns: ['BOM 编号', '产品', '版本', '生效日期', '状态'], rows: [
        ['BOM-DEMO-001', '智能装配箱', 'V2.1', '2026-09-01', '有效'], ['BOM-DEMO-002', '轻型控制柜', 'V1.0', '2026-08-15', '有效'], ['BOM-DEMO-003', '智能装配箱', 'V2.0', '2026-06-01', '已停用'] ] },
      { key: 'orders', label: '生产工单', columns: ['工单号', '产品', '计划数量', '计划完工', '状态'], rows: [
        ['WO-DEMO-001', '智能装配箱', '30 套', '2026-10-10', '生产中'], ['WO-DEMO-002', '轻型控制柜', '12 台', '2026-10-13', '待领料'], ['WO-DEMO-003', '智能装配箱', '18 套', '2026-10-05', '待审核'] ] },
      { key: 'shortage', label: '物料需求', columns: ['工单号', '所需物料', '需求量', '可用量', '提示'], rows: [
        ['WO-DEMO-001', '不锈钢板', '60 张', '128 张', '充足'], ['WO-DEMO-001', '伺服电机', '30 台', '12 台', '缺口 18 台'], ['WO-DEMO-002', '包装纸箱', '12 个', '76 个', '充足'] ] },
    ],
  },
  finance: {
    label: '财务管理', title: '业务核对与手工总账', lead: '演示期间、科目和凭证的页面结构；金额不构成财务账簿。',
    metrics: [['演示会计期间', '2026-09', '虚构样例'], ['待复核凭证', '3', '仅展示'], ['已过账凭证', '18', '虚构样例'], ['借贷差额', '¥ 0', '虚构样例']],
    tabs: [
      { key: 'periods', label: '会计期间', columns: ['期间', '开始日期', '结束日期', '凭证数', '状态'], rows: [
        ['2026-09', '2026-09-01', '2026-09-30', '21', '开放'], ['2026-08', '2026-08-01', '2026-08-31', '19', '已关闭'] ] },
      { key: 'accounts', label: '会计科目', columns: ['科目编码', '科目名称', '类别', '级次', '状态'], rows: [
        ['1002', '银行存款', '资产', '一级', '启用'], ['1403', '原材料', '资产', '一级', '启用'], ['2202', '应付账款', '负债', '一级', '启用'], ['6001', '主营业务收入', '损益', '一级', '启用'] ] },
      { key: 'vouchers', label: '手工凭证', columns: ['凭证号', '摘要', '期间', '借方合计', '状态'], rows: [
        ['V-DEMO-018', '采购结算样例', '2026-09', '¥ 18,600', '待复核'], ['V-DEMO-017', '原材料入账样例', '2026-09', '¥ 12,800', '已过账'], ['V-DEMO-016', '银行收款样例', '2026-09', '¥ 28,500', '已过账'] ] },
    ],
  },
  reports: {
    label: '经营报表', title: '经营数据一目了然', lead: '使用固定样例展示采购、销售与生产的统计布局；不读取实时经营数据。',
    metrics: [['销售额', '¥ 286,400', '虚构样例'], ['采购额', '¥ 194,700', '虚构样例'], ['订单交付率', '91%', '虚构样例'], ['待处理异常', '4', '仅展示']],
    tabs: [
      { key: 'sales', label: '销售分析', columns: ['月份', '订单数', '销售额', '已交付', '交付率'], rows: [
        ['2026-09', '34', '¥ 286,400', '31', '91%'], ['2026-08', '29', '¥ 248,100', '27', '93%'], ['2026-07', '25', '¥ 221,800', '23', '92%'] ] },
      { key: 'purchase', label: '采购分析', columns: ['月份', '订单数', '采购额', '已到货', '到货率'], rows: [
        ['2026-09', '28', '¥ 194,700', '24', '86%'], ['2026-08', '26', '¥ 182,900', '25', '96%'] ] },
      { key: 'production', label: '生产分析', columns: ['产品', '计划数量', '已完工', '在制', '完成率'], rows: [
        ['智能装配箱', '80 套', '61 套', '19 套', '76%'], ['轻型控制柜', '40 台', '31 台', '9 台', '78%'] ] },
    ],
  },
  approvals: {
    label: '审批与流程', title: '审批任务与流程记录', lead: '查看样例任务状态和审批链；按钮不会触发真实审批。',
    metrics: [['待我处理', '5', '虚构样例'], ['本月已办', '23', '虚构样例'], ['平均处理时长', '1.6 天', '虚构样例'], ['异常实例', '1', '仅展示']],
    tabs: [
      { key: 'tasks', label: '待办任务', columns: ['任务编号', '业务类型', '申请人', '发起日期', '状态'], rows: [
        ['AP-DEMO-001', '采购订单审核', '演示采购员', '2026-09-28', '待处理'], ['AP-DEMO-002', '生产工单审核', '演示计划员', '2026-09-27', '待处理'], ['AP-DEMO-003', '手工凭证复核', '演示会计', '2026-09-26', '待处理'] ] },
      { key: 'instances', label: '流程记录', columns: ['实例编号', '关联单据', '流程', '当前环节', '状态'], rows: [
        ['WF-DEMO-001', 'PO-DEMO-001', '采购审核', '部门负责人', '进行中'], ['WF-DEMO-002', 'WO-DEMO-001', '工单审核', '生产主管', '已完成'], ['WF-DEMO-003', 'V-DEMO-018', '凭证复核', '财务主管', '进行中'] ] },
    ],
  },
  integrations: {
    label: '系统集成', title: '外部系统连接概览', lead: '展示集成台账的界面；这里不会向 OA、飞书或对象存储发送请求。',
    metrics: [['计划连接', '4', '虚构样例'], ['已配置', '2', '虚构样例'], ['待验证', '2', '仅展示'], ['最近同步', '—', '未连接']],
    tabs: [
      { key: 'connectors', label: '连接器', columns: ['连接器', '用途', '目标系统', '环境', '状态'], rows: [
        ['INT-DEMO-001', '审批任务通知', '企业 OA', '演示', '待验证'], ['INT-DEMO-002', '业务提醒', '飞书', '演示', '未连接'], ['INT-DEMO-003', '附件存储', '对象存储', '演示', '未连接'] ] },
      { key: 'logs', label: '同步记录', columns: ['记录号', '连接器', '事件', '时间', '结果'], rows: [
        ['LOG-DEMO-001', '企业 OA', '采购审核通知样例', '2026-09-27 09:30', '示意记录'], ['LOG-DEMO-002', '对象存储', '附件上传样例', '2026-09-26 14:15', '示意记录'] ] },
    ],
  },
  platform: {
    label: '组织与账号', title: '组织、用户与权限', lead: '浏览租户组织结构、角色与权限配置的示意页面。',
    metrics: [['演示公司', '1', '虚构样例'], ['部门', '5', '虚构样例'], ['演示账号', '12', '未启用登录'], ['角色', '6', '虚构样例']],
    tabs: [
      { key: 'organization', label: '组织结构', columns: ['组织编号', '名称', '上级组织', '类型', '状态'], rows: [
        ['ORG-001', '青禾机电（虚构）', '—', '公司', '启用'], ['ORG-002', '采购部', '青禾机电（虚构）', '部门', '启用'], ['ORG-003', '生产部', '青禾机电（虚构）', '部门', '启用'], ['ORG-004', '财务部', '青禾机电（虚构）', '部门', '启用'] ] },
      { key: 'users', label: '用户账号', columns: ['账号', '显示名称', '部门', '角色', '状态'], rows: [
        ['demo.purchase', '演示采购员', '采购部', '采购专员', '示意账号'], ['demo.planner', '演示计划员', '生产部', '生产计划', '示意账号'], ['demo.finance', '演示会计', '财务部', '会计', '示意账号'] ] },
      { key: 'roles', label: '角色权限', columns: ['角色编码', '角色名称', '业务范围', '成员数', '状态'], rows: [
        ['ROLE-01', '采购专员', '采购订单／供应商', '3', '启用'], ['ROLE-02', '仓库管理员', '收发货／库存', '2', '启用'], ['ROLE-03', '会计', '凭证／报表', '2', '启用'] ] },
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
const expanded = new Set(['trading']);

function node(tag, className, content) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (content !== undefined) element.textContent = content;
  return element;
}
function append(parent, ...children) { parent.append(...children); return parent; }
function route() {
  const [moduleKey = 'home', tabKey] = (location.hash.replace(/^#\/?/, '') || 'home').split('/');
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
  const homeRow = node('div', `nav-row ${activeModule === 'home' ? 'active' : ''}`);
  const homeLink = node('a', 'nav-link');
  homeLink.href = '#/home';
  if (activeModule === 'home') homeLink.setAttribute('aria-current', 'page');
  append(homeLink, node('span', 'nav-icon'), node('span', '', '工作台'));
  append(homeRow, homeLink); append(nav, homeRow);
  for (const [key, module] of Object.entries(modules)) {
    const row = node('div', `nav-row ${activeModule === key ? 'active' : ''}`);
    const link = node('a', 'nav-link');
    link.href = `#/${key}/${module.tabs[0].key}`;
    append(link, node('span', 'nav-icon'), node('span', '', module.label));
    const toggle = node('button', 'nav-expand');
    toggle.type = 'button';
    toggle.setAttribute('aria-label', `${expanded.has(key) ? '收起' : '展开'}${module.label}子菜单`);
    toggle.setAttribute('aria-expanded', String(expanded.has(key)));
    toggle.setAttribute('aria-controls', `subnav-${key}`);
    append(toggle, node('span', 'chevron', '›'));
    toggle.addEventListener('click', () => { expanded.has(key) ? expanded.delete(key) : expanded.add(key); renderNav(activeModule, activeTab); });
    append(row, link, toggle); append(nav, row);
    const subnav = node('div', 'subnav'); subnav.id = `subnav-${key}`; subnav.hidden = !expanded.has(key);
    for (const tab of module.tabs) {
      const sublink = node('a', activeModule === key && activeTab === tab.key ? 'active' : '', tab.label);
      sublink.href = `#/${key}/${tab.key}`;
      if (activeModule === key && activeTab === tab.key) sublink.setAttribute('aria-current', 'page');
      append(subnav, sublink);
    }
    append(nav, subnav);
  }
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMobileNav));
}
function pageHeading(kicker, title, lead) {
  const wrap = node('div', 'page-heading');
  const text = node('div');
  append(text, node('p', 'eyebrow', kicker), node('h1', '', title), node('p', 'page-lead', lead));
  append(wrap, text, node('span', 'demo-pill', '虚构数据 · 只读演示'));
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
  const fragment = document.createDocumentFragment();
  append(fragment, pageHeading('业务工作台', '从订单到交付，看清每一步', '这是一份可独立分享的界面演示。你可以浏览各模块、搜索样例记录、查看单据详情。'));
  const hero = node('section', 'hero');
  const heroMain = node('div', 'hero-main');
  append(heroMain, node('p', 'hero-kicker', '工贸一体 · 流程概览'), node('h2', '', '一张销售订单，串起采购、生产、仓储与财务。'), node('p', '', '用同一组虚构业务样例，了解系统如何组织日常经营信息。这里不会连接真实业务数据。'));
  const actions = node('div', 'hero-actions');
  const trading = node('a', 'primary-link', '查看销售订单'); trading.href = '#/trading/sales';
  const production = node('a', 'secondary-link', '查看生产工单'); production.href = '#/production/orders';
  append(actions, trading, production); append(heroMain, actions);
  const heroSide = node('div', 'hero-side');
  append(heroSide, append(node('div'), node('span', '', '当前展示'), node('strong', '', '独立静态演示')), node('p', '', '无需登录 · 无需服务器 · 不提交业务数据'));
  append(hero, heroMain, heroSide); append(fragment, hero);
  append(fragment, sectionHead('业务概况', '固定样例，不代表实际经营'));
  append(fragment, metrics([['销售订单', '34', '2026 年 9 月样例'], ['采购订单', '28', '2026 年 9 月样例'], ['生产工单', '8', '进行中样例'], ['待办审批', '5', '流程界面样例']]));
  append(fragment, sectionHead('一个订单的流转路径', '从销售需求到财务核对'));
  const flow = node('section', 'flow-card');
  append(flow, node('h3', '', 'SO-DEMO-001 · 智能装配箱'), node('p', '', '示例客户 · 华东 / 30 套 / 计划于 2026-10-12 交付'));
  const flowLine = node('div', 'flow-line');
  [['销售接单', '登记需求与交期'], ['物料采购', '补齐关键原料'], ['生产执行', '按 BOM 安排工单'], ['仓储交付', '查看库存与出库'], ['财务核对', '查看凭证示意']].forEach(([name, note], index) => {
    append(flowLine, append(node('div', 'flow-step'), node('span', '', `环节 ${index + 1}`), node('strong', '', name), node('small', '', note)));
  });
  append(flow, flowLine); append(fragment, flow);
  append(fragment, sectionHead('进入业务模块', '每个模块都可浏览样例数据'));
  const grid = node('div', 'content-grid');
  const panel = node('section', 'panel');
  append(panel, node('h2', '', '模块导航'), node('p', 'panel-intro', '选择一个业务领域查看页面结构与样例详情。'));
  const links = node('div', 'module-links');
  for (const [key, module] of Object.entries(modules)) {
    const link = node('a', 'module-link'); link.href = `#/${key}/${module.tabs[0].key}`;
    append(link, append(node('span'), node('strong', '', module.label), node('small', '', module.lead)), node('b', '', '›'));
    append(links, link);
  }
  append(panel, links);
  const note = node('aside', 'notice-card');
  const list = node('ul');
  ['所有公司、人员、单据和金额均为虚构。', '搜索、切换模块和查看详情可直接体验。', '不提供登录、编辑、审批或过账，避免误认为正式系统。', '正式 ERP 的上线仍需安全和业务验收。'].forEach((item) => append(list, node('li', '', item)));
  append(note, node('h2', '', '关于这份演示'), node('p', '', '这是从现有 ERP 独立出来的静态展示，不包含后端接口、数据库连接或密钥。'), list);
  append(grid, panel, note); append(fragment, grid);
  return fragment;
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
  const fragment = document.createDocumentFragment();
  append(fragment, pageHeading(module.label, module.title, module.lead), metrics(module.metrics));
  append(fragment, sectionHead('业务视图', `${module.tabs.length} 个示意板块`));
  const tabs = node('nav', 'tab-list'); tabs.setAttribute('aria-label', `${module.label}板块`);
  module.tabs.forEach((item) => {
    const link = node('a', item.key === tabKey ? 'active' : '', item.label);
    link.href = `#/${moduleKey}/${item.key}`;
    if (item.key === tabKey) link.setAttribute('aria-current', 'page');
    append(tabs, link);
  });
  append(fragment, tabs);
  const grid = node('div', 'content-grid');
  const panel = node('section', 'panel');
  const toolbar = node('div', 'table-toolbar');
  const search = node('label', 'search-label');
  append(search, node('span', '', `搜索${tab.label}样例`));
  const input = node('input'); input.type = 'search'; input.placeholder = '输入编号或名称'; input.autocomplete = 'off';
  append(search, input); append(toolbar, node('h2', '', tab.label), search); append(panel, toolbar);
  const tableTarget = node('div'); append(panel, tableTarget);
  renderTable(tab, '', tableTarget);
  input.addEventListener('input', () => renderTable(tab, input.value.trim(), tableTarget));
  const aside = node('aside', 'notice-card');
  append(aside, node('h2', '', '这个页面能看什么'), node('p', '', module.lead), node('p', '', '点击“查看详情”可看到字段示例。演示版没有保存、提交或审批功能，正式业务请在受控 ERP 环境中进行。'));
  const home = node('a', 'ghost-button', '返回工作台'); home.href = '#/home'; append(aside, home);
  append(grid, panel, aside); append(fragment, grid);
  return fragment;
}
function render() {
  const { moduleKey, tabKey } = route();
  if (moduleKey !== 'home') expanded.add(moduleKey);
  renderNav(moduleKey, tabKey);
  const title = moduleKey === 'home' ? '工作台' : `${modules[moduleKey].label} / ${modules[moduleKey].tabs.find((tab) => tab.key === tabKey).label}`;
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

