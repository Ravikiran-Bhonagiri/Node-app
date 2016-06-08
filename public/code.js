function addData(){
	var inStr = document.getElementById("link-name").value.trim();
	var catgry = document.getElementById("category-name").value.trim();
	//alert(inStr);
	if( inStr !== "" && catgry !== null){
		myFunc(inStr, catgry);
	} else {
		alert('You have specified either null url-link or category');
	}
}

function clearData(){
	$('#link-lists').html('');
	//getDB();
}

function getDB_while_loading(){
	$.get( "/links", function( data ) {
		console.log(data);
		var template = document.getElementById('sample_template').innerHTML;
		var obj = Mustache.render(template, data);
		$('#link-lists').append(obj);
	});
}

/*
function myFuncAux(){
   var ul = document.getElementById("link-lists");
   var items = ul.getElementsByTagName("li");
   for (var i = 0; i < items.length; ++i) {
     alert(items[i].innerText); 
   }
}


function myFunc1(data){
   if( data === ""){
     alert('input value is null');
     return false;
   }
   var ul = document.getElementById("link-lists");
   var items = ul.getElementsByTagName("li");
   for (var i = 0; i < items.length; ++i) {
     //alert(items[i].innerText);
     if( items[i].innerText === data ){
       alert('input value already exists');
       return false;
     }
   }
   return true;
}
*/

function dumpJSONData( data ){
	var template = document.getElementById('sample_template').innerHTML;
	var obj = Mustache.render(template, data);
    $('#link-lists').append(obj);
}


function myFunc(inStr, catgry){
	var data = {};
	data.name = inStr;
	data.description = catgry;
	var template = document.getElementById('sample_template').innerHTML;
	var obj = Mustache.render(template, data);
    $('#link-lists').append(obj);
}
