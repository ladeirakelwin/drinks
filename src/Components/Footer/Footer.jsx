import React from 'react';
import Paragraph from '../Paragraph/Paragraph';
import { footer } from './Footer.module.css';

export default (props) => {
	return (
	<footer>
		<Paragraph text="Resilia 2020 - Alguns direitos reservados" style={footer}/>
	</footer>
	)
}