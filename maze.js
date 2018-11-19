async function startProgram() {
	setMainLed({ r: 111, g: 255, b: 24 });
	await roll(0, 40, 2.6);
	await delay(2);
	await fade({ r: 57, g: 255, b: 2 }, { r: 255, g: 4, b: 21 }, 1);
	await fade({ r: 255, g: 21, b: 73 }, { r: 75, g: 255, b: 23 }, 1);
	await delay(3);
	await roll(90, 40, 2.5);
	await fade({ r: 49, g: 255, b: 19 }, { r: 255, g: 3, b: 31 }, 1);
	await fade({ r: 255, g: 21, b: 73 }, { r: 52, g: 255, b: 3 }, 1);
	await roll(0, 40, 2.5);
	await speak('destination reached thank you ', true);
	stopRoll();
}
