const tabNavigations = document.querySelectorAll('.tabs');

class TabSelector {
  constructor(container) {
    this.container = container;
    this.tabLinks = container.querySelectorAll('.tab');
    this.tabContents = container.querySelectorAll('.tab__content');
    this.currentTabLink = container.querySelector('.tab_active');
    this.currentIndex = Array.from(this.tabLinks).indexOf(this.currentTabLink);
    this.currentTabContent = container.querySelector('.tab__content_active');

    this.eventHandler();
  }

  deactivate(index) {
    this.tabLinks[index].classList.remove('tab_active');
    this.tabContents[index].classList.remove('tab__content_active');
  }

  activate(index) {
    this.tabContents[this.currentIndex].classList.add('tab__content_active');
    this.tabLinks[this.currentIndex].classList.add('tab_active');
  }

  eventHandler() {
    this.container.addEventListener('click', (e) => {
      this.deactivate(this.currentIndex);
      this.currentIndex = Array.from(this.tabLinks).indexOf(e.target);
      this.activate(this.currentIndex);
    });
  };
}

tabNavigations.forEach(tabNavigation => {
  tabNavigation.addEventListener('click', e => {
    new TabSelector(e.target.closest('.tabs'));
  })
});