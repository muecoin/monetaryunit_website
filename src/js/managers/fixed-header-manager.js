import FixedHeader from '../components/fixed-header';

export default class FixedHeaderManager {

  static initFixedHeader() {
    const target = document.querySelector('[data-fixed-nav-target]');
    const fixedHeader = document.querySelector('[data-fixed-nav]');

    if (target == undefined){
      return undefined;
    }

    if (fixedHeader == undefined){
      return undefined;
    }

    new FixedHeader(fixedHeader, target);
  }
}
