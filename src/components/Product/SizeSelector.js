import styles from '../../styles/pages/Product.module.scss';

export default function SizeSelector({ options, optionChange, activeIndex }) {
  const variantType = options.name;

  return (
    <ul className={`${styles.SizeSelector} flex mt-8`}>
      {options.values.map((value, index) => {
        return (
          <li key={index} className={activeIndex === index ? styles.active : null}>
            <button
              className="p-2"
              onClick={optionChange}
              data-variant={variantType}
              data-index={index}
            >
              {value.value}
            </button>
          </li>
        )
      })}
    </ul>
  );
};
