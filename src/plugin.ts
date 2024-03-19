import openMainWindow from "./open-main-window";

registerPlugin({
  name: "Terrain generator",
  version: "0.0.0",
  authors: ["Alfie Woodland"],
  type: "local",
  licence: "MIT",
  targetApiVersion: 77,
  minApiVersion: 77,
  main: main,
});

function main(): void {
  ui.registerMenuItem("Terrain generator", openMainWindow);
}
