(function($) {
	$.fn.toolTip = function(opts) {

		return this.each(function() {
			var $tipWrap = $(this);
			var attrTitle = $tipWrap.attr('title');

			if(attrTitle) {
				$tipWrap.on({
					mouseenter : function(e){
						var aHeight = $(this).height();
						var aWidth = $(this).width();
						var aOffset = $(this).offset();

						$('<div/>', {
							addClass: 'tipLayer'
						}).text(attrTitle).appendTo(document.body).each(function(){
							var layerWidth = $(this).width();

							$(this)
								.css({
									top: aOffset.top + aHeight,
									left: aOffset.left + ((aWidth -layerWidth) / 2)
							})
						})
					},
					mouseleave : function(){
						$('.tipLayer').remove();
					}
				});
			}
		});
	};
})(jQuery);