import React, { useState } from 'react';
import './style.css';
import Page from './components/Page';
import { ThemeContext } from './context/ThemeContext';
import { UserContext} from './context/UserContext';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div>
      {/* <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p> */}
      <UserContext.Provider value={'사용자'}>
        <ThemeContext.Provider value={{isDark, setIsDark}}>
          <Page />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;