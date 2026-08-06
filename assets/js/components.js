/*
==========================================================
Component Loader
==========================================================

Loads reusable HTML components such as:

- Header
- Footer

Future Components
-----------------
- Social Links
- Project Navigation
- Contact Card
- etc.

==========================================================
*/

/*
==========================================================
Component Loader
==========================================================

Loads reusable HTML components such as:

- Header
- Footer

==========================================================
*/

async function loadComponent(selector, path) {
  const element = document.querySelector(selector);

  if (!element) {
    return;
  }

  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(`Failed to load ${path}`);
    }

    element.innerHTML = await response.text();
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadComponent("#site-header", "/assets/components/header.html");

  await loadComponent("#site-footer", "/assets/components/footer.html");
});