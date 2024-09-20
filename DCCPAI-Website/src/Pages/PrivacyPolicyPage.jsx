import NavBar from '../PageSections/NavBar/NavBar.jsx'
import Footer from '../PageSections/Footer/Footer.jsx'
import PrivacyPolicyTitleSection from '../PageSections/PrivacyPolicyTitleSection/PrivacyPolicyTitleSection.jsx'
import PrivacyPolicyBodySection from '../PageSections/PrivacyPolicyBodySection/PrivacyPolicyBodySection.jsx'

function PrivacyPolicyPage() {
    return (
        <>
        <NavBar />  
        <PrivacyPolicyTitleSection />    
        <PrivacyPolicyBodySection />
        <Footer /> 
        </>
    )
}

export default PrivacyPolicyPage