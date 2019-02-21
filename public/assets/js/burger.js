console.log("loaded");

$(function() {
  $(".devour-burger").on("click", function(event) {
    var id = $(this).data("id");
    console.log("clicked" + id);

    var body = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: JSON.stringify(body),
      contentType: 'application/json'
    }).then(function() {
      console.log("changed devoured to", true);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $("#make-button").on("click", function(event) {
    console.log("clicked make");

    var body = {
      name: $("#burger-name").val(),
      devoured: false
    };

    // Send the PUT request.
    $.ajax("/api/burger", {
      type: "POST",
      data: JSON.stringify(body),
      contentType: 'application/json'
    }).then(function() {
      console.log("created burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
