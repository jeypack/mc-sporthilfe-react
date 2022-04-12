class LanguageService {
  constructor(json) {
    this.json = json;
  }

  getName(key) {
    let lang = this.json[key.toLowerCase()];
    return lang.name;
  }

  getList() {
    let list = [];
    for (let key in this.json) {
      if (Object.prototype.hasOwnProperty.call(this.json, key)) {
        list.push({
          id: this.json[key].id,
          label: this.json[key].name
        });
      }
    }
    return list;
  }

  getSteps(key) {
    let steps = JSON.stringify(this.json[key.toLowerCase()].steps);
    return JSON.parse(steps);
  }

  getValue(key) {
    let value = JSON.stringify(this.json[key.toLowerCase()].value);
    return JSON.parse(value);
  }
}

export default LanguageService;
