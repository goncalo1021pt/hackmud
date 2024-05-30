function(context, args)
{
	var count = 0;
	var dg = String.fromCharCode(args.d);
	for (var i = 0; i < args.s.length; i++) {
		if (args.s[i] === args.d) {
			count++;
		}
	}		
}
