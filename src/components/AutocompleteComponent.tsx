import { Autocomplete, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

export interface Ville {
	nom: string;
};

export interface AutoCompleteProps {
	selectedVille: Ville | null;
	handleSelect: (event: React.ChangeEvent<{}>, value: Ville | null) => void;
};

export default function AutocompleteComponent(props: AutoCompleteProps) {
	const [texte, setTexte] = useState('');
	const [donnees, setDonnees] = useState<Ville[]>([]);

	const handleChange = (event: any) => {
		setTexte(event.target.value);
	};

	useEffect(() => {
		const url = `https://geo.api.gouv.fr/communes?nom=${texte}&fields=departement&boost=population&limit=5`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => setDonnees(data))
			.catch((error) => console.log(error));
	}, [texte]);

	const { selectedVille, handleSelect } = props;

	return <Autocomplete disablePortal id="combo-box-demo" options={donnees} getOptionLabel={(option) => option.nom} sx={{ width: 300 }} value={selectedVille} onChange={handleSelect} renderInput={(params) => <TextField {...params} value={texte} onChange={handleChange} label="Nom de ville" variant="filled" />} />;
}
