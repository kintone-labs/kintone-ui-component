document.addEventListener("kuc:loaded", function () {
  const container = document.getElementById("guide_links");

  const guides = [
    {
      title: "A commentary on the difference between v0 and v1",
      path: "guides/comparison-v0-v1",
    },
    {
      title: "Search box customization",
      path: "guides/search-box-customization",
    },
    {
      title: "Mobile timecard customization",
      path: "guides/mobile-timecard-customization",
    },
    {
      title: "Cleaning check list customization",
      path: "guides/cleaning-check-list-customization",
    },
    {
      title: "Bulk update customization",
      path: "guides/bulk-update-customization",
    },
    {
      title: "Format setting plug-in",
      path: "guides/format-setting-plugin",
    },
    {
      title: "Version conflicts issue and solution",
      path: "guides/version-conflicts-issue-solution",
    },
    {
      title: "Attachment customization",
      path: "guides/attachment-customization",
    },
    {
      title: "Table and ReadOnlyTable customization",
      path: "guides/table-readonly-table-customization",
    },
  ];

  guides.forEach((guide) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${window.location.pathname.replace(
      /components\/.*/,
      guide.path
    )}">${guide.title}</a>`;
    container.appendChild(li);
  });
});
