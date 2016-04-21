(function process( /*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
    var gr = new GlideRecord('incident');
    var returnArray = [];
    gr.orderBy('sys_updated_on');
    var limit = request.queryParams.limit;
    if (limit == null) {
        gr.setLimit(20);
    } else {
        gr.setLimit(limit);
    }
    gr.query();
    while (gr.next()) {
        returnArray.push((new global.GR2JSON()).convert(gr));
    }

    return returnArray;

})(request, response);
