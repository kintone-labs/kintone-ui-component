import { expect, fixture } from "@open-wc/testing";
import { Notification } from "../index";

describe("type default prop is danger", () => {
  const container = new Notification({});

  it("type default prop is danger", async () => {
    const el = await fixture(container);
    const typeEl = (await el.querySelector(
      ".kuc-notification__notification"
    )) as HTMLDivElement;
    await expect(
      [
        "kuc-notification__notification",
        "kuc-notification__notification--danger"
      ].every(c => typeEl.classList.contains(c))
    ).to.be.true;
  });
});

describe("type prop set to danger successfully", () => {
  const container = new Notification({
    type: "info"
  });
  container.type = "danger";

  it("type prop set to danger successfully", async () => {
    const el = await fixture(container);
    const typeEl = (await el.querySelector(
      ".kuc-notification__notification"
    )) as HTMLDivElement;
    await expect(
      [
        "kuc-notification__notification",
        "kuc-notification__notification--danger"
      ].every(c => typeEl.classList.contains(c))
    ).to.be.true;
  });
});

describe("type prop set to info successfully", () => {
  const container = new Notification({
    type: "danger"
  });
  container.type = "info";

  it("type prop set to info successfully", async () => {
    const el = await fixture(container);
    const typeEl = (await el.querySelector(
      ".kuc-notification__notification"
    )) as HTMLDivElement;
    await expect(
      [
        "kuc-notification__notification",
        "kuc-notification__notification--info"
      ].every(c => typeEl.classList.contains(c))
    ).to.be.true;
  });
});

describe("type prop set to success successfully", () => {
  const container = new Notification({
    type: "danger"
  });
  container.type = "success";

  it("type prop set to success successfully", async () => {
    const el = await fixture(container);
    const typeEl = (await el.querySelector(
      ".kuc-notification__notification"
    )) as HTMLDivElement;
    await expect(
      [
        "kuc-notification__notification",
        "kuc-notification__notification--success"
      ].every(c => typeEl.classList.contains(c))
    ).to.be.true;
  });
});

describe("type prop set to null successfully", () => {
  const container = new Notification({
    type: "danger"
  });

  // @ts-ignore
  container.type = null;

  it("type prop set to null successfully", async () => {
    const el = await fixture(container);
    const typeEl = (await el.querySelector(
      ".kuc-notification__notification"
    )) as HTMLDivElement;
    await expect(
      [
        "kuc-notification__notification",
        "kuc-notification__notification--null"
      ].every(c => typeEl.classList.contains(c))
    ).to.be.true;
  });
});
