import { FC, useState } from 'react';
import Item from './Item.tsx';
import { TItem } from './Form.tsx';

type Props = {
	items: TItem[];
	onRemove: (id: number) => void;
	onUpdate: (id: number) => void;
	onClearItems: () => void;
};

enum SortOrder {
	INPUT = 'input',
	DESCRIPTION = 'description',
	PACKED = 'packed',
}

const PackingList: FC<Props> = ({
	items,
	onRemove,
	onUpdate,
	onClearItems,
}) => {
	const [selectedSortOrder, setSelectedSortOrder] = useState<SortOrder>(
		SortOrder.INPUT,
	);

	const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedSortOrder(e.currentTarget.value as SortOrder);
	};

	let sortedItems = [...items];

	if (selectedSortOrder === SortOrder.DESCRIPTION) {
		sortedItems = sortedItems
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description));
	}

	if (selectedSortOrder === SortOrder.PACKED) {
		sortedItems = sortedItems
			.slice()
			.sort((a, b) => Number(b.packed) - Number(a.packed));
	}
	const clearClist = () => {
		onClearItems();
	};
	return (
		<div className={'list'}>
			<ul>
				{sortedItems.map((item) => (
					<Item
						onRemove={onRemove}
						onUpdate={onUpdate}
						key={item.id}
						item={item}
					/>
				))}
			</ul>
			<div className="actions">
				<select value={selectedSortOrder} onChange={handleSortOrderChange}>
					<option value={SortOrder.INPUT}>Sort by input order</option>
					<option value={SortOrder.DESCRIPTION}>
						Sort by description order
					</option>
					<option value={SortOrder.PACKED}>Sort by packed order</option>
				</select>
				<button onClick={clearClist}>clear list</button>
			</div>
		</div>
	);
};

export default PackingList;
