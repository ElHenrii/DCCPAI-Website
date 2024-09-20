import styles from './WhoWeAreSection2.module.css'
import FlavorTextWithButtonRight from '../../FlavorTextWithButtonRight/FlavorTextWithButtonRight.jsx'
import FlavorTextLeft from '../../FlavorTextLeft/FlavorTextLeft.jsx'
import FlavorTextRight from '../../FlavorTextRight/FlavorTextRight.jsx'

function WhoWeAreSection2() {
    return(
        <div className={styles.WhoWeAreSection2}>

            <div className={styles.contentDiv}>
                <div className={styles.textDiv}>
                    <FlavorTextWithButtonRight mainText='Who We Are'
                                                subText="Since our inception in 2017, the Davao City Chocolate Processors Association Inc. (DCCPAI) has been dedicated to advancing cacao 
                                                        production across the Davao Region. In line with our commitment to sustainable practices, we believe in producing high-quality 
                                                        cacao and elevating the value of local cacao products."
                                                buttonLabel="About"
                                                buttonLeadsTo="About"
                                                />
                </div>
                
            </div>
            
        </div>
    );
}

export default WhoWeAreSection2