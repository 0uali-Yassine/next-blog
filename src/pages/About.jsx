
const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Our Blog</h1>
      </header>

      <main className="about-content">
        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            Welcome to Next Blogg, a space dedicated to Art .... 
            Were passionate about sharing General informations that inspires, educates, and connects 
            with our readers. Our team of writers and enthusiasts come together to bring you 
            fresh perspectives and valuable insights.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to give people the latest informations about everything related to art and mental health. We believe in equality 
            and strive to create content that give the users all the informations they starve. Whether youre 
            here to learn, be inspired, or simply enjoy good writing, we aim to make every visit 
            worthwhile.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Write About</h2>
          <ul className="topics-list">
            <li>Art</li>
            <li>Psychologie</li>
            <li>Fashion</li>
            <li>waayli baghi t9ra ta hadi baraka ghire 3 :)</li>
          </ul>
        </section>

        <section className="contact-section">
          <h2>Get In Touch</h2>
          <p>
            Have questions or suggestions? Wed love to hear from you! Reach out to us at:
            <br />
            <a href="mailto:contact@yourblog.com">contact@yourblog.com</a>
          </p>
        </section>
      </main>

      <footer className="about-footer">
        <p>© {new Date().getFullYear()} Next blog. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
