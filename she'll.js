// الهيدر والفوتر المشتركان
(function () {
  const page = document.body.dataset.page;
  const links = [["index.html", "الرئيسية", "home"], ["wall.html", "حائط الأمل", "wall"], ["quiz.html", "تحدي الوعي", "quiz"]];
  document.getElementById("hdr").innerHTML =
    `<header><div class="wrap"><a class="brand" href="index.html"><svg viewBox="0 0 40 40" fill="none" stroke="#e0306f" stroke-width="5" stroke-linecap="round"><path d="M20 6C8 6 10 22 20 24S32 34 28 38M20 6c12 0 10 16 0 18S8 34 12 38"/></svg><span>تِك وردي</span></a><nav aria-label="القائمة">` +
    links.map(l => `<a href="${l[0]}"${l[2] === page ? " aria-current=page" : ""}>${l[1]}</a>`).join("") + `</nav></div></header>`;
  document.getElementById("ftr").innerHTML =
    `<footer><div class="wrap"><div><strong>تِك وردي | TECH WARDI</strong><small>شعارا جامعة بحري وكلية علوم الحاسوب والرياضيات ملك لجهتيهما، ويُستخدمان هنا للتعريف بالجهة المنظمة فقط. المحتوى توعوي عام ولا يغني عن استشارة الطبيب.</small></div><span>© 2026 طلاب كلية علوم الحاسوب والرياضيات – جامعة بحري</span></div></footer>`;
})();
window.esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
