function page2()
{
$("body > div.container > div:nth-child(3) > div.col.col-blog > img")[0].src = "file:///D:/techmaster/code%20pj/image/blog/4.png"
$("body > div.container > div:nth-child(3) > div.col-10 > p").text("Ứng dụng AirVisual hạ mức cảnh báo không khí ô nhiễm tại Hà Nội")
$("body > nav:nth-child(6) > ul > li").removeClass("active")
$("body > nav:nth-child(6) > ul > li:nth-child(3)").addClass("active")
/* Image 5*/
$("body > div.container > div:nth-child(4) > div.col.col-blog > img")[0].src = "file:///D:/techmaster/code%20pj/image/blog/5.png"
$("body > div.container > div:nth-child(4) > div.col-10 > p").text("Kỹ sư Yahoo hack hàng ngàn tài khoản người dùng để tìm kiếm ảnh và video “nóng”")
/* Image 6*/
$("body > div.container > div:nth-child(5) > div.col.col-blog > img")[0].src = "file:///D:/techmaster/code%20pj/image/blog/6.png"
$("body > div.container > div:nth-child(5) > div.col-10 > p").text("Phó Thủ tướng: Việt Nam đang đi đúng hướng, đạt được những kết quả tích cực trong CMCN 4.0")
/* Image 7*/
}
function page1()
{
$("body > div.container > div:nth-child(3) > div.col.col-blog > img")[0].src = "file:///D:/techmaster/code%20pj/image/blog/1.png"
$("body > div.container > div:nth-child(3) > div.col-10 > p").text("Xiaomi vừa đăng tải video thử độ bền của Redmi Note 8 Pro khi bị tra tấn bởi một lực sĩ khổng lồ. Đố bạn đây là một cái kết có hậu hay tan nát? Cùng tìm hiểu câu trả lời nhé!")
$("body > nav:nth-child(6) > ul > li:nth-child(2)").addClass("active")
$("body > nav:nth-child(6) > ul > li:nth-child(3)").removeClass("active")
/* Image 5*/
$("body > div.container > div:nth-child(4) > div.col.col-blog > img")[0].src = "file:///D:/techmaster/code%20pj/image/blog/2.png"
$("body > div.container > div:nth-child(4) > div.col-10 > p").text("Realme XT lộ thiết kế và cấu hình đầy đủ tại một sự kiện đặc biệt")
/* Image 6*/
$("body > div.container > div:nth-child(5) > div.col.col-blog > img")[0].src = "file:///D:/techmaster/code%20pj/image/blog/3.png"
$("body > div.container > div:nth-child(5) > div.col-10 > p").text("7 lý do khiến iFan nhất định phải sở hữu ngay iPhone 11 khi vừa ra mắt")
/* Image 7*/	
}
function getlink()
{
$("body > div.container.binhluan > div.col-12.getlinkbox > div").css("display","initial")	
}