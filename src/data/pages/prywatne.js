import Page from "./Page";
import generateGaleries from "./generateGaleries";

let description =
  "Lorem ipsum dolor sit amet quam. Ut lorem. Fusce dui at orci at arcu. Etiam fringilla at, aliquet neque, blandit justo, eget tortor. Morbi felis fermentum sed, suscipit adipiscing. Cum sociis natoque penatibus et lacus at risus vehicula lectus. Nam dictum id, ullamcorper lorem eros diam bibendum vitae, fringilla sollicitudin, odio eu dui nulla, faucibus nibh. Donec sollicitudin dignissim, tellus. Vestibulum ante ipsum sit amet ligula. Sed nec libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per conubia nostra, per inceptos hymenaeos. Maecenas interdum mi at ipsum. Vestibulum ante congue risus. Suspendisse dapibus aliquam arcu. Cras dignissim. Donec nonummy, tellus pede urna felis, eleifend posuere lobortis, nibh risus, euismod elit. Aenean vel neque mauris, interdum mi ligula, quis felis in velit vitae risus tortor, hendrerit sollicitudin eu, magna. Nulla semper. Morbi id mi. Suspendisse eu odio et neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Nunc vitae massa ut mattis vel, ornare ligula eleifend erat volutpat. Nunc massa molestie ultricies in, ipsum. Fusce tristique, leo ultrices posuere, nibh condimentum convallis. Fusce.";

let {galleries, images} = generateGaleries('prywatne');

export default new Page({
  title: "Prywatne",
  description,
  imgs: images.images,
  galleries,
});
