function(context, args)
{
	var a = [];
	var l;
	for (var ctd = 0; ctd < 50; ctd++){
		l = #ns.beta.lock_sim({locks:["sn_w_glock"]});
		l = #ns.beta.lock_sim( {sn_w_glock:""});
		if (a.includes(l))
			continue
		a.push(l);
	}
	return {ok:true, a:a};
}
