function(context, args)  // target:#s.some.npc
{
	var l, words, get_pass, pass = null, get_user, match, cmd, cmd_var, i, regex = /^[a-zA-Z_:]+$/;
	var pass_key = ["p", "pass", "password"];
	var projects = ["W3rlD3NDER", "ESCHATOLOGI.EXE", "omegabyte_03", "qw_stop", "Ap_calypse", "BL4Z1NGW0RLD", "giant_spidr", "H0meEntert4inment", "thefloood", "Vy_for_russ", "tmp"];
	
	do {
		l = args.target.call().split('\n');
		words = l[l.length - 1].split(' | ');
		get_user = words[0];
		get_pass = words[1];
	} while (!regex.test(get_pass) || !regex.test(get_user));

	do {
		l = args.target.call({})
		match = l.match(/(\w+):"([^"]*)"/);
		cmd_var = match[1];
		cmd = match[2];
	} while (!regex.test(cmd) || !regex.test(cmd_var));

	do {
		var loop = 0;
		l = args.target.call({[cmd_var]: get_pass});
		match = l.match(/strategy (\S+)/);
		if (!match)
		{
			loop++;
			continue;
		}
		pass = match[1];
	} while (!regex.test(pass) || pass === null);

	for (i = 0; i < 3; i++)
	{
		l = args.target.call({[cmd_var]: cmd, [pass_key[i]]: pass});
		if (l.charAt(0) === 'A')
			break;
	}

	var logs = [];
	for (var j = 0; j < projects.length; j++)
		{
			l = args.target.call({[cmd_var]: cmd, [pass_key[i]]: pass, project: projects[j]});
			if (Array.isArray(l))
				logs = logs.concat(l);
		}
	return { ok: true, msg: logs};	
}
