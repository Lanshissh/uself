document.addEventListener('DOMContentLoaded', () => {
    var toDayFromNow = (new Date("Dec 31, 2029 23:59:59").getTime() / 1000) + (3600 / 60 / 60 / 24) - 1;
    var flipdown = new FlipDown(toDayFromNow)

    .start()
    .ifEnded(() => {
        document.querySelector(".flipdown").innerHTML = `<h2>Timer is ended</h2>`;
    });
});