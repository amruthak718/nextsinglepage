export default function Home() {
  return (
    <>
      <section class="header" id="Home">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="#">
              Navbar
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fa fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto text-right">
                <li class="nav-item">
                  <a class="nav-link active-home" href="#Home">
                    HOME
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#About">
                    ABOUT US 
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Contact">
                    SUBSCRIBE
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div class="row banner">
            <div class="col-md-6">
              <h1>Let's Start The Magic</h1>
              <p>
                Yogo helps people to learn new things without spending
                <br />
                too much money on unnecessary things.
              </p>
              <a href="#" class="express-btn">
                REGISTER NOW
              </a>
              <a href="#">LOGIN NOW</a>
            </div>
            <div class="col-md-6" data-aos="fade-left">
              <img src="cover.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section class="feature" id="About">
        <div class="container">
          <div class="row">
            <div class="col-md-6 text-center">
              <img src="image4.jpg" />
            </div>
            <div class="col-md-6">
              <h2>
                About us
                <br />
              </h2>
              <p>
                Lorem ipsum is a placeholder text a typeface without relying on
                meanin
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </section>
      <section class="footer text-center" id="Contact">
        <div class="container">
          <h2>Subscribe To Our Newsletter</h2>
          <form>
            <input type="email" placeholder="Enter Your Email" required />
            <button type="submit">SUBSCRIBE</button>
            <small>copywrite @ 2022</small>
          </form>
        </div>
      </section>
      <script></script>
    </>
  );
}
