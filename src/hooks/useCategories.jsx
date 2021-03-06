import React from "react";
import { getCategories } from "../utils/server";
import { CategoryContext } from "../context/CategoryContext";

const useCategories = () => {
  const [categories, setCategories] = React.useContext(CategoryContext);
  const [loading, setLoading] = React.useState(true);

  const categoryList = React.useCallback(async () => {
    const data = await getCategories();
    setCategories(data);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const category = React.useMemo(() => {
    return {
      categories,
      loading,
      categoryList,
    };
  }, [categories, loading, categoryList]);

  React.useEffect(() => {
    categoryList();
  }, [categoryList]);

  return category;
};

export default useCategories;
