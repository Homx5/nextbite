export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    emoji: "🍕",
    minutes: 35,
    difficulty: "Medium",
    cuisine: "Italian",
    ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Basil"],
    steps: [
      "Stretch the dough into a round base.",
      "Spread the sauce and add mozzarella.",
      "Bake hot until the crust blisters, then top with basil.",
    ],
  },
  {
    id: "veg-biryani",
    title: "Veg Biryani",
    emoji: "🍛",
    minutes: 50,
    difficulty: "Hard",
    cuisine: "Indian",
    ingredients: ["Basmati rice", "Mixed vegetables", "Yogurt", "Biryani masala", "Fried onions"],
    steps: [
      "Marinate the vegetables in yogurt and masala.",
      "Parboil the rice until 70% cooked.",
      "Layer vegetables, rice and fried onions in a pot.",
      "Cover tightly and cook on low heat for 20 minutes.",
    ],
  },
  {
    id: "avocado-toast",
    title: "Avocado Toast",
    emoji: "🥑",
    minutes: 10,
    difficulty: "Easy",
    cuisine: "Cafe",
    ingredients: ["Bread", "Ripe avocado", "Lemon juice", "Salt", "Chili flakes"],
    steps: [
      "Toast the bread until golden.",
      "Mash the avocado with lemon juice and salt.",
      "Spread on the toast and sprinkle chili flakes.",
    ],
  },
  {
    id: "tacos",
    title: "Street Tacos",
    emoji: "🌮",
    minutes: 25,
    difficulty: "Easy",
    cuisine: "Mexican",
    ingredients: ["Corn tortillas", "Seasoned filling", "Onion", "Coriander", "Lime"],
    steps: [
      "Cook the filling with spices until tender.",
      "Warm the tortillas on a hot pan.",
      "Fill, then top with onion, coriander and a squeeze of lime.",
    ],
  },
  {
    id: "ramen",
    title: "Miso Ramen",
    emoji: "🍜",
    minutes: 40,
    difficulty: "Medium",
    cuisine: "Japanese",
    ingredients: ["Ramen noodles", "Miso paste", "Vegetable stock", "Spring onion", "Soft-boiled egg"],
    steps: [
      "Heat the stock and whisk in the miso.",
      "Boil the noodles separately and drain.",
      "Combine in a bowl and top with egg and spring onion.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}