import { useState } from 'react'
import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import { contactInfo } from '../data/siteData'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Pertanyaan Program',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Nama lengkap wajib diisi.'
    if (!formData.email.trim()) {
      newErrors.email = 'Alamat email wajib diisi.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid.'
    }
    if (!formData.message.trim()) newErrors.message = 'Pesan wajib diisi.'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitted(true)
  }

  return (
    <section className="contact" id="kontak" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact__grid">
          {/* Contact Details Card */}
          <motion.div
            className="contact__info-panel"
            initial={{ opacity: 0, x: -36, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-heading__eyebrow">09 — MARI TERHUBUNG</span>
            <h2 id="contact-title">Mari Bertukar Gagasan & Kolaborasi.</h2>
            <p>
              Terbuka untuk diskusi perancangan kurikulum vokasi, supervisi PPL, sharing praktik baik pemesinan, serta pendaftaran PPG Prajabatan Teknik Mesin.
            </p>

            <div className="contact__info-list">
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <MapPin size={20} aria-hidden="true" />
                </div>
                <div>
                  <strong>{contactInfo.institution}</strong>
                  <span>{contactInfo.address}</span>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <Mail size={20} aria-hidden="true" />
                </div>
                <div>
                  <strong>Email Resmi</strong>
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <Phone size={20} aria-hidden="true" />
                </div>
                <div>
                  <strong>Telepon / Sekretariat</strong>
                  <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Form Panel */}
          <motion.div
            className="contact__form-panel"
            initial={{ opacity: 0, x: 36, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {isSubmitted ? (
              <div className="contact__success-state">
                <CheckCircle2 size={48} className="contact__success-icon" />
                <h3>Pesan Berhasil Terkirim!</h3>
                <p>
                  Terima kasih, <strong>{formData.name}</strong>. Pesan Anda mengenai "{formData.category}" telah tersimpan secara lokal dan akan ditindaklanjuti.
                </p>
                <button
                  className="button button--primary"
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormData({ name: '', email: '', category: 'Pertanyaan Program', message: '' })
                  }}
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <h3>Kirim Pesan atau Pertanyaan</h3>

                <div className="form-group">
                  <label htmlFor="name">Nama Lengkap *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Masukkan nama Anda"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'is-invalid' : ''}
                    required
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Alamat Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'is-invalid' : ''}
                    required
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="category">Kategori Pesan</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="Pertanyaan Program">Pertanyaan Program PPG</option>
                    <option value="Kolaborasi PPL">Kolaborasi PPL / Sekolah Mitra</option>
                    <option value="Diskusi Kurikulum">Diskusi Kurikulum Teknik Mesin</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Pesan Anda *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tuliskan pertanyaan atau pesan Anda di sini..."
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'is-invalid' : ''}
                    required
                  />
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <button className="button button--primary w-full" type="submit">
                  <span>Kirim Pesan</span>
                  <Send size={16} aria-hidden="true" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      <Footer />
    </section>
  )
}
