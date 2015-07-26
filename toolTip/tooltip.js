(function($) {
    $.fn.toolTip = function(opts) {

        $('body').append('<span class="tipLayer"></span>');
        
        return this.each(function() {
            var $tipWrap = $(this);
            var $tip = $(this).find('a');
            var attrTitle = $tip.attr('title');
            var $tipLayer = $('.tipLayer');
            
            if(attrTitle){
                
                $tip.on({
                    mouseenter : function(e){
                        var thisTitle = $(this).attr('title');
                        var aHeight = $(this).height();
                        
                       $tipLayer
                            .css({
                                top:e.pageY+ aHeight,
                                left:e.pageX
                            }) 
                            .show()
                            .text(thisTitle);
                    },
                    mouseleave : function(){
                        $tipLayer
                            .hide()
                            .text('');
                    }
                });
            }
        });   
    };
})(jQuery);