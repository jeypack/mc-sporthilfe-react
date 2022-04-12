// EgpHeader .egp-header
import React, { Component } from 'react';
import Utility from '../services/Utility';

class EgpLanguageCols extends Component {

  handleClick(item) {
    // second argument will always be the synthetic event
    //console.log("handleClick item:", item);
    if (this.props.onChangeLanguage) {
      this.props.onChangeLanguage(item);
    }
  }

  render() {
    const classList = this.props.classList;
    return (
      <>
        {this.props.langList.map((item) => {
          classList['selected'] = (this.props.langName === item.label);
          const classSet = Utility.classSet(classList);
          //&console.log("render classSet:", classSet);
          return <div key={item.id} className={classSet} onClick={this.handleClick.bind(this, item)}>{item.label}</div>
        })}
      </>
    );
  }
}

export default EgpLanguageCols;
