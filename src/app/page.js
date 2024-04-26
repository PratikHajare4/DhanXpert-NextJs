import Image from "next/image";
import BannerCarousel from './components/BannerCarousel';
import XpertServices from "./components/homepage/XpertServices";
import ProfileSlide from './components/ProfileSlide';  
import Search from "./components/Search/Search";


export default function Home() {
  return (
    <>
    <main>
      <div className="flex items-center justify-center mb-5">
        <Search/>
      </div>

      <div>
    <BannerCarousel />
    </div>
    <XpertServices />
    <ProfileSlide />

    </main>
    </>
  );
}
