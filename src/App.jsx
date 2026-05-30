import React, { useState } from 'react';
import './index.css';
import { compoundsData } from './data';

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

const DocumentIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCompound, setSelectedCompound] = useState(null);

  const filtered = compoundsData.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.hazards.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const isSearching = searchQuery.trim().length > 0;

  return (
    <div>
      {/* Landing / Hero - centered when not searching */}
      <div className={`hero-section ${isSearching ? 'hero-section--compact' : ''}`}>
        <div className="hero-content">
          <h1 className="hero-title">Chemical Safety Database</h1>
          <p className="hero-subtitle">Cari informasi zat kimia, sifat bahaya, dan data MSDS</p>
          <div className="search-input-wrapper search-input-medium">
            <SearchIcon />
            <input
              type="text"
              className="search-input"
              placeholder="Cari nama zat, rumus, atau sifat bahaya..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="search-total-info">
            {isSearching
              ? <span>Ditemukan <strong>{filtered.length}</strong> dari <strong>{compoundsData.length}</strong> zat kimia</span>
              : <span><strong>{compoundsData.length}</strong> zat kimia tersedia</span>
            }
          </div>
        </div>
      </div>

      {/* Results - only show when searching */}
      {isSearching && (
        <main className="container mt-md" style={{ paddingBottom: '40px' }}>
          <div className="grid-layout">
            {filtered.map(c => (
              <CompoundCard key={c.id} data={c} onClick={() => setSelectedCompound(c)} />
            ))}
            {filtered.length === 0 && (
              <div className="search-empty">
                <div className="search-empty__icon">🔍</div>
                <div className="search-empty__title">Tidak ditemukan</div>
                <div className="search-empty__desc">Tidak ada zat kimia yang cocok dengan "{searchQuery}"</div>
              </div>
            )}
          </div>
        </main>
      )}

      {/* Modal */}
      {selectedCompound && <CompoundModal data={selectedCompound} onClose={() => setSelectedCompound(null)} />}
    </div>
  );
}


// ================= Card =================

function CompoundCard({ data, onClick }) {
  const getHazardClass = (hz) => {
    const l = hz.toLowerCase();
    if (l.includes('korosif')) return 'chip-korosif';
    if (l.includes('terbakar')) return 'chip-terbakar';
    if (l.includes('oksidator')) return 'chip-oksidator';
    if (l.includes('beracun') || l.includes('toksik')) return 'chip-toksik';
    if (l.includes('iritan')) return 'chip-iritan';
    if (l.includes('karsinogenik')) return 'chip-karsinogenik';
    if (l.includes('eksplosif')) return 'chip-eksplosif';
    return 'chip-neutral';
  };

  return (
    <div className="chem-card" onClick={onClick}>
      <div className="card-top-strip strip-blue"></div>
      <div className="card-body">
        {/* Name */}
        <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '16px', color: '#1a1c1e', margin: 0 }}>
          {data.name}
        </h2>

        {/* Formula */}
        <div>
          <span className="formula-tag">{data.formula}</span>
        </div>

        {/* Wujud */}
        <div style={{ borderTop: '1px solid #e2e2e5', paddingTop: '10px' }}>
          <div className="label-caps text-outline" style={{ marginBottom: '2px' }}>Warna / Wujud</div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: '#1a1c1e' }}>{data.wujud}</div>
        </div>

        {/* Hazards */}
        <div className="flex flex-wrap gap-sm">
          {data.hazards.map(hz => (
            <span key={hz} className={`chip label-caps ${getHazardClass(hz)}`} style={{ fontSize: '10px' }}>{hz}</span>
          ))}
        </div>
      </div>
    </div>
  );
}


// ================= Modal =================

function CompoundModal({ data, onClose }) {
  const getHazardClass = (hz) => {
    const l = hz.toLowerCase();
    if (l.includes('korosif')) return 'chip-korosif';
    if (l.includes('terbakar')) return 'chip-terbakar';
    if (l.includes('oksidator')) return 'chip-oksidator';
    if (l.includes('beracun') || l.includes('toksik')) return 'chip-toksik';
    if (l.includes('iritan')) return 'chip-iritan';
    if (l.includes('karsinogenik')) return 'chip-karsinogenik';
    if (l.includes('eksplosif')) return 'chip-eksplosif';
    return 'chip-neutral';
  };

  const hasLink = data.msds && data.msds.link;
  const hasMsdsFields = data.msds && (data.msds.penanganan || data.msds.penyimpanan || data.msds.p3k || data.msds.pembuangan);
  const hasMsds = hasLink || hasMsdsFields;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-drag-handle"></div>

        {/* Header */}
        <div className="modal-header">
          <button className="close-button" onClick={onClose}><CloseIcon /></button>
          <div className="formula-lg text-primary">{data.formula}</div>
          <div className="headline-lg text-on-surface" style={{ fontSize: '20px', marginTop: '4px' }}>{data.name}</div>
        </div>

        <div className="modal-body">
          {/* Rumus Bangun Section */}
          {data.rumusBangun && (
            <div className="modal-section" style={{ paddingBottom: '20' }}>
              <h3 className="label-caps text-on-surface mb-sm">Rumus Bangun</h3>
              <div style={{ 
                background: 'var(--surface-container-low)', 
                borderRadius: '12px', 
                padding: '20px', 
                display: 'flex', 
                justifyContent: 'center',
                border: '1px solid var(--outline-variant)'
              }}>
                <img 
                  src={data.rumusBangun} 
                  alt={`Struktur ${data.name}`} 
                  style={{ maxHeight: '140px', objectFit: 'contain' }} 
                />
              </div>
            </div>
          )}

          {/* Info Grid */}
          <div className="modal-section">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div className="stat-cell">
                <div className="label-caps text-outline" style={{ marginBottom: '4px' }}>Rumus Kimia</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '15px', fontWeight: 500, color: 'var(--primary)' }}>{data.formula}</div>
              </div>
              <div className="stat-cell">
                <div className="label-caps text-outline" style={{ marginBottom: '4px' }}>Warna / Wujud</div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: '#1a1c1e' }}>{data.wujud}</div>
              </div>
            </div>
          </div>

          {/* Sifat Bahaya */}
          <div className="modal-section">
            <h3 className="label-caps text-on-surface mb-sm">Sifat Bahaya</h3>
            <div className="flex flex-wrap gap-sm">
              {data.hazards.map(hz => (
                <span key={hz} className={`chip label-caps ${getHazardClass(hz)}`} style={{ fontSize: '11px' }}>{hz}</span>
              ))}
            </div>
          </div>

          {/* MSDS Section */}
          <div className="modal-section">
            <h3 className="label-caps text-on-surface mb-md">Keselamatan & Penanganan (MSDS)</h3>
            {hasMsds ? (
              <div className="flex flex-col gap-md">
                {hasLink && (
                  <a
                    href={data.msds.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="msds-link-button"
                  >
                    <DocumentIcon />
                    <span>Lihat Dokumen MSDS (PDF)</span>
                    <ExternalLinkIcon />
                  </a>
                )}
                {data.msds.penanganan && <MsdsBlock title="Penanganan" content={data.msds.penanganan} color="#006591" />}
                {data.msds.penyimpanan && <MsdsBlock title="Penyimpanan" content={data.msds.penyimpanan} color="#006d37" />}
                {data.msds.p3k && <MsdsBlock title="P3K" content={data.msds.p3k} color="#ba1a1a" />}
                {data.msds.pembuangan && <MsdsBlock title="Pembuangan" content={data.msds.pembuangan} color="#3e4851" />}
              </div>
            ) : (
              <div style={{ background: '#f3f3f6', borderRadius: '8px', padding: '20px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: '#6e7882' }}>
                  Data MSDS belum tersedia.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function MsdsBlock({ title, content, color }) {
  return (
    <div style={{ background: `${color}0F`, borderLeft: `4px solid ${color}`, borderRadius: '0 6px 6px 0', padding: '12px' }}>
      <div className="label-caps mb-sm" style={{ color: color }}>{title}</div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: '1.6', color: '#1a1c1e' }}>{content}</div>
    </div>
  );
}
