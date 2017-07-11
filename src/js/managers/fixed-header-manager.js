import FixedHeader from '../components/fixed-header';

export default class FixedHeaderManager {

  static initFixedHeader() {
    //const target = document.querySelector('[data-fixed-nav-target]');
    const fixedHeader = document.querySelector('[data-fixed-nav]');

    // if (target == undefined){
    //   console.log("no fixed header target's in the page");
    //   return undefined;
    // }

    if (fixedHeader == undefined){
      console.log("no fixed header component in the page");
      return undefined;
    }

    new FixedHeader(fixedHeader);
  }
}
