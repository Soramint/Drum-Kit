for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var b = this.innerHTML.toLowerCase(); // แปลงตัวอักษรเป็นพิมพ์เล็ก
        playSound(b);
    });
}

// สำหรับการกดแป้นพิมพ์
document.addEventListener("keydown", function (event) {
    var b = event.key.toLowerCase(); // ดึงค่าของปุ่มที่ถูกกด และแปลงเป็นพิมพ์เล็ก
    playSound(b);
});

// ฟังก์ชันสำหรับเล่นเสียง
function playSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            console.log("ไม่มีเสียงสำหรับปุ่มนี้");
    }
}