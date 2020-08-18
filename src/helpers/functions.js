import { IMAGE_HOST } from "../common/constants/hosts";
import noImg from "../assets/images/no_img.png";

// return image path based on existing options
export const generateImageUrl = path => {
  if(path) {
    return IMAGE_HOST + path;
  }
  return noImg;
}
