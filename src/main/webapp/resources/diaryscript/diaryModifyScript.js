	var check1 = 0;
	var check2 = 0;
	var check3 = 0;
	var check4 = 0;
	var check5 = 0;
	
	var blank_pattern1 = /^\s+|\s+$/g;
	var st1 = document.getElementById("coment1").value;
	var st2 = document.getElementById("coment2").value;
	var st3 = document.getElementById("coment3").value;
	var st4 = document.getElementById("coment4").value;
	var st5 = document.getElementById("coment5").value;
	st1 = st1.replaceAll("\\n", "\n");
	document.getElementById("coment1").value = st1;
	
	st2 = st2.replaceAll("\\n", "\n");
	document.getElementById("coment2").value = st2;
	
	st3 = st3.replaceAll("\\n", "\n");
	document.getElementById("coment3").value = st3;
	
	st4 = st4.replaceAll("\\n", "\n");
	document.getElementById("coment4").value = st4;
	
	st5 = st5.replaceAll("\\n", "\n");
	document.getElementById("coment5").value = st5;


	if(document.getElementById("coment1").value == ""){
		if(document.getElementById("comentimage1").value == ""){
			check1 = 0;
		}else{
			check1 = 1;
			document.getElementById("imgChk1").value = '1'
		}
	}
	if(document.getElementById("coment2").value == ""){
		if(document.getElementById("comentimage2").value == ""){
			check2 = 0;
		}else{
			check2 = 1;
			document.getElementById("imgChk2").value = '1'
		}
	}
	if(document.getElementById("coment3").value == ""){
		if(document.getElementById("comentimage3").value == ""){
			check3 = 0;
		}else{
			check3 = 1;
		document.getElementById("imgChk3").value = '1'
		}
	}
	if(document.getElementById("coment4").value == ""){
		if(document.getElementById("comentimage4").value == ""){
			check4 = 0;
		}else{
			check4 = 1;
		document.getElementById("imgChk4").value = '1'
		}
	}
	if(document.getElementById("coment5").value == ""){
		if(document.getElementById("comentimage5").value == ""){
			check5 = 0;
		}else{
			check5 = 1;
		document.getElementById("imgChk5").value = '1'
		}
	}
	var pageNum = 1;
function readURL1(input) {	
	var file = input.files[0] 
	console.log(file)
	if (file != '') {
		var reader = new FileReader();
		reader.readAsDataURL(file); 
		reader.onload = function(e) { 
			$('#preview1').attr('src', e.target.result);
			$('#previewimage1').attr('src', e.target.result);
			$('#imgChk1').val('1')
			$('#fileChk1').val(e.target.result);
		}
		imgdata1(file)
	}
}
function imgdata1(file){
		data = new FormData()
		data.append("file", file)
		$.ajax({
			url : "imgUp", type : "post", data : data, contentType : false, enctype : 'multipart/form-data', processData : false,
			success : function(a){
				$('#fileChk1').val(a.url)
			}
		})
}

function content1(){
	check1 = 0;
	document.getElementById("content1").style.display='block';
	document.getElementById("image1").style.display='none';
	
	$('#preview1').attr('src', 'resources/diaryimg/diary_plus.png' )
	$('#previewimage1').attr('src', 'resources/diaryimg/trip.png' )
	$('#imgChk1').val('0')
	
	document.getElementById("fileChk1").value="";
	document.getElementById("comentimage1").value="";
}
function image1(){
	check1 = 1;
	document.getElementById("content1").style.display='none';
	document.getElementById("image1").style.display='block';
	$('#previewimage1').attr('src', 'resources/diaryimg/diary_plus.png' )
	document.getElementById("coment1").value="";
}
function page0(){
	if(pageNum == 1){
		return;
	}
	if(pageNum == 2){
		if(check2 == 0){
			if(document.getElementById("coment2").value == "" || document.getElementById("coment2").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("coment2").focus();
				return;
			}
			if(document.getElementById("coment2").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}else{
			if(document.getElementById("imgChk2").value == '0'){
				alert('???????????? ????????????.')
				return ;
			}
			if(document.getElementById("comentimage2").value == "" || document.getElementById("comentimage2").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("comentimage2").focus();
				return;
			}
			if(document.getElementById("comentimage2").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}
	}
	if(pageNum == 3){
		if(check3 == 0){
			if(document.getElementById("coment3").value == "" || document.getElementById("coment3").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("coment3").focus();
				return;
			}
			if(document.getElementById("coment3").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}else{
			if(document.getElementById("imgChk3").value == '0'){
				alert('???????????? ????????????.')
				return ;
			}
			if(document.getElementById("comentimage3").value == "" || document.getElementById("comentimage3").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("comentimage3").focus();
				return;
			}
			if(document.getElementById("comentimage3").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}
	}
	if(pageNum == 4){
		if(check4 == 0){
			if(document.getElementById("coment4").value == "" || document.getElementById("coment4").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("coment4").focus();
				return;
			}
			if(document.getElementById("coment4").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}else{
			if(document.getElementById("imgChk4").value == '0'){
				alert('???????????? ????????????.')
				return ;
			}if(document.getElementById("comentimage4").value == "" || document.getElementById("comentimage4").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("comentimage4").focus();
				return;
			}
			if(document.getElementById("comentimage4").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}
	}
	if(pageNum == 5){
		if(check5 == 0){
			if(document.getElementById("coment5").value == "" || document.getElementById("coment5").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("coment5").focus();
				return;
			}
			if(document.getElementById("coment5").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}else{
			if(document.getElementById("imgChk5").value == '0'){
				alert('???????????? ????????????.')
				return ;
			}if(document.getElementById("comentimage5").value == "" || document.getElementById("comentimage5").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("comentimage5").focus();
				return;
			}
			if(document.getElementById("comentimage5").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}
	}
	if(check1 == 0){
		$('#previewimage1').attr('src', 'resources/diaryimg/trip.png')
	}
	document.getElementById("view1").style.display='block';
	document.getElementById("view2").style.display='none';
	document.getElementById("view3").style.display='none';
	document.getElementById("view4").style.display='none';
	document.getElementById("view5").style.display='none';
	document.getElementById("wbtn1").style.display='revert';
	document.getElementById("ibtn1").style.display='revert';
	document.getElementById("wbtn2").style.display='none';
	document.getElementById("ibtn2").style.display='none';
	document.getElementById("wbtn3").style.display='none';
	document.getElementById("ibtn3").style.display='none';
	document.getElementById("wbtn4").style.display='none';
	document.getElementById("ibtn4").style.display='none';
	document.getElementById("wbtn5").style.display='none';
	document.getElementById("ibtn5").style.display='none';
	pageNum = 1;
}

function page1(){
	if(pageNum == 2){
		return;
	}
	
	if(pageNum == 1){
		if(check1 == 0){
			if(document.getElementById("coment1").value == "" || document.getElementById("coment1").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("coment1").focus();
				return;
			}
			if(document.getElementById("coment1").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}else{
			if(document.getElementById("imgChk1").value == '0'){
				alert('???????????? ????????????.')
				return ;
			}if(document.getElementById("comentimage1").value == "" || document.getElementById("comentimage1").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("comentimage1").focus();
				return;
			}
			if(document.getElementById("comentimage1").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}
	}
	if(pageNum == 3){
		if(check3 == 0){
			if(document.getElementById("coment3").value == "" || document.getElementById("coment3").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("coment3").focus();
				return;
			}
			if(document.getElementById("coment3").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}else{
			if(document.getElementById("imgChk3").value == '0'){
				alert('???????????? ????????????.')
				return ;
			}if(document.getElementById("comentimage3").value == "" || document.getElementById("comentimage3").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("comentimage3").focus();
				return;
			}
			if(document.getElementById("comentimage3").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}
	}
	if(pageNum == 4){
		if(check4 == 0){
			if(document.getElementById("coment4").value == "" || document.getElementById("coment4").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("coment4").focus();
				return;
			}
			if(document.getElementById("coment4").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}else{
			if(document.getElementById("imgChk4").value == '0'){
				alert('???????????? ????????????.')
				return ;
			}if(document.getElementById("comentimage4").value == "" || document.getElementById("comentimage4").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("comentimage4").focus();
				return;
			}
			if(document.getElementById("comentimage4").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}
	}
	if(pageNum == 5){
		if(check5 == 0){
			if(document.getElementById("coment5").value == "" || document.getElementById("coment5").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("coment5").focus();
				return;
			}
			if(document.getElementById("coment5").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}else{
			if(document.getElementById("imgChk5").value == '0'){
				alert('???????????? ????????????.')
				return ;
			}if(document.getElementById("comentimage5").value == "" || document.getElementById("comentimage5").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("comentimage5").focus();
				return;
			}
			if(document.getElementById("comentimage5").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}
	}
	
	if(check2 == 0){
		$('#previewimage2').attr('src', 'resources/diaryimg/trip.png')
	}
		
		
	document.getElementById("pre1").style.display='revert';
	
	document.getElementById("view1").style.display='none';
	document.getElementById("view2").style.display='block';
	document.getElementById("view3").style.display='none';
	document.getElementById("view4").style.display='none';
	document.getElementById("view5").style.display='none';
	document.getElementById("wbtn1").style.display='none';
	document.getElementById("ibtn1").style.display='none';
	document.getElementById("wbtn2").style.display='revert';
	document.getElementById("ibtn2").style.display='revert';
	document.getElementById("wbtn3").style.display='none';
	document.getElementById("ibtn3").style.display='none';
	document.getElementById("wbtn4").style.display='none';
	document.getElementById("ibtn4").style.display='none';
	document.getElementById("wbtn5").style.display='none';
	document.getElementById("ibtn5").style.display='none';
	document.getElementById("de2").style.display='revert';
	
	pageNum = 2;
}
// -------------------------------------------------------------- 2??????
function readURL2(input) {	
	var file = input.files[0] 
	console.log(file)
	if (file != '') {
		var reader = new FileReader();
		reader.readAsDataURL(file); 
		reader.onload = function(e) { 
			$('#preview2').attr('src', e.target.result);
			$('#previewimage2').attr('src', e.target.result);
			$('#imgChk2').val('1')
			$('#fileChk2').val(e.target.result);
		}
		imgdata2(file)
	}
}

function imgdata2(file){
		data = new FormData()
		data.append("file", file)
		$.ajax({
			url : "imgUp", type : "post", data : data, contentType : false, enctype : 'multipart/form-data', processData : false,
			success : function(a){
				$('#fileChk2').val(a.url)
			}
		})
}

function content2(){
	check2 = 0;
	document.getElementById("content2").style.display='block';
	document.getElementById("image2").style.display='none';
	
	$('#preview2').attr('src', 'resources/diaryimg/diary_plus.png' )
	$('#previewimage2').attr('src', 'resources/diaryimg/trip.png' )
	$('#imgChk2').val('0')
	
	document.getElementById("fileChk2").value="";
	document.getElementById("comentimage2").value="";
}
function image2(){
	check2 = 1;
	document.getElementById("content2").style.display='none';
	document.getElementById("image2").style.display='block';
	$('#previewimage2').attr('src', 'resources/diaryimg/diary_plus.png' )
	document.getElementById("coment2").value="";
}

function page2(){
	if(pageNum == 3){
		return;
	}

	if(pageNum == 1){
		if(check1 == 0){
			if(document.getElementById("coment1").value == "" || document.getElementById("coment1").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("coment1").focus();
				return;
			}
			if(document.getElementById("coment1").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}else{
			if(document.getElementById("imgChk1").value == '0'){
				alert('???????????? ????????????.')
				return ;
			}if(document.getElementById("comentimage1").value == "" || document.getElementById("comentimage1").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("comentimage1").focus();
				return;
			}
			if(document.getElementById("comentimage1").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}
	}
	if(pageNum == 2){
		if(check2 == 0){
			if(document.getElementById("coment2").value == "" || document.getElementById("coment2").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("coment2").focus();
				return;
			}
			if(document.getElementById("coment2").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}else{
			if(document.getElementById("imgChk2").value == '0'){
				alert('???????????? ????????????.')
				return ;
			}if(document.getElementById("comentimage2").value == "" || document.getElementById("comentimage2").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("comentimage2").focus();
				return;
			}
			if(document.getElementById("comentimage2").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}
	}
	if(pageNum == 4){
		if(check4 == 0){
			if(document.getElementById("coment4").value == "" || document.getElementById("coment4").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("coment4").focus();
				return;
			}
			if(document.getElementById("coment4").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}else{
			if(document.getElementById("imgChk4").value == '0'){
				alert('???????????? ????????????.')
				return ;
			}if(document.getElementById("comentimage4").value == "" || document.getElementById("comentimage4").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("comentimage4").focus();
				return;
			}
			if(document.getElementById("comentimage4").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}
	}
	if(pageNum == 5){
		if(check5 == 0){
			if(document.getElementById("coment5").value == "" || document.getElementById("coment5").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("coment5").focus();
				return;
			}
			if(document.getElementById("coment4").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}else{
			if(document.getElementById("imgChk5").value == '0'){
				alert('???????????? ????????????.')
				return ;
			}if(document.getElementById("comentimage5").value == "" || document.getElementById("comentimage5").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("comentimage5").focus();
				return;
			}
			if(document.getElementById("comentimage5").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}
	}	
	if(check3 == 0){
		$('#previewimage3').attr('src', 'resources/diaryimg/trip.png')
	}
	document.getElementById("pre2").style.display='revert';
	
	document.getElementById("view1").style.display='none';
	document.getElementById("view2").style.display='none';
	document.getElementById("view3").style.display='block';
	document.getElementById("view4").style.display='none';
	document.getElementById("view5").style.display='none';
	document.getElementById("wbtn1").style.display='none';
	document.getElementById("ibtn1").style.display='none';
	document.getElementById("wbtn2").style.display='none';
	document.getElementById("ibtn2").style.display='none';
	document.getElementById("wbtn3").style.display='revert';
	document.getElementById("ibtn3").style.display='revert';
	document.getElementById("wbtn4").style.display='none';
	document.getElementById("ibtn4").style.display='none';
	document.getElementById("wbtn5").style.display='none';
	document.getElementById("ibtn5").style.display='none';
	document.getElementById("de3").style.display='revert';
	
	pageNum = 3;
}
//-------------------------------------------------------------- 3??????
function readURL3(input) {	
	var file = input.files[0] 
	console.log(file)
	if (file != '') {
		var reader = new FileReader();
		reader.readAsDataURL(file); 
		reader.onload = function(e) { 
			$('#preview3').attr('src', e.target.result);
			$('#previewimage3').attr('src', e.target.result);
			$('#imgChk3').val('1')
			$('#fileChk3').val(e.target.result);
		}
		imgdata3(file)
	}
}
function imgdata3(file){
		data = new FormData()
		data.append("file", file)
		$.ajax({
			url : "imgUp", type : "post", data : data, contentType : false, enctype : 'multipart/form-data', processData : false,
			success : function(a){
				$('#fileChk3').val(a.url)
			}
		})
}

function content3(){
	check3 = 0;
	document.getElementById("content3").style.display='block';
	document.getElementById("image3").style.display='none';
	
	$('#preview3').attr('src', 'resources/diaryimg/diary_plus.png' )
	$('#previewimage3').attr('src', 'resources/diaryimg/trip.png' )
	$('#imgChk3').val('0')
	
	document.getElementById("fileChk3").value="";
	document.getElementById("comentimage3").value="";
}
function image3(){
	check3 = 1;
	document.getElementById("content3").style.display='none';
	document.getElementById("image3").style.display='block';
	$('#previewimage3').attr('src', 'resources/diaryimg/diary_plus.png' )
	document.getElementById("coment3").value="";
}

function page3(){
	if(pageNum == 4){
		return;
	}
		console.log(check4)
	if(pageNum == 1){
		if(check1 == 0){
			if(document.getElementById("coment1").value == "" || document.getElementById("coment1").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("coment1").focus();
				return;
			}
			if(document.getElementById("coment1").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}else{
			if(document.getElementById("imgChk1").value == '0'){
				alert('???????????? ????????????.')
				return ;
			}if(document.getElementById("comentimage1").value == "" || document.getElementById("comentimage1").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("comentimage1").focus();
				return;
			}
			if(document.getElementById("comentimage1").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}
	}
	if(pageNum == 2){
		if(check2 == 0){
			if(document.getElementById("coment2").value == "" || document.getElementById("coment2").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("coment2").focus();
				return;
			}
			if(document.getElementById("coment2").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}else{
			if(document.getElementById("imgChk2").value == '0'){
				alert('???????????? ????????????.')
				return ;
			}if(document.getElementById("comentimage2").value == "" || document.getElementById("comentimage2").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("comentimage2").focus();
				return;
			}
			if(document.getElementById("comentimage2").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}
	}
	if(pageNum == 3){
		if(check3 == 0){
			if(document.getElementById("coment3").value == "" || document.getElementById("coment3").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("coment3").focus();
				return;
			}
			if(document.getElementById("coment3").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}else{
			if(document.getElementById("imgChk3").value == '0'){
				alert('???????????? ????????????.')
				return ;
			}if(document.getElementById("comentimage3").value == "" || document.getElementById("comentimage3").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("comentimage3").focus();
				return;
			}
			if(document.getElementById("comentimage3").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}
	}
	if(pageNum == 5){
		if(check5 == 0){
			if(document.getElementById("coment5").value == "" || document.getElementById("coment5").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("coment5").focus();
				return;
			}
			if(document.getElementById("coment5").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}else{
			if(document.getElementById("imgChk5").value == '0'){
				alert('???????????? ????????????.')
				return ;
			}if(document.getElementById("comentimage5").value == "" || document.getElementById("comentimage5").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("comentimage5").focus();
				return;
			}
			if(document.getElementById("comentimage5").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}
	}
		if(check4 == 0){
		$('#previewimage4').attr('src', 'resources/diaryimg/trip.png')
	}
	document.getElementById("pre3").style.display='revert';
	
	document.getElementById("view1").style.display='none';
	document.getElementById("view2").style.display='none';
	document.getElementById("view3").style.display='none';
	document.getElementById("view4").style.display='block';
	document.getElementById("view5").style.display='none';
	document.getElementById("wbtn1").style.display='none';
	document.getElementById("ibtn1").style.display='none';
	document.getElementById("wbtn2").style.display='none';
	document.getElementById("ibtn2").style.display='none';
	document.getElementById("wbtn3").style.display='none';
	document.getElementById("ibtn3").style.display='none';
	document.getElementById("wbtn4").style.display='revert';
	document.getElementById("ibtn4").style.display='revert';
	document.getElementById("wbtn5").style.display='none';
	document.getElementById("ibtn5").style.display='none';
	document.getElementById("de4").style.display='revert';
	
	pageNum = 4;
}
//-------------------------------------------------------------- 4??????
function readURL4(input) {	
	var file = input.files[0] 
	console.log(file)
	if (file != '') {
		var reader = new FileReader();
		reader.readAsDataURL(file); 
		reader.onload = function(e) { 
			$('#preview4').attr('src', e.target.result);
			$('#previewimage4').attr('src', e.target.result);
			$('#imgChk4').val('1')
			$('#fileChk4').val(e.target.result);
		}
		imgdata4(file)
	}
}
function imgdata4(file){
		data = new FormData()
		data.append("file", file)
		$.ajax({
			url : "imgUp", type : "post", data : data, contentType : false, enctype : 'multipart/form-data', processData : false,
			success : function(a){
				$('#fileChk4').val(a.url)
			}
		})
}

function content4(){
	check4 = 0;
	document.getElementById("content4").style.display='block';
	document.getElementById("image4").style.display='none';
	
	$('#preview4').attr('src', 'resources/diaryimg/diary_plus.png' )
	$('#previewimage4').attr('src', 'resources/diaryimg/trip.png' )
	$('#imgChk4').val('0')
	
	document.getElementById("fileChk4").value="";
	document.getElementById("comentimage4").value="";
}
function image4(){
	check4 = 1;
	document.getElementById("content4").style.display='none';
	document.getElementById("image4").style.display='block';
	$('#previewimage4').attr('src', 'resources/diaryimg/diary_plus.png' )
	document.getElementById("coment4").value="";
}

function page4(){
	if(pageNum == 5){
		return;
	}
	
	if(pageNum == 1){
		if(check1 == 0){
			if(document.getElementById("coment1").value == "" || document.getElementById("coment1").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("coment1").focus();
				return;
			}
			if(document.getElementById("coment1").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}else{
			if(document.getElementById("imgChk1").value == '0'){
				alert('???????????? ????????????.')
				return ;
			}if(document.getElementById("comentimage1").value == "" || document.getElementById("comentimage1").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("comentimage1").focus();
				return;
			}
			if(document.getElementById("comentimage1").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}
	}
	if(pageNum == 2){
		if(check2 == 0){
			if(document.getElementById("coment2").value == "" || document.getElementById("coment2").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("coment2").focus();
				return;
			}
			if(document.getElementById("coment2").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}else{
			if(document.getElementById("imgChk2").value == '0'){
				alert('???????????? ????????????.')
				return ;
			}if(document.getElementById("comentimage2").value == "" || document.getElementById("comentimage2").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("comentimage2").focus();
				return;
			}
			if(document.getElementById("comentimage2").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}
	}
	if(pageNum == 3){
		if(check3 == 0){
			if(document.getElementById("coment3").value == "" || document.getElementById("coment3").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("coment3").focus();
				return;
			}
			if(document.getElementById("coment3").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}else{
			if(document.getElementById("imgChk3").value == '0'){
				alert('???????????? ????????????.')
				return ;
			}if(document.getElementById("comentimage3").value == "" || document.getElementById("comentimage3").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("comentimage3").focus();
				return;
			}
			if(document.getElementById("comentimage3").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}
	}
	if(pageNum == 4){
		if(check4 == 0){
			if(document.getElementById("coment4").value == "" || document.getElementById("coment4").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("coment4").focus();
				return;
			}
			if(document.getElementById("coment4").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}else{
			if(document.getElementById("imgChk4").value == '0'){
				alert('???????????? ????????????.')
				return ;
			}if(document.getElementById("comentimage4").value == "" || document.getElementById("comentimage4").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("comentimage4").focus();
				return;
			}
			if(document.getElementById("comentimage4").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}
	}
		if(check5 == 0){
		$('#previewimage5').attr('src', 'resources/diaryimg/trip.png')
	}
	document.getElementById("view1").style.display='none';
	document.getElementById("view2").style.display='none';
	document.getElementById("view3").style.display='none';
	document.getElementById("view4").style.display='none';
	document.getElementById("view5").style.display='block';
	document.getElementById("wbtn1").style.display='none';
	document.getElementById("ibtn1").style.display='none';
	document.getElementById("wbtn2").style.display='none';
	document.getElementById("ibtn2").style.display='none';
	document.getElementById("wbtn3").style.display='none';
	document.getElementById("ibtn3").style.display='none';
	document.getElementById("wbtn4").style.display='none';
	document.getElementById("ibtn4").style.display='none';
	document.getElementById("wbtn5").style.display='revert';
	document.getElementById("ibtn5").style.display='revert';
	document.getElementById("de5").style.display='revert';
	
	pageNum = 5;
}
//-------------------------------------------------------------- 4??????
function readURL5(input) {	
	var file = input.files[0] 
	console.log(file)
	if (file != '') {
		var reader = new FileReader();
		reader.readAsDataURL(file); 
		reader.onload = function(e) { 
			$('#preview5').attr('src', e.target.result);
			$('#previewimage5').attr('src', e.target.result);
			$('#imgChk5').val('1')
			$('#fileChk5').val(e.target.result);
		}
		imgdata5(file)
	}
}
function imgdata5(file){
		data = new FormData()
		data.append("file", file)
		$.ajax({
			url : "imgUp", type : "post", data : data, contentType : false, enctype : 'multipart/form-data', processData : false,
			success : function(a){
				$('#fileChk5').val(a.url)
			}
		})
}

function content5(){
	check5 = 0;
	document.getElementById("content5").style.display='block';
	document.getElementById("image5").style.display='none';
	
	$('#preview5').attr('src', 'resources/diaryimg/diary_plus.png' )
	$('#previewimage5').attr('src', 'resources/diaryimg/trip.png' )
	$('#imgChk5').val('0')
	
	document.getElementById("fileChk5").value="";
	document.getElementById("comentimage5").value="";
}
function image5(){
	check5 = 1;
	document.getElementById("content5").style.display='none';
	document.getElementById("image5").style.display='block';
	$('#previewimage5').attr('src', 'resources/diaryimg/diary_plus.png' )
	document.getElementById("coment5").value="";
}

// ===================================================================== ?????????
function del1(){
	if(document.getElementById("coment2").value == ""){
		if(document.getElementById("fileChk2").value == ""){
			alert('???????????? ???????????? ????????????.')
			return ;
		}
	}
	if(pageNum == 2) {
		page0();
	}
	if(pageNum == 3) {
		page1();
	}
	if(pageNum == 4) {
		page2();
	}
	if(pageNum == 5) {
		page3();
	}
	if(check2 == 0){
		if(document.getElementById("coment2").value == ""){
			$('#previewimage1').attr('src', 'resources/diaryimg/diary_plus.png')
		}else{
			$('#previewimage1').attr('src', 'resources/diaryimg/trip.png')
		}
		document.getElementById("coment1").value = document.getElementById("coment2").value
		
		document.getElementById("comentimage1").value="";
		document.getElementById("fileChk1").value="";
		$('#preview1').attr('src', 'resources/diaryimg/diary_plus.png')

		document.getElementById("content1").style.display='block';
		document.getElementById("image1").style.display='none';
		$('#imgChk1').val('0')
		check1 = 0;
		$('#previewimage2').attr('src', 'resources/diaryimg/diary_plus.png')
	}else{
		document.getElementById("comentimage1").value = document.getElementById("comentimage2").value
		document.getElementById("fileChk1").value = document.getElementById("fileChk2").value
		$('#preview1').attr('src', document.getElementById("preview2").src)
		$('#previewimage1').attr('src', document.getElementById("previewimage2").src)
		
		document.getElementById("coment1").value="";
		document.getElementById("content1").style.display='none';
		document.getElementById("image1").style.display='block';
		
		$('#imgChk1').val('1')
		check1 = 1;
	}
	if(document.getElementById("coment3").value == ""){
		if(document.getElementById("fileChk3").value == ""){
			document.getElementById("pre1").style.display='none';
			
		}
	}
	
	if(check3 == 0){
		if(document.getElementById("coment3").value == ""){
			$('#previewimage2').attr('src', 'resources/diaryimg/diary_plus.png')
		}else{
			$('#previewimage2').attr('src', 'resources/diaryimg/trip.png')
		}
		document.getElementById("coment2").value = document.getElementById("coment3").value
		
		document.getElementById("comentimage2").value="";
		document.getElementById("fileChk2").value="";
		$('#preview2').attr('src', 'resources/diaryimg/diary_plus.png')

		document.getElementById("content2").style.display='block';
		document.getElementById("image2").style.display='none';
		$('#imgChk2').val('0')
		check2 = 0;
		$('#previewimage3').attr('src', 'resources/diaryimg/diary_plus.png')
	}else{
		document.getElementById("comentimage2").value = document.getElementById("comentimage3").value
		document.getElementById("fileChk2").value = document.getElementById("fileChk3").value
		$('#preview2').attr('src', document.getElementById("preview3").src)
		$('#previewimage2').attr('src', document.getElementById("previewimage3").src)
		document.getElementById("coment2").value="";
		document.getElementById("content2").style.display='none';
		document.getElementById("image2").style.display='block';
		$('#imgChk2').val('1')
		check2 = 1;
	}
	if(document.getElementById("coment4").value == ""){
		if(document.getElementById("fileChk4").value == ""){
			document.getElementById("pre2").style.display='none';	
		}
	}
	if(check4 == 0){
		if(document.getElementById("coment4").value == ""){
			$('#previewimage3').attr('src', 'resources/diaryimg/diary_plus.png')
		}else{
			$('#previewimage3').attr('src', 'resources/diaryimg/trip.png')
		}
		document.getElementById("coment3").value = document.getElementById("coment4").value	
		document.getElementById("comentimage3").value="";
		document.getElementById("fileChk3").value="";
		$('#preview3').attr('src', 'resources/diaryimg/diary_plus.png')

		document.getElementById("content3").style.display='block';
		document.getElementById("image3").style.display='none';
		$('#imgChk3').val('0')
		check3 = 0;
		$('#previewimage4').attr('src', 'resources/diaryimg/diary_plus.png')
	}else{
		document.getElementById("comentimage3").value = document.getElementById("comentimage4").value
		document.getElementById("fileChk3").value = document.getElementById("fileChk4").value
		$('#preview3').attr('src', document.getElementById("preview4").src)
		$('#previewimage3').attr('src', document.getElementById("previewimage4").src)	
		document.getElementById("coment3").value="";
		document.getElementById("content3").style.display='none';
		document.getElementById("image3").style.display='block';
		$('#imgChk3').val('1')
		check3 = 1;
	}
	if(document.getElementById("coment5").value == ""){
		if(document.getElementById("fileChk5").value == ""){
			document.getElementById("pre3").style.display='none';		
		}
	}	
	if(check5 == 0){
		if(document.getElementById("coment5").value == ""){
			$('#previewimage4').attr('src', 'resources/diaryimg/diary_plus.png')
		}else{
			$('#previewimage4').attr('src', 'resources/diaryimg/trip.png')
		}
		document.getElementById("coment4").value = document.getElementById("coment5").value
		document.getElementById("comentimage4").value="";
		document.getElementById("fileChk4").value="";
		$('#preview4').attr('src', 'resources/diaryimg/diary_plus.png')
	
		document.getElementById("content4").style.display='block';
		document.getElementById("image4").style.display='none';
		$('#imgChk4').val('0')
		document.getElementById("coment5").value="";
		check4 = 0;
		$('#previewimage5').attr('src', 'resources/diaryimg/diary_plus.png')
		
	}else{
		document.getElementById("comentimage4").value = document.getElementById("comentimage5").value
		document.getElementById("fileChk4").value = document.getElementById("fileChk5").value
		$('#preview4').attr('src', document.getElementById("preview5").src)
		$('#previewimage4').attr('src', document.getElementById("previewimage5").src)
		document.getElementById("comentimage5").value="";
		document.getElementById("fileChk5").value="";
		
		document.getElementById("coment4").value="";
		document.getElementById("content4").style.display='none';
		document.getElementById("image4").style.display='block';
		
		$('#preview5').attr('src', 'resources/diaryimg/diary_plus.png')
		$('#previewimage5').attr('src', 'resources/diaryimg/diary_plus.png')
		$('#imgChk4').val('1')
		check4 = 1;
	}
	document.getElementById("content5").style.display='block';
	document.getElementById("image5").style.display='none';
	check5 = 0;
	
	
}
//===================================================================== ?????????
function del2(){
	if(pageNum == 2) {
		page0();
	}
	if(pageNum == 3) {
		page1();
	}
	if(pageNum == 4) {
		page2();
	}
	if(pageNum == 5) {
		page3();
	}
	if(document.getElementById("coment3").value == ""){
		if(document.getElementById("fileChk3").value == ""){
			document.getElementById("pre1").style.display='none';
		}
	}
	if(check3 == 0){
		if(document.getElementById("coment3").value == ""){
			$('#previewimage2').attr('src', 'resources/diaryimg/diary_plus.png')
		}else{
			$('#previewimage2').attr('src', 'resources/diaryimg/trip.png')
		}
		document.getElementById("coment2").value = document.getElementById("coment3").value
		
		document.getElementById("comentimage2").value="";
		document.getElementById("fileChk2").value="";
		$('#preview2').attr('src', 'resources/diaryimg/diary_plus.png')

		document.getElementById("content2").style.display='block';
		document.getElementById("image2").style.display='none';
		$('#imgChk2').val('0')
		check2 = 0;
		$('#previewimage3').attr('src', 'resources/diaryimg/diary_plus.png')
	}else{
		document.getElementById("comentimage2").value = document.getElementById("comentimage3").value
		document.getElementById("fileChk2").value = document.getElementById("fileChk3").value
		$('#preview2').attr('src', document.getElementById("preview3").src)
		$('#previewimage2').attr('src', document.getElementById("previewimage3").src)
		
		document.getElementById("coment2").value="";
		document.getElementById("content2").style.display='none';
		document.getElementById("image2").style.display='block';
		$('#imgChk2').val('1')
		check2 = 1;
	}
	if(document.getElementById("coment4").value == ""){
		if(document.getElementById("fileChk4").value == ""){
			document.getElementById("pre2").style.display='none';	
		}
	}
	if(check4 == 0){
		if(document.getElementById("coment4").value == ""){
			$('#previewimage3').attr('src', 'resources/diaryimg/diary_plus.png')
		}else{
			$('#previewimage3').attr('src', 'resources/diaryimg/trip.png')
		}
		document.getElementById("coment3").value = document.getElementById("coment4").value
		
		document.getElementById("comentimage3").value="";
		document.getElementById("fileChk3").value="";
		$('#preview3').attr('src', 'resources/diaryimg/diary_plus.png')

		document.getElementById("content3").style.display='block';
		document.getElementById("image3").style.display='none';
		$('#imgChk3').val('0')
		check3 = 0;
		$('#previewimage4').attr('src', 'resources/diaryimg/diary_plus.png')
	}else{
		document.getElementById("comentimage3").value = document.getElementById("comentimage4").value
		document.getElementById("fileChk3").value = document.getElementById("fileChk4").value
		$('#preview3').attr('src', document.getElementById("preview4").src)
		$('#previewimage3').attr('src', document.getElementById("previewimage4").src)
		
		document.getElementById("coment3").value="";
		document.getElementById("content3").style.display='none';
		document.getElementById("image3").style.display='block';
		$('#imgChk3').val('1')
		check3 = 1;
	}
	if(document.getElementById("coment5").value == ""){
		if(document.getElementById("fileChk5").value == ""){
			document.getElementById("pre3").style.display='none';
			
		}
	}
	if(check5 == 0){
		if(document.getElementById("coment5").value == ""){
			$('#previewimage4').attr('src', 'resources/diaryimg/diary_plus.png')
		}else{
			$('#previewimage4').attr('src', 'resources/diaryimg/trip.png')
		}
		document.getElementById("coment4").value = document.getElementById("coment5").value
		document.getElementById("comentimage4").value="";
		document.getElementById("fileChk4").value="";
		$('#preview4').attr('src', 'resources/diaryimg/diary_plus.png')

		document.getElementById("content4").style.display='block';
		document.getElementById("image4").style.display='none';
		$('#imgChk4').val('0')
		document.getElementById("coment5").value="";
		check4 = 0;
		$('#previewimage5').attr('src', 'resources/diaryimg/diary_plus.png')
	}else{
		document.getElementById("comentimage4").value = document.getElementById("comentimage5").value
		document.getElementById("fileChk4").value = document.getElementById("fileChk5").value
		$('#preview4').attr('src', document.getElementById("preview5").src)
		$('#previewimage4').attr('src', document.getElementById("previewimage5").src)
		document.getElementById("comentimage5").value="";
		document.getElementById("fileChk5").value="";
		
		document.getElementById("coment4").value="";
		document.getElementById("content4").style.display='none';
		document.getElementById("image4").style.display='block';
		
		$('#preview5').attr('src', 'resources/diaryimg/diary_plus.png')
		$('#previewimage5').attr('src', 'resources/diaryimg/diary_plus.png')
		$('#imgChk4').val('1')
		check4 = 1;
	}
	document.getElementById("content5").style.display='block';
	document.getElementById("image5").style.display='none';
	check5 = 0;
}
//===================================================================== ?????????
function del3(){
	if(pageNum == 3) {
		page1();
	}
	if(pageNum == 4) {
		page2();
	}
	if(pageNum == 5) {
		page3();
	}
	if(document.getElementById("coment4").value == ""){
		if(document.getElementById("fileChk4").value == ""){
			document.getElementById("pre2").style.display='none';	
		}
	}
	if(check4 == 0){
		if(document.getElementById("coment4").value == ""){
			$('#previewimage3').attr('src', 'resources/diaryimg/diary_plus.png')
		}else{
			$('#previewimage3').attr('src', 'resources/diaryimg/trip.png')
		}
		document.getElementById("coment3").value = document.getElementById("coment4").value
		
		document.getElementById("comentimage3").value="";
		document.getElementById("fileChk3").value="";
		$('#preview3').attr('src', 'resources/diaryimg/diary_plus.png')

		document.getElementById("content3").style.display='block';
		document.getElementById("image3").style.display='none';
		$('#imgChk3').val('0')
		check3 = 0;
		$('#previewimage4').attr('src', 'resources/diaryimg/diary_plus.png')
	}else{
		document.getElementById("comentimage3").value = document.getElementById("comentimage4").value
		document.getElementById("fileChk3").value = document.getElementById("fileChk4").value
		$('#preview3').attr('src', document.getElementById("preview4").src)
		$('#previewimage3').attr('src', document.getElementById("previewimage4").src)
		
		document.getElementById("coment3").value="";
		document.getElementById("content3").style.display='none';
		document.getElementById("image3").style.display='block';
		$('#imgChk3').val('1')
		check3 = 1;
	}
	if(document.getElementById("coment5").value == ""){
		if(document.getElementById("fileChk5").value == ""){
			document.getElementById("pre3").style.display='none';
			
		}
	}
	if(check5 == 0){
		if(document.getElementById("coment5").value == ""){
			$('#previewimage4').attr('src', 'resources/diaryimg/diary_plus.png')
		}else{
			$('#previewimage4').attr('src', 'resources/diaryimg/trip.png')
		}
		document.getElementById("coment4").value = document.getElementById("coment5").value

		document.getElementById("comentimage4").value="";
		document.getElementById("fileChk4").value="";
		$('#preview4').attr('src', 'resources/diaryimg/diary_plus.png')

		document.getElementById("content4").style.display='block';
		document.getElementById("image4").style.display='none';
		$('#imgChk4').val('0')
		document.getElementById("coment5").value="";
		check4 = 0;
		$('#previewimage5').attr('src', 'resources/diaryimg/diary_plus.png')
	}else{
		document.getElementById("comentimage4").value = document.getElementById("comentimage5").value
		document.getElementById("fileChk4").value = document.getElementById("fileChk5").value
		$('#preview4').attr('src', document.getElementById("preview5").src)
		$('#previewimage4').attr('src', document.getElementById("previewimage5").src)
		document.getElementById("comentimage5").value="";
		document.getElementById("fileChk5").value="";
		
		document.getElementById("coment4").value="";
		document.getElementById("content4").style.display='none';
		document.getElementById("image4").style.display='block';
		
		$('#preview5').attr('src', 'resources/diaryimg/diary_plus.png')
		$('#previewimage5').attr('src', 'resources/diaryimg/diary_plus.png')
		$('#imgChk4').val('1')
		check4 = 1;
	}
	document.getElementById("content5").style.display='block';
	document.getElementById("image5").style.display='none';
	check5 = 0;
}
//===================================================================== ?????????
function del4(){
	if(pageNum == 4) {
		page2();
	}
	if(pageNum == 5) {
		page3();
	}
	if(document.getElementById("coment5").value == ""){
		if(document.getElementById("fileChk5").value == ""){
			document.getElementById("pre3").style.display='none';
			
		}
	}
	if(check5 == 0){
		if(document.getElementById("coment5").value == ""){
			$('#previewimage4').attr('src', 'resources/diaryimg/diary_plus.png')
		}else{
			$('#previewimage4').attr('src', 'resources/diaryimg/trip.png')
		}
		document.getElementById("coment4").value = document.getElementById("coment5").value

		document.getElementById("comentimage4").value="";
		document.getElementById("fileChk4").value="";
		$('#preview4').attr('src', 'resources/diaryimg/diary_plus.png')

		document.getElementById("content4").style.display='block';
		document.getElementById("image4").style.display='none';
		$('#imgChk4').val('0')
		document.getElementById("coment5").value="";
		check4 = 0;
		$('#previewimage5').attr('src', 'resources/diaryimg/diary_plus.png')
	}else{
		document.getElementById("comentimage4").value = document.getElementById("comentimage5").value
		document.getElementById("fileChk4").value = document.getElementById("fileChk5").value
		$('#preview4').attr('src', document.getElementById("preview5").src)
		$('#previewimage4').attr('src', document.getElementById("previewimage5").src)
		document.getElementById("comentimage5").value="";
		document.getElementById("fileChk5").value="";
		
		document.getElementById("coment4").value="";
		document.getElementById("content4").style.display='none';
		document.getElementById("image4").style.display='block';
		
		$('#preview5').attr('src', 'resources/diaryimg/diary_plus.png')
		$('#previewimage5').attr('src', 'resources/diaryimg/diary_plus.png')
		$('#imgChk4').val('1')
		check4 = 1;
	}
	document.getElementById("content5").style.display='block';
	document.getElementById("image5").style.display='none';
	check5 = 0;
}
//===================================================================== ?????????
function del5(){
	if(pageNum == 5) {
		page3();
	}
	document.getElementById("pre3").style.display='block';
	
		document.getElementById("coment5").value = "";
		document.getElementById("comentimage5").value="";
		document.getElementById("fileChk5").value="";

		$('#preview5').attr('src', 'resources/diaryimg/diary_plus.png')
		$('#previewimage5').attr('src', 'resources/diaryimg/diary_plus.png')
		document.getElementById("content5").style.display='block';
		document.getElementById("image5").style.display='none';
		document.getElementById("de5").style.display='none';
		$('#imgChk5').val('0')
		
	check5 = 0;
}

function register(){
	if(document.getElementById("title").value == "" || document.getElementById("title").value.replace(blank_pattern1, '') == "") {
		alert("????????? ????????? ?????????.");
		document.getElementById("title").focus();
		return;
	}
	
	if(document.getElementById("title").value.length >= 20){
		alert('????????? 20??? ????????? ??????????????????'); return;
	}
	if(document.getElementById("place1").value == ""){
		alert('????????? ??????????????????'); return;
	}
	if(document.getElementById("indate").value == "") {
		alert('?????? ???????????? ??????????????????.');
		return;
	}
	var date1 = new Date(document.getElementById("indate").value );
	var date2 = new Date();
	if(date1 > date2) {
		alert("?????? ???????????? ?????? ???????????? ?????? ??? ????????????.");
		return;
	} 
	var date3 = new Date(document.getElementById("outdate").value );
	if(document.getElementById("outdate").value == "") {
		alert('?????? ???????????? ??????????????????.');
		return;
	}
	if(date3 > date2) {
		alert('?????? ???????????? ?????? ???????????? ?????? ??? ????????????.');
		return;
	}
	if(date1 > date3) {
		alert('?????? ???????????? ?????? ??????????????? ?????? ??? ????????????.');
		return;
	}
	if(pageNum == 1){
		if(check1 == 0){
			if(document.getElementById("coment1").value == "" || document.getElementById("coment1").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("coment1").focus();
				return;
			}
			if(document.getElementById("coment1").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}else{
			if(document.getElementById("imgChk1").value == '0'){
				alert('???????????? ????????????.')
				return ;
			}if(document.getElementById("comentimage1").value == "" || document.getElementById("comentimage1").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("comentimage1").focus();
				return;
			}
			if(document.getElementById("comentimage1").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}
	}
	if(pageNum == 2){
		if(check2 == 0){
			if(document.getElementById("coment2").value == "" || document.getElementById("coment2").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("coment2").focus();
				return;
			}
			if(document.getElementById("coment2").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}else{
			if(document.getElementById("imgChk2").value == '0'){
				alert('???????????? ????????????.')
				return ;
			}if(document.getElementById("comentimage2").value == "" || document.getElementById("comentimage2").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("comentimage2").focus();
				return;
			}
			if(document.getElementById("comentimage2").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}
	}
	if(pageNum == 3){
		if(check3 == 0){
			if(document.getElementById("coment3").value == "" || document.getElementById("coment3").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("coment3").focus();
				return;
			}
			if(document.getElementById("coment3").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}else{
			if(document.getElementById("imgChk3").value == '0'){
				alert('???????????? ????????????.')
				return ;
			}if(document.getElementById("comentimage3").value == "" || document.getElementById("comentimage3").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("comentimage3").focus();
				return;
			}
			if(document.getElementById("comentimage3").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}
	}
	if(pageNum == 4){
		if(check4 == 0){
			if(document.getElementById("coment4").value == "" || document.getElementById("coment4").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("coment4").focus();
				return;
			}
			if(document.getElementById("coment4").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}else{
			if(document.getElementById("imgChk4").value == '0'){
				alert('???????????? ????????????.')
				return ;
			}if(document.getElementById("comentimage4").value == "" || document.getElementById("comentimage4").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("comentimage4").focus();
				return;
			}
			if(document.getElementById("comentimage4").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}
	}
	if(pageNum == 5){
		if(check5 == 0){
			if(document.getElementById("coment5").value == "" || document.getElementById("coment5").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("coment5").focus();
				return;
			}
			if(document.getElementById("coment5").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
		}else{
			if(document.getElementById("imgChk5").value == '0'){
				alert('???????????? ????????????.')
				return ;
			}if(document.getElementById("comentimage5").value == "" || document.getElementById("comentimage5").value.replace(blank_pattern1, '') == "") {
				alert("??? ????????? ????????????.");
				document.getElementById("comentimage5").focus();
				return;
			}
			if(document.getElementById("comentimage5").value.length >= 100) {
				alert('??? ????????? 100????????? ????????? ??? ????????????.')
				return ;
			}
			
		}
	}
	var str1 = document.getElementById("coment1").value;
	var str2 = document.getElementById("coment2").value;
	var str3 = document.getElementById("coment3").value;
	var str4 = document.getElementById("coment4").value;
	var str5 = document.getElementById("coment5").value;
	str1 = str1.replaceAll("\n", "\\n");
	document.getElementById("coment1").value = str1;
	
	str2 = str2.replaceAll("\n", "\\n");
	document.getElementById("coment2").value = str2;
	
	str3 = str3.replaceAll("\n", "\\n");
	document.getElementById("coment3").value = str3;
	
	str4 = str4.replaceAll("\n", "\\n");
	document.getElementById("coment4").value = str4;
	
	str5 = str5.replaceAll("\n", "\\n");
	document.getElementById("coment5").value = str5;
	
	var s1 = document.getElementById("comentimage1").value;
	var s2 = document.getElementById("comentimage2").value;
	var s3 = document.getElementById("comentimage3").value;
	var s4 = document.getElementById("comentimage4").value;
	var s5 = document.getElementById("comentimage5").value;
	s1 = s1.replaceAll("\n", "");
	document.getElementById("comentimage1").value = s1;
	s2 = s2.replaceAll("\n", "");
	document.getElementById("comentimage2").value = s2;
	s3 = s3.replaceAll("\n", "");
	document.getElementById("comentimage3").value = s3;
	s4 = s4.replaceAll("\n", "");
	document.getElementById("comentimage4").value = s4;
	s5 = s5.replaceAll("\n", "");
	document.getElementById("comentimage5").value = s5;
	
	document.getElementById("form").submit()
}

function modal(){
	document.getElementById("modal").style.visibility="visible";
	document.getElementById("place").value = "";
}

function cancle(){
	document.getElementById("modal").style.visibility='hidden';
	document.getElementById("non").style.visibility="hidden";
}

function save(){
	// ????????? ???????????? div??? ?????? ?????????
	console.log(document.getElementById("place1").value)
	if(document.getElementById("place1").value == ""){
		document.getElementById("place1").value = document.getElementById("place").value
		document.getElementById("placename1").innerHTML = document.getElementById("place1").value;
	}else if(document.getElementById("place2").value == ""){
		document.getElementById("place2").value = document.getElementById("place").value
		document.getElementById("placename2").innerHTML = document.getElementById("place2").value;
	}else if(document.getElementById("place3").value == ""){
		document.getElementById("place3").value = document.getElementById("place").value
		document.getElementById("placename3").innerHTML = document.getElementById("place3").value;
	}else{
		alert('???????????? 3?????? ?????????????????????')
	}
	document.getElementById("modal").style.visibility='hidden';
}


function placeList(){
	// ?????? div??? ?????? ????????? ?????????????????? flex?????? ?????? ????????? (??????????????? none??????)
	if(document.getElementById("place1").value != ""){
		document.getElementById('pla1').style.display='flex';
	}
	if(document.getElementById("place2").value != ""){
		document.getElementById('pla2').style.display='flex';
	}
	if(document.getElementById("place3").value != ""){
		document.getElementById('pla3').style.display='flex';
	}
	document.getElementById("placeList").style.display='inline-block';
	
}

function delete1(){
	// ????????? ???????????? div??? ????????? ????????? ???????????? ????????? div??? ?????? ????????? none??????
	document.getElementById('place1').value = document.getElementById('place2').value
	document.getElementById('place2').value = document.getElementById('place3').value
	document.getElementById('place3').value = "";
	
	document.getElementById("placename1").innerHTML = document.getElementById('place1').value
	document.getElementById("placename2").innerHTML = document.getElementById('place2').value
	document.getElementById("placename3").innerHTML = document.getElementById('place3').value
	document.getElementById("pla3").style.display='none';
	document.getElementById("placeList").style.display='none';	
}
function delete2(){
	document.getElementById('place2').value = document.getElementById('place3').value
	document.getElementById('place3').value = "";
	
	document.getElementById("placename2").innerHTML = document.getElementById('place2').value
	document.getElementById("placename3").innerHTML = document.getElementById('place3').value
	document.getElementById("pla3").style.display='none';
	document.getElementById("placeList").style.display='none';	
}
function delete3(){
	document.getElementById('place3').value = "";
	document.getElementById("placename3").innerHTML = document.getElementById('place3').value
	document.getElementById("pla3").style.display='none';
	document.getElementById("placeList").style.display='none';	
}

// ????????? ????????? placeList ??????
$(document).click(function(e){
// ?????? ????????? ??????????????? ????????? ??????
    if (!$(e.target).is('#placeList')) { // ????????? ????????? id??? placeList??? ????????????
    	if(!$(e.target).is('#placeinput')) // ????????? ????????? id??? placeinput??? ???????????? (?????? ???????????? input?????? ??????????????? placeinput??? ?????????)
    	document.getElementById("placeList").style.display='none';
    }

});



function mapSearch(){
		document.getElementById("non").style.visibility="visible";
	}

	var markers = [];

	var mapContainer = document.getElementById('map'), // ????????? ????????? div 
	    mapOption = {
	        center: new kakao.maps.LatLng(37.566826, 126.9786567), // ????????? ????????????
	        level: 3 // ????????? ?????? ??????
	    };  

	// ????????? ???????????????    
	var map = new kakao.maps.Map(mapContainer, mapOption); 

	// ?????? ?????? ????????? ???????????????
	var ps = new kakao.maps.services.Places();  

	// ?????? ?????? ???????????? ????????? ???????????? ??? ???????????? ????????? ?????????????????? ???????????????
	var infowindow = new kakao.maps.InfoWindow({zIndex:1});

	// ???????????? ????????? ???????????????
	searchPlaces();

	// ????????? ????????? ???????????? ???????????????
	function searchPlaces() {

	    var keyword = document.getElementById('keyword').value;

	    if (!keyword.replace(/^\s+|\s+$/g, '')) {
	        alert('???????????? ??????????????????!');
	        return false;
	    }

	    // ???????????? ????????? ?????? ???????????? ??????????????? ???????????????
	    ps.keywordSearch( keyword, placesSearchCB); 
	}

	// ??????????????? ???????????? ??? ???????????? ???????????? ?????????
	function placesSearchCB(data, status, pagination) {
	    if (status === kakao.maps.services.Status.OK) {

	        // ??????????????? ????????? ???????????????
	        // ?????? ????????? ????????? ???????????????
	        displayPlaces(data);

	        // ????????? ????????? ???????????????
	        displayPagination(pagination);

	    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {

	        alert('?????? ????????? ???????????? ????????????.');
	        return;

	    } else if (status === kakao.maps.services.Status.ERROR) {

	        alert('?????? ?????? ??? ????????? ??????????????????.');
	        return;

	    }
	}

	// ?????? ?????? ????????? ????????? ???????????? ???????????????
	function displayPlaces(places) {

	    var listEl = document.getElementById('placesList'), 
	    menuEl = document.getElementById('menu_wrap'),
	    fragment = document.createDocumentFragment(), 
	    bounds = new kakao.maps.LatLngBounds(), 
	    listStr = '';
	    
	    // ?????? ?????? ????????? ????????? ???????????? ???????????????
	    removeAllChildNods(listEl);

	    // ????????? ???????????? ?????? ????????? ???????????????
	    removeMarker();
	    
	    for ( var i=0; i<places.length; i++ ) {

	        // ????????? ???????????? ????????? ???????????????
	        var placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
	            marker = addMarker(placePosition, i), 
	            itemEl = getListItem(i, places[i]); // ?????? ?????? ?????? Element??? ???????????????

	        // ????????? ?????? ????????? ???????????? ?????? ????????? ?????????????????????
	        // LatLngBounds ????????? ????????? ???????????????
	        bounds.extend(placePosition);

	        // ????????? ???????????? ????????? mouseover ?????????
	        // ?????? ????????? ?????????????????? ???????????? ???????????????
	        // mouseout ?????? ?????? ?????????????????? ????????????
	        (function(marker, title) {
	            kakao.maps.event.addListener(marker, 'mouseover', function() {
	                displayInfowindow(marker, title);
	            });

	            kakao.maps.event.addListener(marker, 'mouseout', function() {
	                infowindow.close();
	            });

	            itemEl.onmouseover =  function () {
	                displayInfowindow(marker, title);
	            };

	            itemEl.onmouseout =  function () {
	                infowindow.close();
	            };
	        })(marker, places[i].place_name);

	        fragment.appendChild(itemEl);
	    }

	    // ???????????? ???????????? ???????????? ?????? Elemnet??? ???????????????
	    listEl.appendChild(fragment);
	    menuEl.scrollTop = 0;

	    // ????????? ?????? ????????? ???????????? ?????? ????????? ??????????????????
	    map.setBounds(bounds);
	}

	// ???????????? ????????? Element??? ???????????? ???????????????
	function getListItem(index, places) {

	    var el = document.createElement('li'),
	    itemStr = '<span class="markerbg marker_' + (index+1) + '"></span>' +
	                '<div class="info">' +
	                '   <h5>' + places.place_name + '</h5>';

	    if (places.road_address_name) {
	        itemStr += '    <span>' + places.road_address_name + '</span>' +
	                    '   <span class="jibun gray">' +  places.address_name  + '</span>';
			el.id = places.road_address_name;
	    } else {
	        itemStr += '    <span>' +  places.address_name  + '</span>'; 
			el.id = places.address_name;
	    }
	                 
	      itemStr += '  <span class="tel">' + places.phone  + '</span>' +
	                '</div>';           

	    el.innerHTML = itemStr;
	    el.className = 'item';
		el.setAttribute('onClick', 'setplace(this)');
		
	    return el;
	}
	

	// ????????? ???????????? ?????? ?????? ????????? ???????????? ???????????????
	function addMarker(position, idx, title) {
	    var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // ?????? ????????? url, ??????????????? ???????????? ?????????
	        imageSize = new kakao.maps.Size(36, 37),  // ?????? ???????????? ??????
	        imgOptions =  {
	            spriteSize : new kakao.maps.Size(36, 691), // ??????????????? ???????????? ??????
	            spriteOrigin : new kakao.maps.Point(0, (idx*46)+10), // ??????????????? ????????? ??? ????????? ????????? ????????? ??????
	            offset: new kakao.maps.Point(13, 37) // ?????? ????????? ???????????? ????????? ???????????? ??????
	        },
	        markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
	            marker = new kakao.maps.Marker({
	            position: position, // ????????? ??????
	            image: markerImage 
	        });

	    marker.setMap(map); // ?????? ?????? ????????? ???????????????
	    markers.push(marker);  // ????????? ????????? ????????? ???????????????

	    return marker;
	}

	// ?????? ?????? ???????????? ?????? ????????? ?????? ???????????????
	function removeMarker() {
	    for ( var i = 0; i < markers.length; i++ ) {
	        markers[i].setMap(null);
	    }   
	    markers = [];
	}

	// ???????????? ?????? ????????? ?????????????????? ????????? ???????????????
	function displayPagination(pagination) {
	    var paginationEl = document.getElementById('pagination'),
	        fragment = document.createDocumentFragment(),
	        i; 

	    // ????????? ????????? ?????????????????? ???????????????
	    while (paginationEl.hasChildNodes()) {
	        paginationEl.removeChild (paginationEl.lastChild);
	    }

	    for (i=1; i<=pagination.last; i++) {
	        var el = document.createElement('a');
	        el.href = "#";
	        el.innerHTML = i;

	        if (i===pagination.current) {
	            el.className = 'on';
	        } else {
	            el.onclick = (function(i) {
	                return function() {
	                    pagination.gotoPage(i);
	                }
	            })(i);
	        }

	        fragment.appendChild(el);
	    }
	    paginationEl.appendChild(fragment);
	}

	// ???????????? ?????? ?????? ????????? ???????????? ??? ???????????? ???????????????
	// ?????????????????? ???????????? ???????????????
	function displayInfowindow(marker, title) {
	    var content = '<div style="padding:5px;z-index:1;">' + title + '</div>';

	    infowindow.setContent(content);
	    infowindow.open(map, marker);
	}

	 // ???????????? ????????? ?????? Element??? ???????????? ???????????????
	function removeAllChildNods(el) {   
	    while (el.hasChildNodes()) {
	        el.removeChild (el.lastChild);
	    }
	}
	
	function mapnone(){
		document.getElementById("non").style.visibility="hidden";
	}

	function setplace(data){
		var pl = data.getAttribute('id');
		document.getElementById("place").value=pl;
		document.getElementById("non").style.visibility="hidden";
	}
