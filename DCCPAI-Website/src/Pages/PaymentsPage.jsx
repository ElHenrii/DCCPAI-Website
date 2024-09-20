import NavBar from '../PageSections/NavBar/NavBar.jsx'
import Footer from '../PageSections/Footer/Footer.jsx'
import PaymentsTitleSection from '../PageSections/PaymentsTitleSection/PaymentsTitleSection.jsx'
import PaymentsBodySection from '../PageSections/PaymentsBodySection/PaymentsBodySection.jsx'
import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx'


function PaymentsPage() {
    return (
        <>
        <NavBar />
        <PaymentsTitleSection />
        <PaymentsBodySection />
        <Footer /> 
        <ShoppingCart/>
        </>
    )
}

export default PaymentsPage