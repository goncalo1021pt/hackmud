function(context, args) // t:#s.script.name
{
	var functions = {
		"EZ_40": function() { 
			return "ez_40";
			},
		"c001": function() { /* code for c001 */ },
		"c002": function() { /* code for c002 */ },
		"c003": function() { /* code for c003 */ },
		"l0cket": function() { /* code for l0cket */ }
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
	var lock_l = ["EZ_21","EZ_35","EZ_40","c001","c002","c003", "l0cket", "ez_prime"];
	var l = args.t.call({}).split(' ');
	var index = l.lastIndexOf('lock.') - 1;
	var lock = l[index];
	var ez = ["open","release","unlock"];
	var color = ["red","green","blue","cyan","lime","orange","purple","yellow"];
	var arg1 = {};
	var prime = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79.83,89,97];
	solver("c001", color, 'g');
	solver("color_digit", Array.from({length: 10}, (_, i) => i), 'k');
	solver("c002", color, 'g');
	solver("c002_complement", color, 'k');
	solver("c003", color, 'g');
	solver("c003_triad_1", color, 'g');
	solver("c003_triad_2", color, 'k');
	return { ok:true, msg:l};
}
