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
	var lock_l = ["EZ_40","c001","c002","c003", "l0cket", "ez_prime"];
	var l = args.t.call({}).split(' ');
	var index = l.lastIndexOf('lock.') - 1;
	var lock = l[index];
	var ez = ["open","release","unlock"];
	var prime = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79.83,89,97];
	var arg1 = {};
	for (var i = 0; i < ez.length; i++)
	{
		l = args.t.call({"ez_40":ez[i]});
		if (l.charAt(0) !== 'D')
		{
			arg1 = Object.assign({arg1, "ez_40":ez[i]});
			break;
		}
	}
	var loop = 0;
	for (var i = 0; i < prime.length; i++)
	{
		l = args.t.call(arg1, {
			"ez_prime":prime[i]});
		if (l.charAt(0) === 'D')
		{
			arg1 = Object.assign(arg1, {"ez_40":ez[i]});
			break;
		}
		loop++;
	}
	
	return { ok:true, msg:l, loop:loop};
}
