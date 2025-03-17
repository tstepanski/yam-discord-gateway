export function toDictionary<TItem, TKey extends string | number | symbol>(items: Array<TItem>,
                                                                           keySelector: (item: TItem) => TKey):
	Record<TKey, TItem> {
	const entries = items.map(item => [keySelector(item), item]);

	return Object.fromEntries(entries);
}

export function toLookup<TItem, TKey extends string | number | symbol>(items: Array<TItem>,
                                                                       keySelector: (item: TItem) => TKey):
	Record<TKey, TItem[]> {
	const result = <Record<TKey, TItem[]>>{};

	for (const item of items) {
		const key = keySelector(item);

		let collection = result[key];

		if (!collection) {
			result[key] = collection = [];
		}

		collection.push(item);
	}

	return result;
}