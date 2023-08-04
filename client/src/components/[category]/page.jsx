import Image from "next/image";
import Link from "next/link";

async function getData(category){
  const res = await fetch(`http://localhost:5000/products/${category}`);
  const products = await res.json();
  return products;
}

export default async function List({params}) {
  const products = await getData(params.category);
  return (
    <>
      <div className="container mx-auto py-2 lg:py-5 border-b-2">
        <div className="md:mx-5">
          <div className="grid grid-cols-2 md:grid-cols-3">
            {products.map((product) => (
              <Link
                href="/product"
                className="col-span-1 cursor-pointer px-2 py-4 md:px-5 md:py-5"
              >
                <Image
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
