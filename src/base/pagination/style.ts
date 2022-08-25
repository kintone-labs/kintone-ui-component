export const PAGINATION_CSS = `
  .kuc-base-pagination__group {
    margin-top: 10px;
  }
  .kuc-base-pagination__group button {
    cursor: pointer;
    outline: none;
  }
  .kuc-base-pagination__group__pager-prev {
    border: none;
    background-color: transparent;
    visibility: visible;
  }
  .kuc-base-pagination__group__pager-next {
    border: none;
    background-color: transparent;
    visibility: visible;
  }
  .kuc-base-pagination__group__pagination-next:hover svg path,
  .kuc-base-pagination__group__pagination-prev:hover svg path,
  .kuc-base-pagination__group__pagination-next:focus svg path,
  .kuc-base-pagination__group__pagination-prev:focus svg path {
    fill: #3498db;
  }
  .kuc-base-pagination__group__pager-disable {
    visibility: hidden;
  }
`;
