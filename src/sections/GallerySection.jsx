import { useState } from 'react'
import { Calendar, Eye, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { galleryCategories, galleryItems } from '../data/siteData'

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const [selectedItem, setSelectedItem] = useState(null)

  const filteredItems =
    activeCategory === 'Semua'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section className="section gallery" id="galeri" aria-labelledby="gallery-title">
      <div className="container">
        <SectionHeading
          id="gallery-title"
          eyebrow="06 — GALERI KEGIATAN"
          title="DOKUMENTASI PEMBELAJARAN GAMBAR TEKNIK"
          description="Dokumentasi pelaksanaan, implementasi, dan proses pembelajaran gambar teknik bersama peserta didik di kelas."
        />

        <div className="gallery__filters" role="tablist" aria-label="Filter galeri kegiatan">
          {galleryCategories.map((category) => (
            <button
              className={`gallery__filter-btn ${
                activeCategory === category ? 'is-active' : ''
              }`}
              type="button"
              key={category}
              onClick={() => setActiveCategory(category)}
              role="tab"
              aria-selected={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div className="gallery__grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.article
                className={`gallery__card ${item.featured ? 'gallery__card--featured' : ''}`}
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 24 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                exit={{ opacity: 0, scale: 0.94, y: 24 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setSelectedItem(item)}
              >
                <div className="gallery__card-image">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />
                  <div className="gallery__card-overlay">
                    <span className="gallery__card-category">{item.category}</span>
                    <button
                      className="gallery__card-btn"
                      type="button"
                      aria-label={`Lihat detail ${item.title}`}
                    >
                      <Eye size={20} aria-hidden="true" />
                      <span>Lihat Detail</span>
                    </button>
                  </div>
                </div>

                <div className="gallery__card-info">
                  <div className="gallery__card-meta">
                    <Calendar size={14} aria-hidden="true" />
                    <span>{item.date}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal Preview Detail */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="gallery__modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="gallery__modal-content"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="gallery__modal-close"
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Tutup preview galeri"
              >
                <X size={20} aria-hidden="true" />
              </button>

              <div className="gallery__modal-image">
                <img src={selectedItem.image} alt={selectedItem.title} />
              </div>

              <div className="gallery__modal-body">
                <div className="gallery__modal-meta">
                  <span className="gallery__card-category">{selectedItem.category}</span>
                  <span>
                    <Calendar size={14} aria-hidden="true" /> {selectedItem.date}
                  </span>
                </div>
                <h2>{selectedItem.title}</h2>
                <p>{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
