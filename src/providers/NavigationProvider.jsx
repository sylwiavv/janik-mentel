import React, { useState } from 'react';

export const NavigationContext = React.createContext({
  toggleNavigation: () => {},
  setIsOpen: () => {},
  isOpen: '',
});

const NavigationProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
    document.body.classList.remove('not-scroll');

    if (!isOpen) {
      document.body.classList.add('not-scroll');
    }
  };

  return (
    <NavigationContext.Provider
      value={{
        toggleNavigation,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
