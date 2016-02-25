/**
 *  PubSub
 *  @author Chris Nelson
 *  Global event bus; extends Backbone Events object.
 */

const PubSub = {};

_.extend( PubSub, Backbone.Events );

export default PubSub;
