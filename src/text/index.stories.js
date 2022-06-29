import { Text } from "./index.ts";
import { storiesOf } from "@storybook/web-components";

storiesOf("desktop/text", module)
  .add("Base", () => {
    const root = document.createElement("div");
    const text = new Text({
      value: "Orange",
      className: "hoge var",
      id: "aaaaaa",
      textalign: "righttt",
      placeholder: "hogehoge1",
      label: "フルーツ",
      requiredIcon: true,
      error: "エラーです",
    });
    text.addEventListener("focus", (event) => {
      console.log(event.detail);
    });
    text.addEventListener("change", (event) => {
      console.log(event.detail);
    });
    text.addEventListener("input", (event) => {
      console.log(event.detail);
    });
    root.appendChild(text);
    return root;
  })
  .add("Base2", () => {
    const root = document.createElement("div");
    const text = new Text();
    text.value = "Apple";
    text.className = "hogehoge var";
    text.id = "ididid";
    text.placeholder = "hogehoge2";
    text.prefix = "$$$";
    text.suffix = "円";
    text.textalign = "righttt";
    text.label = "フルーツ";
    text.requiredIcon = true;
    text.error = "エラーです";
    root.appendChild(text);

    const text2 = new Text();
    text2.value = "Apple";
    text2.placeholder = "hogehoge2";
    text2.prefix = "$$$";
    text2.suffix = "円";
    text2.textalign = "right";
    text2.label = "フルーツ";
    text2.requiredIcon = true;
    text2.error = "エラーです";
    root.appendChild(text2);
    return root;
  })
  .add("Base3", () => {
    return `
      <style>
        .hoge {
          margin-top: 12px;
        }
      </style>
      <kuc-text value="aa" class="hoge" id="aaaa" placeholder="hogehoge3" prefix="$" suffix="円" textalign="right"></kuc-text>
      <kuc-text value="ss" class="hoge" id="bbb" placeholder="hoge" prefix="$" suffix="円" textalign="left" disabled></kuc-text>
      <kuc-text value="ss" class="hoge" id="bbb" placeholder="hoge" prefix="$" suffix="円" textalign="left"></kuc-text>
    `;
  })
  .add("Base4", () => {
    const root = document.createElement("div");
    const text = new Text({
      value: "Orange",
      className: "options-class",
      id: "options-id",
      textalign: "right",
      placeholder: "fruit",
      label: "Fruit",
      requiredIcon: true,
      error: "Error occurred!",
    });
    root.appendChild(text);
    return root;
  });
