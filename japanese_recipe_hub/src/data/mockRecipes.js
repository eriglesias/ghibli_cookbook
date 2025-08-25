
const mockRecipes = [
 {
  id: 1,
  name: "Tonkatsu/Breaded Pork Cutlet",
  name_jap: "豚カツ",
  region: "Kanto",
  category: "main-dish",
  prepTime: 15,
  cookTime: 5,
  servings: 4,
  difficulty: "beginner",
  ingredients: [
    { name: "pork cutlets", amount: "4", note: "1.5-2cm thick" },
    { name: "salt", amount: "2 pinches", note: "" },
    { name: "pepper", amount: "", note: "" },
    { name: "oil", amount: "", note: "for frying" },
    { name: "all-purpose flour", amount: "2 tbs", note: "" },
    { name: "tonkatsu sauce", amount: "", note: "for breading 2tbs flour + 3 tbbs water" },
    { name: "water", amount: "", note: "" },
    { name: "panko breadcrumbs", amount: "50gr", note: "" }
  ],
  instructions: [
    { step: 1, description: "Take the pork out of the refrigerator 30 minutes before cooking. Season each piece with the salt and pepper on both sides." },
    { step: 2, description: "Prepare three plates for breading: one with the flour, one with the flour and water mixed, and one with the panko breadcrumbs, and arrange them in that order"},
    { step: 3, description: "Dip each piece of pork in the flour plate, then in the flour-water mixture, and finally in the panko, pressing the meat lightly with your hand to make the panko stick." },
    {step: 4 , description: "In a large frying pan (the pieces of meat must not overlap; cook in two batches if needed), heat 3 cm (1¼ inches) of frying oil to 180°C (355°F). Fry the pork for 2 minutes on one side, turn over, and cook for another 3 minutes, until the meat is nicely golden brown. When the bubbles around the meat become smaller, it means the pork is cooked"},
    {step: 5, description: "Drain on paper towels and leave to rest for 3 minutes before serving with tonkatsu sauce and finely chopped cabbage or coleslaw." }

  ],
  tags: ["quick", "protein-rich", "family-friendly"],
  image: "/assets/tonkatsu_gs.png",
  culturalNotes: "Traditional preparation method...",
  additionalNotes: " To replace the tonkatsu sauce: Heat 4 tablespoons Worcestershire sauce, 2 tablespoons ketchup, 1 tablespoon mirin, and ½ teaspoon soy sauce in a small saucepan over low heat and stir until the sauce thickens. "
},
{
  id: 2,
  name: "Japanese Curry",
  name_jap: "ルーから作るカレー",
  region: "Kansai",
  category: "main-dish",
  prepTime: 20,
  cookTime: 60,
  servings: 4,
  difficulty: "beginner",
  ingredients: [
    { name: "neutral oil", amount: "2 tablespoons", note: "" },
    { name: "boneless chicken thighs", amount: "2 thighs", note: "cut into bite-sized pieces" },
    { name: "onions", amount: "2", note: "finely chopped" },
    { name: "garlic clove", amount: "1", note: "chopped" },
    { name: "celery stalk", amount: "1", note: "finely chopped" },
    { name: "carrot", amount: "1", note: "grated" },
    { name: "apple", amount: "1", note: "finely chopped or grated" },
    { name: "curry powder", amount: "3 tablespoons", note: "" },
    { name: "crushed tomatoes", amount: "240 ml", note: "" },
    { name: "all-purpose flour", amount: "4 tablespoons", note: "" },
    { name: "dashi or chicken stock", amount: "600 ml", note: "" },
    { name: "potatoes", amount: "2", note: "peeled and quartered" },
    { name: "fresh ginger", amount: "3 cm", note: "peeled and chopped" },
    { name: "eggplant", amount: "1/2", note: "cut into large cubes" },
    { name: "zucchini", amount: "1/2", note: "cut into 1-cm slices" },
    { name: "bell pepper", amount: "1/2", note: "cut into strips" },
    { name: "oil", amount: "", note: "for frying" },
    { name: "rice", amount: "4 portions", note: "cooked"},
    { name: "green beans", amount: "8", note: "stem end removed" },
    { name: "Worcestershire or tonkatsu sauce", amount: "1 tablespoon", note: "" },
    { name: "malted or nutritional yeast", amount: "1 tablespoon", note: "" },
    { name: "soy sauce", amount: "1 tablespoon", note: "" },
    { name: "salt", amount: "2-3 teaspoons", note: "" },

  ],
  instructions: [
    { step: 1, description: "Heat 1 tablespoon of oil in a deep frying pan over medium heat. Add chicken pieces, skin-side down, and cook for 1 minute each side." },
    { step: 2, description: "Remove chicken. Add remaining oil, onions, garlic, and ginger. Fry until golden and caramelized. Add celery, carrot, and apple, and cook for 10 minutes." },
    { step: 3, description: "Remove from heat, stir in curry powder, and mix well. Return to heat, add tomatoes and simmer for 2 minutes. Stir in flour, cook for 1-2 minutes, then gradually add dashi or stock." },
    { step: 4, description: "Add chicken, potatoes, and seasoning (Worcestershire sauce, yeast, soy sauce, salt). Simmer for 20 minutes over medium-low heat." },
    { step: 5, description: "Cut eggplant into large cubes, zucchini into 1-cm slices, pepper into strips, and trim beans. Fry in 3 cm of oil at 180°C until golden." },
    { step: 6, description: "Divide rice onto four plates, add curry, and top with fried vegetables." }

  ],
  tags: ["comfort food", "spicy", "family-friendly"],
  image: "/assets/chicken-curry2.jpg",
  culturalNotes: "Traditional preparation method...",
  additionalNotes: " To replace the tonkatsu sauce: Heat 4 tablespoons Worcestershire sauce, 2 tablespoons ketchup, 1 tablespoon mirin, and ½ teaspoon soy sauce in a small saucepan over low heat and stir until the sauce thickens. "
},
{
  id: 3,
  name: "Okonomiyaki/Japanese Pancake",
  name_jap: "お好み焼き",
  region: "Fukkuoka",
  category: "main-dish",
  prepTime: 15,
  cookTime: 10,
  servings: 4,
  difficulty: "beginner",
  ingredients: [
    { name: "cabbage", amount: "200g", note: "7oz" },
    { name: "scallions", amount: "2", note: "" },
    { name: "yam or potato", amount: "100g", note: "" },
    { name: "water", amount: "200ml", note: "7fl oz" },
    { name: "eggs", amount: "2", note: "" },
    { name: "all-purpose flour", amount: "200g", note: "all-purpose flour" },
    { name: "salt", amount: "1/2 teaspoon", note: "" },
    { name: "katsuobushi", amount: "1 handful", note: "dried bonito flakes" },
    { name: "sunflower oil", amount: "4 tbsp", note: "" }

  ],
  instructions: [
    { step: 1, description: "Cut the cabbage into thin strips and scallions into thin rounds." },
    { step: 2, description: "grate the yam" },
    { step: 3, description: "mix in a bowl the grated yam, water and egss" },
    { step: 4, description: "add the flour and salt and mix." },
    { step: 5, description: "stir in the cabbage, scalions and katsuobushi (crumbled between your fingers" },
    { step: 6, description: "heat a frying pan and put 1 table spoon oil." },
    { step: 7, description: "pour a quarter of the batter into the hot pan, cook about 3 minutes. Turn the okonomiyaki over, cover, and cook for 5 minutes. Flip it back and cook, until the bottom is a light golden brown. Repeat the process until all the batter is used" }

  ],
  tags: ["comfort food", "spicy", "family-friendly"],
  image: "/assets/okonomiyaki_gs.png",
  culturalNotes: "Traditional preparation method...",
  additionalNotes: " To replace the tonkatsu sauce: Heat 4 tablespoons Worcestershire sauce, 2 tablespoons ketchup, 1 tablespoon mirin, and ½ teaspoon soy sauce in a small saucepan over low heat and stir until the sauce thickens. "
},
{
  id: 4,
  name: "Oyaki",
  name_jap: "お好み焼き",
  region: "Fukkuoka",
  category: "main-dish",
  prepTime: 15,
  cookTime: 10,
  servings: 4,
  difficulty: "beginner",
  ingredients: [
    { name: "cabbage", amount: "200g", note: "7oz" },
    { name: "scallions", amount: "2", note: "" },
    { name: "yam or potato", amount: "100g", note: "" },
    { name: "water", amount: "200ml", note: "7fl oz" },
    { name: "eggs", amount: "2", note: "" },
    { name: "all-purpose flour", amount: "200g", note: "all-purpose flour" },
    { name: "salt", amount: "1/2 teaspoon", note: "" },
    { name: "katsuobushi", amount: "1 handful", note: "dried bonito flakes" },
    { name: "sunflower oil", amount: "4 tbsp", note: "" }

  ],
  instructions: [
    { step: 1, description: "Cut the cabbage into thin strips and scallions into thin rounds." },
    { step: 2, description: "grate the yam" },
    { step: 3, description: "mix in a bowl the grated yam, water and egss" },
    { step: 4, description: "add the flour and salt and mix." },
    { step: 5, description: "stir in the cabbage, scalions and katsuobushi (crumbled between your fingers" },
    { step: 6, description: "heat a frying pan and put 1 table spoon oil." },
    { step: 7, description: "pour a quarter of the batter into the hot pan, cook about 3 minutes. Turn the okonomiyaki over, cover, and cook for 5 minutes. Flip it back and cook, until the bottom is a light golden brown. Repeat the process until all the batter is used" }

  ],
  tags: ["comfort food", "spicy", "family-friendly"],
  image: "/assets/f0fcc949bd1c773b1575207a1e88fa47.jpg",
  culturalNotes: "Traditional preparation method...",
  additionalNotes: " To replace the tonkatsu sauce: Heat 4 tablespoons Worcestershire sauce, 2 tablespoons ketchup, 1 tablespoon mirin, and ½ teaspoon soy sauce in a small saucepan over low heat and stir until the sauce thickens. "
},
{
  id: 5,
  name: "Ramen",
  name_jap: "お好み焼き",
  region: "Fukkuoka",
  category: "main-dish",
  prepTime: 15,
  cookTime: 10,
  servings: 4,
  difficulty: "beginner",
  ingredients: [
    { name: "cabbage", amount: "200g", note: "7oz" },
    { name: "scallions", amount: "2", note: "" },
    { name: "yam or potato", amount: "100g", note: "" },
    { name: "water", amount: "200ml", note: "7fl oz" },
    { name: "eggs", amount: "2", note: "" },
    { name: "all-purpose flour", amount: "200g", note: "all-purpose flour" },
    { name: "salt", amount: "1/2 teaspoon", note: "" },
    { name: "katsuobushi", amount: "1 handful", note: "dried bonito flakes" },
    { name: "sunflower oil", amount: "4 tbsp", note: "" }

  ],
  instructions: [
    { step: 1, description: "Cut the cabbage into thin strips and scallions into thin rounds." },
    { step: 2, description: "grate the yam" },
    { step: 3, description: "mix in a bowl the grated yam, water and egss" },
    { step: 4, description: "add the flour and salt and mix." },
    { step: 5, description: "stir in the cabbage, scalions and katsuobushi (crumbled between your fingers" },
    { step: 6, description: "heat a frying pan and put 1 table spoon oil." },
    { step: 7, description: "pour a quarter of the batter into the hot pan, cook about 3 minutes. Turn the okonomiyaki over, cover, and cook for 5 minutes. Flip it back and cook, until the bottom is a light golden brown. Repeat the process until all the batter is used" }

  ],
  tags: ["comfort food", "spicy", "family-friendly"],
  image: "/assets/f0fcc949bd1c773b1575207a1e88fa47.jpg",
  culturalNotes: "Traditional preparation method...",
  additionalNotes: " To replace the tonkatsu sauce: Heat 4 tablespoons Worcestershire sauce, 2 tablespoons ketchup, 1 tablespoon mirin, and ½ teaspoon soy sauce in a small saucepan over low heat and stir until the sauce thickens. "
},
{
  id: 6,
  name: "Satsuki's Bento",
  name_jap: "お好み焼き",
  region: "Fukkuoka",
  category: "main-dish",
  prepTime: 15,
  cookTime: 10,
  servings: 4,
  difficulty: "beginner",
  ingredients: [
    { name: "cabbage", amount: "200g", note: "7oz" },
    { name: "scallions", amount: "2", note: "" },
    { name: "yam or potato", amount: "100g", note: "" },
    { name: "water", amount: "200ml", note: "7fl oz" },
    { name: "eggs", amount: "2", note: "" },
    { name: "all-purpose flour", amount: "200g", note: "all-purpose flour" },
    { name: "salt", amount: "1/2 teaspoon", note: "" },
    { name: "katsuobushi", amount: "1 handful", note: "dried bonito flakes" },
    { name: "sunflower oil", amount: "4 tbsp", note: "" }

  ],
  instructions: [
    { step: 1, description: "Cut the cabbage into thin strips and scallions into thin rounds." },
    { step: 2, description: "grate the yam" },
    { step: 3, description: "mix in a bowl the grated yam, water and egss" },
    { step: 4, description: "add the flour and salt and mix." },
    { step: 5, description: "stir in the cabbage, scalions and katsuobushi (crumbled between your fingers" },
    { step: 6, description: "heat a frying pan and put 1 table spoon oil." },
    { step: 7, description: "pour a quarter of the batter into the hot pan, cook about 3 minutes. Turn the okonomiyaki over, cover, and cook for 5 minutes. Flip it back and cook, until the bottom is a light golden brown. Repeat the process until all the batter is used" }

  ],
  tags: ["comfort food", "spicy", "family-friendly"],
  image: "/assets/f0fcc949bd1c773b1575207a1e88fa47.jpg",
  culturalNotes: "Traditional preparation method...",
  additionalNotes: " To replace the tonkatsu sauce: Heat 4 tablespoons Worcestershire sauce, 2 tablespoons ketchup, 1 tablespoon mirin, and ½ teaspoon soy sauce in a small saucepan over low heat and stir until the sauce thickens. "
},
{
  id: 7,
  name: "Calcifer's Breakfast",
  name_jap: "お好み焼き",
  region: "Fukkuoka",
  category: "main-dish",
  prepTime: 15,
  cookTime: 10,
  servings: 4,
  difficulty: "beginner",
  ingredients: [
    { name: "cabbage", amount: "200g", note: "7oz" },
    { name: "scallions", amount: "2", note: "" },
    { name: "yam or potato", amount: "100g", note: "" },
    { name: "water", amount: "200ml", note: "7fl oz" },
    { name: "eggs", amount: "2", note: "" },
    { name: "all-purpose flour", amount: "200g", note: "all-purpose flour" },
    { name: "salt", amount: "1/2 teaspoon", note: "" },
    { name: "katsuobushi", amount: "1 handful", note: "dried bonito flakes" },
    { name: "sunflower oil", amount: "4 tbsp", note: "" }

  ],
  instructions: [
    { step: 1, description: "Cut the cabbage into thin strips and scallions into thin rounds." },
    { step: 2, description: "grate the yam" },
    { step: 3, description: "mix in a bowl the grated yam, water and egss" },
    { step: 4, description: "add the flour and salt and mix." },
    { step: 5, description: "stir in the cabbage, scalions and katsuobushi (crumbled between your fingers" },
    { step: 6, description: "heat a frying pan and put 1 table spoon oil." },
    { step: 7, description: "pour a quarter of the batter into the hot pan, cook about 3 minutes. Turn the okonomiyaki over, cover, and cook for 5 minutes. Flip it back and cook, until the bottom is a light golden brown. Repeat the process until all the batter is used" }

  ],
  tags: ["comfort food", "spicy", "family-friendly"],
  image: "/assets/f0fcc949bd1c773b1575207a1e88fa47.jpg",
  culturalNotes: "Traditional preparation method...",
  additionalNotes: " To replace the tonkatsu sauce: Heat 4 tablespoons Worcestershire sauce, 2 tablespoons ketchup, 1 tablespoon mirin, and ½ teaspoon soy sauce in a small saucepan over low heat and stir until the sauce thickens. "
},
{
  id: 8,
  name: "Yakitori",
  name_jap: "お好み焼き",
  region: "Fukkuoka",
  category: "main-dish",
  prepTime: 15,
  cookTime: 10,
  servings: 4,
  difficulty: "beginner",
  ingredients: [
    { name: "cabbage", amount: "200g", note: "7oz" },
    { name: "scallions", amount: "2", note: "" },
    { name: "yam or potato", amount: "100g", note: "" },
    { name: "water", amount: "200ml", note: "7fl oz" },
    { name: "eggs", amount: "2", note: "" },
    { name: "all-purpose flour", amount: "200g", note: "all-purpose flour" },
    { name: "salt", amount: "1/2 teaspoon", note: "" },
    { name: "katsuobushi", amount: "1 handful", note: "dried bonito flakes" },
    { name: "sunflower oil", amount: "4 tbsp", note: "" }

  ],
  instructions: [
    { step: 1, description: "Cut the cabbage into thin strips and scallions into thin rounds." },
    { step: 2, description: "grate the yam" },
    { step: 3, description: "mix in a bowl the grated yam, water and egss" },
    { step: 4, description: "add the flour and salt and mix." },
    { step: 5, description: "stir in the cabbage, scalions and katsuobushi (crumbled between your fingers" },
    { step: 6, description: "heat a frying pan and put 1 table spoon oil." },
    { step: 7, description: "pour a quarter of the batter into the hot pan, cook about 3 minutes. Turn the okonomiyaki over, cover, and cook for 5 minutes. Flip it back and cook, until the bottom is a light golden brown. Repeat the process until all the batter is used" }

  ],
  tags: ["comfort food", "spicy", "family-friendly"],
  image: "/assets/f0fcc949bd1c773b1575207a1e88fa47.jpg",
  culturalNotes: "Traditional preparation method...",
  additionalNotes: " To replace the tonkatsu sauce: Heat 4 tablespoons Worcestershire sauce, 2 tablespoons ketchup, 1 tablespoon mirin, and ½ teaspoon soy sauce in a small saucepan over low heat and stir until the sauce thickens. "
},
{
  id: 9,
  name: "Miso Soup",
  name_jap: "お好み焼き",
  region: "Fukkuoka",
  category: "main-dish",
  prepTime: 15,
  cookTime: 10,
  servings: 4,
  difficulty: "beginner",
  ingredients: [
    { name: "cabbage", amount: "200g", note: "7oz" },
    { name: "scallions", amount: "2", note: "" },
    { name: "yam or potato", amount: "100g", note: "" },
    { name: "water", amount: "200ml", note: "7fl oz" },
    { name: "eggs", amount: "2", note: "" },
    { name: "all-purpose flour", amount: "200g", note: "all-purpose flour" },
    { name: "salt", amount: "1/2 teaspoon", note: "" },
    { name: "katsuobushi", amount: "1 handful", note: "dried bonito flakes" },
    { name: "sunflower oil", amount: "4 tbsp", note: "" }

  ],
  instructions: [
    { step: 1, description: "Cut the cabbage into thin strips and scallions into thin rounds." },
    { step: 2, description: "grate the yam" },
    { step: 3, description: "mix in a bowl the grated yam, water and egss" },
    { step: 4, description: "add the flour and salt and mix." },
    { step: 5, description: "stir in the cabbage, scalions and katsuobushi (crumbled between your fingers" },
    { step: 6, description: "heat a frying pan and put 1 table spoon oil." },
    { step: 7, description: "pour a quarter of the batter into the hot pan, cook about 3 minutes. Turn the okonomiyaki over, cover, and cook for 5 minutes. Flip it back and cook, until the bottom is a light golden brown. Repeat the process until all the batter is used" }

  ],
  tags: ["comfort food", "spicy", "family-friendly"],
  image: "/assets/f0fcc949bd1c773b1575207a1e88fa47.jpg",
  culturalNotes: "Traditional preparation method...",
  additionalNotes: " To replace the tonkatsu sauce: Heat 4 tablespoons Worcestershire sauce, 2 tablespoons ketchup, 1 tablespoon mirin, and ½ teaspoon soy sauce in a small saucepan over low heat and stir until the sauce thickens. "
},
{
  id: 10,
  name: "Dawn Picnic Cookies",
  name_jap: "",
  region: "Fukkuoka",
  category: "main-dish",
  prepTime: 15,
  cookTime: 10,
  servings: 4,
  difficulty: "beginner",
  ingredients: [
    { name: "cabbage", amount: "200g", note: "7oz" },
    { name: "scallions", amount: "2", note: "" },
    { name: "yam or potato", amount: "100g", note: "" },
    { name: "water", amount: "200ml", note: "7fl oz" },
    { name: "eggs", amount: "2", note: "" },
    { name: "all-purpose flour", amount: "200g", note: "all-purpose flour" },
    { name: "salt", amount: "1/2 teaspoon", note: "" },
    { name: "katsuobushi", amount: "1 handful", note: "dried bonito flakes" },
    { name: "sunflower oil", amount: "4 tbsp", note: "" }

  ],
  instructions: [
    { step: 1, description: "Cut the cabbage into thin strips and scallions into thin rounds." },
    { step: 2, description: "grate the yam" },
    { step: 3, description: "mix in a bowl the grated yam, water and egss" },
    { step: 4, description: "add the flour and salt and mix." },
    { step: 5, description: "stir in the cabbage, scalions and katsuobushi (crumbled between your fingers" },
    { step: 6, description: "heat a frying pan and put 1 table spoon oil." },
    { step: 7, description: "pour a quarter of the batter into the hot pan, cook about 3 minutes. Turn the okonomiyaki over, cover, and cook for 5 minutes. Flip it back and cook, until the bottom is a light golden brown. Repeat the process until all the batter is used" }

  ],
  tags: ["comfort food", "spicy", "family-friendly"],
  image: "/assets/f0fcc949bd1c773b1575207a1e88fa47.jpg",
  culturalNotes: "Traditional preparation method...",
  additionalNotes: " To replace the tonkatsu sauce: Heat 4 tablespoons Worcestershire sauce, 2 tablespoons ketchup, 1 tablespoon mirin, and ½ teaspoon soy sauce in a small saucepan over low heat and stir until the sauce thickens. "
}

];








export default mockRecipes;



