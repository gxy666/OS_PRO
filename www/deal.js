var type_animation;
var background_animation;
var var_num;
var var_array;
var operaton_num;
var operation_array;
var instruction;
var data_whole = new Object();
var current_speed = 2000;//数值越大速度越慢
var error_message = "";
function sleep(d){
	for(var t = Date.now();Date.now() - t <= d;);
}

function set_speed(speed){
	current_speed = speed;
}

function display_animation(i)
{
	if(i==data_whole.length)
	{
		
		$("#boddy").html("");
		$('body').css('background','url(./src/'+'end'+'.jpg)');
		$('body').css('background-size','cover');
		return;
	}
	type_animation = data_whole[i]["type_animation"];
	background_animation = data_whole[i]["background_animation"];
	var_num = data_whole[i]["var_num"];
	var_array = data_whole[i]["var_array"];
	var_value = data_whole[i]["var_value"];
	operaton_num = data_whole[i]["operation_num"];
	operation_array = data_whole[i]["operation_array"];
	instruction = data_whole[i]["instruction"];
	$('body').css('background','url(./src/'+background_animation+'.jpg)');
	$('body').css('background-size','cover');
	switch(type_animation)
	{
		case 1:
		{
			if(var_num!=2)
			{
				alert("第一类动画中"+i+"出错"); 
				return;
			}
			document.getElementById("ins").innerHTML=instruction;
			document.getElementById("leader").innerHTML = "当前执行的为第"+(i+1)+"步动画，为第一类比较动画！";
			document.getElementById("judge_sign").innerHTML = "<img src=\"src/equal.png\" ></img>";
			document.getElementById("judge_v1_box").innerHTML = var_value[0]+"<img src=\"src/open.png\" class=\"box_img\"></img>";
			document.getElementById("judge_v2_box").innerHTML = var_value[1]+"<img src=\"src/open.png\" class=\"box_img\"></img>";
			document.getElementById("judge_v1").innerHTML = var_array[0];
			document.getElementById("judge_v2").innerHTML = var_array[1];
			anime({
				targets: '#judge',
				translateY: -1000,
				complete:function(){
					$('#judge').css('display','block');
					$('#judge_v2_box').css('display','inline-block');
					anime({
						targets: '#judge',
						translateY: 0,
						duration: current_speed,
						complete:function(){
							//sleep(current_speed/3);
							if(var_value[0]==var_value[1])
							{
								anime({
									targets:'#judge_sign',
									translateY:-1000,
									duration:current_speed/3,
									complete:function(){
										document.getElementById("judge_sign").innerHTML = "<img src=\"src/is_equal.png\" ></img>";
										anime({
											targets:'#judge_sign',
											translateY:0,
											duration:current_speed/3,
											complete:function(){
												anime({
													targets: '#judge',
													translateY: -1000,
													duration: current_speed,
													complete:function(){
														$('#judge').css('display','none');
														display_animation(i+1);
													}
												});
											}
										});
									}
								});
							}
							else
							{
								anime({
									targets:'#judge_sign',
									translateY:-1000,
									duration:current_speed/3,
									complete:function(){
										document.getElementById("judge_sign").innerHTML = "<img src=\"src/not_equal.png\" ></img>";
										anime({
											targets:'#judge_sign',
											translateY:0,
											duration:current_speed/3,
											complete:function(){
												anime({
													targets: '#judge',
													translateY: -1000,
													duration: current_speed,
													complete:function(){
														$('#judge').css('display','none');
														display_animation(i+1);
													}
												});
											}
										});
									}
								});
							}
							
						}
					});
				}
			});
			break;
		}
		case 2:
		{
			if(var_num!=2)
			{
				alert("第二类动画中"+i+"出错"); 
				return;
			}
			document.getElementById("ins").innerHTML=instruction;
			document.getElementById("leader").innerHTML = "当前执行的为第"+(i+1)+"步动画，为第二类赋值动画！";
			document.getElementById("judge_sign").innerHTML = "<img src=\"src/next.png\" ></img>";
			document.getElementById("judge_v1_box").innerHTML = "<img src=\"src/close.png\" class=\"box_img\"></img>";
			document.getElementById("judge_v1").innerHTML = var_array[0];
			document.getElementById("judge_v2").innerHTML = var_array[1];
			anime({
				targets: '#judge',
				translateY: -1000,
				complete:function(){
					$('#judge').css('display','block');
					$('#judge_v2_box').css('display','none');
					anime({
						targets: '#judge',
						translateY: 0,
						duration: current_speed,
						complete:function(){
							//sleep(current_speed/3);
							anime({
								targets: '#judge_v1_box',
								translateX: 900,
								duration: current_speed,
								complete:function(){
									document.getElementById("judge_v1_box").innerHTML = var_value[0]+"<img src=\"src/open.png\" class=\"box_img\"></img>";
									anime({
										targets: '#judge',
										translateY: -1000,
										duration: current_speed,
										delay: current_speed,
										complete:function(){
											$('#judge').css('display','none');
											anime({
												targets:'#judge_v1_box',
												translateX:0,
												complete:function()
												{
													display_animation(i+1);
												}
											});
										}
									});
								}
							});
						}
					});
				}
			});
			break;
		}
		case 3:
		{
			if(var_num!=1)
			{
				alert("第三类动画中"+i+"出错"); 
				return;
			}
			document.getElementById("ins").innerHTML=instruction;
			document.getElementById("leader").innerHTML = "当前执行的为第"+(i+1)+"步动画，为第三类提取动画！";
			document.getElementById("show_v1_box").innerHTML = "<img src=\"src/close.png\" class=\"box_img\"></img>";
			document.getElementById("show_v1").innerHTML = "";
			anime({
				targets: '#show',
				translateY: -1000,
				translateX: 400,
				complete:function(){
					$('#show').css('display','block');
					$('#show_v1').css('display','block');
					$('#show_v1_box').css('display','block');
					anime({
						targets:'#show',
						translateY: 0,
						duration:current_speed,
						complete:function(){
							document.getElementById("show_v1_box").innerHTML = "<img src=\"src/open.png\" class=\"box_img\"></img>";
							document.getElementById("show_v1").innerHTML = "变量名："+var_array[0]+'\n'+"变量值："+var_value[0];
							anime({
								targets:'#show',
								translateY:-1000,
								duration:current_speed,
								delay: current_speed,
								complete:function(){
									$('#show').css('display','none');
									display_animation(i+1);
								}
							});
						}
					});
					
				}
			});
			break;
		}
		case 4:
		{
			$('.instruction').css('display','none');
			$('.leader').css('display','none');
			$("body").css("background",'url('+'./src/3.jpg'+')');
			$('body').css('background-size','cover');
			anime({
				targets:'#error_div',
				translateY:-1000,
				duration:current_speed,
				complete:function(){
					$('#error_div').css('display','block');
					document.getElementById("err").innerHTML = instruction;
					anime({
						targets:'#error_div',
						translateY:0,
						duration:current_speed,
						complete:function(){
							anime({
								targets:'#error_div',
								translateY:-1000,
								duration:current_speed,
								complete:function()
								{
									$('#error_div').css('display','none');
									$('body').css('background','url(./src/1.jpg)');
									$('body').css('background-size','cover');
									$('.instruction').css('display','block');
									$('.leader').css('display','block');
									display_animation(i+1);
								}
							});
						}
					});
				}
			});
			break;
		}
		case 5:
		{
			if(var_num!=3)
			{
				alert("第五类动画中"+i+"出错"); 
				return;
			}
			document.getElementById("ins").innerHTML=instruction;
			document.getElementById("leader").innerHTML = "当前执行的为第"+(i+1)+"步动画，为第五类运算动画！";
			document.getElementById("cal_sign_1").innerHTML = operation_array[0];
			document.getElementById("cal_sign_2").innerHTML = operation_array[1];
			document.getElementById("cal_v1").innerHTML = "变量名："+var_array[0]+'\n'+"变量值："+var_value[0];
			document.getElementById("cal_v2").innerHTML = "变量名："+var_array[1]+'\n'+"变量值："+var_value[1];
			document.getElementById("cal_v3").innerHTML = "变量名："+var_array[2]+'\n'+"变量值："+var_value[2];
			anime({
				targets: '#cal',
				translateY: -1000,
				complete:function(){
					$('#cal').css('display','block');
					$('#cal_v3_whole').css('display','none');
					anime({
						targets:'#cal',
						translateY:0,
						duration:current_speed,
						complete:function(){
							anime({
								targets:'#cal_v3_whole',
								translateY:-1000,
								duration:200,
								complete:function(){
									$('#cal_v3_whole').css('display','inline-block');
									anime({
										targets:'#cal_v3_whole',
										translateY:0,
										duration:current_speed,
										complete:function(){
											anime({
												targets:'#cal',
												translateY:-1000,
												duration:current_speed,
												delay:current_speed,
												complete: function()
												{
													$('#cal').css('display','none');
													display_animation(i+1);
												}
											});
										}
									});
								}
							})
						}
					});
				}
			});
			break;
		}
		case 6:
		{
			$('.instruction').css('display','none');
			$('.leader').css('display','none');
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
							$('.instruction').css('display','block');
							$('.leader').css('display','block');
							display_animation(i+1);
						}
					});
				}
			});
			break;
		}
		case 7:
		{
			document.getElementById("ins").innerHTML=instruction;
			document.getElementById("leader").innerHTML = "当前执行的为第"+(i+1)+"步动画，为特殊类型的释放动画！";
			document.getElementById("show_v1_box").innerHTML = "<img src=\"src/close.png\" class=\"box_img\"></img>";
			document.getElementById("show_v1").innerHTML = "";
			anime({
				targets: '#show',
				translateY: -1000,
				translateX: 400,
				complete:function(){
					$('#show').css('display','block');
					$('#show_v1').css('display','block');
					$('#show_v1_box').css('display','block');
					anime({
						targets:'#show',
						translateY: 0,
						duration:current_speed,
						complete:function(){
							document.getElementById("show_v1_box").innerHTML = "<img src=\"src/open.png\" class=\"box_img\"></img>";
							document.getElementById("show_v1").innerHTML = "变量名："+var_array[0]+'\n'+"变量值："+var_value[0];
							anime({
								targets:'#show_v1_box',
								translateX:2000,
								duration:current_speed,
								delay: current_speed,
								complete:function(){
									document.getElementById("show_v1").innerHTML = "该内容已经被释放！";
									$('#show_v1_box').css('display','none');
									anime({
										targets:'#show_v1_box',
										translateX:0,
										complete:function(){
											anime({
												targets:'#show',
												translateY:-1000,
												duration:current_speed,
												complete:function(){
													$('#show').css('display','none');
													display_animation(i+1);
												}
											});
										}
									});
									
								}
							});
						}
					});
				}
			});
			break;
		}
		case 8:
		{
			document.getElementById("ins").innerHTML = instruction;
			document.getElementById("washed_v").innerHTML = "变量名(清洗前)："+var_array[0]+'\n'+"变量值："+var_value[0];
			document.getElementById("leader").innerHTML = "当前执行的为第"+(i+1)+"步动画，为特殊类型的清洗动画！";
			anime({
				targets:'#washed',
				translateY:-1000,
				duration:100,
				complete:function(){
					$('#washed').css('display','block');
					anime({
						targets:'#washed',
						translateY:0,
						duration:current_speed,
						complete:function(){
							anime({
								targets:'#washed_i',
								translateX:2000,
								duration:100,
								complete:function(){
									$('#washed_i').css('display','block');
									anime({
										targets:'#washed_i',
										translateX:0,
										duration:current_speed,
										complete:function(){
											document.getElementById("washed_v").innerHTML = "变量名(清洗后)："+var_array[1]+'\n'+"变量值："+var_value[1];
											anime({
												targets:'#washed_i',
												translateX:2000,
												duration:current_speed,
												delay:current_speed,
												complete:function(){
													$('#washed_i').css('display','none');
													anime({
														targets:'#washed',
														translateY:-1000,
														duration:current_speed,
														complete:function(){
															$('#washed').css('display','none');
															display_animation(i+1);
														}
													});
												}
											});
										}
									});
								}
							});
						}
					});
				}
			});
			break;
		}
		case 9:
		{
			//alert("999");
			document.getElementById("ins").innerHTML = instruction;
			document.getElementById("leader").innerHTML = "当前执行的为第"+(i+1)+"步动画，为特殊类型的转运页面动画！";
			anime({
				targets:'.first_mov ',
				translateX:2000,
				duration:100,
				complete:function() {
					// $('#court_i1').css('display','block');
					// $('#court_i2').css('display','block');
					// $('#ct_n1').css('display','block');
					// $('#ct_n2').css('display','block');
					$('.first_mov').css('display','block');
					anime({
						targets:'.first_mov ',
						translateX:0,
						loop: false,
						duration:current_speed,
						complete:function(){
							anime({
								targets:'.second_mov',
								translateY:-1000,
								loop: false,
								duration:100,
								complete:function(){
									$('.second_mov').css('display','block');
									anime({
										targets:'.second_mov',
										translateY:0,
										loop: false,
										duration:current_speed,
										complete:function()
										{
											anime({
												targets:'.second_mov',
												translateX:530,
												duration:2*current_speed,
												easing:'linear',
												loop: false,
												delay:3000,
												complete:function()
												{
													anime({
														targets:'.second_mov',
														translateX:2000,
														duration:2*current_speed,
														easing:'linear',
														loop: false,
														delay:3000,
														complete:function()
														{
															$('.second_mov').css('display','none');
															anime({
																targets:'.first_mov',
																translateX:2000,
																loop: false,
																duration:current_speed,
																complete:function(){
																	$('.first_mov').css('display','none');
																	display_animation(i+1);
																}
															});
														}
													});
												}
											});
										}
									});
								}
							});
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
		$.getJSON("OS_sh.json", function (data) {
			data_whole = data;
			anime({
				targets: '#main',
				translateX: 2000,
				duration: current_speed,
				complete:function(){
					$('#main').css('display','none');
					$('.instruction').css('display','block');
					$('.leader').css('display','block');
					display_animation(0);
				}
			});
		});
		
	});

	$("#bt2").click(function () {
		$.getJSON("OS_nonsh.json", function (data) {
			data_whole = data;
			anime({
				targets: '#main',
				translateX: 2000,
				duration: current_speed,
				complete:function(){
					$('#main').css('display','none');
					$('.instruction').css('display','block');
					$('.leader').css('display','block');
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
		set_speed(100);
		//alert(current_speed);
	});
});