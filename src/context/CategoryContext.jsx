import React from "react";

export const CategoryContext = React.createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = React.useState([]);
  return (
    <CategoryContext.Provider value={[categories, setCategories]}>
      {children}
    </CategoryContext.Provider>
  );
};
