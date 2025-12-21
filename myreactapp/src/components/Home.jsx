import React from 'react'

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="text">
          <h2>Hi, I'm Frijal</h2>
          <div className="links">
            <a href="#skills">
              <span>Skills</span>
            </a>

            <a href="#testimony">
              <span>Education</span>
            </a>

            <a href="#contact">
              <span>Contact</span>
            </a>
          </div>
        </div>

        <div className="headshot">
          <img src="/hh.jpg" alt="Frijal" />
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h2>Skills</h2>
        <div className="text">
          Skilled in building responsive, user-friendly websites using HTML, CSS, and JavaScript.
          Capable of creating interactive interfaces and bringing modern web designs to life.
        </div>

        <div className="cells">
          <div className="cell">
            <span>HTML</span>
          </div>

          <div className="cell">
            <span>CSS</span>
          </div>

          <div className="cell">
            <span>JavaScript</span>
          </div>
        </div>
      </section>

      <section id="testimony" className="testimony-section">
        <h2>Education</h2>

        <div className="group">
          <div className="text">
            I completed my high school education at Kathmandu Bernhardt, where I built a strong academic foundation. Currently, I am pursuing my Bachelor’s degree at Kathmandu Bernhardt College, and I am in my 3rd semester, continuing to expand my knowledge and skills in my chosen field.
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact</h2>

        <div className="group">
          <div className="text">
            If you would like to get in touch, feel free to reach out to me anytime. I am available for collaboration, project inquiries, or any questions you may have.
          </div>
        </div>
      </section>
    </>
  )
}
