document.addEventListener("kuc:loaded", function () {
  const script = `
    const renderAge = (dataCell) => {
      const spanElement = document.createElement("span");
      spanElement.innerText = \`The age is \$\{dataCell\}\`;
      return spanElement;
    };
    const renderName = (cellData) => {
      const dropdown = new Kuc.Dropdown({
        items: [
          {
            label: "John Brown",
            value: "john",
          },
          {
            label: "Steven Gerrard",
            value: "steven",
          },
        ],
        value: cellData,
      });
      return dropdown;
    };

    const table = new Kuc.Table({
      columns: [
        {
          title: "Name",
          field: "name",
          render: renderName,
        },
        {
          title: "Address",
          field: "address",
        },
        {
          title: "Age",
          field: "age",
          render: renderAge,
        },
      ],
      data: [
        {
          name: "john",
          age: 32,
          address: "New York No. 1 Lake Park",
        },
        {
          name: "steven",
          age: 22,
          address: "New York No. 2 Lake Park",
        },
      ],
    });
    document.body.appendChild(table);
  `;
  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});
