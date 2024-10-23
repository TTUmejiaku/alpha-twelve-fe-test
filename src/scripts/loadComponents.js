export async function devLoadComponent(url, selector) {
  try {
    const response = await fetch(url);
    const text = await response.text();
    document.querySelector(selector).innerHTML += text;

    if (import.meta.hot) {
      import.meta.hot.accept(
        new URL(url, import.meta.url).href,
        async (newModule) => {
          const newResponse = await fetch(url);
          const newText = await newResponse.text();
          document.querySelector(selector).innerHTML = newText;
        }
      );
    }
  } catch (error) {
    console.error(`Error loading component from ${url}: `, error);
  }
}

export async function loadComponent(url, selector) {
  try {
    const response = await fetch(url);
    const text = await response.text();
    document.querySelector(selector).innerHTML += text;
  } catch (error) {
    console.error(`Error loading component from ${url}: `, error);
  }
}
