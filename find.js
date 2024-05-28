function(context, args)  // t:#s.script.name
{
	function mc(oa, na) {
		var f = false;
		for (var i = 0; i < oa.length; i++) {
			if (oa[i] && oa[i].split('').some(char => !/^[a-zA-Z0-9_.<>]$/.test(char)) && oa[i] !== null) {
				oa[i] = na[i];
				f = true;
			}
		}
		return f;
	}
	function gl()
	{
		var o = [];
		for (var j = 0; j < pj.length; j++)
		{
			l = args.t.call({[cv]: cmd, [pk[i]]: p, project: pj[j]});
			if (Array.isArray(l))
				o = o.concat(l);
		}
		return o;
	}
		
	var l, w, gp, p = null, gu, m, cmd, cv, i, r = /^[a-zA-Z_:]+$/;
	var pk = ["p", "pass", "password"];
	var pj = ["W3rlD3NDER", "ESCHATOLOGI.EXE", "omegabyte_03", "qw_stop", "Ap_calypse", "BL4Z1NGW0RLD", "giant_spidr", "H0meEntert4inment", "thefloood", "Vy_for_russ", "tmp"];
	
	do {
		l = args.t.call().split('\n');
		w = l[l.length - 1].split(' | ');
		gu = w[0];
		gp = w[1];
	} while (!r.test(gp) || !r.test(gu));

	do {
		l = args.t.call({})
		m = l.match(/(\w+):"([^"]*)"/);
		cv = m[1];
		cmd = m[2];
	} while (!r.test(cmd) || !r.test(cv));

	do {
		l = args.t.call({[cv]: gp});
		m = l.match(/strategy (\S+)/);
		if (!m)
			continue;
		p = m[1];
	} while (!r.test(p) || p === null);

	for (i = 0; i < 3; i++)
	{
		l = args.t.call({[cv]: cmd, [pk[i]]: p});
		if (l.charAt(0) === 'A')
			break;
	}

	var l = [];
	var nl = gl();
	do {
		l = gl();
	} while (mc(nl, l));
	return { ok: true, msg: nl};	
}
