import 'layout-css'
import $ from 'webpack-zepto'

+function() {
	const set_rem = () => {
		const designW = 750
		const size = 100
		const _ww = $(window).width()
		const _size = _ww*size/designW
		
		$('html').css({
			'font-size': _size
		})
	}
	// rem
	set_rem()
	$(window).resize(() => set_rem())
}()

$(function(){
	//  FastClick
	// FastClick.attach(document.body)
})
