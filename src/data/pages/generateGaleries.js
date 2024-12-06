import imageFolders from "./imageFolders";

let generateGaleries = (page) => {
    let galleries = [];
  
    let folders = Object.keys(imageFolders[page]);
  
    let images = folders.reduce(
      (acc, f) => {
        let description = imageFolders[page][f].description; 
        let thumbnails = imageFolders[page][f].mini.map((img, i) => {
          return {
            title: img,
            index: acc.count + i,
            url: require(`../../assets/${page}/${f}/mini/${img}`),
          };
        });
  
        let imgs = imageFolders[page][f].medium.map((img) => {
          return {
            title: img,
            url: require(`../../assets/${page}/${f}/medium/${img}`),
          };
        });
        galleries.push({ title: f, thumbnails, imgs, description });
        acc.count += imageFolders[page][f].medium.length;
        acc.images = acc.images.concat(imgs);
        return acc;
      },
      { images: [], count: 0 }
    );
    return {galleries, images}
  };

  export default generateGaleries;