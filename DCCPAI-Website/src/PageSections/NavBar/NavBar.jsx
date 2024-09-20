import styles from '../NavBar/NavBar.module.css';
import { Link } from "react-router-dom";
import logoImage from '../../Assets/Pictures/Logotext/DCCPAI Logotext1.png'

function NavBar() {

    return (
        <nav className={styles.navBar}> 
            <div className={styles.navBarContainer}>
                
                <div className={styles.navBarLogoText}>
                    <Link to="/" className="Link">
                        <img src={logoImage} className={styles.logoImage}></img>
                    </Link>
                </div>

                <div className={styles.navBarContent}>

                    <Link to="/Shop" className="Link">
                        <div className={`${styles.navBarContentElement} ${styles.navBarShop}`}>
                        <p>Shop</p>
                        </div>
                    </Link>

                    <Link to="/FindUs" className="Link">
                        <div className={`${styles.navBarContentElement} ${styles.navBarFind}`}>
                        <p>Find Us</p>
                        </div>
                    </Link>

                    <Link to="/About" className="Link">
                        <div className={`${styles.navBarContentElement} ${styles.navBarAbout}`}>
                        <p>About</p>
                        </div>
                    </Link>

                    <Link to="/PageNotFound" className="Link"> {/*Should link to facebook page*/}
                    <div className={`${styles.navBarContentElement} ${styles.navBarIcon} ${styles.navBarFBLogo}`}>
                        <div className={styles.svgContainer}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${styles.navBarSVG} ${styles.facebookIcon}`}><title>facebook</title><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" /></svg>
                        </div>
                    </div>
                    </Link>

                    <Link to="/PageNotFound" className="Link"> {/*Should link to a working thing still unsure*/}
                    <div className={`${styles.navBarContentElement} ${styles.navBarIcon} ${styles.navBarSearch}`}>
                        <div className={styles.svgContainer}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${styles.navBarSVG} ${styles.searchIcon}`}><title>magnify</title><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>
                        </div>
                    </div>
                    </Link>

                </div>
            </div>
        </nav> 
      );

}

export default NavBar