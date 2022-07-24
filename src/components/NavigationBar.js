import React, { useState } from 'react';
import { Responsive } from 'semantic-ui-react';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';
import NavigationBarMobile from './NavigationBarMobile';
import NavigationBarDesktop from './NavigationBarDesktop';
import { items } from '../constants/navbar';
import '../styles/NavigationBar.scss';

const NavigationBar = ({ children }) => {
	const [visible, setVisible] = useState(false);
	const handleToggle = () => setVisible(!visible);
	const goToSection = (e, sectionName) => {
		e.preventDefault();
		const section = document.querySelector(`#${sectionName}`);
		if (section) {
			scrollIntoView(section, {
				scrollMode: 'if-needed',
				block: 'start',
				inline: 'nearest',
				duration: window.innerWidth > 499 ? 100 : 1500,
				ease: (t) =>
					t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t,
			});
		}
	};

	return (
		<div id='navigation-bar'>
			<Responsive {...Responsive.onlyMobile}>
				<NavigationBarMobile
					items={items}
					onPusherClick={handleToggle}
					onToggle={handleToggle}
					visible={visible}
					goToSection={goToSection}
				>
					{children}
				</NavigationBarMobile>
			</Responsive>
			<Responsive {...Responsive.onlyTablet}>
				<NavigationBarMobile
					items={items}
					onPusherClick={handleToggle}
					onToggle={handleToggle}
					visible={visible}
					goToSection={goToSection}
				>
					{children}
				</NavigationBarMobile>
			</Responsive>
			<Responsive minWidth={Responsive.onlyComputer.minWidth}>
				<NavigationBarDesktop items={items} goToSection={goToSection}>
					{children}
				</NavigationBarDesktop>
			</Responsive>
		</div>
	);
};

export default NavigationBar;
