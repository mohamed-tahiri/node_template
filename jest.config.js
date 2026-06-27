module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  // On cible précisément ton dossier de tests à la racine
  testMatch: ["<rootDir>/tests/**/*.test.ts"],
  // Indique à Jest où chercher les fichiers de code
  moduleDirectories: ["node_modules", "src"],
};
