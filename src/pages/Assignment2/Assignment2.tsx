import "./Assignment2.css";

function Assignment2() {
  return (
    <>
      <div id="top-banner" className="header-section header-background">
        <h1 className="site-title">My Styled Webpage</h1>
        <p className="highlighted-text">Enhancing webpage with CSS</p>
      </div>

      <nav id="navbar" className="navigation-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#gallery" className="nav-link">Gallery</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </nav>

      <main id="content-wrapper">
        <section id="home" className="layout-section">
          <h2 className="section-heading">Welcome</h2>
          <p className="paragraph-text">
            This is a simple webpage styled with CSS. It demonstrates typography,
            layout, navigation, and image styling
          </p>
        </section>

        <section id="about" className="layout-section">
          <h2 className="section-heading">About</h2>
          <p className="paragraph-text">
            I created custom classes and IDs to style each part of this webpage.
            Everything is done using only CSS (no frameworks like Bootstrap).
          </p>
        </section>

        <section id="gallery" className="layout-section">
          <h2 className="section-heading">Gallery</h2>
          <div className="gallery-box">
            <img
              src="https://img.rl0.ru/afisha/400x-/daily.afisha.ru/uploads/images/c/cf/ccf7a86d37854b4e911c67a6d10c024b.jpg"
              alt="sample1"
              className="image-thumbnail"
            />
            <img
              src="https://i.pinimg.com/236x/80/b7/81/80b781691d46d7f7a352a349ff48515f.jpg"
              alt="sample2"
              className="image-thumbnail"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPtBm6ONsGOIuZ5rG-y2h5J-9AaaRV7RE1Q&s"
              alt="sample3"
              className="image-thumbnail"
            />
          </div>
        </section>

        <section id="contact" className="layout-section">
          <h2 className="section-heading">Contact</h2>
          <form id="user-form" className="contact-form">
            <input type="text" placeholder="Your Name" className="form-input" />
            <input type="email" placeholder="Your Email" className="form-input" />
            <textarea placeholder="Message" className="form-input"></textarea>
            <button type="submit" className="submit-btn btn-hover-effect">
              Send
            </button>
          </form>
        </section>
      </main>

      <footer id="footer-container" className="footer-bg">
        <p className="paragraph-text">&copy; 1337 Leet типа</p>
      </footer>
    </>
  );
}

export default Assignment2;
