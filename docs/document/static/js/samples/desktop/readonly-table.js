import React, { useEffect, useRef } from 'react';

export const ReadOnlyTableComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
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
          {
            title: "Link",
            field: "link",
          },
        ],
        data: [
          {
            index: "1",
            name: "HoChiMinh",
            country: "Vietnam",
            population: "8,371,000",
            coordinates: "10.762622, 106.660172",
            link: '<a href="https://en.wikipedia.org/wiki/Ho_Chi_Minh_City" target="_blank">Vietnam: Ho Chi Minh City</a>'
          },
          {
            index: "2",
            name: "Tokyo",
            country: "Japan",
            population: "14,000,000",
            coordinates: "35.689487, 139.691711",
            link: '<a href="https://en.wikipedia.org/wiki/Tokyo" target="_blank">Japan: Tokyo</a>'
          },
          {
            index: "3",
            name: "New York",
            country: "USA",
            population: "8,400,000",
            coordinates: "40.712776, -74.005974",
            link: '<a href="https://en.wikipedia.org/wiki/New_York_City" target="_blank">USA: New York City</a>'
          },
          {
            index: "4",
            name: "Edmonton",
            country: "Canada",
            population: "981,000",
            coordinates: "53.544388, -113.490929",
            link: '<a href="https://en.wikipedia.org/wiki/Edmonton" target="_blank">Canada: Edmonton</a>',
          },
          {
            index: "5",
            name: "Sydney",
            country: "Australia",
            population: "6,000,000",
            coordinates: "-33.868820, 151.209290",
            link: '<a href="https://en.wikipedia.org/wiki/Sydney" target="_blank">Australia: Sydney</a>'
          },
          {
            index: "6",
            name: "Paris",
            country: "France",
            population: "2,165,423",
            coordinates: "48.856613, 2.352222",
            link: '<a href="https://en.wikipedia.org/wiki/Paris" target="_blank">France: Paris</a>'
          },
        ],
      });

    divEl.current.appendChild(readOnlyTable)
  }, []);

  return (
    <div className="sample-container" id="readonly-table">
      <div id="sample-container__components" ref={divEl}></div>
    </div>
  );
};