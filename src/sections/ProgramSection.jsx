import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { featuredPrograms } from '../data/siteData'

export default function ProgramSection() {
  return (
    <section className="section program" id="inovasi-seminar" aria-labelledby="program-title">
      <div className="container">
        <div className="program__intro">
          <SectionHeading
            id="program-title"
            eyebrow="05 — INOVASI PEMBELAJARAN & SEMINAR"
            title="PEMBELAJARAN BERBASIS WEB INTERAKTIF"
            description="ARCUS adalah media pembelajaran gambar teknik manual berbasis web yang membantu peserta didik memahami alat gambar, pensil, standar garis ISO, etiket, proyeksi, hingga model 3D secara visual, interaktif, dan kontekstual. Media ini menjadi produk utama dalam presentasi seminar."
          />

          <aside className="program__overview" aria-label="Ringkasan inovasi pembelajaran">
            <span className="program__overview-label">Output Inovasi</span>
            <strong><span>01</span> Web Interaktif</strong>
            <p>ARCUS — Ruang Belajar Gambar Teknik</p>
            <div className="program__overview-tags" aria-label="Karakter media pembelajaran">
              <span>Visual</span>
              <span>Interaktif</span>
              <span>Kontekstual</span>
            </div>
          </aside>
        </div>

        <div className="program__grid">
          {featuredPrograms.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                className="program__card"
                key={item.title}
                initial={{ opacity: 0, y: 36, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="program__card-media">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />
                  <div className="program__card-overlay" />
                  <span className="program__badge">{item.badge}</span>
                  <span className="program__number">{item.number}</span>
                </div>

                <div className="program__card-body">
                  <div className="program__card-category">
                    <Icon size={18} aria-hidden="true" />
                    <span>{item.category}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a
                    className="program__link"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${item.linkLabel} — terbuka di tab baru`}
                  >
                    <span>{item.linkLabel}</span>
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
