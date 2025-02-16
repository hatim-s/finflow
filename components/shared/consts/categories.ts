import {
  Beef,
  CircleDollarSign,
  Clapperboard,
  Dumbbell,
  House,
  Landmark,
  Library,
  ScanHeart,
  ShowerHead,
  TramFront,
} from "lucide-react";

export const ALL_CATEGORIES = [
  {
    id: "housing",
    title: "Housing",
    icon: House,
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
    icon: TramFront,
    subcategories: [
      { id: "transportation-car-payments", title: "Car Payments" },
      { id: "transportation-fuel", title: "Fuel" },
      { id: "transportation-insurance", title: "Car Insurance" },
      {
        id: "transportation-public-transit",
        title: "Public Transit (Bus, Subway, Train)",
      },
      { id: "transportation-maintenance", title: "Maintenance/Repairs" },
    ],
  },
  {
    id: "food-groceries",
    title: "Food & Groceries",
    icon: Beef,
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
    icon: Dumbbell,
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
    icon: Clapperboard,
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
    icon: Landmark,
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
    icon: CircleDollarSign,
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
    icon: ShowerHead,
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
    icon: Library,
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
    icon: ScanHeart,
    subcategories: [
      { id: "insurance-life", title: "Life Insurance" },
      { id: "insurance-home", title: "Home Insurance" },
      { id: "insurance-auto", title: "Auto Insurance" },
      { id: "insurance-health", title: "Health Insurance" },
      { id: "insurance-disability", title: "Disability Insurance" },
    ],
  },
];
