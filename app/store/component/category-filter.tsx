"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Circle } from "lucide-react";

interface CategoryFilterProps {
  categories: string[];
  onFilterChange: (category: string) => void;
}

export function CategoryFilter({
  categories,
  onFilterChange,
}: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="flex flex-col  flex-wrap gap-2 mb-6 w-60">
      <p className="bg-[#25262e] font-semibold text-center rounded-sm py-2">
        Categories
      </p>
      <Button
        className={cn(
          "justify-start font-semibold hover:shadow-[0_0_10px_rgba(45,91,217,0.6)]",
          activeCategory === "All" && "shadow-[0_0_10px_rgba(45,91,217,0.6)]"
        )}
        onClick={() => handleCategoryClick("All")}
        // variant={activeCategory === "All" ? "destructive" : "outline"}
      >
        <Circle
          fill={activeCategory === "All" ? "#00b7ff" : "none"}
          className="text-cyan-500"
        />
        All
      </Button>
      {categories.map((category) => (
        <Button
          className={cn(
            "justify-start font-semibold hover:shadow-[0_0_10px_rgba(45,91,217,0.6)]",
            activeCategory === category &&
              "shadow-[0_0_10px_rgba(45,91,217,0.6)]"
          )}
          key={category}
          onClick={() => handleCategoryClick(category)}
        >
          <Circle fill={activeCategory === category ? "#00b7ff" : "none"} className="text-cyan-500" /> {category}
        </Button>
      ))}
    </div>
  );
}
