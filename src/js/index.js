import avalon from 'avalon2/dist/avalon'
import $ from 'jquery'
import 'normalize.css'
import 'indexless'
import 'aoscss'
import AOS from 'aos'

// 头部配置信息 headerName为头部导航显示信息，linkUrl为链接跳转路径
var headerConfig = [{
    headerName: '标题一',
    linkUrl: 'index2.html',
    childrenItem: [{
      headerName: '子标题一',
      linkUrl: 'index2.html'
    },{
      headerName: '子标题二',
      linkUrl: 'index2.html'
    }]
  },{
    headerName: '标题二',
    linkUrl: 'index2.html'
  },{
    headerName: '标题三',
    linkUrl: 'index2.html'
  },{
    headerName: '标题一',
    linkUrl: 'index2.html',
    childrenItem: [{
      headerName: '子标题一',
      linkUrl: 'index2.html'
    },{
      headerName: '子标题二',
      linkUrl: 'index2.html'
    }]
  }];
  
  
  // 头部组件信息，非开发人员不需要修改
  var ms_header = avalon.component('ms-header', {
    template: '<div class="ms-header">'+
              '<ul>'+
              '<li ms-for="($index, el) in @item">'+
              '<div ms-click="@onHandleClick">{{el.headerName}}</div>'+
              '<ul class="ms-header-list" :if="@el.childrenItem">'+
              '<li ms-for="($index, el) in el.childrenItem"><a ms-attr="{href: el.linkUrl}">{{el.headerName}}</a></li>'+
              '</ul>'+
              '</li>'+
              '</ul>'+
              '</div><div :class="[@updown]" ms-click="@updownClick"></div>',
    defaults: {
      updown: 'updown icon-reorder',
      item: headerConfig,
      onHandleClick: function (e) {
        $(e.target).parent().siblings("li").find("ul").slideUp()
        $(e.target).siblings("ul").slideToggle()
      },
      updownClick: function (e) {
        var _dom = e.target
        if ($(_dom).hasClass('down')) {
          $(".ms-header").slideDown()
        } else {
          $(".ms-header").slideUp()
        }
        $(_dom).toggleClass("down")
      },
      onReady: function(e){
        $("body").click(function(e){
          if($(e.target).hasClass("content")){
            $('.ms-header-list').slideUp()
          }
        })
      }
    }
  })
  
  var ms_updown = avalon.component('ms-updown', {
    template: '<div :class="[@updown]" ms-click="@updownClick"></div>',
    defaults: {
      updown: 'updown icon-reorder',
      updownClick: function (e) {
        var _dom = e.target
        if ($(_dom).hasClass('down')) {
          $(".ms-header").slideDown()
        } else {
          $(".ms-header").slideUp()
        }
        $(_dom).toggleClass("down")
      },
    }
  })
  
  // 对外修改头部信息接口,arr为数组类型，格式和配置信息相同
  function setHeaderItem (arr){
    ms_header.defaults.item = arr
  }
  AOS.init({
    easing: 'ease-out-back',
    duration: 800
  });
  
  
  

