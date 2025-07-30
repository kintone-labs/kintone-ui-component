import React, { useEffect, useRef } from "react";

export const UserOrgGroupSelectComponent = () => {
  const divEl = useRef();
  useEffect(() => {
    const userOrgGroupSelect = new Kuc.UserOrgGroupSelect({
      label: 'Assignees',
      items: [
        { label: 'Alice Johnson', value: 'alice1', type: 'user', disabled: true },
        { label: 'Bob Smith', value: 'bob2', type: 'user' },
        { label: 'Charlie Lee', value: 'charlie3', type: 'user' },
        { label: 'Sales Team', value: 'salesteam', type: 'group' },
        { label: 'Engineering Team', value: 'engineeringteam', type: 'group' },
        { label: 'Acme Corporation', value: 'acmecorp', type: 'org' },
        { label: 'New York Office', value: 'nyoffice', type: 'org' }
      ],
      value: ['alice1'],
      requiredIcon: true,
      error: 'Error occurred!',
      className: 'options-class',
      icon: 'user',
      id: 'options-id',
      placeholder: 'Please select a assignees',
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