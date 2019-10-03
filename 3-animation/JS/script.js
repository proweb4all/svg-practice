let s = Snap("#svg");
let container = s.path("M54.5 37h-45c-2.7 0-5-2.2-5-5 0-2.7 2.2-5 5-5h45c2.8 0 5 2.2 5 5s-2.2 5-5 5z");
let circle = s.circle(18, 32, 10);

container.attr({
    fill: "#ccc",
    opacity: .3
})

circle.attr({
    fill: "#DADADA"
})

s.click(() => {
    circle.toggleClass("on");
    if (circle.hasClass('on')) {
        circle.animate({
            cx: 47
        }, 100);
        container.animate({
            opacity: 1
        }, 100);
    } else {
        circle.animate({
            cx: 17
        }, 100);
        container.animate({
            opacity: .3
        }, 100);

    }
})