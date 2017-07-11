import Headroom from 'headroom.js'

export default class FixedHeader {
  constructor(fixedHeader){
    this.header = fixedHeader;
    this.headroom;
    this.initialise();
  }

  test(){
    this.header.classList.remove('fixed-nav--active');
  }

  initialise() {
    this.headroom = new Headroom(this.header, {
      offset: 500,

      classes : {
        // when element is initialised
        initial : "fixed-nav",
        // when scrolling up
        pinned : "fixed-nav--active",
        // when scrolling down
        unpinned : "fixed-nav--unpinned",
        // when above offset
        top : "fixed-nav--top",
        // when below offset
        notTop : "fixed-nav--not-top",
        // when at bottom of scoll area
        bottom : "fixed-nav--bottom",
        // when not at bottom of scroll area
        notBottom : "fixed-nav--not-bottom"
      }
      // callback when below offset, `this` is headroom object
    });
    console.log(this.headroom);
    this.headroom.init();
  }
}
