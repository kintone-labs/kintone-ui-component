import React, { useEffect, useRef } from "react";

export const UserOrgGroupSelectComponent = () => {
  const divEl = useRef();
  useEffect(() => {
    const userOrgGroupSelect = new Kuc.UserOrgGroupSelect({
      label: 'Assignees',
      items: [
        { label: 'Alice Johnson', value: 'alice1', type: 'user', disabled: false },
        { label: 'Bob Smith', value: 'bob2', type: 'user', disabled: false },
        { label: 'Charlie Lee', value: 'charlie3', type: 'user', disabled: false },
        { label: 'Marketing Group', value: 'marketinggroup', type: 'group', disabled: false },
        { label: 'Sales Team', value: 'salesteam', type: 'group', disabled: false },
        { label: 'Engineering Team', value: 'engineeringteam', type: 'group', disabled: false },
        { label: 'Acme Corporation', value: 'acmecorp', type: 'org', disabled: false },
        { label: 'New York Office', value: 'nyoffice', type: 'org', disabled: false },
        { label: 'Acme Corporation', value: 'acmecorp', type: 'org', disabled: false },
        { label: 'New York Office', value: 'nyoffice', type: 'org', disabled: false }
      ],
      value: ['alice1'],
      requiredIcon: true,
      error: 'Error occurred!',
      className: 'options-class',
      icon: 'user',
      id: 'options-id',
      placeholder: 'Please select assignees',
      visible: true,
      disabled: false
    });

    divEl.current.appendChild(userOrgGroupSelect);
  }, []);

  return (
    <div className="sample-container" id="user-org-group-select">
      <div id="sample-container__components" ref={divEl}></div>
    </div>
  );
};