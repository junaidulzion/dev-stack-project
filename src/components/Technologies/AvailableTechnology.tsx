import React from "react";
import type { ttype } from "../../types/technologyType";
import TechnologyCard from "../TechnologyCard";

interface AvailableTechnologyProps {
  technologies: ttype[];
  selectedTechnologies: ttype[];
  onAddToStack: (technology: ttype) => void;
}

const AvailableTechnology = ({
  technologies,
  selectedTechnologies,
  onAddToStack,
}: AvailableTechnologyProps) => {
  return (
    <div className="grid grid-cols-3 gap-6">

      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          selectedTechnologies={selectedTechnologies}
          onAddToStack={onAddToStack}
        />
      ))}

    </div>
  );
};

export default AvailableTechnology;