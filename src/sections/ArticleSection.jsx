import { useState } from 'react'
import { ArrowUpRight, Clock, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { articleItems } from '../data/siteData'

export default function ArticleSection() {
  const [activeArticle, setActiveArticle] = useState(null)

  const featuredArticle = articleItems.find((a) => a.featured) || articleItems[0]
  const otherArticles = articleItems.filter((a) => a.id !== featuredArticle.id)

  return (
    <section className="section article" id="informasi" aria-labelledby="article-title">
      <div className="container">
        <SectionHeading
          id="article-title"
          eyebrow="07 — INFORMASI & ARTIKEL"
          title="CATATAN PEDAGOGIK & TEKNOLOGI VOKASI"
          description="Artikel reflektif, kajian penerapan kurikulum merdeka pada teknik mesin, serta gagasan pengembangan pendidikan kejuruan."
        />

        <div className="article__layout">
          {/* Featured Article Card */}
          <motion.article
            className="article__featured"
            initial={{ opacity: 0, y: 36, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="article__featured-media">
              <img src={featuredArticle.image} alt={featuredArticle.title} loading="lazy" />
              <div className="article__featured-overlay" />
              <span className="article__badge">{featuredArticle.category}</span>
            </div>

            <div className="article__featured-body">
              <div className="article__meta">
                <span>{featuredArticle.date}</span>
                <span className="article__meta-dot">•</span>
                <span>
                  <Clock size={14} aria-hidden="true" /> {featuredArticle.readTime}
                </span>
              </div>
              <h3>{featuredArticle.title}</h3>
              <p>{featuredArticle.excerpt}</p>

              <button
                className="button button--primary"
                type="button"
                onClick={() => setActiveArticle(featuredArticle)}
              >
                Baca Artikel Lengkap <ArrowUpRight size={18} aria-hidden="true" />
              </button>
            </div>
          </motion.article>

          {/* Supporting Articles List */}
          <div className="article__list">
            {otherArticles.map((item, index) => (
              <motion.article
                className="article__card"
                key={item.id}
                initial={{ opacity: 0, x: 32, scale: 0.97 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="article__card-meta">
                  <span className="article__badge-sm">{item.category}</span>
                  <span>{item.date}</span>
                </div>
                <h4>{item.title}</h4>
                <p>{item.excerpt}</p>
                <button
                  className="article__card-link"
                  type="button"
                  onClick={() => setActiveArticle(item)}
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Reader Modal */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            className="article__modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveArticle(null)}
          >
            <motion.div
              className="article__modal-content"
              initial={{ scale: 0.94, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 24 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="article__modal-close"
                type="button"
                onClick={() => setActiveArticle(null)}
                aria-label="Tutup pembaca artikel"
              >
                <X size={20} aria-hidden="true" />
              </button>

              <div className="article__modal-header">
                <span className="article__badge">{activeArticle.category}</span>
                <h2>{activeArticle.title}</h2>
                <div className="article__meta">
                  <span>{activeArticle.date}</span>
                  <span className="article__meta-dot">•</span>
                  <span>{activeArticle.readTime}</span>
                </div>
              </div>

              <div className="article__modal-body">
                <p className="article__modal-lead">{activeArticle.excerpt}</p>
                <p>
                  Dalam konteks Pendidikan Profesi Guru (PPG) Prajabatan Teknik Mesin, inovasi strategi pembelajaran menjadi pilar krusial untuk memastikan bahwa peserta didik tidak hanya menguasai keterampilan prosedural pemesinan, tetapi juga memiliki kemampuan bernalar kritis dan pemecahan masalah (problem-solving).
                </p>
                <p>
                  Pendekatan Project-Based Learning yang terintegrasi dengan budaya Keselamatan dan Kesehatan Kerja (K3) memberikan ruang nyata bagi murid untuk mengalami alur manufaktur secara autentik—mulai dari membaca gambar teknik, melakukan kalkulasi kecepatan potong, hingga menginspeksi produk akhir.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
