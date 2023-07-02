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
        title: "Does not add if it already exists.",
        container: getButtonContainer("Add"),
        describeChild: false,
    });
    container.appendChild(tooltip);
  });