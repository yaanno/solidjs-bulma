import { createSignal } from "solid-js";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function () {
  const [username, setUserName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [terms, setTerms] = createSignal(false);
  const onSubmit = function () {
    console.log(username(), email(), terms());
  };
  return (
    <>
      <Header />
      <main>
        <section class="section">
          <h1 class="title">Sign up</h1>
        </section>
        <section class="section">
          <form
            class="box"
            action="/signup/submit"
            onSubmit={(e) => e.preventDefault()}
          >
            <div class="field">
              <label class="label">Username</label>
              <div class="control">
                <input
                  class="input is-success"
                  type="text"
                  placeholder="Text input"
                  value={username()}
                  onInput={(e) => setUserName(e.target.value)}
                />
              </div>
              <p class="help is-success">This username is available</p>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  class="input is-danger"
                  type="email"
                  placeholder="Email input"
                  value={email()}
                  onInput={(e) => setEmail(e.target.value)}
                />
              </div>
              <p class="help is-danger">This email is invalid</p>
            </div>
            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input
                    type="checkbox"
                    value={terms()}
                    onInput={() => setTerms(!terms())}
                  />{" "}
                  I agree to the <a href="#">terms and conditions</a>
                </label>
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <button onclick={onSubmit} class="button is-link">
                  Submit
                </button>
              </div>
              <div class="control">
                <button class="button is-link is-light">Cancel</button>
              </div>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
