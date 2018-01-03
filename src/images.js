//@flow
import React, { Component } from 'react';
import { css } from 'glamor';

const wrapperStyle = css({
	label: 'imagesWrapper',
	marginTop: '3em',
});

const imageStyle = css({
	label: 'image',
	' img': {
		maxWidth: '100%',
		border: '1px solid #ddd',
	},
});

type Props = {
	data: Object,
};

export default class Images extends Component {
	props: Props;
	render() {
		const { data } = this.props;
		return (
			<div {...wrapperStyle}>
				{data &&
					Object.keys(data.images).map(key => {
						return (
							<div {...imageStyle} key={key}>
								<img src={data.images[key]} alt="" />
							</div>
						);
					})}
			</div>
		);
	}
}
