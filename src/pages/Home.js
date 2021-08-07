import ProductList from '../components/ProductList';
import logo from '../assets/logo.gif';
import illustration1 from '../assets/illustration-1.png';
import illustration2 from '../assets/illustration-2.png';
import illustration3 from '../assets/illustration-3.png';
import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <div className={`${styles.Home} p-4 md:p-8`}>
        <div className={styles.behind_logo_circle}/>
        <img 
          className="max-w-xs m-auto absolute right-6 top-0" 
          src={logo} 
          alt="sky parlor spinning logo" 
        />
        <img 
          className={`${styles.illustration} max-w-md absolute`}
          src={illustration1}
          alt="Sky parlor illustration"
        />
        <img 
          className={`${styles.illustration} max-w-md absolute bottom-10 right-0`}
          src={illustration2}
          alt="Sky parlor illustration"
        />
        <img 
          className={`${styles.illustration} max-w-md absolute bottom-10 right-5`}
          src={illustration3}
          alt="Sky parlor illustration"
        />
      <div className="relative flex items-center gap-10">
        {/* Illustrations (absolute positioning) */}
        <h2 className="text-4xl md:text-8xl text-left mt-4">SHOP</h2>
        <ProductList />
      </div>

    </div>
  )
}
