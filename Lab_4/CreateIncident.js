(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
	var gr = new GlideRecord('incident');
	var body = request.body.data;
	
	for (var key in body) {
		if (body.hasOwnProperty(key)) {
			gr[key] = body[key];			
		}
	}
	var id = gr.insert();
	var return_message = "";
	
	if (id == null) {
		return_message = "Record creation failed";
		response.setStatus(400);
	} else {
		return_message = "Record inserted as "+ id;
	}
	
	return return_message;
	
	
})(request, response); (function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
	var gr = new GlideRecord('incident');
	var sys_id = request.pathParams.sys_id;
	var json = new global.GR2JSON();
	
	if (gr.get(sys_id) ) {
		return json.convert(gr);
	}
	
	
})(request, response);
