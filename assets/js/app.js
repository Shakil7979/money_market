var count = 0; 
var data_id = 0; 
var lastClickedDataId = null; 

$(document).on("click","#navbar-list li",function() {
  
  data_id = $(this).attr('data-id'); 
  $('.submenu').css({'display':'none'});
  $('.icon_arrow').css({'transform':'rotate(0deg)'}); 

  if (count == 1 && data_id == lastClickedDataId) {
    $('.data_'+data_id).find('.submenu').css({'display':'none'});
    $('.data_'+data_id).find('.icon_arrow').css({'transform':'rotate(0deg)'});
    count = 0;
  } else {  
    $('.data_'+data_id).find('.submenu').css({'display':'block'});
    $('.data_'+data_id).find('.icon_arrow').css({'transform':'rotate(180deg)'});
    count = 1;
  }

  lastClickedDataId = data_id; 
});








$(document).ready(function() {
    var toggleBtn = $("#navbar-toggle");
    var toggleArea = $("#navbarSupportedContent");
    var darkdiv = $("#dark-div");
    var closeToggle = $("#cross");
    var htmlTag = $("html");

    var isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    $('header .navbar ul li').removeClass('hover-effect');
}
    // var liItem = $("#navbar-list li:has(.submenu)").addClass("mobile-show");

    $("#navbar-list li a").on("click", function(e) {
        e.preventDefault()
        $(this).siblings(".submenu").toggleClass("show-submenu");
    })
  
    toggleBtn.on("click", function() {
      toggleArea.addClass("show");
      darkdiv.removeClass("display-none");
      htmlTag.css("overflow", "hidden");
    });
  
    closeToggle.on("click", function() {
      toggleArea.removeClass("show");
      darkdiv.addClass("display-none");
      htmlTag.css("overflow", "");
    });





    // email js configuration
    var btn = $('#button-submit-form');
  var form = $('#exclusive-rates-form');

  form.on('submit', function(event) {
    event.preventDefault();

    var name = $("#fullname").val().trim();
    var email = $("#email").val().trim();
    var telephone = $("#telephone").val().trim();
    var investment = $("#investment").val().trim();
    var timeframe = $("#investmentStart").val().trim();
    var regEx = /^[a-zA-Z\s]+$/;
    var regexDigits = /^\d+$/;
    $("#name-error").text(" ");
    $("#telephone-error").text(" ");
    $("#invest-error").text(" ");
    $("#inv-start-error").text(" ");
    if(!regEx.test(name)) {
        $("#name-error").text("Numbers are not allowed in the name field");
        return;
    } else if (!regexDigits.test(telephone)) {
        $("#telephone-error").text("Letters are not allowed in telephone");
        return;
    } else if(investment == 0) {
      $("#invest-error").text("Please Select The investment");
      return;
    } else if (timeframe == 0) {
      $("#inv-start-error").text("Please Select Time Frame");
    } else {
        var sendmail = {
          from_name: name,
          email_address: email,
          telephone_number: telephone,
          investment_amound: investment,
          select_timeframe: timeframe
        }
        btn.val('Sending...');
    
        var serviceID = 'service_l4sl5ls';
        var templateID = 'template_4ulk7dl';
    
        emailjs.send(serviceID, templateID, sendmail)
          .then(function() {
            btn.val('Show Exclusive Rates');
            $("#form-message").text("Thankyou, you will contacted by one of our partners");
            // alert('Thank You!');
            // window.location.replace("/");
            // setTimeout(function() {
            //   window.location.assign("https://www.moneysupermarket.com/")
            // }, 3000)
          }, function(err) {
            btn.val('Show Exclusive Rates');
            alert(JSON.stringify(err));
          });
    }



  });


  });
  






  