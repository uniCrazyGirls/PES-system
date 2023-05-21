$(document).ready(function () {
  // Attach click event handler to the button
  $("#btnComputerArchitecture").click(function () {
    const year = "1st Year";
    const semester = "1st Semester";
    const name = "Computer Architecture";

    // Send an AJAX request to the server
    $.ajax({
      url: "/admin/icty1subjects",
      type: "POST",
      success: function () {
        // If the request is successful, redirect to the mathresults page
        const result = fetch("/icty1subjects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            year,
            semester,
            name,
          }),
        }).then((res) => res.json());
        console.log(result);
        if (result.status === "error") {
          alert(result.message);
        } else {
        }
      },
      error: function () {
        // Handle the error case, if needed
      },
    });

    // Send an AJAX request to the server
    $.ajax({
      url: "/admin/icty1subjects",
      type: "GET",
      success: function () {
        // If the request is successful, redirect to the mathresults page
        window.location.href = "/admin/inputresults";
      },
      error: function () {
        // Handle the error case, if needed
      },
    });
  });
});
