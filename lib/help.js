
module.exports = function (argv) {
	var ret = {
		'info':'',
		'state':false
	};
	if (/^\-./.test(argv) === false) {
		return ret;
	}

	var HELP_FULL    = '--help',
		HELP 		 = '-h',
		VERSION_FULL = '--version',
		VERSION 	 = '-v';

	var state = false;
	var info = '\n\n  Usage: translate [options]\n\n'+
			   '  Options:\n\n';

	if (argv === HELP_FULL || argv === HELP ) {
		info += "  --help,-h\t\tview for help\n"+
			    "  --version,-v\t\tview the lastest version";
		state = true;

	} else if (argv === VERSION_FULL || argv === VERSION ) {
		info = "1.0.0";
		state = true;

	} else {
		info = '';
	}

	ret['info'] = info;
	ret['state']  = state;
	
	return ret;
};