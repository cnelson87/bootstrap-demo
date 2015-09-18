/**
 * Application Module
 * @author Chris Nelson
 */

import AppConfig from 'config/AppConfig';
import AppEvents from 'config/AppEvents';
import PubSub from 'utilities/PubSub';
import resizeEndEvent from 'utilities/resizeEndEvent';
import scrollEndEvent from 'utilities/scrollEndEvent';
import breakpointChange from 'utilities/breakpointChange';

const Application = {

	initialize: function() {
		// console.log('Application:initialize');

		this.$html = $('html');
		this.$body = $('body');

		this.bodyID = this.$body.attr('id');

		if (AppConfig.isIE9) {this.$html.addClass('ie9');}
		if (AppConfig.isIE10) {this.$html.addClass('ie10');}
		if (AppConfig.isIE11) {this.$html.addClass('ie11');}

		// Initialize custom events
		resizeEndEvent();
		scrollEndEvent();
		breakpointChange();

		this.bindEvents();

	},

	bindEvents: function() {
		PubSub.on(AppEvents.WINDOW_RESIZE_END, this.onWindowResizeEnd, this);
		PubSub.on(AppEvents.WINDOW_SCROLL_END, this.onWindowScrollEnd, this);
		PubSub.on(AppEvents.BREAKPOINT_CHANGE, this.onBreakpointChange, this);
	},

	unbindEvents: function() {
		PubSub.off(AppEvents.WINDOW_RESIZE_END, this.onWindowResizeEnd, this);
		PubSub.off(AppEvents.WINDOW_SCROLL_END, this.onWindowScrollEnd, this);
		PubSub.off(AppEvents.BREAKPOINT_CHANGE, this.onBreakpointChange, this);
	},

	onWindowResizeEnd: function() {
		console.log('onWindowResizeEnd');
	},

	onWindowScrollEnd: function() {
		console.log('onWindowScrollEnd');
	},

	onBreakpointChange: function(params) {
		console.log('onBreakpointChange', params);
		// Store currentBreakpoint in a Backbone model
		this.appState.set({currentBreakpoint: AppConfig.currentBreakpoint});
	}

};

export default Application;
