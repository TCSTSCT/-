var index = 0;
var li = $(".banner ul li");
var img = $(".music .m_img img");
var text = $(".music .m_text");
var prev = $(".music .m_btn .m_prev");
var play = $(".music .m_btn .m_play");
var next = $(".music .m_btn .m_next");
var mp3 = $(".music .m_mp3");
var flag = false; //歌曲是否播放
var close = true;//播放器是否显示

li.click(function () {
    //   console.log($(this).index())
    index = $(this).index()
    show()
})
function show() {
    change_bg(index + 1)
    change_img_text(index + 1)
    change_btn_title()
    img_rotate()
    play_mp3()
}

function change_bg(idx) {
    $("body").css({
        "background": `url(img/${idx}_bg.jpg) no-repeat`,
        "background-size": "cover"
    })
}

function change_img_text(idx) {
    img.attr("src", `img/${idx}.jpg`)
    text.html(li.eq(index).attr("title"))
}

function change_btn_title() {
    play.removeClass("m_play")
    play.addClass("m_pause")
    play.attr("title", "暂停")
}

function img_rotate() {
    li.children().removeClass("img_rotate")
    li.eq(index).children().addClass("img_rotate")
}
function play_mp3() {
    mp3.attr("src", li.eq(index).attr("datasrc"))
    mp3.get(0).play();
    flag = true
}

play.click(function () {
    if (flag) {
        mp3.get(0).pause()
        li.eq(index).children().removeClass("img_rotate")
        play.removeClass("m_pause")
        play.addClass("m_play")
        play.attr("title", "播放")
        flag = false
    } else {
        mp3.get(0).play()
        li.eq(index).children().addClass("img_rotate")
        play.removeClass("m_play")
        play.addClass("m_pause")
        play.attr("title", "暂停")
        flag = true
        change_bg(index+1)
    }
})

prev.click(function(){
    index--
    index=index<0?li.length-1:index
    show()
    console.log(index)
})
next.click(function(){
    index++
    index=index>li.length-1?0:index
    show()
    console.log(index)

})

$(".m_close").click(function(){
    if(close){
        $(this).addClass("m_open")
        close=false
        $(".music").animate({"left":"-527px"},1000)
    }else{
        $(this).removeClass("m_open")
        close=true
        $(".music").animate({"left":"0px"},1000)
    }
    
})