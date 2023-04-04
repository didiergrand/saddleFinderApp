export function getTranslation(i18n, key, lang, defaultValue = '') {
    let keys = key.split('.');
    let obj = i18n;
    for (let i = 0; i < keys.length; i++) {
      if (obj.hasOwnProperty(keys[i])) {
        obj = obj[keys[i]];
      } else {
        return defaultValue;
      }
    }
    if (obj.hasOwnProperty(lang)) {
      return obj[lang];
    } else {
      return defaultValue;
    }
  }