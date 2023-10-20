/**
 * @NApiVersion 2.x
 * @NScriptType Restlet
 * @NModuleScope SameAccount
 */
define(['N/record'], 


function(record) {
	
    function doGet(requestParams) {
       
        return '200 Sucess Response';
    }

    return {
        get: doGet
    };
});