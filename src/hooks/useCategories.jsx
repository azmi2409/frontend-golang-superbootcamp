import React from "react";
import { getCategories } from "../utils/server";

const useCategories = () => {
  const [categories, setCategories] = React.useState(["all"]);
  const [loading, setLoading] = React.useState(true);

  const categoryList = React.useCallback(async () => {
    const data = await getCategories();
    setCategories(data);
    setLoading(false);
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
