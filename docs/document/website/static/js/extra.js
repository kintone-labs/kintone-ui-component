document.addEventListener("DOMContentLoaded", function () {
  function createTabNavEl(headerEls) {
    const tabNavEl = document.createElement("div");
    tabNavEl.classList.add("tab-nav");
    let i = 0;
    while (headerEls.length > 0) {
      headerEls[0].dataset.index = i;
      headerEls[0].classList.add("tab-btn");
      tabNavEl.appendChild(headerEls[0]);
      i++;
    }
    return tabNavEl;
  }

  function createTabSessionEl(sessionEls) {
    const tabSessionEl = document.createElement("div");
    tabSessionEl.classList.add("tab-session");
    let i = 0;
    while (sessionEls.length > 0) {
      sessionEls[0].classList.add("index-" + i);
      tabSessionEl.appendChild(sessionEls[0]);
      i++;
    }
    return tabSessionEl;
  }

  function hideActivatedTab(headerEls, sessionEls) {
    for (let i = 0; i < headerEls.length; i++) {
      headerEls[i].classList.remove("active");
    }
    for (let i = 0; i < sessionEls.length; i++) {
      sessionEls[i].classList.remove("active");
    }
  }

  function createSandboxButton(sessionEls) {
    const CodeSandboxImage =
      "https://codesandbox.io/static/img/play-codesandbox.svg";
    for (let index = 0; index < sessionEls.length; index++) {
      const element = sessionEls[index];

      element.firstChild.classList.forEach(function (className) {
        if (/sandbox_\w+/.test(className)) {
          const sandboxLink = document.createElement("a");
          sandboxLink.href =
            "https://codesandbox.io/s/" + className.split("_")[1];
          sandboxLink.target = "_blank";

          const sandboxButton = document.createElement("img");
          sandboxButton.src = CodeSandboxImage;
          sandboxLink.appendChild(sandboxButton);
          sandboxLink.className = "sandbox-button";
          element.appendChild(sandboxLink);
          element.style.position = "relative";
        }
      });
    }
  }

  function showTabLayout(containerEl) {
    const headerEls = containerEl.getElementsByTagName("strong");
    const tabNavEl = createTabNavEl(headerEls);
    containerEl.appendChild(tabNavEl);

    const sessionEls = containerEl.getElementsByTagName("pre");
    const tabSessionEl = createTabSessionEl(sessionEls);

    containerEl.appendChild(tabSessionEl);
    createSandboxButton(sessionEls);

    tabNavEl.addEventListener("click", function (e) {
      const target = e.target;
      if (!target.classList.contains("tab-btn")) {
        return;
      }

      hideActivatedTab(headerEls, sessionEls);
      target.classList.add("active");
      sessionEls[target.dataset.index].classList.add("active");
    });

    headerEls[0].classList.add("active");
    sessionEls[0].classList.add("active");
  }

  const tabContainers = document.getElementsByClassName("tab-container");
  for (let i = 0; i < tabContainers.length; i++) {
    showTabLayout(tabContainers[i]);
    tabContainers[i].parentNode.removeChild(tabContainers[i].nextSibling);
    tabContainers[i].parentNode.removeChild(tabContainers[i].previousSibling);
  }
});
