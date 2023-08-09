import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getCryptocurrencyData = async (value) => {
	const res = await axios.get(`${API_URL}/cryptocurrency/${value}`);
	return res;
};
