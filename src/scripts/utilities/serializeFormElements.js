/**
 *  serializeFormFields
 *  @author Chris Nelson
 *  Returns serialized form data; container element $el is required.
 */

const serializeFormFields = function($el) {
	return $el.find('input, select, textarea').serialize();
};

export default serializeFormFields;
