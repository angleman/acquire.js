var module_path = 'app_modules';

module.exports = function(moduleName, setPath) {
	if (setPath) { module_path = setPath }
	if (['bower', 'component', 'config', 'package'].indexOf(moduleName) >= 0) {
		return require('../../' + moduleName + '.json')
	}
	var path = (module_path.substr(0,1) == '/') ? module_path : '../../' + module_path;
	return require(path + '/' + moduleName)
}
