# useContext

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-j4decf)

![2022-09-28_181540](https://user-images.githubusercontent.com/80756638/192740560-409dca57-12cb-4d0a-9218-381e1f5d3dc0.jpg)

# context
```c

import { createContext } from 'react';

export const ThemeContext = createContext(null);
```

# Provider

```c
 <UserContext.Provider value={'사용자'}>
        <ThemeContext.Provider value={{isDark, setIsDark}}>
          <Page />
        </ThemeContext.Provider>
      </UserContext.Provider>
      
```
# conText 사용 및 불러오기

```c
import React,{useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

const Footer = () => {
  const {isDark,setIsDark} = useContext(ThemeContext);
  console.log(isDark,setIsDark);

```
