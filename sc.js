function(context, args)
{
	var l;
	var t;
	l = #ns.beta.lock_sim( {magnara:""}).split(" ");
	t = l[0];
	l = l[l.length-1];
	function gc(s){
		var r = [];
		if (s.length === 1) {
			return [s];
		} else {
			var a = gc(s.slice(1));
			for (var i = 0; i < a.length; i++) {
				for (var j = 0; j < s.length; j++) {
					var p = a[i].slice(0, j) + s[0] + a[i].slice(j);
					if (r.indexOf(p) === -1)
						r.push(p);
				}
			}
			return r;
		}
	}
	var c = gc(l);
	var b;
	for (var i = 0; i < c.length; i++) {
		l = #ns.beta.lock_sim({magnara:c[i]});
		b = l.split(" ");
		b = b[0]; 
		if (b !== t)
			return {ok:true, c:c[i], l:l};
	}
	return {ok:true, c:c};
}
