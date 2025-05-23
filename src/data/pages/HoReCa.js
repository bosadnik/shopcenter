import Page from "./Page";
let catalog = [
  {
    name:"Drugie Dno Nowogrodzka",
    description:"Gastropub - Warszawa",
    folder:"horeca/Drugie_Dno_Nowogrodzka_Gastropub_Warszawa",
    img:"DrugieDno_medium_logo_4.png",
    count: 10,
    imagesName: "DrugieDno",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large"
  },
  {
    name:"Pizzeria Riccardo",
    description:"Opatkowice",
    folder:"horeca/Pizzeria_Riccardo_Opatkowice",
    img:"Ro_logo_medium_1.png",
    count: 7,
    imagesName: "Ro_logo",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large"
  },
  {
    name:"Dwa Smaki",
    description:"Słomniki",
    folder:"horeca/dwa_smaki_restaurant_slomniki",
    img:"glowne_Dss_logo_medium_4.png",
    count: 16,
    imagesName: "Dss_logo",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large"
  },

  {
    name:"Dwa Smaki",
    description:"Zofipole",
    folder:"horeca/dwa_smaki_zofipole",
    img:"glowne.png",
    count: 10,
    imagesName: "DwaSmaki",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large",
    noSizeInName: true
  },
  {
    name:"Pizzeria Fresca",
    description:"Budzów",
    folder:"horeca/pizzeria_fresca_budzanow",
    img:"glowne.jpg",
    count: 10,
    imagesName: "PizzeriaFresca",
    imagesFormat: "jpeg",
    imagesThumbnailName: "small",
    imagesLargeName: "large",
    noSizeInName: true
  },
  
]
export default new Page({
  title: "HoReCa",
  color: "#651d2e",
  catalog
//   description,
//   imgs: images.images,

//   galleries,
});
