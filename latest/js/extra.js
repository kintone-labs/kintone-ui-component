(function() {

    function createTabNavEl(headerEls) {
        var tabNavEl = document.createElement('div');
        tabNavEl.classList.add('tab-nav');
        var i = 0;
        while (headerEls.length > 0) {
            headerEls[0].dataset.index = i;
            headerEls[0].classList.add("tab-btn");
            tabNavEl.appendChild(headerEls[0]);
            i++;
        }
        return tabNavEl;
    }

    function createTabSessionEl(sessionEls) {
        var tabSessionEl = document.createElement('div');
        tabSessionEl.classList.add('tab-session');
        var i = 0;
        while (sessionEls.length > 0) {
            sessionEls[0].classList.add('index-' + i);
            tabSessionEl.appendChild(sessionEls[0]);
            i++;
        }
        return tabSessionEl;
    }

    function hideActivatedTab(headerEls, sessionEls) {
        for (var i = 0; i < headerEls.length; i++) {
            headerEls[i].classList.remove('active');
        }
        for (var i = 0; i < sessionEls.length; i++) {
            sessionEls[i].classList.remove('active');
        }
    }

    function showTabLayout(containerEl) {
        var headerEls = containerEl.getElementsByTagName('strong');
        var tabNavEl = createTabNavEl(headerEls);
        containerEl.appendChild(tabNavEl);

        var sessionEls = containerEl.getElementsByTagName('pre');
        var tabSessionEl = createTabSessionEl(sessionEls);
        containerEl.appendChild(tabSessionEl);

        tabNavEl.addEventListener('click', function(e) {
            var target = e.target;
            if (!target.classList.contains('tab-btn')) {
                return;
            }

            hideActivatedTab(headerEls, sessionEls);
            target.classList.add('active');
            sessionEls[target.dataset.index].classList.add('active');
        });

        headerEls[0].classList.add('active');
        sessionEls[0].classList.add('active');
    }

    var tabContainers = document.getElementsByClassName('tab-container');
    for (var i = 0; i < tabContainers.length; i++) {
        showTabLayout(tabContainers[i]);
    }
})();
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id=' i dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5N49D3');