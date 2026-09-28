import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleHelp,
  Disc3,
  FileText,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Scissors,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Truck,
  Globe2,
  Cylinder,
  X,
} from 'lucide-react';

type Product = {
  name: string;
  category: string;
  detail: string;
  tag: string;
  tone: 'plate' | 'scrap' | 'square' | 'cutting' | 'boom' | 'billet' | 'circle' | 'catA';
  icon: typeof Layers3;
  image?: string;
  details?: string[];
  applications?: string[];
};

const whatsappNumber = '916266194648';
const heroPhoto = '/images/company/WhatsApp_Image_2026-09-23_at_17.01.23.jpeg';
const companyPhoto = '/images/company/WhatsApp_Image_2026-09-23_at_17.01.25_(1).jpeg';
const platePhoto = '/images/company/WhatsApp_Image_2026-09-23_at_17.01.25.jpeg';
const categoryPlatePhoto = '/images/company/WhatsApp_Image_2026-09-23_at_17.01.24.jpeg';
const squarePhoto = '/images/company/WhatsApp_Image_2026-09-23_at_17.01.24_(3).jpeg';
const scrapPhoto = '/images/company/WhatsApp_Image_2026-09-23_at_17.01.24_(2).jpeg';
const circlesPhoto = '/images/company/WhatsApp_Image_2026-09-23_at_17.01.23_(1).jpeg';
const endPhoto = '/images/products/end.jpeg';
const profilePhoto = '/images/products/profile.jpeg';
const categoryAPhoto = '/images/products/category_a.jpeg';
const boomPhoto = '/images/products/boom.jpeg';
const whatsappMessage = 'Hello, I would like to enquire about your products.';
const mapsUrl = 'https://maps.app.goo.gl/uNvnVqAYEEkaGXSi8';

const products: Product[] = [
  {
    name: 'Custom Size Cutting',
    category: 'Services',
    detail: 'Custom size cutting solutions based on your required dimensions and specifications. Plate cutting to exact sizes for fabrication, industrial and commercial applications.',
    tag: '01 / Custom Cutting',
    tone: 'plate',
    icon: Scissors,
    image: platePhoto,
    details: ['Custom dimensions as per requirement', 'Plate cutting to exact size', 'Suitable for fabrication and industrial use', 'Available in various thicknesses'],
    applications: ['Share your required dimensions for a focused conversation', 'Bulk enquiries welcome'],
  },
  {
    name: 'MS Scrap',
    category: 'Products',
    detail: 'MS scrap from plate cutting, fabrication scrap and rolling mill scrap, supplied loose for melting use.',
    tag: '02 / Scrap',
    tone: 'scrap',
    icon: SlidersHorizontal,
    image: '/images/products/scrap.jpeg',
    details: ['Scrap Type: Plate Cutting', 'Material Grade: MS', 'From Plate: Cutting', 'Scrap Type: Melting', 'Origin: Fabrication scrap, rolling mill scrap', 'Thickness: 16 to 25 mm', 'Packaging: Loose'],
  },
  {
    name: 'MS Profile Cutting Services',
    category: 'Services',
    detail: 'MS Profile Cutting Services for industrial and fabrication applications. We offer accurate profile cutting and circle cutting services in various thicknesses and sizes as per customer requirement. Our services are widely used for fabrication, machine parts, flange cutting, base plates and industrial applications.',
    tag: '03 / Profile Cutting',
    tone: 'square',
    icon: Scissors,
    image: profilePhoto,
    details: ['Accurate profile cutting', 'Custom size & designs', 'MS Circle cutting', 'MS Bar cutting', 'Half Round cutting', 'MS Square cutting'],
  },
  {
    name: 'End Shearing / End Cutting of Plates',
    category: 'Services',
    detail: 'MS Plate End Cutting / Side Shearing Pieces available. Material is hot rolled, unverified grade (secondary/leftover plate cutting), suitable for fabrication and general engineering use.',
    tag: '04 / End Cutting',
    tone: 'cutting',
    icon: Scissors,
    image: endPhoto,
    details: ['Material: Mild Steel (Unspecified Grade)', 'Process: Plate Cutting / Shearing', 'Surface: Hot Rolled', 'Condition: Irregular shapes, edge cutting marks present'],
    applications: ['Ideal for fabrication, base plates, and general use', 'Bulk quantity available'],
  },
  {
    name: 'Alloy Steel Bloom',
    category: 'Products',
    detail: 'Alloy Steel Bloom 10Mn7 (CC) available for re-rolling and forging use. This is secondary/off-grade (auction) material from BSP origin.',
    tag: '05 / Bloom',
    tone: 'boom',
    icon: Cylinder,
    image: boomPhoto,
    details: ['Size: 300 × 335 mm', 'Section Size: 300 × 300 mm', 'Length: Approx. 5 meter', 'Standard: IS 1875:2009', 'Condition: As-cast, may have surface defects'],
    applications: ['Suitable for re-rolling mills and forging work', 'Inspection available before purchase', 'Bulk buyers can contact for best rate.'],
  },
  {
    name: 'Steel Billets',
    category: 'Products',
    detail: 'Steel Billet (CC) up to 110 mm – Secondary / Defective & Rejected (auction) material, not prime. Suitable for re-rolling use.',
    tag: '06 / Billets',
    tone: 'billet',
    icon: Cylinder,
    image: '/images/products/WhatsApp_Image_2026-09-26_at_11.21.16.jpeg',
    details: ['Size: Up to 110 mm', 'Condition: As-cast, surface defects possible', 'Grade: Unverified', 'HSN: 72071190'],
    applications: ['Inspection available before lifting', 'Bulk buyers contact for best rate'],
  },
  {
    name: 'MS Circles',
    category: 'Products',
    detail: 'MS circles cut to requirement for industrial and fabrication use. Enquire for sizes and current details.',
    tag: '07 / Circles',
    tone: 'circle',
    icon: Disc3,
    image: circlesPhoto,
  },
  {
    name: 'MS Category (A) Plate',
    category: 'Products',
    detail: 'We are engaged in offering End Cutting Mild Steel Plates. These plates are normally end cuts of prime plates and are suitable for fabrication and industrial use. Available in different thicknesses and sizes.',
    tag: '08 / Cat-A Plate',
    tone: 'catA',
    icon: Layers3,
    image: categoryAPhoto,
    details: ['Material: Mild Steel', 'Thickness: 10 mm - 40 mm', 'Width: 1000 mm & above', 'Length: 1500 mm & above', 'Brand: SAIL', 'Common Name: Plate Cutting Category-A'],
  },
];

const serviceItems = [
  { number: '01', title: 'Steel trading', body: 'MS plates, MS scrap, MS Profile Cutting Services, Alloy Steel Bloom, Steel Billets, MS Circles and MS Category (A) Plate for industrial and commercial requirements.', icon: Globe2 },
  { number: '02', title: 'Supply coordination', body: 'Clear communication from requirement to dispatch, with practical support at every step.', icon: Truck },
  { number: '03', title: 'Bulk requirements', body: 'Responsive handling for larger enquiries where consistency and dependability matter.', icon: Layers3 },
  { number: '04', title: 'Custom Size Cutting', body: 'Custom cutting solutions based on your required dimensions and specifications.', icon: Scissors },
];

function whatsappLink(message = whatsappMessage) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function Logo() {
  return (
    <a className="brand" href="#home" aria-label="SRNA Steel Industries home">
      <img src="/srna-logo.svg" alt="SRNA Steel Industries logo" />
      <span className="brand-name"><strong>SRNA</strong><small>STEEL INDUSTRIES</small></span>
    </a>
  );
}

function SectionIntro({ eyebrow, title, body, light = false }: { eyebrow: string; title: string; body?: string; light?: boolean }) {
  return (
    <div className={`section-intro ${light ? 'light' : ''}`}>
      <span className="eyebrow"><i />{eyebrow}</span>
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}

function ProductArt({ image }: { tone: Product['tone']; image?: string }) {
  if (image) {
    return <div className="product-art photo-art"><img src={image} alt="" loading="lazy" /></div>;
  }
  return <div className="product-art placeholder-art"><span>ORIGINAL PHOTO<br />PENDING</span></div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [category, setCategory] = useState('All items');
  const [query, setQuery] = useState('');
  const [formSent, setFormSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.title = 'SRNA Steel Industries | Steel Supplier & Trading Company in Bhilai';
  }, []);

  const filteredProducts = useMemo(() => products.filter((product) => {
    const matchesCategory = category === 'All items' || product.category === category;
    const matchesQuery = `${product.name} ${product.category}`.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  }), [category, query]);

  const navItems = ['Home', 'About', 'Products', 'Catalogue', 'Services', 'Gallery', 'Contact'];
  const goTo = (item: string) => {
    setMenuOpen(false);
    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => <button key={item} onClick={() => goTo(item)} className={item === 'Home' ? 'active' : ''}>{item}</button>)}
          </nav>
          <a className="header-cta" href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp Us</a>
          <button className="menu-button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <div className="mobile-nav">{navItems.map((item) => <button key={item} onClick={() => goTo(item)}>{item}<ArrowUpRight size={16} /></button>)}<a href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp Us</a></div>}
      </header>

      <main>
        <section id="home" className="hero-section" style={{ backgroundImage: `url("${heroPhoto}")` }}>
          <div className="hero-grid" />
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow"><i />Steel supply, made dependable</div>
              <h1>Reliable Steel.<br /><em>Built for Industry.</em></h1>
              <p>Quality steel products and dependable steel solutions for industrial and commercial requirements.</p>
              <div className="hero-actions"><button className="button button-dark" onClick={() => goTo('Products')}>Explore Products <ArrowRight size={17} /></button><a className="button button-outline" href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp Us</a></div>
              <div className="hero-note"><span className="note-dot" /> Serving requirements from Bhilai, Chhattisgarh</div>
            </div>
            <div className="hero-proof"><span>SRNA / 01</span><strong>Steel<br />that moves.</strong><small>Original SRNA Steel Industries photograph</small></div>
          </div>
          <div className="hero-scroll">Scroll to explore <ChevronDown size={15} /></div>
        </section>

        <section className="trust-strip"><div className="container trust-grid"><div><span className="trust-index">01</span><strong>MS Plates & Scrap</strong><small>Flat steel & material supply</small></div><div><span className="trust-index">02</span><strong>Profile Cutting & Circles</strong><small>Industrial supply</small></div><div><span className="trust-index">03</span><strong>Billets & Alloy Bloom</strong><small>Steel products</small></div><div><span className="trust-index">04</span><strong>Cutting & Shearing</strong><small>Plate processing</small></div></div></section>

        <section id="about" className="about-section section-pad">
          <div className="container about-grid"><div className="about-visual"><img className="about-company-photo" src={companyPhoto} alt="SRNA Steel Industries business location" loading="lazy" /><div className="about-card about-card-back" /><div className="about-card about-card-front"><span className="eyebrow"><i />The SRNA approach</span><strong>Built around<br /><em>steel.</em></strong><div className="card-rule" /><small>Precision in product.<br />Confidence in supply.</small></div><div className="vertical-caption">EST. / BHL / INDIA</div></div><div className="about-copy"><SectionIntro eyebrow="About SRNA" title="Built around steel. Driven by reliability." body="SRNA Steel Industries serves steel requirements with a focus on dependable products, responsive service and practical supply solutions for businesses and industrial requirements." /><div className="about-points"><div><Check size={16} /><span>Direct, responsive conversations</span></div><div><Check size={16} /><span>Product-led supply approach</span></div><div><Check size={16} /><span>Built for business requirements</span></div></div><button className="text-link" onClick={() => goTo('Contact')}>About SRNA Steel Industries <ArrowRight size={17} /></button></div></div>
        </section>

        <section className="specialties-section section-pad"><div className="container specialties-grid"><div className="specialties-intro"><span className="eyebrow"><i />What we deal in specially</span><h2>Made for the exact requirement.</h2><p>Clear product knowledge, practical cutting support and steel material selected around your business needs.</p><a className="button button-dark" href={whatsappLink('Hello, I would like to enquire about Custom Size Cutting.')} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Enquire on WhatsApp</a></div><div className="specialties-list"><div className="specialty-heading"><strong>We deal in specially</strong><span>SRNA / 02</span></div><div className="specialty-row"><Layers3 size={18} /><span><strong>MS Plates (10 MM - 40 MM)</strong><small>Plate material for industrial requirements.</small></span></div><div className="specialty-row"><Scissors size={18} /><span>Plate Cutting (Cat-A / Cat-B / Cat-1)</span></div><div className="specialty-row"><Scissors size={18} /><span>End Shearing Plates (PM End Cutting Cat-1)</span></div><div className="specialty-row"><SlidersHorizontal size={18} /><span>Rolling Scrap & MS Scrap</span></div><div className="specialty-row"><Cylinder size={18} /><span>Billet & Bloom (Defective / Reject)</span></div><div className="specialty-row specialty-feature"><Check size={18} /><span><strong>Custom Size Cutting</strong><small>Custom cutting solutions based on your required dimensions and specifications.</small></span><a href={whatsappLink('Hello, I would like to enquire about Custom Size Cutting.')} target="_blank" rel="noreferrer">Enquire <ArrowUpRight size={15} /></a></div></div></div></section><section id="products" className="products-section section-pad section-blue">
          <div className="container"><div className="section-top"><SectionIntro eyebrow="Product range" title="Steel that works as hard as you do." body="Our offerings span MS plates, MS scrap, MS Profile Cutting Services, Alloy Steel Bloom, Steel Billets, MS Circles, MS Category (A) Plate and plate cutting services. Share your requirement with us for current availability and commercial details." light /><button className="button button-light" onClick={() => goTo('Catalogue')}>View full catalogue <ArrowUpRight size={16} /></button></div><div className="product-grid product-grid-eight">{products.map((product) => <article className="product-card" key={product.name} onClick={() => setActiveProduct(product)}><ProductArt tone={product.tone} image={product.image} /><div className="product-body"><div className="product-meta"><span>{product.tag}</span><product.icon size={17} /></div><h3>{product.name}</h3><p>{product.detail}</p><button className="card-link">View details <ArrowUpRight size={15} /></button></div></article>)}</div></div>
        </section>

        <section id="catalogue" className="catalogue-section section-pad"><div className="container"><div className="catalogue-heading"><SectionIntro eyebrow="Digital catalogue" title="A clearer way to specify steel." body="Browse our offerings and start a focused conversation around your requirement." /><div className="catalogue-side-note"><FileText size={22} /><span>Current sizes, grades and pricing<br /><strong>available on enquiry</strong></span></div></div><div className="catalogue-tools"><div className="category-tabs">{['All items', 'Products', 'Services'].map((item) => <button key={item} className={category === item ? 'selected' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div><label className="search-box"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search our range" /></label></div><div className="catalogue-list">{filteredProducts.map((product, index) => <article className="catalogue-row" key={product.name}><span className="catalogue-number">{String(index + 1).padStart(2, '0')}</span><div className="catalogue-art"><ProductArt tone={product.tone} image={product.image} /></div><div className="catalogue-info"><span className="eyebrow"><i />{product.category}</span><h3>{product.name}</h3><p>{product.detail}</p><div className="catalogue-specs"><span>Details: On enquiry</span></div></div><button className="round-arrow" onClick={() => setActiveProduct(product)} aria-label={`View ${product.name}`}><ArrowUpRight size={18} /></button></article>)}{filteredProducts.length === 0 && <div className="empty-state"><CircleHelp size={22} /> No items match that search.</div>}</div></div></section>

        <section id="services" className="services-section section-pad section-navy"><div className="container"><div className="section-top"><SectionIntro eyebrow="What we do" title="Supply with a practical point of view." body="Steel is only part of the requirement. The right conversation, product clarity and dependable coordination matter too." light /><a className="button button-light" href={whatsappLink()} target="_blank" rel="noreferrer">Start an enquiry <ArrowRight size={17} /></a></div><div className="service-grid">{serviceItems.map((service) => <div className="service-item" key={service.number}><span className="service-number">{service.number}</span><service.icon size={21} /><h3>{service.title}</h3><p>{service.body}</p><a href={whatsappLink(`Hello, I would like to enquire about ${service.title}.`)} target="_blank" rel="noreferrer">Discuss this <ArrowUpRight size={15} /></a></div>)}</div></div></section>

        <section id="gallery" className="gallery-section section-pad"><div className="container"><div className="gallery-heading"><SectionIntro eyebrow="Gallery" title="The language of steel is material." body="A clean, image-led space for product and company photography. Your original catalogue and business photographs can live here without losing their character." /><div className="gallery-badge"><Sparkles size={18} /><span>Real materials.<br /><strong>Nothing artificial.</strong></span></div></div><div className="gallery-grid"><div className="gallery-tile gallery-large gallery-photo"><img src={heroPhoto} alt="SRNA Steel Industries" loading="lazy" /><span>SRNA<br /><strong>STEEL INDUSTRIES</strong></span><small>01 — Our facility</small></div><div className="gallery-tile gallery-tall gallery-photo"><img src={platePhoto} alt="MS plates at SRNA Steel Industries" loading="lazy" /><span>MS<br /><strong>PLATES</strong></span><small>02 — Product material</small></div><div className="gallery-tile gallery-wide gallery-photo"><img src={circlesPhoto} alt="MS circles at SRNA Steel Industries" loading="lazy" /><span>MS<br /><strong>CIRCLES</strong></span><small>03 — Product material</small></div></div></div></section>

        <section id="contact" className="contact-section section-pad"><div className="container contact-grid"><div className="contact-copy"><SectionIntro eyebrow="Contact us" title="Let's talk steel." body="Have a product requirement or bulk enquiry? Get in touch with SRNA Steel Industries." /><div className="contact-details"><a href="tel:+916266194648"><Phone size={18} /><span><small>Phone / WhatsApp</small>+91 6266194648</span></a><a href="mailto:srnasteel@gmail.com"><Mail size={18} /><span><small>Email</small>srnasteel@gmail.com</span></a><a href={mapsUrl} target="_blank" rel="noreferrer"><MapPin size={18} /><span><small>Location</small>Bhilai, Chhattisgarh, India</span></a></div><div className="contact-actions"><a className="button button-dark" href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp us</a><a className="button button-outline-dark" href={mapsUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={16} /></a></div></div><div className="enquiry-card"><div className="enquiry-header"><span className="eyebrow"><i />Enquiry desk</span><span>SRNA / 04</span></div><h3>Tell us what you need.</h3>{formSent ? <div className="form-success"><Check size={24} /><strong>Your enquiry is ready.</strong><p>Use WhatsApp to share the details directly with our team.</p><a className="text-link" href={whatsappLink()} target="_blank" rel="noreferrer">Continue to WhatsApp <ArrowRight size={16} /></a></div> : <form onSubmit={(event) => { event.preventDefault(); setFormSent(true); }}><div className="form-row"><label>Name<input required placeholder="Your name" /></label><label>Phone number<input required type="tel" placeholder="+91" /></label></div><label>Email<input type="email" placeholder="you@company.com" /></label><label>Product / requirement<input required placeholder="What are you looking for?" /></label><label>Message<textarea rows={3} placeholder="Share a little about your requirement" /></label><button className="button button-dark" type="submit">Prepare enquiry <ArrowRight size={16} /></button><small className="form-note">This form prepares your enquiry for WhatsApp. No details are stored here.</small></form>}</div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><div className="footer-brand"><Logo /><p>Quality steel products and dependable supply solutions for business requirements.</p></div><div className="footer-links"><span className="footer-label">Explore</span>{navItems.map((item) => <button key={item} onClick={() => goTo(item)}>{item}</button>)}</div><div className="footer-contact"><span className="footer-label">Contact</span><a href="tel:+916266194648">+91 6266194648</a><a href="mailto:srnasteel@gmail.com">srnasteel@gmail.com</a><a href={mapsUrl} target="_blank" rel="noreferrer">Bhilai, Chhattisgarh <ArrowUpRight size={14} /></a></div></div><div className="container footer-bottom"><span>© 2026 SRNA Steel Industries. All rights reserved.</span><span>Reliable steel. Built for industry.</span></div></footer>

      <a className="floating-whatsapp" href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={20} /><span>WhatsApp us</span></a>
      {activeProduct && <div className="modal-backdrop" role="presentation" onClick={() => setActiveProduct(null)}><div className="product-modal" role="dialog" aria-modal="true" aria-label={activeProduct.name} onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setActiveProduct(null)} aria-label="Close"><X size={19} /></button><div className="product-modal-image"><img src={activeProduct.image} alt={activeProduct.name} /></div><div className="modal-content"><span className="eyebrow"><i />{activeProduct.category}</span><h2>{activeProduct.name}</h2><p>{activeProduct.detail}</p>{activeProduct.details && <div className="modal-specs"><h4>Product details</h4><ul>{activeProduct.details.map((d) => <li key={d}><Check size={14} /> {d}</li>)}</ul></div>}{activeProduct.applications && <div className="modal-specs"><h4>Applications / Availability</h4><ul>{activeProduct.applications.map((a) => <li key={a}><ArrowRight size={14} /> {a}</li>)}</ul></div>}<div className="modal-note"><ShieldCheck size={18} /><span>Details, availability and pricing are shared on enquiry.</span></div><a className="button button-dark" href={whatsappLink(`Hello, I would like to enquire about ${activeProduct.name}.`)} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Enquire on WhatsApp</a></div></div></div>}
    </div>
  );
}

export default App;
