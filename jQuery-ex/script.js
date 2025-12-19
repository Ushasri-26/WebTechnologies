// $(document).ready(function() {
//   $("#btnReset").click(function() {
//     $("*").removeClass("highlight").show();
//     alert("Reset done! All highlights and effects cleared.");
//   });
//   $("#btnBasic").click(function() {
//     $("#mainTitle").addClass("highlight").fadeOut(200).fadeIn(200);
//     $(".info").addClass("highlight");
//     $("p").slideToggle(500).slideToggle(500);
//   });
//   $("#btnAttr").click(function() {
//     $("[type='text']").addClass("highlight").fadeOut(300).fadeIn(300);
//     $("[href^='https']").addClass("highlight");
//     $("[href$='.html']").addClass("highlight").animate({fontSize: "20px"}, 400).animate({fontSize: "16px"}, 400);
//   });
//   $("#btnHierarchy").click(function() {
//     $("ul li").addClass("highlight");
//     $("ul > li:first").animate({marginLeft: "20px"}, 300).animate({marginLeft: "0px"}, 300);
//     $(".note + input").addClass("highlight").fadeOut(300).fadeIn(300);
//   });
//   $("#btnPseudo").click(function() {
//     $("p:first").addClass("highlight");
//     $("li:odd").addClass("highlight").fadeOut(300).fadeIn(300);
//     $("p:contains('second')").addClass("highlight");
//     $("p:eq(2)").addClass("highlight").animate({opacity: 0.3}, 300).animate({opacity: 1}, 300);
//   });
//   $("#btnEffects").click(function() {
//     $("#myList").slideToggle(800);
//     $("#infoSection").fadeToggle(800);
//     $("#formSection").animate({
//       backgroundColor: "#d1f7c4",
//       borderRadius: "12px"
//     }, 600).animate({
//       backgroundColor: "#f7f9fa",
//       borderRadius: "0px"
//     }, 600);
//   });

// });

$(document).ready(function() {
  $("#highlightBtn").click(function() {
    $("#marksTable tbody tr").each(function() {
      let marks = parseInt($(this).children("td").eq(2).text());

      if (marks > 80) {
        $(this).addClass("highlight-green");
      } 
      else if (marks < 40) {
        $(this).addClass("highlight-red");
      }
      else {
        $(this).addClass("highlight-yellow");
      }
    });
  });
  $("#findBtn").click(function() {
    let secondRow = $("#marksTable tbody tr").eq(1);
    secondRow.css("background", "#fff7ed");
    secondRow.next().css("background", "#fef3c7");
    secondRow.prev().css("background", "#fde68a");
    secondRow.siblings().css("opacity", "0.8");
    secondRow.find("td").css("font-weight", "600");
  });

});
