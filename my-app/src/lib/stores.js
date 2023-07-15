import { writable } from 'svelte/store';

function createSettings() {
	let defaultSettings = {
		animationSpeed: 'normal'
	};

	const { subscribe, set, update } = writable(defaultSettings);

	/**
	 * @param {Settings} settings
	 */
	function saveToLocalStorage(settings) {
		const data = JSON.stringify(settings);
		try {
			window.localStorage.setItem('settings', data);
		} catch (error) {
			console.log('error while saving settings to local storage');
			console.error(error);
		}
	}

	function loadFromLocalStorage() {
		try {
			const data = window.localStorage.getItem('settings');
			if (data === null) {
				set(defaultSettings);
			} else {
				const parsed = JSON.parse(data);
				set(Object.assign({}, defaultSettings, parsed));
			}
		} catch (error) {
			console.log('error while loading settings from local storage');
			console.error(error);
		}
	}

	/**
	 *
	 * @param {Settings} value
	 */
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

export const settings = createSettings();