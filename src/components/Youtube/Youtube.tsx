import  "./Youtube.css";
type YoutubeProps = {
  title: string
}

export function Youtube({ title }: YoutubeProps) {
  return (
    <section id="youtube" className="section">
      <div className="container">
        <h2>{title}</h2>

        <div className="videoWrapper">
          <iframe
            src="https://www.youtube.com/embed/azG1TB7YB_s"
            title="Heimatklänge – Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}