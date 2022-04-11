const model=document.getElementById("model")
const addTask=document.getElementById("add")
const todoList=document.getElementById("todoList")
const openModel=document.getElementById("addButton")
const overlay=document.getElementById("overlay")
const taskName=document.getElementById("taskName")
const taskContent=document.getElementById("taskContent")
const errorModel=document.getElementById("errorModel")
const close=document.getElementById("close")

function hideModels(){
	model.style.display="none"
	overlay.style.display="none"
}

function showModels(){
	model.style.display="block"
	overlay.style.display="block"
}

close.addEventListener("click",
	function(e){
		hideModels()
})

addTask.addEventListener("click",
	function(e){
		if (taskName.value && taskContent.value){
			$.ajax({
				type: "POST",
				url: "/addItem",
				data: JSON.stringify({"taskName": taskName.value,"taskContent" : taskContent.value}),
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				success: function(data){
					if (data["success"]==true){
						todoList.innerHTML+='<div class="todo" id="'+data["id"]+'"><div class="details" id="details"><h3>'+data["header"]+'</h3><br><p>'+data["wrap"]+'</p><br><sub class="date" id="date">'+data["time"]+'</sub></div></div>'
						hideModels()
					}
				},
				error: function(errMsg) {
					alert(errMsg.responseText);
				}
			});
		} else {
			alert("Please Fill In All The Required Details")
		}
	}
)

overlay.addEventListener("click",
	function(e){
		hideModels()
})

openModel.addEventListener("click",
	function(e){
		showModels()
	}
)
