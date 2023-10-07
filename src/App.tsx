import './App.css';
import Logo from './Components/Logo.tsx';
import Form, { TItem } from './Components/Form.tsx';
import PackingList from './Components/PackingList.tsx';
import Stats from './Components/Stats.tsx';
import { useState } from 'react';

function App() {
	const [items, setItems] = useState<TItem[]>([]);

	const handleAddItems = (newItem: TItem) => {
		setItems((prevItems) => [...prevItems, newItem]);
	};

	const handleRemoveItems = (id: number) => {
		setItems((prevItems) => prevItems.filter((item) => item.id !== id));
	};
	return (
		<div className={'app'}>
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList onRemove={handleRemoveItems} items={items} />
			<Stats />
		</div>
	);
}

export default App;
