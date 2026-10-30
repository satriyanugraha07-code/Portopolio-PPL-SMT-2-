import { motion } from 'framer-motion'
import MotionReveal from '../components/MotionReveal'
import { ppgAboutCards, ppgStats } from '../data/siteData'

export default function AboutSection() {
  return (
    <section className="section about" id="identifikasi-diri" aria-labelledby="about-title">
      {/* Background Pastel Landscape Canvas */}
      <div className="about__bg" aria-hidden="true">
        <img
          src={`${import.meta.env.BASE_URL}assets/backgrounds/bg-pastel-01.png`}
          alt=""
          loading="lazy"
        />
        <div className="about__bg-overlay" />
      </div>

      <div className="container relative z-10">
        <div className="about__main-grid">
          {/* Left Column: Heading, profile summary, and identity cards */}
          <div className="about__content-col">
            <MotionReveal>
              <div className="about__badge-group">
                <span className="about__lime-badge">02 — PORTOFOLIO DIRI</span>
              </div>
              <h2 className="about__title-display" id="about-title">
                IDENTIFIKASI DIRI
              </h2>
              <p className="about__title-sub">MAHASISWA PPG PRAJABATAN TEKNIK MESIN</p>
            </MotionReveal>

            <MotionReveal delay={0.08}>
              <div className="about__text-group">
                <p className="about__desc">
                  Saya Satriya Nugraha, mahasiswa PPG Prajabatan bidang studi Teknik Mesin di Universitas Sarjanawiyata Tamansiswa, Yogyakarta.
                </p>
                <p className="about__desc-sub">
                  Portofolio ini merekam proses pembentukan identitas saya sebagai calon pendidik vokasi yang reflektif, adaptif, dan berorientasi pada kebutuhan peserta didik.
                </p>
              </div>
            </MotionReveal>

            {/* 3 Cards: Data diri, latar akademik, and development direction */}
            <div className="about__vmt-grid">
              {ppgAboutCards.map((card, index) => {
                const Icon = card.icon
                return (
                  <motion.article
                    className="about__vmt-card"
                    key={card.title}
                    initial={{ opacity: 0, y: 28, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{
                      delay: 0.08 + index * 0.06,
                      duration: 0.58,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div className="about__vmt-header">
                      <span className="about__vmt-icon">
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      <h3>{card.title}</h3>
                    </div>
                    <p>{card.description}</p>
                  </motion.article>
                )
              })}
            </div>
          </div>

          {/* Right Column: Hero Visual Photo Frame */}
          <MotionReveal className="about__visual-col" direction="left" delay={0.12}>
            <div className="about__photo-card">
              <img
                src={`${import.meta.env.BASE_URL}assets/about/satriya-nugraha-cropped.jpg`}
                alt="Satriya Nugraha mengenakan almamater di jalan dengan latar pepohonan bambu"
                loading="lazy"
              />
              <div className="about__photo-overlay" />
            </div>
          </MotionReveal>
        </div>

        {/* Bottom identity summary bar */}
        <motion.div
          className="about__stats-bar"
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {ppgStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div className="about__stat-item" key={stat.label}>
                <div className="about__stat-icon">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <div className="about__stat-info">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
