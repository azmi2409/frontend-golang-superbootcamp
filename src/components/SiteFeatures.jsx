import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import { ImPriceTag } from "react-icons/im";
import { GiLindenLeaf } from "react-icons/gi";

const feature = [
  {
    id: 1,
    title: "Free Shipping",
    description: "All orders in Jabodetabek",
    icon: (cn) => <FaShippingFast className={cn} />,
  },
  {
    id: 2,
    title: "100% Organic",
    description: "Guarantee organic",
    icon: (cn) => <GiLindenLeaf className={cn} />,
  },
  {
    id: 3,
    title: "100% Secure",
    description: "Payment Security",
    icon: (cn) => <GrSecure className={cn} />,
  },
  {
    id: 4,
    title: "Best Price",
    description: "Best Price Guarantee",
    icon: (cn) => <ImPriceTag className={cn} />,
  },
];

const Card = ({ title, description, icon }) => {
  return (
    <div className="w-full h-16 flex gap-5 py-2 px-5 justify-center items-center">
      {icon("w-8 h-8")}
      <div className="w-full">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

const SiteFeatures = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 mx-auto gap-10">
      {feature.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default SiteFeatures;
