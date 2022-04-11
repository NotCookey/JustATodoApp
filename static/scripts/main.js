// const model=document.getElementById("model")
// const addTask=document.getElementById("add")
// const todoList=document.getElementById("todoList")
// const openModel=document.getElementById("addButton")
// const overlay=document.getElementById("overlay")
// const taskName=document.getElementById("taskName")
// const taskContent=document.getElementById("taskContent")
// const errorModel=document.getElementById("errorModel")
// const close=document.getElementById("close")

// function hideModels(){
// 	model.style.display="none"
// 	overlay.style.display="none"
// }

// function showModels(){
// 	model.style.display="block"
// 	overlay.style.display="block"
// }

// close.addEventListener("click",
// 	function(e){
// 		hideModels()
// })

// addTask.addEventListener("click",
// 	function(e){
// 		if (taskName.value && taskContent.value){
// 			$.ajax({
// 				type: "POST",
// 				url: "/addItem",
// 				data: JSON.stringify({"taskName": taskName.value,"taskContent" : taskContent.value}),
// 				contentType: "application/json; charset=utf-8",
// 				dataType: "json",
// 				success: function(data){
// 					if (data["success"]==true){
// 						todoList.innerHTML+='<div class="todo" id="'+data["id"]+'"><div class="details" id="details"><h3>'+data["header"]+'</h3><br><p>'+data["wrap"]+'</p><br><sub class="date" id="date">'+data["time"]+'</sub></div></div>'
// 						hideModels()
// 					}
// 				},
// 				error: function(errMsg) {
// 					alert(errMsg.responseText);
// 				}
// 			});
// 		} else {
// 			alert("Please Fill In All The Required Details")
// 		}
// 	}
// )

// overlay.addEventListener("click",
// 	function(e){
// 		hideModels()
// })

// openModel.addEventListener("click",
// 	function(e){
// 		showModels()
// 	}
// )

const _0xd8ffb0 = (function() {
		let _0x4c7795 = !![];
		return function(_0x57487a, _0x6f1fad) {
			const _0x560ae9 = _0x4c7795 ? function() {
				if(_0x6f1fad) {
					const _0x3fde5d = _0x6f1fad['apply'](_0x57487a, arguments);
					return _0x6f1fad = null, _0x3fde5d;
				}
			} : function() {};
			return _0x4c7795 = ![], _0x560ae9;
		};
	}()),
	_0x43aa9a = _0xd8ffb0(this, function() {
		let _0x292833;
		try {
			const _0x57f4ba = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
			_0x292833 = _0x57f4ba();
		} catch(_0x3ddb80) {
			_0x292833 = window;
		}
		const _0x572227 = _0x292833['console'] = _0x292833['console'] || {},
			_0x411936 = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
		for(let _0x1c193f = 0x0; _0x1c193f < _0x411936['length']; _0x1c193f++) {
			const _0x4fddf4 = _0xd8ffb0['constructor']['prototype']['bind'](_0xd8ffb0),
				_0x27fecc = _0x411936[_0x1c193f],
				_0x4d3fdb = _0x572227[_0x27fecc] || _0x4fddf4;
			_0x4fddf4['__proto__'] = _0xd8ffb0['bind'](_0xd8ffb0), _0x4fddf4['toString'] = _0x4d3fdb['toString']['bind'](_0x4d3fdb), _0x572227[_0x27fecc] = _0x4fddf4;
		}
	});
_0x43aa9a();
const model = document['getElementById']('model'),
	addTask = document['getElementById']('add'),
	todoList = document['getElementById']('todoList'),
	openModel = document['getElementById']('addButton'),
	overlay = document['getElementById']('overlay'),
	taskName = document['getElementById']('taskName'),
	taskContent = document['getElementById']('taskContent'),
	errorModel = document['getElementById']('errorModel'),
	close = document['getElementById']('close');

function hideModels() {
	model['style']['display'] = 'none', overlay['style']['display'] = 'none';
}

function showModels() {
	model['style']['display'] = 'block', overlay['style']['display'] = 'block';
}
close['addEventListener']('click', function(_0x2beedc) {
	hideModels();
}), addTask['addEventListener']('click', function(_0x363bda) {
	taskName['value'] && taskContent['value'] ? $['ajax']({
		'type': 'POST',
		'url': '/addItem',
		'data': JSON['stringify']({
			'taskName': taskName['value'],
			'taskContent': taskContent['value']
		}),
		'contentType': 'application/json;\x20charset=utf-8',
		'dataType': 'json',
		'success': function(_0x52e8a2) {
			_0x52e8a2['success'] == !![] && (todoList['innerHTML'] += '<div\x20class=\x22todo\x22\x20id=\x22' + _0x52e8a2['id'] + '\x22><div\x20class=\x22details\x22\x20id=\x22details\x22><h3>' + _0x52e8a2['header'] + '</h3><br><p>' + _0x52e8a2['wrap'] + '</p><br><sub\x20class=\x22date\x22\x20id=\x22date\x22>' + _0x52e8a2['time'] + '</sub></div></div>', hideModels());
		},
		'error': function(_0x5e775f) {
			alert(_0x5e775f['responseText']);
		}
	}) : alert('Please\x20Fill\x20In\x20All\x20The\x20Required\x20Details');
}), overlay['addEventListener']('click', function(_0x2bf8db) {
	hideModels();
}), openModel['addEventListener']('click', function(_0x4ffabf) {
	showModels();
});