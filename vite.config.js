import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/frontend-coinlift",
	resolve: {
		alias: {
			_assets: path.resolve(__dirname, "./src/assets"),
			_api: path.resolve(__dirname, "./src/api"),
			_components: path.resolve(__dirname, "./src/components"),
			_constants: path.resolve(__dirname, "./src/constants"),
			_helpers: path.resolve(__dirname, "./src/helpers"),
			_hooks: path.resolve(__dirname, "./src/hooks"),
			_pages: path.resolve(__dirname, "./src/pages"),
			_redux: path.resolve(__dirname, "./src/redux"),
			_store: path.resolve(__dirname, "./src/store"),
			_styles: path.resolve(__dirname, "./src/styles"),
			_utils: path.resolve(__dirname, "./src/utils"),
			_app: path.resolve(__dirname, "./src/App"),
			_: path.resolve(__dirname, "./src"),
		},
	},
});
