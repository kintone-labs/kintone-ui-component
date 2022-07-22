export const BASE_TIME_CSS = `
:lang(ja) .kuc-base-time__group input.kuc-base-time__group__hours,
:lang(ja) .kuc-base-time__group input.kuc-base-time__group__minutes {
  width: 18px;
}
.kuc-base-time__group {
  display: inline-flex;
  position: relative;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  max-width: 85px;
  width: 85px;
  height: 40px;
  color: #333333;
  border: solid 1px #e3e7e8;
  box-sizing: border-box;
  padding: 0px 8px;
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  background-color: #ffffff;
}
.kuc-base-time__group input.kuc-base-time__group__hours {
  border: 0px;
  padding: 0px;
  width: 16px;
  font-size: 14px;
  outline: none;
  background-color: transparent;
  color: #333333;
  caret-color: transparent;
  user-select: none;
}
.kuc-base-time__group input.kuc-base-time__group__minutes {
  border: 0px;
  padding: 0px;
  width: 16px;
  font-size: 14px;
  outline: none;
  background-color: transparent;
  color: #333333;
  caret-color: transparent;
  user-select: none;
}
.kuc-base-time__group input.kuc-base-time__group__hours:focus {
  border: 0px;
}
.kuc-base-time__group input.kuc-base-time__group__minutes:focus {
  border: 0px;
}
.kuc-base-time__group__colon {
  width: 4px;
  text-align: center;
}
.kuc-base-time__group input.kuc-base-time__group__suffix {
  border: 0px;
  width: 24px;
  text-align: right;
  font-size: 14px;
  outline: none;
  appearance: none;
  margin-left: 1px;
  padding: 0px;
  background-color: transparent;
  color: #333333;
  caret-color: transparent;
  user-select: none;
}
.kuc-base-time__group--focus {
  box-shadow: 2px 2px 4px #f5f5f5 inset, -2px -2px 4px #f5f5f5 inset;
  border: 1px solid #3498db;
  background-color: #ffffff;
  color: #333333;
}
.kuc-base-time__assistive-text {
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;
  position: absolute !important;
  padding: 0px !important;
  border: 0px !important;
  height: 1px !important;
  width: 1px !important;
}
.kuc-base-time__group--disabled {
  background-color: #d4d7d7;
  box-shadow: none;
  color: #888888;
  cursor: not-allowed;
}
.kuc-base-time__group--disabled input {
  cursor: not-allowed;
  color: #888888;
  -webkit-text-fill-color: #888888;
}
`;
