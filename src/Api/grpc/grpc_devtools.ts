import { ECOSApp } from "./mojo";
const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {});
enableDevTools([ECOSApp]);
