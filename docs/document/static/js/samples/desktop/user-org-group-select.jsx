import React, { useEffect, useRef } from "react";

export const UserOrgGroupSelectComponent = () => {
  const divEl = useRef();
  useEffect(() => {
    const userOrgGroupSelect = new Kuc.UserOrgGroupSelect({
      items: [
        { label: 'Alice Johnson', value: 'alice', type: 'user', disabled: false },
        { label: 'Bob Smith', value: 'bob', type: 'user', disabled: false },
        { label: 'Charlie Lee', value: 'charlie', type: 'user', disabled: true },
        { label: 'Marketing Group', value: 'marketing-group', type: 'group', disabled: false },
        { label: 'Sales Team', value: 'sales-team', type: 'group', disabled: false },
        { label: 'Engineering Team', value: 'engineering-team', type: 'group', disabled: false },
        { label: 'Acme Corporation', value: 'acme-corp', type: 'org', disabled: false },
        { label: 'New York Office', value: 'ny-office', type: 'org', disabled: false },
      ],
      value: ['alice', 'marketing-group', 'acme-corp'],
      className: 'sample-class',
      icon: 'user',
      id: 'sample-id',
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