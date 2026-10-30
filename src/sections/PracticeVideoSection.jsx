import { useEffect, useState } from 'react'
import { ArrowUpRight, ExternalLink, Play, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import { practiceVideos } from '../data/siteData'

function buildEmbedUrl(video) {
  if (video.youtubeId) {
    return `https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0&modestbranding=1`
  }

  if (/drive\.google\.com/.test(video.src ?? '')) {
    return String(video.src).replace(/\/view.*$/, '/preview')
  }

  return null
}

const isDirectVideo = (source) => /(\.mp4|\.webm|\.ogg)(\?|$)/i.test(source ?? '')

export default function PracticeVideoSection() {
  const [activeVideo, setActiveVideo] = useState(null)

  useEffect(() => {
    if (!activeVideo) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveVideo(null)
    }

    document.body.classList.add('video-open')
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('video-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeVideo])

  return (
    <section className="section practice" id="video-praktik" aria-labelledby="practice-title">
      <div className="practice__glow" aria-hidden="true" />

      <div className="container relative z-10">
        <SectionHeading
          id="practice-title"
          eyebrow="07 — VIDEO PRAKTIK PEMBELAJARAN"
          title="PRAKTIK PEMBELAJARAN"
          description="Rekaman praktik mengajar di kelas Gambar Teknik sebagai bukti nyata penerapan perangkat ajar, pengelolaan kelas, dan pemberian umpan balik kepada peserta didik."
          align="center"
        />

        <div className="practice__grid">
          {practiceVideos.map((video, index) => (
            <motion.article
              className="practice__card"
              key={video.id}
              initial={{ opacity: 0, y: 36, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="practice__media">
                <img
                  src={video.poster}
                  alt={`Pratinjau ${video.title}`}
                  loading="lazy"
                />
                <div className="practice__media-overlay" aria-hidden="true" />
                <span className="practice__badge">{video.eyebrow}</span>
                <span className="practice__number">{video.number}</span>

                <button
                  className="practice__play"
                  type="button"
                  onClick={() => setActiveVideo(video)}
                  aria-label={`Putar ${video.title}`}
                >
                  <Play size={22} fill="currentColor" aria-hidden="true" />
                  <span>Putar Video</span>
                </button>

                <span className="practice__duration">{video.duration}</span>
              </div>

              <div className="practice__body">
                <span className="practice__topic">Topik · {video.topic}</span>
                <h3>{video.title}</h3>
                <p className="practice__meta">{video.meta}</p>
                <p className="practice__desc">{video.description}</p>

                <div className="practice__highlights" aria-label="Fokus video">
                  {video.highlights.map((highlight) => (
                    <span key={highlight}>{highlight}</span>
                  ))}
                </div>

                <button
                  className="practice__action"
                  type="button"
                  onClick={() => setActiveVideo(video)}
                >
                  <span>Tonton sekarang</span>
                  <ArrowUpRight size={17} aria-hidden="true" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="practice__modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              className="practice__modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="practice-modal-title"
              initial={{ scale: 0.92, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 24 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="practice__modal-head">
                <div>
                  <span className="practice__modal-eyebrow">{activeVideo.eyebrow}</span>
                  <h3 id="practice-modal-title">{activeVideo.title}</h3>
                </div>
                <button
                  className="practice__modal-close"
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  aria-label="Tutup video praktik"
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>

              <div className="practice__player">
                {activeVideo.youtubeId || isDirectVideo(activeVideo.src) ? (
                  isDirectVideo(activeVideo.src) && !activeVideo.youtubeId ? (
                    <video
                      key={activeVideo.id}
                      src={activeVideo.src}
                      poster={activeVideo.poster}
                      controls
                      autoPlay
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <iframe
                      key={activeVideo.id}
                      src={buildEmbedUrl(activeVideo)}
                      title={`Video ${activeVideo.title}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  )
                ) : (
                  <div className="practice__player-empty">
                    <img src={activeVideo.poster} alt="" aria-hidden="true" />
                    <div className="practice__player-empty-copy">
                      <strong>Video praktik belum ditautkan</strong>
                      <p>
                        Tambahkan tautan video YouTube atau file mp4 pada data
                        <code> practiceVideos </code>
                        untuk menampilkan pemutar di sini.
                      </p>
                      <a
                        className="button button--light"
                        href={activeVideo.src}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Buka tautan video
                        <ExternalLink size={16} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <p className="practice__modal-note">{activeVideo.meta}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
