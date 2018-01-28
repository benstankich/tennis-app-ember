function toggleDisplay(id) {
	if (document.getElementById(id).style.display == "none") {
		document.getElementById(id).style.display = "block";
	} else {
		document.getElementById(id).style.display = "none";
	}
}
function toggleHide(id) {
	document.getElementById(id).style.display = "none";
}

function showNotifications() {
	toggleDisplay("notificationsdropdown");
}
function showProfile() {
	toggleDisplay("profiledropdown");
}
function showReviewModule(id) {
	$(".coach-review").each(function() {
		toggleHide(this.id);
	});
	toggleDisplay(id);
}

function editQuestion(name) {
	name = "question-"+name;
	console.log("." + name + " > .edit-question");
	$("." + name + " > .edit-question").css("display", "block");
	$("." + name + " > .unedited-question").css("display", "none");
}


$("#option1").click(function() {
    $(this).addClass('selected').siblings().removeClass('selected');
    // $(this).parent().addClass('selected').siblings().removeClass('selected');
});

// function addQuestion(name) {
// 	var length = $(name + " li").length;
// 	console.log(name + " li");
// 	console.log(length);
// 	$(name).append('<li class="new-question" style="display:list-item;"><div class="edit-question"><a class="delete" href="javascript:void();">Delete</a><input class="question" type="text" size="200" value=""><a class="save" href="javascript:void();" {{action "editQuestion" question.id}}>Save</a></div></li>');
// 	editQuestion("question-"+length);
// }