import { Spinner } from "./index.ts";

export default {
  title: "desktop/spinner",
  argTypes: {
    text: { name: "text" },
  },
};
const template = (args) => {
  const spinner = new Spinner({ ...args });
  spinner.open();
  return spinner;
};
export const Base = template.bind({});
Base.args = { text: "now loading..." };
