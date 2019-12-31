import React from 'react';
import {Icon, Menu, Sidebar} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class NavigationBarMobile extends React.Component {
  render() {
    return(
      <Sidebar.Pushable>
        <Sidebar as={Menu} animation="overlay" icon="labeled" inverted vertical visible={this.props.visible}>
          {this.props.items.map((item, index) => {
            return (
              <Menu.Item as={Link} to={item.link} key={index}
                onClick={(e) => this.props.goToSection(e, item.text.toLowerCase())}>
                <Icon name={item.iconName} />
                {item.text}
              </Menu.Item>
            );
          })}     
        </Sidebar>
        <Sidebar.Pusher dimmed={this.props.visible}
          onClick={this.props.onPusherClick} style={{minHeight: "100vh"}}>
          <Menu fixed="top" inverted>
            <Menu.Item onClick={this.props.onToggle}>
              <Icon name="sidebar" />
            </Menu.Item>
          </Menu>
          {this.props.children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default NavigationBarMobile;
