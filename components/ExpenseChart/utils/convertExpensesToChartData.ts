import { type Expenses } from "@/components/InputSection/hooks/useExpenses";
import { ALL_CATEGORIES } from "@/components/shared/consts/categories";

export type Node = {
  id: string;
  title: string;
};

export type Link = {
  source: string;
  target: string;
  value: number;
};

export type ChartData = {
  nodes: Node[];
  links: Link[];
};

export default function convertExpensesToChartData(
  expenses: Expenses,
  income: number,
  showIncome = false,
): ChartData {
  const nodes = [] as Node[];
  const links = [] as Link[];

  nodes.push({ id: "income", title: "Income" });

  let totalExpenses = 0;

  Object.entries(expenses).forEach(([category, categoryObj]) => {
    // if the subcategory has no items, we do not show any node to it
    // in the graph
    const subcategoryTotal =
      Object.values(categoryObj ?? {}).reduce(
        (acc, val) => (acc ?? 0) + (val ?? 0),
        0,
      ) ?? 0;

    if (!subcategoryTotal) return;

    totalExpenses += subcategoryTotal;
    const categoryDetails = ALL_CATEGORIES.find((c) => c.id === category);

    nodes.push({
      id: category,
      title: categoryDetails?.title ?? category,
    });

    links.push({
      source: "income",
      target: category,
      value: subcategoryTotal,
    });

    if (categoryObj) {
      Object.entries(categoryObj).forEach(([subcategory, expense]) => {
        if (!expense) return;

        const subcategoryDetails = categoryDetails?.subcategories?.find(
          (c) => c.id === subcategory,
        );

        nodes.push({
          id: subcategory,
          title: subcategoryDetails?.title ?? subcategory,
        });
        links.push({
          source: category,
          target: subcategory,
          value: expense,
        });
      });
    }
  });

  if (showIncome) {
    nodes.push({ id: "savings", title: "Savings" });
    links.push({
      source: "income",
      target: "savings",
      value: income - totalExpenses,
    });
  }

  return { nodes, links };
}
