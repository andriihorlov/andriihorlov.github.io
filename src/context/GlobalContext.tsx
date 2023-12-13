import { createContext, useState } from "react";

export const GlobalContext = createContext({
  changeTheme: () => {},
  theme: false,
});

interface Props {
  children?: React.ReactNode;
}

export const GlobalContextProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    setTheme((prev) => !prev);
  };

  const providerValue = {
    changeTheme,
    theme,
  };
  return (
    <GlobalContext.Provider value={providerValue}>
      {children}
    </GlobalContext.Provider>
  );
};
