const defaultConfig = {
  brand_name: 'D Creations', tagline: 'Handcrafted with Love', cat_bangles: 'Custom Bangles', cat_hair: 'Hair Accessories', cat_earrings: 'Earrings', cat_pins: 'Saree Pins', cat_necksets: 'Neck Sets', cat_gifts: 'Return Gifts', footer_text: 'Thank you for visiting D Creations', background_color: '#1A1721', surface_color: '#24202E', text_color: '#E2DCE6', primary_action_color: '#C4A7E7', secondary_action_color: '#EBBCBA', font_family: 'Playfair Display', font_size: 16
};
const categories = [
  { id: 'bangles', key: 'cat_bangles', emoji: '💫', gradient: 'linear-gradient(135deg, #FFD1DC, #FFB6C1)', desc: 'Beautiful handmade bangles designed to complement every outfit and occasion.', products: [ 
    { name: 'Silk Thread Set', price: '₹350', emoji: '🌸', desc: 'Vibrant silk thread bangles' }, 
    { name: 'Pearl Elegance', price: '₹450', emoji: '✨', desc: 'Delicate pearl-studded designer bangles' },
    { name: 'Stone Work Pair', price: '₹500', emoji: '💎', desc: 'Premium stone-embedded bangles' },
    { name: 'Lac Bangles Set', price: '₹280', emoji: '🎨', desc: 'Hand-painted lac bangles with floral motifs' },
    { name: 'Temple Coin Bangles', price: '₹600', emoji: '🪙', desc: 'Traditional temple coin design bangles' },
    { name: 'Rose Gold Plated', price: '₹750', emoji: '🌹', desc: 'Sleek rose gold plated daily wear bangles' }
  ]},
  { id: 'hair', key: 'cat_hair', emoji: '🌺', gradient: 'linear-gradient(135deg, #E8D5F5, #DDA0DD)', desc: 'Elegant hair accessories to add charm.', products: [ 
    { name: 'Floral Hair Clip', price: '₹180', emoji: '🌷', desc: 'Handcrafted floral clips' },
    { name: 'Pearl Hairband', price: '₹250', emoji: '👑', desc: 'Elegant pearl-adorned hairband' },
    { name: 'Juda Pin Set', price: '₹320', emoji: '💐', desc: 'Decorative juda pins for traditional looks' },
    { name: 'Claw Clip Duo', price: '₹150', emoji: '🦋', desc: 'Butterfly-styled acrylic claw clips' },
    { name: 'Silk Scrunchie Set', price: '₹200', emoji: '🎀', desc: 'Pack of 3 pure silk soft scrunchies' },
    { name: 'Hair Slide Pins', price: '₹120', emoji: '⭐', desc: 'Minimalist star and moon hair slides' }
  ]},
  { id: 'earrings', key: 'cat_earrings', emoji: '✨', gradient: 'linear-gradient(135deg, #FFDAB9, #FFB347)', desc: 'Stunning earrings from subtle studs to statement jhumkas.', products: [ 
    { name: 'Jhumka Classic', price: '₹400', emoji: '🔔', desc: 'Traditional gold-tone jhumkas' },
    { name: 'Stud Collection', price: '₹200', emoji: '⭐', desc: 'Minimalist crystal stud set of 3 pairs' },
    { name: 'Tassel Drops', price: '₹300', emoji: '🎪', desc: 'Colorful tassel drop earrings' },
    { name: 'Chandbali Set', price: '₹550', emoji: '🌙', desc: 'Crescent moon chandbali with pearls' },
    { name: 'Kundan Hoops', price: '₹450', emoji: '⭕', desc: 'Large hoop earrings with kundan detailing' },
    { name: 'Meenakari Drops', price: '₹350', emoji: '🦚', desc: 'Hand-painted meenakari drop earrings' }
  ]},
  { id: 'pins', key: 'cat_pins', emoji: '📌', gradient: 'linear-gradient(135deg, #B5EAD7, #95DAC1)', desc: 'Decorative saree pins.', products: [ 
    { name: 'Kundan Pin', price: '₹220', emoji: '💠', desc: 'Kundan-set pin' },
    { name: 'Pearl Brooch', price: '₹280', emoji: '🦪', desc: 'Classic pearl cluster brooch pin' },
    { name: 'Floral Safety Pin', price: '₹150', emoji: '🌹', desc: 'Rose-shaped safety pin in gold tone' },
    { name: 'Stone Chain Pin', price: '₹350', emoji: '⛓️', desc: 'Double chain pin with stone accents' },
    { name: 'Temple Motif Pin', price: '₹190', emoji: '🏛️', desc: 'Antique finish temple motif saree pin' },
    { name: 'Crystal Brooch', price: '₹300', emoji: '💎', desc: 'Sparkling crystal and rhodium plated pin' }
  ]},
  { id: 'necksets', key: 'cat_necksets', emoji: '📿', gradient: 'linear-gradient(135deg, #C9E4F6, #A0C4E8)', desc: 'Complete neck sets.', products: [ { name: 'Choker Set', price: '₹650', emoji: '💍', desc: 'Pearl choker' } ]},
  { id: 'gifts', key: 'cat_gifts', emoji: '🎁', gradient: 'linear-gradient(135deg, #FFFACD, #F0E68C)', desc: 'Thoughtful return gifts.', products: [ { name: 'Mini Potli Bag', price: '₹120', emoji: '👜', desc: 'Embroidered mini potli' } ]}
];

let currentPage = 'home';
function navigateTo(page) { currentPage = page; renderPage(); }
function toggleMobile() { document.querySelector('#mobile-menu').style.display = document.querySelector('#mobile-menu').style.display === 'block' ? 'none' : 'block'; }
function closeMobile() { document.querySelector('#mobile-menu').style.display = 'none'; }
function getCatName(key) { return (window.elementSdk?.config && window.elementSdk.config[key]) || defaultConfig[key] || key; }

function renderPage() {
  const content = document.getElementById('content');
  if (!content) return;
  if(currentPage === 'home') {
    content.innerHTML = `
      <section class="hero-section">
        <h1 class="hero-title font-heading var-text-color">${getCatName('brand_name')}</h1>
        <p class="hero-tagline">${getCatName('tagline')}</p>
        <div class="hero-emojis">
          <span class="animate-bounce" style="animation-delay:0s">💫</span>
          <span class="animate-bounce" style="animation-delay:0.1s">🌸</span>
          <span class="animate-bounce" style="animation-delay:0.2s">✨</span>
          <span class="animate-bounce" style="animation-delay:0.3s">🎀</span>
          <span class="animate-bounce" style="animation-delay:0.4s">💎</span>
        </div>
      </section>
      <section class="collections-section">
        <h2 class="collections-title font-heading var-text-color">Our Collections</h2>
        <div class="grid">
          ${categories.map(cat => `
            <div class="product-card var-surface-bg" onclick="navigateTo('${cat.id}')">
              <div class="category-icon" style="background: ${cat.gradient}">${cat.emoji}</div>
              <h3 class="cat-title font-heading var-text-color">${getCatName(cat.key)}</h3>
              <p class="cat-desc">${cat.desc}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="about-section">
        <div class="about-box">
          <span style="font-size: 30px; margin-bottom: 12px; display: block;">🪡</span>
          <h3 class="about-title font-heading var-text-color">Why ${getCatName('brand_name')}?</h3>
          <p class="about-text font-body">Every piece is lovingly handcrafted with attention to detail, blending traditional artistry with modern elegance. We believe accessories tell a story — let yours be beautiful.</p>
        </div>
      </section>
    `;
  } else {
    const cat = categories.find(c => c.id === currentPage);
    if(cat) {
      content.innerHTML = `
        <section class="collections-section">
          <button onclick="navigateTo('home')" class="back-btn var-primary-bg" style="color:white">Back</button>
          <div style="text-align:center;margin-bottom:40px;">
             <div class="category-icon" style="background: ${cat.gradient}">${cat.emoji}</div>
             <h1 class="font-heading var-text-color" style="font-size:36px;margin:0;">${getCatName(cat.key)}</h1>
          </div>
          <div class="grid">
            ${cat.products.map(p => `
              <div class="product-card product-item-card var-surface-bg">
                <div class="p-image-box" style="background: ${cat.gradient}">${p.emoji}</div>
                <div class="p-details">
                  <h4 class="p-name font-heading var-text-color">${p.name}</h4>
                  <p class="p-desc">${p.desc}</p>
                  <div class="p-footer">
                    <span class="p-price var-primary-text">${p.price}</span>
                    <button class="p-btn" style="background-color: #25D366; font-weight: 600;" onclick="addEnquiry('${p.name}')">Enquire</button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      `;
    }
  }
}

function addEnquiry(productName) {
  const phoneNumber = '917780439164';
  const message = encodeURIComponent(`Hi! I'm interested in your ${productName}. Could you please share more details and pricing?`);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank');
}

function applyConfig(config) {
  const c = { ...defaultConfig, ...config };
  document.body.style.backgroundColor = c.background_color;
  document.getElementById('nav-brand').textContent = c.brand_name;
  document.getElementById('footer-text').textContent = c.footer_text;
  document.body.style.fontSize = c.font_size + 'px';
  document.querySelectorAll('.font-heading').forEach(el => el.style.fontFamily = "'" + c.font_family + "', serif");
  
  // Custom properties for colors injected
  let styleEl = document.getElementById('dynamic-config-style');
  if(!styleEl) { styleEl = document.createElement('style'); styleEl.id = 'dynamic-config-style'; document.head.appendChild(styleEl); }
  styleEl.textContent = `
    .var-text-color { color: ${c.text_color}; }
    .var-surface-bg { background-color: ${c.surface_color}; }
    .var-primary-bg { background-color: ${c.primary_action_color}; }
    .var-primary-text { color: ${c.primary_action_color}; }
  `;
  renderPage();
}

if(window.elementSdk) {
  window.elementSdk.init({
    defaultConfig, onConfigChange: async (config) => { applyConfig(config); },
    mapToCapabilities: (config) => ({
      recolorables: [
        { get: () => config.background_color, set: (v) => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }); } },
        { get: () => config.surface_color, set: (v) => { config.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); } },
        { get: () => config.text_color, set: (v) => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }); } },
        { get: () => config.primary_action_color, set: (v) => { config.primary_action_color = v; window.elementSdk.setConfig({ primary_action_color: v }); } }
      ],
      borderables: [],
      fontEditable: { get: () => config.font_family, set: (v) => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }); } },
      fontSizeable: { get: () => config.font_size, set: (v) => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }); } }
    }),
    mapToEditPanelValues: (config) => new Map([
      ['brand_name', config.brand_name], ['tagline', config.tagline], ['cat_bangles', config.cat_bangles]
    ])
  });
}
document.addEventListener('DOMContentLoaded', () => { renderPage(); });
