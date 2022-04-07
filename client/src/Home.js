import NavbarSection from './components/Navbar-section';
import Page1 from './components/Home-page-1';
import Page2 from './components/home-page-2';
import FooterHome from './components/Footer-home';


//https://bgibola1.bar/page/endstream
//https://jnckmedia.com/nulis/

export default function Home() {
  return (

    <div className="App">
    <NavbarSection/>
    <Page1></Page1>
    <Page2></Page2>
    <FooterHome></FooterHome>
    </div>
  );
}