import bee from '../../bee.png';
import '../../App.css';
import { Link, useLocation } from "react-router-dom";

function Home() {

    const location = useLocation();
    
  return (
    <div className="Home">
      <header className="App-header">
        <img src={bee} className="App-logo" alt="logo" />
        <p>
          How Big is Today's Bee?
        </p>
        <Link to="/beealgo" className={location.pathname === "/beealgo" ? "nav-link active" : "nav-link"}>
            Calculate the Target
        </Link>
      </header>
    </div>
  );
}

export default Home;