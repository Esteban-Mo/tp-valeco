import React, { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AutocompleteComponent, { Ville } from './components/AutocompleteComponent';
import CityCard from './components/CityCard';

function App() {
	const [selectedVille, setSelectedVille] = useState<Ville | null>(null);
	const [list, setList] = useState<{ nom: string }[]>([]);

	const ajouterVille = () => {
		if (selectedVille && !list.find((item) => item.nom === selectedVille.nom)) {
			setList([...list, { nom: selectedVille.nom }]);
		}
	};

	const handleDelete = (index: number) => {
		const newList = [...list];
		newList.splice(index, 1);
		setList(newList);
	};

	const containerStyle = { width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 };
	const containerCardStyle = { display: 'flex', flexDirection: 'row', mt: 2, flexWrap: 'wrap', justifyContent: 'center' };

	return (
		<Box sx={containerStyle}>
			<AutocompleteComponent selectedVille={selectedVille} handleSelect={(event, newValue) => setSelectedVille(newValue)} />

			<Button variant="text" onClick={ajouterVille} sx={{ mt: 2 }}>
				Ajouter ville
			</Button>

			<Box sx={containerCardStyle}>
				{list.map((item, index) => (
					<CityCard key={index} nom={item.nom} handleDelete={() => handleDelete(index)} />
				))}
			</Box>
		</Box>
	);
}

export default App;
