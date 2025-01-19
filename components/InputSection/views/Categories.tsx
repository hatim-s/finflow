import { Label } from "@/components/ui/label";
import { Stack } from "@/components/ui/stack";
import clsx from "clsx";

type Category = {
  id: string;
  title: string;
  subcategories: { id: string; title: string }[];
};

export const ALL_CATEGORIES = [
  {
    id: "housing",
    title: "Housing",
    subcategories: [
      { id: "housing-rent", title: "Rent/Mortgage" },
      { id: "housing-taxes", title: "Property Taxes" },
      { id: "housing-home-insurance", title: "Home Insurance" },
      { id: "housing-utilities", title: "Utilities (Electricity, Water, Gas)" },
      { id: "housing-maintenance", title: "Maintenance/Repairs" },
    ],
  },
  {
    id: "transportation",
    title: "Transportation",
    subcategories: [
      { id: "transportation-car-payments", title: "Car Payments" },
      { id: "transportation-fuel", title: "Fuel" },
      {
        id: "transportation-public-transit",
        title: "Public Transit (Bus, Subway, Train)",
      },
      { id: "transportation-insurance", title: "Car Insurance" },
      { id: "transportation-maintenance", title: "Maintenance/Repairs" },
    ],
  },
  {
    id: "food-groceries",
    title: "Food & Groceries",
    subcategories: [
      { id: "food-groceries-groceries", title: "Groceries" },
      { id: "food-groceries-dining-out", title: "Dining Out" },
      { id: "food-groceries-snacks", title: "Snacks/Drinks" },
      { id: "food-groceries-delivery", title: "Meal Delivery Services" },
      { id: "food-groceries-coffee", title: "Coffee Shops" },
    ],
  },
  {
    id: "health-fitness",
    title: "Health & Fitness",
    subcategories: [
      { id: "health-fitness-insurance", title: "Health Insurance" },
      { id: "health-fitness-gym", title: "Gym Memberships" },
      {
        id: "health-fitness-medical",
        title: "Medical Expenses (Doctor, Dentist, Specialists)",
      },
      { id: "health-fitness-prescriptions", title: "Prescription Medications" },
      {
        id: "health-fitness-wellness",
        title: "Wellness (Massage, Therapy, etc.)",
      },
    ],
  },
  {
    id: "entertainment-recreation",
    title: "Entertainment & Recreation",
    subcategories: [
      {
        id: "entertainment-streaming",
        title: "Streaming Services (Netflix, Spotify, etc.)",
      },
      { id: "entertainment-events", title: "Movies/Concerts" },
      { id: "entertainment-hobbies", title: "Hobbies (Art, Sports, etc.)" },
      {
        id: "entertainment-subscriptions",
        title: "Subscriptions (Magazines, Apps)",
      },
      { id: "entertainment-vacations", title: "Vacations/Trips" },
    ],
  },
  {
    id: "debt-loans",
    title: "Debt & Loans",
    subcategories: [
      { id: "debt-loans-student", title: "Student Loans" },
      { id: "debt-loans-credit", title: "Credit Card Payments" },
      { id: "debt-loans-personal", title: "Personal Loans" },
      { id: "debt-loans-auto", title: "Auto Loans" },
      { id: "debt-loans-mortgage", title: "Mortgage Payments" },
    ],
  },
  {
    id: "savings-investments",
    title: "Savings & Investments",
    subcategories: [
      { id: "savings-emergency", title: "Emergency Fund" },
      { id: "savings-retirement", title: "Retirement Savings (401k, IRA)" },
      { id: "savings-stock", title: "Stock Investments" },
      { id: "savings-real-estate", title: "Real Estate Investments" },
      { id: "savings-crypto", title: "Cryptocurrency" },
    ],
  },
  {
    id: "personal-care",
    title: "Personal Care",
    subcategories: [
      { id: "personal-care-haircuts", title: "Haircuts/Spa Treatments" },
      { id: "personal-care-beauty", title: "Skincare/Beauty Products" },
      { id: "personal-care-clothing", title: "Clothing" },
      { id: "personal-care-laundry", title: "Laundry/Dry Cleaning" },
      { id: "personal-care-grooming", title: "Grooming Supplies" },
    ],
  },
  {
    id: "education-development",
    title: "Education & Self-Development",
    subcategories: [
      { id: "education-tuition", title: "Tuition Fees" },
      { id: "education-online-courses", title: "Online Courses" },
      { id: "education-books", title: "Books & Learning Materials" },
      { id: "education-certifications", title: "Certifications/Workshops" },
      {
        id: "education-subscriptions",
        title: "Educational Subscriptions (Skillshare, Coursera)",
      },
    ],
  },
  {
    id: "insurance",
    title: "Insurance",
    subcategories: [
      { id: "insurance-life", title: "Life Insurance" },
      { id: "insurance-home", title: "Home Insurance" },
      { id: "insurance-auto", title: "Auto Insurance" },
      { id: "insurance-health", title: "Health Insurance" },
      { id: "insurance-disability", title: "Disability Insurance" },
    ],
  },
];

function CategoryItem(props: {
  category: Category;
  isSelected: boolean;
  onSelectCategory: (categoryId: string) => void;
}) {
  const { category, isSelected, onSelectCategory } = props;
  return (
    <Stack
      className={clsx(
        "w-full h-10 cursor-pointer rounded-sm items-center px-4 hover:bg-blue-50",
        {
          "bg-blue-100 hover:bg-blue-200": isSelected,
        },
      )}
      role="button"
      onClick={() => onSelectCategory(category.id)}
      direction="row"
    >
      <Label>{category.title}</Label>
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
    <Stack direction="column" className="w-full">
      {ALL_CATEGORIES.map((category) => (
        <CategoryItem
          category={category}
          isSelected={selectedCategories.includes(category.id)}
          onSelectCategory={onSelectCategory}
          key={category.id}
        />
      ))}
    </Stack>
  );
}
