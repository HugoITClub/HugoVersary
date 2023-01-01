async function run() {
  await loadGapi();

  const query = window.location.search;
  const searchParams = new URLSearchParams(query);
  const fileId = searchParams.get("fileId");

  const htmlElement = await readDocAndLoadAsHtml(fileId);
  document.querySelector(".post-content").appendChild(htmlElement);
}

run();
