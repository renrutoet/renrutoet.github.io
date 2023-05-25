export const Navbar = () => {
  return (
    <nav className="fixed w-full">
      <ul className="flex">
        <li className="flex-auto bg-white hover:bg-slate-500 hover:text-white">
          <a className="block p-3 w-full h-full" href="#top">
            Teo Turner
          </a>
        </li>
        <li className="flex-auto bg-white hover:bg-slate-500 hover:text-white text-center	underline underline-offset-4 box-border">
          <a className="block p-3 w-full h-full" href="#about">
            About
          </a>
        </li>
        <li className="flex-auto bg-white hover:bg-slate-500 hover:text-white text-center	underline underline-offset-4 box-border">
          <a className="block p-3 w-full h-full" href="#work">
            Work
          </a>
        </li>
        <li className="flex-auto bg-white hover:bg-slate-500 hover:text-white text-center underline underline-offset-4 box-border">
          <a className="block p-3 w-full h-full" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
