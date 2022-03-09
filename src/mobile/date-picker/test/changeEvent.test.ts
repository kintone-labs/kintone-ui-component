// import { elementUpdated, expect, fixture } from "@open-wc/testing";
// import { MobileDatePicker } from "../index";
// import { padStart } from "../../../base/datetime/utils";

// describe("TimePicker", () => {
//   describe("change event", () => {
//     it("should be triggered when mousedown on date in calendar", async () => {
//       let triggeredEvent: any = null;
//       const container = new MobileDatePicker({
//         value: "2021-12-20",
//         language: "en"
//       });
//       container.addEventListener("change", event => {
//         triggeredEvent = event;
//       });

//       const el = await fixture(container);

//       const inputDateEl = el.querySelector(
//         ".kuc-base-date__input"
//       ) as HTMLInputElement;

//       inputDateEl.click();
//       await elementUpdated(container);
//       await elementUpdated(el);

//       const selectedElUp = el.querySelector(
//         'kuc-base-datetime-calendar-body .kuc-base-datetime-calendar-body__table__date__button[aria-current="true"]'
//       ) as HTMLButtonElement;

//       const nextEl = selectedElUp.parentElement
//         ?.nextElementSibling as HTMLTableCellElement;
//       const buttonEl = nextEl.firstElementChild as HTMLButtonElement;
//       buttonEl.click();
//       await elementUpdated(container);

//       expect(triggeredEvent.type).to.equal("change");
//       expect(triggeredEvent.detail.value).to.equal("2021-12-21");
//     });

//     it("should be triggered when click none button on calendar", async () => {
//       let triggeredEvent: any = null;
//       const container = new MobileDatePicker({
//         value: "2021-12-20",
//         language: "en"
//       });
//       container.addEventListener("change", event => {
//         triggeredEvent = event;
//       });
//       const el = await fixture(container);
//       const inputDateEl = el.querySelector(
//         ".kuc-base-date__input"
//       ) as HTMLInputElement;

//       inputDateEl.click();
//       await elementUpdated(container);
//       await elementUpdated(el);

//       const noneBtnEl = el.querySelector(
//         ".kuc-base-datetime-calendar-footer__group__button--none"
//       ) as HTMLButtonElement;
//       noneBtnEl.click();
//       await elementUpdated(container);

//       expect(triggeredEvent.type).to.equal("change");
//       expect(triggeredEvent.detail.value).to.equal(undefined);

//       inputDateEl.click();
//       await elementUpdated(container);
//       await elementUpdated(el);

//       const noneBtnElEmpty = el.querySelector(
//         ".kuc-base-datetime-calendar-footer__group__button--none"
//       ) as HTMLButtonElement;
//       noneBtnElEmpty.click();
//       await elementUpdated(container);

//       expect(triggeredEvent.type).to.equal("change");
//       expect(triggeredEvent.detail.value).to.equal(undefined);
//     });
//   });
// });
