// EgpHeader .egp-header
import React, { Component } from 'react';
import logo from '../assets/mc-logo.png';
import headerImageDE from '../assets/together-for-gold-de.png';
import headerImageFR from '../assets/together-for-gold-fr.png';
import headerImageIT from '../assets/together-for-gold-it.png';
import Utility from '../services/Utility';
import EgpLanguageCols from './EgpLanguageCols';
import './EgpHeader.scss';

//{this.props.children}

class EgpHeader extends Component {
  constructor(props) {
    super(props);
    //console.log('langName:', this.props.langName);
    //console.log('langList:', this.props.langList);
    //this.state = { date: new Date() };
    this.headerImgDE = headerImageDE;
    this.headerImgFR = headerImageFR;
    this.headerImgIT = headerImageIT;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item) {
    // second argument will always be the synthetic event
    console.log("handleClick item:", item);
    this.props.onChangeLanguage(item);
  }

  render() {
    const { langList, langName } = this.props;
    const classNames = 'col-auto col-xs-order-1 col-order-2 language cursor-pointer';
    const headerImage = this['headerImg' + langName];
    //console.log("render", "langName:", langName);
    //console.log("render", "headerImage:", headerImage);
    return (
      <div className="egp-header">
        <div className="container justify-space-between">
          <div className="col-8">
            <div className="mc-header">
              <img src={headerImage} className="img-responsive" alt="together-for-gold" />
            </div>
          </div>
          <div className="col-4">
            <div className="container justify-end items-center">
              <EgpLanguageCols classList={Utility.classObj(classNames)} langName={langName} langList={langList} onChangeLanguage={this.handleClick} />
              <div className="col-auto col-xs-order-1 col-order-2 separator"></div>
              <div className="col-auto col-xs-order-2 col-order-1 mc-logo">
                <img src={logo} className="img-responsive" alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EgpHeader;
