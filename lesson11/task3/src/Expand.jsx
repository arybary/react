import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons'
import PropTypes from "prop-types";

class Expand extends Component {
  state = {
    isOpen: false,
    chevron: faChevronUp
  };
  showDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
render(){
  return (
    <div className="expand border">
    <div className="expand__header">
      <span className="expand__title">{this.props.title}</span>
      <button className="expand__toggle-btn" onClick={this.showDialog}>
      <FontAwesomeIcon icon={!this.state.isOpen ? faChevronDown : faChevronUp} />
      </button>
    </div>
    <div className="expand__content">
      {!this.state.isOpen ? '' : this.props.children}
    </div>
  </div>
  );
};}
Expand.propTypes = {
  
  children: PropTypes.element.isRequired,
  title: PropTypes.string  
};

Expand.defaultProps = {
 
  title: "",
};
export default Expand;
