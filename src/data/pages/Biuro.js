import Page from "./Page";

let catalog = [

  {
    name:"OTCF S.A.",
    description:"Kraków, Podgórze",
    folder:"biura/otcf_sa_krakow_podgorze",
    img:"OTCF.jpg",
    count: 86,
    imagesName: "otcf",
    imagesFormat: "jpg",
    imagesThumbnailName: "small",
    imagesLargeName: "large",
    noSizeInName: true
  },
  {
    name:"Nowoczesne biuro",
    description:"Kraków-Śródmieście",
    folder:"biura/Autodesk",
    img:"ad.jpg",
    count: 51,
    imagesName: "AD",
    imagesFormat: "jpg",
    imagesThumbnailName: "small",
    imagesLargeName: "large",
    noSizeInName: true
  },

  {
    name:"Biurowiec Fabryczna",
    description:"Kraków - Śródmieście",
    folder:"biura/biurowiec_fabryczna_krakow_srodmiescie",
    img:"P44_ico.jpg",
    count: 13,
    imagesName: "p44_logo",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large"
  },
  {
    name:"SMAY",
    description:"Podłęże",
    folder:"biura/smay_podleze",
    img:"smay_glowne.png",
    count: 21,
    imagesName: "Smay_logo",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large"

  },

  {
    name:"Nowy Styl",
    description:"Kraków - Prądnik Biały otwarta przestrzeń",
    folder:"biura/nowy_styl_krakow_pradnik_bialy_open_space",
    img:"glowne.jpg",
    count: 5,
    imagesName: "NS2_logo",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large"

  },

  {
    name:"Nowy Styl",
    description:"Kraków-Prądnik Biały, recepcja",
    folder:"biura/nowy_styl_krakow_pradnik_bialy_recepcja",
    img:"glowne.png",
    count: 17,
    imagesName: "NSJ_logo",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large"

  },

  {
    name:"Lider branży ubezpieczeniowej",
    description:"Wrocłas",
    folder:"biura/tue",
    img:"TUE_logo_medium_5.png",
    count: 9,
    imagesName: "TUE_logo",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large"
  },






  {
      name:"Przestrzeń Biurowa",
      description:"Bielsko-Biała",
      folder:"biura/przestrzen_biurowa_office_space_bielsko_biala",
      img:"glowne.jpg",
      count: 7,
      imagesName: "Ellie_logo",
      imagesFormat: "png",
      imagesThumbnailName: "small",
      imagesLargeName: "large"
    },
    {
      name:"Przestrzeń Biurowa",
      description:"Kraków - Balice",
      folder:"biura/przestrzen_biurowa_office_space_krakow_balice",
      img:"glowne.png",
      count: 10,
      imagesName: "BWI_logo",
      imagesFormat: "png",
      imagesThumbnailName: "small",
      imagesLargeName: "large"

    },
  
    {
      name:"Przestrzeń Biurowa, kuchnia",
      description:"Katowice",
      folder:"biura/kkk",
      img:"kkk.jpg",
      count: 20,
      imagesName: "KKK",
      imagesFormat: "jpg",
      imagesThumbnailName: "small",
      imagesLargeName: "large",
      noSizeInName: true
    },
  
    {
      name:"Przestrzeń Biurowa, kuchnia",
      description:"Kraków",
      folder:"biura/kkkkrak",
      img:"KKK_logo_medium_1.png",
      count: 4,
      imagesName: "KKK_logo",
      imagesFormat: "png",
      imagesThumbnailName: "small",
      imagesLargeName: "large",
    },
  
    {
      name:"Przestrzeń Biurowa",
      description:"Warszawa Ochota",
      folder:"biura/warszawa_ochota",
      img:"warszawa_ochota_glowne.jpg",
      count: 29,
      imagesName: "WAWOCHOTA",
      imagesFormat: "jpeg",
      imagesThumbnailName: "small",
      imagesLargeName: "large",
    }
    

    

]

export default new Page({
  title: "Biuro",
  color: "#1a3854",
  catalog
//   description,
//   imgs: images.images,
//   galleries,
});
