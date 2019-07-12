! function() {
	var duration = 10;
	$(".actions").on("click", "button", function(e) {
		let $button = $(e.currentTarget);
		let speed = $button.attr("data-speed");
		console.log(speed);
		$button.addClass("active")
			.siblings(".active").removeClass("active");
		switch (speed) {
			case "slow":
				duration = 50;
				break;
			case "normal":
				duration = 10;
				break;
			default:
				duration = 1;
				break;
		}
	});

	function writeCode(prefix, code, fn) {
		let container = document.querySelector('#code');
		let styleTag = document.querySelector('#styleTag');
		let n = 0;
		let id;
		id = setTimeout(function run() {
			n += 1;
			container.innerHTML = code.substring(0, n);
			styleTag.innerHTML = code.substring(0, n);
			container.scrollTop = container.scrollHeight;
			if (n >= code.length) {
				fn && fn.call();
			} else {
				id = setTimeout(run, duration);
			}
		}, duration);
	}
	let codes =
		`
/*
* 首先，需要准备皮卡丘的皮
*/
.preview {
   border:1px solid green;
   display:flex;
   justify-content:center;
   align-items:center;
   background-color: #fee433;
   margin:100px 100px 100px 100px;
}

.wraper {
	width: 400px;
	height: 165px;
	position: relative;
}

/* .wraper > :not(:last-child){
		 z-index:1;
		 } */
/*
		  * 接下来，画皮卡丘的鼻子
		  */
.nose {
	width: 0px;
	height: 0px;
	border: 12px solid;
	border-color: black transparent transparent;
	border-radius: 12px;
	//margin:28px auto;
	position: absolute;
	left: 50%;
	top: 28px;
	margin-left: -12px;
}

/*
		  * 接下来，画皮卡丘的两只眼睛
		  */
.eye {
	width: 49px;
	height: 49px;
	background-color: #2e2e2e;
	position: absolute;
	border-radius: 50%;
	border: 2px solid #000;
}

/*
		  * 眼睛需要有眼珠
		  */
.eye::before {
	content: '';
	display: block;
	width: 24px;
	height: 24px;
	background: #fff;
	position: absolute;
	border-radius: 50%;
	left: 6px;
	top: -1px;
	border: 2px solid #000;
}

/*
		  * 左眼
		  */
.eye.left {
	right: 50%;
	margin-right: 90px;
}

/*
		  * 右眼
		  */
.eye.right {
	left: 50%;
	margin-left: 90px;
}

/*
		  * 然后，画皮卡丘的脸
		  */
.face {
	width: 68px;
	height: 68px;
	background-color: #fc0d1c;
	position: absolute;
	border-radius: 50%;
	border: 2px solid black;
	top: 85px;
}

/*
		  * 左边的红晕
		  */
.face.left {
	right: 50%;
	margin-right: 116px;
}

/*
		  * 右边的红晕
		  */
.face.right {
	left: 50%;
	margin-left: 116px;
}

/*
		  * 上嘴唇
		  */
.upper_lip {
	position: absolute;
	height: 25px;
	width: 65px;
	border: 2px solid black;
	border-top: none;
	top: 46px;
	background-color: #fee433;
}

.upper_lip.left {
	border-right: none;
	border-bottom-left-radius: 40px 25px;
	transform: rotate(-20deg);
	right: 50%;
}

.upper_lip.right {
	border-left: none;
	border-bottom-right-radius: 40px 25px;
	transform: rotate(20deg);
	left: 50%;
}

/*
		  * 下嘴唇
		  */
.lower_lip_wraper {
	position: absolute;
	left: 50%;
	margin-left: -150px;
	bottom: 0;
	height: 110px;
	width: 300px;
	overflow: hidden;
}

.lower_lip {
	width: 300px;
	height: 3500px;
	background-color: #990513;
	border: 2px solid black;
	border-radius: 200px/2000px;
	position: absolute;
	bottom: 0;
	overflow: hidden;
}

/*
		  * 小舌头
		  */
.lower_lip::after {
	content: "";
	position: absolute;
	bottom: -20px;
	width: 100px;
	height: 100px;
	background-color: #FC4A62;
	left: 50%;
	margin-left: -50px;
	border-radius: 50px;
}

/*
		  * 好了，皮卡丘画完了，下面我们来画哆啦A梦
		  */
.wrapper {
	flex: 1;
}

.doraemon {
	margin: 10vh;
	position: relative;
}

.doraemon .head {
	position: relative;
	width: 320px;
	height: 300px;
	border-radius: 150px;
	background: #07bbee;
	background: -webkit-radial-gradient(right top, #fff 10%, #07bbee 20%, #10a6ce 75%, #000);
	background: -moz-radial-gradient(right top, #fff 10%, #07bbee 20%, #10a6ce 75%, #000);
	background: -ms-radial-gradient(right top, #fff 10%, #07bbee 20%, #10a6ce 75%, #000);
	border: 2px solid #555;
	box-shadow: -5px 10px 15px rgba(0, 0, 0, 0.45);
}

/*脸部*/
.doraemon .face-d {
	position: relative;
	/*让所有脸部元素可自由定位*/
	z-index: 2;
	/*脸在头部背景上面*/
}

/*白色脸底*/
.doraemon .face-d .white {
	width: 265px;
	/*设置宽高*/
	height: 195px;
	border-radius: 150px;
	position: absolute;
	/*进行绝对定位*/
	top: 75px;
	left: 25px;
	background: #fff;
	/*此放射渐变也是使脸的左下角暗一些，看上去更真实*/
	background: -webkit-radial-gradient(right top, #fff 75%, #eee 80%, #999 90%, #444);
	background: -moz-radial-gradient(right top, #fff 75%, #eee 80%, #999 90%, #444);
	background: -ms-radial-gradient(right top, #fff 75%, #eee 80%, #999 90%, #444);
}

/*鼻子*/
.doraemon .face-d .nose-d {
	width: 30px;
	height: 30px;
	border-radius: 15px;
	background: #c93300;
	border: 2px solid #000;
	position: absolute;
	top: 110px;
	left: 140px;
	z-index: 3;
	/*鼻子在白色脸底下面*/
}

/*鼻子上的高光*/
.doraemon .face-d .nose-d .light {
	width: 10px;
	height: 10px;
	border-radius: 5px;
	box-shadow: 19px 8px 5px #fff;
	/*通过阴影实现高光*/
}

/*鼻子下的线*/
.doraemon .face-d .nose_line {
	width: 3px;
	height: 100px;
	background: #333;
	position: absolute;
	top: 143px;
	left: 155px;
	z-index: 3;
}

/*嘴巴*/
.doraemon .face-d .mouth {
	width: 220px;
	height: 400px;
	/*通过底边框加上圆角模拟微笑嘴巴*/
	border-bottom: 3px solid #333;
	border-radius: 120px;
	position: absolute;
	top: -160px;
	left: 45px;
}

/*眼睛*/
.doraemon .eyes {
	position: relative;
	z-index: 3;
	/*眼睛在白色脸底下面*/
}

/*眼睛共同的样式*/
.doraemon .eyes .eye-d {
	width: 72px;
	height: 82px;
	background: #fff;
	border: 2px solid #000;
	border-radius: 35px 35px;
	position: absolute;
	top: 40px;
}

/*眼珠*/
.doraemon .eyes .eye-d .black {
	width: 14px;
	height: 14px;
	background: #000;
	border-radius: 7px;
	position: absolute;
	top: 40px;
}

.doraemon .eyes .left-d {
	left: 82px;
}

.doraemon .eyes .right-d {
	left: 156px;
}

.doraemon .eyes .eye-d .bleft {
	left: 50px;
}

.doraemon .eyes .eye-d .bright {
	left: 7px;
}

/*胡须背景，主要用于挡住嘴巴的一部分，不要显得太长*/
.doraemon .whiskers {
	width: 220px;
	height: 80px;
	background: #fff;
	border-radius: 15px;
	position: absolute;
	top: 120px;
	left: 45px;
	z-index: 2;
	/*在鼻子和眼睛下面*/
}

/*所有胡子的公用样式*/
.doraemon .whiskers .whisker {
	width: 60px;
	height: 2px;
	background: #333;
	position: absolute;
	z-index: 2;
}

/*右上胡子*/
.doraemon .whiskers .rTop {
	left: 165px;
	top: 25px;
}

/*右中胡子*/
.doraemon .whiskers .rMiddle {
	left: 167px;
	top: 45px;
}

/*右下胡子*/
.doraemon .whiskers .rBottom {
	left: 165px;
	top: 65px;
}

/*左上胡子*/
.doraemon .whiskers .lTop {
	left: 0;
	top: 25px;
}

/*左中胡子*/
.doraemon .whiskers .lMiddle {
	left: -2px;
	top: 45px;
}

/*左下胡子*/
.doraemon .whiskers .lBottom {
	left: 0;
	top: 65px;
}

/*胡子旋转角度*/
.doraemon .whiskers .r160 {
	-webkit-transform: rotate(160deg);
	-moz-transform: rotate(160deg);
	-ms-transform: rotate(160deg);
	-o-transform: rotate(160deg);
	transform: rotate(160deg);
}

.doraemon .whiskers .r20 {
	-webkit-transform: rotate(200deg);
	-moz-transform: rotate(200deg);
	-ms-transform: rotate(200deg);
	-o-transform: rotate(200deg);
	transform: rotate(200deg);
}

/*围脖*/
.doraemon .choker {
	width: 230px;
	height: 20px;
	background: #c40;
	/*线性渐变 让围巾看上去更自然*/
	background: -webkit-gradient(linear, left top, left bottom, from(#c40), to(#800400));
	background: -moz-linear-gradient(center top, #c40, #800400);
	background: -ms-linear-gradient(center top, #c40, #800400);
	border: 2px solid #000;
	border-radius: 10px;
	position: relative;
	top: -40px;
	left: 45px;
	z-index: 4;
}

/*铃铛*/
.doraemon .choker .bell {
	width: 40px;
	height: 40px;
	overflow: hidden;
	/*IE6 hack*/
	border: 2px solid #000;
	border-radius: 50px;
	background: #f9f12a;
	background: -webkit-gradient(linear, left top, left bottom, from(#f9f12a), color-stop(0.5, #e9e11a), to(#a9a100));
	background: -moz-linear-gradient(top, #f9f12a, #e9e11a 75%, #a9a100);
	background: -ms-linear-gradient(top, #f9f12a, #e9e11a 75%, #a9a100);
	box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.25);
	position: absolute;
	top: 5px;
	left: 90px;
}

/*双横线*/
.doraemon .choker .bell_line {
	width: 36px;
	height: 2px;
	background: #f9f12a;
	border: 2px solid #333;
	border-radius: 3px 3px 0 0;
	position: absolute;
	top: 10px;
}

/*黑点*/
.doraemon .choker .bell_circle {
	width: 12px;
	height: 10px;
	background: #000;
	border-radius: 5px;
	position: absolute;
	top: 20px;
	left: 14px;
}

/*黑点下的线*/
.doraemon .choker .bell_under {
	width: 3px;
	height: 15px;
	background: #000;
	position: absolute;
	left: 18px;
	top: 27px;
}

/*铃铛高光*/
.doraemon .choker .bell_light {
	width: 12px;
	height: 12px;
	border-radius: 10px;
	box-shadow: 19px 8px 5px #fff;
	position: absolute;
	top: -5px;
	left: 5px;
	opacity: 0.7;
}

/*身子*/
.doraemon .bodys {
	position: relative;
	top: -310px;
}

/*肚子*/
.doraemon .bodys .body {
	width: 220px;
	height: 165px;
	background: #07beea;
	background: -webkit-gradient(linear, right top, left top, from(#07beea), color-stop(0.5, #0073b3), color-stop(0.75, #00b0e0), to(#0096be));
	background: -moz-linear-gradient(right center, #07beea, #0073b3 50%, #00b0e0 75%, #0096be 100%);
	background: -ms-linear-gradient(right center, #07beea, #0073b3 50%, #00b0e0 75%, #0096be 100%);
	border: 2px solid #333;
	position: absolute;
	top: 265px;
	left: 50px;
}

/*白色肚兜*/
.doraemon .bodys .wraps {
	width: 170px;
	height: 170px;
	background: #fff;
	background: -webkit-gradient(linear, right top, left bottom, from(#fff), color-stop(0.75, #fff), color-stop(0.83, #eee), color-stop(0.90, #999), color-stop(0.95, #444), to(#000));
	background: -moz-linear-gradient(right top, #fff, #fff 75%, #eee 83%, #999 90%, #444 95%, #000);
	background: -ms-linear-gradient(right top, #fff, #fff 75%, #eee 83%, #999 90%, #444 95%, #000);
	border: 2px solid #000;
	border-radius: 85px;
	position: absolute;
	left: 72px;
	top: 230px;
}

/*口袋*/
.doraemon .bodys .pocket {
	width: 130px;
	height: 130px;
	border-radius: 65px;
	background: #fff;
	background: -webkit-gradient(linear, right top, left bottom, from(#fff), color-stop(0.70, #fff), color-stop(0.75, #f8f8f8), color-stop(0.80, #eee), color-stop(0.88, #ddd), to(#fff));
	background: -moz-linear-gradient(right top, #fff, #fff 70%, #f8f8f8 75%, #eee 80%, #ddd 88%, #fff);
	background: -ms-linear-gradient(right top, #fff, #fff 70%, #f8f8f8 75%, #eee 80%, #ddd 88%, #fff);
	border: 2px solid #000;
	position: absolute;
	top: 250px;
	left: 92px;
}

/*挡住口袋一半*/
.doraemon .bodys .pocket_mask {
	width: 134px;
	height: 60px;
	background: #fff;
	border-bottom: 2px solid #000;
	position: absolute;
	top: 259px;
	left: 92px;
}

/*左右手*/
.doraemon .hand_right,
.doraemon .hand_left {
	height: 100px;
	width: 100px;
	position: absolute;
	top: 272px;
	left: 248px;
}

/*左手*/
.doraemon .hand_left {
	left: -10px;
}

/*手臂公共部分*/
.doraemon .arm {
	width: 80px;
	height: 50px;
	background: #07beea;
	background: -webkit-gradient(linear, left top, left bottom, from(#07beea), color-stop(0.85, #07beea), to(#555));
	background: -moz-linear-gradient(center top, #07BEEA, #07BEEA 85%, #555);
	background: -ms-linear-gradient(center top, #07BEEA, #07BEEA 85%, #555);
	border: 1px solid #000000;
	box-shadow: -10px 7px 10px rgba(0, 0, 0, 0.35);
	z-index: -1;
	position: relative;
}

/*右手手臂*/
.doraemon .hand_right .arm {
	top: 17px;
	-webkit-transform: rotate(35deg);
	-moz-transform: rotate(35deg);
	-ms-transform: rotate(35deg);
	-o-transform: rotate(35deg);
	transform: rotate(35deg);
}

/*左手手臂*/
.doraemon .hand_left .arm {
	top: 17px;
	background: #0096be;
	/*背光一面使用纯色，使其有立体感*/
	box-shadow: 5px -7px 10px rgba(0, 0, 0, 0.25);
	-webkit-transform: rotate(145deg);
	-moz-transform: rotate(145deg);
	-ms-transform: rotate(145deg);
	-o-transform: rotate(145deg);
	transform: rotate(145deg);
}

/*圆形手掌公共部分*/
.doraemon .circle {
	width: 60px;
	height: 60px;
	border-radius: 30px;
	border: 2px solid #000;
	background: #fff;
	background: -webkit-gradient(linear, right top, left bottom, from(#fff), color-stop(0.5, #fff), color-stop(0.70, #eee), color-stop(0.8, #ddd), to(#999));
	background: -moz-linear-gradient(right top, #fff, #fff 50%, #eee 70%, #ddd 80%, #999);
	background: -ms-linear-gradient(right top, #fff, #fff 50%, #eee 70%, #ddd 80%, #999);
	position: absolute;
}

/*右手手掌*/
.doraemon .hand_right .circle {
	left: 40px;
	top: 32px;
}

/*左手手掌*/
.doraemon .hand_left .circle {
	left: -20px;
	top: 32px;
}

/*手臂和身体结合处，使用背景遮住边框*/
.doraemon .arm_rewrite {
	height: 45px;
	width: 5px;
	background: #07beea;
	position: relative;
}

/*右手结合处*/
.doraemon .hand_right .arm_rewrite {
	top: -45px;
	left: 22px;
}

/*左手结合处*/
.doraemon .hand_left .arm_rewrite {
	top: -45px;
	left: 60px;
	background: #0096be;
	/*同理，背光一面使用纯色，使其有立体感*/
}

/*脚部*/
.doraemon .foot {
	width: 280px;
	height: 40px;
	position: relative;
	top: 55px;
	left: 20px;
}

/*左右脚共同样式*/
.doraemon .foot .left-d,
.doraemon .foot .right-d {
	width: 125px;
	height: 30px;
	background: #fff;
	background: -webkit-gradient(linear, right top, left bottom, from(#fff), color-stop(0.75, #fff), color-stop(0.85, #eee), to(#999));
	background: -moz-linear-gradient(right top, #fff, #fff 75%, #eee 85%, #999);
	background: -ms-linear-gradient(right top, #fff, #fff 75%, #eee 85%, #999);
	border: 2px solid #333;
	border-radius: 80px 60px 60px 40px;
	box-shadow: -6px 0 10px rgba(0, 0, 0, 0.35);
	position: relative;
}

.doraemon .foot .left-d {
	left: 8px;
	top: 65px;
}

.doraemon .foot .right-d {
	top: 31px;
	left: 141px;
}

/*双脚之间的缝隙，加阴影使用立体感*/
.doraemon .foot .foot_rewrite {
	width: 20px;
	height: 10px;
	background: #fff;
	background: -webkit-gradient(linear, right top, left bottom, from(#666), color-stop(0.83, #fff), to(#fff));
	background: -moz-linear-gradient(right top, #666, #fff 83%, #fff);
	background: -ms-linear-gradient(right top, #666, #fff 83%, #fff);
	/*制作半圆效果*/
	border: 2px solid #000;
	border-bottom: none;
	border-radius: 40px 40px 0 0;
	position: relative;
	top: -11px;
	left: 130px;
	_left: 127px;
}

/*眼珠*/
.doraemon .eyes .eye-d .black {
	width: 14px;
	height: 14px;
	background: #000;
	border-radius: 7px;
	position: absolute;
	top: 40px;
	-webkit-animation: eyemove 3s linear infinite;
	-moz-animation: eyemove 3s linear infinite;
	-ms-animation: eyemove 3s linear infinite;
	-o-animation: eyemove 3s linear infinite;
	animation: eyemove 3s linear infinite;
}

/*让眼睛动起来*/
@-webkit-keyframes eyemove {
	70% {
		margin: 0 0 0 0;
	}

	80% {
		margin: -22px 0 0 0;
	}

	85% {
		margin: -22px 0 0 5px;
	}

	90% {
		margin: -22px 10px 0 0;
	}

	93% {
		margin: -22px 0 0 0;
	}

	96% {
		margin: 0 0 0 0;
	}
}

@-moz-keyframes eyemove {
	70% {
		margin: 0 0 0 0;
	}

	80% {
		margin: -22px 0 0 0;
	}

	85% {
		margin: -22px 0 0 5px;
	}

	90% {
		margin: -22px 10px 0 0;
	}

	93% {
		margin: -22px 0 0 0;
	}

	96% {
		margin: 0 0 0 0;
	}
}

@-o-keyframes eyemove {
	70% {
		margin: 0 0 0 0;
	}

	80% {
		margin: -22px 0 0 0;
	}

	85% {
		margin: -22px 0 0 5px;
	}

	90% {
		margin: -22px 10px 0 0;
	}

	93% {
		margin: -22px 0 0 0;
	}

	96% {
		margin: 0 0 0 0;
	}
}

@keyframes eyemove {
	70% {
		margin: 0 0 0 0;
	}

	80% {
		margin: -22px 0 0 0;
	}

	85% {
		margin: -22px 0 0 5px;
	}

	90% {
		margin: -22px 10px 0 0;
	}

	93% {
		margin: -22px 0 0 0;
	}

	96% {
		margin: 0 0 0 0;
	}
}
/*打完收工*/
 `
	writeCode('', codes);
}.call();
