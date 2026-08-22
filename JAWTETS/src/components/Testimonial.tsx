interface TestimonialProps {
  name: string
  position: string
  company: string
  quote: string
  metric: string
  category: string
}

import './Testimonial.css'

export default function Testimonial({ name, position, company, quote, metric, category }: TestimonialProps) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-category">{category}</div>
      <div className="testimonial-content">
        <p className="quote">"{quote}"</p>
        <div className="testimonial-author">
          <div>
            <h4>{name}</h4>
            <p className="position">{position}</p>
            <small>{company}</small>
          </div>
        </div>
      </div>
      <div className="testimonial-metric">
        <span className="metric-value">{metric}</span>
      </div>
    </div>
  )
}
