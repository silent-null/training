function function0(value){
	if (value == "开始闪") 
   {
	function1();
    timer = window.setInterval("changeLi()",1000); 
   } 
   if (value == "结束闪") 
   {
	function2();
    timer = window.clearInterval(timer); 
   }
}

function function1() {
	var button = document.getElementById('b1');
        button.style.backgroundColor="orange";
		button.style.color="white";
	var button2 = document.getElementById('b2');
        button2.style.backgroundColor="white";
		button2.style.color="orange";
}

function function2() {
	reduction();
	var button1 = document.getElementById('b1');
        button1.style.backgroundColor="white";
		button1.style.color="orange";
	var button2 = document.getElementById('b2');
        button2.style.backgroundColor="orange";
		button2.style.color="white";

}

//改变随机3个Li的颜色
function changeLi(){
	reduction();
	var randomLiId = getRandomLiId(3);
	for(var i = 0; i < randomLiId.length; i++) {
		var randomColor = getRandomColor();
		var li = randomLiId[i];
		li.style.backgroundColor = randomColor;
    }
}

//获取随机颜色
function getRandomColor(){
    var rgb='rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')';
    return rgb;
}	

//获取随机3个Li
function getRandomLiId(n){
	var result = [];
	var arr = [li1,li2,li3,li4,li5,li6,li7,li8,li9];

	var count = arr.length;
	for (var i = 0; i < n; i++) {
		var index = ~~(Math.random() * count) + i;
		if(result.includes(arr[index])){
            continue;
		}
		result[i] = arr[index];
		arr[index] = arr[i];
		count--;
	}
	return result
}

//还原
function reduction(){
	li1.style.backgroundColor="orange";
	li2.style.backgroundColor="orange";
	li3.style.backgroundColor="orange";
	li4.style.backgroundColor="orange";
	li5.style.backgroundColor="orange";
	li6.style.backgroundColor="orange";
	li7.style.backgroundColor="orange";
	li8.style.backgroundColor="orange";
	li9.style.backgroundColor="orange";
}