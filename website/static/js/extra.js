document.addEventListener("DOMContentLoaded", function () {
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

    function createSandboxButton(sessionEls) {
        const CodeSandboxImage = 'https://codesandbox.io/static/img/play-codesandbox.svg'
        for (let index = 0; index < sessionEls.length; index++) {
            const element = sessionEls[index];
            
            element.firstChild.classList.forEach(function(className){
                if (/sandbox_\w+/.test(className)) {
                    let sandboxLink = document.createElement('a')
                    sandboxLink.href = 'https://codesandbox.io/s/' + className.split('_')[1]
                    sandboxLink.target = '_blank'

                    let sandboxButton = document.createElement('img')
                    sandboxButton.src = CodeSandboxImage
                    sandboxLink.appendChild(sandboxButton)
                    sandboxLink.className = 'sandbox-button'
                    element.appendChild(sandboxLink)
                    element.style.position = 'relative'
                } 
            });
        }
    }

    function showTabLayout(containerEl) {
        var headerEls = containerEl.getElementsByTagName('strong');
        var tabNavEl = createTabNavEl(headerEls);
        containerEl.appendChild(tabNavEl);

        var sessionEls = containerEl.getElementsByTagName('pre');
        var tabSessionEl = createTabSessionEl(sessionEls);
        
        containerEl.appendChild(tabSessionEl);
        createSandboxButton(sessionEls)

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
        tabContainers[i].parentNode.removeChild(tabContainers[i].nextSibling)
        tabContainers[i].parentNode.removeChild(tabContainers[i].previousSibling)
    }
})
