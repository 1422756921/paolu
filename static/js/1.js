console.log("%c青云依兮", "color: #6d85c1; font-size: 2.5em;");
$(window).on('load', function handlePreloader() {
    if ($('.xf_load').length) {
        $('.xf_load').delay(200).fadeOut(500);
    }
});