import { ArrowUpRight, GraduationCap } from 'lucide-react'
import { navigationItems } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand-col">
            <a className="brand brand--footer" href="#beranda">
              <span className="brand__icon">
                <GraduationCap size={24} aria-hidden="true" />
              </span>
              <span className="brand__copy">
                <strong>PPG Prajabatan</strong>
                <small>Teknik Mesin — UST Yogyakarta</small>
              </span>
            </a>
            <p className="footer__desc">
              Membentuk pendidik Teknik Mesin profesional yang reflektif, kompeten secara vokasional, serta berpihak pada tumbuh kembang peserta didik.
            </p>
          </div>

          <div className="footer__nav-col">
            <h4>Navigasi Halaman</h4>
            <ul>
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__contact-col">
            <h4>Program & Kampus</h4>
            <p><strong>Universitas Sarjanawiyata Tamansiswa</strong></p>
            <p>Fakultas Keguruan dan Ilmu Pendidikan</p>
            <p>Kota Yogyakarta, DIY</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} PPG Prajabatan Teknik Mesin UST. Hak Cipta Dilindungi.</p>
          <a className="footer__top" href="#beranda">
            <span>Kembali ke atas</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
