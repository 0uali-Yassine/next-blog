import './About.css';

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
            Welcome to [Your Blog Name], a space dedicated to [your blogs main topic or niche]. 
            Were passionate about sharing [type of content] that inspires, educates, and connects 
            with our readers. Our team of writers and enthusiasts come together to bring you 
            fresh perspectives and valuable insights.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to [describe your mission]. We believe in [core values or principles] 
            and strive to create content that [what you hope to achieve for readers]. Whether youre 
            here to learn, be inspired, or simply enjoy good writing, we aim to make every visit 
            worthwhile.
          </p>
        </section>

        <section className="about-section">
          <h2>What We Write About</h2>
          <ul className="topics-list">
            <li>Topic 1</li>
            <li>Topic 2</li>
            <li>Topic 3</li>
            <li>Topic 4</li>
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
        <p>© {new Date().getFullYear()} [Your Blog Name]. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;