import React from 'react'

export default function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact</h2>

      <div className="group">
        <div className="text">
          If you would like to get in touch, feel free to reach out to me anytime. I am available for collaboration, project inquiries, or any questions you may have. You can contact me through my email or social media platforms, and I will respond as soon as possible. I look forward to connecting with you!
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" cols="30" rows="10"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}
