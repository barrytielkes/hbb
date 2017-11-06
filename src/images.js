//@flow
import React, { Component } from 'react';
import { css } from 'glamor';

const wrapperStyle = css({
	label: 'imagesWrapper',
});

const imageStyle = css({
	label: 'image',
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
