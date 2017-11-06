//@flow
import React, { Component } from 'react';
import { css } from 'glamor';

type Props = {
	data: array,
};

const postsStyle = css({
	marginBottom: '4em',
});
const innerContentWrapper = css({
	position: 'relative',
});

const postStyle = css({
	position: 'relative',
	textAlign: 'left',
	' + div': {
		borderTop: '1px solid #eee',
		paddingTop: '3em',
		marginTop: '1em',
	},
});

const titleStyle = css({
	marginTop: 0,
});

const bodyStyle = css({});
const imageStyle = css({
	marginBottom: '2em',
});

const dateStyle = css({
	position: 'absolute',
	right: '0',
	top: '0',
});

export default class Posts extends Component {
	props: Props;
	render() {
		const { data } = this.props;
		console.log('data', data);
		return (
			<div {...postsStyle}>
				{data &&
					Object.keys(data).reverse().map(key => {
						const post = data[key];
						return (
							<div {...postStyle} key={key}>
								{post.image &&
									<div {...imageStyle}>
										<img src={post.image} />
									</div>}
								<div {...innerContentWrapper}>
									<h2 {...titleStyle}>
										{post.title}
									</h2>
									<p {...bodyStyle} dangerouslySetInnerHTML={{ __html: post.body }} />
									{post.date &&
										<div {...dateStyle}>
											{post.date}
										</div>}
								</div>
							</div>
						);
					})}
			</div>
		);
	}
}
