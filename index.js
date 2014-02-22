var module_path = 'app_modules';

function aquire(moduleName, setPath) {
	if (setPath) { module_path = setPath }
	if (['bower', 'component', 'config', 'package'].indexOf(moduleName) >= 0) {
		return require('./' + moduleName + '.json')
	}
	return require('./' + module_path + '/' + moduleName)
}

module.exports = aquire