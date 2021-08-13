import { useState } from 'react';
import { Carousel } from '3d-react-carousal';
import SizeSelector from './SizeSelector';
import styles from '../../styles/pages/Product.module.scss';
import '../../styles/components/Carousel.scss';

export default function ProductDetails({ client, product, addVariantToCart }) {
  let defaultOptionValues = {};

  product.options?.forEach((selector) => {
    defaultOptionValues[selector.name] = selector.values[0].value;
  })

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultOptionValues);
  const [activeIndex, setActiveIndex] = useState(0);

  const imageCarousel = () => {
    const images = product.images.map(image => {
      return (
        <img src={image.src} alt={image.altText || product.title} />
      );
    });
    return <Carousel slides={images} />
  };

  const sizeOptions = product.options.filter((option) => {
    return option.name.toLowerCase() === "size";
  })[0];

  const optionChange = (e) => {
    const selectedOptionsCopy = JSON.parse(JSON.stringify(selectedOptions));
    selectedOptionsCopy[`${e.target.dataset.variant}`] = e.target.innerText;

    setSelectedOptions(selectedOptionsCopy);
    setSelectedVariant(client.product.helpers.variantForOptions(product, selectedOptionsCopy))
    setActiveIndex(parseInt(e.target.dataset.index));
  };

  const addToCartBtn = () => {
    if (selectedVariant.available) {
      return (
        <button
          onClick={() => addVariantToCart(selectedVariant.id, 1)}
          className={`${styles.add_to_cart_btn} p-6 w-full mt-4`}
        >
          ADD TO CART
        </button>
      );
    } else {
      return (
        <button 
          disabled 
          className={`${styles.add_to_cart_btn} p-6 w-full mt-4`}
        >
          SOLD OUT
        </button>
      );
    };
  };
  
  const details = () => {
    const description = product.descriptionHtml;
    return (
      <div className={`${styles.details_wrapper} pt-8 mt-6`}>
        <div
          className={`${styles.description}`}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    );
  };

  return (
    <div className={`${styles.ProductDetails}`}>
      <div className={`${styles.ProductDetails_container} relative grid xl:grid-cols-2`}>
        {product.images.length ? imageCarousel() : null }

        <div className={`${styles.ProductDetails_content} text-left p-6 md:pt-12 xl:p-12`}>
          <h2 className="text-4xl pb-3">{product.title}</h2>
          <h3 className="text-xl">${product.variants[0].price}</h3>

          {sizeOptions
            ? (
              <SizeSelector
                options={sizeOptions}
                optionChange={optionChange}
                activeIndex={activeIndex}
              />
            ) : null
          }

          <div>
            {addToCartBtn()}
          </div>

          {details()}
        </div>
      </div>
    </div>
  );
};
