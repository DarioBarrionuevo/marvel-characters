module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.tsx?$": "babel-jest", // Usa babel-jest para transformar TypeScript y JSX
  },
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy", // Para evitar problemas con archivos CSS
  },
};
