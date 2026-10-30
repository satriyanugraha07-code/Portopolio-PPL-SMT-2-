import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function RegistrationCTA() {
  return (
    <section className="section cta" id="pendaftaran" aria-labelledby="cta-title">
      <div className="cta__bg" aria-hidden="true">
        <img
          src="/assets/backgrounds/bg-pastel-04.png"
          alt=""
          loading="lazy"
        />
        <div className="cta__overlay" />
      </div>

      <div className="container relative z-10">
        <motion.div
          className="cta__content"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="cta__badge">
            <Sparkles size={16} aria-hidden="true" />
            <span>MULAI PERJALANANMU</span>
          </div>

          <h2 id="cta-title">SIAP MENJADI PENDIDIK TEKNIK MESIN PROFESIONAL?</h2>
          <p>
            Bergabunglah dalam perjalanan transformasi pendidikan vokasi bersama PPG Prajabatan Teknik Mesin Universitas Sarjanawiyata Tamansiswa (UST). Wujudkan ruang belajar yang inspiratif, aman, dan berdaya saing tinggi.
          </p>

          <div className="cta__actions">
            <a className="button button--primary" href="#kontak">
              Daftar Sekarang <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button--secondary" href="#inovasi-seminar">
              Lihat Inovasi
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
