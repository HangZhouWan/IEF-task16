// JavaScript Document
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city = document.getElementById("aqi-city-input").value.trim();
	var value = document.getElementById("aqi-value-input").value.trim();
	if(!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
		alert("城市名称必需为中文或英文字符！");
		return;
	}
	if(!value.match(/^\d+$/)){
		alert("空气质量指数必须输入整数!");
		return;
	}
	aqiData[city] = value
}
addAqiData();
console.log(aqiData.length);
/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var table = document.getElementById("aqi-table");
	var items = "<tr><td>城市</td><td>API指数</td><td>操作</td></tr>";
	for( city in aqiData){
		items = items + "<tr><td>"+city+"<td/>"+aqiData[city]+"</td><td><button>删除</button></td></tr>";
	}
	table.innerHTML = items;
	var btn = table.getElementsByTagName("button");
	for(var i =0 ;i<btn.length;i++){
		btn[i].onclick = delBtnHandle;
	}
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.
  var parent = this.parentNode;
  var accParent = parent.parentNode;
  var grand = accParent.parentNode;
  grand.removeChild(accParent);

  //renderAqiList();
}

function init() {
	var addBtn = document.getElementById("add-btn");
	addBtn.onclick = function(){
		var table = document.getElementById("aqi-table");
		table.innerHTML = "<tr><th>city</th><th>空气质量</th><th>操作</th></tr>";
		addBtnHandle();
	}

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();
