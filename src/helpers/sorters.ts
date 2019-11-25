export type GetFunction = (e: any) => any;
export type CompareFunction = (a: any, b: any) => number;

export function sortByFunction(arr: any[], compareFunction: CompareFunction): any[] {
	const clone: any[] = [...arr];
	return clone.sort(compareFunction);
}

export function compareValues<T = number | string>(a: T, b: T): number {
	if (typeof a === 'number' && typeof b === 'number') {
		return a - b;
	} else {
		if (a < b) {
			return -1;
		}
		if (a > b) {
			return 1;
		}
		return 0;
	}
}

export function sortByGetterFunction(arr: any[], fn: GetFunction): any[] {
	return sortByFunction(arr, (a, b) => {
		const aValue = fn(a);
		const bValue = fn(b);

		return compareValues(aValue, bValue);
	});
}

export function sortByPropertyValue(arr: any[], prop: string): any[] {
	return sortByGetterFunction(arr, e => e[prop]);
}

const sorters = {
	byFunction: sortByFunction,
	byGetter: sortByGetterFunction,
	byProperty: sortByPropertyValue
};

export default sorters;
