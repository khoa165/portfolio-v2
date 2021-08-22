import React, { useEffect } from 'react';
import { Menu, Sidebar, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavigationBarDesktop = ({ items, children, goToSection }) => {
	const checkActiveSection = () => {
		const sections = document.querySelectorAll('.section.menu-item');
		sections.forEach((section) => {
			const name = '.' + section.id + '-item';
			const item = document.querySelector(name);
			item.classList.remove('active');
			const rect = section.getBoundingClientRect();
			if (
				rect.top - 0.5 * window.innerHeight < 0 &&
				rect.bottom - 0.5 * window.innerHeight > 0
			) {
				item.classList.add('active');
			}
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', checkActiveSection);
		window.addEventListener('load', checkActiveSection);
		window.addEventListener('resize', checkActiveSection);
		return () => {
			window.removeEventListener('scroll', checkActiveSection);
			window.removeEventListener('load', checkActiveSection);
			window.removeEventListener('resize', checkActiveSection);
		};
	}, []);

	return (
		<div>
			<Sidebar
				as={Menu}
				animation='overlay'
				direction='left'
				icon='labeled'
				inverted
				vertical
				visible={true}
				width='thin'
			>
				{items.map((item, index) => {
					return (
						<Menu.Item
							as={Link}
							to={item.link}
							key={index}
							className={`${item.text.toLowerCase()}-item`}
							onClick={(e) => goToSection(e, item.text.toLowerCase())}
						>
							<Icon name={item.iconName} />
							{item.text}
						</Menu.Item>
					);
				})}
			</Sidebar>
			{children}
		</div>
	);
};

export default NavigationBarDesktop;
