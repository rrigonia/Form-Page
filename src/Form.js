import React from 'react';
import {
	Avatar,
	Paper,
	withStyles,
	Typography,
	Select,
	MenuItem,
	FormControl,
	InputLabel,
	Input,
	FormControlLabel,
	Checkbox,
	Button
} from '@material-ui/core';
import styles from './styles/FormStyles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useLanguage } from './contexts/LanguageContext';

const words = {
	english: {
		email: 'Email',
		password: 'password',
		remember: 'Remember Me',
		signIn: 'Sing In'
	},
	french: {
		email: 'Adresse Èlectionique',
		password: 'Mot de Passe',
		remember: 'Souviens-toi de Moi',
		signIn: 'Se Connecter'
	},
	spanish: {
		email: 'Correo Electronico',
		password: 'contraseña',
		remember: 'Recordar',
		signIn: 'Iniciar Sesión'
	}
};
function Form(props) {
	const { classes } = props;
	const { language, changeLanguage } = useLanguage();
	const { email, remember, password, signIn } = words[language];
	return (
		<main className={classes.main}>
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography variant='h5'>{signIn}</Typography>
				<Select onChange={changeLanguage} value={language}>
					<MenuItem value='english'>English</MenuItem>
					<MenuItem value='french'>French</MenuItem>
					<MenuItem value='spanish'>Spanish</MenuItem>
				</Select>
				<form className={classes.form}>
					<FormControl margin='normal' required fullWidth>
						<InputLabel htmlFor='email'>{email}</InputLabel>
						<Input id='email' name='email' type='text' autoFocus />
					</FormControl>
					<FormControl margin='normal' required fullWidth>
						<InputLabel htmlFor='password'>{password}</InputLabel>
						<Input id='password' name='password' type='password' />
					</FormControl>
					<FormControlLabel
						control={<Checkbox color='primary' />}
						label={remember}
					/>
					<Button
						fullWidth
						color='primary'
						variant='contained'
						type='submit'
						className={classes.submit}
					>
						{signIn}
					</Button>
				</form>
			</Paper>
		</main>
	);
}
export default withStyles(styles)(Form);
