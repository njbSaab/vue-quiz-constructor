/** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// extend: {
//   colors: {
//     primary: "rgba(27, 38, 66)", // Ваш основной цвет
//     secondary: "#424242", // Вторичный цвет
//     accent: "rgba(0, 149, 255, 0.8)", // Акцентный цвет
//     background: "#ffffff", // Цвет фона
//     surface: "#f5f5f5", // Цвет поверхности
//     error: "rgb(245, 113, 182)", // Ошибки
//     info: "rgb(18, 161, 253)", // Информация
//     success: "#2dd4bf", // Успех
//     warning: "#fb8c00", // Предупреждения
//   },
// },
