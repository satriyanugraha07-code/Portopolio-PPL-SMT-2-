import MotionReveal from './MotionReveal'

export default function SectionHeading({ eyebrow, title, description, align = 'left', id }) {
  return (
    <MotionReveal className={`section-heading section-heading--${align}`}>
      <span className="section-heading__eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </MotionReveal>
  )
}
