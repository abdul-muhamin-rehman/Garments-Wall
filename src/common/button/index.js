import React from 'react';
import './styles.module.scss'

const Button = (props) => {
	return (
			<button {...props}>
				{props.children}
			</button>
	);
};

export default Button;
