type ContactsProps = {
  text: {
    title: string
    intro: string
    phoneLabel: string
    whatsapp: string
  }
}

export function Contacts({ text }: ContactsProps) {
  return (
    <section id="contacts" className="section">
      <div className="container">
        <h2>{text.title}</h2>

        <div className="contactsCard">
         <p>{text.intro}</p>

          <p>
  <strong>{text.phoneLabel}:</strong> 0177 1638820
</p>

          <p>
            <strong>E-Mail:</strong>{" "}
            <a href="mailto:david_eu@gmx.de">
              david_eu@gmx.de
            </a>
          </p>

          <a
            className="whatsappButton"
            href="https://wa.me/491771638820"
            target="_blank"
            rel="noopener noreferrer"
          >
           {text.whatsapp}
          </a>
        </div>
      </div>
    </section>
  )
}