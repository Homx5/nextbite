export type Recipe = {
  id: string;
  title: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
};

export const recipes: Recipe[] = [
  { id: "margherita-pizza", title: "Margherita Pizza", emoji: "🍕", minutes: 35, difficulty: "Medium", cuisine: "Italian" },
  { id: "veg-biryani", title: "Veg Biryani", emoji: "🍛", minutes: 50, difficulty: "Hard", cuisine: "Indian" },
  { id: "avocado-toast", title: "Avocado Toast", emoji: "🥑", minutes: 10, difficulty: "Easy", cuisine: "Cafe" },
  { id: "tacos", title: "Street Tacos", emoji: "🌮", minutes: 25, difficulty: "Easy", cuisine: "Mexican" },
  { id: "ramen", title: "Miso Ramen", emoji: "🍜", minutes: 40, difficulty: "Medium", cuisine: "Japanese" },
];