/**
 * Application
 * @author: Chris Nelson <cnelson87@gmail.com>
 */

import AppConfig from 'config/AppConfig';
import AppEvents from 'config/AppEvents';
import PubSub from 'utilities/PubSub';
import breakpointChangeEvent from 'utilities/breakpointChangeEvent';
import resizeStartStopEvents from 'utilities/resizeStartStopEvents';
import scrollStartStopEvents from 'utilities/scrollStartStopEvents';
import AppState from 'models/AppState';


const Application = {

	initialize: function() {
		// console.log('Application:initialize');

		this.$window = $(window);
		this.$document = $(document);
		this.$html = $('html');
		this.$body = $('body');

		this.bodyID = this.$body.attr('id');

		if (AppConfig.isIE9) {this.$html.addClass('ie9');}
		if (AppConfig.isIE10) {this.$html.addClass('ie10');}
		if (AppConfig.isIE11) {this.$html.addClass('ie11');}
		if (AppConfig.isAndroid) {this.$html.addClass('android');}
		if (AppConfig.isIOS) {this.$html.addClass('ios');}

		this.appState = new AppState();

		// Initialize custom events
		breakpointChangeEvent();
		resizeStartStopEvents();
		scrollStartStopEvents();

		this._addEventListeners();

		switch(this.bodyID) {
			case 'homepage':
				// console.log('init homepage');
				break;
			default:
				// console.log('default');
		}

	},

	_addEventListeners: function() {
		PubSub.on(AppEvents.WINDOW_RESIZE_START, this.onWindowResizeStart, this);
		PubSub.on(AppEvents.WINDOW_RESIZE_STOP, this.onWindowResizeStop, this);
		PubSub.on(AppEvents.WINDOW_SCROLL_START, this.onWindowScrollStart, this);
		PubSub.on(AppEvents.WINDOW_SCROLL_STOP, this.onWindowScrollStop, this);
		PubSub.on(AppEvents.BREAKPOINT_CHANGE, this.onBreakpointChange, this);
	},

	_removeEventListeners: function() {
		PubSub.off(AppEvents.WINDOW_RESIZE_START, this.onWindowResizeStart, this);
		PubSub.off(AppEvents.WINDOW_RESIZE_STOP, this.onWindowResizeStop, this);
		PubSub.off(AppEvents.WINDOW_SCROLL_START, this.onWindowScrollStart, this);
		PubSub.off(AppEvents.WINDOW_SCROLL_STOP, this.onWindowScrollStop, this);
		PubSub.off(AppEvents.BREAKPOINT_CHANGE, this.onBreakpointChange, this);
	},

	onWindowResizeStart: function() {
		// console.log('onWindowResizeStart');
	},

	onWindowResizeStop: function() {
		// console.log('onWindowResizeStop');
	},

	onWindowScrollStart: function() {
		// console.log('onWindowScrollStart');
	},

	onWindowScrollStop: function() {
		// console.log('onWindowScrollStop');
	},

	onBreakpointChange: function(params) {
		// console.log('onBreakpointChange', params);
		// Store currentBreakpoint in a Backbone model
		this.appState.set({currentBreakpoint: AppConfig.currentBreakpoint});
	}

};

window.Application = Application;

export default Application;
