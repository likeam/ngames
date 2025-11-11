import Link from "next/link";
import React from "react";

const Ecommerce = () => {
  const products = [
    {
      id: 1,
      name: "Mackbook Pro",
      price: 1200,
      image:
        "https://images.unsplash.com/photo-1526925712774-2833a7ecd0d4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hY2Jvb2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700",
    },
    {
      id: 2,
      name: "iPhone 13",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1634403665481-74948d815f03?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700",
    },
    {
      id: 3,
      name: "Apple Watch",
      price: 399,
      image:
        "https://images.unsplash.com/photo-1624096104992-9b4fa3a279dd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700",
    },
  ];

  return (
    <div>
      <section className=" m-[4rem]">
        <div>
          <h1 className=" text-3xl mb-3">ECommerce</h1>
        </div>
        <section className=" flex gap-3">
          {products.map((product) => (
            <div className=" w-[200px] border p-[1rem]" key={product.id}>
              <Link href={`/ecommerce/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className=" w-full h-[150px] object-cover mb-2"
                />
                <h2>{product.name}</h2>
                <p>{product.price}</p>
              </Link>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default Ecommerce;
