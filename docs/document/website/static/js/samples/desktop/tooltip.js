document.addEventListener("kuc:loaded", function () {
    const container = document.getElementById("sample-container__components");
    const getButtonContainer = (text) => {
        const buttonEl = document.createElement("button");
        buttonEl.innerText = text;
        return buttonEl;
      };
    const tooltip = new Kuc.Tooltip({
        className: "tooltip-class",
        id: "tooltip-id",
        placement: "bottom",
        title: "Do not add if exists.",
        container: getButtonContainer("Add"),
        describeChild: true,
    });
    container.appendChild(tooltip);
  });