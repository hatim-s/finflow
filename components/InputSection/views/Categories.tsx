import { ALL_CATEGORIES } from "@/components/shared/consts/categories";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Stack } from "@/components/ui/stack";
import clsx from "clsx";
import { type LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type Category = {
  id: string;
  title: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  subcategories: { id: string; title: string }[];
};

function CategoryItem(props: {
  category: Category;
  isSelected: boolean;
  onSelectCategory: (categoryId: string) => void;
}) {
  const { category, isSelected, onSelectCategory } = props;
  return (
    <Stack
      className={clsx(
        "w-fit h-10 cursor-pointer rounded-sm items-center px-4  gap-x-2 flex-grow justify-center max-w-1/2",
        "bg-gray-50 hover:bg-blue-100",
        {
          "!bg-blue-300 hover:!bg-blue-400": isSelected,
        },
      )}
      role="button"
      onClick={() => onSelectCategory(category.id)}
      direction="row"
    >
      <category.icon size={20} className="stroke-2" />
      <Label className="cursor-pointer">{category.title}</Label>
    </Stack>
  );
}

export default function Categories({
  selectedCategories,
  onSelectCategory,
}: {
  selectedCategories: string[];
  onSelectCategory: (categoryId: string) => void;
}) {
  return (
    <ScrollArea>
      <Stack
        direction="row"
        className="w-full gap-x-4 flex-grow gap-y-3 flex-wrap"
      >
        {ALL_CATEGORIES.map((category) => (
          <CategoryItem
            category={category}
            isSelected={selectedCategories.includes(category.id)}
            onSelectCategory={onSelectCategory}
            key={category.id}
          />
        ))}
      </Stack>
    </ScrollArea>
  );
}
