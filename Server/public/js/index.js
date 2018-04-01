//var urlGarbage = "35.163.191.108/api/getGarbage";
//var urlRecycle = "35.163.191.108/api/getRecycle";
//var urlCompost = "35.163.191.108/api/getCompost";

var garbageOpen = false;
var recyclingOpen = false;
var compostOpen = false;
var mode = false;
var auto = false;

function getData(callback) {
    $.getJSON('./api/getStats', function(data) {
        console.log(data.garbage);


        callback(data.garbage, data.recycle, data.compost);

    });

}

function setMode() {
/*
var binInfo = JSON.stringify({
	'id': 1,
	'auto': auto,
	'garbageOpen': garbageOpen,
	'recyclingOpen': recyclingOpen,
	'compostOpen': compostOpen
});*/
var data = new Object();
data.id = 1;
data.auto = auto;
data.garbageOpen = garbageOpen;
data.recyclingOpen = recyclingOpen;
data.compostOpen = compostOpen;
var binInfo = JSON.stringify(data);

try{
$.ajax({
	type: 'POST',
	url: './setMode',
	data: binInfo,
	dataType: 'json',
	contentType: "application/json",
	success: function(data){}
});
}catch(err){
}

/*
$.post('./setMode', {
		"id": 1,
		"auto": auto,
		"garbageOpen": garbageOpen,
		"recyclingOpen": recyclingOpen,
		"compostOpen": compostOpen
});*/

}


function showChart() {
    document.getElementById('chart').style.display = 'block';
    document.getElementById('stats').style.display = 'none';
}

function showStats() {
    document.getElementById('stats').style.display = 'block';
    document.getElementById('chart').style.display = 'none';
}

function updateMode(changeMode){
	if(changeMode == 1){
		auto = true;
	} else {
		auto = false;
	}
	//alert(auto);
}

function garbUpdate(bin) {
	if(bin == 1){
		garbageOpen = true;
	} else {
		garbageOpen = false;
	}
	setMode();
    //alert(garbageOpen);
}

function compostUpdate(bin) {
	if(bin == 1){
		compostOpen = true;
	} else {
		compostOpen = false;
	}
	setMode();
    //alert(compostOpen);
}

function recyclingUpdate(bin) {
	if(bin == 1){
		recyclingOpen = true;
	} else {
		recyclingOpen = false;
	}
	setMode();
    //alert(recyclingOpen);
}
/*
function getGarbage() {
  $.getJSON('./api/getGarbage',function(data){
    console.log(data.garbage);
    return data.garbage;
  });
}
function getRecycle(urlRecycle) {
    $.getJSON('./api/getRecycle',function(data){
      return data.recycle;
    });
//return 50;
}
function getCompost(urlCompost) {
  $.getJSON('./api/getCompost',function(data){
    return data.compost;
  });
//return 5;
}
*/
