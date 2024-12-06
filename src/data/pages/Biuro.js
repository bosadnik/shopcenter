import Page from "./Page";

let catalog = [
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
      img:"SMAY.png",
      count: 21,
      imagesName: "Smay_logo",
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

]

export default new Page({
  title: "Biuro",
  color: "#1a3854",
  catalog
//   description,
//   imgs: images.images,
//   galleries,
});
