import Page from "./Page";
let catalog = [
  {
    name:"Euro Sklep",
    description:"Osieczany",
    folder:"handelSklepy/EuroSklepOsieczany",
    img:"glowne_ESO_logo_medium_4.png",
    count: 12,
    imagesName: "ESO_logo",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large"
  },
  {
    name:"Euro Sklep",
    description:"Sami Swoi, Glinik",
    folder:"handelSklepy/EuroSklepSamiSwoiGlinik",
    img:"glowne_glinik_medium_logo_1.png",
    count: 9,
    imagesName: "glinik_<%size%>_logo",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large"
  },
  {
    name:"Euro Sklep",
    description:"Sami Swoi, Igołomia",
    folder:"handelSklepy/EuroSklepSamiSwoiIgolomia",
    img:"glowne_IG_logo_medium_2.png",
    count: 7,
    imagesName: "IG_logo",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large"
  },
  {
    name:"Euro Sklep",
    description:"Sami Swoi, Luborzyca",
    folder:"handelSklepy/EuroSklepSamiSwoiLuborzyca",
    img:"glowne_LU_logo_medium_4.png",
    count: 8,
    imagesName: "LU_logo",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large"
  },
  {
    name:"Euro Sklep",
    description:"Sami Swoi, Marszowice",
    folder:"handelSklepy/EuroSklepSamiSwoiMarszowice",
    img:"glowne_MA_logo_medium_5.png",
    count: 12,
    imagesName: "MA_logo",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large"
  },
  {
    name:"Euro Sklep",
    description:"Sami Swoi, Słomniki",
    folder:"handelSklepy/EuroSklepSamiSwoiSlomniki",
    img:"glowne.png",
    count: 11,
    imagesName: "SL_logo",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large"
  },
  {
    name:"Euro Sklep",
    description:"Sami Swoi, Wawrzenczyce",
    folder:"handelSklepy/EuroSklepSamiSwoiWawrzenczyce",
    img:"glowne_WA_logo_medium_3.png",
    count: 15,
    imagesName: "WA_logo",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large"
  },
  {
    name:"Euro Sklep",
    description:"Sami Swoi, Wola Filipowska",
    folder:"handelSklepy/EuroSklepSamiSwoiWolaFilipowska",
    img:"glowne_Wola_logo_medium_17.png",
    count: 17,
    imagesName: "Wola_logo",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large"
  },
  {
    name:"Euro Sklep",
    description:"Sami Swoi, Masłomiąca",
    folder:"handelSklepy/GroszekSamiSwoiMaslomiaca",
    img:"glowne_GMA_logo_medium_4.png",
    count: 12,
    imagesName: "GMA_logo",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large"
  },
  {
    name:"Kuźnia Smaków",
    description:"Kraków os. Złocień",
    folder:"handelSklepy/KuzniaSmakowKrakowosZlocienSklepFirmowyBiernat",
    img:"glowne_Biernat_medium_logo_1.png",
    count: 7,
    imagesName: "Biernat_<%size%>_logo",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large"
  },
  {
    name:"Lewiatan",
    description:"Budzów",
    folder:"handelSklepy/LewiatanBudzow",
    img:"glowne_LB_logo_medium_10.png",
    count: 14,
    imagesName: "LB_logo",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large"
  },
  {
    name:"Lewiatan",
    description:"Wadowice",
    folder:"handelSklepy/LewiatanWadowice",
    img:"glowne_LW_logo_medium_2.png",
    count: 7,
    imagesName: "LW_logo",
    imagesFormat: "png",
    imagesThumbnailName: "small",
    imagesLargeName: "large"
  },

]


export default new Page({
  title: "HandelSklepy",
  color: "#c09200",
 catalog
});
