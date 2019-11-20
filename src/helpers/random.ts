export function randomBetween(min: number, max: number, step?: number): number {
	const base = Math.random() * (max - min) + min;

	if (step) {
		return Math.floor(base / step) * step;
	}

	return base;
}

export function randomArrayIndex(arr: []): number {
	return randomBetween(0, arr.length, 1);
}

export function randomInArray<T>(arr: T[]): T;
export function randomInArray(arr: []): any {
	return arr[randomArrayIndex(arr)];
}