const STORAGE_KEY = 'study-in-germany-checklist:v1';
const routes = ['aps', 'visa', 'faq'];
const $ = (selector) => document.querySelector(selector);
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const freshState = () => ({ schemaVersion: 1, completed: {}, profile: {}, activeRoute: 'aps' });
let state = freshState();
let data, faq, config, items, sourceMap, route;

function notice() {
  $('#storage-notice').hidden = false;
  $('#storage-notice').textContent = '当前浏览器无法保存进度；本次页面内仍可使用清单。';
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || saved.schemaVersion !== 1) return;
    for (const item of items) if (saved.completed?.[item.id] === true) state.completed[item.id] = true;
    if (['within-one-year', 'over-one-year'].includes(saved.profile?.graduationAge)) state.profile.graduationAge = saved.profile.graduationAge;
  } catch (error) {
    if (!(error instanceof SyntaxError)) notice();
  }
}

function saveState() {
  state.activeRoute = route;
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { notice(); }
}

function applicability(item) {
  if (!item.condition) return 'true';
  const value = state.profile[item.condition.field];
  return !value ? 'unknown' : String(value === item.condition.equals);
}

function progress(list) {
  const active = list.filter((item) => item.progress && applicability(item) === 'true');
  const done = active.filter((item) => state.completed[item.id]).length;
  const pending = list.some((item) => item.progress && applicability(item) === 'unknown');
  const percent = active.length ? Math.min(pending ? 99 : 100, Math.floor(done / active.length * 100)) : 0;
  return { done, total: active.length, percent, pending };
}

function progressText(label, value) {
  return `${label} ${value.done} / ${value.total} · ${value.percent}%${value.pending ? ' · 毕业年限待判断' : ''}`;
}

function updateProgress() {
  for (const entry of data.stages) {
    const value = progress(entry.groups.flatMap((group) => group.items));
    const count = $(`[data-route="${entry.id}"] .nav-count`);
    count.textContent = `${value.done}/${value.total}`;
    count.title = value.pending ? '毕业年限待判断，简历要求尚未确认' : '已完成 / 适用条目';
  }
  const overall = progress(items);
  $('[data-testid="overall-progress"]').textContent = progressText('总进度', overall);
  $('#overall-bar').value = overall.percent;
  const stage = data.stages.find((entry) => entry.id === route);
  $('[data-testid="stage-progress"]').textContent = stage ? progressText(stage.title, progress(stage.groups.flatMap((group) => group.items))) : '常见问题 · 不计入进度';
}

function link(url, label, attributes = '') {
  return `<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer" ${attributes}>${escapeHTML(label)}</a>`;
}

function sourceLinks(ids, location = '') {
  return ids.map((id) => link(sourceMap.get(id).url + (location === 'p. 3' ? '#page=3' : ''), id, `title="${escapeHTML(sourceMap.get(id).label)}"`)).join(' ');
}

function references(ids) {
  return `<section class="references" data-testid="references"><h3>参考来源</h3><ol>${ids.map((id) => {
    const source = sourceMap.get(id);
    const version = source.sourceDate === 'live page' ? '现行网页' : source.sourceDate === 'current 2026 page' ? '2026 年现行网页' : source.sourceDate.replace('effective ', '生效日期 ');
    return `<li>${link(source.url, `${id} · ${source.label}`)}<small>${escapeHTML(source.authority)} · ${escapeHTML(version)} · 核验 ${escapeHTML(source.retrieved)}</small></li>`;
  }).join('')}</ol></section>`;
}

function row(item) {
  const applicable = applicability(item);
  const condition = item.condition ? `<span class="condition">${applicable === 'unknown' ? '待判断：请先选择毕业年限' : applicable === 'false' ? '不适用：本科毕业未超过一年' : '适用：本科毕业超过一年'}</span>` : '';
  const template = item.id === 'aps-postgrad-cv' ? '<a class="template" href="templates/aps-post-graduation-cv-template.docx" download>下载简历模板（非 APS 官方模板，仅在毕业超过一年时使用）</a>' : '';
  return `<tr data-checklist-id="${item.id}" data-applicable="${applicable}"><td><label class="check-label"><input type="checkbox" data-item-checkbox="${item.id}" aria-label="${escapeHTML(item.title)}" ${applicable !== 'true' ? 'disabled' : ''} ${state.completed[item.id] && applicable === 'true' ? 'checked' : ''}><span class="print-box" aria-hidden="true"></span></label></td><td class="title">${escapeHTML(item.title)}${condition}</td><td class="description">${escapeHTML(item.description)}${template}${(item.links || []).map((entry) => `<br>${link(entry.url, entry.label)}`).join('')}</td><td class="sources">${sourceLinks(item.sources, item.sourceLocation)}</td></tr>`;
}

function stageContent(stage) {
  const profile = stage.id === 'aps' ? `<div class="profile"><label for="graduation-age">你本科毕业是否已经超过一年？</label><select id="graduation-age" data-profile="graduationAge"><option value="">请选择…</option><option value="within-one-year">未超过一年</option><option value="over-one-year">已超过一年</option></select><p class="profile-hint">${state.profile.graduationAge === 'over-one-year' ? '已超过一年：需要毕业后表格式简历。' : state.profile.graduationAge === 'within-one-year' ? '未超过一年：毕业后简历不计入进度。' : '请先回答毕业年限，才能确认 APS 清单是否全部完成。'}</p></div>` : '';
  return `<section data-section="${stage.id}"><h2>${escapeHTML(stage.title)}</h2><p>${escapeHTML(stage.appliesTo)}</p>${stage.intro.map((text) => `<p class="intro">${escapeHTML(text)}</p>`).join('')}${profile}${stage.groups.map((group) => `<h3>${escapeHTML(group.title)}</h3><table><thead><tr><th scope="col">完成</th><th scope="col">材料 / 步骤</th><th scope="col">一句话说明</th><th scope="col">来源</th></tr></thead><tbody>${group.items.map(row).join('')}</tbody></table>`).join('')}<div class="notes">${stage.notes.map((note) => `<p><strong>${escapeHTML(note.title)}：</strong>${escapeHTML(note.text)} ${sourceLinks(note.sources)}</p>`).join('')}</div>${references(stage.references)}</section>`;
}

function feedback() {
  const email = config.contactEmail ? `<a href="mailto:${escapeHTML(config.contactEmail)}?subject=${encodeURIComponent('德国留学清单：咨询与反馈')}&amp;body=${encodeURIComponent('办理阶段：\n相关条目：\n问题说明：\n')}" >联系作者</a>` : '<span>联系作者（邮箱暂未配置）</span>';
  return `${link(config.discussionsUrl, '提出问题')}${link(`${config.repositoryUrl}/issues/new?template=content-error.yml`, '报告内容错误')}${link(`${config.repositoryUrl}/issues/new?template=bug-report.yml`, '报告网站 Bug')}${email}`;
}

function render() {
  route = location.hash.slice(1);
  if (!routes.includes(route)) {
    route = 'aps';
    history.replaceState(null, '', `${location.pathname}${location.search}#aps`);
  }
  const stage = data.stages.find((entry) => entry.id === route);
  const metadata = stage || faq;
  $('[data-testid="last-updated"]').textContent = `内容更新：${metadata.lastUpdated}`;
  $('[data-testid="last-verified"]').textContent = `最后核验：${metadata.lastVerified}`;
  for (const nav of document.querySelectorAll('[data-route]')) {
    if (nav.dataset.route === route) nav.setAttribute('aria-current', 'page');
    else nav.removeAttribute('aria-current');
  }
  $('#content').innerHTML = stage ? stageContent(stage) : `<section data-section="faq"><h2>常见问题</h2><div data-testid="faq-list">${faq.items.map((entry) => `<article class="faq-item"><h3>${escapeHTML(entry.question)}</h3><p>${escapeHTML(entry.answer)}</p></article>`).join('')}</div><div class="feedback">${feedback()}</div>${references(faq.references)}</section>`;
  const select = $('[data-profile="graduationAge"]');
  if (select) select.value = state.profile.graduationAge || '';
  updateProgress();
}

async function getJSON(path) {
  const response = await fetch(new URL(path, document.baseURI));
  if (!response.ok) throw new Error(`Cannot load ${path}: ${response.status}`);
  return response.json();
}

async function init() {
  [data, faq, config] = await Promise.all([getJSON('data/checklist.json'), getJSON('data/faq.json'), getJSON('data/config.json')]);
  items = data.stages.flatMap((stage) => stage.groups.flatMap((group) => group.items));
  sourceMap = new Map(data.sources.map((source) => [source.id, source]));
  loadState();
  $('#footer-links').innerHTML = `<span>© 2026 The-Aries</span>${link(config.repositoryUrl, 'GitHub 仓库')}${feedback()}${config.supportUrl ? link(config.supportUrl, '赞助') : '<span>赞助（暂未开放）</span>'}`;
  render();
  window.addEventListener('hashchange', render);
  $('#content').addEventListener('change', (event) => {
    const id = event.target.dataset.itemCheckbox;
    if (id) {
      const item = items.find((entry) => entry.id === id);
      if (!item || applicability(item) !== 'true') return;
      state.completed[id] = event.target.checked;
      saveState();
      updateProgress();
    } else if (event.target.dataset.profile === 'graduationAge') {
      state.profile.graduationAge = event.target.value;
      saveState();
      render();
      $('[data-profile="graduationAge"]').focus();
    }
  });
  $('[data-action="reset"]').addEventListener('click', () => {
    if (!window.confirm('确定重置全部 APS 与签证进度及毕业年限选择吗？此操作只清除本清单的数据。')) return;
    try { localStorage.removeItem(STORAGE_KEY); } catch { notice(); }
    state = freshState();
    render();
  });
  for (const action of ['current', 'blank']) $('[data-action="print-' + action + '"]').addEventListener('click', () => {
    document.body.dataset.print = action;
    try { window.print(); } finally { delete document.body.dataset.print; }
  });
  window.addEventListener('afterprint', () => { delete document.body.dataset.print; });
}

init().catch((error) => {
  $('#content').innerHTML = '<p role="alert">清单加载失败，请刷新重试。你也可以查看<a href="docs/CONTENT_APS_VISA.md">清单内容</a>与<a href="docs/SOURCES.md">官方来源</a>。</p>';
  console.error(error);
});
