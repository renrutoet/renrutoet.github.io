import { PortfolioCard } from "../UI/Card";

export const WorkSection = () => {
  return (
    <div className="block h-full overflow-hidden bg-slate-600" id="work">
      <div className="py-12 h-full">
        <section className="flex h-full place-content-evenly">
          <div className="bg-gray-500 w-2/3 h-full flex flex-col justify-center items-center">
            <h4 className="p-12">Here are some examples of my work</h4>
            <div className="flex flex-wrap">
              <PortfolioCard title="Work item 1" />
              <PortfolioCard />
              <PortfolioCard />
              <PortfolioCard />
              <PortfolioCard />
              <PortfolioCard />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
