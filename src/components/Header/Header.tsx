import { useEffect, useState } from 'react'
import './Header.css'

type HeaderProps = {
  text: {
    title: string
    subtitle: string

    nav: {
      about: string
      leadership: string
      gallery: string
      video: string
      contacts: string
      privacy: string
      impressum: string
    }
  }
  language: 'ru' | 'de'
setLanguage: React.Dispatch<React.SetStateAction<'ru' | 'de'>>

setPage: React.Dispatch<
  React.SetStateAction<'home' | 'impressum' | 'privacy'>
>

}

export function Header({
  text,
  language,
  setLanguage,
  setPage,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <a
  className="header__logo"
  href="#"
  onClick={() => setPage('home')}
>
  <span className="header__logo-title">
    {text.title}
  </span>

  <span className="header__logo-subtitle">
    {text.subtitle}
  </span>
</a>

      <nav className="header__nav">
        <a
  href="#about"
  onClick={() => setPage('home')}
>
  {text.nav.about}
</a>
        <a
  href="#gallery"
  onClick={() => setPage('home')}
>
  {text.nav.gallery}
</a>

<a
  href="#youtube"
  onClick={() => setPage('home')}
>
  {text.nav.video}
</a>

<a
  href="#leadership"
  onClick={() => setPage('home')}
>
  {text.nav.leadership}
</a>

<a
  href="#contacts"
  onClick={() => setPage('home')}
>
  {text.nav.contacts}
</a>
      </nav>

      <div className="header__languages">
  <button
    className={`header__language ${
      language === 'ru' ? 'header__language--active' : ''
    }`}
    onClick={() => setLanguage('ru')}
  >
    RU
  </button>

  <button
    className={`header__language ${
      language === 'de' ? 'header__language--active' : ''
    }`}
    onClick={() => setLanguage('de')}
  >
    DE
  </button>
</div>
    </header>
  )
}
