import React, { useEffect } from 'react';
import { Icon, Menu, Sidebar } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavigationBarMobile = ({
	items,
	children,
	goToSection,
	visible,
	onToggle,
	onPusherClick,
}) => {
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
		console.log('inside mobile nav');
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
		<Sidebar.Pushable>
			<Sidebar
				as={Menu}
				animation='overlay'
				icon='labeled'
				inverted
				vertical
				visible={visible}
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
			<Sidebar.Pusher
				dimmed={visible}
				onClick={onPusherClick}
				style={{ minHeight: '100vh' }}
			>
				<Menu fixed='top' inverted>
					<Menu.Item onClick={onToggle}>
						<Icon name='sidebar' />
					</Menu.Item>
				</Menu>
				{children}
			</Sidebar.Pusher>
		</Sidebar.Pushable>
	);
};

export default NavigationBarMobile;
