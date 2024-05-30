// Provide a scriptor <number>({s:<string>, d:<number>}) which returns the number of times the digit shows up in the string

function(context, args)
{
	var count = 0;
	for (var i = 0; i < args.s.length; i++) {
		if (args.s[i] === args.d) {
			count++;
		}
	}		
}
