import React, { useState } from 'react';
import './index.css';
import { compoundsData, reportsData } from './data';

const SearchIcon = () => (
  <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const CloseIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 150ms ease' }} xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('kimia');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCompound, setSelectedCompound] = useState(null);
  const [selectedReport, setSelectedReport] = useState(null);

  // Filtering
  const filteredCompounds = compoundsData.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredReports = reportsData.filter(r => 
    r.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.metode.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.kategori.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* HEADER */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 20, background: 'white',
        borderBottom: '1px solid var(--outline-variant)'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '16px' }}>
          <div className="container flex justify-between items-center" style={{ marginBottom: '16px' }}>
            <h1 className="headline-lg text-primary" style={{ margin: 0 }}>ChemBase</h1>
          </div>
          
          <div className="container flex" style={{ gap: '24px' }}>
            <button 
              onClick={() => setActiveTab('kimia')}
              style={{
                background: 'none', border: 'none', padding: '0 0 12px 0',
                fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '14px',
                color: activeTab === 'kimia' ? 'var(--primary)' : 'var(--on-surface-variant)',
                borderBottom: activeTab === 'kimia' ? '2px solid var(--primary)' : '2px solid transparent',
                cursor: 'pointer', transition: 'all 150ms ease'
              }}>
              Zat Kimia
            </button>
            <button 
              onClick={() => setActiveTab('laporan')}
              style={{
                background: 'none', border: 'none', padding: '0 0 12px 0',
                fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '14px',
                color: activeTab === 'laporan' ? 'var(--primary)' : 'var(--on-surface-variant)',
                borderBottom: activeTab === 'laporan' ? '2px solid var(--primary)' : '2px solid transparent',
                cursor: 'pointer', transition: 'all 150ms ease'
              }}>
              Laporan Analitik
            </button>
          </div>
        </div>
      </header>

      {/* search bar */}
      <div className="search-container">
        <div className="container search-input-wrapper" style={{ padding: 0 }}>
          <SearchIcon />
          <input 
            type="text" 
            className="search-input" 
            placeholder={activeTab === 'kimia' ? "Cari nama zat, rumus, atau kategori..." : "Cari judul laporan atau metode..."}
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* main */}
      <main className="container mt-md" style={{ paddingBottom: '40px' }}>
        {activeTab === 'kimia' && (
          <div className="grid-layout">
            {filteredCompounds.map(c => (
              <CompoundCard key={c.id} data={c} onClick={() => setSelectedCompound(c)} />
            ))}
            {filteredCompounds.length === 0 && <p className="body-md text-on-surface-variant">Tidak ada zat kimia yang cocok.</p>}
          </div>
        )}

        {activeTab === 'laporan' && (
          <div className="grid-layout">
            {filteredReports.map(r => (
              <ReportCard key={r.id} data={r} onClick={() => setSelectedReport(r)} />
            ))}
            {filteredReports.length === 0 && <p className="body-md text-on-surface-variant">Tidak ada laporan yang cocok.</p>}
          </div>
        )}
      </main>

      {/* modals */}
      {selectedCompound && <CompoundModal data={selectedCompound} onClose={() => setSelectedCompound(null)} />}
      {selectedReport && <ReportModal data={selectedReport} onClose={() => setSelectedReport(null)} />}
    </div>
  );
}



function CompoundCard({ data, onClick }) {
  const getHazardClass = (hz) => {
    if(hz.toLowerCase().includes('korosif')) return 'chip-korosif';
    if(hz.toLowerCase().includes('terbakar')) return 'chip-terbakar';
    if(hz.toLowerCase().includes('toksik')) return 'chip-toksik';
    if(hz.toLowerCase().includes('aman')) return 'chip-aman';
    return 'chip-neutral';
  };

  return (
    <div className="chem-card" onClick={onClick}>
      <div className="card-top-strip strip-blue"></div>
      <div className="card-body">
        {/* Row 1 */}
        <div className="flex justify-between items-center">
          <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '16px', color: '#1a1c1e', margin: 0 }}>
            {data.name}
          </h2>
          <span className="chip chip-neutral label-caps" style={{ fontSize: '10px' }}>{data.category}</span>
        </div>
        
        {/* Row 2 */}
        <div>
          <span className="formula-sm text-primary" style={{ background: '#f3f3f6', padding: '4px 8px', borderRadius: '4px' }}>
            {data.formula}
          </span>
        </div>
        
        {/* Row 3 */}
        <div className="flex" style={{ gap: '16px', borderTop: '1px solid #e2e2e5', borderBottom: '1px solid #e2e2e5', padding: '8px 0' }}>
          <div>
            <div className="label-caps text-outline">Wujud</div>
            <div className="body-md" style={{ fontSize: '14px' }}>{data.wujud}</div>
          </div>
          <div>
            <div className="label-caps text-outline">Warna</div>
            <div className="body-md" style={{ fontSize: '14px' }}>{data.warna}</div>
          </div>
          <div>
            <div className="label-caps text-outline">pH</div>
            <div className="body-md" style={{ fontSize: '14px' }}>{data.ph}</div>
          </div>
        </div>
        
        {/* Row 4 */}
        <div className="flex flex-wrap gap-sm">
          {data.hazards.map(hz => (
            <span key={hz} className={`chip label-caps ${getHazardClass(hz)}`} style={{ fontSize: '10px' }}>{hz}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CompoundModal({ data, onClose }) {
  const [sifatOpen, setSifatOpen] = useState(true);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-drag-handle"></div>
        
        {/* Header Section */}
        <div className="modal-header">
          <button className="close-button" onClick={onClose}><CloseIcon /></button>
          <div className="formula-sm text-primary" style={{ fontSize: '24px', fontWeight: 700, marginBottom: '4px' }}>{data.formula}</div>
          <div className="headline-lg text-on-surface" style={{ fontSize: '20px', marginBottom: '8px' }}>{data.name}</div>
          <div className="label-caps text-outline">CAS: {data.cas}</div>
        </div>
        
        <div className="modal-body">
          {/* Quick Stats Grid */}
          <div className="modal-section">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
              <StatCell label="Berat Molekul" value={data.beratMolekul} />
              <StatCell label="Titik Didih" value={data.titikDidih} />
              <StatCell label="Kepadatan" value={data.kepadatan} />
              <StatCell label="Kategori" value={data.category} />
              <StatCell label="Wujud" value={data.wujud} />
              <StatCell label="pH" value={data.ph} />
            </div>
          </div>
          
          {/* Sifat Section */}
          <div className="modal-section" style={{ padding: '0' }}>
            <button 
              onClick={() => setSifatOpen(!sifatOpen)}
              style={{ width: '100%', padding: '24px', background: 'none', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
            >
              <span className="label-caps text-on-surface">Sifat Fisik & Kimia</span>
              <ChevronIcon open={sifatOpen} />
            </button>
            <div className="accordion-content" style={{ maxHeight: sifatOpen ? '500px' : '0', overflow: 'hidden', padding: sifatOpen ? '0 24px 24px 24px' : '0 24px' }}>
              <div className="flex flex-col gap-md">
                {data.sifat.map((s, i) => (
                  <div key={i} style={{ borderLeft: '2px solid var(--primary)', paddingLeft: '12px' }}>
                    <div className="label-caps text-on-surface-variant mb-sm">{s.label}</div>
                    <div className="body-md">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* MSDS Section */}
          <div className="modal-section">
            <h3 className="label-caps text-on-surface mb-md">Keselamatan & Penanganan (MSDS)</h3>
            <div className="flex flex-col gap-md">
              <MsdsBlock title="Penanganan" content={data.msds.penanganan} color="#006591" />
              <MsdsBlock title="Penyimpanan" content={data.msds.penyimpanan} color="#006d37" />
              <MsdsBlock title="P3K" content={data.msds.p3k} color="#ba1a1a" />
              <MsdsBlock title="Pembuangan" content={data.msds.pembuangan} color="#3e4851" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCell({ label, value }) {
  return (
    <div style={{ background: '#f3f3f6', borderRadius: '6px', padding: '12px' }}>
      <div className="label-caps text-outline mb-sm">{label}</div>
      <div className="body-md">{value}</div>
    </div>
  );
}

function MsdsBlock({ title, content, color }) {
  return (
    <div style={{ background: `${color}0F`, borderLeft: `4px solid ${color}`, borderRadius: '0 6px 6px 0', padding: '12px' }}>
      <div className="label-caps mb-sm" style={{ color: color }}>{title}</div>
      <div className="body-md text-on-surface">{content}</div>
    </div>
  );
}


// ================= LAB REPORTS =================

function ReportCard({ data, onClick }) {
  return (
    <div className="chem-card" onClick={onClick}>
      <div className="card-top-strip strip-green"></div>
      <div className="card-body">
        {/* Row 1 */}
        <div>
          <div className="flex justify-between items-start mb-sm">
            <span className="label-caps text-secondary">{data.metode}</span>
            <span className="chip chip-neutral label-caps" style={{ fontSize: '10px' }}>{data.kategori}</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '18px', color: '#1a1c1e', margin: 0, lineHeight: '24px' }}>
            {data.judul}
          </h2>
        </div>
        
        {/* Row 2 - Prinsip Preview */}
        <div className="body-md text-on-surface-variant" style={{ 
          fontSize: '14px', 
          display: '-webkit-box', 
          WebkitLineClamp: 2, 
          WebkitBoxOrient: 'vertical', 
          overflow: 'hidden' 
        }}>
          {data.prinsip}
        </div>
        
        {/* Row 3 - Tags */}
        <div className="flex flex-wrap gap-sm mt-md">
          {data.tags.map(tag => (
            <span key={tag} className="chip label-caps" style={{ background: '#f3f3f6', color: '#3e4851', fontSize: '10px' }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReportModal({ data, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-drag-handle"></div>
        
        {/* Header Section */}
        <div className="modal-header">
          <button className="close-button" onClick={onClose}><CloseIcon /></button>
          <div className="label-caps text-secondary mb-sm">{data.metode} • {data.kategori}</div>
          <div className="headline-lg text-on-surface">{data.judul}</div>
        </div>
        
        <div className="modal-body">
          {/* Prinsip */}
          <div className="modal-section">
            <h3 className="label-caps text-on-surface mb-sm">Prinsip</h3>
            <div className="body-md" style={{ background: '#f3f3f6', borderRadius: '8px', padding: '16px', color: '#1a1c1e' }}>
              {data.prinsip}
            </div>
          </div>
          
          {/* Tujuan */}
          <div className="modal-section">
            <h3 className="label-caps text-on-surface mb-md">Tujuan</h3>
            <div className="flex flex-col gap-sm">
              {data.tujuan.map((t, i) => (
                <div key={i} className="flex gap-md items-start">
                  <div style={{ 
                    minWidth: '20px', height: '20px', borderRadius: '10px', 
                    background: 'var(--primary)', color: 'white', 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 700,
                    marginTop: '2px'
                  }}>
                    {i + 1}
                  </div>
                  <div className="body-md">{t}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Alat & Bahan */}
          <div className="modal-section">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              <div>
                <div className="label-caps" style={{ background: '#006591', color: 'white', padding: '8px 12px', borderRadius: '4px', marginBottom: '12px' }}>Alat</div>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {data.alat.map(a => (
                    <li key={a} className="flex items-center gap-sm">
                      <div style={{ width: '4px', height: '4px', background: 'var(--outline-variant)', borderRadius: '1px' }}></div>
                      <span className="label-caps" style={{ color: '#3e4851', textTransform: 'none', fontWeight: 600 }}>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="label-caps" style={{ background: '#006d37', color: 'white', padding: '8px 12px', borderRadius: '4px', marginBottom: '12px' }}>Bahan</div>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {data.bahan.map(b => (
                    <li key={b} className="flex items-center gap-sm">
                      <div style={{ width: '4px', height: '4px', background: 'var(--outline-variant)', borderRadius: '1px' }}></div>
                      <span className="label-caps" style={{ color: '#3e4851', textTransform: 'none', fontWeight: 600 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Cara Kerja */}
          <div className="modal-section">
            <h3 className="label-caps text-on-surface mb-md">Cara Kerja</h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {data.caraKerja.map((step, i) => (
                <div key={i} className="flex gap-md" style={{ position: 'relative', paddingBottom: i < data.caraKerja.length - 1 ? '24px' : '0' }}>
                  {/* Connector Line */}
                  {i < data.caraKerja.length - 1 && (
                    <div style={{ position: 'absolute', left: '12px', top: '24px', bottom: '0', width: '1px', borderLeft: '1px dashed var(--outline-variant)' }}></div>
                  )}
                  
                  {/* Step Number */}
                  <div style={{ 
                    fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '18px', color: 'var(--primary)',
                    minWidth: '24px', textAlign: 'center', zIndex: 2, background: 'white'
                  }}>
                    {i + 1}
                  </div>
                  
                  {/* Step Text */}
                  <div className="body-md text-on-surface" style={{ paddingTop: '2px' }}>
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
