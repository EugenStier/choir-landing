import "./Leadership.css";

type LeadershipProps = {
  text: {
    title: string

    prinz: {
      name: string
      role: string
      text: string
    }

    eurich: {
      name: string
      role: string
      text: string
      phone: string
      email: string
    }
  }
}

export function Leadership({ text }: LeadershipProps) {
  return (
    <section className="leadership" id="leadership">
      <div className="leadership__container">
        <h2 className="leadership__title">{text.title}</h2>
        <div className="leader-card">
  <div className="leader-card__image">
  <img
    src={`${import.meta.env.BASE_URL}images/leadership/prinz.jpg`}
    alt="Prinz"
  />
</div>

  <div className="leader-card__content">
    <h3 className="leader-card__name">
  {text.prinz.name}
</h3>

   <p className="leader-card__role">
  {text.prinz.role}
</p>

    <p className="leader-card__text">
  {text.prinz.text}
</p>
  </div>
</div>
  <div className="leader-card leader-card--reverse">
  <div className="leader-card__image">
    <img
      src={`${import.meta.env.BASE_URL}images/leadership/eurich.jpg`}
      alt="Eurich"
    />
  </div>

  <div className="leader-card__content">
    <h3 className="leader-card__name">
  {text.eurich.name}
</h3>

    <p className="leader-card__role">
  {text.eurich.role}
</p>

    <p className="leader-card__text">
  {text.eurich.text}
  <br />
  <br />
  Tel.: {text.eurich.phone}
  <br />
  E-Mail: {text.eurich.email}
</p>
  </div>
</div>
</div>
    </section>
  );
}