import { createSignal } from "solid-js";
import { A } from "@solidjs/router";

export default function () {
  const [menu, toggleMenu] = createSignal(false);
  return (
    <header class="header">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <A class="navbar-item" href="/" aria-label="homepage">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
              alt="Bulma Logo"
            />
          </A>

          <a
            classList={{ ["is-active"]: menu() }}
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={(e) => {
              toggleMenu(!menu());
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          class="navbar-menu"
          classList={{ ["is-active"]: menu() }}
        >
          <div class="navbar-start">
            <A href="/" class="navbar-item">
              Home
            </A>
            <A href="/docuemntation" class="navbar-item">Documentation</A>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <A class="button is-primary" href="/signup">
                  <strong>Sign up</strong>
                </A>
                <A href="/login" class="button is-light">
                  Log in
                </A>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
