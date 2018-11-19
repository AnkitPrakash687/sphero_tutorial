async function startProgram() {
	setMainLed({ r: 63, g: 254, b: 255 });
	await speak('I\'m ready to go. Please throw me', true);
}

async function onFreefall() {
	await Sound.Personality.Yipee.play(true);
	setMainLed({ r: 79, g: 255, b: 45 });
}
registerEvent(EventType.onFreefall, onFreefall);

async function onCollision() {
	await speak('Nice catch', false);
	setMainLed({ r: 255, g: 54, b: 11 });
}
registerEvent(EventType.onCollision, onCollision);

async function onLanding() {
	await speak('Nice catch', false);
	setMainLed({ r: 255, g: 54, b: 11 });
}
registerEvent(EventType.onLanding, onLanding);
