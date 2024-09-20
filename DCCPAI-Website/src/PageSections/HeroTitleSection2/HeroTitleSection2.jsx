import styles from '../HeroTitleSection2/HeroTitleSection2.module.css';
import TextButton from '../../TextButton/TextButton';

function HeroTitleSection2() {
  return (
    <div className={styles.heroImageSection}>
        <div className={styles.heroTitleSectionCard}>
            <p className={styles.heroText}>Davao City Chocolate Processors Association Incorporated.</p>
            <p className={styles.subText}>Lorem ipsum odor amet, consectetuer adipiscing elit. Hendrerit morbi porttitor, diam mus posuere velit torquent. Lacus elit litora ullamcorper sem tellus auctor ligula litora.</p>
            <TextButton buttonText="Shop" buttonLink="Shop"/> 
        </div>
    </div>
  );
}

export default HeroTitleSection2;
