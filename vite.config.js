import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/frontend-coinlift",
	optimizeDeps: {
		exclude: ["js-big-decimal"],
	},
	resolve: {
		alias: {
			assets: path.resolve(__dirname, "./src/assets"),
			api: path.resolve(__dirname, "./src/api"),
			components: path.resolve(__dirname, "./src/components"),
			constants: path.resolve(__dirname, "./src/constants"),
			helpers: path.resolve(__dirname, "./src/helpers"),
			hooks: path.resolve(__dirname, "./src/hooks"),
			pages: path.resolve(__dirname, "./src/pages"),
			store: path.resolve(__dirname, "./src/store"),
			styles: path.resolve(__dirname, "./src/styles"),
			utils: path.resolve(__dirname, "./src/utils"),
			app: path.resolve(__dirname, "./src/App"),
			src: path.resolve(__dirname, "./src"),
		},
	},
});
