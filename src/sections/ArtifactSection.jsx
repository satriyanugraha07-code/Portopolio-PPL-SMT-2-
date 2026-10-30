import { useMemo, useState } from 'react'
import { ArrowUpRight, ExternalLink, FileText, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import {
  artifactCategories,
  artifactDocuments,
  artifactDriveFolder,
  artifactStats,
} from '../data/siteData'

export default function ArtifactSection() {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [selectedArtifact, setSelectedArtifact] = useState(null)

  const filteredArtifacts = useMemo(
    () =>
      activeCategory === 'Semua'
        ? artifactDocuments
        : artifactDocuments.filter((item) => item.category === activeCategory),
    [activeCategory],
  )

  return (
    <section className="section artifacts" id="artefak" aria-labelledby="artifacts-title">
      <div className="container">
        <div className="artifacts__intro">
          <SectionHeading
            id="artifacts-title"
            eyebrow="04 — ANALISIS ARTEFAK PEMBELAJARAN"
            title="ARTEFAK PEMBELAJARAN"
            description="Kumpulan dokumen pembelajaran PPG Prajabatan Teknik Mesin yang tersusun per pertemuan — 6 pertemuan Gambar Teknik dan 5 pertemuan CNC. Mulai dari kegunaan gambar teknik, macam-macam garis, konstruksi geometri, hingga bukaan (bentangan) benda kerja; serta pemrograman CNC dari G00/G01 sampai G02/G03, siklus G71/G70, alur dan ulir."
          />

          <aside className="artifacts__summary" aria-label="Ringkasan artefak pembelajaran">
            <span className="artifacts__summary-label">Total Artefak</span>
            <strong>
              <span>{String(artifactDocuments.length).padStart(2, '0')}</span> Dokumen
            </strong>
            <div className="artifacts__summary-grid">
              {artifactStats.map((stat) => (
                <div className="artifacts__summary-item" key={stat.label}>
                  <span>{stat.value}</span>
                  <small>{stat.label}</small>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="artifacts__filters" role="tablist" aria-label="Filter kategori artefak">
          {artifactCategories.map((category) => (
            <button
              className={`artifacts__filter-btn ${
                activeCategory === category ? 'is-active' : ''
              }`}
              type="button"
              key={category}
              onClick={() => setActiveCategory(category)}
              role="tab"
              aria-selected={activeCategory === category}
            >
              {category}
              <span>{category === 'Semua'
                ? artifactDocuments.length
                : artifactDocuments.filter((item) => item.category === category).length}
              </span>
            </button>
          ))}
        </div>

        <motion.div className="artifacts__grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredArtifacts.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.article
                  className="artifact-card"
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 28, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  exit={{ opacity: 0, scale: 0.94, y: 24 }}
                  transition={{
                    duration: 0.52,
                    delay: Math.min(index, 6) * 0.045,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="artifact-card__top">
                    <span className="artifact-card__icon" aria-hidden="true">
                      <Icon size={18} />
                    </span>
                    <span className="artifact-card__type">{item.type}</span>
                    <span className="artifact-card__number">{item.number}</span>
                  </div>

                  <span className="artifact-card__category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p className="artifact-card__meta">
                    <FileText size={13} aria-hidden="true" />
                    {item.meta}
                  </p>

                  <div className="artifact-card__actions">
                    <button
                      className="artifact-card__detail"
                      type="button"
                      onClick={() => setSelectedArtifact(item)}
                      aria-label={`Lihat ringkasan ${item.title}`}
                    >
                      Ringkasan
                    </button>
                    <a
                      className="artifact-card__link"
                      href={item.link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${item.link.label} — ${item.title} (terbuka di tab baru)`}
                    >
                      {item.link.label}
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  </div>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </motion.div>

        <motion.a
          className="artifacts__source"
          href={artifactDriveFolder}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span>Buka seluruh folder RPP di Google Drive</span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </motion.a>
      </div>

      <AnimatePresence>
        {selectedArtifact && (
          <motion.div
            className="gallery__modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArtifact(null)}
          >
            <motion.div
              className="gallery__modal-content artifact-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="artifact-modal-title"
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="gallery__modal-close"
                type="button"
                onClick={() => setSelectedArtifact(null)}
                aria-label="Tutup ringkasan artefak"
              >
                <X size={20} aria-hidden="true" />
              </button>

              <div className="artifact-modal__meta">
                <span className="artifact-card__type">{selectedArtifact.type}</span>
                <span>{selectedArtifact.category}</span>
                <span>No. {selectedArtifact.number}</span>
              </div>

              <h2 id="artifact-modal-title">{selectedArtifact.title}</h2>
              <p className="artifact-modal__meta-line">{selectedArtifact.meta}</p>
              <p className="artifact-modal__lead">{selectedArtifact.description}</p>

              <div className="artifact-modal__details">
                <div>
                  <span>Fokus Analisis</span>
                  <strong>{selectedArtifact.focus}</strong>
                </div>
                <div>
                  <span>Bukti Belajar</span>
                  <strong>{selectedArtifact.evidence}</strong>
                </div>
              </div>

              <a
                className="button button--primary artifact-modal__cta"
                href={selectedArtifact.link.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>{selectedArtifact.link.label}</span>
                <ExternalLink size={17} aria-hidden="true" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
