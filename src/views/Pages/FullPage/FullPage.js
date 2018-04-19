import React, { Component } from 'react';
import $ from "jquery";
import jQuery from "jquery";

function loadJquery1() {
  jQuery(function ($) {
    $.fn.extend({
      showLoading: function () {
        $('.preloader').css('opacity', 1);
        $('.preloader').show();
      },
      hideLoading: function () {
        $('.preloader').css('opacity', 0);
        $('.preloader').hide();
      },
      isOverflow: function () {
        if ($(window).width() < 992) return true;
        var fontSize = $("html").css('font-size');
        switch (fontSize) {
          case '14px':
            return ($(window).height() < 535);
            break;
          case '16px':
            return ($(window).height() < 552);
            break;
          case '17px':
            return ($(window).height() < 600);
            break;
          case '18px':
            return ($(window).height() < 627);
            break;
          case '22px':
            return ($(window).height() < 734);
            break;
          case '27px':
            return ($(window).height() < 882);
            break;
          default:
            break;
        }
      },
      blurHeader: function () {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
          shrinkOn = 10,
          $headerEl = $('#masthead');

        if (distanceY > shrinkOn) {
          $headerEl.addClass("site-header--blur");
        } else {
          $headerEl.removeClass("site-header--blur");
        }
      }
    });
  });
}

function loadJquery(e) {
  e(document).ready(function () {
    function t(t) {
      1 == t.find("video").length && ($src = t.find("video").find("source:nth-child(1)").attr("data-src"), hostnameCDN = n($src), hostnameLocal = n(e(location).attr("href")), srcVideoLocal = $src.replace(hostnameCDN, hostnameLocal), t.find("video").find("source:nth-child(1)").attr("src", srcVideoLocal), t.find("video")[0].load(), t.find("video").on("loadeddata canplay", function () {
        t.find("img").removeClass("d-block").addClass("d-none"), t.find("video").removeClass("d-none").addClass("d-block")
      }))
    }

    function n(e) {
      var t = e.match(/^http:\/\/[^\/]+/);
      return t ? t[0] : null
    }
    var a = e(window).width() < 991;
    if (a) e("#section0").css("height", e(window).height()), e("img:not(.fullscreen-img, .lazy-bg, .tech-n-tool-img, .client-partner-img)").lazy({});
    else {
      e("img.lazy-bg").lazy();
      var i = window.location.hash.substr(1);
      "" != i && e.fn.showLoading()
    }
    var tooltips = ["Welcome", "Services ", "Swiss benefits ", "Exclusive team", "Portfolio", "Industry expertise", "Our clients", "Testimonials", "Technologies and tools", "Careers ", "Contact us", "Location", "Footer"];
    var o = function () {
      e("#fullpage").fullpage({
        anchors: ["welcome", "services", "swiss-benefits", "exclusiveness", "portfolio", "industry-expertise", "our-client", "testimonials", "techs-and-tools", "careers", "contact-us", "location", "footer"],
        navigation: !0,
        navigationPosition: "right",
        lazyLoading: !1,
        verticalCentered: !1,
        normalScrollElements: ".mCustomScrollBox, .selectize-dropdown",
        navigationTooltips: tooltips,
        onLeave: function (t, n, a) {
          switch (t) {
            case 1:
              e(".header-content").hide(), e(".header-content>div").removeClass("animate--delay-1500");
              break;
            case 2:
              e(".service").hide();
              break;
            case 3:
              e(".benefits").hide();
              break;
            case 4:
              e(".exclusiveness").hide();
              break;
            case 5:
              e(".portfolio").hide();
              break;
            case 6:
              e(".industry-expertise").hide();
              break;
            case 7:
              e(".our-client-content, .our-partner-content").hide(), ourClient.stop(), ourPartner.stop();
              break;
            case 8:
              e(".testimonial").hide(), Testimonial.stopRandom();
              break;
            case 9:
              e(".tech-and-tool-content").hide(), techAndTool.stop();
              break;
            case 10:
              e(".career-content").hide();
            case 11:
              e(".contact-us").hide(), e("*").filter(function () {
                return e(this).data("tooltipsterNs")
              }).tooltipster("hide")
          }
        },
        afterLoad: function (n, i) {
          switch (e.fn.hideLoading(), e(".mobile-pagination > .section-name").text(tooltips[i - 1]), e(".mobile-pagination .section-number").text(i + "/" + e(".fp-section").length), e(".fixed-tooltip").text(tooltips[i - 1]), 1 == i ? e("#fp-nav, .button-contact-us").hide() : e("#fp-nav, .button-contact-us").fadeIn(), i) {
            case 1:
              e(".header-content").show();
              break;
            case 2:
              e(".service").show();
              break;
            case 3:
              e(".benefits").show();
              break;
            case 4:
              e(".exclusiveness").show();
              break;
            case 5:
              e(".portfolio").show(), t(e(".portfolio .carousel-item:nth-child(1)"));
              break;
            case 6:
              e(".industry-expertise").show();
              break;
            case 7:
              e(".our-client-content, .our-partner-content").show(function () {
                e(".visible-elements img").lazy()
              }), ourClient.run(), ourPartner.run();
              break;
            case 8:
              e(".testimonial").show(), Testimonial.startRandom();
              break;
            case 9:
              e(".tech-and-tool-content").show(function () {
                e(".tech-and-tool-content__items img").lazy()
              }), techAndTool.run();
              break;
            case 10:
              e(".career-content").show();
              break;
            case 11:
              e(".contact-us").show()
          }
          a || (e(".fp-section:nth-child(" + i + ")").find("img").lazy({
            visibleOnly: !0
          }), e(".client-1").lazy())
        },
        afterRender: function () { },
        afterResponsive: function (e) { },
        afterResize: function () {
          e.fn.fullpage.setResponsive(e.fn.isOverflow())
        }
      })
    };
    a || (o(), e.fn.fullpage.setResponsive(e.fn.isOverflow())), window.addEventListener("scroll", e.fn.blurHeader), e(window).resize(function () {
      a = e(window).width() < 991, "undefined" == typeof e.fn.fullpage.destroy || e("#fullpage").hasClass("fp-destroyed") || (e.fn.fullpage.destroy("all"), e("#section0").css("height", e(window).height())), a || (o(), e.fn.fullpage.setResponsive(e.fn.isOverflow()))
    }), (document.documentMode || /Edge/.test(navigator.userAgent)) && (e(".lazy-bg").each(function () {
      var t = e(this);
      t.parent().css("background-image", "url(" + t.attr("data-src") + ")"), t.remove()
    }), e(".fullscreen-img").each(function (t) {
      var n = e(this);
      n.replaceWith(function () {
        return e('<div class="fullscreen-img client-' + (t + 1) + (0 == t ? " active" : "") + '"></div>').css("background-image", "url(" + n.attr("data-src") + ")")
      })
    })), e(".mobile-only.down-arrow-btn").on("click", function () {
      e("html,body").animate({
        scrollTop: e("#section0").height() - e("#masthead").height()
      })
    }), e(".service .tab-menu").click(function () {
      e(this).hasClass("active") || (e(".service .tab-menu.active").removeClass("active"), e(this).addClass("active"), e(".service .tab-content").hide(), e("." + e(this).attr("data-target")).show())
    }), e(".portfolio .tab-menu").click(function () {
      e(this).hasClass("active") || (e(".portfolio .tab-menu.active").removeClass("active"), e(this).addClass("active"), e(".portfolio .tab-content").hide(), e("." + e(this).attr("data-target")).show())
    });
    var r = e(".carousel-item").length;
    e(".highlight-tab-content .slider-prev").click(function (n) {
      currentItem = e(".carousel-item.active").index() + 1, e(".carousel-item.active").hide().removeClass("active"), e(".carousel-item__content-inner-detail.active").hide().removeClass("active"), $carouselItem = null, 1 == currentItem ? ($carouselItem = e(".carousel-item:nth-child(" + r + ")"), $carouselItem.fadeIn().addClass("active"), e(".carousel-item__content-inner-detail:nth-child(" + r + ")").fadeIn().addClass("active")) : ($carouselItem = e(".carousel-item:nth-child(" + (currentItem - 1) + ")"), $carouselItem.fadeIn().addClass("active"), e(".carousel-item__content-inner-detail:nth-child(" + (currentItem - 1) + ")").fadeIn().addClass("active")), t($carouselItem), e(".carousel-item.active .portfolio-photo").lazy()
    });
    e(".highlight-tab-content .slider-next").click(function (n) {
      currentItem = e(".carousel-item.active").index() + 1, e(".carousel-item.active").hide().removeClass("active"), e(".carousel-item__content-inner-detail.active").hide().removeClass("active"), $carouselItem = null, currentItem == r ? ($carouselItem = e(".carousel-item:nth-child(1)"), $carouselItem.fadeIn().addClass("active"), e(".carousel-item__content-inner-detail:nth-child(1)").fadeIn().addClass("active")) : ($carouselItem = e(".carousel-item:nth-child(" + (currentItem + 1) + ")"), $carouselItem.fadeIn().addClass("active"), e(".carousel-item__content-inner-detail:nth-child(" + (currentItem + 1) + ")").fadeIn().addClass("active")), t($carouselItem), e(".carousel-item.active .portfolio-photo").lazy()
    });
    e("#select-technology").selectize({
      allowEmptyOption: !1,
      create: !1,
      sortField: [{
        field: "text",
        direction: "asc"
      }, {
        field: "$score"
      }],
      highlight: !1,
      onChange: function (t) {
        e.fn.fullpage.setMouseWheelScrolling(!0)
      }
    });
    e("#select-industry").selectize({
      allowEmptyOption: !1,
      sortField: [{
        field: "text",
        direction: "asc"
      }, {
        field: "$score"
      }],
      create: !1,
      highlight: !1,
      onChange: function (t) {
        e.fn.fullpage.setMouseWheelScrolling(!0)
      }
    });
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && e(".selectize-input>input").attr("disabled", "disabled");
    var ourClient = {
      variables: {
        _interval: null
      },
      run: function () {
        this.stop(), this.variables._interval = setInterval(function () {
          function t(e, t) {
            for (var n = 0; n < e.length; n++)
              if (e[n] == t) return !0;
            return !1
          }

          function n(e) {
            var a = e[Math.floor(Math.random() * e.length)];
            return t(r, a) ? n(e) : (r.push(a), a)
          }

          function a(e) {
            var n = e[Math.floor(Math.random() * e.length)];
            return t(r, n) ? a(e) : (r.push(n), n)
          }
          e.fn.swap = function (t) {
            return t = t.jquery ? t : e(t), this.each(function () {
              e(document.createTextNode("")).insertBefore(this).before(t.before(this)).remove()
            })
          };
          for (var i = [0, 1, 2, 3, 4, 5, 6, 7], o = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], r = [], c = 0; c < 3; c++) e(".our-client-content__item").eq(n(i)).swap(e(".our-client-content__item").eq(a(o)))
        }, 3e3)
      },
      stop: function () {
        var e = this;
        clearInterval(e.variables._interval)
      }
    };
    var ourPartner = {
      variables: {
        _interval: null
      },
      run: function () {
        this.stop(), this.variables._interval = setInterval(function () {
          function t(e, t) {
            for (var n = 0; n < e.length; n++)
              if (e[n] == t) return !0;
            return !1
          }

          function n(e) {
            var a = e[Math.floor(Math.random() * e.length)];
            return t(r, a) ? n(e) : (r.push(a), a)
          }

          function a(e) {
            var n = e[Math.floor(Math.random() * e.length)];
            return t(r, n) ? a(e) : (r.push(n), n)
          }
          e.fn.swap = function (t) {
            return t = t.jquery ? t : e(t), this.each(function () {
              e(document.createTextNode("")).insertBefore(this).before(t.before(this)).remove()
            })
          };
          for (var i = [0, 1, 2, 3, 4, 5, 6, 7], o = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19], r = [], c = 0; c < 3; c++) e(".our-partner-content__item").eq(n(i)).swap(e(".our-partner-content__item").eq(a(o))), e(".visible-elements img").lazy()
        }, 3e3)
      },
      stop: function () {
        var e = this;
        clearInterval(e.variables._interval)
      }
    };
    var c = e(".fullscreen-img").length;
    e(".testimonial-content .slider-prev").click(function (e) {
      Testimonial.previousElement(), Testimonial.stopRandom(), Testimonial.startRandom()
    }), e(".testimonial-content .slider-next").click(function (e) {
      Testimonial.nextElement(), Testimonial.stopRandom(), Testimonial.startRandom()
    });
    var l = 0;
    var Testimonial = {
      startRandom: function () {
        Testimonial.stopRandom();
        var e = this;
        var randomTestimonial = setInterval(function () {
          e.nextElement()
        }, 5e3)
      },
      previousElement: function () {
        var currentItem = e(".fullscreen-img.active").index() + 1;
        e(".fullscreen-img.active").removeClass("active"), e(".testimonial-avatar-mobile.active").removeClass("active"), e(".client-quote.active").removeClass("active"), 1 == currentItem ? (e(".fullscreen-img:nth-child(" + c + ")").addClass("active"), e(".testimonial-avatar-mobile:nth-child(" + c + ")").addClass("active"), e(".client-quote:nth-child(" + c + ")").addClass("active")) : (e(".fullscreen-img:nth-child(" + (currentItem - 1) + ")").addClass("active"), e(".testimonial-avatar-mobile:nth-child(" + (currentItem - 1) + ")").addClass("active"), e(".client-quote:nth-child(" + (currentItem - 1) + ")").addClass("active")), e(".fullscreen-img.active, .testimonial-content__client-avatar>img").lazy({
          visibleOnly: !0
        }), l = 0
      },
      nextElement: function () {
        var currentItem = e(".fullscreen-img.active").index() + 1;
        e(".fullscreen-img.active").removeClass("active"), e(".testimonial-avatar-mobile.active").removeClass("active"), e(".client-quote.active").removeClass("active"), currentItem == c ? (e(".fullscreen-img:nth-child(1)").addClass("active"), e(".testimonial-avatar-mobile:nth-child(1)").addClass("active"), e(".client-quote:nth-child(1)").addClass("active")) : (e(".fullscreen-img:nth-child(" + (currentItem + 1) + ")").addClass("active"), e(".testimonial-avatar-mobile:nth-child(" + (currentItem + 1) + ")").addClass("active"), e(".client-quote:nth-child(" + (currentItem + 1) + ")").addClass("active")), e(".fullscreen-img.active, .testimonial-content__client-avatar>img").lazy({
          visibleOnly: !0
        }), l = 0
      },
      stopRandom: function () {
        "undefined" != typeof randomTestimonial && clearInterval(randomTestimonial)
      }
    };
    var s;
    e(".full-content>p").bind("touchstart", function (e) {
      e.preventDefault(), s = e.originalEvent.touches ? e.originalEvent.touches[0].pageY : e.pageY
    }), e(".full-content>p").bind("touchmove", function (t) {
      t.preventDefault();
      var n = t.originalEvent.touches ? t.originalEvent.touches[0].pageY : t.pageY;
      Math.abs(n - s) < 15 || (n > s ? (e(".full-content>p").mCustomScrollbar("scrollTo", "+=200"), 0 == l && e.fn.fullpage.moveTo("our-client")) : (e(".full-content>p").mCustomScrollbar("scrollTo", "-=200"), 100 == l && (e.fn.fullpage.moveTo("techs-and-tools"), l = 0)))
    });
    e(".full-content>p").mCustomScrollbar({
      setHeight: "17rem",
      contentTouchScroll: !1,
      callbacks: {
        onScroll: function () {
          l = this.mcs.topPct
        }
      }
    });
    e(".client-quote__full").click(function () {
      var t = e(this).parent().parent(),
        n = t.parent().children(".full-content");
      n.show(), t.hide(), Testimonial.stopRandom()
    }), e(".full-quote__back-button").click(function () {
      var t = e(this).parent(),
        n = t.parent().children(".short-content");
      t.hide(), n.show(), Testimonial.startRandom()
    });
    var techAndTool = {
      variables: {
        _interval: null
      },
      run: function () {
        techAndTool.stop(), this.variables._interval = setInterval(function () {
          function t(e, t) {
            for (var n = 0; n < e.length; n++)
              if (e[n] == t) return !0;
            return !1
          }

          function n(e) {
            var a = e[Math.floor(Math.random() * e.length)];
            return t(o, a) ? n(e) : (o.push(a), a)
          }
          e.fn.swap = function (t) {
            return t = t.jquery ? t : e(t), this.each(function () {
              e(document.createTextNode("")).insertBefore(this).before(t.before(this)).remove()
            })
          };
          for (var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], i = [16, 17, 18, 19], o = [], r = 0; r < 4; r++) e(".tech-and-tool-content__item").eq(n(a)).swap(e(".tech-and-tool-content__item").eq(i[r])), e(".tech-and-tool-content__items img").lazy()
        }, 3e3)
      },
      stop: function () {
        var e = this;
        clearInterval(e.variables._interval)
      }
    };
    e(".career-content-item-tab").click(function () {
      e(".career-content__detail").hide(), e(".career-content__tab-content").hide(), e(".career-content__tab").hide(), tab = e(this).attr("data-tab"), e("#" + tab).show(), e(".career-content__tab").show()
    }), e(".career-content__item__back-button").click(function () {
      e(".career-content__detail").show(), e(".career-content__tab-content").hide(), e(".career-content__tab").hide()
    })
    $.fn.fullpage.reBuild();
  })
};

function loadJquerySingle() {
  $(document).ready(function () {
    var tooltips = ['Contact us', 'Location', 'Footer'];
    var initFullpage = function () {
      if ($(window).width() > 768 || $(window).width() < 321) {
        $('#footer-mobile .footer').appendTo('.footer-section');
        $('#location-mobile .contact-info').appendTo('.contact-us-content__detail__form');
        $('#footer-mobile, #location-mobile').appendTo('body');
      } else {
        $('#footer-mobile, #location-mobile').appendTo('#fullpage');
        $('.footer-section .footer').appendTo('#footer-mobile');
        $('.footer-section .contact-info').appendTo('#location-mobile');
      }
      $('#fullpage').fullpage({
        anchors: ['contact-us', 'location', 'footer'],
        navigation: true,
        navigationPosition: 'right',
        normalScrollElements: '.selectize-dropdown',
        // responsiveHeight: 500,
        responsiveWidth: 321,
        verticalCentered: false,
        normalScrollElements: '.mCustomScrollBox, .selectize-dropdown',
        navigationTooltips: tooltips,
        onLeave: function (index, nextIndex, direction) {
          switch (index) {
            case 1:
              $('.contact-us').hide();
              $('*').filter(function () {
                return $(this).data('tooltipsterNs');
              }).tooltipster('hide');
              break;
            default:
              break;
          }
        },
        afterLoad: function (anchorLink, index) {
          $('.mobile-pagination > .section-name').text(tooltips[index - 1]);
          $('.mobile-pagination .section-number').text(index + '/' + $('.fp-section').length);
          $('.fixed-tooltip').text(tooltips[index - 1]);
          $('.fp-section').length === 1 ? $('#fp-nav').hide() : $('#fp-nav').show();
          switch (index) {
            case 1:
              $('.contact-us').show();
              break;
            default:
              break;
          }
        },
        afterResponsive: function (isResponsive) {
          //$.fn.fullpage.destroy('all');
        },
        afterResize: function () {
          $.fn.fullpage.setResponsive($.fn.isOverflow());
        }
      });
    }
    window.addEventListener('scroll', $.fn.blurHeader);
    initFullpage();
    // $.fn.fullpage.setResponsive($.fn.isOverflow());

    // $(window).resize(function () {
    //     if($(document.activeElement).attr('type') === 'text' || $(document.activeElement).attr('id') === 'enquiry') return;
    //     $.fn.fullpage.destroy('all');
    //     initFullpage();
    //     $.fn.fullpage.setResponsive($.fn.isOverflow());
    // });
  });
}

class FullPage extends Component {
  constructor(props) {
    console.log("location props:", props.location);
    super(props);
  }

  componentWillMount() {
    loadJquery1();
  }

  componentDidMount() {
    switch (this.props.location.pathname) {
      case '/home':
        loadJquery($);
        break;
      case '/contact':
        loadJquerySingle();
        break;
      default:
        loadJquery($);
        break;
    }
  }

  componentWillUnmount() {
    $.fn.fullpage.destroy("all");
  }

  render() {
    return (
      <div id="fullpage" ref="fullpage">
        {this.props.children}
        {this.props.location.pathname == '/contact' ? <link href="../../css/single.css" /> : ''}
      </div>
    );
  }
}

export default FullPage;