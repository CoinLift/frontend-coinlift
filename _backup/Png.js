const Png = "/Png/";

export const Icon = ({ name, color, size }) => {
	return (
		<img
			src={Png + name + ".png"} // Путь к PNG изображению
			alt={name} // Добавьте атрибут `alt` для доступности
			width={size} // Задайте ширину изображения
			style={{ position: "absolute", fill: color }} // Используйте `style` для установки цвета и позиции
		/>
	);
};
