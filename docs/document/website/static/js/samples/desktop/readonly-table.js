document.addEventListener("kuc:loaded", function() {
  const script = `
    const readOnlyTable = new Kuc.ReadOnlyTable({
      rowsPerPage: 3,
      pagination: true,
      columns: [
        {
          title: "Number",
          field: "index",
        },
        {
          title: "City",
          field: "name",
        },
        {
          title: "Country",
          field: "country",
        },
        {
          title: "Population",
          field: "population",
        },
        {
          title: "Coordinates (lat, lng)",
          field: "coordinates",
        },
      ],
      data: [
        {
          index: "1",
          name: "HoChiMinh",
          country: "Vietnam",
          population: "8,371,000",
          coordinates: "10.762622, 106.660172",
        },
        {
          index: "2",
          name: "Tokyo",
          country: "Japan",
          population: "14,000,000",
          coordinates: "35.689487, 139.691711",
        },
        {
          index: "3",
          name: "New York",
          country: "USA",
          population: "8,400,000",
          coordinates: "40.712776, -74.005974",
        },
        {
          index: "4",
          name: "Edmonton",
          country: "Canada",
          population: "981,000",
          coordinates: "53.544388, -113.490929",
        },
        {
          index: "5",
          name: "Sydney",
          country: "Australia",
          population: "6,000,000",
          coordinates: "-33.868820, 151.209290",
        },
        {
          index: "6",
          name: "Paris",
          country: "France",
          population: "2,165,423",
          coordinates: "48.856613, 2.352222",
        },
      ],
    });
    document.body.appendChild(readOnlyTable);
  `;
  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});
