
!(function(jQuery){
    var options = {
        opts:{
            lines: 13, // 花瓣数目
            length: 20, // 花瓣长度
            width: 5, // 花瓣宽度
            radius: 20, // 花瓣距中心半径
            scale: 1,
            corners: 1, // 花瓣圆滑度 (0-1)
            color: '#000', // 花瓣颜色
            opacity: 0.1,
            rotate: 0, // 花瓣旋转角度
            direction: 1, // 花瓣旋转方向 1: 顺时针, -1: 逆时针
            speed: 1, // 花瓣旋转速度
            trail: 60, // 花瓣旋转时的拖影(百分比)
            zIndex: 2e9, // spinner的z轴 (默认是2000000000)
            className: 'spinner', // spinner css 样式名称
            top: '50%', // spinner 相对父容器Top定位 单位 px
            left: '50%', // spinner 相对父容器Left定位 单位 px
            shadow: true, // 花瓣是否显示阴影
            hwaccel: false, //spinner 是否启用硬件加速及高速旋转
            position: 'absolute'
        },
        spinner:{

        },
        loading:null
    };


    function S4() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
    function guid() {
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    $.fn.cspin = function(o){
        o = $.extend(options['opts'],o);
        options['spinner'] = new Spinner(o);
        options['loading'] = $("<div class=Spin"+guid()+"></div>");
        $(this).append($(options['loading']));
        options['loading'].show();
        var target=options['loading'][0];
        options['spinner'].spin(target);
    }
    $.fn.destroySpin = function(){
        options['spinner'].spin();
        options['loading'].hide();
        $(options['loading']).remove();
        options['loading']= null;
    }

})(jQuery);