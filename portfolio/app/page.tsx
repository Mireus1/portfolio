'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import profileImage from './assets/profile.jpeg'
import { Language, translations } from './translations'

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 24 24' fill='currentColor' aria-hidden='true' {...props}>
      <path d='M6.94 8.75v8.5H3.8v-8.5h3.14ZM7.17 5.5a1.86 1.86 0 0 1-1.94 1.84A1.86 1.86 0 0 1 3.3 5.5c0-1.05.86-1.9 1.94-1.9s1.93.85 1.93 1.9ZM20.7 17.25h-3.12v-4.6c0-1.15-.45-1.94-1.47-1.94-.77 0-1.2.52-1.4 1.02-.07.17-.09.41-.09.65v4.87H11.5s.04-7.9 0-8.5h3.12v1.2c.19-.62 1.2-1.5 2.83-1.5 2.01 0 3.26 1.3 3.26 4.08v4.72Z' />
    </svg>
  )
}

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 24 24' fill='currentColor' aria-hidden='true' {...props}>
      <path d='M12 .5a11.6 11.6 0 0 0-3.67 22.63c.58.11.8-.25.8-.56v-1.98c-3.34.74-4.04-1.44-4.04-1.44-.52-1.3-1.26-1.65-1.26-1.65-1.03-.7.08-.68.08-.68 1.14.08 1.75 1.17 1.75 1.17 1.02 1.77 2.68 1.26 3.33.96.1-.75.4-1.26.73-1.55-2.66-.31-5.46-1.35-5.46-5.98 0-1.32.46-2.39 1.2-3.23-.12-.3-.52-1.53.11-3.18 0 0 1-.33 3.3 1.23a11.24 11.24 0 0 1 6 0c2.3-1.56 3.3-1.23 3.3-1.23.63 1.65.23 2.88.11 3.18.75.84 1.2 1.91 1.2 3.23 0 4.64-2.8 5.66-5.48 5.96.42.36.8 1.08.8 2.17v3.21c0 .31.22.68.81.56A11.6 11.6 0 0 0 12 .5Z' />
    </svg>
  )
}

export default function Home() {
  const [lang, setLang] = useState<Language>('fr')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState<
    | { type: 'idle' }
    | { type: 'success'; message: string }
    | { type: 'error'; message: string }
  >({ type: 'idle' })
  const t = translations[lang]
  const siteRef = useRef<HTMLDivElement | null>(null)
  const timelineRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  useEffect(() => {
    setStatus({ type: 'idle' })
  }, [lang])

  useEffect(() => {
    const site = siteRef.current
    if (!site) return

    const updateCursorPosition = (event: PointerEvent) => {
      site.style.setProperty('--cursor-x', `${event.clientX}px`)
      site.style.setProperty('--cursor-y', `${event.clientY}px`)
    }

    site.style.setProperty('--cursor-x', `${window.innerWidth / 2}px`)
    site.style.setProperty('--cursor-y', `${window.innerHeight / 2}px`)

    window.addEventListener('pointermove', updateCursorPosition, {
      passive: true
    })

    return () => {
      window.removeEventListener('pointermove', updateCursorPosition)
    }
  }, [])

  useEffect(() => {
    const section = timelineRef.current
    if (!section) return

    const entries = section.querySelectorAll<HTMLElement>(
      '[data-timeline-item]'
    )
    section.classList.add('timeline-ready')
    if (!entries.length) return

    const observer = new IntersectionObserver(
      (observations) => {
        observations.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.35, rootMargin: '0px 0px -16%' }
    )

    entries.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [lang])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus({ type: 'idle' })
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: 'error', message: t.contact.validationError })
      return
    }
    setSending(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim()
        })
      })
      if (res.ok) {
        setStatus({ type: 'success', message: t.contact.success })
        setName('')
        setEmail('')
        setMessage('')
      } else {
        const json = await res.json().catch(() => null)
        const errorMessage =
          lang === 'en'
            ? json?.error || t.contact.genericError
            : t.contact.genericError
        setStatus({
          type: 'error',
          message: errorMessage
        })
      }
    } catch {
      setStatus({ type: 'error', message: t.contact.networkError })
    } finally {
      setSending(false)
    }
  }

  const languageSwitchLabel =
    lang === 'en' ? 'Passer en français' : 'Switch to English'
  const socialLabels = {
    linkedin:
      lang === 'fr'
        ? 'Voir mon profil LinkedIn (nouvelle fenêtre)'
        : 'View my LinkedIn profile (new window)',
    github:
      lang === 'fr'
        ? 'Voir mon profil GitHub (nouvelle fenêtre)'
        : 'View my GitHub profile (new window)'
  }

  return (
    <div className='site' ref={siteRef}>
      <div className='container'>
        <header className='header'>
          <div className='brand'>
            <div>
              <div style={{ color: 'white', fontWeight: 700 }}>
                {t.brand.name}
              </div>
              <div className='meta'>{t.brand.role}</div>
            </div>
          </div>
          <nav
            className='nav'
            aria-label={
              lang === 'fr' ? 'Navigation principale' : 'Main navigation'
            }
          >
            <a href='#projects'>{t.nav.projects}</a>
            <a href='#about'>{t.nav.about}</a>
            <a href='#timeline'>{t.nav.timeline}</a>
            <a className='primary' href='#contact'>
              {t.nav.contact}
            </a>
            <button
              className='lang-toggle'
              type='button'
              onClick={() => setLang((prev) => (prev === 'en' ? 'fr' : 'en'))}
              aria-label={languageSwitchLabel}
              aria-pressed={lang === 'fr'}
            >
              <span className={lang === 'en' ? 'lang-active' : undefined}>
                EN
              </span>
              <span aria-hidden> / </span>
              <span className={lang === 'fr' ? 'lang-active' : undefined}>
                FR
              </span>
            </button>
          </nav>
        </header>

        <main>
          <section className='hero'>
            <div className='hero-left'>
              <h1>{t.hero.headline}</h1>
              <p className='lead'>{t.hero.lead}</p>

              <div className='cta-row'>
                <a className='btn btn-primary' href='#contact'>
                  {t.hero.primaryCta}
                </a>
                <a className='btn btn-ghost' href='#projects'>
                  {t.hero.secondaryCta}
                </a>
              </div>
            </div>

            <aside className='profile-card'>
              <div className='avatar'>
                <Image
                  src={profileImage}
                  alt={
                    lang === 'fr'
                      ? 'Photo de Rémi Poulenard'
                      : 'Photo of Remi Poulenard'
                  }
                  className='avatar-img'
                  width={120}
                  height={120}
                  priority
                />
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: 'white', fontWeight: 700 }}>
                  {t.profile.name}
                </div>
                <div style={{ paddingTop: 20 }} className='meta'>
                  {t.profile.location}
                </div>
                <div
                  className='profile-links'
                  aria-label={lang === 'fr' ? 'Liens sociaux' : 'Social links'}
                >
                  <a
                    className='profile-link'
                    href='https://www.linkedin.com/in/r%C3%A9mi-poulenard-415a46157'
                    target='_blank'
                    rel='noreferrer noopener'
                    aria-label={socialLabels.linkedin}
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    className='profile-link'
                    href='https://github.com/mireus1'
                    target='_blank'
                    rel='noreferrer noopener'
                    aria-label={socialLabels.github}
                  >
                    <GitHubIcon />
                  </a>
                </div>
              </div>
            </aside>
          </section>

          <section id='projects' className='section'>
            <h2>{t.projectsTitle}</h2>
            <div className='grid'>
              {t.projects.map((p) => (
                <article className='card' key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </article>
              ))}
            </div>
          </section>

          <section id='about' className='section'>
            <h2>{t.about.title}</h2>
            <p className='muted'>{t.about.body}</p>
          </section>

          <section
            id='timeline'
            className='section timeline-section'
            ref={timelineRef}
          >
            <h2>{t.timeline.title}</h2>
            <p className='muted'>{t.timeline.intro}</p>
            <div className='timeline'>
              {t.timeline.items.map((item, index) => (
                <article
                  className='timeline-item'
                  data-timeline-item
                  style={{ animationDelay: `${index * 0.08}s` }}
                  key={`${item.period}-${item.company}`}
                >
                  <div className='timeline-meta'>
                    <span className='timeline-period'>{item.period}</span>
                    <span className='timeline-company'>{item.company}</span>
                  </div>
                  <div className='timeline-content'>
                    <h3>
                      {item.role}{' '}
                      <span className='timeline-content-divider'>·</span>{' '}
                      {item.company}
                    </h3>
                    <p>{item.summary}</p>
                    <ul className='timeline-tags'>
                      {item.stack.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id='contact' className='section'>
            <h2 id='contact-heading'>{t.contact.title}</h2>
            <p className='muted'>{t.contact.subtitle}</p>

            <form
              className='form'
              onSubmit={handleSubmit}
              aria-labelledby='contact-heading'
            >
              <div className='form-row'>
                <label htmlFor='name'>{t.contact.labels.name}</label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.contact.placeholders.name}
                />
              </div>

              <div className='form-row'>
                <label htmlFor='email'>{t.contact.labels.email}</label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.contact.placeholders.email}
                />
              </div>

              <div className='form-row'>
                <label htmlFor='message'>{t.contact.labels.message}</label>
                <textarea
                  id='message'
                  name='message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.contact.placeholders.message}
                />
              </div>

              {/* Honeypot for bots */}
              <label className='sr-only' htmlFor='company'>
                {t.contact.labels.company}
              </label>
              <input
                id='company'
                name='company'
                type='text'
                className='sr-only'
                autoComplete='off'
                tabIndex={-1}
              />

              <div className='form-actions'>
                <button
                  className='btn btn-primary'
                  type='submit'
                  disabled={sending}
                >
                  {sending ? t.contact.sending : t.contact.submit}
                </button>
                {status.type === 'success' && (
                  <div className='form-success'>{status.message}</div>
                )}
                {status.type === 'error' && (
                  <div className='form-error'>{status.message}</div>
                )}
              </div>
            </form>
          </section>
        </main>

        <footer className='footer'>
          <div>
            © {new Date().getFullYear()} {t.brand.name}
          </div>
          <div className='muted'>{t.footer.note}</div>
        </footer>
      </div>
    </div>
  )
}
