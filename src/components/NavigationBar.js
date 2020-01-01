import React from 'react';
import {Responsive} from 'semantic-ui-react';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';
import NavigationBarMobile from './NavigationBarMobile';
import NavigationBarDesktop from './NavigationBarDesktop';
import '../styles/NavigationBar.scss';

const items = [
  {text: 'Home', iconName: 'home', link: '/'},
  {text: 'About', iconName: 'info', link: '/#about'},
  {text: 'Projects', iconName: 'code', link: '/#projects'},
  {text: 'Experiences', iconName: 'cogs', link: '/#experiences'},
  {text: 'Education', iconName: 'student', link: '/#education'},
  {text: 'Skills', iconName: 'lightbulb', link: '/#skills'},
  // {text: 'Interests', iconName: 'chess', link: '/#interests'},
  {text: 'Resume', iconName: 'tasks', link: '/#resume'},
  {text: 'Contact', iconName: 'conversation', link: '/#contact'}
];

class NavigationBar extends React.Component {
  state = {visible: true}
  handlePusher = () => {
    if (this.state.visible) {
      this.setState({ visible: false });
    }
  };
  handleToggle = () => this.setState({ visible: !this.state.visible });
  handleScreenSizeUpdate = (e, { width }) => {
    if (width >= Responsive.onlyTablet.minWidth) {
      this.setState({visible: true});
    } else {
      this.setState({visibile: false});
    }
  };
  goToSection = (e, sectionName) => {
    e.preventDefault();
    const section = document.querySelector(`#${sectionName}`);
    if (section) {
      scrollIntoView(section, {
        scrollMode: 'if-needed',
        block: 'start',
        inline: 'nearest',
        duration: window.innerWidth > 499 ? 100 : 1500,
        ease: t => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
      });
    }
  };
  render() {
    return (
      <div id="navigation-bar">
        <Responsive {...Responsive.onlyMobile}>
          <NavigationBarMobile
            items={items}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            visible={this.state.visible}
            onUpdate={this.handleScreenSizeUpdate}
            goToSection={this.goToSection}>
            {this.props.children}
          </NavigationBarMobile>
        </Responsive>
        <Responsive {...Responsive.onlyTablet}>
          <NavigationBarMobile
            items={items}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            visible={this.state.visible}
            onUpdate={this.handleScreenSizeUpdate}
            goToSection={this.goToSection}>
            {this.props.children}
          </NavigationBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyComputer.minWidth} onUpdate={this.handleScreenSizeUpdate}>
          <NavigationBarDesktop items={items} goToSection={this.goToSection}>
            {this.props.children}
          </NavigationBarDesktop>
        </Responsive>
      </div>
    );
  };
}

export default NavigationBar;