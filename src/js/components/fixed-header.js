export default class FixedHeader {
  constructor(element, fixedHeader){
    this.target = element;
    this.fixedHeader = fixedHeader;
    this.headerClassName = this.fixedHeader.classList[0];
    this.headerClassNameActive = this.headerClassName + '--active';
    this.currentScrollDistance = 0;
    this.targetScrollDistance = 0;
    this.targetOffset = 100;
    this.fixedHeaderEnabled = false;
    this.initialise();
  }

  initialise() {
    this.calculateTargetScrollDistance();
    this.addScrollEvent();
  }

  addScrollEvent() {
    window.addEventListener( 'scroll', this.checkScrollPosition, false);
  }

  checkScrollPosition = (e) => {
    this.currentScrollDistance = window.scrollY;
    console.log(this.currentScrollDistance);
    if (this.currentScrollDistance > this.targetScrollDistance && this.fixedHeaderEnabled === false) {
        this.showFixedHeader();
    }
    if (this.currentScrollDistance < this.targetScrollDistance && this.fixedHeaderEnabled === true) {
        this.hideFixedHeader();
    }
  }

  calculateTargetScrollDistance() {
    this.targetScrollDistance = this.target.scrollHeight;
  }

  showFixedHeader(){
    this.fixedHeader.classList.add(this.headerClassNameActive);
    this.fixedHeader.classList.remove(this.headerClassName);
    this.fixedHeaderEnabled = true;
  }

  hideFixedHeader(){
    this.fixedHeader.classList.add(this.headerClassName);
    this.fixedHeader.classList.remove(this.headerClassNameActive);
    this.fixedHeaderEnabled = false;
  }
}
