import { Navbar } from "../UI/Navbar";

export const HeroSection = () => {
  return (
    <>
      <div className="block h-screen overflow-hidden bg-gray-200" id="top">
        <Navbar />
        <section className="flex items-center justify-evenly h-full place-content-evenly p-12">
          <div className="bg-neutral w-1/2 h-2/3 flex justify-center items-center">
            <div className="p-12 prose ">
              <h2>
                Welcome to my homepage! <br />
                I'm Téo Turner a passionate and creative software engineer.{" "}
              </h2>
              <p>
                If you're here to find about about more about me, my work and
                how to get in touch you can find that further down the page.
              </p>
              <p>
                {" "}
                or take a look at some of my favourite pieces of work here (icon
                pointing to the carousel)
              </p>
            </div>
          </div>
          <div className="bg-default w-1/2 h-2/3 flex justify-center items-center">
            <div>Here is a carousel of graphics</div>
          </div>
        </section>
      </div>
    </>
  );
};
