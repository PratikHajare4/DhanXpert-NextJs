// // // import React from 'react';

// // // const ProfileCard = () => {
// // //   return (
// // //     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
// // //       <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-lg">
// // //         <div className="flex items-center space-x-4">
// // //           <div className="relative">
// // //             <span className="absolute right-0 top-0 text-green-500"><i className="fas fa-circle"></i></span>
// // //             <img className="h-16 w-16 rounded-full border-2 border-green-500" src="path-to-avatar-image.jpg" alt="Profile avatar" />
// // //           </div>
// // //           <div className="flex flex-col">
// // //             <span className="text-lg font-semibold">Abhijeet Shirodkar</span>
// // //             <span className="text-sm text-gray-600">Online</span>
// // //           </div>
// // //         </div>
// // //         <div className="my-3">
// // //           <div className="flex items-center">
// // //             <i className="fas fa-star text-yellow-400"></i>
// // //             <span className="ml-2 text-lg">4.5 Ratings</span>
// // //           </div>
// // //           <div className="mt-1 text-sm text-gray-600">Stocks, IPO, Portfolio</div>
// // //           <div className="mt-1 text-sm text-gray-600">English, Hindi</div>
// // //           <div className="mt-1 text-sm text-gray-600">Hinjewadi, Pune</div>
// // //           <div className="mt-1 text-sm text-gray-600"><i className="fas fa-building mr-1"></i>Bull Investments - 4B Experts | Speciality</div>
// // //         </div>
//         // <div className="flex items-center mt-4">
//         //   <div className="flex items-center text-green-500">
//         //     <i className="fas fa-badge-check"></i>
//         //     <span className="ml-1">DhanXpert Verified</span>
//         //   </div>
//         //   <div className="flex items-center ml-6 text-yellow-600">
//         //     <i className="fas fa-certificate"></i>
//         //     <span className="ml-1">SEBI Registered</span>
//         //   </div>
//         // </div>
// //         // <div className="flex mt-6">
// //         //   <button className="flex-1 text-sm text-green-600 border border-green-600 rounded-full py-1 px-4 mr-2">Office Appointment Fees</button>
// //         //   <button className="flex-1 text-sm text-blue-600 border border-blue-600 rounded-full py-1 px-4">Open | Updated Today</button>
// //         // </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default ProfileCard;






// import React from 'react';

// const ProfileCard = () => {
//   return (
//     <div className="bg-gray-100">
//       {/* Header */}
//       <div className="bg-white p-4 shadow">
//         <div className="flex items-center">
//           <div className="status-dot"></div>
//           <h1 className="font-bold text-xl">Abhijeet Shirodkar</h1>
//         </div>
//       </div>

//       {/* User Info */}
//       <div className="bg-white p-4 mt-4 shadow">
//         {/* User Details */}
//         <div className="flex items-center">
//           <img src="https://via.placeholder.com/80" alt="Avatar" className="rounded-full" />
//           <div className="ml-4">
//             <h2 className="font-bold text-lg">Rohit Shitole</h2>
//             <p className="text-sm text-gray-500">Stocks, IPO, Portfolio</p>
//             <p className="flex items-center text-sm text-gray-500">
//               <span className="mr-2 text-yellow-400">
//                 <i className="fas fa-star"></i> 4.9
//               </span>
//               Ratings
//             </p>
//             <p className="text-sm text-gray-500">English, Hindi</p>
//             <p className="text-sm text-gray-500">High-level Experience</p>
//             <p className="text-sm text-gray-500">Bull Investments - 48 Experts</p>
//             <p className="text-sm text-gray-500">1 Speciality</p>
//           </div>
          
//         </div>
//         {/* Buttons */}
//         <div className="flex mt-4">
//           <button className="bg-blue-500 text-white p-2 rounded mr-2 flex items-center">
//             <i className="fas fa-phone mr-2"></i> Contact
//           </button>
//           <button className="bg-blue-500 text-white p-2 rounded flex items-center">
//             <i className="fas fa-envelope mr-2"></i> Message
//           </button>
          
//         </div>
//         <div>
//         <div className="flex mt-6">
//           <button className="flex-1 text-sm text-green-600 border border-green-600 rounded-full py-1 px-4 mr-2">Office Appointment Fees</button>
//           <button className="flex-1 text-sm text-blue-600 border border-blue-600 rounded-full py-1 px-4">Open | Updated Today</button>
//         </div>
//         </div>
//       </div>

//       {/* Interaction Tabs */}
//       <div className="bg-white mt-4 p-4 shadow">
//         <div className="flex justify-around text-center">
//           <div className="flex-1">
//             <p className="text-sm text-blue-500">Chat</p>
//           </div>
//           <div className="flex-1">
//             <p className="text-sm text-gray-500">Audio Call</p>
//           </div>
//           <div className="flex-1">
//             <p className="text-sm text-gray-500">Video Call</p>
//           </div>
//           <div className="flex-1">
//             <p className="text-sm text-gray-500">Book Offline</p>
//           </div>
//         </div>
//       </div>
     

//       {/* About */}
//       <div className="bg-white mt-4 p-4 shadow">
//         <h3 className="text-lg font-bold mb-2">About rohit</h3>
//         <p className="text-sm text-gray-600">Rohit  holds CFA certification and works at HDFC bank Wealth. Over experience of 9 years in wealth industry managing ultra high net clients.</p>
//       </div>

//       <div className="p-4">
//       <h2 className="text-xl font-semibold mb-3">Photos / Gallery</h2>
//       <div className="grid grid-cols-2 gap-4 mb-6">
//         <div className="h-32 bg-gray-300 rounded"></div>
//         <div className="h-32 bg-gray-300 rounded"></div>
//         <div className="h-32 bg-gray-300 rounded"></div>
//         <div className="h-32 bg-gray-300 rounded"></div>
//       </div>
      
//       <h2 className="text-xl font-semibold mb-3">Awards & Recognitions</h2>
//       <div className="grid grid-cols-2 gap-4 mb-6">
//         <div className="flex flex-col items-center justify-center h-32 bg-gray-300 rounded">
//           <i className="fas fa-trophy text-3xl text-yellow-400"></i>
//         </div>
//         <div className="flex flex-col items-center justify-center h-32 bg-gray-300 rounded">
//           <i className="fas fa-trophy text-3xl text-yellow-400"></i>
//         </div>
//         <div className="flex flex-col items-center justify-center h-32 bg-gray-300 rounded">
//           <i className="fas fa-trophy text-3xl text-yellow-400"></i>
//         </div>
//         <div className="flex flex-col items-center justify-center h-32 bg-gray-300 rounded">
//           <i className="fas fa-trophy text-3xl text-yellow-400"></i>
//         </div>
//       </div>

//       <h2 className="text-xl font-semibold mb-3">Degree & Certifications</h2>
//       <div className="grid grid-cols-2 gap-4 mb-6">
//         <div className="flex flex-col items-center justify-center h-32 bg-gray-300 rounded">
//           <i className="fas fa-certificate text-3xl text-red-500"></i>
//         </div>
//         <div className="flex flex-col items-center justify-center h-32 bg-gray-300 rounded">
//           <i className="fas fa-certificate text-3xl text-red-500"></i>
//         </div>
//         <div className="flex flex-col items-center justify-center h-32 bg-gray-300 rounded">
//           <i className="fas fa-certificate text-3xl text-red-500"></i>
//         </div>
//         <div className="flex flex-col items-center justify-center h-32 bg-gray-300 rounded">
//           <i className="fas fa-certificate text-3xl text-red-500"></i>
//         </div>
//       </div>

//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-3">Timings</h2>
//         <div className="flex justify-between items-center">
//           <div className="font-semibold">Mon - Sat</div>
//           <div className="text-gray-600">09:00 am - 2:00 pm</div>
//         </div>
//       </div>

//       <h2 className="text-xl font-semibold mb-3">Google Map</h2>
//       <div className="h-64 bg-gray-200 rounded mb-6"></div>

//       <h2 className="text-xl font-semibold mb-2">Address</h2>
//       <p>Karve nagar, Kothrud</p>
//     </div>

//       {/* Add User Story Button */}
//       <button className="bg-blue-500 text-white p-3 w-full mt-4 rounded">
//         <i className="fas fa-plus-circle mr-2"></i> Add User Story
//       </button>
//     </div>
//   );
// }

// export default ProfileCard;









// // import React from 'react';

// // const ProfileCard = () => {
// //   return (
// //     <div className="p-4">
// //       <h2 className="text-xl font-semibold mb-3">Photos / Gallery</h2>
// //       <div className="grid grid-cols-2 gap-4 mb-6">
// //         <div className="h-32 bg-gray-300 rounded"></div>
// //         <div className="h-32 bg-gray-300 rounded"></div>
// //         <div className="h-32 bg-gray-300 rounded"></div>
// //         <div className="h-32 bg-gray-300 rounded"></div>
// //       </div>
      
// //       <h2 className="text-xl font-semibold mb-3">Awards & Recognitions</h2>
// //       <div className="grid grid-cols-2 gap-4 mb-6">
// //         <div className="flex flex-col items-center justify-center h-32 bg-gray-300 rounded">
// //           <i className="fas fa-trophy text-3xl text-yellow-400"></i>
// //         </div>
// //         <div className="flex flex-col items-center justify-center h-32 bg-gray-300 rounded">
// //           <i className="fas fa-trophy text-3xl text-yellow-400"></i>
// //         </div>
// //         <div className="flex flex-col items-center justify-center h-32 bg-gray-300 rounded">
// //           <i className="fas fa-trophy text-3xl text-yellow-400"></i>
// //         </div>
// //         <div className="flex flex-col items-center justify-center h-32 bg-gray-300 rounded">
// //           <i className="fas fa-trophy text-3xl text-yellow-400"></i>
// //         </div>
// //       </div>

// //       <h2 className="text-xl font-semibold mb-3">Degree & Certifications</h2>
// //       <div className="grid grid-cols-2 gap-4 mb-6">
// //         <div className="flex flex-col items-center justify-center h-32 bg-gray-300 rounded">
// //           <i className="fas fa-certificate text-3xl text-red-500"></i>
// //         </div>
// //         <div className="flex flex-col items-center justify-center h-32 bg-gray-300 rounded">
// //           <i className="fas fa-certificate text-3xl text-red-500"></i>
// //         </div>
// //         <div className="flex flex-col items-center justify-center h-32 bg-gray-300 rounded">
// //           <i className="fas fa-certificate text-3xl text-red-500"></i>
// //         </div>
// //         <div className="flex flex-col items-center justify-center h-32 bg-gray-300 rounded">
// //           <i className="fas fa-certificate text-3xl text-red-500"></i>
// //         </div>
// //       </div>

// //       <div className="mb-6">
// //         <h2 className="text-xl font-semibold mb-3">Timings</h2>
// //         <div className="flex justify-between items-center">
// //           <div className="font-semibold">Mon - Sat</div>
// //           <div className="text-gray-600">09:00 am - 2:00 pm</div>
// //         </div>
// //       </div>

// //       <h2 className="text-xl font-semibold mb-3">Google Map</h2>
// //       <div className="h-64 bg-gray-200 rounded mb-6"></div>

// //       <h2 className="text-xl font-semibold mb-2">Address</h2>
// //       <p>Bull Investments, White</p>
// //     </div>
// //   );
// // }

// // export default ProfileCard;







