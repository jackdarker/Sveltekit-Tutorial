import { B as BROWSER, w as writable } from './index-eb362a87.js';

const browser = BROWSER;
function createSettings() {
  let defaultSettings = {
    theme: "g80",
    animationSpeed: "normal"
  };
  const { subscribe, set, update } = writable(defaultSettings);
  loadFromLocalStorage();
  function saveToLocalStorage(settings2) {
    const data = JSON.stringify(settings2);
    try {
      window.localStorage.setItem("settings", data);
    } catch (error) {
      console.log("error while saving settings to local storage");
      console.error(error);
    }
  }
  function loadFromLocalStorage() {
    try {
      let data = null;
      if (browser)
        ;
      if (data === null) {
        set(defaultSettings);
      }
    } catch (error) {
      console.log("error while loading settings from local storage");
      console.error(error);
    }
  }
  function set_(value) {
    set(value);
    saveToLocalStorage(value);
  }
  return {
    subscribe,
    loadFromLocalStorage,
    set: set_
  };
}
const settings = createSettings();

export { settings as s };
//# sourceMappingURL=stores2-12b1cc25.js.map
