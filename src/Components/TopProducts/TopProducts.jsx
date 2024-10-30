import React,{ useContext }from 'react';
import { CartContext } from '../../Context/CartContext';
import p6_img from '../../Assets/dining_table2.jpeg';
import p7_img from '../../Assets/bed1.jpeg';
import p8_img from '../../Assets/sofa.jpeg';
import p9_img from '../../Assets/bed1.jpeg';
import p10_img from '../../Assets/sofa.jpeg';


const new_collections = [
  {
    id: 12,
    name: 'lorem',
    image: p6_img,
    new_price: 50.0,
    old_price: 80.5,
    description: 'Made of teakwood brought from rich forests',
  },
  {
    id: 35,
    name: 'lorem',
    image: p7_img,
    new_price: 85.0,
    old_price: 120.5,
    description: 'Made of teakwood brought from rich forests',
  },
  {
    id: 14,
    name: 'lorem',
    image: p8_img,
    new_price: 60.0,
    old_price: 100.5,
    description: 'Made of teakwood brought from rich forests',
  },
  {
    id: 14,
    name: 'lorem',
    image: p9_img,
    new_price: 60.0,
    old_price: 100.5,
    description: 'Made of teakwood brought from rich forests',
  },
  {
    id: 14,
    name: 'lorem',
    image: p10_img,
    new_price: 60.0,
    old_price: 100.5,
    description: 'Made of teakwood brought from rich forests',
  },
];

const TopProducts = () => {
  
  const { addToCart } = useContext(CartContext);
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='container mx-auto'>
        <div className='text-center mb-8 max-w-[800px] mx-auto'>
          <p className='text-sm text-primary'>TOP RATED PRODUCTS FOR YOU</p>
          <h1 data-aos='fade-up' className='text-3xl font-bold'>
            BEST PRODUCTS
          </h1>
          <p className='text-xs text-gray-400 mt-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sapiente earum quae dolore expedita
            quaerat dolores ut doloribus qui voluptatibus. Molestiae magnam mollitia, culpa nisi incidunt ad hic ipsam
            rem.
          </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-5 place-items-center'>
          {new_collections.map((product) => (
            <div key={product.id} className='group'>
              <div data-aos='zoom-in' className='h-[200px]'>
                <img
                  src={product.image}
                  alt={product.name}
                  className='max-w-[240px] block mx-auto transform -translate-y-0 group-hover:scale-105 duration-300 drop-shadow-md'
                />
              </div>
              <div className='p-8 text-center'>
                <h1 className='text-xl font-bold'>{product.name}</h1>
                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2'>
                  {product.description}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className='bg-primary hover:scale-105 duration-300 text-white  dark:text-black py-2 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
