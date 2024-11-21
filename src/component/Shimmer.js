// const Shimmer = () => {
//     return (<div>
//         <div className="w-10/12 m-auto text-center text-wrap font-bold text-2xl mt-28">Since, this project works on Swiggy API we cannot directly use it. So, Please Download Allow CORS Extension - Click on this <a href="https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en" className="text-blue-500" target="_blank">LINK</a> to redirect to the Extension Page. </div>
//         <div className="flex flex-wrap justify-center shimmer-container mt-16">      
//         <div className="m-4 p-4 w-[250px] h-[450px] rounded-md bg-gray-100 shimmer-card">Cards</div>
//         <div className="m-4 p-4 w-[250px] h-[450px] rounded-md bg-gray-100 shimmer-card">Cards</div>
//         <div className="m-4 p-4 w-[250px] h-[450px] rounded-md bg-gray-100 shimmer-card">Cards</div> 
//         <div className="m-4 p-4 w-[250px] h-[450px] rounded-md bg-gray-100 shimmer-card">Cards</div> 
//         <div className="m-4 p-4 w-[250px] h-[450px] rounded-md bg-gray-100 shimmer-card">Cards</div> 
//         <div className="m-4 p-4 w-[250px] h-[450px] rounded-md bg-gray-100 shimmer-card">Cards</div> 
//         <div className="m-4 p-4 w-[250px] h-[450px] rounded-md bg-gray-100 shimmer-card">Cards</div> 
//         <div className="m-4 p-4 w-[250px] h-[450px] rounded-md bg-gray-100 shimmer-card">Cards</div> 
//         <div className="m-4 p-4 w-[250px] h-[450px] rounded-md bg-gray-100 shimmer-card">Cards</div> 
//         <div className="m-4 p-4 w-[250px] h-[450px] rounded-md bg-gray-100 shimmer-card">Cards</div> 

//     </div>
//     </div>
    
//     );
// };

// export default Shimmer;

import React from 'react';

const RestaurantCardShimmer = () => {
  return (
    <div className="flex flex-wrap justify-center mt-36">
      {[...Array(10)].map((_, index) => (
        <div 
          key={index} 
          className="m-4 p-4 w-[250px] rounded-md bg-gray-100 animate-pulse"
        >
          {/* Image Placeholder */}
          <div className="rounded-lg bg-gray-300 h-[200px] mb-4"></div>
          
          {/* Restaurant Name */}
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
          
          {/* Cuisines */}
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
          
          {/* Rating */}
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
          
          {/* Cost for Two */}
          <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
          
          {/* Delivery Time */}
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantCardShimmer;
