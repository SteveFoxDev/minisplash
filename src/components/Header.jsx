import './Header.scss';

const Header = ({ children }) => {
  return (
    <header className='header'>
      <h1 className='header__logo'>
        <span className='header__logo--span'>mini</span>splash
      </h1>
      {children}
    </header>
  );
};

export default Header;
