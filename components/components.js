/**
 * ============================================================
 *  components.js — MASTER FILE
 *  Header ya footer change karna ho toh SIRF YEH FILE edit karo
 *  Automatically sab pages pe reflect ho jayega
 * ============================================================
 */

// ── HEADER HTML ──────────────────────────────────────────────
var HEADER_HTML = `
<div class="fl-strip" id="fl-strip">
  <span>📍</span>
  Looking for my Fort Lauderdale introduction?
  <a href="/jim-blackburn-fort-lauderdale.html">Jim Blackburn · Fort Lauderdale →</a>
</div>
<nav class="site-nav">
  <a href="/index.html" class="nav-logo">James J. Blackburn</a>
  <ul class="nav-links">
    <li><a href="/spoke-student-of-jesus.html">Student of Jesus</a></li>
    <li><a href="/spoke-rio-vista-church.html">Rio Vista Church</a></li>
    <li><a href="/spoke-sonflower-and-the-bear.html">SonFlower and the Bear</a></li>
    <li><a href="/spoke-stairway-mortgage.html">Stairway Mortgage</a></li>
    <li class="nav-more-wrapper">
      <button class="nav-more-btn" id="moreBtn">More ▾</button>
      <div class="nav-dropdown" id="moreDropdown">
        <a href="/speak.html">Speaking</a>
        <a href="/spoke-blackburn-business-capital.html">Business Capital</a>
        <a href="/spoke-blackburn-realty-group.html">Realty Group</a>
        <a href="/blog-revelations.html">Revelations Blog</a>
        <a href="/contact.html">Contact</a>
      </div>
    </li>
  </ul>
  <button class="nav-hamburger" id="navToggle" aria-label="Open menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="nav-mobile" id="navMobile">
  <button class="nav-close" id="navClose">✕</button>
  <a href="/index.html">Home</a>
  <a href="/spoke-student-of-jesus.html">Student of Jesus</a>
  <a href="/spoke-rio-vista-church.html">Rio Vista Church</a>
  <a href="/spoke-sonflower-and-the-bear.html">SonFlower & the Bear</a>
  <a href="/spoke-stairway-mortgage.html">Stairway Mortgage</a>
  <a href="/spoke-blackburn-business-capital.html">Business Capital</a>
  <a href="/spoke-blackburn-realty-group.html">Realty Group</a>
  <a href="/speak.html">Speaking</a>
  <a href="/blog-revelations.html">Revelations Blog</a>
  <a href="/contact.html">Contact</a>
</div>`;

// ── FOOTER HTML ──────────────────────────────────────────────
var FOOTER_HTML = `
<footer class="site-footer">
  <div class="footer-top">
    <div class="footer-brand">
      <div class="footer-name">James J. Blackburn</div>
      <div class="footer-tag">Fort Lauderdale · Author · Entrepreneur</div>
      <div class="footer-faith">Student of Jesus, Follower of Christ</div>
    </div>
    <div class="footer-links">
      <div class="footer-col">
        <div class="footer-col-label">Personal</div>
        <a href="/spoke-student-of-jesus.html">Faith</a>
        <a href="/spoke-rio-vista-church.html">Rio Vista Church</a>
        <a href="/spoke-sonflower-and-the-bear.html">The SonFlower & the Bear</a>
      </div>
      <div class="footer-col">
        <div class="footer-col-label">Business</div>
        <a href="/spoke-stairway-mortgage.html">Stairway Mortgage</a>
        <a href="/spoke-blackburn-business-capital.html">Business Capital</a>
        <a href="/spoke-blackburn-realty-group.html">Realty Group</a>
      </div>
      <div class="footer-col">
        <div class="footer-col-label">More</div>
        <a href="/blog-revelations.html">Revelations Blog</a>
        <a href="/jim-blackburn-fort-lauderdale.html">Fort Lauderdale Intro</a>
        <a href="/contact.html">Contact Jim</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 James J. Blackburn · Fort Lauderdale, Florida · NMLS #1072866</span>
    <span>
      <a href="https://www.stairwaymortgage.com" target="_blank">StairwayMortgage.com</a>
      &nbsp;·&nbsp;
      <a href="https://www.bbizcap.com" target="_blank">BBizCap.com</a>
      &nbsp;·&nbsp;
      <a href="https://www.olgablackburn.com" target="_blank">OlgaBlackburn.com</a>
    </span>
  </div>
</footer>`;

// ── HEADER + FOOTER CSS ──────────────────────────────────────
var COMPONENT_CSS = `
.fl-strip{background:#c9a96e;color:#0d0c0b;padding:.55rem 2rem;font-family:'Inter',sans-serif;font-size:.6rem;font-weight:400;letter-spacing:.12em;text-transform:uppercase;display:flex;align-items:center;justify-content:center;gap:.8rem;text-align:center}
.fl-strip a{color:#0d0c0b;font-weight:700;text-decoration:underline;text-underline-offset:2px}
.fl-strip a:hover{opacity:.75}
.fl-strip{position:fixed;top:0;left:0;right:0;z-index:201}
.site-nav{position:fixed;top:32px;left:0;right:0;z-index:200;height:56px;padding:0 3rem;display:flex;align-items:center;justify-content:space-between;background:#111210;border-bottom:1px solid rgba(201,169,110,.1)}
.nav-logo{font-family:'Playfair Display',Georgia,serif;font-size:1rem;font-weight:400;color:#f7f4ef;text-decoration:none;letter-spacing:.04em;white-space:nowrap;flex-shrink:0}
.nav-logo:hover{color:#c9a96e}
.nav-links{list-style:none;display:flex;align-items:center;gap:0;margin:0;padding:0}
.nav-links>li>a,.nav-more-btn{font-family:'Inter',sans-serif;font-size:.58rem;font-weight:400;letter-spacing:.14em;text-transform:uppercase;text-decoration:none;color:rgba(247,244,239,.6);padding:0 1.1rem;height:56px;display:flex;align-items:center;transition:color .2s;white-space:nowrap;border:none;background:none;cursor:pointer}
.nav-links>li>a:hover,.nav-more-btn:hover,.nav-links>li>a.active{color:#c9a96e}
.nav-more-wrapper{position:relative}
.nav-dropdown{display:none;position:absolute;top:100%;right:0;background:#111210;border:1px solid rgba(201,169,110,.15);border-top:2px solid #c9a96e;min-width:190px;flex-direction:column;z-index:300}
.nav-dropdown.open{display:flex}
.nav-dropdown a{font-family:'Inter',sans-serif;font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;text-decoration:none;color:rgba(247,244,239,.6);padding:.85rem 1.2rem;border-bottom:1px solid rgba(255,255,255,.04);transition:color .2s,background .2s}
.nav-dropdown a:hover{color:#c9a96e;background:rgba(201,169,110,.06)}
.nav-dropdown a:last-child{border-bottom:none}
.nav-hamburger{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:.4rem;z-index:201}
.nav-hamburger span{display:block;width:22px;height:1.5px;background:rgba(247,244,239,.7);transition:all .25s}
.nav-hamburger.open span:nth-child(1){transform:translateY(6.5px) rotate(45deg)}
.nav-hamburger.open span:nth-child(2){opacity:0}
.nav-hamburger.open span:nth-child(3){transform:translateY(-6.5px) rotate(-45deg)}
.nav-mobile{display:none;position:fixed;inset:0;background:#0d0c0b;z-index:199;flex-direction:column;justify-content:center;align-items:center;gap:1.3rem}
.nav-mobile.open{display:flex}
.nav-mobile a{font-family:'Playfair Display',Georgia,serif;font-size:1.5rem;font-weight:400;font-style:italic;color:rgba(247,244,239,.75);text-decoration:none;transition:color .2s}
.nav-mobile a:hover{color:#c9a96e}
.nav-close{position:absolute;top:1.5rem;right:1.8rem;background:none;border:none;color:rgba(247,244,239,.35);font-size:1.4rem;cursor:pointer;transition:color .2s}
.nav-close:hover{color:#c9a96e}
body{padding-top:88px}
.site-footer{background:#090908;border-top:1px solid rgba(201,169,110,.08);padding:4rem 4rem 2rem;font-family:'Inter',sans-serif}
.footer-top{display:grid;grid-template-columns:1fr 2fr;gap:4rem;padding-bottom:3rem;border-bottom:1px solid rgba(201,169,110,.08);margin-bottom:1.8rem}
.footer-name{font-family:'Playfair Display',Georgia,serif;font-size:1.25rem;color:#f7f4ef;margin-bottom:.4rem}
.footer-tag{font-size:.56rem;letter-spacing:.15em;text-transform:uppercase;color:rgba(201,169,110,.45);margin-bottom:.6rem}
.footer-faith{font-family:'Playfair Display',Georgia,serif;font-style:italic;font-size:.82rem;color:rgba(247,244,239,.28)}
.footer-links{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem}
.footer-col{display:flex;flex-direction:column;gap:.55rem}
.footer-col-label{font-size:.5rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(201,169,110,.38);margin-bottom:.3rem}
.footer-col a{font-size:.74rem;color:rgba(247,244,239,.42);text-decoration:none;transition:color .2s;line-height:1.5}
.footer-col a:hover{color:#c9a96e}
.footer-bottom{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;font-size:.56rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(247,244,239,.2)}
.footer-bottom a{color:inherit;text-decoration:none;transition:color .2s}
.footer-bottom a:hover{color:#c9a96e}
@media(max-width:1024px){.site-nav{padding:0 1.5rem}.nav-links>li>a,.nav-more-btn{padding:0 .7rem;font-size:.54rem}}
@media(max-width:768px){.site-nav{top:28px}.nav-links{display:none}.nav-hamburger{display:flex}.fl-strip{font-size:.52rem;padding:.45rem 1rem;flex-wrap:wrap}.site-footer{padding:3rem 1.5rem 2rem}.footer-top{grid-template-columns:1fr;gap:2rem}.footer-links{grid-template-columns:1fr 1fr}.footer-bottom{flex-direction:column;align-items:flex-start;gap:.5rem}}
@media(max-width:480px){.footer-links{grid-template-columns:1fr}}`;

// ── INJECT EVERYTHING ────────────────────────────────────────
(function() {

  // 1. Inject CSS into <head>
  var style = document.createElement('style');
  style.innerHTML = COMPONENT_CSS;
  document.head.appendChild(style);

  // 2. Inject header
  var headerEl = document.getElementById('site-header');
  if (headerEl) headerEl.innerHTML = HEADER_HTML;

  // 3. Inject footer
  var footerEl = document.getElementById('site-footer-wrapper');
  if (footerEl) footerEl.innerHTML = FOOTER_HTML;

  // FL strip shows on ALL pages — no hiding

  // 5. More dropdown
  var moreBtn  = document.getElementById('moreBtn');
  var dropdown = document.getElementById('moreDropdown');
  if (moreBtn && dropdown) {
    moreBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });
    document.addEventListener('click', function() {
      dropdown.classList.remove('open');
    });
  }

  // 6. Hamburger
  var toggle   = document.getElementById('navToggle');
  var mobile   = document.getElementById('navMobile');
  var closeBtn = document.getElementById('navClose');
  if (toggle && mobile) {
    toggle.addEventListener('click', function() {
      mobile.classList.toggle('open');
      toggle.classList.toggle('open');
      document.body.style.overflow = mobile.classList.contains('open') ? 'hidden' : '';
    });
  }
  if (closeBtn && mobile) {
    closeBtn.addEventListener('click', function() {
      mobile.classList.remove('open');
      if (toggle) toggle.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
  if (mobile) {
    mobile.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        mobile.classList.remove('open');
        if (toggle) toggle.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // 7. Active link highlight
  var path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(function(a) {
    try {
      var lp = new URL(a.href, window.location.origin).pathname;
      if (lp === path || (path.endsWith('index.html') && lp.endsWith('index.html'))) {
        a.style.color = '#c9a96e';
      }
    } catch(e) {}
  });

})();
