/*$('.special').text("changed")*/
/*let s=$('.special');
$(s[0]).text("changed")*/
/*$('input[type="button"]').val("Changed")*/
//let s=$('#one').text();
//alert(s)
//let s=$('#one').html("<ul><li>list</li></ul>")
//let s=$('#one').text()
//alert(s)
//$('h1').hide(10000)
//$('h1').hide('slow')
$('#hide').click(function(){
    $('h1').hide(1000)   
})
/*$('#fadein').click(function(){
    $('h1').fadeIn(1000)
})*/
$('#show').click(function(){
    $('h1').show(1000)
})
/*$('#fadeout').click(function(){
    $('h1').fadeOut(1000)
})*/
/*$('#slideup').click(function(){
    $('h1').slideUp(1000)
})
$('#slidedown').click(function(){
    $('h1').slideDown(1000)
})*/
$('#toggle').click(function(){
    $('h1').slideToggle(1000)
})