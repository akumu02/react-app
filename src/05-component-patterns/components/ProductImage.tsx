import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;

  imgToShow = img || product.img || noImage;

  return <img className={styles.productImg} src={imgToShow} alt="Produt" />;
};
