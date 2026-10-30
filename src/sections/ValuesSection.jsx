import { ArrowUpRight, FileText, Image as ImageIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { reflectionDocuments } from '../data/siteData'

const sourceFolder =
  'https://drive.google.com/drive/folders/18kwv9UX7lwoCTLA_OLjCLZMuPENqVdWt?usp=drive_link'

export default function ValuesSection() {
  return (
    <section className="section values" id="refleksi-belajar" aria-labelledby="values-title">
      <div className="container">
        <SectionHeading
          id="values-title"
          eyebrow="03 — REFLEKSI PENGALAMAN BELAJAR"
          title="MATA KULIAH INTI & SELEKTIF"
          description="Sebelas refleksi 4C dari Semester 1 dan Semester 2 yang merekam perubahan cara pandang, pemahaman pedagogik, pengalaman PPL, inovasi kejuruan, dan projek kepemimpinan dalam pembelajaran Teknik Mesin."
          align="center"
        />

        <div className="reflection-documents">
          {reflectionDocuments.map((item, index) => {
            const TypeIcon = item.type.startsWith('PDF') ? FileText : ImageIcon

            return (
              <motion.a
              className="reflection-document"
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Buka ${item.title} di Google Drive`}
              key={item.title}
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="reflection-document__media">
                <img
                  src={item.image}
                  alt={`Preview ${item.title}`}
                  loading="lazy"
                />
                <div className="reflection-document__overlay" aria-hidden="true" />
                <span className="reflection-document__type">
                  <TypeIcon size={15} aria-hidden="true" />
                  {item.type}
                </span>
                <span className="reflection-document__number">{item.number}</span>
              </div>

              <div className="reflection-document__body">
                <span className="reflection-document__category">{item.category}</span>
                <h3>{item.title}</h3>
                <span className="reflection-document__link">
                  Lihat preview lengkap
                  <ArrowUpRight size={17} aria-hidden="true" />
                </span>
              </div>
            </motion.a>
            )
          })}
        </div>

        <motion.a
          className="reflection-source"
          href={sourceFolder}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span>Buka seluruh folder sumber di Google Drive</span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </motion.a>
      </div>
    </section>
  )
}
