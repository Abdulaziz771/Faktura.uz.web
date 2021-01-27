import localesRu from "./locales-ru.json";
import localesUz from "./locales-uz.json";

export default (() => {
  
  let translation = {};

  translation.locales = {};

  translation._getDefaultLocaleName = function () {
    return "ru";
  };

  translation._loadLocaleNameFromStorage = function () {
    if (typeof window.Storage !== "undefined")
      if (typeof window.localStorage.translation !== "undefined")
        return JSON.parse(window.localStorage.translation).localeName;

    return null;
  };

  translation._saveLocaleNameInStorage = function (localeName) {
    if (typeof window.Storage !== "undefined") {
      window.localStorage.translation = JSON.stringify({
        localeName: localeName
      });
    }
  };

  translation.loadUserLocale = function () {
    translation.loadLocale(translation.getUserLocaleName());
  };

  translation.getUserLocaleName = function () {
    var locale = translation._loadLocaleNameFromStorage();
    locale = locale || translation._getDefaultLocaleName();

    return locale;
  };

  translation.loadLocale = function (localeName) {
    if (localeName == "ru") {
      translation.locales = localesRu;
    }
    if (localeName == "uz") {
      translation.locales = localesUz;
    }
  };

  translation.changeLocale = function (localeName) {
    translation._saveLocaleNameInStorage(localeName);
    translation.loadLocale(localeName);
  };

  translation.translate = function () {
    var sectionName = arguments[0];
    var translationKey = arguments[1];
    if (
      translation.locales[sectionName] !== undefined &&
      typeof translation.locales[sectionName][translationKey] === "string"
    ) {
      var t = translation.locales[sectionName][translationKey];
      if (arguments.length > 2) {
        // set argument values
        for (var i = 2; i < arguments.length; i++)
          while (t.indexOf("{" + (i - 2) + "}") !== -1)
            t = t.replace("{" + (i - 2) + "}", arguments[i]);
      }
      return t;
    }
    return "";
  };

  translation.loadUserLocale();
  return translation;
})();
