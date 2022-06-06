import { Link } from "react-router-dom";
import { getURL } from "../../utils/helper";
const CategoryCard = ({ col = 2, name = "tea", image_url }) => {
  const pict = image_url ? getURL(image_url) : "";
  return (
    <div
      className={`h-96 flex col-span-${col} w-full bg-[#DBD2C3] justify-center pt-10 relative box-border capitalize`}
    >
      <Link
        to={`/category/${name}`}
        style={{ backgroundImage: `url(${pict})` }}
        className={`absolute inset-0 bg-origin-content bg-cover bg-no-repeat hover:outline-0`}
      />
      <div className="z-30 font-bold text-3xl">{name}</div>
    </div>
  );
};

export default CategoryCard;
