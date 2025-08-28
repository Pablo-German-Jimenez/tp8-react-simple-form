import FooterBboyLinkinStyle from "./components/FooterBboyLinkinStyle";
import "./App.css";
import NavbarBboyLinkinStyle from "./components/NavBarLinkinStyle";
import SimpleForm from "./components/Formulario";
import RedBullBcOneBboyHongTen from "./components/RedBullBcOneBboyHongTen";

function App() {
  return (
    <>
      <div className="app-container">
        <NavbarBboyLinkinStyle/>
        
        <main className="d-flex justify-content-center align-items-center flex-wrap">

          <div className="video-side left-video">
            <RedBullBcOneBboyHongTen />
          </div>
          

          <div className="form-center">
            <SimpleForm />
          </div>
          

          <div className="video-side right-video">
            <RedBullBcOneBboyHongTen videoUrl="https://www.youtube.com/embed/HSOvWCpADe4" />
          </div>
        </main>
        
        <FooterBboyLinkinStyle/>
      </div>
    </>
  );
}

export default App;