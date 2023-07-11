import { createSignal } from "solid-js";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function () {
  const [password, setPassword] = createSignal("");
  const [email, setEmail] = createSignal("");
  const onSubmit = function () {
    console.log(password(), email());
  };
  return (
    <>
      <Header />
      <main>
        <section class="section">
          <h1 class="title">Log in</h1>
        </section>
        <section class="section">
          <form
            class="box"
            action="/login/submit"
            onSubmit={(e) => e.preventDefault()}
          >
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
              <label class="label">Password</label>
              <div class="control">
                <input
                  class="input is-success"
                  type="password"
                  placeholder="Text input"
                  value={password()}
                  onInput={(e) => setPassword(e.target.value)}
                />
              </div>
              <p class="help is-danger">Invalid password</p>
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
