$(document).ready(function() {
  
  $('.dropDown').click(function(event) {
    event.preventDefault();
    $('.dropDown>a').removeClass("active"); // 移除所有按鈕的 active
    $(this).find('a').toggleClass("active"); // 按鈕保持綠色
    $('.dropDown-open').hide();
    $(this).find('.dropDown-open').delay(100).slideToggle(250);
    event.stopPropagation(); // 避免點擊事件傳送

    $('.dropDown-open a').click(function(event) {
      event.stopPropagation(); // 點子選單不會跑效果
  });

    $(document).click(function(event) {
      if (!$(event.target).closest('.dropDown').length) {  // 點按鈕外面收合所有下拉菜單
          
          $('.dropDown>a').removeClass("active");
          $('.dropDown-open').slideUp(250); 
        }
        
    });
  });

    const swiper = new Swiper('.swiper', {  //banner輪播
        // Optional parameters
        direction: 'horizontal',
        speed:300,
        loop: true,
        autoplay: {
        delay: 2500,
        },
   
        pagination: {
          el: '.swiper-pagination',  //  pagination
        },
        
        navigation: {
          nextEl: '.swiper-button-next',   // Navigation arrows
          prevEl: '.swiper-button-prev',
        },
         
        scrollbar: {
          el: '.swiper-scrollbar', //  scrollbar
        },
      });

      $(".jq-goTop").click(function (e) {  // 回頂部速率
        e.preventDefault();
        $("html,body").animate(
          {
            scrollTop: 0,
          },
          600
        );
      });

      $(".goTopBtn").hover(function() { 

        $(this).find("i, p").css("color", "#00654c");
    }, function() {
        $(this).find("i, p").css("color", "#00cc99");
    });

      $(window).scroll(function() { // 超過200顯示
        if ($(this).scrollTop() > 200) {
            if ($(".goTop").is(":hidden")) {
                $(".goTop").fadeIn(200); // 顯示
            }
        } else {
            if ($(".goTop").is(":visible")) {
                $(".goTop").fadeOut(200); // 隱藏
            }
        }
    });
});