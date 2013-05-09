/*** Generated by streamline 0.4.10 (generators) - DO NOT EDIT ***/var fstreamline__ = require("streamline/lib/generators/runtime"); (fstreamline__.create(function*(_) {var delay_ = fstreamline__.create(delay, 0), delayFail_ = fstreamline__.create(delayFail, 0); var module = QUnit.module;

module("streamline evaluation");

function evalTest(f, val) {
	f(function(err, result) {
		var str = err ? "ERR: " + err : result;
		strictEqual(str, val);
		start();
	});
}

function* delay(_, val) {
	(yield fstreamline__.invoke(null, setTimeout, [_, 0], 0));
	yield ( val);
}

function* delayFail(_, err) {
	(yield fstreamline__.invoke(null, setTimeout, [_, 0], 0));
	throw err;
}

function throwError(message) {
	throw new Error(message);
}

asyncTest("eval return", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		yield ( (yield delay(_, 5)));
	}, 0), 5);
;yield undefined;}, 0));
asyncTest("eval if true", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		if (true) yield ( (yield delay(_, 3)));
		yield ( 4);
	}, 0), 3);
;yield undefined;}, 0));
asyncTest("eval if false", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		if (false) yield ( (yield delay(_, 3)));
		yield ( 4);
	}, 0), 4);
;yield undefined;}, 0));
asyncTest("eval while", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		var i = 1,
			result = 1;
		while (i < 5) {
			result = (yield delay(_, i * result));
			i++;
		}
		yield ( result);
	}, 0), 24);
;yield undefined;}, 0));
asyncTest("eval for", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		var result = 1;
		for (var i = 1; i < 5; i++) {
			result = (yield delay(_, i)) * (yield delay(_, result));
		}
		yield ( result);
	}, 0), 24);
;yield undefined;}, 0));
asyncTest("eval for in", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		var foo = {
			a: 1,
			b: 2,
			c: 3,
			d: 5
		};
		var result = 1;
		for (var k in foo) {
			result = (yield delay(_, foo[(yield delay(_, k))])) * (yield delay(_, result));
		}
		yield ( result);
	}, 0), 30);
;yield undefined;}, 0));
asyncTest("fully async for in", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		var result = 1;
		for (var i = (yield delay(_, 2)); i < (yield delay(_, 5)); i = (yield delay(_, i)) + 1) {
			result = (yield delay(_, result)) * (yield delay(_, i));
		}
		yield ( result);
	}, 0), 24);
;yield undefined;}, 0));
asyncTest("break in loop", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		var result = 1;
		for (var i = 1; i < 10; i++) {
			if (i == 5) break;
			result = (yield delay(_, result)) * (yield delay(_, i));
		}
		yield ( result);
	}, 0), 24);
;yield undefined;}, 0));
asyncTest("continue", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		var result = 1;
		for (var i = 1; i < 10; i++) {
			if (i >= 5) continue;
			result = (yield delay(_, result)) * (yield delay(_, i));
		}
		yield ( result);
	}, 0), 24);
;yield undefined;}, 0));
asyncTest("break in while", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		var i = 1,
			result = 1;
		while (i < 10) {
			if (i == 5) break;
			result = (yield delay(_, result)) * (yield delay(_, i));
			i++;
		}
		yield ( result);
	}, 0), 24);
;yield undefined;}, 0));
asyncTest("continue in while", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		var i = 1,
			result = 1;
		while (i < 10) {
			i++;
			if (i >= 5) continue;
			result = (yield delay(_, result)) * (yield delay(_, i));
		}
		yield ( result);
	}, 0), 24);
;yield undefined;}, 0));
asyncTest("for (;;)", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		var i = 0;
		for (;;) {
			if ((yield delay(_, ++i)) === 10) yield ( i);
		}
	;yield undefined;}, 0), 10);
;yield undefined;}, 0));
asyncTest("eval lazy", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		var result = 1;
		yield ( (yield delay(_, (yield delay(_, result + 8)) < 5)) && true ? 2 : 4);
	}, 0), 4);
;yield undefined;}, 0));
asyncTest("eval lazy full async", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		var result = 1;
		yield ( (yield delay(_, (yield delay(_, result + 8)) < 5)) && true ? (yield delay(_, 2)) : (yield delay(_, 4)));
	}, 0), 4);
;yield undefined;}, 0));
asyncTest("try catch 1", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		try {
			yield ( (yield delay(_, "ok")));
		} catch (ex) {
			yield ( (yield delay(_, "err")));
		}
	;yield undefined;}, 0), "ok");
;yield undefined;}, 0));
asyncTest("try catch 2", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		try {
			throw (yield delay(_, "thrown"));
		} catch (ex) {
			yield ( (yield delay(_, "caught ")) + ex);
		}
	;yield undefined;}, 0), "caught thrown");
;yield undefined;}, 0));
asyncTest("try catch 3", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		try {
			throw (yield delay(_, "thrown"));
		} catch (ex) {
			yield ( (yield delay(_, "caught ")) + ex);
		}
	;yield undefined;}, 0), "caught thrown");
;yield undefined;}, 0));
asyncTest("try catch 5", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		try {
			(yield delayFail(_, "delay fail"));
		} catch (ex) {
			yield ( (yield delay(_, "caught ")) + ex);
		}
	;yield undefined;}, 0), "caught delay fail");
;yield undefined;}, 0));
asyncTest("try catch 6", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		try {
			throwError("direct");
			yield ( (yield delay(_, "ok")));
		} catch (ex) {
			yield ( (yield delay(_, "caught ")) + ex.message);
		}
	;yield undefined;}, 0), "caught direct");
;yield undefined;}, 0));
asyncTest("try catch 7", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		try {
			var message = (yield delay(_, "indirect"));
			throwError(message);
			yield ( (yield delay(_, "ok")));
		} catch (ex) {
			yield ( (yield delay(_, "caught ")) + ex.message);
		}
	;yield undefined;}, 0), "caught indirect");
;yield undefined;}, 0));
asyncTest("try finally 1", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		var x = "";
		{ var result__; finally__: do {try {
			x += (yield delay(_, "try"));
		} finally {
			x += (yield delay(_, " finally"));
		}} while (false); if (result__) yield result__[0]; }
		x += " end";
		yield ( x);
	}, 0), "try finally end");
;yield undefined;}, 0));
asyncTest("try finally 2", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		var x = "";
		{ var result__; finally__: do {try {
			x += (yield delay(_, "try"));
			{ result__ = [ x]; break finally__; };
		} finally {
			x += (yield delay(_, " finally"));
		}} while (false); if (result__) yield result__[0]; }
		x += " end";
		yield ( x);
	}, 0), "try");
;yield undefined;}, 0));
asyncTest("try finally 3", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		var x = "";
		{ var result__; finally__: do {try {
			x += (yield delay(_, "try"));
			throw "bad try";
		} finally {
			x += (yield delay(_, " finally"));
		}} while (false); if (result__) yield result__[0]; }
		x += " end";
		yield ( x);
	}, 0), "ERR: bad try");
;yield undefined;}, 0));
asyncTest("try finally 4", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		var x = "";
		{ var result__; finally__: do {try {
			x += (yield delay(_, "try"));
			throwError("except");
		} finally {
			x += (yield delay(_, " finally"));
		}} while (false); if (result__) yield result__[0]; }
		x += " end";
		yield ( x);
	}, 0), "ERR: Error: except");
;yield undefined;}, 0));
asyncTest("try finally 5", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		var x = "";
		try {
			{ var result__; finally__: do {try {
				x += (yield delay(_, "try"));
				throwError("except");
				x += " unreached";
			} finally {
				x += (yield delay(_, " finally"));
			}} while (false); if (result__) yield result__[0]; }
			x += " end";
			yield ( x);
		} catch (ex) {
			yield ( x + "/" + ex.message);
		}
	;yield undefined;}, 0), "try finally/except");
;yield undefined;}, 0));
asyncTest("try catch finally 1", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		var x = "";
		try {
			{ var result__; finally__: do {try {
				x += (yield delay(_, "try"));
				throw new Error("except");
				x += " unreached";
			} catch (ex) {
				x += (yield delay(_, " catch " + ex.message));
				throw ex;
			} finally {
				x += (yield delay(_, " finally"));
			}} while (false); if (result__) yield result__[0]; }
			x += " end";
			yield ( x);
		} catch (ex) {
			yield ( x + "/" + ex.message);
		}
	;yield undefined;}, 0), "try catch except finally/except");
;yield undefined;}, 0));
asyncTest("try catch finally 2", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		var x = "";
		try {
			{ var result__; finally__: do {try {
				x += (yield delay(_, "try"));
				throwError("except");
				x += " unreached";
			} catch (ex) {
				x += " catch " + ex.message;
				throw ex;
			} finally {
				x += " finally";
			}} while (false); if (result__) yield result__[0]; }
			x += " end";
			yield ( x);
		} catch (ex) {
			yield ( x + "/" + ex.message);
		}
	;yield undefined;}, 0), "try catch except finally/except");
;yield undefined;}, 0));
asyncTest("nested try/catch 1", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		var x = "";
		try {
			try {
				x += (yield delay(_, "try"));
			} catch (ex) {
				x += (yield delay(_, " inner catch " + ex.message));
			}
			throwError(" except");
		} catch (ex) {
			yield ( x + " outer catch" + ex.message);
		}
	;yield undefined;}, 0), "try outer catch except");
;yield undefined;}, 0));
asyncTest("nested try/catch 2", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		var x = "";
		try {
			try {
				x += (yield delay(_, "try"));
			} catch (ex) {
				x += " inner catch " + ex.message;
			}
			throw new Error(" except");
		} catch (ex) {
			yield ( x + " outer catch" + ex.message);
		}
	;yield undefined;}, 0), "try outer catch except");
;yield undefined;}, 0));
asyncTest("nested try/catch 3", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		var x = "";
		try {
			try {
				x += (yield delay(_, "try"));
			} catch (ex) {
				x += (yield delay(_, " inner catch " + ex.message));
			}
			throw new Error(" except");
		} catch (ex) {
			yield ( x + " outer catch" + ex.message);
		}
	;yield undefined;}, 0), "try outer catch except");
;yield undefined;}, 0));
asyncTest("nested try/finally 1", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		var x = "";
		try {
			{ var result__; finally__: do {try {
				x += (yield delay(_, "try"));
			} finally {
				x += (yield delay(_, " inner finally"));
			}} while (false); if (result__) yield result__[0]; }
			throwError(" except");
		} catch (ex) {
			yield ( x + " outer catch" + ex.message);
		}
	;yield undefined;}, 0), "try inner finally outer catch except");
;yield undefined;}, 0));
asyncTest("nested try/finally 2", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		var x = "";
		try {
			{ var result__; finally__: do {try {
				x += (yield delay(_, "try"));
			} finally {
				x += " inner finally";
			}} while (false); if (result__) yield result__[0]; }
			throwError(" except");
		} catch (ex) {
			yield ( x + " outer catch" + ex.message);
		}
	;yield undefined;}, 0), "try inner finally outer catch except");
;yield undefined;}, 0));
asyncTest("nested try/finally 3", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		var x = "";
		try {
			{ var result__; finally__: do {try {
				x += (yield delay(_, "try"));
			} finally {
				x += (yield delay(_, " inner finally"));
			}} while (false); if (result__) yield result__[0]; }
			throw new Error(" except");
		} catch (ex) {
			yield ( x + " outer catch" + ex.message);
		}
	;yield undefined;}, 0), "try inner finally outer catch except");
;yield undefined;}, 0));
asyncTest("and ok", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		var x = "<<";
		if ((yield delay(_, true)) && (yield delay(_, true))) x += "T1";
		else x += "F1";
		if ((yield delay(_, true)) && (yield delay(_, false))) x += "T2";
		else x += "F2";
		if ((yield delay(_, false)) && (yield delay(_, true))) x += "T3";
		else x += "F3";
		if ((yield delay(_, false)) && (yield delay(_, false))) x += "T4";
		else x += "F4";
		if ((yield delay(_, false)) && (yield delayFail(_, "bad"))) x += "T5";
		else x += "F5";
		x += ">>";
		yield ( x);
	}, 0), "<<T1F2F3F4F5>>");
;yield undefined;}, 0));
asyncTest("or ok", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		var x = "<<";
		if ((yield delay(_, true)) || (yield delay(_, true))) x += "T1";
		else x += "F1";
		if ((yield delay(_, true)) || (yield delay(_, false))) x += "T2";
		else x += "F2";
		if ((yield delay(_, false)) || (yield delay(_, true))) x += "T3";
		else x += "F3";
		if ((yield delay(_, false)) || (yield delay(_, false))) x += "T4";
		else x += "F4";
		if ((yield delay(_, true)) || (yield delayFail(_, "bad"))) x += "T5";
		else x += "F5";
		x += ">>";
		yield ( x);
	}, 0), "<<T1T2T3F4T5>>");
;yield undefined;}, 0));
asyncTest("switch with default", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {var g_ = fstreamline__.create(g, 0);
		function* g(_, i) {
			var result = "a";
			switch ((yield delay(_, i))) {
			case 1:
				result = (yield delay(_, "b"));
				break;
			case 2:
				yield ( (yield delay(_, "c")));
			case 3:
			case 4:
				result = (yield delay(_, "d"));
				break;
			default:
				result = (yield delay(_, "e"));
			}
			yield ( result);
		}

		yield ( (yield g(_, 0)) + (yield g(_, 1)) + (yield g(_, 2)) + (yield g(_, 3)) + (yield g(_, 4)) + (yield g(_, 5)));
	}, 0), "ebcdde");
;yield undefined;}, 0));
asyncTest("switch without default", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {var g_ = fstreamline__.create(g, 0);
		function* g(_, i) {
			var result = "a";
			switch ((yield delay(_, i))) {
			case 1:
				result = "b";
				break;
			case 2:
				yield ( "c");
			case 3:
			case 4:
				result = "d";
				break;
			}
			yield ( result);
		}

		yield ( (yield g(_, 0)) + (yield g(_, 1)) + (yield g(_, 2)) + (yield g(_, 3)) + (yield g(_, 4)) + (yield g(_, 5)));
	}, 0), "abcdda");
;yield undefined;}, 0));
asyncTest("this", 5, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {var delay2_ = fstreamline__.create(delay2, 1);
		function O(x) {
			this.x = x;
		}

		O.prototype.test1 = fstreamline__.create(function*(_) {
			var self = this;
			this.x = (yield delay(_, this.x + 1));
			strictEqual(this, self);
		;yield undefined;}, 0);
		O.prototype.test2 = fstreamline__.create(function*(_) {
			var self = this;
			try {
				this.x = (yield delay(_, this.x + 1));
				strictEqual(this, self);
			} catch (ex) {
				ok(false);
			}
		;yield undefined;}, 0);
		O.prototype.test3 = fstreamline__.create(function*(_) {
			var self = this;
			try {
				this.x = (yield delay(_, this.x + 1));
				throwError("test3");
				ok(false);
			} catch (ex) {
				strictEqual(this, self);
				this.x = (yield delay(_, this.x + 1));
			}
		;yield undefined;}, 0);

		function* delay2(val, _) {
			yield ( (yield delay(_, val)));
		}

		O.prototype.test4 = fstreamline__.create(function*(_) {
			var self = this;
			var v1 = delay2_(this.x + 1);
			var v2 = delay2_(1);
			this.x = (yield fstreamline__.invoke(null, v1, [_], 0)) + (yield fstreamline__.invoke(null, v2, [_], 0));
			strictEqual(this, self);
		;yield undefined;}, 0);
		var o = new O(1);
		(yield fstreamline__.invoke(o, "test1", [_], 0));
		(yield fstreamline__.invoke(o, "test2", [_], 0));
		(yield fstreamline__.invoke(o, "test3", [_], 0));
		(yield fstreamline__.invoke(o, "test4", [_], 0));
		yield ( o.x);
	}, 0), 7);
;yield undefined;}, 0));
asyncTest("scoping", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {var test_ = fstreamline__.create(test, 0);
		function* test(_) {
			var foo = "abc";

			function bar() {
				return foo;
			}

			(yield delay(_));
			var foo = "xyz";
			yield ( bar);
		}

		yield ( (yield test(_))());
	}, 0), "xyz");
;yield undefined;}, 0));
asyncTest("return undefined", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {var test_ = fstreamline__.create(test, 0);
		function* test(_) {
			(yield delay(_));
			yield undefined;
		}

		yield ( (yield test(_)));
	}, 0), undefined);
;yield undefined;}, 0));
asyncTest("futures test", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {var delay2_ = fstreamline__.create(delay2, 1);
		function* delay2(val, _) {
			yield ( (yield delay(_, val)));
		}

		var a = delay2_('a');
		var b = delay2_('b');
		var c = delay2_('c');
		var d = delay2_('d');
		yield ( (yield fstreamline__.invoke(null, a, [_], 0)) + (yield fstreamline__.invoke(null, b, [_], 0)) + (yield fstreamline__.invoke(null, d, [_], 0)) + (yield fstreamline__.invoke(null, c, [_], 0)));
	}, 0), "abdc");
;yield undefined;}, 0));
asyncTest("last case without break", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		switch (true) {
		case true:
			(yield delay(_));
		}
		yield ( 1);
	}, 0), 1);
;yield undefined;}, 0));

asyncTest("async comma operator", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		var a;
		yield ( a = 4, a++, a = (yield delay(_, 2 * a)), (yield delay(_, a + 1)));
	}, 0), 11);
;yield undefined;}, 0));

asyncTest("async constructor", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {var Foo_ = fstreamline__.create(Foo, 1);
		function* Foo(val, _) {
			(yield delay(_));
			this.x = val;
		;yield undefined;}
		Foo_.prototype.y = function() {
			return this.x + 1;
		};
		yield ( (yield  fstreamline__.construct(Foo_,1)(5, _)).y());
	}, 0), 6);
;yield undefined;}, 0));

asyncTest("fibo false async", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {var fibo_ = fstreamline__.create(fibo, 0);
		function* fibo(_, n) {
			yield ( n > 1 ? (yield fibo(_, n - 1)) + (yield fibo(_, n - 2)) : 1);
		}
		yield ( (yield fibo(_, 16)));
	}, 0), 1597);
;yield undefined;}, 0));

asyncTest("coffeescript wrapper 1", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		yield ( (yield (function() {
			yield ( (yield delay(_, "cs1")));
		})()));
	}, 0), "cs1");
;yield undefined;}, 0));

asyncTest("coffeescript wrapper 2", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		yield ( (yield (function() {
			yield ( (yield delay(_, "cs2")));
		}).call(this)));
	}, 0), "cs2");
;yield undefined;}, 0));

asyncTest("coffeescript wrapper 3", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		yield ( (yield (function() {
			yield ( (yield delay(_, "cs3")));
		}).apply(this, arguments)));
	}, 0), "cs3");
;yield undefined;}, 0));

asyncTest("sync try/catch in async", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		try {
			throw new Error("catch me");
		} catch (ex) {
			yield ( "got it");
		}
	;yield undefined;}, 0), "got it");
;yield undefined;}, 0));

asyncTest("sync try/catch inside conditional", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		if (true) {
			try {} catch (ex) {}
		}
	;yield undefined;}, 0), undefined);
;yield undefined;}, 0));

asyncTest("octal literal", 1, fstreamline__.create(function*(_) {
	evalTest(fstreamline__.create(function* f(_) {
		yield ( 010);
	}, 0), 8);
;yield undefined;}, 0));

;yield undefined;}, 0).call(this, function(err) {
  if (err) throw err;
}));