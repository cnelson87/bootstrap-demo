/**
 *  resizeEndEvent
 *  @author Chris Nelson
 *	Broadcasts a pseudo 'resizeEnd' event
 */

import AppConfig from 'config/AppConfig';
import AppEvents from 'config/AppEvents';
import PubSub from 'utilities/PubSub';

const resizeEndEvent = function() {
	var resizeTimer;
	$(window).on('resize', function(event) {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
			PubSub.trigger(AppEvents.WINDOW_RESIZE_END);
		}, 100);
	});
};

export default resizeEndEvent;
