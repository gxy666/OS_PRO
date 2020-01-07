var type_animation;
var background_animation;
var var_num;
var var_array;
var operaton_num;
var operation_array;
var instruction;
var data_whole = new Object();
var current_speed = 3000;//数值越大速度越慢
function sleep(d){
	for(var t = Date.now();Date.now() - t <= d;);
}

function set_speed(speed){
	current_speed = speed;
}

function display_animation(i)
{
	//alert(data_whole.length);
	type_animation = data_whole[i]["type_animation"];
	background_animation = data_whole[i]["background_animation"];
	var_num = data_whole[i]["var_num"];
	var_array = data_whole[i]["var_array"];
	operaton_num = data_whole[i]["operation_num"];
	operation_array = data_whole[i]["operation_array"];
	instruction = data_whole[i]["instruction"];
	switch(type_animation)
	{
		case 1:
		{
			
			break;
		}
		case 2:
		{
			
			break;
		}
		case 3:
		{
		
			break;
		}
		case 4:
		{
			
			break;
		}
		case 5:
		{
			
			break;
		}
		case 6:
		{
			//alert(type_animation);
			$('#main').css('display','block');
			document.getElementById("content").innerHTML=instruction;
			$('#bt1').css('display','none');
			$('#bt2').css('display','none');
			anime({
				targets: '#main',
				translateX: 0,
				duration: current_speed,
				complete: function()
				{
					anime({
						targets: '#main',
						translateX: 2000,
						duration: current_speed,
						delay: current_speed/3,
						complete: function()
						{
							$('#main').css('display','none');
							if(i+1<data_whole.length)
							{
								display_animation(i+1);
							}
						}
					});
				}
			});
			break;
		}
	}

}

$(document).ready(function(){
	$("#bt1").click(function () {
		$.getJSON("test1.json", function (data) {
			data_whole = data;
			anime({
				targets: '#main',
				translateX: 2000,
				duration: current_speed,
				complete:function(){
					$('#main').css('display','none');
					display_animation(0);
				}
			});
		});
		
	});

	$("#bt2").click(function () {
		$.getJSON("test2.json", function (data) {
			data_whole = data;
			anime({
				targets: '#main',
				translateX: 2000,
				duration: current_speed,
				complete:function(){
					$('#main').css('display','none');
					display_animation(0);
				}
			});
		});
	});

	$("#sb1").click(function () {
		set_speed(3000);
		//alert(current_speed);
	});

	$("#sb2").click(function () {
		set_speed(1500);
		//alert(current_speed);
	});

	$("#sb3").click(function () {
		set_speed(6000);
		//alert(current_speed);
	});
});