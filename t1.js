function(context, args) // t:#s.script.name
{
	var functions = {
		"EZ_21": function() {
			solver("ez_21", ez, 'k');
		},
		"EZ_35": function() {
			solver("ez_35", ez, 'g');
			solver("digit", Array.from({length: 10}, (_, i) => i), 'k');
		},
		"EZ_40": function() { 
			solver("ez_40", ez, 'g');
			solver("ez_prime", prime, 'k');
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
			solver("l0cket", lokt, 'k');
		},
		"DATA_CHECK": function() {
			arg1.DATA_CHECK = "";
			l = args.t.call(arg1);
			l = l.split('\n');
			var str = "";
			for (var i = 0; i < l.length; i++) {
				for (var j = 0; j < data_check_q.length; j++) {
					if (l[i].includes(data_check_q[j])) {
						str += data_check_a[j];
					}
				}
			}
			arg1.DATA_CHECK = str;
			l = args.t.call(arg1);
			last_word = l.split(' ').pop();
		}
	};
	function solver(lock, lock_arr, endchar)
	{
		for (var i = 0; i < lock_arr.length; i++) {
			arg1[lock] = lock_arr[i];
			l = args.t.call(arg1);
			last_word = l.split(' ').pop();
			if (l.charAt(l.length-2) === endchar || last_word === "terminated.") {
				break;
			}
		}
	}
	var color = ["red","green","blue","cyan","lime","orange","purple","yellow"];
	var lokt = ["4jitu5", "5c7e1r", "6hh8xw", "9p65cu", "cmppiq", "ellux0", "hc3b69", "i874y3", "lq09tg", "nfijix", "pmvr1q", "sa23uw", "tvfkyq", "uphlaw", "vc2c7q", "vthf6e", "xwz7ja"];
	var data_check_q = ["kno", "hou", "dir", "iss", "ie'", "ry's", "dis", "nco", "vis", "wer", "pes", "saf", "atm", "fac", "emp", "pres", "th3", "via s", "gc", "gat", "dia", "eak", "anj", "ski", "exp", "bul", "arc", "ond", "ata", "gra", "ores", "idk", "ol'", "nam", "asc", "urt", "'re", "qr", ":o", "dro", "t-", "mC", "blu", "st fu", "kil", "gna"];
	var data_check_a = ["fran_lee", "robovac", "sentience", "sans_comedy", "angels", "minions", "sisters", "petra", "fountain", "helpdesk", "bunnybat", "get_level", "weathernet", "eve", "resource", "bo", "heard", "teach", "outta_juice", "poetry", "diagalpha", "crowsnest", "blazer", "dead", "engaged", "a2231", "obsessive", "atlanta", "skimmerite", "piano", "idp1p1", "well", "nubloopstone", "sheriff", "nowhere", "executives", "thirteen", "bnnyhunter", "unvarnishedpygmyumbrella", "goodfellow", "lime", "mallory", "hammer", "index", "making", "110652"];
	var prime = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
	var ez = ["open","release","unlock"];
	var arg1 = {};
	var last_word;
	do {
		var l = args.t.call(arg1);
		if (!l.includes("lock."))
			return {ok:false, msg:l};
		l = l.split('\n');
		
		var index = l.lastIndexOf('lock.') - 1;
		var lock = l[index].replace(/`|N/g, '');
		if (!functions.hasOwnProperty(lock))
			return {ok:false, msg:arg1}; 
		functions[lock]();
	} while (last_word !== "terminated.");
	var a = #ns.sys.access_log({})
	return { ok:true, msg:l};
}
