import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { CONTACT } from '../data.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [note, setNote] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setNote(`Thanks${form.name ? `, ${form.name}` : ''}! Your message has been sent. 🎉`)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setNote(''), 4200)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal variant="scale">
          <div className="contact-wrap">
            <div className="contact-grid">
              <div className="contact-info">
                <span className="eyebrow">Contact</span>
                <h3>
                  Let&apos;s build something <span className="grad">great together</span>
                </h3>
                <p>
                  Have a project in mind, a role to fill, or just want to say hi?
                  My inbox is always open — I&apos;ll get back to you within a day.
                </p>

                <ul className="contact-list">
                  <li>
                    <span className="ico" aria-hidden="true">✉️</span>
                    <span>{CONTACT.email}</span>
                  </li>
                  <li>
                    <span className="ico" aria-hidden="true">📍</span>
                    <span>{CONTACT.location}</span>
                  </li>
                  
                </ul>

                <div className="socials">
                  <a className="social-btn" href="https://github.com/sumanth0244" aria-label="GitHub">🐙</a>
                  <a className="social-btn" href="https://www.linkedin.com/in/sumanth-bhandary-bb5347329" aria-label="LinkedIn">💼</a>
                  <a className="social-btn" href="sumanthbandary7@gmail.com" aria-label="Email">✉️</a>
                </div>
              </div>

              
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
