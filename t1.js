function(context, args) // t:#s.script.name
{
	// #D is a debug function like console.log
	var functions = {
		"EZ_21": function() {
			solver("ez_21", ez);
		},
		"EZ_35": function() {
			solver("ez_35", ez);
			solver("digit", Array.from({length: 10}, (_, i) => i));
		},
		"EZ_40": function() { 
			solver("ez_40", ez);
			solver("ez_prime", prime);
		},
		"c001": function() {
			solver("c001", color);
			solver("color_digit", Array.from({length: 10}, (_, i) => i));
		},
		"c002": function() {
			solver("c002", color);
			solver("c002_complement", color);
		},
		"c003": function() {
			solver("c003", color);
			solver("c003_triad_1", color);
			solver("c003_triad_2", color);
		},
		"l0cket": function() {
			solver("l0cket", lokt);
		},
		"sn_w_glock": function() {
			arg1.sn_w_glock = "";
			l = args.t.call(arg1);
			var i = 0;
			for (;i < sn_q.length; i++) {
				if (l.includes(sn_q[i])) {
					arg1.sn_w_glock = sn_a[i];
					break;
				}
			}
			#fs.accts.xfer_gc_to_caller({amount:sn_a[i]});
			l = args.t.call(arg1);
		},
		"magnara": function() {
			arg1.magnara = "";
			l = #ns.beta.lock_sim(arg1).split(" ");
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
			l = l[l.length-1];
			var c = gc(l);
			for (var i = 0; i < c.length; i++) {
				arg1.magnara = c[i];
				l = #ns.beta.lock_sim(arg1).split(" ");
				l = l[0]; 
				if (l !== "recinroct")
					break;
			}
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
	function solver(lock, lock_arr)
	{
		for (var i = 0; i < lock_arr.length; i++) {
			arg1[lock] = lock_arr[i];
			l = args.t.call(arg1);
			last_word = l.split(' ').pop();
			if (last_word === "lock." || last_word ==="missing." || last_word === "terminated.") {
				break;
			}
		}
	}
	var color = ["red","green","blue","cyan","lime","orange","purple","yellow"];
	var lokt = ["4jitu5", "5c7e1r", "6hh8xw", "9p65cu", "cmppiq", "ellux0", "hc3b69", "i874y3", "lq09tg", "nfijix", "pmvr1q", "sa23uw", "tvfkyq", "uphlaw", "vc2c7q", "vthf6e", "xwz7ja"];
	var data_check_q = ["kno", "hou", "dir", "iss", "ie'", "ry's", "dis", "nco", "vis", "wer", "pes", "saf", "atm", "fac", "emp", "pres", "th3", "via s", "gc", "gat", "dia", "eak", "anj", "ski", "exp", "bul", "arc", "ond", "ata", "gra", "ores", "idk", "ol'", "nam", "asc", "urt", "'re", "qr", ":o", "dro", "t-", "mC", "blu", "st fu", "kil", "gna"];
	var data_check_a = ["fran_lee", "robovac", "sentience", "sans_comedy", "angels", "minions", "sisters", "petra", "fountain", "helpdesk", "bunnybat", "get_level", "weathernet", "eve", "resource", "bo", "heard", "teach", "outta_juice", "poetry", "diagalpha", "crowsnest", "blazer", "dead", "engaged", "a2231", "obsessive", "atlanta", "skimmerite", "piano", "idp1p1", "well", "nubloopstone", "sheriff", "nowhere", "executives", "thirteen", "bnnyhunter", "unvarnishedpygmyumbrella", "goodfellow", "lime", "mallory", "hammer", "index", "making", "110652"];
	var sn_q = ["hunter's","secret.","secure.","meaning","beast","special","magician","elite","monolithic"];
	var sn_a = [3006,7,443,42,666,38,1089,1337,2001];
	var prime = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
	var ez = ["open","release","unlock"];
	var arg1 = {};
	var last_word;
	if (context.caller !== "goncalo1021pt")
		return {ok:false};
	do {
		var l = args.t.call(arg1);
		if (typeof l !== "string" || !l.includes("lock."))
		{
			if (typeof l !== "string")
				return {ok:false, msg:l.msg};
			return {ok:true, msg:l};
		}
		l = l.split(' ');
		var index = l.lastIndexOf('lock.') - 1;
		var lock = l[index].replace(/`|N/g, '');
		if (!functions.hasOwnProperty(lock))
			return {ok:false, msg:arg1}; 
		functions[lock]();
	} while (last_word !== "terminated.");
	var a = #ns.sys.access_log({})
	return { ok:true, msg:l};
}
