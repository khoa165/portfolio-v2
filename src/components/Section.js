import React from 'react';
import '../styles/Section.scss';

const Section = ({
	id,
	height,
	width,
	padding,
	background,
	headingColor,
	headingMargin,
	children,
	onMenu,
	heading,
}) => {
	return (
		<section
			id={id}
			className={`section ${id} ${onMenu ? 'menu-item' : null}`}
			style={{
				minHeight: height,
				width: width || '100%',
				background: background,
			}}
		>
			{padding ? (
				<div style={{ padding: `${padding}` }}>
					<div
						className='section-overlay'
						style={{ background: `${background}` }}
					/>
					<div
						className='section-heading'
						style={{ color: `${headingColor}` }}
						data-aos='fade-right'
						data-aos-duration='500'
						data-aos-easing='ease'
						data-aos-delay='200'
					>
						{heading}
					</div>
					<div
						className='section-heading-border'
						style={{
							background: `${headingColor}`,
							margin: `${headingMargin}`,
						}}
						data-aos='fade-left'
						data-aos-duration='400'
						data-aos-easing='ease'
						data-aos-delay='500'
					/>
					{children}
				</div>
			) : (
				<div>{children}</div>
			)}
		</section>
	);
};

export default Section;
