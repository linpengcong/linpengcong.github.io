
//首先用 querySelector() 函数获取标题，把标题的引用储存在 myHeading 变量中
//let myHeading = document.querySelector('h1');
//之后，把 myHeading 变量的属性 textContent （标题内容）修改为 “Hello world!” 
//myHeading.textContent = 'Hello world!';
let myImage = document.querySelector('img');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox-icon.png'){
		myImage.setAttribute('src','images/firefox.jpg');
	}else{
		myImage.setAttribute('src','images/firefox-icon.png');
	}
}

function setHeading(name) {
  let myHeading = document.querySelector('h1');
  myHeading.textContent = 'Mozilla so cool ，' + name + '！';
}

function setUserName() {
  let myName = prompt('请输入你的名字');
  localStorage.setItem('name', myName);
  setHeading(myName);
} 

let storedName = localStorage.getItem('name');
if(!storedName) {
   setUserName();
} else {
   setHeading(storedName);
}

let myButton = document.querySelector('button'); 
myButton.onclick = setUserName;