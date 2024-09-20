import styles from './AboutBodySection.module.css';
import FlavorTextLeft from '../../FlavorTextLeft/FlavorTextLeft.jsx'
import FlavorTextWithButtonLeft from '../../FlavorTextWithButtonLeft/FlavorTextWithButtonLeft.jsx'
import FlavorTextRight from '../../FlavorTextRight/FlavorTextRight.jsx'
import FlavorTextWithButtonRight from '../../FlavorTextWithButtonRight/FlavorTextWithButtonRight.jsx'
import FlavorTextMiddle from '../../FlavorTextMiddle/FlavorTextMiddle.jsx';

function AboutBodySection() {
    return(
    <>
    <div className={styles.aboutBodyContainer}>

        <div className={styles.leftText}>
            <FlavorTextLeft mainText="The Mission" subText="To empower local cacao farmers by promoting sustainable farming practices, enhancing the quality and value of cacao products, 
                                                            and fostering community-driven growth in the cacao industry. We are committed to building a resilient and prosperous future 
                                                            for our members and their communities through education, innovation, and collaboration."/>
        </div>

        <div className={styles.rightText}>
            <FlavorTextRight mainText="The Vision" subText="To be a leading force in the global cacao industry, recognized for our dedication to quality, sustainability, and the empowerment 
                                                            of local farmers. We envision a thriving cacao community where our products are celebrated worldwide, and our members enjoy economic 
                                                            prosperity and a sustainable livelihood."/>
        </div>
        
        <div className={styles.leftText}>
            <FlavorTextWithButtonLeft mainText="The Process (tentative)" buttonLabel="Video / placed at the side"/>
        </div>
        
        <div className={styles.rightText}>
            <FlavorTextWithButtonRight mainText="The Source (tentative)" buttonLabel="Frequently Asked Questions" buttonLeadsTo="FAQ"/>
        </div>
        
        <div className={styles.bottomText}>
            <FlavorTextMiddle />
        </div>

    </div>
    </>
    );
}

export default AboutBodySection