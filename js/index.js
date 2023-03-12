const items = document.querySelector('.item');

const expand = (item, i) => {
    let overlay = item.childNodes[1];
    let menu = item.childNodes[3];

    items.forEach((it, ind) => {
        if (i === ind) return;
        it.clicked = false;
    });

    gsap.killTweensOf(items);
    gsap.to(items, {
        width: item.clicked ? "10vw" : "8vw",
        duration: 2,
        ease: "elastic(1, .6)"
    });
}