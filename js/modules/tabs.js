function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tabContent = document.querySelectorAll(tabsContentSelector),
          tabParent = document.querySelector(tabsParentSelector),
          tabItem = document.querySelectorAll(tabsSelector);

    function hideTabContent() {
        tabContent.forEach((item) => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabItem.forEach((item) => {
            item.classList.remove(activeClass);
        });
    }
    
    function showTabContent(i = 0) {
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
        tabItem[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    tabParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabItem.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;