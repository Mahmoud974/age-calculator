const path = require("path");

module.exports = {
  entry: "./src/app.ts", // Remplacez 'app.ts' par le chemin de votre fichier TypeScript principal.
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Le répertoire de sortie pour le fichier JavaScript généré.
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
