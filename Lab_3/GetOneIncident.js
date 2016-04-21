(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
	var gr = new GlideRecord('incident');
	var sys_id = request.pathParams.sys_id;
	var json = new global.GR2JSON();
	
	if (gr.get(sys_id) ) {
		return json.convert(gr);
	}
	
	
})(request, response);
