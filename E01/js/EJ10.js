/**
 * Created by nailuoGG on 15/7/14.
 */
//10 阻止默认事件有哪些？

返回 false 可以阻止 onclick 默认事件

//阻止默认事件 ie8+ preventDefault , ie8- returnValue  return false?

如何取消浏览器事件的传递与事件传递后浏览器的默认处理  

先说明取消事件传递与浏览器事件传递后的默认处理是两个不同的概念 

取消事件传递是指，停止捕获型事件或冒泡型事件的进一步传递。
例如上图中的冒泡型事件传递中，在body处理停止事件传递后，位于上层的document的事件监听器就不再收到通知，
不再被处理。  
事件传递后的默认处理是指，通常浏览器在事件传递并处理完后会执行与该事件关联的默认动作（如果存在这样的动作）。
例如，如果表单中input type 属性是 “submit”，点击后在事件传播完浏览器就就自动提交表单。
又例如，input 元素的 keydown 事件发生并处理后，浏览器默认会将用户键入的字符自动追加到 input 元素的值中。 
要取消浏览器的件传递,IE与DOM标准又有所不同。 在IE下,通过设置event对象的cancelBubble为true即可。 
   	function someHandle() {  window.event.cancelBubble = true; }  
DOM标准通过调用event对象的stopPropagation()方法即可。   
 	function someHandle(event) { 
		event.stopPropagation();
 	}  
因些，跨浏览器的停止事件传递的方法是: 
  function someHandle(event) { 
	event = event || window.event; if(event.stopPropagation) event.stopPropagation(); 
 else event.cancelBubble = true
; }  
取消事件传递后的默认处理，IE与DOM标准又不所不同。 在IE下,通过设置event对象的returnValue为false即可。  
  function someHandle() {  window.event.returnValue = false; }  

DOM标准通过调用event对象的preventDefault()方法即可。   
 function someHandle(event) { event.preventDefault(); }  

因些，跨浏览器的取消事件传递后的默认处理方法是： 
  function someHandle(event) { event = event || window.event; 
if(event.preventDefault) event.preventDefault(); 
 else event.returnValue = false; }
