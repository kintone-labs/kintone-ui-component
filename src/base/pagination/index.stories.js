import { Pagination } from "./index.ts";

export default {
  title: "base/pagination",
  argTypes: {},
  parameters: {
    actions: {
      handles: ["kuc:pagination-click-prev", "kuc:pagination-click-next"],
    },
  },
};

const Template = (args) => {
  const pagination = new Pagination(args);
  return pagination;
};

export const Base = Template.bind({});
Base.args = {
  id: "sample-id",
  className: "sample-class",
  visible: true,
  isPrev: true,
  isNext: true,
};
