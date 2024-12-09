class Ballon {
    constructor(image, name, link, color='blue') {
      this._image = image;
      this._name = name;
      this._link = link;
      this._color = color;
      this._cssClassName = name.replace(/[\s-]/g, '').toLowerCase();
    }
  }

import biuro_btn from '@/assets/biuro_btn.png'
import restauracje_btn from '@/assets/restauracje_btn.png'
import sklepy_btn from '@/assets/sklepy_btn.png'
import prywatne_btn from '@/assets/prywatne_btn.png'


  let baloons = []
  baloons.push(new Ballon(biuro_btn, 'biuro', '/portfolio/Biuro', '#1a3854'))
  baloons.push(new Ballon(restauracje_btn, 'horeca', '/portfolio/HoReCa', '#651d2e'))
  baloons.push(new Ballon(sklepy_btn, 'handelSklepy', '/portfolio/HandelSklepy', '#c09200'))
  baloons.push(new Ballon(prywatne_btn, 'inwestycjePrywatne', '/portfolio/InvestycjePrywatne', '#385723'))
  // baloons.push(new Ballon('sklepy_tbn.png', 'medyczne', 'medyczne'))
  

  export default baloons