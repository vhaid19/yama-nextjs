import {
  Bestquality,
  Specialistengineer,
  Workstrategy,
  Skilledworker
} from '../../../public/index'
import Image from 'next/image';
import Link from 'next/link';

function ProductCard({ image, title, link }) {
  return (
    <div className="max-w-sm mx-auto">
      <Link
        href={link}
        className="block bg-slate-800 rounded-lg shadow-lg p-4 
                     transform transition-all duration-300 ease-in-out
                     hover:scale-105 hover:shadow-xl
                     hover:-translate-y-2
                     cursor-pointer
                     animate-fadeIn"
      >
        {/* Image Container */}
        <div className="flex justify-center mb-4">
          <Image
            src={image}
            alt={title}
            className="w-48 h-48 object-cover rounded-lg"
          />
        </div>

        {/* Title */}
        <h2 className="md:text-xl text-sm font-bold text-center text-white mb-2">
          {title}
        </h2>

        {/* View More Link */}
        <div className="text-center">
          <span className="text-orange-600 hover:text-orange-700 font-medium">
            View Details →
          </span>
        </div>
      </Link>
    </div>
  );
}

// Example usage
function ProductGrid() {
  const products = [
    {
      id: 1,
      image: Skilledworker,
      title: "Skilled Workers",
      link: "/product/1"
    },
    {
      id: 2,
      image: Bestquality,
      title: "Best Quality",
      link: "/product/2"
    },
    {
      id: 3,
      image: Specialistengineer,
      title: "Specialist Engineers",
      link: "/product/3"
    },
    {
      id: 4,
      image: Workstrategy,
      title: "Work Strategy",
      link: "/product/4"
    },
    // Add more products as needed
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:p-4 md:gap-6 gap-4 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          link={product.link}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
