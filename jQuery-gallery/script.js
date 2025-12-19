// $(document).ready(function() {
//   $('#toggle-gallery').click(function() {
//     $('.gallery').slideToggle(600);
//   });
//   $('.gallery img').on('click', function() {
//     $(this).fadeOut(200).fadeIn(500);
//     $('.message').text("You clicked on: " + $(this).attr('alt'));
//   });
//   $('.gallery img').hover(
//     function() {
//       $(this).css('box-shadow', '0 0 20px rgba(255, 105, 180, 0.6)');
//     },
//     function() {
//       $(this).css('box-shadow', '0 4px 10px rgba(0,0,0,0.15)');
//     }
//   );
//   $('#dark-mode').click(function() {
//     $('body').toggleClass('dark');
//     if ($('body').hasClass('dark')) {
//       $(this).text('☀️ Light Mode');
//     } else {
//       $(this).text('🌙 Dark Mode');
//     }
//   });
//   $('.filter-btn').click(function() {
//     let category = $(this).attr('data-category');
//     $('.filter-btn').removeClass('active');
//     $(this).addClass('active');

//     if (category === 'all') {
//       $('.gallery img').fadeIn(400);
//     } else {
//       $('.gallery img').each(function() {
//         if ($(this).data('category') === category) {
//           $(this).fadeIn(400);
//         } else {
//           $(this).fadeOut(200);
//         }
//       });
//     }
//   });
// });

$(document).ready(function () {

  $("input, textarea").focus(function () {
    $(this).css("background", "#e0f2fe");
  });

  $("input, textarea").blur(function () {
    $(this).css("background", "white");
  });
  $("#email").change(function () {
    alert("Email changed to: " + $(this).val());
  });

  $("#submitBtn").click(function (event) {
    event.preventDefault(); 
    $("#output").fadeIn().delay(1500).fadeOut();
  });

  $("button").hover(
    function () { $(this).css("opacity", "0.8"); },
    function () { $(this).css("opacity", "1"); }
  );


  $("#name").keydown(function () {
    $(this).css("border-color", "#4f46e5");
  });

  $("#name").keyup(function () {
    $(this).css("border-color", "#ccc");
  });

  $("#message").keypress(function (e) {
    console.log("You pressed: " + e.key);
  });

  $("#menuList").on("mouseenter", "li", function () {
    $(this).addClass("highlight");
  });

  $("#menuList").on("mouseleave", "li", function () {
    $(this).removeClass("highlight");
  });

  $("#menuList").on("click", "li", function (event) {
    alert("You clicked: " + $(event.target).text());
  });
  
  $("#addItem").click(function () {
    $("#menuList").append("<li>New Item <button class='remove'>x</button></li>");
  });

  $("#menuList").on("click", ".remove", function (event) {
    event.stopPropagation();
    $(this).parent().fadeOut(300, function () {
      $(this).remove();
    });
  });

});
