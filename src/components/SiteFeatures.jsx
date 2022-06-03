import React from "react";

const feature = [
  {
    id: 1,
    title: "Free Shipping",
    description: "All orders in Jabodetabek",
    icon: "fas fa-truck",
  },
  {
    id: 2,
    title: "100% Organic",
    description: "Guarantee organic",
    icon: "fas fa-leaf",
  },
  {
    id: 3,
    title: "100% Secure",
    description: "Payment Security",
    icon: "fas fa-lock",
  },
  {
    id: 4,
    title: "Best Price",
    description: "Best Price Guarantee",
    icon: "fas fa-dollar-sign",
  },
];

const Card = ({ title, description, icon }) => {
  return (
    <div className="w-full h-16 flex gap-2 py-2 px-5 justify-center items-center">
      <i className={icon}></i>
      <div className="text-justify w-full">
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
