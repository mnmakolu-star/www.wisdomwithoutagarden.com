/* ------------------------------------------------------------------
   BUY LINKS — the only place you need to edit.
   Paste each Lulu Bookstore link between the quotes.
   While a link is empty (""), its button shows "Coming soon" instead.
   Price is shown next to the ISBN, including VAT:
     en/nl: €16.50 excl. + 9% Dutch VAT = €17.99
     fr:    €15.49 excl. + 5.5% French VAT = €16.34
   ------------------------------------------------------------------ */
window.WWAG_LINKS = {
  en: { paperback: "https://www.lulu.com/shop/mm-ngandu/wisdom-without-a-garden/paperback/product-95vzjm9.html", price: "€17.99 incl. VAT" },   // Wisdom Without a Garden
  fr: { paperback: "https://www.lulu.com/shop/mm-ngandu/la-sagesse-sans-jardin/paperback/product-w486qdz.html", price: "16,34 € TTC" },   // La Sagesse sans jardin
  nl: { paperback: "https://www.lulu.com/shop/mm-ngandu/wijsheid-zonder-tuin/paperback/product-w486qpz.html", price: "€ 17,99 incl. btw" }    // Wijsheid zonder tuin
};

/* ---- no need to edit below this line ---- */
(function () {
  function apply() {
    var cfg = window.WWAG_LINKS || {};
    document.querySelectorAll('[data-buy]').forEach(function (el) {
      var c = cfg[el.getAttribute('data-buy')] || {};
      if (c.paperback) {
        el.href = c.paperback;
        el.target = '_blank';
        el.rel = 'noopener noreferrer';
      } else {
        var s = document.createElement('span');
        s.className = 'stamp';
        s.style.margin = '0';
        s.textContent = el.getAttribute('data-soon') || 'Coming soon';
        el.parentNode.replaceChild(s, el);
      }
    });
    document.querySelectorAll('[data-price]').forEach(function (el) {
      var c = cfg[el.getAttribute('data-price')] || {};
      if (c.price) el.textContent = ' · ' + c.price;
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply);
  else apply();
})();
