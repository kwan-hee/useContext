import React,{useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

const Footer = () => {
  const {isDark,setIsDark} = useContext(ThemeContext);
  console.log(isDark,setIsDark);
  
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div>
      <footer
        className="footer"
        style={{
          backgroundColor: isDark ? 'black' : 'lightgray',
        }}
      >
        <button className="button" onClick={toggleTheme}>
          Dark Mode
        </button>
      </footer>
    </div>
  );
};

export default Footer;
