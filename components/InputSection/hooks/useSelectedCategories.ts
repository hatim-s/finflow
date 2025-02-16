import { useCallback, useState } from "react";

export function useSelectedCategories() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const onSelectCategory = useCallback(
    (id: string) => {
      if (selectedCategories.includes(id)) {
        setSelectedCategories(selectedCategories.filter((cat) => cat !== id));
      } else {
        setSelectedCategories([...selectedCategories, id]);
      }
    },
    [selectedCategories],
  );
  return { selectedCategories, onSelectCategory };
}
