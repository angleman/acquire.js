function aquire(moduleName) {
	if (['bower', 'component', 'config', 'package'].indexOf(moduleName) >= 0) {
		return require('../' + moduleName + '.json')
	}
	return require('../app_modules/' + moduleName)
}

module.exports = aquire