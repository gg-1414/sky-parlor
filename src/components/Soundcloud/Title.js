import Marquee from "react-fast-marquee";
import styles from '../../styles/components/MusicPlayer.module.scss';

export default function Title({ permalink, title }) {
  return (
    <div className={`${styles.title} text-xs md:text-sm`}>
      <Marquee gradient={false}>
        <a 
          href={permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <span>{title}</span>
        </a>
      </Marquee>
    </div>
  )
}
