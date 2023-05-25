import { Navbar } from "../UI/Navbar";

export const HeroSection = () => {
  return (
    <>
      <div className="block h-screen overflow-hidden bg-gray-200" id="top">
        <Navbar />
        <section className="flex items-center justify-evenly h-full place-content-evenly mt-12">
          <div className="bg-gray-500 w-1/2 h-1/2 flex justify-center items-center">
            <div className=" ">
              Here is some basic info about me, Teo Turner
            </div>
          </div>
          <div className="bg-gray-500 w-1/2 h-1/2 flex justify-center items-center">
            <div>Here is a carousel of graphics</div>
          </div>
        </section>
      </div>
    </>
  );
};
