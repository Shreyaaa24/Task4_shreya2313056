import React from 'react'
import p1_img from '../../Assets/bed1.jpeg'
import p2_img from '../../Assets/bed2.jpeg'
import p3_img from '../../Assets/sofa.jpeg'
import p4_img from '../../Assets/sofa2.jpeg'
import p5_img from '../../Assets/bed2.jpeg'
import {FaStar} from "react/icons/fa6"
const  data_product = [
    {
      id:1,
      name:"bed1",
      image:p1_img,
      new_price:50.00,
      old_price:80.50,
    },
    {id:2,
      name:"bed2",
      image:p2_img,
      new_price:85.00,
      old_price:120.50,
    },
    {id:3,
      name:"Sofa1",
      image:p3_img,
      new_price:60.00,
      old_price:100.50,
    },
    {id:4,
      name:"Sofa2",
      image:p4_img,
      new_price:100.00,
      old_price:150.00,
    },{
    id:5,
      name:"Sofa2",
      image:p5_img,
      new_price:100.00,
      old_price:150.00,
    },
  ];
  
  
const Products = () => {
  return (
    <div classNme="mt-4 mb-12">
    <div className='container'>
      <div className='text-center mb-10 max-w-[600px] mx-auto'>
<p  className='text-sm text-primary '>TOP SELLING PRODUCTS</p>
<h1 data-aos="fade-up" className='text-3xl font-bold'>PRODUCTS</h1>
<p  className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sapiente earum quae dolore expedita quaerat dolores ut doloribus qui voluptatibus. Molestiae magnam mollitia, culpa nisi incidunt ad hic ipsam rem.
</p>
</div>
<div>
<div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
{
data_product.map((data) => (
    
<div 
data-aos="fade-up"
data-aos-delay={data.aosDelay}
 key={data.id} className='space-y-3'>
    <img src={data.image}alt="" className='h-[220px] w-[150px] object-cover rounded-md'/>
<h3 className='font-semibold'>{data.name}</h3>
<div className='flex items-center gap-1'>
<FaStar className='text-yellow-400'/>
<span> {data.rating} </span>
</div>
</div>



))}
    </div>
      </div>
      </div>
      </div>
      
     
 ) ;
 };


export default Products
