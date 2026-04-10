/* ==========================================
   FAZGAME STOCK SYSTEM
   Complete Inventory
========================================== */

const STOCK = [
  // PS5 Games
  { n: "God of War Ragnarok", c: "ps5", type: "game", p: 90, cond: "used" },
  { n: "EA Sports FC 25", c: "ps5", type: "game", p: 70, cond: "used" },
  { n: "EA Sports FC 24", c: "ps5", type: "game", p: 50, cond: "used" },
  { n: "FIFA 23", c: "ps5", type: "game", p: 30, cond: "used" },
  { n: "SpongeBob Cosmic Shake", c: "ps5", type: "game", p: 70, cond: "used" },
  { n: "FIFA 22", c: "ps5", type: "game", p: 20, cond: "used" },

  // PS4 Games
  { n: "Assassin's Creed Origins", c: "ps4", type: "game", p: 50, cond: "used" },
  { n: "Devil May Cry 5", c: "ps4", type: "game", p: 40, cond: "used" },
  { n: "FIFA 20", c: "ps4", type: "game", p: 20, cond: "used" },
  { n: "FIFA 21", c: "ps4", type: "game", p: 30, cond: "used" },
  { n: "Xmorph", c: "ps4", type: "game", p: 10, cond: "used" },
  { n: "Horizon Zero Dawn (No Case)", c: "ps4", type: "game", p: 20, cond: "used" },

  // Consoles
  { n: "PS4 Slim 500gb 1 Controller", c: "console", type: "console", p: 590, cond: "used" },

  // Controllers
  { n: "DS4 Black PS4 Controller", c: "ps4", type: "controller", p: 90, cond: "used" }
];

// Make available globally
window.STOCK = STOCK;
