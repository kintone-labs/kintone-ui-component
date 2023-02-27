document.addEventListener("kuc:loaded", function() {
  const container = document.getElementById("sample-container__components");
  const firstContent = document.createElement("div");
  firstContent.style = "padding: 16px";
  const textArea = new Kuc.TextArea({
    label: "フルーツ",
    requiredIcon: true,
    value: "Apple",
    error: "エラーです",
    visible: true,
    disabled: false,
    placeholder: "",
  });
  firstContent.appendChild(textArea);

  const secondContent = document.createElement("div");
  secondContent.style = "padding: 16px";
  const dialog = new Kuc.Dialog({
    title: "Title",
    content: "Content with Icon",
    footer: "Footer",
    icon: "success",
  });
  const button = new Kuc.Button({ text: "Button" });
  button.addEventListener("click", () => {
  dialog.open();
  });

  secondContent.appendChild(button);

  const thirdContent = document.createElement("div");
  thirdContent.style = "padding: 16px";
  thirdContent.innerText = "tab3_content"
  const tabs = new Kuc.Tabs({
    borderVisible: true,
    className: "kuc-tabs-class",
    id: "sample-id",
    items: [
      {
        label: "Tab1",
        content: firstContent,
        value: "tab1",
        disabled: false,
      },
      {
        label: "Tab2",
        content: secondContent,
        value: "tab2",
      },
      {
        value: "tab3",
        label: "Tab3",
        content: thirdContent,
      },
    ],
    value: "tab2",
    visible: true,
  });
  container.appendChild(tabs);
});