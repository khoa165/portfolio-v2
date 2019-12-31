import React from 'react';
import '../styles/Section.scss';

class Section extends React.Component {
  render() {
    return (
      <section id={this.props.id} className={`section ${this.props.className}`} 
        style={{minHeight: this.props.height, width: '100%', background: this.props.background}}>
        {this.props.padding ?
        <div style={{padding: `${this.props.padding}`}}>
          <div className="section-overlay"
            style={{background: `${this.props.background}`}} />
          <div className="section-heading"
            style={{color: `${this.props.headingColor}`}}
            data-aos="flip-down"
            data-aos-duration="500"
            data-aos-easing="ease"
            data-aos-delay="150">
            {this.props.heading}
          </div>
          <div className="section-heading-border"
            style={{background: `${this.props.headingColor}`, margin: `${this.props.headingMargin}`}}
            data-aos="fade-left"
            data-aos-duration="300"
            data-aos-easing="ease"
            data-aos-delay="500" />
          {this.props.children}
        </div>
        : <div>{this.props.children}</div>}
      </section>
    );
  }
}

export default Section;
