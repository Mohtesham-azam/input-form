$(document).ready(function(){
// making kyc no. field required for update
$('#ofc_use').on("change", function(){
if($('#update').prop('checked')){
$('#ofc_use input[type="text"]').prop("required", true);
}
})
// restricting user to input future date
$(function(){
var dtToday = new Date();
var month = dtToday.getMonth() + 1;
var day = dtToday.getDate();
var year = dtToday.getFullYear();
if(month < 10)
month = '0' + month.toString();
if(day < 10)
day = '0' + day.toString();
var maxDate = year + '-' + month + '-' + day;
$('input[type = date]').attr('max', maxDate);
});
// making text box required whose corresponding checkbox is checked & disabled other for section 2
$('#pia').on("change", function(){
$('.chk input[type="text"]').prop("disabled", true);
if($('#pn').prop('checked')){
$("#psprt").prop("required", true);
$("#psprt").prop("disabled", false);
} else{
$("#psprt").prop("required", false);
}
if($('#vc').prop('checked')){
$("#vic").prop("required", true);
$("#vic").prop("disabled", false);
} else{
$("#vic").prop("required", false);
}
if($('#dlc').prop('checked')){
$("#dl").prop("required", true);
$("#dl").prop("disabled", false);
} else{
$("#dl").prop("required", false);
}
if($('#njcc').prop('checked')){
$("#njc").prop("required", true);
$("#njc").prop("disabled", false);
} else{
$("#njc").prop("required", false);
}
if($('#nprc').prop('checked')){
$("#npr").prop("required", true);
$("#npr").prop("disabled", false);
} else{
$("#npr").prop("required", false);
}
if($('#ppa').prop('checked')){
$("#adhr").prop("required", true);
$("#adhr").prop("disabled", false);
} else{
$("#adhr").prop("required", false);
}
if($('#eka').prop('checked')){
$("#e-kyc").prop("required", true);
$("#e-kyc").prop("disabled", false);
} else{
$("#e-kyc").prop("required", false);
}
if($('#ova').prop('checked')){
$("#verification").prop("required", true);
$("#verification").prop("disabled", false);
} else{
$("#verification").prop("required", false);
}
});
// auto fill on clicking checkbox
$('#same').on("change", function(){
if(same.checked == true){
$('.chk1 input[type="radio"]').prop("disabled", true);
if(pn.checked == true){
pn1.checked = true;
} else{
pn1.checked = false;
}
if(vc.checked == true){
vc1.checked = true;
} else{
vc1.checked = false;
}
if(dlc.checked == true){
dlc1.checked = true;
} else{
dlc1.checked = false;
}
if(njcc.checked == true){
njcc1.checked = true;
} else{
njcc1.checked = false;
}
if(nprc.checked == true){
nprc1.checked = true;
} else{
nprc1.checked = false;
}
if(ppa.checked == true){
ppa1.checked = true;
} else{
ppa1.checked = false;
}
if(eka.checked == true){
eka1.checked = true;
} else{
eka1.checked = false;
}
if(ova.checked == true){
ova1.checked = true;
} else{
ova1.checked = false;
}
document.getElementById("psprt1").value = document.getElementById("psprt").value;
document.getElementById("vic1").value = document.getElementById("vic").value;
document.getElementById("dl1").value = document.getElementById("dl").value;
document.getElementById("njcc1").value = document.getElementById("njcc").value;
document.getElementById("npr1").value = document.getElementById("npr").value;
document.getElementById("adhr1").value = document.getElementById("adhr").value;
document.getElementById("e-kyc1").value = document.getElementById("e-kyc").value;
document.getElementById("verification1").value = document.getElementById("verification").value;
document.getElementById("cadd1").value = document.getElementById("add1").value; 
document.getElementById("cadd2").value = document.getElementById("add2").value;
document.getElementById("cadd3").value = document.getElementById("add3").value;
document.getElementById("ccity1").value = document.getElementById("city1").value;
document.getElementById("cdist1").value = document.getElementById("dist1").value;
document.getElementById("cpin1").value = document.getElementById("pin1").value;
document.getElementById("cstate1").value = document.getElementById("state1").value;
document.getElementById("ciso1").value = document.getElementById("iso1").value;
document.getElementById("psprt1").readOnly = true;
document.getElementById("vic1").readOnly = true;
document.getElementById("dl1").readOnly = true;
document.getElementById("njc1").readOnly = true;
document.getElementById("npr1").readOnly = true;
document.getElementById("adhr1").readOnly = true;
document.getElementById("e-kyc1").readOnly = true;
document.getElementById("verification1").readOnly = true;
document.getElementById("dpa").readOnly = true;
document.getElementById("cadd1").readOnly = true;
document.getElementById("cadd2").readOnly = true;
document.getElementById("cadd3").readOnly = true;
document.getElementById("ccity1").readOnly = true;
document.getElementById("cdist1").readOnly = true;
document.getElementById("cpin1").readOnly = true;
document.getElementById("cstate1").readOnly = true;
document.getElementById("ciso1").readOnly = true;
} else{
$('.chk1 input[type="radio"]').prop("disabled", false);
pn1.checked = false;
vc1.checked = false;
dlc1.checked = false;
njcc1.checked = false;
nprc1.checked = false;
ppa1.checked = false;
eka1.checked = false;
ova1.checked = false;
document.getElementById("psprt1").value = "";
document.getElementById("vic1").value = "";
document.getElementById("dl1").value = "";
document.getElementById("njc1").value = "";
document.getElementById("npr1").value = "";
document.getElementById("adhr1").value = "";
document.getElementById("e-kyc1").value = "";
document.getElementById("verification1").value = "";
document.getElementById("dpa").value = "";
document.getElementById("cadd1").value = "";
document.getElementById("cadd2").value = "";
document.getElementById("cadd3").value = "";
document.getElementById("ccity1").value = "";
document.getElementById("cdist1").value = "";
document.getElementById("cpin1").value = "";
document.getElementById("cstate1").value = "";
document.getElementById("ciso1").value = "";
document.getElementById("psprt1").readOnly = false;
document.getElementById("vic1").readOnly = false;
document.getElementById("dl1").readOnly = false;
document.getElementById("njc1").readOnly = false;
document.getElementById("npr1").readOnly = false;
document.getElementById("adhr1").readOnly = false;
document.getElementById("e-kyc1").readOnly = false;
document.getElementById("verification1").readOnly = false;
document.getElementById("dpa").readOnly = false;
document.getElementById("cadd1").readOnly = false;
document.getElementById("cadd2").readOnly = false;
document.getElementById("cadd3").readOnly = false;
document.getElementById("ccity1").readOnly = false;
document.getElementById("cdist1").readOnly = false;
document.getElementById("cpin1").readOnly = false;
document.getElementById("cstate1").readOnly = false;
document.getElementById("ciso1").readOnly = false;
}
});
// making text box required whose corresponding checkbox is checked & disabled other for section 3
$('#crnt_add').on("change", function(){
$('.chk1 input[type="text"]').prop("disabled", true);
if($('#pn1').prop('checked')){
$("#psprt1").prop("required", true);
$("#psprt1").prop("disabled", false);
} else{
$("#psprt1").prop("required", false);
}
if($('#vc1').prop('checked')){
$("#vic1").prop("required", true);
$("#vic1").prop("disabled", false);
} else{
$("#vic1").prop("required", false);
}
if($('#dlc1').prop('checked')){
$("#dl1").prop("required", true);
$("#dl1").prop("disabled", false);
} else{
$("#dl1").prop("required", false);
}
if($('#njcc1').prop('checked')){
$("#njc1").prop("required", true);
$("#njc1").prop("disabled", false);
} else{
$("#njc1").prop("required", false);
}
if($('#nprc1').prop('checked')){
$("#npr1").prop("required", true);
$("#npr1").prop("disabled", false);
} else{
$("#npr1").prop("required", false);
}
if($('#ppa1').prop('checked')){
$("#adhr1").prop("required", true);
$("#adhr1").prop("disabled", false);
} else{
$("#adhr1").prop("required", false);
}
if($('#eka1').prop('checked')){
$("#e-kyc1").prop("required", true);
$("#e-kyc1").prop("disabled", false);
} else{
$("#e-kyc1").prop("required", false);
}
if($('#ova1').prop('checked')){
$("#verification1").prop("required", true);
$("#verification1").prop("disabled", false);
} else{
$("#verification1").prop("required", false);
}
if($('#dpa1').prop('checked')){
$("#dpa").prop("required", true);
$("#dpa").prop("disabled", false);
} else{
$("#dpa").prop("required", false);
}
});
});