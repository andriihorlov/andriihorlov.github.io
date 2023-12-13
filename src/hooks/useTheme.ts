const useTheme = (theme: boolean, light: string) => {
  const addTheme = (className: string) => {
    const themeClass = theme ? ` ${light}` : "";

    return className + themeClass;
  };
  return { addTheme };
};

export default useTheme;
