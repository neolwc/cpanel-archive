function go (inputs) {
	var out = new Array();
	if (inputs.length == 2) {
		var a = inputs[0];
		var b = inputs[1];
		for (var i = 0; i < 6; i++) {
			var obj = new Object();
			switch (i) {
				case 0:
					obj.value = a.value + b.value;
					obj.from = '( ' + a.from + ' + ' + b.from + ' )';
					break;
				case 1:
					obj.value = a.value - b.value;
					obj.from = '( ' + a.from + ' - ' + b.from + ' )';
					break;
				case 2:
					obj.value = a.value * b.value;
					obj.from = a.from + ' × ' + b.from;
					break;
				case 3:
					obj.value = a.value / b.value;
					obj.from = '( ' + a.from + ' ÷ ' + b.from + ' )';
					break;
				case 4:
					obj.value = b.value - a.value;
					obj.from = '( ' + b.from + ' - ' + a.from + ' )';
					break;
				case 5:
					obj.value = b.value / a.value;
					obj.from = '( ' + b.from + ' ÷ ' + a.from + ' )';
					break;
			}
			out.push(obj);
		}
	}
	else {
		for (var i = inputs.length - 1; i >= 0; i--) {
			var abc = inputs.slice();
			var c = abc.splice(i,1)[0];
			var ab = go(abc);
			for (var j = ab.length - 1; j >= 0; j--) {
				out = out.concat(go([ab[j], c]));
			}
		}
	}
	return out;
}

function main (ary) {
	ary = go(ary).filter(function (obj) {
		if (obj.value === 24) return true;
	});
	ary = ary.map(function (obj) {
		return obj.from;
	});
	var out = new Array();
	ary.forEach(function (str) {
		if (out.indexOf(str) == -1) out.push(str);
	});
	return out;
}