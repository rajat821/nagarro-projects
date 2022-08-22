$(document).ready(function ($) {
    $("#input").change(function () {
      var input = $(this).val();
      $("ul").append(
        "<li>" +
          input +
          '</i> <i class="fas fa-trash "></i> </li>'
      );
      $("ul").children("p").hide();
      $(this).val("");
    });
    $("ul").on("click", ".fa-trash", function () {
      $(this).parent("li").fadeOut(200);
    });
  });