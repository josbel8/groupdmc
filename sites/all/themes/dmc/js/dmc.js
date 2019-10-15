function slugify(text){
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

function ProcesaForma(url_rq){
    var datos =  jQuery.ajax({
                url: url_rq,
                data: '',
                dataType : 'json',
                type: 'POST',
                context: document.body,
                global: false,
                async:false,
                success: function(data) {
                    //~ console.log(data)
                    return data;
                }
            }).responseText;
    return JSON.parse(datos);
}

switch (document.location.hostname)
{
    case 'localhost':
        var localFolder =  document.location.pathname.split("/")[1];
        var rootFolder = document.location.origin + "/" + localFolder + "/";
        break;
    case 'www.groupdmc.com.ve':
        var rootFolder = '/';
        break;
    default:
        var rootFolder = '/';
        break;
}

jQuery(document).ready(function(){

    (function($) {

        // gif animado previo a la carga
        $(window).load(function() {
            // Animate loader off screen
            $(".se-pre-con").fadeOut("slow");
        });

        //slider

        var elem_slider = $('.view-id-slider_header').find('.small-12');
        elem_slider.parent().removeClass('row');
        elem_slider.removeClass('small-12').removeClass('columns')

        $('.legend-slider').each(function(){
            var mitad_ancho_caja = $(this).width()/2;
            $(this).css({'left':"calc(50% - "+mitad_ancho_caja+"px)"});
        });

        //menu principal

        //~ console.log($(window).width())

        if($(window).width()>640){

            var main_menu_elements = ProcesaForma(rootFolder + "json/menu_inicio")

            $("#main-menu>li").each(function(){

                var menu_height = "220px";

                var previous_anchor = 0;
                $(this).prevAll().each(function(){
                    previous_anchor = previous_anchor + $(this).width();
                });

                var first_submenu = $(this).find(".dropdown").first();
                if (first_submenu.get(0) != "undefined") {
                    first_submenu.css({'width':parseInt($('#main-menu').width())+"px",
                                'height':menu_height,"background-color": "rgba(25, 25, 25, 0.5)",
                                "left":"-"+ previous_anchor +"px"});

                    var father_anchor = [];
                    first_submenu.children().each(function(){
                        father_anchor.push($(this).find("a").width());
                    });

                    first_submenu.children().each(function(index, value){
                        $(this).find("a").css({'width':(Math.max.apply(null, father_anchor)+30)+"px",
                                                'text-align':'center','margin-top':'25px'});
                        $(this).find("a").first().css({'background-color':'#4E4E4E','color':'#fff'});

                        $(this).find("a").first().hover(function(){
                            $(this).css({"background-color":"#fff","color":"#4E4E4E"});
                            }, function(){
                            $(this).css({'background-color':'#4E4E4E','color':'#fff'});
                        });

                    });

                    first_submenu.find(".dropdown").each(function(){
                        if ($(this).get(0) != undefined) {
                            var children_anchor = parseInt($('#main-menu').width()-Math.max.apply(null, father_anchor)-20);
                            var size_brothers = $(this).children().size()-2;
                            if (size_brothers < 2){
                                size_brothers = 2;
                            }
                            var width_space = (children_anchor - 30) / size_brothers;

                            $(this).children().each(function(index, value){
                                $(this).find('a').css({'width':width_space,'height':menu_height,'top':'-1px'});
                                if (index>1){
                                    var slug_element = slugify(removeDiacritics($(this).find('a').html()));
                                    var menu_element = $(this).find('a');
                                    $.each(main_menu_elements.nodes, function(i, item) {
                                        if(slugify(removeDiacritics(item.node.title)) == slug_element) {
                                            menu_element.html("<div class='cuadro_submenu'><div class='wrap-menu-img'><img class='grow' src='"
                                                                + item.node.field_image.src +
                                                                "'></img></div><div style='text-transform:capitalize;font-family:\"Source Sans Pro\",\"sans-serif\";font-weight:600;font-size:1.2em;'>"
                                                                + menu_element.html() +
                                                                "</div></div>");
                                        }
                                    })
                                    $(this).find('a').css({'left':(((index-2)*width_space+30))});
                                }
                            });
                            $(this).css({'margin-left': "-" + children_anchor +"px"});

                            if($.browser.mozilla){
                                $(this).css({'margin-left': (Math.max.apply(null, father_anchor)+20) +"px"});
                            }
                        }
                    });
                }
            });

            $("a:contains('Turismo')").css({'top':"80px"});

            $("#main-menu>li").hover(function(){
                $("#main-menu .dropdown").before("<br>");
                $(this).find('a').first().css({"color":"#BFBFBF"});
                $(this).find(".dropdown").first().find(".first a").first().focus();
                $(this).find(".dropdown").first().find(".first a").first().css({"background-color":"#fff","color":"#4E4E4E"});

                $("#main-menu>li>.dropdown").find('.last a').hover(function(){
                    $(this).parent().prev().find("a").blur();
                    //~ $(this).parent().prev().find("a").css({'background-color':'#4E4E4E','color':'#fff'});
                }, function(){
                    //~ //nada;
                });
            }, function(){
                    $("#main-menu .dropdown").prev().remove();
                    $(this).find('a').first().css({"color":"#fff"});
                    $(this).find(".dropdown").first().find(".first a").first().blur();
                    $(this).find(".dropdown").first().find(".first a").first().css({'background-color':'#4E4E4E','color':'#fff'});
            });

            $(".cuadro_submenu").hover(function(){
                $(this).find('.grow').css('transform','scale(1.1)');
            }, function(){
                    $(this).find('.grow').css('transform','scale(1)');
                }
            );

            $(".cuadro_submenu").closest('a').hover(function(){
                $(this).closest('ul').prevAll().css({"background-color":"#fff","color":"#4E4E4E"});
            }, function(){
                    var brother_hover = false;
                    $(this).closest('li').siblings().each(function(){
                        if($(this).is(":hover")){
                            brother_hover = true;
                        }
                    });
                    if (brother_hover==false){
                        $(this).closest('ul').prevAll().css({'background-color':'#4E4E4E','color':'#fff'});
                    }
                }
            );

            //Ancho del menu
            var mitad_ancho_menu = parseInt($('.top-bar').width())/2;
            $('.top-bar').css({'margin-left':"calc(50% - "+mitad_ancho_menu+"px)"});

            //fondo iconos corporativo
            var suma_altos = 0
            $('.block-views-iconos-corporativo-block .views-row').each(function(){
                suma_altos = suma_altos + 95 + $(this).children().first().height();
            });
            suma_altos = suma_altos;
            $('.block-views-iconos-corporativo-block .views-responsive-grid').css('height',suma_altos);

            //fondo iconos social
            var suma_altos = 0
            $('.block-views-iconos-social-corporativo-block .views-row').each(function(){
                suma_altos = suma_altos  + 95 + $(this).children().first().height();
            });
            suma_altos = suma_altos;
            $('.block-views-iconos-social-corporativo-block .views-responsive-grid').css('height',suma_altos);

            // menu restaurant unidad de negocio

            var ancho_izq = $(".node-type-unidad-de-negocio .views-field-field-img-izq img").width();
            $(".node-type-unidad-de-negocio .views-field-field-img-der").css('width',ancho_izq);
            $(".node-type-unidad-de-negocio .views-field-field-menu li img").first().css('width',ancho_izq);

        } else {

            var mitad_pantalla = $(window).width()/2;

            //main menu small
            $('#main-menu').children().each(function(){
                $(this).removeClass('has-dropdown').removeClass('not-click');
            });

            //prensa small
            var p;
            $('.view-id-prensa_slider ul li').each(function(){
                p = $(this).find('.panel-col-last .views-field-field-image').detach();
                $(this).find('.panel-col-last .views-field-field-image').remove();
                $(this).find('h2').append(p);
            });

            //pre footer small
            //~ $('.view-pre-footer-front .text-pre-footer').css({'font-size':"0.8em"});

            $('.not-front .node-slider-homepage .image').css({'max-width':$(window).width()});
            $('#pre-footer .image').css({'max-width':$(window).width()});


            $('.view-bloque-horarios table').css({'width':$(window).width(),'left':"calc(50% - "+mitad_pantalla+"px)"});

            //fondo iconos social corporativo
            var suma_altos = 0
            $('.block-views-iconos-corporativo-block .views-row').each(function(){
                suma_altos = suma_altos + $(this).children().first().height();
            });
            suma_altos = suma_altos * 2 + 30;
            $('.block-views-iconos-corporativo-block .views-responsive-grid').css('height',suma_altos);

            var suma_altos = 0
            $('.block-views-iconos-social-corporativo-block .views-row').each(function(){
                suma_altos = suma_altos + $(this).children().first().height();
            });
            suma_altos = suma_altos * 2 + 60;
            $('.block-views-iconos-social-corporativo-block .views-responsive-grid').css('height',suma_altos);

            // alto texto iconos sociales

            var heights = $(".block-views-iconos-social-corporativo-block .views-field-title").map(function()
            {
                return $(this).height();
            }).get();
            maxHeight = Math.max.apply(null, heights);
            $(".block-views-iconos-social-corporativo-block .views-field-title").each(function(){
                $(this).css('height',maxHeight);
            });
        }

        //webform

        $('button.webform-next, button.webform-submit').removeClass('secondary radius').addClass('tiny').css({'background-color':'#4E4E4E','color':'#fff'});
        $('button.webform-next, button.webform-submit').hover(function(){
                        $(this).css({"background-color":"#BFBFBF","color":"#4E4E4E"});
                        }, function(){
                        $(this).css({'background-color':'#4E4E4E','color':'#fff'});
                    });

        //Pre-footer
        var mitad_ancho_caja = ($('.view-pre-footer-front .text-pre-footer').width() + 30) /2;
        $('.view-pre-footer-front .text-pre-footer').css({'left':"calc(50% - "+mitad_ancho_caja+"px)"});

        //Seccion de logos
        //~ $('.view-bloque-logos-footer .col-first').find('img').css({'width':'25em'});

        //prensa

        $('.prensa-body-home p, .prensa-body-home div').each(function(){
            $(this).removeAttr('style').removeAttr('align');
            $(this).children().each(function(){
                $(this).removeAttr('style').removeAttr('align');
            });
        });

        //webforms

        $("select option:contains('- Seleccionar -')").each(function(){
            //~ $(this).html('&#x25BE;')
            $(this).html('')
        });

        $("select option:contains('- Ninguno -')").each(function(){
            //~ $(this).html('&#x25BE;')
            $(this).html('')
        });

        $("select option:contains('Día')").each(function(){
            $(this).html('');
            $(this).parent().css('border-right','none');
        });

        $("select option:contains('Mes')").each(function(){
            $(this).html('');
            $(this).parent().css('border-right','none');
            $(this).parent().css('border-left','none');

        });

        $("select option:contains('Año')").each(function(){
            $(this).html('');
            $(this).parent().css('border-left','none');
        });

        // header unidad de negocio

        if($(".node-type-unidad-de-negocio").find('.button-group').html()!=''){
            var botones = $(".node-type-unidad-de-negocio").find('.button-group').detach();
            botones.find('a').removeClass('small').addClass('tiny');
            botones.appendTo(".header-unidad-negocio");
        }

        $(".node-type-unidad-de-negocio").find('.body p').removeAttr('style');


        // menu restaurant unidad de negocio

        var h_der = parseInt($(".node-type-unidad-de-negocio .views-field-field-img-der").height());
        var h_pq = parseInt($(".node-type-unidad-de-negocio .clearing-featured-img").height());

        if ((h_der != 0) && (h_pq != 0)){
            var dif_h = h_der - h_pq;
            var dif_h_text = h_der - h_pq + 50;
            $(".node-type-unidad-de-negocio .views-field-field-menu").css({"margin-top": dif_h+"px"});
            $(".node-type-unidad-de-negocio .view-restaurant-menu-block .views-field-nothing").css({"margin-top": dif_h_text+"px"});
        }

        $('.ver-menu').on('click',function(event){
            event.stopImmediatePropagation();
            $('.clearing-featured-img').addClass('visible');
            $('.clearing-featured-img img').click();
            $(this).hide();
            $('.clearing-close').on('click',function(event){
                //~ event.stopImmediatePropagation();
                $('.ver-menu').show();
            });
        });

        $('.clearing-featured-img').on('click',function(event){
            //~ event.stopImmediatePropagation();
            $('.ver-menu').hide();
            $('.clearing-close').on('click',function(event){
                //~ event.stopImmediatePropagation();
                $('.ver-menu').show();
            });
        });

        // ventana modal

        $('.close-reveal-modal').on('click',function(){
            $(".reveal-modal-bg").hide()
            $("#status-messages").attr("class", "reveal-modal").unbind().fadeOut()
            //~ $('#status-messages').foundation('reveal', 'close');
        });


        // posicion del menu ppal

        if($(window).width()>1900){
            var ancho = parseInt($(window).width()) * 0.00525;
            $('.top-bar').css({'top':ancho+"em"});

        } else if (($(window).width()>641)){
            var ancho = parseInt($(window).width()) * 0.00585;
            $('.top-bar').css({'top':ancho+"em"});
        }

        // logo
        var mitad_ancho_logo = $('#logo img').width()/2;
        $('#logo img').css({'left':"calc(50% - "+mitad_ancho_logo+"px)"});

        $('.webform-client-form-8 .day.form-select, .webform-client-form-8 .month.form-select, .webform-client-form-8 .year.form-select, \
           .webform-client-form-83 .day.form-select, .webform-client-form-83 .month.form-select, .webform-client-form-83 .year.form-select, \
           .webform-client-form-112 .day.form-select, .webform-client-form-112 .month.form-select, .webform-client-form-112 .year.form-select, \
           .webform-client-form-113 .day.form-select, .webform-client-form-113 .month.form-select, .webform-client-form-113 .year.form-select, \
           .webform-client-form-99 .selector select \
           ').on('focus mousedown',function(event){
            if ($.browser.webkit||$.browser.msie) {
                event.preventDefault();
            }else{
                this.blur();
                window.focus();
            }
        });

        //tarjeta de invitacion
        var mitad_ancho_tarjeta = parseInt($('.internal-prefooter .views-field-nothing .field-content').width()+90)/2;
        $('.internal-prefooter .views-field-nothing .field-content').css({'left':"calc(50% - "+mitad_ancho_tarjeta+"px)"});

        var mitad_ancho_tarjeta = parseInt($('#pre-footer .field-name-field-body').width()+90)/2;
        $('#pre-footer .field-name-field-body').css({'left':"calc(50% - "+mitad_ancho_tarjeta+"px)"});

        //mailing list
        var mitad_mailing_list = parseInt($('.block-mailing-list').width())/2;
        $('.block-mailing-list').css({'margin-left':"calc(50% - "+mitad_mailing_list+"px)"});

        $('.block-mailing-list').find('#edit-submit--3').addClass('tiny');
        $('.block-mailing-list').find('.form-item-name label').remove();
        $('.block-mailing-list').find('.form-item-mail label').remove();
        $('.block-mailing-list').find('.form-item-name input').attr('placeholder','Nombre').prop("required",true);
        $('.block-mailing-list').find('.form-item-mail input').attr('placeholder','Email').prop("required",true);
        $('#edit-submit--2').html('Enviar');



//~ .webform-client-form-75 .month.form-select,
//~ .webform-client-form-75 .year.form-select
//~ {
    //~ min-width: 4em;
//~ }

        //~ //resize
        //~ var lastWidth = $(window).width();
        //~ $(window).resize(function(){
           //~ if($(window).width()!=lastWidth){
              //~ //execute code here.
              //~ lastWidth = $(window).width();
            //~ }
            //~ console.log(lastWidth);
        //~ });

        //~ var lastHeight = $(window).height();
        //~ $(window).resize(function(){
           //~ if($(window).height()!=lastHeight){
              //~ //execute code here.
              //~ lastHeight = $(window).height();
            //~ }
            //~ console.log(lastHeight);
        //~ });


        // range slider

        $('input[type="range"]').rangeslider();
        $('input[type="range"]').rangeslider('destroy');
        $('input[type="range"]').rangeslider('update', true);

        dir = window.location.href;
        dir = dir.split("/");
        dir = dir[dir.length-1];

        if ((dir =='dmc-catering') || (dir =='dmc-catering#') || (dir =='dmc-catering#webform-client-form-99')){
            $('.view-espacios-por-rango').before('<h2 class="ev-asistentes">¿Cuántas personas asistirán?</h2> \
                                                    <div style="text-align:center;padding: 30px 20% 30px 20%;">\
                                                        <input type="range" min="0" max="160" step="5" value="0">\
                                                        <br><output id="rs-output">0</output><br><br>\
                                                        <a href="#webform-client-form-99" class="sol_presupuesto button tiny">Solicita tu presupuesto</a>\
                                                    </div>\
                                                    <hr><h2 class="ev-asistentes">Nuestros espacios</h2>');
            $('.view-id-espacios_por_rango').after("<div class='plus-range'>Para información sobre más locaciones, contacta a DMC Catering</div>");
        } else if ((dir =='dmc-planner') ||(dir =='dmc-planner#') || (dir =='dmc-planner#webform-client-form-106')){
            $('.view-espacios-por-rango').before('<h2 class="ev-asistentes">¿Cuántas personas asistirán?</h2> \
                                                    <div style="text-align:center;padding: 30px 20% 30px 20%;">\
                                                        <input type="range" min="0" max="160" step="5" value="0">\
                                                        <br><output id="rs-output">0</output><br><br>\
                                                        <a href="#webform-client-form-106" class="sol_presupuesto button tiny">Solicita tu presupuesto</a>\
                                                    </div>\
                                                    <hr><h2 class="ev-asistentes">Nuestros espacios</h2>');
            $('.view-id-espacios_por_rango').after("<div class='plus-range'>Para información sobre más locaciones, contacta a DMC Planner</div>");
        }

        $('input[type=range]')
            .rangeslider({
              polyfill: false
            });

        var output = document.querySelectorAll('output')[0];
        $(document).on('input', 'input[type="range"]', function(e) {
            output.innerHTML = e.currentTarget.value;
        });

        $('input[type="range"]').on('change',function(){
            $('#edit-field-asistentes-value').val($(this).val());
            $('#edit-submit-espacios-por-rango').click();
        });

        // detener otros videos reproduciendose
        $('.iconButton.play').on('click',function(event){
            if ($(this).is('div')){
                $('button.iconButton.pause').not($(this).closest('.ng-isolate-scope').prev().find('.iconButton').get(0)).each(function(){
                    $(this).click();
                });
            }
            if ($(this).is('button')){
                if(event.isTrigger!=true) {
                    $('button.iconButton.pause').not(this).each(function(){
                        $(this).click();
                    });
                }
            }
        });

        // zurb clearing parche para poner caption

        $('.clearing-thumbs.clearing-feature').find('li').each(function(){
            $(this).find('img').attr('data-caption',$(this).find('img').attr('alt'));
        });


        // cambio tamanio ventana

        $(window).resize(function(){

            //menu
            if($(window).width()>1900){
                var ancho = parseInt($(window).width()) * 0.00525;
                $('.top-bar').css({'top':ancho+"em"});
            } else{
                var ancho = parseInt($(window).width()) * 0.00585;
                $('.top-bar').css({'top':ancho+"em"});
            }

            //logo
            var mitad_ancho_logo = $('#logo img').width()/2;
            $('#logo img').css({'left':"calc(50% - "+mitad_ancho_logo+"px)"});

            //ver menu

            var ancho_izq = $(".node-type-unidad-de-negocio .views-field-field-img-izq img").width();
            $(".node-type-unidad-de-negocio .views-field-field-img-der").css('width',ancho_izq);
            $(".node-type-unidad-de-negocio .views-field-field-menu li img").first().css('width',ancho_izq);

            h_der = parseInt($(".node-type-unidad-de-negocio .views-field-field-img-der").height());
            h_pq = parseInt($(".node-type-unidad-de-negocio .clearing-featured-img").height());

            if ((h_der != 0) && (h_pq != 0)){
                dif_h = h_der - h_pq;
                dif_h_text = h_der - h_pq + 50;
                $(".node-type-unidad-de-negocio .views-field-field-menu").css({"margin-top": dif_h+"px"});
                $(".node-type-unidad-de-negocio .view-restaurant-menu-block .views-field-nothing").css({"margin-top": dif_h_text+"px"});
            }
        });

        //remuevo icono de tripadvisor a tours
        if (dir =='hoteleria-y-turismo'){
            $('.views-row-2').find('.fa.fa-tripadvisor').remove();
        }

        if ((dir =='hoteleria-y-turismo') || (dir =='alimentos-y-bebidas') || (dir =='eventos-y-entretenimiento')) {
            $('#page-title').remove();
        }



    })(jQuery);

});