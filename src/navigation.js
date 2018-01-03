import React from 'react';
// import { compose } from 'redux';
// import { connect } from 'react-redux';
import { css } from 'glamor';
import { NavLink } from 'react-router-dom';

const styles = css({
	label: 'navigation',
	color: 'black',
	borderBottom: '1px solid #eee',
	display: 'inline-block',
	marginLeft: 'auto',
	marginRight: 'auto',
	marginBottom: '15px',
	'::before': {
		display: 'block',
		content: '',
	},
});

const itemStyleWrapper = css({
	display: 'inline-block',
	' + div': {
		'::before': {
			padding: '10px 15px',
			content: '-',
			display: 'inline-block',
			color: '#8E8E8E',
		},
	},
});

const itemStyle = css({
	label: 'nav-item',
	cursor: 'pointer',
	textDecoration: 'none',
	textTransform: 'lowercase',
	color: '#8E8E8E',
	'.active': {
		color: 'black',
	},
});

export default class Navigation extends React.Component {
	render() {
		const { pages } = this.props;
		return (
			<div {...styles}>
				{pages &&
					Object.keys(pages)
						.sort((keyA, keyB) => pages[keyA].button.weight - pages[keyB].button.weight) //order by weight
						.map((key, index) => {
							console.log('nav', key, pages[key]);
							return (
								<div {...itemStyleWrapper} key={key}>
									<NavLink {...itemStyle} key={key} to={`/${key}`} activeClassName="active">
										{pages[key].button.label}
									</NavLink>
								</div>
							);
						})}
			</div>
		);
	}
}
