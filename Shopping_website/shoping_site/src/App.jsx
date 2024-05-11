
import Body from "./Components/Body"
import CategoriesData from "./Components/CatagorisData"
import FeatureProducs from "./Components/FeatureProducs"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Logo from "./Components/Logo"
import Navbar from "./Components/Navbar"

const App = () => {
  return (
    <div className=" overflow-hidden">
     <Header/>
     <Logo/>
     <Navbar/>
     <Body/>
     <CategoriesData/>
     <FeatureProducs/>
     <Footer/>
    </div>
  )
}

export default App;