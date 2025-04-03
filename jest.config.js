module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Para soportar archivos JS/JSX
  },
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy", // Para evitar problemas con archivos CSS
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
