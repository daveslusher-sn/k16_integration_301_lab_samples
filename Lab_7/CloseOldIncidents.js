(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
	
	var gr = new GlideRecord('incident');
	var body = request.body.data;
	var return_array = [];
	
	var daysAgoParam = body.daysAgo;
	if (daysAgoParam != null && daysAgoParam != "0") {
		var daysAgo = gs.daysAgo(daysAgoParam);
		gr.addActiveQuery();
		gr.addQuery('sys_updated_on', '<', daysAgo);
		gr.query();
		while(gr.next()){
			gr.state = 7;
			gr.update();
			return_array.push( {"Closed Incident " :gr.number} );
		}
	}
	return return_array;
	
	
})(request, response);
