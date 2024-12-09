function hashString(str) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i); // hash * 33 + c
  }
  return hash >>> 0; // Ensure positive integer
}

export default class {
  constructor({ title = "title", color = "white", catalog }) {
    if (!catalog) catalog = [];
    catalog = catalog.map((item) => {
      const combinedString = `${item.name}-${item.description}`;
      item.key = hashString(combinedString);

      item.imgs = [];
      item.thumbnails = [];
      item.images = [];
      

      let getImageName = (name, size, i, format) => {
        let newName = name.replace("<%size%>", size);
        if (name != newName) {
          return `${size}/${newName}_${i}.${format}`;
        } else {
          return `${size}/${name}_${size}_${i}.${format}`;
        }
      };

      for (let i = 1; i <= item.count; i++) {
        try {
          item.images.push({
            src:`/portfolio/${item.folder}/${getImageName(
              item.imagesName,
              item.imagesLargeName,
              i,
              item.imagesFormat
            )}`, 
            thumbnail:`/portfolio/${item.folder}/${getImageName(
              item.imagesName,
              item.imagesThumbnailName,
              i,
              item.imagesFormat
            )}`, 
            title: `${item.imagesName}${i}.${item.imagesFormat}`,
            w: 2000,
            h: 2000
          });

          item.imgs.push(`/portfolio/${item.folder}/${getImageName(item.imagesName,item.imagesLargeName, i, item.imagesFormat)}`);
        } catch (e) {
         // console.log(e);
        }

        try {
          item.thumbnails.push(`/portfolio/${item.folder}/${getImageName(item.imagesName,item.imagesThumbnailName,i,item.imagesFormat)}`,
          );
        } catch (e) {
          //console.log(e);
        }
      }

      return item;
    });

    Object.assign(this, { title, color, catalog });
  }
}
