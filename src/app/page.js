import Image from "next/image";
import BannerCarousel from './components/BannerCarousel';
import XpertServices from "./components/homepage/XpertServices";
import ProfileSlide from './components/ProfileSlide';  
import Search from "./components/Search/Search";
import bg from "../../public/bg-wall.svg"


export default function Home() {
  return (
    <>
       <section

      
      style={{
        backgroundImage: `url(${bg.src})`, // Use the correct path with `url()`
        backgroundSize: "cover",           // Optional, set the size and repeat
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // height: "130vh"                    // Set height or other size attributes
      }}

      className="flex  object-cover flex-col items-center top-0  bg-cover bg-center bg-no-repeat
      h-80  /* Height for mobile view (smaller screens) */
      sm:h-90  /* Height for small screens and above */
      md:h-[90vh] /* Medium screen */
      lg:h-[90vh] /* Larger screen */
      xl:h-[100vh] /* Extra-large screen (full viewport height) */"
    >
      <div className="flex items-center justify-center">
      <Search/>
        </div  >
        <div className="w-3/2 md:w-3/4  md:mt-10 md:rounded-2xl flex  items-center justify-center ">
              <BannerCarousel />
        </div>

    </section>
    <main>

      
      <div className="flex items-center justify-center mb-5">
       
      </div>

     
    <XpertServices />
    <ProfileSlide />

    </main>
    </>
  );
}
