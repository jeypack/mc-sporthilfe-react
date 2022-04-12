/**
 * Utility
 */
class Utility {
  static classSet(props) {
    let list = [];
    for (let name in props) {
      if (props.hasOwnProperty(name) && props[name] === true) {
        list.push(name);
      }
    }
    return list.join(' ');
  }

  static classObj(props) {
    let obj = {};
    //console.log('classObj');
    if (typeof props === 'string') {
      props = props.split(' ');
      //console.log('classObj string');
    }
    if (Array.isArray(props)) {
      for (let i = 0; i < props.length; i++) {
        obj[props[i]] = true;
      }
      //&console.log('classObj isArray');
    } else if (typeof props === 'object') {
      //console.log('classObj object');
      return props;
    }
    return obj;
  }
}

export default Utility;
