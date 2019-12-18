var type_animation;
var background_animation;
var var_num;
var var_array;
var operaton_num;
var operation_array;
var instruction;
var data_whole = new Object();

function sleep(d){
	for(var t = Date.now();Date.now() - t <= d;);
}

function display_animation(button_type)
{
	if(button_type==1)
	{
		$.each(data_whole, function (i, item) {
			type_animation = item["type_animation"];
			background_animation = item["background_animation"];
			var_num = item["var_num"];
			var_array = item["var_array"];
			operaton_num = item["operation_num"];
			operation_array = item["operation_array"];
			instruction = item["instruction"];
			alert(type_animation);//显示处理后的数据
		});
		anime({
			targets: '#main',
			translateX: 2000,
			duration:3000,
			complete: function() {
				$("#main").remove();
			}
		  });
		  
	}
	else if(button_type==2)
	{
		$.each(data_whole, function (i, item) {
			type_animation = item["type_animation"];
			background_animation = item["background_animation"];
			var_num = item["var_num"];
			var_array = item["var_array"];
			operaton_num = item["operation_num"];
			operation_array = item["operation_array"];
			instruction = item["instruction"];
			alert(instruction);
		});
	}
}

$(document).ready(function(){
	$("#bt1").click(function () {
		$.getJSON("test1.json", function (data) {
			data_whole = data;
			display_animation(1);
		});
		//alert("接下来将演示一个执行shell脚本的过程");//显示处理后的数据
		
	});
	$("#bt2").click(function () {
		$.getJSON("test1.json", function (data) {
			data_whole = data;
		});
		alert("接下来将演示一个执行可执行文件的过程");//显示处理后的数据
		display_animation(2);
	});
});