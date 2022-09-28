import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

const Header = () => {
  const { isDark } = useContext(ThemeContext);
  console.log(isDark);
  const user = useContext(UserContext);
  console.log(user);

  return (
    <div>
      <header
        className="header"
        style={{
          backgroundColor: isDark ? 'black' : 'lightgray',
          color: isDark ? 'white' : 'black',
        }}
      >
        <h1> Welcome {user}!</h1>
      </header>
    </div>
  );
};

export default Header;
