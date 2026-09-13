import { use, useState } from "react";
import { toast } from "react-toastify";
import type { ttype } from "../../types/technologyType";
import AvailableTechnology from "./AvailableTechnology";

interface TechnologyProps {
  technologyPromise: Promise<ttype[]>;
}

const Technologies = ({ technologyPromise }: TechnologyProps) => {
  const technologies = use(technologyPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<ttype[]>([]);

  const handleAddToStack = (technology: ttype) => {
    setSelectedTechnologies((prev) => [...prev, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };
  const handleRemoveFromStack = (id: number) => {
    setSelectedTechnologies((prev) =>
      prev.filter((technology) => technology.id !== id),
    );
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
  };

  return (
    <div className="container mx-auto">
      {/* Main 2-column layout */}
      <div className="flex gap-8">
        {/* LEFT SIDE: Card*/}
        <div className="w-[75%]">
          <div className="mb-6">
            <h2 className="font-bold text-4xl">
              Explore the <span className="text-purple-500">Technologies</span>
            </h2>

            <p className="mt-2">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          <AvailableTechnology
            technologies={technologies}
            selectedTechnologies={selectedTechnologies}
            onAddToStack={handleAddToStack}
          />
        </div>

        {/* RIGHT : Selector */}
        <div className="w-[25%]">
          <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-bold">Your Stack</h2>

            {/* Empty */}
            {selectedTechnologies.length === 0 && (
              <p className="mt-3 text-sm text-gray-500">
                No technologies selected yet.
              </p>
            )}
            {/* Count */}
            {selectedTechnologies.length > 0 && (
              <p className="mt-4 text-sm text-gray-500">
                {selectedTechnologies.length}{" "}
                {selectedTechnologies.length === 1
                  ? "technology"
                  : "technologies"}{" "}
                selected
              </p>
            )}

            {/* Selected technologies */}
            {selectedTechnologies.length > 0 && (
              <div className="mt-4 space-y-3">
                {selectedTechnologies.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center justify-between rounded-xl border border-gray-200 p-3"
                  >
                    {/* Icon + Name + Category */}
                    <div className="flex items-center gap-3">
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-9 w-9 object-contain"
                      />

                      <div>
                        <h3 className="text-sm font-semibold">
                          {technology.name}
                        </h3>

                        <p className="text-xs text-gray-500">
                          {technology.category}
                        </p>
                      </div>
                    </div>

                    {/* Cross */}
                    <button
                      onClick={() => handleRemoveFromStack(technology.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
            {/* Remove All Button */}
            {selectedTechnologies.length > 0 && (
              <button
                onClick={handleRemoveAll}
                className="mt-4 w-full rounded-xl border border-red-200 py-2 text-sm font-semibold text-red-500 hover:bg-red-50"
              >
                Remove All
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
