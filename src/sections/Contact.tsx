export const ContactSection = () => {
  return (
    <div className="block h-full overflow-hidden bg-gray-800" id="contact">
      <div className="py-12 h-full">
        <section className="flex h-full place-content-evenly">
          <div className="bg-gray-500 w-2/3 h-full flex flex-col justify-center items-center">
            <div className="p-6">Contact me here</div>
            <div className="flex">
              <div className="p-6">Twitter</div>
              <div className="p-6">Github</div>
              <div className="p-6">Linkedin</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
