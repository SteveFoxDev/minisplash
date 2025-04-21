import './Header.css';

const Header = ({ children }) => {
    return <header className="header">
        <h1 className="header__logo">Unsplash<span className='header__logo--span'>mini</span></h1>
        {children}
    </header>
}

export default Header;