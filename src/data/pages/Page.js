function hashString(str) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i); // hash * 33 + c
  }
  return hash >>> 0; // Ensure positive integer
}

// Helper function to get WebP path with fallback
function getWebPPath(originalPath) {
  if (!originalPath) return { webp: '', fallback: '' };
  // Replace extension with .webp
  const webpPath = originalPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  return {
    webp: webpPath,
    fallback: originalPath
  };
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
      

      let getImageName = (name, size, i, format, noSizeInName=false) => {
        let newName = name.replace("<%size%>", size);
        if (name != newName) {
          return `${size}/${newName}_${i}.${format}`;
        } else {
          let sizeInName = noSizeInName ? "" : `_${size}`;
          return `${size}/${name}${sizeInName}_${i}.${format}`;
        }
      };

      for (let i = 1; i <= item.count; i++) {
        try {
          const largePath = `/portfolio/${item.folder}/${getImageName(
            item.imagesName,
            item.imagesLargeName,
            i,
            item.imagesFormat,
            item.noSizeInName
          )}`;
          const thumbnailPath = `/portfolio/${item.folder}/${getImageName(
            item.imagesName,
            item.imagesThumbnailName,
            i,
            item.imagesFormat,
            item.noSizeInName
          )}`;
          
          const largeWebP = getWebPPath(largePath);
          const thumbnailWebP = getWebPPath(thumbnailPath);
          
          item.images.push({
            src: largePath,
            srcWebP: largeWebP.webp,
            thumbnail: thumbnailPath,
            thumbnailWebP: thumbnailWebP.webp,
            title: `${item.imagesName}${i}.${item.imagesFormat}`,
            index: i,
            w: 2000,
            h: 2000
          });

          // For lightbox, prefer WebP but keep fallback
          item.imgs.push(largeWebP.webp || largePath);
        } catch (e) {
         // console.log(e);
        }

        try {
          const thumbPath = `/portfolio/${item.folder}/${getImageName(item.imagesName,item.imagesThumbnailName,i,item.imagesFormat,item.noSizeInName)}`;
          const thumbWebP = getWebPPath(thumbPath);
          item.thumbnails.push(thumbWebP.webp || thumbPath);
        } catch (e) {
          //console.log(e);
        }
        item.index = i;
      }
      
      return item;
    });

    Object.assign(this, { title, color, catalog });
  }
}
