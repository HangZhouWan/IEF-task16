// JavaScript Document
window.onload = function(){
	 btnHandle();
}
var $ = function(elem){return document.querySelector(elem);}

var data = {};

function getInput(){
	var city = $("#aqi-city-input").value;
	var aqi = $("#aqi-value-input").value;
	data[city] = aqi;
	console.log(data);	
	render(data);
}

function render(data){
	var inner = "<tr><th>城市</th><th>AQI指数</th><th>操作</th></tr>";
	var table = $("#aqi-table");
	for(var i in data){
		inner += "<tr><td>"+i+"</td><td>"+data[i]+"</td><td><button data-city='"+i+"'>删除</button></td></tr>";
	}
	table.innerHTML = inner;
	var btn = table.querySelectorAll("button");
	for(var i=0;i<btn.length;i++){
		btn[i].onclick = delbtn;
		console.log(data);
	}
}
	
function btnHandle(){
	var btn = $("#add-btn");
	btn.onclick = getInput;
}


function delbtn(){
	var delCity = this.getAttribute("data-city");
	delete data[delCity];
	var table = $("#aqi-table");
	var flag = true;
	for(var i in data){
		flag = false;
	}
	if(flag){
		table.innerHTML = "";
	}
	render(data);
}
	
