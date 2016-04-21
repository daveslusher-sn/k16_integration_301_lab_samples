(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
	
	var return_value = "Something went wrong";
	var sys_id = request.pathParams.sys_id;
	var gr = new GlideRecord('incident');
	gr.get(sys_id);
	
	var body = request.body.data;
	
	for (var key in body) {
		if (body.hasOwnProperty(key)) {
			gr[key] = body[key];
		}
	}
	if (gr.update()) {
		return_value = "Updated incident " +sys_id;
	}
	
	return return_value;
})(request, response);
