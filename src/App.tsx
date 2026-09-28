import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Leadership } from './components/Leadership/Leadership'
import { ChoirGallery } from "./components/ChoirGallery/ChoirGallery";
import { Youtube } from './components/Youtube/Youtube'
import { Contacts } from './components/Contacts/Contacts'
import { ru } from './data/ru'
import { de } from './data/de'
import { Footer } from './components/Footer/Footer'
import { Impressum } from './components/Impressum/Impressum'
import { Privacy } from './components/Privacy/Privacy'
import { useState } from 'react'

function App() {
  const [language, setLanguage] = useState<'ru' | 'de'>('ru')
  const [page, setPage] = useState<'home' | 'impressum' | 'privacy'>('home')
const t = language === 'ru' ? ru : de
  return (
    <>
      <Header
  text={t.header}
  language={language}
  setLanguage={setLanguage}
  setPage={setPage}
/>
      <main>
  {page === 'home' && (
    <>
      <Hero text={t.hero} />

      <About text={t.about} />

      <Leadership text={t.leadership} />

      <ChoirGallery
        title={t.gallery.title}
        text={t.gallery.text}
      />

      <Youtube title={t.header.nav.video} />

      <Contacts text={t.contacts} />
    </>
  )}

  {page === 'impressum' && (
    <Impressum title={t.impressum.title} />
  )}

  {page === 'privacy' && (
    <Privacy title={t.privacy.title} />
  )}

  <Footer
    impressum={t.impressum.title}
    privacy={t.privacy.title}
    setPage={setPage}
  />
</main>
    </>
  )
}

export default App

