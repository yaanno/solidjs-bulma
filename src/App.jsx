import "./App.module.scss";

function App() {
  return (
    <div class="app">
      <header class="header">
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
              />
            </a>

            <a
              role="button"
              class="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item">Home</a>
              <a class="navbar-item">Documentation</a>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a class="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                  <a class="button is-light">Log in</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section class="hero is-primary">
          <div class="hero-body">
            <p class="title">Primary hero</p>
            <p class="subtitle">Primary subtitle</p>
          </div>
        </section>
        <section class="section">
          <h1 class="title">Section</h1>
          <h2 class="subtitle">
            A simple container to divide your page into{" "}
            <strong>sections</strong>, like the one you're currently reading.
          </h2>
        </section>
      </main>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Bulma</strong> by{" "}
            <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
            licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            The website content is licensed{" "}
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC BY NC SA 4.0
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
