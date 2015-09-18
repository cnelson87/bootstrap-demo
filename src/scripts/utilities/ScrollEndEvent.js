/**
 *  scrollEndEvent
 *  @author Chris Nelson
 *	Broadcasts a pseudo 'scrollEnd' event
 */

import AppConfig from 'config/AppConfig';
import AppEvents from 'config/AppEvents';
import PubSub from 'utilities/PubSub';

const scrollEndEvent = function() {
	var scrollTimer;
	$(window).on('scroll', function(event) {
		clearTimeout(scrollTimer);
		scrollTimer = setTimeout(function() {
			PubSub.trigger(AppEvents.WINDOW_SCROLL_END);
		}, 100);
	});
};

export default scrollEndEvent;
