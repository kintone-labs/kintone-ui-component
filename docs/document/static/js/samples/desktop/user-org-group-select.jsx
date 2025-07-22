import React, { useEffect, useRef } from "react";

export const UserOrgGroupSelectComponent = () => {
  const divEl = useRef();
  useEffect(() => {
    const userOrgGroupSelect = new Kuc.UserOrgGroupSelect({
      label: "Sample label",
      requiredIcon: true,
      items: [
        {
          label: "User A",
          value: "userA",
          type: "user",
          disabled: true,
        },
        {
          label: "User B",
          value: "userB",
          type: "user",
        },
        {
          label: "Organization AOrganization AOrsAOrganization",
          value: "orgA",
          type: "org",
        },
        {
          label: "Group A",
          value: "groupA",
          type: "group",
        },
        {
          label: "User C",
          value: "userC",
          type: "user",
        },
      ],
      value: ["userB", "orgA", "groupA"],
      error: "Error occurred!",
      className: "sample-class",
      icon: "user",
      id: "sample-id",
      placeholder: "Sample placeholder",
      visible: true,
      disabled: false,
    });

    divEl.current.appendChild(userOrgGroupSelect);
  }, []);

  return (
    <div className="sample-container" id="user-org-group-select">
      <div id="sample-container__components" ref={divEl}></div>
    </div>
  );
};