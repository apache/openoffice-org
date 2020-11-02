(function($)
{
    $.fn.easySlider = function(options)
    {
        // default configuration properties
        var defaults = {
            vertical:       false,
            speed:          800,
            ease:           'swing',
            auto:           false,
            pause:          2000,
            continuous:     false,
            numeric:        false,
            numericId:      'controls'
        };

        var options = $.extend(defaults, options);

        this.each(function()
        {
            var obj = $(this);

            // Fix for nested list items
            var ul = obj.children("ul");
            var li = ul.children("li");

            var s = li.length;
            var w = obj.width();
            var h = obj.height();

            var t = 0;
            var ts = s-1;
            var clickable = true;

            // Set obj overflow to hidden
            obj.css("overflow","hidden");

            // Set width/height of list items based on width/height of obj
            li.each(function() {
               if(options.vertical) $(this).height(h);
                else $(this).width(w);
            });

            // Float items to the left
            li.css('float', 'left');

            // Set width/height of ul
            if(options.vertical) ul.height(s*w);
            else ul.width(s*h);

            // Clone elements for continuous scrolling
            if(options.continuous)
            {
                if(options.vertical)
                {
                    ul.prepend(li.filter(":last-child").clone().css("margin-top","-"+ h +"px"));
                    ul.append(li.filter(":nth-child(1)").clone());
                    ul.height((s+1)*h);
                } else {
                    ul.prepend(li.filter(":last-child").clone().css("margin-left","-"+ w +"px"));
                    ul.append(li.filter(":nth-child(1)").clone());
                    ul.width((s+1)*w);
                }
            };

            if(options.numeric)
            {
                for(var i=0;i<s;i++)
                {
                    $(document.createElement("li"))
                        .attr('id',options.numericId + (i+1))
                        .html('<a rel="'+ i +'" href="#"><span>'+ (i+1) +'</span></a>')
                        .appendTo($("#"+ options.numericId))
                        .click(function(){
                            animate($("a",$(this)).attr('rel'),true);
                            return false;
                        });
                };
            }

            function setCurrent(i)
            {
                i = parseInt(i)+1;
                $("li", "#" + options.numericId).removeClass("current");
                $("li#" + options.numericId + i).addClass("current");
            };

            function adjust()
            {
                if(t>ts) t=0;
                if(t<0) t=ts;
                if(!options.vertical) {
                    ul.css("margin-left",(t*w*-1));
                } else {
                    ul.css("margin-top",(t*h*-1));
                }
                clickable = true;
                if(options.numeric) setCurrent(t);
            };

            function animate(dir,clicked)
            {
                if (clickable)
                {
                    clickable = false;
                    var ot = t;
                    switch(dir)
                    {
                        case "next":
                            t = (ot>=ts) ? (options.continuous ? t+1 : ts) : t+1;
                            break;
                        case "prev":
                            t = (t<=0) ? (options.continuous ? t-1 : 0) : t-1;
                            break;
                        case "first":
                            t = 0;
                            break;
                        case "last":
                            t = ts;
                            break;
                        default:
                            t = parseInt(dir);
                            break;
                    };

                    var diff = Math.abs(ot-t);
                    var speed = diff*options.speed;
                    if(!options.vertical) {
                        p = (t*w*-1);
                        ul.animate(
                            { marginLeft: p },
                            {
                                queue:false,
                                duration:speed,
                                easing:options.ease,
                                complete:adjust
                            }
                        );
                    } else {
                        p = (t*h*-1);
                        ul.animate(
                            { marginTop: p },
                            {
                                queue:false,
                                duration:speed,
                                easing:options.ease,
                                complete:adjust
                            }
                        );
                    };

                    if(clicked) clearTimeout(timeout);
                    if(options.auto && dir=="next" && !clicked){;
                        timeout = setTimeout(function(){
                            animate("next",false);
                        },diff*options.speed+options.pause);
                    };

                };
            };
            // init
            var timeout;
            if(options.auto){;
                timeout = setTimeout(function(){
                    animate("next",false);
                },options.pause);
            };

            if(options.numeric) setCurrent(0);

        });

    };
})(jQuery);
