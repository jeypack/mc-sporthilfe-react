// App .egp-app
import React, { Component } from 'react';
import jsonLangData from '../assets/language-de-fr-it.json';
import './App.scss';
import EgpStepFactory from './EgpStepFactory';
import EgpHeader from '../components/EgpHeader';
import EgpStepID from '../constants/EgpStepID';
import LanguageService from '../services/LanguageService';
//import { authenticationService } from "../services/AuthenticationService";

//
class App extends Component {
  constructor() {
    super();
    this.langService = new LanguageService(jsonLangData);
    const currentLanguageKey = 'de';
    //const currentStep = (authenticationService.currentUserValue) ? EgpStepID.UPLOAD : EgpStepID.LOGIN;
    const currentStep = EgpStepID.LOGIN;
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
    this.handleChangeStep = this.handleChangeStep.bind(this);
    this.state = {
      langName: this.langService.getName(currentLanguageKey),
      steps: this.langService.getSteps(currentLanguageKey),
      currentStep
    };
    console.log("McDonalds Sporthilfe", "v1.1.0", "31.05.2021", "✅");
  }

  handleChangeLanguage(item) {
    const key = item.label.toLowerCase();
    const newSteps = this.langService.getSteps(key);
    /* this.setState((state, props) => ({
      langName: item.label,
      steps: newSteps
    })); */
    this.setState({
      langName: item.label,
      steps: newSteps
    });
  }

  handleChangeStep(step) {
    //console.info('handleChangeStep step:', step);
  }

  render() {
    const langName = this.state.langName;
    const langList = this.langService.getList();
    const { steps, currentStep } = this.state;
    //console.info('App render currentStep:', currentStep);
    return (
      <div className="egp-app">
        <EgpHeader langName={langName} langList={langList} onChangeLanguage={this.handleChangeLanguage}></EgpHeader>
        <EgpStepFactory debug={true} current={currentStep} steps={steps} onChangeStep={this.handleChangeStep}></EgpStepFactory>
      </div>
    );
  }
}

export default App;

//rel="noopener noreferrer"
