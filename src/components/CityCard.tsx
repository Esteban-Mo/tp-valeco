import { Card, CardContent, CardActions, Button, ListItemText, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export interface CityCardProps {
	nom: string;
	handleDelete: () => void;
}

export default function CityCard(props: CityCardProps) {
	const { nom, handleDelete } = props;

	return (
		<Card sx={{ minWidth: 275, margin: 1, backgroundColor: '#222222', color: 'white', '&:hover': { backgroundColor: '#333333' } }}>
			<CardContent>
				<Typography variant="h5" component="div" sx={{ fontWeight: 'bold', mb: 1 }}>
					{nom}
				</Typography>
			</CardContent>
			<CardActions sx={{ justifyContent: 'flex-end' }}>
				<IconButton color="error" aria-label="delete" onClick={handleDelete}>
					<DeleteIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}
