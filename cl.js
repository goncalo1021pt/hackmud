function(context, args) 
{
	var l = #hs.sys.upgrades();
	for (var ctd = l.length-1; ctd > -1; ctd--)
		if (l[ctd].rarity < 2)
				#ls.sys.cull({"i":ctd, confirm:true});
	var gc = #hs.accts.balance();
	#ms.accts.xfer_gc_to({to:"goncalo2", amount:gc});
	return {ok:true};
}