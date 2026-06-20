// ============================================================
//  JSONBin Config — ONE bin, ONE key, used everywhere
// ============================================================
const BIN_ID = "6a2792bcda38895dfe9ddc93";
const API_KEY = "$2a$10$fzrT1ZEHuBXP67bUevLiueTIEt.7.ZDgL6vb11rv9GFxUFUjPpiyW";
const BIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

// ============================================================
//  PRODUCTS — hardcoded so the site shows them INSTANTLY,
//  with zero loading, with or without internet.
//  This is the same list that gets saved to JSONBin when the
//  admin makes changes — but if JSONBin is ever unreachable,
//  the site still works perfectly using this list.
// ============================================================
const HARDCODED_PRODUCTS = [
  {id:"1",name:"Apple iPhone 8 (64GB)",category:"iPhone",price:1600,oldPrice:1800,img:"iPhone 8 (64GB).webp",desc:"iPhone 8 (64GB) \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:3,badge:"Brand New",reviews:412},
  {id:"2",name:"Apple iPhone 8 (128GB)",category:"iPhone",price:1750,oldPrice:1950,img:"iPhone 8 (128GB).webp",desc:"iPhone 8 (128GB) \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:4,badge:"Brand New",reviews:356},
  {id:"3",name:"Apple iPhone 8 Plus",category:"iPhone",price:2000,oldPrice:2250,img:"iPhone 8 Plus.jpg",desc:"iPhone 8 Plus \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:5,badge:"Brand New",reviews:298},
  {id:"4",name:"Apple iPhone X",category:"iPhone",price:2000,oldPrice:2250,img:"iPhone X.jpg",desc:"iPhone X \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:6,badge:"Brand New",reviews:245},
  {id:"5",name:"Apple iPhone XR",category:"iPhone",price:2200,oldPrice:2450,img:"iPhone XR.jpg",desc:"iPhone XR \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:7,badge:"Brand New",reviews:389},
  {id:"6",name:"Apple iPhone XS",category:"iPhone",price:2100,oldPrice:2350,img:"iPhone XS.jpg",desc:"iPhone XS \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:8,badge:"Brand New",reviews:201},
  {id:"7",name:"Apple iPhone XS Max",category:"iPhone",price:2500,oldPrice:2800,img:"iPhone XS Max.jpg",desc:"iPhone XS Max \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:5,badge:"Brand New",reviews:187},
  {id:"8",name:"Apple iPhone 11",category:"iPhone",price:3000,oldPrice:3350,img:"iPhone 11.jpg",desc:"iPhone 11 \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:4,badge:"Brand New",reviews:734},
  {id:"9",name:"Apple iPhone 11 Pro",category:"iPhone",price:3500,oldPrice:3900,img:"iPhone 11 Pro.jpg",desc:"iPhone 11 Pro \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:6,badge:"Brand New",reviews:412},
  {id:"10",name:"Apple iPhone 11 Pro Max",category:"iPhone",price:4000,oldPrice:4450,img:"iPhone 11 Pro Max.webp",desc:"iPhone 11 Pro Max \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:9,badge:"Brand New",reviews:389},
  {id:"11",name:"Apple iPhone 12",category:"iPhone",price:4000,oldPrice:4450,img:"iPhone 12.webp",desc:"iPhone 12 \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:3,badge:"Brand New",reviews:612},
  {id:"12",name:"Apple iPhone 12 Mini",category:"iPhone",price:3500,oldPrice:3900,img:"iPhone 12 Mini.jpg",desc:"iPhone 12 Mini \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:4,badge:"Brand New",reviews:287},
  {id:"13",name:"Apple iPhone 12 Pro",category:"iPhone",price:4500,oldPrice:5000,img:"iPhone 12 Pro.webp",desc:"iPhone 12 Pro \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:5,badge:"Brand New",reviews:356},
  {id:"14",name:"Apple iPhone 12 Pro Max",category:"iPhone",price:5000,oldPrice:5550,img:"iPhone 12 Pro Max.jpg",desc:"iPhone 12 Pro Max \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:6,badge:"Brand New",reviews:298},
  {id:"15",name:"Apple iPhone 13",category:"iPhone",price:5000,oldPrice:5550,img:"iPhone 13.jpg",desc:"iPhone 13 \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:7,badge:"Brand New",reviews:612},
  {id:"16",name:"Apple iPhone 13 Mini",category:"iPhone",price:4500,oldPrice:5000,img:"iPhone 13 Mini.jpg",desc:"iPhone 13 Mini \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:8,badge:"Brand New",reviews:245},
  {id:"17",name:"Apple iPhone 13 Pro",category:"iPhone",price:6000,oldPrice:6650,img:"iPhone 13 Pro.webp",desc:"iPhone 13 Pro \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:5,badge:"Brand New",reviews:398},
  {id:"18",name:"Apple iPhone 13 Pro Max",category:"iPhone",price:7000,oldPrice:7750,img:"iPhone 13 Pro Max.webp",desc:"iPhone 13 Pro Max \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:4,badge:"Brand New",reviews:412},
  {id:"19",name:"Apple iPhone 14",category:"iPhone",price:6000,oldPrice:6650,img:"iPhone 14.jpg",desc:"iPhone 14 \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:6,badge:"Brand New",reviews:445},
  {id:"20",name:"Apple iPhone 14 Plus",category:"iPhone",price:6800,oldPrice:7550,img:"iPhone 14 Plus.jpg",desc:"iPhone 14 Plus \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:9,badge:"Brand New",reviews:198},
  {id:"21",name:"Apple iPhone 14 Pro",category:"iPhone",price:7500,oldPrice:8300,img:"iPhone 14 Pro.jpg",desc:"iPhone 14 Pro \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:3,badge:"Brand New",reviews:389},
  {id:"22",name:"Apple iPhone 14 Pro Max",category:"iPhone",price:9000,oldPrice:9950,img:"iPhone 14 Pro Max.jpg",desc:"iPhone 14 Pro Max \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:4,badge:"Brand New",reviews:423},
  {id:"23",name:"Apple iPhone 15",category:"iPhone",price:7000,oldPrice:7750,img:"iPhone 15.jpg",desc:"iPhone 15 \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:5,badge:"Brand New",reviews:389},
  {id:"24",name:"Apple iPhone 15 Plus",category:"iPhone",price:7500,oldPrice:8300,img:"iPhone 15 Plus.webp",desc:"iPhone 15 Plus \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:6,badge:"Brand New",reviews:276},
  {id:"25",name:"Apple iPhone 15 Pro",category:"iPhone",price:9000,oldPrice:9950,img:"iPhone 15 Pro.webp",desc:"iPhone 15 Pro \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:7,badge:"Brand New",reviews:523},
  {id:"26",name:"Apple iPhone 15 Pro Max",category:"iPhone",price:11000,oldPrice:12150,img:"iPhone 15 Pro Max.webp",desc:"iPhone 15 Pro Max \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:8,badge:"Brand New",reviews:398},
  {id:"27",name:"Apple iPhone 16",category:"iPhone",price:9000,oldPrice:9950,img:"iphone 16.jpg",desc:"iPhone 16 \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:5,badge:"Brand New",reviews:412},
  {id:"28",name:"Apple iPhone 16 Plus",category:"iPhone",price:10000,oldPrice:11050,img:"iphone 16 plus.webp",desc:"iPhone 16 Plus \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:4,badge:"Brand New",reviews:198},
  {id:"29",name:"Apple iPhone 16 Pro",category:"iPhone",price:12000,oldPrice:13250,img:"iPhone 16 pro.jpg",desc:"iPhone 16 Pro \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:6,badge:"Brand New",reviews:341},
  {id:"30",name:"Apple iPhone 16 Pro Max",category:"iPhone",price:14000,oldPrice:15450,img:"iPhone 16 pro max.jpg",desc:"iPhone 16 Pro Max \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:9,badge:"Brand New",reviews:389},
  {id:"31",name:"Apple iPhone 17",category:"iPhone",price:12000,oldPrice:13250,img:"iphone 17.webp",desc:"iPhone 17 \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:3,badge:"Brand New",reviews:167},
  {id:"32",name:"Apple iPhone 17 Air",category:"iPhone",price:13500,oldPrice:14900,img:"iphone 17 air.webp",desc:"iPhone 17 Air \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:4,badge:"Brand New",reviews:89},
  {id:"33",name:"Apple iPhone 17 Pro",category:"iPhone",price:15000,oldPrice:16550,img:"iphone 17 pro.jpg",desc:"iPhone 17 Pro \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:5,badge:"Brand New",reviews:201},
  {id:"34",name:"Apple iPhone 17 Pro Max",category:"iPhone",price:17500,oldPrice:19300,img:"iPhone 17  pro max.webp",desc:"iPhone 17 Pro Max \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0","#f0ece0"],stock:6,badge:"Brand New",reviews:156},
  {id:"35",name:"Apple MacBook Air M1",category:"MacBook",price:6000,oldPrice:6650,img:"MacBook Air M1.jpg",desc:"MacBook Air M1 \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0"],stock:7,badge:"Brand New",reviews:445},
  {id:"36",name:"Apple MacBook Air M2",category:"MacBook",price:9500,oldPrice:10500,img:"MacBook Air M2.jpg",desc:"MacBook Air M2 \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0"],stock:8,badge:"Brand New",reviews:312},
  {id:"37",name:"Apple MacBook Air M3",category:"MacBook",price:13500,oldPrice:14900,img:"MacBook Air M3.jpg",desc:"MacBook Air M3 \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0"],stock:5,badge:"Brand New",reviews:203},
  {id:"38",name:"Apple MacBook Pro M1",category:"MacBook",price:8000,oldPrice:8850,img:"MacBook Pro M1.jpg",desc:"MacBook Pro M1 \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0"],stock:4,badge:"Brand New",reviews:156},
  {id:"39",name:"Apple MacBook Pro M2",category:"MacBook",price:11500,oldPrice:12700,img:"MacBook Pro M2.jpg",desc:"MacBook Pro M2 \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0"],stock:6,badge:"Brand New",reviews:94},
  {id:"40",name:"Apple MacBook Pro M3",category:"MacBook",price:15000,oldPrice:16550,img:"MacBook Pro M3.jpg",desc:"MacBook Pro M3 \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0"],stock:9,badge:"Brand New",reviews:67},
  {id:"41",name:"Apple Watch Series 2",category:"Watch",price:1000,oldPrice:1150,img:"Apple Watch Series 2 (S2).webp",desc:"Apple Watch Series 2 \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0"],stock:3,badge:"Brand New",reviews:412},
  {id:"42",name:"Apple Watch Series 3",category:"Watch",price:1200,oldPrice:1350,img:"Apple Watch Series 3 (S3).jpg",desc:"Apple Watch Series 3 \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0"],stock:4,badge:"Brand New",reviews:356},
  {id:"43",name:"Apple Watch Series 4",category:"Watch",price:1500,oldPrice:1700,img:"Apple Watch Series 4 (S4).jpg",desc:"Apple Watch Series 4 \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0"],stock:5,badge:"Brand New",reviews:298},
  {id:"44",name:"Apple Watch Series 5",category:"Watch",price:1800,oldPrice:2000,img:"Apple Watch Series 5 (S5).jpg",desc:"Apple Watch Series 5 \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0"],stock:6,badge:"Brand New",reviews:245},
  {id:"45",name:"Apple Watch Series 6",category:"Watch",price:2200,oldPrice:2450,img:"Apple Watch Series 6 (S6).jpg",desc:"Apple Watch Series 6 \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0"],stock:7,badge:"Brand New",reviews:201},
  {id:"46",name:"Apple Watch Series 7",category:"Watch",price:3000,oldPrice:3350,img:"Apple Watch Series 7 (S7).jpg",desc:"Apple Watch Series 7 \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0"],stock:8,badge:"Brand New",reviews:187},
  {id:"50",name:"Apple Watch Series 2 Nike Edition",category:"Watch",price:1000,oldPrice:1150,img:"Apple Watch Series 2 Nike Edition (S2).webp",desc:"Apple Watch Series 2 Nike Edition \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#1c1c1e","#c0c0c0"],stock:4,badge:"Brand New",reviews:156},
  {id:"47",name:"Apple AirPods 3rd Generation",category:"AirPods",price:1100,oldPrice:1250,img:"AirPods (3rd Generation).webp",desc:"AirPods 3rd Generation \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#f0f0f0"],stock:5,badge:"Brand New",reviews:534},
  {id:"48",name:"Apple AirPods Max",category:"AirPods",price:2500,oldPrice:2750,img:"AirPods Max.webp",desc:"AirPods Max \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#f0f0f0"],stock:4,badge:"Brand New",reviews:245},
  {id:"49",name:"Apple AirPods Pro (2nd Generation)",category:"AirPods",price:900,oldPrice:1000,img:"AirPods Pro (2nd Generation).webp",desc:"AirPods Pro (2nd Generation) \u2014 Brand New Sealed. Original box, manufacturer warranty. Fast nationwide delivery.",colors:["#f0f0f0"],stock:6,badge:"Brand New",reviews:678}
];

const DEFAULT_PRICELIST = [
  {section:"iPhone 8 / X / XR / XS", icon:"fa-mobile-alt", items:[
    {name:"iPhone 8 (64GB)",price:"R1,600"},
    {name:"iPhone 8 (128GB)",price:"R1,750"},
    {name:"iPhone 8 Plus",price:"R2,000"},
    {name:"iPhone X",price:"R2,000"},
    {name:"iPhone XS",price:"R2,100"},
    {name:"iPhone XR",price:"R2,200"},
    {name:"iPhone XS Max",price:"R2,500"}
  ]},
  {section:"iPhone 11 / 12 / 13 / 14", icon:"fa-mobile-alt", items:[
    {name:"iPhone 11",price:"R3,000"},
    {name:"iPhone 11 Pro",price:"R3,500"},
    {name:"iPhone 11 Pro Max",price:"R4,000"},
    {name:"iPhone 12",price:"R4,000"},
    {name:"iPhone 12 Mini",price:"R3,500"},
    {name:"iPhone 12 Pro",price:"R4,500"},
    {name:"iPhone 12 Pro Max",price:"R5,000"},
    {name:"iPhone 13",price:"R5,000"},
    {name:"iPhone 13 Mini",price:"R4,500"},
    {name:"iPhone 13 Pro",price:"R6,000"},
    {name:"iPhone 13 Pro Max",price:"R7,000"},
    {name:"iPhone 14",price:"R6,000"},
    {name:"iPhone 14 Plus",price:"R6,800"},
    {name:"iPhone 14 Pro",price:"R7,500"},
    {name:"iPhone 14 Pro Max",price:"R9,000"}
  ]},
  {section:"iPhone 15 / 16 / 17", icon:"fa-mobile-alt", items:[
    {name:"iPhone 15",price:"R7,000"},
    {name:"iPhone 15 Plus",price:"R7,500"},
    {name:"iPhone 15 Pro",price:"R9,000"},
    {name:"iPhone 15 Pro Max",price:"R11,000"},
    {name:"iPhone 16",price:"R9,000"},
    {name:"iPhone 16 Plus",price:"R10,000"},
    {name:"iPhone 16 Pro",price:"R12,000"},
    {name:"iPhone 16 Pro Max",price:"R14,000"},
    {name:"iPhone 17",price:"R12,000"},
    {name:"iPhone 17 Air",price:"R13,500"},
    {name:"iPhone 17 Pro",price:"R15,000"},
    {name:"iPhone 17 Pro Max",price:"R17,500"}
  ]},
  {section:"AirPods", icon:"fa-headphones", items:[
    {name:"AirPods Max",price:"R2,500"},
    {name:"AirPods Pro (2nd Gen)",price:"R900"},
    {name:"AirPods 3rd Generation",price:"R1,100"}
  ]},
  {section:"MacBooks", icon:"fa-laptop", items:[
    {name:"MacBook Air M1",price:"R6,000"},
    {name:"MacBook Pro M1",price:"R8,000"},
    {name:"MacBook Air M2",price:"R9,500"},
    {name:"MacBook Pro M2",price:"R11,500"},
    {name:"MacBook Air M3",price:"R13,500"},
    {name:"MacBook Pro M3",price:"R15,000"}
  ]},
  {section:"Apple Watches", icon:"fa-clock", items:[
    {name:"Apple Watch Series 2",price:"R1,000"},
    {name:"Apple Watch Series 3",price:"R1,200"},
    {name:"Apple Watch Series 4",price:"R1,500"},
    {name:"Apple Watch Series 5",price:"R1,800"},
    {name:"Apple Watch Series 6",price:"R2,200"},
    {name:"Apple Watch Series 7",price:"R3,000"}
  ]}
];

// ============================================================
//  State — start with hardcoded data so it shows INSTANTLY
// ============================================================
let products = HARDCODED_PRODUCTS;
let pricelistData = DEFAULT_PRICELIST;
let cart = [], activeFilter = 'All', cartOpen = false, wishlist = new Set();
const pagState = { deals:{page:0}, weekly:{page:0}, mostSelling:{page:0} };
const PS = 3;

// ============================================================
//  Card
// ============================================================
function card(p) {
  const hasOld = p.oldPrice && p.oldPrice > p.price;
  const isWish = wishlist.has(p.id);
  return `<div class="product-card" onclick="openPDP('${p.id}')">
    <div class="product-img">
      <div style="position:absolute;top:9px;left:9px;background:var(--blue-dark);color:#fff;font-size:9.5px;font-weight:700;padding:3px 8px;border-radius:11px;z-index:2">${p.badge||'Brand New'}</div>
      <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.opacity='0.15'">
      <button class="wishlist-btn${isWish?' active':''}" onclick="toggleWish(event,'${p.id}')"><i class="fa fa-heart"></i></button>
    </div>
    <div class="product-info">
      <div class="product-name">${p.name}</div>
      <div class="product-desc">${(p.desc||'').substring(0,56)}...</div>
      <div class="product-stars"><span class="stars">★★★★★</span><span class="review-count">(${p.reviews||99})</span></div>
      <div class="product-bottom">
        <div class="product-price">R${Number(p.price).toLocaleString()}${hasOld?`<span class="old-price">R${Number(p.oldPrice).toLocaleString()}</span>`:''}</div>
        <button class="btn-cart" onclick="addToCart(event,'${p.id}')">Add to Cart</button>
      </div>
    </div>
  </div>`;
}

// ============================================================
//  Render
// ============================================================
function renderGrid(filterFn, id) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = products.filter(filterFn).map(card).join('') || '<div style="grid-column:1/-1;text-align:center;padding:44px;color:var(--text-muted)">No products found</div>';
}
function renderAll() {
  renderGrid(p=>p.category==='iPhone','iphoneGrid');
  renderGrid(p=>p.category==='MacBook','macbookGrid');
  renderGrid(p=>p.category==='Watch','watchGrid');
  renderGrid(p=>p.category==='iPad','ipadGrid');
  renderGrid(p=>p.category==='AirPods','airpodsGrid');
}
function getProds(k) {
  if(k==='deals') return activeFilter==='All'?products:products.filter(p=>p.category===activeFilter);
  if(k==='weekly'){if(!window._wo)window._wo=[...products].sort(()=>Math.random()-.5);return window._wo;}
  return[...products].sort((a,b)=>(b.stock||0)-(a.stock||0));
}
function renderSlider(k) {
  const prods=getProds(k),page=pagState[k].page,total=Math.ceil(prods.length/PS);
  if(!total)return;
  const slice=prods.slice(page*PS,page*PS+PS);
  const g=document.getElementById(k+'Grid'),n=document.getElementById(k+'Nav');
  if(g)g.innerHTML=slice.map(card).join('');
  const dots=Array.from({length:total},(_,i)=>`<button class="pag-dot${i===page?' active':''}" onclick="goPage('${k}',${i})"></button>`).join('');
  if(n)n.innerHTML=`<div class="pag-dots">${dots}</div><button class="pag-btn" onclick="goPage('${k}',${page-1})" ${page===0?'disabled':''}>&#8249;</button><button class="pag-btn" onclick="goPage('${k}',${page+1})" ${page>=total-1?'disabled':''}>&#8250;</button>`;
}
function goPage(k,p){const t=Math.ceil(getProds(k).length/PS);if(p<0||p>=t)return;pagState[k].page=p;renderSlider(k);}
function setFilter(f,el){activeFilter=f;document.querySelectorAll('#filterPills .pill').forEach(p=>p.classList.remove('active'));el.classList.add('active');pagState.deals.page=0;renderSlider('deals');}

// ============================================================
//  Pricelist render (reads pricelistData into the static pricelist cards by name match)
// ============================================================
function applyPricelistToDOM() {
  // Build a lookup: product name -> price string
  const lookup = {};
  pricelistData.forEach(section => section.items.forEach(item => { lookup[item.name] = item.price; }));
  document.querySelectorAll('.pricelist-item').forEach(row => {
    const nameEl = row.querySelector('.pi-name');
    const priceEl = row.querySelector('.pi-price');
    if (nameEl && priceEl && lookup[nameEl.textContent]) {
      priceEl.textContent = lookup[nameEl.textContent];
    }
  });
}

// ============================================================
//  Wishlist & Cart
// ============================================================
function toggleWish(e,id){e.stopPropagation();if(wishlist.has(id))wishlist.delete(id);else wishlist.add(id);renderAll();renderSlider('deals');renderSlider('weekly');renderSlider('mostSelling');showToast(wishlist.has(id)?'Added to wishlist':'Removed from wishlist');}
function addToCart(e,id){e.stopPropagation();const p=products.find(x=>x.id===id),ex=cart.find(x=>x.id===id);if(ex)ex.qty++;else cart.push({...p,qty:1});updateCartUI();showToast(`${p.name} added to cart`);}
function removeFromCart(id){cart=cart.filter(x=>x.id!==id);updateCartUI();}
function changeQty(id,d){const i=cart.find(x=>x.id===id);if(!i)return;i.qty+=d;if(i.qty<=0)removeFromCart(id);else updateCartUI();}
function updateCartUI(){
  const total=cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById('cartCount').textContent=total;
  const empty=cart.length===0;
  document.getElementById('cartEmpty').style.display=empty?'block':'none';
  document.getElementById('cartFooter').style.display=empty?'none':'block';
  if(!empty){
    document.getElementById('cartTotal').textContent='R'+cart.reduce((s,i)=>s+(i.price*i.qty),0).toLocaleString();
    document.getElementById('cartItems').innerHTML=`<div class="cart-empty" id="cartEmpty" style="display:none"></div>`+cart.map(i=>`<div class="cart-item"><img class="cart-item-img" src="${i.img}" alt="${i.name}"><div class="cart-item-info"><h4>${i.name}</h4><div class="cart-item-price">R${(i.price*i.qty).toLocaleString()}</div><div class="qty-ctrl"><button class="qty-btn" onclick="changeQty('${i.id}',-1)">−</button><span class="qty-num">${i.qty}</span><button class="qty-btn" onclick="changeQty('${i.id}',1)">+</button></div></div><button class="cart-item-remove" onclick="removeFromCart('${i.id}')"><i class="fa fa-trash"></i></button></div>`).join('');
  }
}
function toggleCart(){cartOpen=!cartOpen;document.getElementById('cartDrawer').classList.toggle('open',cartOpen);document.getElementById('cartOverlay').classList.toggle('open',cartOpen);document.getElementById('overlay').classList.remove('open');document.getElementById('mobileNav').classList.remove('open');}
function checkout(){if(!cart.length){showToast('Your cart is empty!');return;}const msg=`Hi Exclusive iPhones RSA! I'd like to order:\n${cart.map(i=>`- ${i.name} x${i.qty} = R${(i.price*i.qty).toLocaleString()}`).join('\n')}\nTotal: R${cart.reduce((s,i)=>s+(i.price*i.qty),0).toLocaleString()}`;window.open(`https://wa.me/27838687662?text=${encodeURIComponent(msg)}`,'_blank');}

// ============================================================
//  PDP
// ============================================================
let pdpQty=1;
function openPDP(id){
  const p=products.find(x=>x.id===id);if(!p)return;
  pdpQty=1;
  document.getElementById('pdpBreadCat').textContent=p.category;
  document.getElementById('pdpBreadName').textContent=p.name;
  document.getElementById('pdpMainImgWrap').innerHTML=`<img id="pdpMainImg" src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:contain">`;
  document.getElementById('pdpThumbs').innerHTML=[p.img,p.img,p.img].map((img,i)=>`<div class="pdp-thumb${i===0?' active':''}" onclick="pdpThumb(this,'${img}')"><img src="${img}" alt="" style="width:100%;height:100%;object-fit:contain"></div>`).join('');
  const hasOld=p.oldPrice&&p.oldPrice>p.price;
  const dots=(p.colors||['#1c1c1e']).map((c,i)=>`<div class="pdp-color-dot${i===0?' active':''}" style="background:${c}" onclick="pdpColor(this)"></div>`).join('');
  document.getElementById('pdpInfo').innerHTML=`<div class="pdp-badge">${p.badge||'Brand New'}</div><h1 class="pdp-name">${p.name}</h1><div class="pdp-stars-row"><span class="stars" style="font-size:15px">★★★★★</span>4.9 &nbsp;|&nbsp; ${p.reviews||99} reviews</div><div class="pdp-price-row"><div class="pdp-price">R${Number(p.price).toLocaleString()}</div>${hasOld?`<div class="pdp-old-price">R${Number(p.oldPrice).toLocaleString()}</div>`:''}</div><div class="pdp-monthly">Order, Pay, Receive — courier 1–2 days anywhere in SA</div><div class="pdp-desc">${p.desc}</div><div class="pdp-label">Choose a Colour</div><div class="pdp-colors">${dots}</div><div class="pdp-stock-note"><i class="fa fa-fire"></i> Only ${p.stock||5} items left</div><div class="pdp-qty-row"><div class="pdp-label" style="margin:0">Qty</div><div class="pdp-qty-ctrl"><button class="qty-btn" onclick="pdpQtyChange(-1)">−</button><span class="pdp-qty-num qty-num" id="pdpQtyNum" style="font-size:14.5px;font-weight:700;min-width:34px;text-align:center;border-left:1px solid var(--border);border-right:1px solid var(--border);height:38px;display:flex;align-items:center;justify-content:center;padding:0 7px">1</span><button class="qty-btn" onclick="pdpQtyChange(1)">+</button></div></div><div class="pdp-btns"><button class="pdp-btn-buy" onclick="pdpBuy('${p.id}')"><i class="fab fa-whatsapp"></i> Buy via WhatsApp</button><button class="pdp-btn-cart" onclick="pdpCart('${p.id}')">Add to Cart</button></div><div class="pdp-delivery"><div class="pdp-delivery-item"><i class="fa fa-truck"></i><div><h5>Free Delivery</h5><p>Nationwide via Postnet, PEP & The Courier Guy — 1–2 days</p></div></div><div class="pdp-delivery-item"><i class="fa fa-shield-alt"></i><div><h5>Brand New & Sealed</h5><p>100% brand new in box, warranty included</p></div></div><div class="pdp-delivery-item"><i class="fab fa-whatsapp"></i><div><h5>WhatsApp Support 24/7</h5><p>+27 83 868 7662</p></div></div></div>`;
  const rel=products.filter(x=>x.category===p.category&&x.id!==p.id).slice(0,4);
  document.getElementById('pdpRelated').innerHTML=rel.length?`<h3>You May Also Like</h3><div class="pdp-related-grid">${rel.map(card).join('')}</div>`:'';
  document.getElementById('pdpPage').classList.add('open');
  document.getElementById('pdpPage').scrollTop=0;
  document.body.style.overflow='hidden';
}
function closePDP(){document.getElementById('pdpPage').classList.remove('open');document.body.style.overflow='';}
function pdpThumb(el,src){document.getElementById('pdpMainImg').src=src;document.querySelectorAll('.pdp-thumb').forEach(t=>t.classList.remove('active'));el.classList.add('active');}
function pdpColor(el){document.querySelectorAll('.pdp-color-dot').forEach(d=>d.classList.remove('active'));el.classList.add('active');}
function pdpQtyChange(d){pdpQty=Math.max(1,pdpQty+d);document.getElementById('pdpQtyNum').textContent=pdpQty;}
function pdpCart(id){const p=products.find(x=>x.id===id),ex=cart.find(x=>x.id===id);if(ex)ex.qty+=pdpQty;else cart.push({...p,qty:pdpQty});updateCartUI();showToast(`${p.name} added to cart`);closePDP();setTimeout(toggleCart,350);}
function pdpBuy(id){const p=products.find(x=>x.id===id);const msg=`Hi! I want to order: ${p.name} x${pdpQty} = R${(p.price*pdpQty).toLocaleString()}`;window.open(`https://wa.me/27838687662?text=${encodeURIComponent(msg)}`,'_blank');}

// ============================================================
//  Nav / Search / FAQ / Utils
// ============================================================
function toggleMobileNav(){document.getElementById('mobileNav').classList.toggle('open');document.getElementById('overlay').classList.toggle('open');}
function closeMobileNav(){document.getElementById('mobileNav').classList.remove('open');document.getElementById('overlay').classList.remove('open');}
function handleSearch(e){
  const q=e.target.value.toLowerCase().trim();
  const allSec=document.getElementById('section-all');
  if(!q){allSec.style.display='none';return;}
  const f=products.filter(p=>p.name.toLowerCase().includes(q)||(p.desc||'').toLowerCase().includes(q)||p.category.toLowerCase().includes(q));
  document.getElementById('allGrid').innerHTML=f.length?f.map(card).join(''):`<div style="grid-column:1/-1;text-align:center;padding:44px;color:var(--text-muted)"><i class="fa fa-search" style="font-size:32px;margin-bottom:11px;display:block"></i><p>No products found</p></div>`;
  allSec.style.display='block';
  scrollToSection('section-all');
}
function clearSearch(){document.getElementById('searchInput').value='';document.getElementById('section-all').style.display='none';}
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2500);}
function scrollToSection(id){const el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth'});}
function toggleFaq(questionEl){
  const item=questionEl.closest('.faq-item');
  const isOpen=item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i=>{i.classList.remove('open');i.querySelector('.faq-icon i').className='fa fa-plus';});
  if(!isOpen){item.classList.add('open');item.querySelector('.faq-icon i').className='fa fa-times';}
}
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.getElementById('pdpPage').classList.contains('open'))closePDP();});

// ============================================================
//  Boot — render INSTANTLY with hardcoded data first
// ============================================================
renderAll();
renderSlider('deals');
renderSlider('weekly');
renderSlider('mostSelling');
applyPricelistToDOM();

// ============================================================
//  THEN quietly check JSONBin in the background — but ONLY for things an
//  admin is meant to edit through the admin panel (price, oldPrice, stock,
//  reviews, badge, desc, colors). The IMAGE FILENAME always comes from this
//  file, never from the bin. This means editing an "img:" value right here
//  in script.js takes effect immediately and permanently — no version number
//  to remember, no bin overwrite can ever revert it again.
// ============================================================
fetch(BIN_URL + "/latest", { headers: { "X-Access-Key": API_KEY } })
  .then(res => res.json())
  .then(data => {
    const record = data.record;
    const binProducts = (record && Array.isArray(record.products)) ? record.products : [];
    const binById = {};
    binProducts.forEach(p => { if (p && p.id) binById[p.id] = p; });

    // Merge: start from the hardcoded list (source of truth for img + identity),
    // layer in editable fields from the bin when that product still exists there.
    const merged = HARDCODED_PRODUCTS.map(codeProduct => {
      const fromBin = binById[codeProduct.id];
      if (!fromBin) return codeProduct;
      return {
        ...codeProduct,
        price: typeof fromBin.price === 'number' ? fromBin.price : codeProduct.price,
        oldPrice: ('oldPrice' in fromBin) ? fromBin.oldPrice : codeProduct.oldPrice,
        stock: typeof fromBin.stock === 'number' ? fromBin.stock : codeProduct.stock,
        reviews: typeof fromBin.reviews === 'number' ? fromBin.reviews : codeProduct.reviews,
        badge: fromBin.badge || codeProduct.badge,
        desc: fromBin.desc || codeProduct.desc,
        colors: Array.isArray(fromBin.colors) && fromBin.colors.length ? fromBin.colors : codeProduct.colors,
        // img is intentionally NEVER taken from fromBin — always codeProduct.img
      };
    });

    products = merged;
    if (Array.isArray(record && record.pricelist) && record.pricelist.length) {
      pricelistData = record.pricelist;
    }
    renderAll();
    renderSlider('deals');
    renderSlider('weekly');
    renderSlider('mostSelling');
    applyPricelistToDOM();

    // Keep the bin's editable fields in sync with any brand-new products that
    // only exist in code so far (e.g. a product just added here but never
    // saved through the admin panel yet). Images are still never read back
    // from this write on a future load — see merge logic above.
    const binIsMissingNewProducts = HARDCODED_PRODUCTS.some(p => !binById[p.id]);
    if (binIsMissingNewProducts) {
      fetch(BIN_URL, {
        method: "PUT",
        headers: { "Content-Type": "application/json", "X-Access-Key": API_KEY },
        body: JSON.stringify({ products: merged, pricelist: pricelistData })
      }).catch(()=>{});
    }
  })
  .catch(() => {
    // No internet / JSONBin unreachable — silently ignore.
    // Site already works perfectly with hardcoded products.
  });
