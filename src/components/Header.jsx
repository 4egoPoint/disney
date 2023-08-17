import '../index.css'
import HomePage from './HomePage'

const Header = (props) => {
   return (
      <div className="header-nav">
         <div className="header-logo"></div>
         <nav className="nav-menu">
            <HomePage />
         </nav>
         <div className="header-login-btn"></div>
      </div>
   )
}

export default Header;