(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
	
	var gr = new GlideRecord('incident');
	var body = request.body.data;
	var return_array = [];
	var max = 3;
	
	var daysAgoParam = body.daysAgo;
	if (daysAgoParam != null ) {
		var daysAgo = gs.daysAgo(daysAgoParam);
		gr.addActiveQuery();
		gr.addQuery('sys_updated_on', '<=', daysAgo);
		gr.query();
		var count = 0;
		while(gr.next() ){
			gr.state = 7;
			gr.update();
			return_array.push( {"Closed Incident " :gr.number.toString()} );
			if (++count  == max) {
				break;
			}
		}
	}
	return return_array;
	
	
})(request, response);
