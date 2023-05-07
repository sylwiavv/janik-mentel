import React, { useState } from 'react';

export const NavigationContext = React.createContext({
  toggleNavigation: () => {
  },
  setIsOpen: () => {
  },
  isOpen: false,
});

export const NavigationProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
    document.body.classList.remove('not-scroll');

    if (!isOpen) {
      document.body.classList.add('not-scroll');
    }
  };

  const value = React.useMemo(() => ({
    isOpen, setIsOpen, toggleNavigation,
  }), [isOpen]);

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
