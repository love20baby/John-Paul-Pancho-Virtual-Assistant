export default function Footer() {
  return (
    <footer className="wrap">
      <div className="fin">
        <div className="fbrand">
          <div className="logo">JP<em>.</em></div>
          <p>Senior VA &amp; Revenue Operations Specialist<br />Mabalacat City, Pampanga, Philippines</p>
        </div>

        <div className="fcontact">
          <a href="tel:+639812011240">📞 +63 981 201 1240</a>
          <a href="mailto:imyours10202022@gmail.com">✉️ imyours10202022@gmail.com</a>
          <a
            href="https://linkedin.com/in/john-paul-pancho-837a66286"
            target="_blank"
            rel="noopener noreferrer"
          >
            💼 LinkedIn Profile
          </a>
        </div>

        <div className="flinks">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#exp">Experience</a>
          <a href="#book">Book a Call</a>
        </div>
      </div>

      <div className="fin" style={{ paddingTop: 0 }}>
        <p className="fcopy">
          © 2026 John Paul Pancho · Senior Virtual Assistant &amp; Revenue Operations Specialist · All rights reserved.
        </p>
      </div>
    </footer>
  )
}
