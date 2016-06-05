// ////////////////////////////// Evite errores de consola en los navegadores que carecen de una consola.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
// //////////////////////////////



// ////////////////////////////// jQuery Easing - v1.3 - 2008
// ////////////////////////////// http://gsgd.co.uk/sandbox/jquery/easing/ 
// Configuración ---> t: current time, b: begInnIng value, c: change In value, d: duration
// Eliminados los metodos "_elastic_"
// Conflicto con jquery "jQuery.easing [jQuery.easing.def]" error
// Arreglado cambiando el método swing a jswing ¿? y comentando la siguiente linea.

jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});
// ////////////////////////////// jQuery Easing




// ////////////////////////////// Lava Lamp - v1.0.6 - 08/03/14
// ////////////////////////////// http://lavalamp.magicmediamuse.com/
(function(e){var t={init:function(t){var i={easing:"swing",duration:700,margins:false,setOnClick:false,activeObj:".active",autoUpdate:false,updateTime:100,enableHover:true};var t=e.extend({},i,t);return this.each(function(){var i=t.easing;var s=t.duration;var o=t.margins;var u=t.setOnClick;var a=t.activeObj;var f=t.autoUpdate;var l=t.updateTime;var c=t.enableHover;var h=e(this);var p=h.children();var d=h.children(a);if(d.length==0){d=p.eq(0)}h.data({easing:i,duration:s,margins:o,setOnClick:u,active:d,enableHover:c,isAnim:false});h.addClass("lavalamp").css({position:"relative"});var v=e('<div class="lavalamp-object" />').prependTo(h).css({position:"absolute"});p.addClass("lavalamp-item").css({zIndex:5,position:"relative"});var m=d.outerWidth(o);var g=d.outerHeight(o);var y=d.position().top;var b=d.position().left;var w=d.css("marginTop");var E=d.css("marginLeft");if(!o){E=parseInt(E);w=parseInt(w);b=b+E;y=y+w}v.css({width:m,height:g,top:y,left:b});var S=false;n=function(){var t=e(this);S=true;h.lavalamp("anim",t)};r=function(){var e=h.data("active");S=false;h.lavalamp("anim",e)};if(c){h.on("mouseenter",".lavalamp-item",n);h.on("mouseleave",".lavalamp-item",r)}if(u){p.click(function(){d=e(this);h.data("active",d).lavalamp("update")})}if(f){setInterval(function(){var e=h.data("isAnim");if(S==false&&e==false){h.lavalamp("update")}},l)}})},destroy:function(){return this.each(function(){var t=e(this);var i=t.children(".lavalamp-item");var s=t.data("enableHover");if(s){t.off("mouseenter",".lavalamp-item",n);t.off("mouseleave",".lavalamp-item",r)}t.removeClass("lavalamp");i.removeClass("lavalamp-item");t.children(".lavalamp-object").remove();t.removeData()})},update:function(){return this.each(function(){var t=e(this);var n=t.children(":not(.lavalamp-object)");var r=t.data("active");var i=t.children(".lavalamp-object");n.addClass("lavalamp-item").css({zIndex:5,position:"relative"});t.lavalamp("anim",r)})},anim:function(e){var t=this;var n=t.data("duration");var r=t.data("easing");var i=t.data("margins");var s=t.children(".lavalamp-object");var o=e.outerWidth(i);var u=e.outerHeight(i);var a=e.position().top;var f=e.position().left;var l=e.css("marginTop");var c=e.css("marginLeft");if(!i){c=parseInt(c);l=parseInt(l);f=f+c;a=a+l}t.data("isAnim",true);s.stop(true,false).animate({width:o,height:u,top:a,left:f},n,r,function(){t.data("isAnim",false)})}};e.fn.lavalamp=function(n){if(t[n]){return t[n].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof n==="object"||!n){return t.init.apply(this,arguments)}else{e.error("Method "+n+" does not exist on jQuery.lavalamp")}};var n,r})(jQuery)
// ////////////////////////////// Lava Lamp





// ////////////////////////////// POPTROX MODAL | jquery.poptrox.js v2.5.0 |
// ////////////////////////////// http://n33.co // Adaptado para i-N6 //
; (function($) {

	// Disables selection
		$.fn.poptrox_disableSelection = function() { return $(this).css('user-select', 'none').css('-khtml-user-select', 'none').css('-moz-user-select', 'none').css('-o-user-select', 'none').css('-webkit-user-select', 'none'); }

	// Poptrox prototype method
		$.fn.poptrox = function(options) {
			// Handle no elements.
				if (this.length == 0)
					return $(this);
			// Handle multiple elements.
				if (this.length > 1) {
					for (var i=0; i < this.length; i++)
						$(this[i]).poptrox(options);
					return $(this);
				}

			// Settings
				var settings = $.extend({

					preload:						false,						/* If true, preload fullsize images in the background */
					baseZIndex:						1000,						/* Base Z-Index */
					fadeSpeed:						300,						/* Global fade speed */
					overlayColor:					'#000000',					/* Overlay color */
					overlayOpacity:					0.7,						/* Overlay opacity */
					overlayClass:					'poptrox-overlay',			/* Overlay class */
					windowMargin:					50,							/* Window margin size (in pixels; only comes into play when an image is larger than the viewport) */
					windowHeightPad:				0,							/* Window height pad */
					selector:						'a',						/* (a) Anchor tag selector */
					caption:						null,						/* Caption settings (see docs) */
					parent:							'body',						/* Parent selector (ie. where all the popup/overlay stuff gets added). */
					popupSpeed:						300,						/* Popup (resize) speed */
					popupWidth:						200,						/* Popup width */
					popupHeight:					100,						/* Popup height */
					popupIsFixed:					false,						/* If true, popup won't resize to fit images */
					useBodyOverflow:				false,						/* If true, the BODY tag is set to overflow: hidden when the popup is visible */
					usePopupEasyClose:				true,						/* If true, popup can be closed by clicking on it anywhere */
					usePopupForceClose:				false,						/* If true, popup can be closed even while content is loading */
					usePopupLoader:					true,						/* If true, show the popup loader */
					usePopupCloser:					true,						/* If true, show the popup closer button/link */
					usePopupCaption:				false,						/* If true, show the popup image caption */
					usePopupNav:					false,						/* If true, show (and use) popup navigation */
					usePopupDefaultStyling:			true,						/* If true, default popup styling will be applied (background color, text color, etc) */
					popupBackgroundColor:			'#FFFFFF',					/* (Default Style) Popup background color (when usePopupStyling = true) */
					popupTextColor:					'#000000',					/* (Default Style) Popup text color (when usePopupStyling = true) */
					popupLoaderTextSize:			'2em',						/* (Default Style) Popup loader text size */
					popupCloserBackgroundColor:		'#ff5556',					/* (Default Style) Popup closer background color (when usePopupStyling = true) */
					popupCloserTextColor:			'#FFFFFF',					/* (Default Style) Popup closer text color (when usePopupStyling = true) */
					popupCloserTextSize:			'40px',						/* (Default Style) Popup closer text size */
					popupPadding:					10,							/* (Default Style) Popup padding (when usePopupStyling = true) */
					popupCaptionHeight:				40,							/* (Default Style) Popup height of caption area */
					popupCaptionTextSize:			null,						/* (Default Style) Popup caption text size */
					popupBlankCaptionText:			'(untitled)',				/* Applied to images that don't have captions (when captions are enabled) */
					popupCloserText:				'&#215;',					/* &#215; Popup closer text <i class="fa fa-times-circle-o"></i> */
					popupLoaderText:				'&bull;&bull;&bull;&bull;',	/* Popup loader text */
					popupClass:						'poptrox-popup',			/* Popup class */
					popupSelector:					null,						/* (Advanced) Popup selector (use this if you want to replace the built-in popup) */
					popupLoaderSelector:			'.loader',					/* (Advanced) Popup Loader selector */
					popupCloserSelector:			'.closer',					/* (Advanced) Popup Closer selector */
					popupCaptionSelector:			'.caption',					/* (Advanced) Popup Caption selector */
					popupNavPreviousSelector:		'.nav-previous',			/* (Advanced) Popup Nav Previous selector */
					popupNavNextSelector:			'.nav-next',				/* (Advanced) Popup Nav Next selector */
					onPopupClose:					null,						/* Called when popup closes */
					onPopupOpen:					null						/* Called when popup opens */
				}, options);
				
			// Variables
				var	$this = $(this),
					$body = $('body'),
					$overlay = $('<div class="' + settings.overlayClass +  '"></div>'),
					$window = $(window);
				
				var	windowWidth,
					windowHeight,
					queue = [],
					navPos = 0,
					isLocked = false,
					cache = new Array();
				
				function updateWH() {

					windowWidth = $(window).width();
					windowHeight = $(window).height() + settings.windowHeightPad;

					var dw = Math.abs($popup.width() - $popup.outerWidth()), dh = Math.abs($popup.height() - $popup.outerHeight());
					var nw = $x.width(), nh = $x.height();
					var maxw = windowWidth - (settings.windowMargin * 2) - dw, maxh = windowHeight - (settings.windowMargin * 2) - dh;

					$popup
						.css('min-width', settings.popupWidth)
						.css('min-height', settings.popupHeight);

					$pic.children()
						.css('max-width', maxw)
						.css('max-height', maxh);
				}

				// Disable unused features
					if (!settings.usePopupLoader)
						settings.popupLoaderSelector = null;
					if (!settings.usePopupCloser)
						settings.popupCloserSelector = null;
					if (!settings.usePopupCaption)
						settings.popupCaptionSelector = null;
					if (!settings.usePopupNav) {
						settings.popupNavPreviousSelector = null;
						settings.popupNavNextSelector = null;
					}

				// Get popup
					var $popup;
				
					if (settings.popupSelector)
						$popup = $(settings.popupSelector);
					else
						$popup = $('<div class="' + settings.popupClass + '">' + (settings.popupLoaderSelector ? '<div class="loader">' + settings.popupLoaderText + '</div>' : '') + '<div class="pic"></div>' + (settings.popupCaptionSelector ? '<div class="caption"></div>' : '') + (settings.popupCloserSelector ? '<span class="closer">' + settings.popupCloserText + '</span>' : '') + (settings.popupNavPreviousSelector ? '<div class="nav-previous"></div>' : '') + (settings.popupNavNextSelector ? '<div class="nav-next"></div>' : '') + '</div>');

				// Get popup components
					var	$pic = $popup.find('.pic'),
						$x = $(),
						$loader = $popup.find(settings.popupLoaderSelector),
						$caption = $popup.find(settings.popupCaptionSelector),
						$closer = $popup.find(settings.popupCloserSelector),
						$nav_next = $popup.find(settings.popupNavNextSelector),
						$nav_previous = $popup.find(settings.popupNavPreviousSelector),
						$nav = $nav_next.add($nav_previous);

				// Apply default styling?
					if (settings.usePopupDefaultStyling) {
						
						$popup
							.css('background', settings.popupBackgroundColor)
							.css('color', settings.popupTextColor)
							.css('padding', settings.popupPadding + 'px');
							
						if ($caption.length > 0) {
							
							$popup
								.css('padding-bottom', settings.popupCaptionHeight + 'px');
							
							$caption
								.css('position', 'absolute')
								.css('left', '0')
								.css('bottom', '0')
								.css('width', '100%')
								.css('text-align', 'center')
								.css('height', settings.popupCaptionHeight + 'px')
								.css('line-height', settings.popupCaptionHeight + 'px');
								
							if (settings.popupCaptionTextSize)
								$caption.css('font-size', popupCaptionTextSize);
						}
							
						if ($closer.length > 0)
							$closer
								.html(settings.popupCloserText)
								.css('font-size', settings.popupCloserTextSize)
								.css('background', settings.popupCloserBackgroundColor)
								.css('color', settings.popupCloserTextColor)
								.css('display', 'block')
								.css('width', '40px')
								.css('height', '40px')
								.css('line-height', '33px')
								.css('text-align', 'center')
								.css('position', 'absolute')
								.css('text-decoration', 'none')
								.css('outline', '0')
								.css('top', '0')
								.css('right', '-40px');
								
						if ($loader.length > 0) {
							
							$loader
								.html('')
								.css('position', 'relative')
								.css('font-size', settings.popupLoaderTextSize)
								.on('startSpinning', function(e) {
									
									var x = $('<div>' + settings.popupLoaderText + '</div>');
									
									x
										.css('height', Math.floor(settings.popupHeight / 2) + 'px')
										.css('overflow', 'hidden')
										.css('line-height', Math.floor(settings.popupHeight / 2) + 'px')
										.css('text-align', 'center')
										.css('margin-top', Math.floor(($popup.height() - x.height() + ($caption.length > 0 ? $caption.height() : 0)) / 2))
										.css('color', (settings.popupTextColor ? settings.popupTextColor : ''))
										.on('xfin', function() { x.fadeTo(300, 0.5, function() { x.trigger('xfout'); }); })
										.on('xfout', function() { x.fadeTo(300, 0.05, function() { x.trigger('xfin'); }); })
										.trigger('xfin');
									
									$loader.append(x);
								
								})
								.on('stopSpinning', function(e) {
									
									var x = $loader.find('div');
									x.remove();
								});
						}
						
						if ($nav.length == 2) {
							
							$nav
								.css('font-size', '75px')
								.css('text-align', 'center')
								.css('color', '#fff')
								.css('text-shadow', 'none')
								.css('height', '100%')
								.css('position', 'absolute')
								.css('top', '0')
								.css('opacity', '0.35')
								.css('cursor', 'pointer')
								.css('box-shadow', 'inset 0px 0px 10px 0px rgba(0,0,0,0)')
								.poptrox_disableSelection();

							var wn, wp;

							if (settings.usePopupEasyClose) {
								wn = '100px';
								wp = '100px';
							}
							else {
								wn = '75%';
								wp = '25%';
							}
							
							$nav_next
								.css('right', '0')
								.css('width', wn)
								.html('<div style="position: absolute; height: 100px; width: 125px; top: 50%; right: 0; margin-top: -50px;">&gt;</div>');

							$nav_previous
								.css('left', '0')
								.css('width', wp)
								.html('<div style="position: absolute; height: 100px; width: 125px; top: 50%; left: 0; margin-top: -50px;">&lt;</div>');
						
						}
					
					}
			
			// Main
				$window
					.on('resize orientationchange', function() {
						updateWH();
					});

				$caption
					.on('update', function(e, s) {
						
						if (!s || s.length == 0)
							s = settings.popupBlankCaptionText;
						
						$caption.html(s);
					
					});
				
				$closer
					.css('cursor', 'pointer')
					.on('click', function(e) {
						
						e.preventDefault();
						e.stopPropagation();
					
						$popup.trigger('poptrox_close');
						
						return true;
					
					});

				$nav_next
					.on('click', function() {
						$popup.trigger('poptrox_next');
					});

				$nav_previous
					.on('click', function() {
						$popup.trigger('poptrox_previous');
					});

				$overlay
					.css('position', 'fixed')
					.css('left', 0)
					.css('top', 0)
					.css('z-index', settings.baseZIndex)
					.css('width', '100%')
					.css('height', '100%')
					.css('text-align', 'center')
					.css('cursor', 'pointer')
					.appendTo(settings.parent)
					.prepend('<div style="display:inline-block;height:100%;vertical-align:middle;"></div>')
					.append('<div style="position:absolute;left:0;top:0;width:100%;height:100%;background:' + settings.overlayColor + ';opacity:' + settings.overlayOpacity + ';filter:alpha(opacity=' + (settings.overlayOpacity * 100) + ');"></div>')
					.hide()
					.on('touchmove', function(e) {
						return false;
					})
					.on('click', function(e) {

						e.preventDefault();
						e.stopPropagation();
						$popup.trigger('poptrox_close');
					});
				
				if (settings.usePopupEasyClose) {
					$pic
						.css('cursor', 'pointer')
						.on('click', function(e) {
							e.preventDefault();
							e.stopPropagation();
							$popup.trigger('poptrox_close');
						});
				}
				$popup
					.css('display', 'inline-block')
					.css('vertical-align', 'middle')
					.css('position', 'relative')
					.css('z-index', 1)
					.appendTo($overlay)
					.hide()
					.on('poptrox_next', function() {
						
						var x = navPos + 1;

						if (x >= queue.length)
							x = 0;
						
						$popup.trigger('poptrox_switch', [x]);
					
					})
					.on('poptrox_previous', function() {
					
						var x = navPos - 1;
					
						if (x < 0)
							x = queue.length - 1;
					
						$popup.trigger('poptrox_switch', [x]);
					
					})
					.on('poptrox_reset', function() {
						
						updateWH();

						$popup
							.data('width', settings.popupWidth)
							.data('height', settings.popupHeight);

						$loader.hide().trigger('stopSpinning');
						$caption.hide();
						$closer.hide();
						$nav.hide();
						$pic.hide();
						$x.detach();
					
					})
					.on('poptrox_open', function(e, index) {
					
						if (isLocked)
							return true;
					
						isLocked = true;
					
						if (settings.useBodyOverflow)
							$body.css('overflow', 'hidden');

						if (settings.onPopupOpen)
							(settings.onPopupOpen)();

						$overlay
							.fadeTo(settings.fadeSpeed, 1.0, function() {
								$popup.trigger('poptrox_switch', [index, true]);
							});

					})
					.on('poptrox_switch', function(e, index, ignoreLock) {
						
						var x, img;

						if (!ignoreLock && isLocked)
							return true;
						
						isLocked = true;

						$popup
							.css('width', $popup.data('width'))
							.css('height', $popup.data('height'));
							
						// Cleanup from previous
							$caption.hide();
							if ($x.attr('src'))
								$x.attr('src', '');
							$x.detach();
							
						// Activate new object
							x = queue[index];
							$x = x.object;
							$x.off('load');
						
							$pic
								.css('text-indent', '-9999px')
								.show()
								.append($x);

							if (x.type == 'ajax')
								$.get(x.src, function(data) {
									$x.html(data);
									$x.trigger('load');
								});
							else
								$x.attr('src', x.src);
							
							if (x.type != 'image')
								$x
									.css('position', 'relative')
									.css('outline', '0')
									.css('z-index', settings.baseZIndex + 100)
									.width(x.width)
									.height(x.height);

						// Initialize
							$loader.trigger('startSpinning').fadeIn(300);
							$popup.show();

						if (settings.popupIsFixed) {
							
							$popup
								.width(settings.popupWidth)
								.height(settings.popupHeight);

							$x.load(function() {
								$x.off('load');
								$loader.hide().trigger('stopSpinning');
								$caption.trigger('update', [x.captionText]).fadeIn(settings.fadeSpeed);
								$closer.fadeIn(settings.fadeSpeed);
								$pic.css('text-indent', 0).hide().fadeIn(settings.fadeSpeed, function() { isLocked = false; });
								navPos = index;
								$nav.fadeIn(settings.fadeSpeed);
							});
						}
						else {
							
							$x.load(function() {
								updateWH();
								$x.off('load');
								$loader.hide().trigger('stopSpinning');
								var	nw = $x.width(),
									nh = $x.height(),
									f = function() {
										$caption.trigger('update', [x.captionText]).fadeIn(settings.fadeSpeed);
										$closer.fadeIn(settings.fadeSpeed);
										$pic.css('text-indent', 0).hide().fadeIn(settings.fadeSpeed, function() { isLocked = false; });
										navPos = index;
										$nav.fadeIn(settings.fadeSpeed);
										$popup
											.data('width', nw)
											.data('height', nh)
											.css('width', 'auto')
											.css('height', 'auto');
									};
								if (nw == $popup.data('width')
								&&	nh == $popup.data('height'))
									(f)();
								else
									$popup.animate({ width: nw, height: nh }, settings.popupSpeed, 'swing', f);
							});
						}
						if (x.type != 'image')
							$x.trigger('load');
					})
					.on('poptrox_close', function() {
					
						if (isLocked
						&&	!settings.usePopupForceClose)
							return true;
					
						isLocked = true;
					
						$popup
							.hide()
							.trigger('poptrox_reset');
					
						if (settings.onPopupClose)
							(settings.onPopupClose)();
						$overlay
							.fadeOut(settings.fadeSpeed, function() {
								if (settings.useBodyOverflow)
									$body.css('overflow', 'auto');
								isLocked = false;
							});
					})
					.trigger('poptrox_reset');

				$window
					.keydown(function(e) {

						if ($popup.is(':visible')) {
							switch (e.keyCode) {
								case 37:
								case 32:
									if (settings.usePopupNav) {
										$popup.trigger('poptrox_previous');
										return false;
									}
									break;

								case 39:
									if (settings.usePopupNav) {
										$popup.trigger('poptrox_next');
										return false;
									}
									break;

								case 27:
									$popup.trigger('poptrox_close');
									return false;
									break;
							}
						}
					});
					
				//$this.find(settings.selector).each(function(index) {
					
					var stsel = settings.selector;
					//alert(stsel);
					var $els;
					if (stsel == '') {
					    $els = $this;
					} else {
					    $els = $this.find(settings.selector);
					}
					
					$els.each(function(index) {
					var x, tmp, a = $(this), i = a.find('img'), data = a.data('poptrox');
							 // a = $(this) // i = $(this).find('img') // data = $(this).data('poptrox')

					// No href? Bail.
						if (!a.attr('href'))
							return;

					x = {

						src:			a.attr('href'),
						// Modificacion: 
						//captionText:	a.attr('title'),
						captionText:	i.attr('title'), // lo aplica a la imagen que esta dentro del selector (this)
						width:			a.attr('width'),
						height:			a.attr('height'),
						type:			null,
						object:			null
					};
					
					// Determine caption.
						
						// No caption setting? Use default (title attribute of image).
							if (!settings.caption)
								// Modificacion
								c = a.attr('title');
								// c = i.attr('title');
							
						// Function?
							else if (typeof(settings.caption) == 'function')
								c = (settings.caption)(a);
						
						// Selector?
							else if ('selector' in settings.caption) {
								var s;
								s = a.find(settings.caption.selector);
								if ('attribute' in settings.caption)
									c = s.attr(settings.caption.attribute);
								else {
									c = s.html();
									if (settings.caption.remove === true)
										s.remove();
								}
							}
						x.captionText = c;

					// If a data attribute exists, use it
						if (data) {
							
							var k, b = data.split(',');
							
							for (k in b) {
								tmp = b[k].match(/([0-9]+)x([0-9]+)/);
								
								// Size
									if (tmp && tmp.length == 3) {
										
										x.width = tmp[1];
										x.height = tmp[2];
									}
								// Type
									else
										x.type = b[k];
							}
						}
						
					// No type? Attempt to guess it based on the href's domain
						if (!x.type) {
							
							tmp = x.src.match(/http[s]?:\/\/([a-z0-9\.]+)\/.*/);

							if (!tmp || tmp.length < 2)
								tmp = [false];

							switch (tmp[1]) {
								
								/*case 'api.soundcloud.com':
									x.type = 'soundcloud';
									break;*/
								
								case 'docs.google.com':
									x.type = 'gdrive';
									x.width = 800;
									x.height = 480;
									break;

								case 'youtu.be':
									x.type = 'youtube';
									x.width = 800;
									x.height = 480;
									break;

								case 'vimeo.com':
									x.type = 'vimeo';
									x.width = 800;
									x.height = 480;
									break;

								case 'wistia.net':
									x.type = 'wistia';
									x.width = 800;
									x.height = 480;
									break;

								case 'bcove.me':
									x.type = 'bcove';
									x.width = 640;
									x.height = 360;
									break;

								default:
									x.type = 'image';
									break;
							}
						}
					
					// Create object (based on type)
						tmp = x.src.match(/http([s]?):\/\/[a-z0-9\.]+\/(.*)/);

						if (tmp)
							x.prefix = 'http' + (tmp[1] == 's' ? 's' : '');

						switch (x.type) {
							
							case 'ignore':
								break;
						
							case 'iframe':
								x.object = $('<iframe src="" frameborder="0"></iframe>');
								x.object
									.on('click', function(e) { e.stopPropagation(); })
									.css('cursor', 'auto');
								break;
								
							case 'ajax':
								x.object = $('<div class="poptrox-ajax"></div>');
								x.object
									.on('click', function(e) { e.stopPropagation(); })
									.css('cursor', 'auto')
									.css('overflow', 'auto');
								break;
						
							/*case 'soundcloud':
								x.object = $('<iframe scrolling="no" frameborder="no" src=""></iframe>');
								x.src = x.prefix + '://w.soundcloud.com/player/?url=' + escape(x.src);
								x.width = '600';
								x.height = "166";
								break;*/
								
							case 'gdrive':
								x.object = $('<iframe src="" frameborder="0" allowfullscreen="1" webkitAllowFullScreen mozallowfullscreen></iframe>');
								x.src = x.prefix + '://docs.google.com/file/d/' + tmp[2] + '/preview?autohide=1&start=1&autoplay=1';
								break;	

							case 'youtube':
								x.object = $('<iframe src="" frameborder="0" allowfullscreen="1"></iframe>');
								x.src = x.prefix + '://www.youtube.com/embed/' + tmp[2];
								break;

							case 'vimeo':
								x.object = $('<iframe src="" frameborder="0" allowFullScreen="1"></iframe>');
								x.src = x.prefix + '://player.vimeo.com/video/' + tmp[2];
								break;

							case 'wistia':
								x.object = $('<iframe src="" frameborder="0" allowFullScreen="1"></iframe>');
								x.src = x.prefix + '://fast.wistia.net/' + tmp[2];
								break;

							case 'bcove':
								x.object = $('<iframe src="" frameborder="0" allowFullScreen="1" width="100%"></iframe>');
								x.src = x.prefix + '://bcove.me/' + tmp[2];
								break;

							default:
								x.object = $('<img src="" alt="" style="vertical-align:bottom" />');
								if (settings.preload) {
									var tmp = document.createElement('img');
									tmp.src = x.src; cache.push(tmp);
								}
								break;
						}

					if (x.type != 'ignore')
						queue.push(x);
					
					i.attr('title', '');
					
					if (x.type != 'ignore')
						a
							.attr('href', '')
							.css('outline', 0)
							.on('click', function(e) {
								e.preventDefault();
								e.stopPropagation();
								$popup.trigger('poptrox_open', [index]);
							});
				});
			return $(this);
		};

})(jQuery);

// ////////////////////////////// POPTROX MODAL










// ////////////////////////////// MARQUEE | jquery.featurify | 2010
// //////////////////////////////
// Options
// pause 			// time in milleseconds between each slide
// transition 		// time in milleseconds that will take the sliding effect
// directionIn		// left: -1 / right: 1. Direction from where will come the next slide 
// directionOut		// left: -1 / right: 1. Direction to where will go the current slide
; (function($){$.fn.featurify=function(options){var that=this;$(window).load(function(){var settings={transition:750,pause:5000,directionIn:1,directionOut:-1,};if(options)$.extend(settings,options);var featuresWidth=that.width(),ul=that.find("ul"),li=ul.find("li"),liWidth=li.width(),t=undefined,on=false;that.css({overflow:"hidden"});li.hide().first().show();var featuresHeight=ul.height();ul.css({width:featuresWidth+"px",position:"relative",height:featuresHeight+"px",});var position=li.first().position();li.css({position:"absolute",width:liWidth+"px"});var loop=function(){if(on)return;on=true;var li=that.find("li"),first=li.first(),next=first.next();first.css("left",position.left+"px").show().clone().hide().insertAfter(li.last());;next.css({"left":settings.directionIn*featuresWidth+"px",opacity:0}).show();first.animate({opacity:0,left:settings.directionOut*featuresWidth+"px"},settings.transition,function(){$(this).remove();});next.animate({opacity:1,left:position.left+"px",},settings.transition);setTimeout(function(){on=false;},settings.transition);if(t)
t=setTimeout(function(){loop();},settings.pause);}
that.hover(function(){clearTimeout(t);t=undefined;},function(){t=setTimeout(function(){loop();},settings.transition);});t=setTimeout(function(){loop();},settings.pause);});return this;};})(jQuery);



