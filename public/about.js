(async () => {
  let readmeText = await downloadReadMeFile();
  const markdownbox = document.getElementById("readme-content-box");
  const loader = document.getElementById("loader");
  markdownbox.innerHTML = readmeText;
  setTimeout(() => {
    markdownbox.classList.remove("d-none");
    loader.classList.add("d-none");
  }, 2000);
})();
