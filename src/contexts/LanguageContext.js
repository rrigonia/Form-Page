import React, { useState, createContext } from 'react';

const LanguageContext = createContext();

function LanguageProvider(props) {
	const [ language, setLanguage ] = useState('english');
	const changeLanguage = e => setLanguage(e.target.value);

	return (
		<LanguageContext.Provider value={{ language, changeLanguage }}>
			{props.children}
		</LanguageContext.Provider>
	);
}

function useLanguage() {
	const context = React.useContext(LanguageContext);
	if (context === undefined) {
		throw new Error(
			'useLanguage must be used within a LanguageContext provider.'
		);
	}
	return context;
}

export { useLanguage, LanguageProvider };
