import './About.css'

type AboutProps = {
  text: {
    title: string
    paragraphs: string[]
  }
}

export function About({ text }: AboutProps) {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <h2 className="about__title">{text.title}</h2>

        <div className="about__image">
          <img
            src="/images/about/chor_o_nas.jpg"
            alt="Хор российских немцев"
          />
        </div>

        <div className="about__text">
          {text.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}