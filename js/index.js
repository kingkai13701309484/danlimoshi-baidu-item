$(function() {
  // 单例模式
  // 好处：1.可以进行模块间的通信
      //  2.系统中某个类的对象只能存在一个
      //  3.可以保护自己的属性和方法，不被污染

  // 鼠标滑过更多的效果
  // $(".nav span,.header_r").hover(function() {
  //   $(".header_r").show();
  // }, function() {
  //   $(".header_r").hide();
  // });
  var result={
    init:function(){
      var me=this;
      me.render();
      me.bind();
    },
    render:function(){
      var me=this;
      me.btn=$(".nav span,.header_r");
    },
    bind:function(){
      var me=this;
      me.btn.hover(function(){
        me.test();
      },function(){
        me.open();
      });
    },
    test:function(){
      $(".header_r").show();
    },
    open:function(){
      $(".header_r").hide();
    }
  }
  result.init();

  //鼠标点击导航
  // $(".content_t li").first().hover(function() {
  //   $(this).find("img").attr(
  //     "src", "images/my_1.png"
  //   );
  // }, function() {
  //   $(this).find("img").attr(
  //     "src", "images/my.png"
  //   );
  // });
  var nav={
    init:function(){
      var me=this;
      me.render();
      me.bind();
    },
    render:function(){
      var me=this;
      me.btn= $(".content_t li").first();
    },
    bind:function(){
      var me=this;
      me.btn.hover(function(){
        me.test();
      },function(){
        me.open();
      });
    },
    test:function(){
      $(this).find("img").attr(
        "src", "images/my_1.png"
      );
    },
    open:function(){
      $(this).find("img").attr(
        "src", "images/my.png"
      );
    }
  }
  nav.init();

  // $(".content_t li").each(function(index) {
  //   $(this).click(function() {
  //     if (index != 0) {
  //       $(".content_t li").first().find("img").attr(
  //         "src", "images/my.png"
  //       );
  //       $(".content_t li").first().mouseover(function() {
  //         $(this).find("img").attr(
  //           "src", "images/my_1.png"
  //         );
  //       });
  //       $(".content_t li").first().mouseout(function() {
  //         $(this).find("img").attr(
  //           "src", "images/my.png"
  //         );
  //       });
  //     } else {
  //       $(".content_t li").first().find("img").attr(
  //         "src", "images/my_1.png"
  //       );
  //       $(".content_t li").first().mouseout(function() {
  //         $(this).find("img").attr(
  //           "src", "images/my_1.png"
  //         );
  //       });
  //     }
  //     $(".content_t_hover").removeClass("content_t_hover");
  //     $(this).addClass("content_t_hover");
  //     $(".content_hide").removeClass("content_hide");
  //     $(".content_bb").eq(index).addClass("content_hide");
  //   });
  // });
  var content={
    init:function(){
      var me=this;
      me.render();
      me.bind();
    },
    render:function(){
      var me=this;
      me.btn= $(".content_t li");
    },
    bind:function(){
      var me=this;
      me.btn.each(function(index){
        $(this).click(function() {
          if (index != 0) {
            $(".content_t li").first().find("img").attr(
              "src", "images/my.png"
            );
            $(".content_t li").first().mouseover(function() {
              $(this).find("img").attr(
                "src", "images/my_1.png"
              );
            });
            $(".content_t li").first().mouseout(function() {
              $(this).find("img").attr(
                "src", "images/my.png"
              );
            });
          } else {
            $(".content_t li").first().find("img").attr(
              "src", "images/my_1.png"
            );
            $(".content_t li").first().mouseout(function() {
              $(this).find("img").attr(
                "src", "images/my_1.png"
              );
            });
          }
          $(".content_t_hover").removeClass("content_t_hover");
          $(this).addClass("content_t_hover");
          $(".content_hide").removeClass("content_hide");
          $(".content_bb").eq(index).addClass("content_hide");
        });
      });
    }
  }
  content.init();

  // 点击不使用皮肤
  // $(".skin_1_1").click(function() {

  //   $(".bg").find("img").attr({
  //     "src": ""
  //   });
  //   $(".logo").css("background", "");
  //   window.localStorage.clear();
  // });
  var skin={
    init:function(){
      var me=this;
      me.render();
      me.bind();
    },
    render:function(){
      var me=this;
      me.btn=$(".skin_1_1");
    },
    bind:function(){
      var me=this;
      me.btn.click(function(){
        me.test();
      });
    },
    test:function(){
      $(".bg").find("img").attr({
        "src": ""
      });
      $(".logo").css("background", "");
      window.localStorage.clear();
    }
  }
  skin.init();

  // 鼠标滑过改变搜索框里的两个图标
  // $(".position_1 img").hover(function() {
  //   $(this).attr("src", "images/record1.png");
  // }, function() {
  //   $(this).attr("src", "images/record.png");
  // });
  var record={
    init:function(){
      var me=this;
      me.render();
      me.bind();
    },
    render:function(){
      var me=this;
      me.btn= $(".position_1 img");
    },
    bind:function(){
      var me=this;
      me.btn.hover(function(){
        $(this).attr("src", "images/record1.png");
      },function(){
        $(this).attr("src", "images/record.png");
      });
    }
  }
  record.init();

  // $(".position_2 img").hover(function() {
  //   $(this).attr("src", "images/camera1.png");
  // }, function() {
  //   $(this).attr("src", "images/camera.png");
  // });
  var camera={
    init:function(){
      var me=this;
      me.render();
      me.bind();
    },
    render:function(){
      var me=this;
      me.btn= $(".position_2 img");
    },
    bind:function(){
      var me=this;
      me.btn.hover(function(){
        $(this).attr("src", "images/camera1.png");
      },function(){
        $(this).attr("src", "images/camera.png");
      });
    }
  }
  camera.init();

  // 鼠标滑过用户名显示内容

  // $(".nav li,.users").first().hover(function() {
  //   $(".users").show();
  // }, function() {
  //   $(".users").hide();
  // });
  var nav_users={
    init:function(){
      var me=this;
      me.render();
      me.bind();
    },
    render:function(){
      var me=this;
      me.btn= $(".nav li,.users").first();
    },
    bind:function(){
      var me=this;
      me.btn.hover(function(){
        me.test();
      },function(){
        me.open();
      });
    },
    test:function(){
      $(".users").show();
    },
    open:function(){
      $(".users").hide();
    }
  }
  nav_users.init();

  // $(".nav li,.user").eq(1).hover(function() {
  //   $(".user").show();
  // }, function() {
  //   $(".user").hide();
  // });
  var nav_user={
    init:function(){
      var me=this;
      me.render();
      me.bind();
    },
    render:function(){
      var me=this;
      me.btn= $(".nav li,.user").eq(1);
    },
    bind:function(){
      var me=this;
      me.btn.hover(function(){
        me.test();
      },function(){
        me.open();
      });
    },
    test:function(){
      $(".user").show();
    },
    open:function(){
      $(".user").hide();
    }
  }
  nav_user.init();

  // $(".users").hover(function() {
  //   $(".users").show();
  // }, function() {
  //   $(".users").hide();
  // });
  var users={
    init:function(){
      var me=this;
      me.render();
      me.bind();
    },
    render:function(){
      var me=this;
      me.btn= $(".users");
    },
    bind:function(){
      var me=this;
      me.btn.hover(function(){
        me.test();
      },function(){
        me.open();
      });
    },
    test:function(){
      $(".users").show();
    },
    open:function(){
      $(".users").hide();
    }
  }
  users.init();

  // $(".user").hover(function() {
  //   $(".user").show();
  // }, function() {
  //   $(".user").hide();
  // });
  var user={
    init:function(){
      var me=this;
      me.render();
      me.bind();
    },
    render:function(){
      var me=this;
      me.btn= $(".user");
    },
    bind:function(){
      var me=this;
      me.btn.hover(function(){
        me.test();
      },function(){
        me.open();
      });
    },
    test:function(){
      $(".user").show();
    },
    open:function(){
      $(".user").hide();
    }
  }
  user.init();

  // 点击回到顶部
  // $(".arrow").click(function() {
  //   $("html,body").animate({
  //     scrollTop: 0
  //   }, 200);
  // });
  var arrow={
    init:function(){
      var me=this;
      me.render();
      me.bind();
    },
    render:function(){
      var me=this;
      me.btn=$(".arrow");
    },
    bind:function(){
      var me=this;
      me.btn.click(function(){
        me.test();
      });
    },
    test:function(){
      $("html,body").animate({
        scrollTop: 0
      }, 200);
    }
  }
  arrow.init();

  // 换肤
  // $("#skin").click(function() {
  //   $(".skin").slideDown(500);
  // });
  var skin_down={
    init:function(){
      var me=this;
      me.render();
      me.bind();
    },
    render:function(){
      var me=this;
      me.btn=$("#skin");
    },
    bind:function(){
      var me=this;
      me.btn.click(function(){
        me.test();
      });
    },
    test:function(){
      $(".skin").slideDown(500);
    }
  }
  skin_down.init();

  // $(".skin_1_2,.outers").click(function() {
  //   $(".skin").slideUp(500);
  // });
  var skin_up={
    init:function(){
      var me=this;
      me.render();
      me.bind();
    },
    render:function(){
      var me=this;
      me.btn=$(".skin_1_2,.outers");
    },
    bind:function(){
      var me=this;
      me.btn.click(function(){
        me.test();
      });
    },
    test:function(){
      $(".skin").slideUp(500);
    }
  }
  skin_up.init();

  // 读取换肤
  window.onload = function() {
    var key = window.localStorage.getItem("key");
    if (key == null) {

      $(".bg").find("img").attr({
        "src": ""
      });

    } else if (key == 0) {

      $(".bg").find("img").attr({
        "src": "images/bg" + key + ".jpg"
      });
      bg();
    } else if (key == 1) {

      $(".bg").find("img").attr({
        "src": "images/bg" + key + ".jpg"
      });
      bg();
    } else if (key == 2) {

      $(".bg").find("img").attr({
        "src": "images/bg" + key + ".jpg"
      });
      bg();
    } else if (key == 3) {

      $(".bg").find("img").attr({
        "src": "images/bg" + key + ".jpg"
      });
      bg();
    }
    // 存储换肤
    $(".skin li").each(function(index) {
      $(this).click(function() {
        $(".bg").find("img").attr({
          "src": "images/bg" + index + ".jpg"
        });
        bg();
        window.localStorage.setItem("key", index);
      });

    });

  }  

  function bg() {
    $(".header,.content").css({
      background: "#fff",
      opacity: .94
    });
    $(".logo").css({
      background: "url(images/logo1.png) center center no-repeat",
      backgroundSize: "210px"
    });
  }

  // 滑过最后一个加载内容
  var dataImg1 = {
    "data": [{
      "src": "img_c.jpg"
    }, {
      "src": "img_c2.jpg"
    }, {
      "src": "img_c3.jpg"
    }, {
      "src": "img_c4.jpg"
    }, {
      "src": "img_c5.jpg"
    }, {
      "src": "img_c6.jpg"
    }, {
      "src": "img_c7.jpg"
    }, {
      "src": "img_c8.jpg"
    }, {
      "src": "img_c9.jpg"
    }, {
      "src": "img_c10.jpg"
    }, {
      "src": "img_c11.jpg"
    }]
  };

  window.onscroll = function() {
      // 加载内容
      if (scroll()) {
        $.each(dataImg1.data, function(index, value) {
          var dl = $("<dl>").appendTo($(".content_b1_l")),
            dt = $("<dt>").prependTo(dl);
          $("<dd>").appendTo(dl).addClass("content_b1_l_1").text("北京三里屯现“中性厕所” 标志为仨小人挤一块");
          $("<dd>").appendTo(dl).addClass("content_b1_l_2").text("腾讯新闻 06-17 17:49");
          $("<img>").appendTo(dt).attr("src", "images/" + $(value).attr("src"));
        });
      }
      // 点击回到顶部
      // window.onscroll = function() {
      // if($(window).scrollTop()>0){
      // $(".arrow").show();     
      // }else{
      //  $(".arrow").hide();   
      // }
      if ($(window).scrollTop() == 0) {
        $(".arrow").hide();
      } else {
        $(".arrow").show();
      }
      // }

    }

  // 判断什么时候加载内容
  function scroll() {
    var lastH = $(".content_b1_l dl").last().get(0).offsetTop + Math.floor($(".content_b1_l dl").last().outerHeight(true) / 2),
      documentH = $(document).height(),
      scrollH = $(window).scrollTop();
    return (lastH < documentH + scrollH) ? true : false;

  }



});