import "./App.module.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div class="app">
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
