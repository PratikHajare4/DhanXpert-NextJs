













// import React from 'react';
// import { BsFillChatFill, BsTelephoneFill, BsCameraVideoFill, BsBookFill } from 'react-icons/bs';

// const XpertProfile = () => {
//   return (
//     <div className="bg-black-500 ">
//       {/* Header */}
//       <div className="bg-white  p-4 shadow">
//         <div className="flex items-center">
//           <div className="status-dot"></div>
//           <h1 className="font-bold text-4xl">Rohit Shitole</h1>
//         </div>
//       </div>

//       {/* User Info */}
//       <div className="bg-white p-4 mt-4 shadow ">
//         {/* User Details */}
//         <div className="flex justify-center items-center">
//           <img src="/profile.jpg" alt="Avatar" className="rounded-full" width="220" height="220" />
//           <div className="ml-4">
//             <h2 className="font-bold text-3xl">Rohit Shitole</h2>
//             <p className="text-sm text-gray-700">Stocks, IPO, Portfolio</p>
//             <p className="flex items-center text-sm text-gray-700">
//               <span className="mr-2 text-yellow-500">
//                 <i className="fas fa-star"></i> 4.9
//               </span>
//               Ratings
//             </p>
//             <p className="text-sm text-gray-700">English, Hindi</p>
//             <p className="text-sm text-gray-700">High-level Experience</p>
//             <p className="text-sm text-gray-700">Bull Investments - 48 Experts</p>
//             <p className="text-sm text-gray-700">1 Speciality</p>
//           </div>
//         </div>
//         {/* Buttons */}
//         <div className="flex  justify-center  mt-4">
//           <button className="bg-blue-500 text-white p-2 rounded mr-2 flex items-center">
//             <i className="fas fa-phone mr-2"></i> Contact
//           </button>
//           <button className="bg-blue-500 text-white p-2 rounded flex items-center">
//             <i className="fas fa-envelope mr-2"></i> Message
//           </button>
//         </div>
//         <div className="flex  justify-center items-center mt-4">
//           <div className="flex justify-center items-center mt-4">
//             <span className="flex items-center text-green-500 mr-4">
//               <i className="fas fa-check-circle mr-1"></i>
//               <span className="text-lg font-bold">DhanXpert Verified</span>
//             </span>
//             <span className="flex items-center text-yellow-500">
//               <i className="fas fa-check-circle mr-1"></i>
//               <span className="text-lg font-bold">SEBI Registered</span>
//             </span>
//           </div>
//         </div>
//         <div>
//           <div className="flex mt-6">
//             <button className="flex-1 text-2xl font-bold text-green-600 border border-green-600 rounded-full py-1 px-4 mr-2">Office Appointment Fees</button>
//             <button className="flex-1 text-2xl font-bold text-blue-600 border border-blue-600 rounded-full py-1 px-4">Open | Updated Today</button>
//           </div>
//         </div>
//       </div>

//       {/* Interaction Tabs */}
//       <div className="bg-white mt-4 p-4  shadow">
//         <div className="flex justify-around ">
//           <div className="flex-1 justify-around">
//             <p className="text-lg font-bold text-blue-500"><BsFillChatFill className="text-3xl text-blue-500 mr-1" /> Chat</p>
//           </div>
//           <div className="flex-1">
//             <p className="text-lg font-bold text-blue-500"><BsTelephoneFill className="text-3xl text-blue-500 mr-1" /> Audio Call</p>
//           </div>
//           <div className="flex-1">
//             <p className="text-lg font-bold text-blue-500"><BsCameraVideoFill className="text-3xl text-blue-500 mr-1" /> Video Call</p>
//           </div>
//           <div className="flex-1">
//             <p className="text-lg font-bold text-blue-500"><BsBookFill className="text-3xl text-blue-500 mr-1" /> Book Now</p>
//           </div>
//         </div>
//       </div>

//       {/* About */}
//       <div className="bg-white mt-4 p-4 shadow">
//         <h3 className="text-2xl font-bold mb-2">About Rohit</h3>
//         <p className="text-lg font-bold text-gray-600">Rohit, a CFA-certified professional, excels at HDFC Bank Wealth with 9 years' experience in ultra high net worth client management. Crafting tailored financial strategies, he navigates complex landscapes with precision and innovation. Renowned for his dedication to client satisfaction, Rohit fosters long-term relationships built on trust and integrity. His expertise extends beyond conventional methods, encompassing innovative approaches to asset allocation and risk management. </p>
//       </div>

//       {/* Photos / Gallery */}
//       <div className="p-4">
//         <h2 className="text-2xl font-bold  mb-3">Photos / Gallery</h2>
//         <div className="flex flex-wrap justify-between mb-6" style={{ maxWidth: "800px" }}>
//           <img src="/gallery4.jpg" alt="Photo 1" className="h-32 mb-2 mr-2" />
//           <img src="/gallery3.jpg" alt="Photo 2" className="h-32 mb-2 mr-2" />
//           <img src="/gallery2.jpg" alt="Photo 3" className="h-32 mb-2 mr-2" />
//           <img src="/gallary1.jpg" alt="Photo 4" className="h-32 mb-2 mr-2" />
//         </div>
//       </div>

//       {/* Awards & Recognitions */}
//       <div className="bg-white mt-4 p-4 shadow">
//         <h2 className="text-2xl font-bold mb-3">Awards & Recognitions</h2>
//         <ul className="ml-8">
//           <li className="text-lg font-bold text-gray-600">Award 1</li>
//           <li className="text-lg font-bold text-gray-600">Award 2</li>
//           <li className="text-lg font-bold text-gray-600">Award 3</li>
//           <li className="text-lg font-bold text-gray-600">Award 4</li>
//           {/* Add more awards as needed */}
//         </ul>
//       </div>

//       {/* Degree & Certifications */}
//       <div className="bg-white mt-4 p-4 shadow">
//         <h2 className="text-2xl font-bold mb-3">Degree & Certifications</h2>
//         <ul className="ml-8">
//           <li className="text-lg font-bold text-gray-600">Degree 1</li>
//           <li className="text-lg font-bold text-gray-600">Degree 2</li>
//           <li className="text-lg font-bold text-gray-600">Certification 1</li>
//           <li className="text-lg font-bold text-gray-600">Certification 2</li>
//           {/* Add more degrees and certifications as needed */}
//         </ul>
//       </div>

//       {/* Timings */}
//       <div className="bg-white mt-4 p-4 shadow">
//         <h2 className="text-2xl font-bold mb-3">Timings</h2>
//         <div className="flex justify-between items-center">
//           <div className="text-lg font-bold text-gray-600">Mon - Sat</div>
//           <div className="ttext-lg font-bold text-gray-600">09:00 am - 2:00 pm</div>
//         </div>
//       </div>

//       {/* Google Map */}
//       <div className="bg-white mt-4 p-4 shadow">
//         <h2 className="text-2xl font-bold mb-3">Google Map</h2>
//         <div className="h-64 bg-gray-200 rounded"></div>
//       </div>

//       {/* Address */}
//       <div className="bg-white mt-4 p-4 shadow">
//         <h2 className="text-2xl font-bold mb-2">Address</h2>
//         <p className="text-lg font-bold text-gray-600">Karve nagar, Kothrud</p>
//       </div>

//       {/* Add User Story Button */}
//       <button className="bg-blue-500 text-white p-3 w-full mt-4 rounded">
//         <i className="fas fa-plus-circle mr-2"></i> Add User Story
//       </button>
//     </div>
//   );
// }

// export default XpertProfile;









// import React from 'react';
// import { BsFillChatFill, BsTelephoneFill, BsCameraVideoFill, BsBookFill } from 'react-icons/bs';

// const XpertProfile = () => {
//   return (
//     <div className="bg-gray-100">
//       <div className="container mx-auto">
//         {/* Header */}
//         <div className="bg-white p-4 shadow">
//           <div className="flex items-center">
//             <div className="status-dot"></div>
//             <h1 className="font-bold text-4xl">Rohit Shitole</h1>
//           </div>
//         </div>

//         {/* User Info */}
//         <div className="bg-white p-4 mt-4 shadow">
//           {/* User Details */}
//           <div className="flex justify-center items-center">
//             <img src="/profile.jpg" alt="Avatar" className="rounded-full" width="220" height="220" />
//             <div className="ml-4">
//               <h2 className="font-bold text-3xl">Rohit Shitole</h2>
//               <p className="text-sm text-gray-700">Stocks, IPO, Portfolio</p>
//               <p className="flex items-center text-sm text-gray-700">
//                 <span className="mr-2 text-yellow-500">
//                   <i className="fas fa-star"></i> 4.9
//                 </span>
//                 Ratings
//               </p>
//               <p className="text-sm text-gray-700">English, Hindi</p>
//               <p className="text-sm text-gray-700">High-level Experience</p>
//               <p className="text-sm text-gray-700">Bull Investments - 48 Experts</p>
//               <p className="text-sm text-gray-700">1 Speciality</p>
//             </div>
//           </div>
//           {/* Buttons */}
//           <div className="flex  justify-center  mt-4">
//             <button className="bg-blue-500 text-white p-2 rounded mr-2 flex items-center">
//               <i className="fas fa-phone mr-2"></i> Contact
//             </button>
//             <button className="bg-blue-500 text-white p-2 rounded flex items-center">
//               <i className="fas fa-envelope mr-2"></i> Message
//             </button>
//           </div>
//           <div className="flex  justify-center items-center mt-4">
//             <div className="flex justify-center items-center mt-4">
//               <span className="flex items-center text-green-500 mr-4">
//                 <i className="fas fa-check-circle mr-1"></i>
//                 <span className="text-lg font-bold">DhanXpert Verified</span>
//               </span>
//               <span className="flex items-center text-yellow-500">
//                 <i className="fas fa-check-circle mr-1"></i>
//                 <span className="text-lg font-bold">SEBI Registered</span>
//               </span>
//             </div>
//           </div>
//           <div>
//             <div className="flex mt-6">
//               <button className="flex-1 text-2xl font-bold text-green-600 border border-green-600 rounded-full py-1 px-4 mr-2">Office Appointment Fees</button>
//               <button className="flex-1 text-2xl font-bold text-blue-600 border border-blue-600 rounded-full py-1 px-4">Open | Updated Today</button>
//             </div>
//           </div>
//         </div>

//         {/* Interaction Tabs */}
//         <div className="bg-white mt-4 p-4 shadow">
//           <div className="flex justify-around ">
//             <div className="flex-1 justify-around">
//               <p className="text-lg font-bold text-blue-500"><BsFillChatFill className="text-3xl text-blue-500 mr-1" /> Chat</p>
//             </div>
//             <div className="flex-1">
//               <p className="text-lg font-bold text-blue-500"><BsTelephoneFill className="text-3xl text-blue-500 mr-1" /> Audio Call</p>
//             </div>
//             <div className="flex-1">
//               <p className="text-lg font-bold text-blue-500"><BsCameraVideoFill className="text-3xl text-blue-500 mr-1" /> Video Call</p>
//             </div>
//             <div className="flex-1">
//               <p className="text-lg font-bold text-blue-500"><BsBookFill className="text-3xl text-blue-500 mr-1" /> Book Now</p>
//             </div>
//           </div>
//         </div>

//         {/* About */}
//         <div className="bg-white mt-4 p-4 shadow">
//           <h3 className="text-2xl font-bold mb-2">About Rohit</h3>
//           <p className="text-lg font-bold text-gray-600">Rohit, a CFA-certified professional, excels at HDFC Bank Wealth with 9 years' experience in ultra high net worth client management. Crafting tailored financial strategies, he navigates complex landscapes with precision and innovation. Renowned for his dedication to client satisfaction, Rohit fosters long-term relationships built on trust and integrity. His expertise extends beyond conventional methods, encompassing innovative approaches to asset allocation and risk management. </p>
//         </div>

//         {/* Photos / Gallery */}
//         <div className="p-4">
//           <h2 className="text-2xl font-bold  mb-3">Photos / Gallery</h2>
//           <div className="flex flex-wrap justify-between mb-6" style={{ maxWidth: "800px" }}>
//             <img src="/gallery4.jpg" alt="Photo 1" className="h-32 mb-2 mr-2" />
//             <img src="/gallery3.jpg" alt="Photo 2" className="h-32 mb-2 mr-2" />
//             <img src="/gallery2.jpg" alt="Photo 3" className="h-32 mb-2 mr-2" />
//             <img src="/gallary1.jpg" alt="Photo 4" className="h-32 mb-2 mr-2" />
//           </div>
//         </div>

//         {/* Awards & Recognitions */}
//         <div className="bg-white mt-4 p-4 shadow">
//           <h2 className="text-2xl font-bold mb-3">Awards & Recognitions</h2>
//           <ul className="ml-8">
//             <li className="text-lg font-bold text-gray-600">Award 1</li>
//             <li className="text-lg font-bold text-gray-600">Award 2</li>
//             <li className="text-lg font-bold text-gray-600">Award 3</li>
//             <li className="text-lg font-bold text-gray-600">Award 4</li>
//             {/* Add more awards as needed */}
//           </ul>
//         </div>

//         {/* Degree & Certifications */}
//         <div className="bg-white mt-4 p-4 shadow">
//           <h2 className="text-2xl font-bold mb-3">Degree & Certifications</h2>
//           <ul className="ml-8">
//             <li className="text-lg font-bold text-gray-600">Degree 1</li>
//             <li className="text-lg font-bold text-gray-600">Degree 2</li>
//             <li className="text-lg font-bold text-gray-600">Certification 1</li>
//             <li className="text-lg font-bold text-gray-600">Certification 2</li>
//             {/* Add more degrees and certifications as needed */}
//           </ul>
//         </div>

//         {/* Timings */}
//         <div className="bg-white mt-4 p-4 shadow">
//           <h2 className="text-2xl font-bold mb-3">Timings</h2>
//           <div className="flex justify-between items-center">
//             <div className="text-lg font-bold text-gray-600">Mon - Sat</div>
//             <div className="ttext-lg font-bold text-gray-600">09:00 am - 2:00 pm</div>
//           </div>
//         </div>

//         {/* Google Map */}
//         <div className="bg-white mt-4 p-4 shadow">
//           <h2 className="text-2xl font-bold mb-3">Google Map</h2>
//           <div className="h-64 bg-gray-200 rounded"></div>
//         </div>

//         {/* Address */}
//         <div className="bg-white mt-4 p-4 shadow">
//           <h2 className="text-2xl font-bold mb-2">Address</h2>
//           <p className="text-lg font-bold text-gray-600">Karve nagar, Kothrud</p>
//         </div>

//         {/* Add User Story Button */}
//         <button className="bg-blue-500 text-white p-3 w-full mt-4 rounded">
//           <i className="fas fa-plus-circle mr-2"></i> Add User Story
//         </button>
//       </div>
//     </div>
//   );
// }

// export default XpertProfile;






















import React from 'react';
import { BsFillChatFill, BsTelephoneFill, BsCameraVideoFill, BsBookFill } from 'react-icons/bs';

const XpertProfile = () => {
  // Sample data for awards, certifications, and degrees
  const awards = ['Award 1', 'Award 2', 'Award 3', 'Award 4'];
  const certifications = ['Certification 1', 'Certification 2', 'Certification 3'];
  const degrees = ['Degree 1', 'Degree 2', 'Degree 3'];

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="bg-white p-4 shadow">
          <div className="flex items-center">
            <div className="status-dot bg-green-500 rounded-full"></div>
            <h1 className="font-bold text-4xl ml-2">Rohit Shitole</h1>
          </div>
        </div>

        {/* User Info */}
        <div className="bg-finance-pattern bg-cover bg-center p-4 mt-4 shadow">
          {/* User Details */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="rounded-full overflow-hidden border-4 border-blue-500">
                <img src="/profile.jpg" alt="Avatar" className="rounded-full" width="220" height="220" />
              </div>
              <div className="ml-6">
                <h2 className="font-bold text-3xl text-gray-800">Rohit Shitole</h2>
                <p className="text-sm text-gray-600">Financial Advisor</p>
                <div className="flex items-center text-sm text-gray-600 mt-2">
                  <span className="mr-2 text-yellow-500">
                    <i className="fas fa-star"></i> 4.9
                  </span>
                  Ratings
                </div>
                <p className="text-sm text-gray-600 mt-2">Languages: English, Hindi</p>
                <p className="text-sm text-gray-600 mt-2">Experience: 9 years</p>
                <p className="text-sm text-gray-600 mt-2">Clients Served: 100+</p>
                <p className="text-sm text-gray-600 mt-2">Specialization: Wealth Management</p>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex items-center">
              <button className="bg-blue-500 text-white p-2 rounded mr-2 flex items-center">
                <i className="fas fa-phone mr-2"></i> Contact
              </button>
              <button className="bg-blue-500 text-white p-2 rounded flex items-center">
                <i className="fas fa-envelope mr-2"></i> Message
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center mt-4">
            <div className="flex justify-center items-center mt-4">
              <span className="flex items-center text-green-500 mr-4">
                <i className="fas fa-check-circle mr-1"></i>
                <span className="text-lg font-bold">Certified Financial Planner</span>
              </span>
              <span className="flex items-center text-yellow-500">
                <i className="fas fa-check-circle mr-1"></i>
                <span className="text-lg font-bold">Registered Investment Advisor</span>
              </span>
            </div>
          </div>
          <div>
            <div className="flex mt-6">
              <button className="flex-1 text-2xl font-bold text-green-600 border border-green-600 rounded-full py-1 px-4 mr-2">Initial Consultation</button>
              <button className="flex-1 text-2xl font-bold text-blue-600 border border-blue-600 rounded-full py-1 px-4">Open | Available Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Interaction Tabs */}
      <div className="container mx-auto px-4">
        <div className="bg-white mt-4 p-4 shadow">
          <div className="flex justify-around ">
            <div className="flex-1 justify-around">
              <p className="text-lg font-bold text-blue-500"><BsFillChatFill className="text-3xl text-blue-500 mr-1" /> Chat</p>
            </div>
            <div className="flex-1">
              <p className="text-lg font-bold text-blue-500"><BsTelephoneFill className="text-3xl text-blue-500 mr-1" /> Audio Call</p>
            </div>
            <div className="flex-1">
              <p className="text-lg font-bold text-blue-500"><BsCameraVideoFill className="text-3xl text-blue-500 mr-1" /> Video Call</p>
            </div>
            <div className="flex-1">
              <p className="text-lg font-bold text-blue-500"><BsBookFill className="text-3xl text-blue-500 mr-1" /> Book Now</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* About */}
      <div className="container mx-auto px-4">
        <div className="bg-white mt-4 p-4 shadow">
          <h2 className="text-2xl font-bold mb-3">About Rohit</h2>
          <p className="text-lg font-bold text-gray-600">Rohit is a Certified Financial Planner with 9 years of experience in wealth management. He specializes in crafting personalized financial strategies for his clients to help them achieve their financial goals. With a client-focused approach and a track record of success, Rohit is committed to providing the highest level of service and expertise.</p>
        </div>
      </div>

      {/* Photos / Gallery */}
      <div className="container mx-auto px-4">
        <div className="p-4">
          <h2 className="text-2xl font-bold  mb-3">Photos / Gallery</h2>
          <div className="flex flex-wrap justify-between mb-6" style={{ maxWidth: "800px" }}>
            <img src="/gallery4.jpg" alt="Photo 1" className="h-32 mb-2 mr-2" />
            <img src="/gallery3.jpg" alt="Photo 2" className="h-32 mb-2 mr-2" />
            <img src="/gallery2.jpg" alt="Photo 3" className="h-32 mb-2 mr-2" />
            <img src="/gallary1.jpg" alt="Photo 4" className="h-32 mb-2 mr-2" />
          </div>
        </div>
      </div>

      {/* Awards & Recognitions */}
      <div className="container mx-auto px-4">
        <div className="bg-white p-4 mt-4 shadow">
          <h2 className="text-2xl font-bold mb-3">Awards & Recognitions</h2>
          <ul className="ml-8">
            {awards.map((award, index) => (
              <li key={index} className="text-lg font-bold text-gray-600">{award}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Certifications */}
      <div className="container mx-auto px-4">
        <div className="bg-white p-4 mt-4 shadow">
          <h2 className="text-2xl font-bold mb-3">Certifications</h2>
          <ul className="ml-8">
            {certifications.map((certification, index) => (
              <li key={index} className="text-lg font-bold text-gray-600">{certification}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Degrees */}
      <div className="container mx-auto px-4">
        <div className="bg-white p-4 mt-4 shadow">
          <h2 className="text-2xl font-bold mb-3">Degrees</h2>
          <ul className="ml-8">
            {degrees.map((degree, index) => (
              <li key={index} className="text-lg font-bold text-gray-600">{degree}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Timings */}
      <div className="container mx-auto px-4">
        <div className="bg-white p-4 mt-4 shadow">
          <h2 className="text-2xl font-bold mb-3">Timings</h2>
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold text-gray-600">Mon - Sat</div>
            <div className="ttext-lg font-bold text-gray-600">09:00 am - 2:00 pm</div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="container mx-auto px-4">
        <div className="bg-white p-4 mt-4 shadow">
          <h2 className="text-2xl font-bold mb-3">Google Map</h2>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Address */}
      <div className="container mx-auto px-4">
        <div className="bg-white p-4 mt-4 shadow">
          <h2 className="text-2xl font-bold mb-2">Address</h2>
          <p className="text-lg font-bold text-gray-600">Karve nagar, Kothrud</p>
        </div>
      </div>

      {/* Add User Story Button */}
      <div className="container mx-auto px-4">
        <button className="bg-blue-500 text-white p-3 w-full mt-4 rounded">
          <i className="fas fa-plus-circle mr-2"></i> Add User Story
        </button>
      </div>
    </div>
  );
}

export default XpertProfile;
