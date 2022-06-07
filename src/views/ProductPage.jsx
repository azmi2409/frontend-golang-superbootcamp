import React from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../hooks";
import Container from "../components/Container";
import { getURL, formatCurrencyToIDR } from "../utils/helper";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const ProductPage = () => {
  const { slug } = useParams();
  const [product, loading] = useProduct(slug);

  React.useEffect(() => {
    const title = product ? product.name : "";
    document.title = `${title} - Beeleaf.id`;
  }, [product]);

  return (
    <Container>
      <div className="grid grid-cols-2 place-items-center">
        <div className="col-span-1">
          <div className="relative">
            <img
              src={getURL(product?.image_url[0])}
              alt={product?.name}
              className="w-96 h-auto"
            />
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-start justify-start h-full w-full gap-5">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold">{product?.name}</h1>
            <p className="text-gray-400 text-sm mt-4 font-bold">
              SKU : {product?.sku}
            </p>
            <p className="font-normal text-3xl mt-6">
              {formatCurrencyToIDR(product?.price)}
            </p>
            <p className="text-gray-800 text-justify mt-10 font-serif">
              {product?.description}
            </p>
          </div>
          <div className="h-11 w-40 border-2 grid grid-cols-3 place-items-center box-border text-gray-800">
            <button className="col-span-1 w-full flex justify-center items-center">
              <AiOutlineMinus className="text-xl" />
            </button>
            <input
              className="col-span-1 w-full text-center"
              type="number"
              min={0}
              defaultValue={0}
            />
            <button className="col-span-1 w-full flex justify-center items-center">
              <AiOutlinePlus className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductPage;
