import React from 'react';
import {Menu, Sidebar, Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class NavigationBarDesktop extends React.Component {
  render() {
    return(
      <div>
        <Sidebar
          as={Menu} animation='overlay'
          direction='left' icon='labeled'
          inverted vertical
          visible={true} width='thin'>
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
        {this.props.children}
      </div>
    );
  }
}

export default NavigationBarDesktop;