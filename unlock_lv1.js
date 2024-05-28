function(context, args) // t:#s.script.name
{
	var functions = {
		"EZ_21": function() {
			solver("ez_21", ez, 'k');
		},
		"EZ_35": function() {
			solver("ez_35", ez, 'g');
			solver("digit", Array.from({length: 9}, (_, i) => i), 'k');
		},
		"EZ_40": function() { 
			solver("ez_40", ez, 'g');
			solver("ez_prime", prime, 'e');
			},
		"c001": function() {
			solver("c001", color, 'g');
			solver("color_digit", Array.from({length: 10}, (_, i) => i), 'k');
		},
		"c002": function() {
			solver("c002", color, 'g');
			solver("c002_complement", color, 'k');
		},
		"c003": function() {
			solver("c003", color, 'g');
			solver("c003_triad_1", color, 'g');
			solver("c003_triad_2", color, 'k');
		},
		"l0cket": function() {

		}
	};
	function solver(lock, lock_arr, endchar)
	{
		for (var i = 0; i < lock_arr.length; i++) {
			var temp = Object.assign(arg1, {[lock]:lock_arr[i]});
			l = args.t.call(temp);
			if (l.charAt(l.length-2) === endchar || l.charAt(l.length - 2) === 'd') {
				arg1 = temp;
				break;
			}
		}
	}
	var color = ["red","green","blue","cyan","lime","orange","purple","yellow"];
	var prime = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79.83,89,97];
	var arg1 = {};
	var ez = ["open","release","unlock"];
	do {
		var l = args.t.call(arg1).split(' ');
		var index = l.lastIndexOf('lock.') - 1;
		var lock = l[index].replace(/`|N/g, '');
		if (lock === 'l0cket')
			return {ok:true, msg:"l0cket"};
		if (!functions.hasOwnProperty(lock))
			return {ok:false, msg:lock}; 
		functions[lock]();
	} while (args.t.call(arg1).charAt(l.length - 2) !== 'd');
	return { ok:true, msg:l};
}
