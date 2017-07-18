import Navigation from '../components/navigation';

export default class NavigationManager {

  static initNavigation() {
    let navigation = document.querySelectorAll('.nav, .fixed-nav');    

    if (navigation.length < 1){
      return undefined;
    }

    navigation.forEach((nav, index) => {
      new Navigation(nav, index);
    });
   }
 }
