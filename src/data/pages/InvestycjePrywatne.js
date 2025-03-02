import Page from "./Page";
let catalog = [
  // {
  //   name:"Dagmara",
  //   description:"Krakow Zabłocie",
  //   folder:"inwestycjePrywatne/DagmaraKrakowZablocie",
  //   img:"zaleks_glowne.jpg",
  //   count: 2,
  //   imagesName: "zaleks_logo",
  //   imagesFormat: "png",
  //   imagesThumbnailName: "small",
  //   imagesLargeName: "large"
  // },
  {
    number: 1,
    name:"Klaudia",
    description:"Kraków - Żabiniec",
    folder:"inwestycjePrywatne/KlaudiaZabiniec",
    img:"glowne.jpg",
    count: 62,
    imagesName: "klaudiazabiniec",
    imagesFormat: "jpeg",
    imagesThumbnailName: "small",
    imagesLargeName: "large",
    noSizeInName: true
  },
  {
    number: 2,
    name:"Artur",
    description:"Kraków - Proszowice",
    folder:"inwestycjePrywatne/ArturProszowice",
    img:"glowne.jpeg",
    count: 84,
    imagesName: "arturproszowice",
    imagesFormat: "jpeg",
    imagesThumbnailName: "small",
    imagesLargeName: "large",
    noSizeInName: true
  },
  {
    number: 3,
    name:"Katarzyna",
    description:"Kraków - Prądnik Czerwony",
    folder:"inwestycjePrywatne/KatarzynaPradnikCzerwony",
    img:"glowne.png",
    count: 8,
    imagesName: "katarzynapradnikczerwony",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large",
    noSizeInName: true
  },
  {
    number: 3,
    name:"Rafał",
    description:"Opole",
    folder:"inwestycjePrywatne/RafalOpole",
    img:"glowne.jpeg",
    count: 23,
    imagesName: "rafalopole",
    imagesFormat: "jpeg",
    imagesThumbnailName: "small",
    imagesLargeName: "large",
    noSizeInName: true
  },
  {
    number: 4,
    name:"Dariusz",
    description:"Opatkowice",
    folder:"inwestycjePrywatne/DariuszOpatkowice",
    img:"glowne.png",
    count: 15,
    imagesName: "dariuszopatkowice",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large",
    noSizeInName: true
  },
  {
    number: 5,
    name:"Katarzyna",
    description:"Kraków - Podgórze",
    folder:"inwestycjePrywatne/KatarzynaPodgorze",
    img:"glowne.png",
    count: 6,
    imagesName: "gro",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large",
    noSizeInName: true
  },
  {
    number: 6,
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
  {
    number: 8,
    name:"Mariusz",
    description:"Warszawa",
    folder:"inwestycjePrywatne/MariuszWarszawa",
    img:"glowne.jpg",
    count: 34,
    imagesName: "mariuszwarszawa",
    imagesFormat: "jpeg",
    imagesThumbnailName: "small",
    imagesLargeName: "large",
    noSizeInName: true
  },
  {
    number: 9,
    name:"Agnieszka",
    description:"Kraków",
    folder:"inwestycjePrywatne/AgnieszkaKrakow",
    img:"glowne.jpeg",
    count: 10,
    imagesName: "agnieszkakrakow",
    imagesFormat: "jpeg",
    imagesThumbnailName: "small",
    imagesLargeName: "large",
    noSizeInName: true
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
  
  

]


export default new Page({
  title: "InvestycjePrywatne",
  color: "#385723",
  catalog
//   description,
//   imgs: images.images,

//   galleries,
});
