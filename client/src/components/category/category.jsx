import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import img1 from "../../assets/images/test.jpg";
async function getData(category) {
  const res = await fetch(`http://localhost:5000/products/${category}`);
  const products = await res.json();
  return products;
}

export default function List() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const products = await getData(category);
      setProducts(products);
    }
    fetchData();
  }, [category]);

  if (products.length === 0) {
    return (
      <div className="text-center flex flex-col items-center py-10 font-raleway">
        "Uh-oh! Cursed Spirits took the data! Time to exorcise them!" 👺🔍
        <div className="bg-black my-10 custom-gojo"></div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto py-2 border-b-2">
        <div className="md:mx-5">
          <div className="grid grid-cols-2 md:grid-cols-3">

            {products.map((product) => (
              <Link
                to={{
                  pathname: `/product/${product.name}`,
                }}
                state={{ productData: product }}
                className="col-span-1 cursor-pointer px-2 py-4 md:px-5 md:py-5"
                key={product._id}
              >
                <img
                  className="h-[15em] md:h-[35em] object-cover px-2 md:px-0"
                  src={product.image[0]}
                  width="510"
                  height="10"
                />
                <div className="flex justify-between font-satoshi font-semibold py-2 px-2 md:px-0 ">
                  <p className="md:w-2/3">{product.name}</p>
                  <p>${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
