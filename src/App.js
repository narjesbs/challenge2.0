import './App.css';
import './css/style.css';
import image1 from "./images/proj1.jpg";
import image2 from "./images/proj2.jpg";
import image3 from "./images/proj3.jpg";
import image4 from "./images/proj4.jpg";
import HeaderPage from "./components/header.js";
import AboutPage from "./components/about.js";
import ContactPage from "./components/contact.js";
import ProjectPage from "./components/project.js";
import FooterPage from "./components/footer.js";

function App() {
  const projects = [{name:"Project 1" , image:image1 },{name:"Project 2" , image:image2 },{name:"Project 3" , image:image3 },{name:"Project 4" , image:image4 }];
  const user = {name:"John" , lastname:" Doe" }; 
  const annee = {year:"2020"}; 
  return (
    <div className="App">
      <HeaderPage info = {user}/>
      <AboutPage info = {user}/>
      <ContactPage />
      <ProjectPage data = {projects} />
      <FooterPage an = {annee} />
    </div>
  );
}

export default App;
