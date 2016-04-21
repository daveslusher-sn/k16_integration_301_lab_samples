(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
	var sys_id = request.pathParams.sys_id;
	var gr = new GlideRecord('incident');
	if (gr.get(sys_id) ) {
		gr.deleteRecord();
		return "Deleted record " + sys_id;
	}
	
	return "Did not delete any record";
	
})(request, response);
