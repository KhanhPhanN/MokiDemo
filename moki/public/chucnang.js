var socket = io("http://localhost:8080");
// socket.on("render",function(data){
//     for(var i=0;i<data.length;i++){
//     $("#"+(i)).attr("src","image/"+data[i].image);
//     $("#ten-"+(i+1)).html(data[i].name);
//     $("#gia-"+(i+1)).html(data[i].price);
//     }
// })
socket.on("gui-comment",function(data){
    $("#showcomment").append(data);
})
socket.on("send-inf",function(data){
    $("#image").attr("src",data[0].image);
})
$(document).ready(function(){
    $('#AlphaNav > ul > li > a').click(function () {
        $(this).closest('li').siblings().find('ul:visible').slideUp(); // ADDED
        $(this).closest('li').siblings().find('ul:visible').parent().find('i').toggleClass('fa-angle-double-up fa-angle-double-down'); // ADDED 2
        $(this).closest('li').find('ul').slideToggle();
        $(this).find('i').toggleClass('fa-angle-double-up fa-angle-double-down');
        
    });
    $("#mota").show();
    $("#binhluan").hide();
    socket.emit("gui-thong-tin");
    $("#send").click(function(){
        socket.emit("gui-comment",$("#Comment").val());
    })
    $("#0").click(function(){
        socket.emit("inf-1",$("#ten-1").html())
    })
    $("#1").click(function(){
        socket.emit("inf-2",$("#ten-2").html())
    })
    $("#2").click(function(){
        socket.emit("inf-3",$("#ten-3").html())
    })
    $("#3").click(function(){
        socket.emit("inf-4",$("#ten-4").html())
    })
    $("#4").click(function(){
        socket.emit("inf-5",$("#ten-5").html())
    })
    $("#5").click(function(){
        socket.emit("inf-6",$("#ten-6").html())
    })
    $("#6").click(function(){
        socket.emit("inf-7",$("#ten-7").html())
    })
    $("#7").click(function(){
        socket.emit("inf-8",$("#ten-8").html())
    })
})
// function KhoiDong(){
//     $("#mota").show();
//     $("#binhluan").hide();
// }
function binhluan(){
$("#mota").hide();
$("#binhluan").show();
}
function  mota(){
    $("#mota").show();
    $("#binhluan").hide();
}
$("#mota").click(function(){
    mota();
})
$("#binhluan").click(function(){
    binhluan();
})

