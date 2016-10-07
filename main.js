(function () {
    'use strict'

    document.getElementById('copyright-date').innerHTML = new Date().getFullYear();

    window.onscroll = documentScrolling;

    /////////////////
    //
    function documentScrolling() {
        if (document.body.scrollTop > 0)
            document.getElementsByTagName('HEADER')[0].classList.add('colored');
        else
            document.getElementsByTagName('HEADER')[0].classList.remove('colored');
    }
})();