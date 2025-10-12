import React from 'react';
import products from '../../data/home/ProductData';


const Products = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50 text-center">
      {/* Section Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-secondary mt-4">Our Products</h2>
      </div>

      {/* Product Cards */}
      <div className="flex flex-wrap justify-center gap-8 px-6">
        {products.map((product, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-md hover:shadow-xl transition-shadow 
        duration-300 w-80 p-6 flex flex-col items-center text-center border border-gray-100
        cursor-pointer bg-gradient-to-br from-white via-blue-50 to-purple-50
        ${index === 1 ? 'lg:translate-y-5' :''}`}
          >
            <div className="h-48 w-full flex justify-center items-center mb-6">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain h-full w-auto rounded-xl"
              />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-4">
              {product.title}
            </h3>
            <button className="bg-blue-600 text-sm text-white font-medium px-5 py-1 rounded-full hover:bg-blue-700 transition">
              KNOW MORE
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;