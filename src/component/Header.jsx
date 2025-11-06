     import { Link } from 'react-router-dom';

     const Header = () => (
       <nav>
         <Link to="/" className="nav-link">Home</Link>
         <Link to="/about" className="nav-link">About</Link>
         <Link to="/product/1" className="nav-link">Product 1</Link> {/* Example dynamic link */}
       </nav>
     );

     export default Header;
     