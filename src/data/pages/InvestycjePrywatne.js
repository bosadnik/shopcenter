import Page from "./Page";
let catalog = [
  {
    name:"Dagmara",
    description:"Krakow Zabłocie",
    folder:"inwestycjePrywatne/DagmaraKrakowZablocie",
    img:"zaleks_glowne.jpg",
    count: 2,
    imagesName: "zaleks_logo",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large"
  },
  {
    name:"Dariusz",
    description:"Opatkowice Kuchnia",
    folder:"inwestycjePrywatne/DariuszOpatkowiceKuchnia",
    img:"DarekKuch_logo_small_2.png",
    count: 6,
    imagesName: "DarekKuch_logo",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large"
  },
  {
    name:"Dariusz",
    description:"Opatkowice Łazienka",
    folder:"inwestycjePrywatne/DariuszOpatkowiceLazienka",
    img:"DarekLaz_logo_small_1.png",
    count: 6,
    imagesName: "DarekLaz_logo",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large"
  },
  {
    name:"Dariusz",
    description:"Opatkowice Szafa ",
    folder:"inwestycjePrywatne/DariuszOpatkowiceSzafa",
    img:"DarekSzafa_logo_small_1.png",
    count: 3,
    imagesName: "DarekSzafa_logo",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large"
  },
  {
    name:"Marcin",
    description:"Krakow Kurdwanów",
    folder:"inwestycjePrywatne/MarcinKrakowKurdwanow",
    img:"muzyk_glowne.jpg",
    count: 5,
    imagesName: "muzyk_<%size%>_logo",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large"
  },
  {
    name:"Marzena",
    description:"Karwin",
    folder:"inwestycjePrywatne/MarzenaKarwin",
    img:"karwin_glowne.jpg",
    count: 6,
    imagesName: "karwin_logo",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large"
  },
  {
    name:"Monika",
    description:"Kraków Krowodrza",
    folder:"inwestycjePrywatne/MonikaKrakowKrowodrza",
    img:"glowne_wroclawska_logo_medium_3.png",
    count: 4,
    imagesName: "wroclawska_logo",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large"
  },
]
export default new Page({
  title: "InvestycjePrywatne",
  color: "#385723",
  catalog
//   description,
//   imgs: images.images,

//   galleries,
});
