/*** Generated by streamline 0.1.16 - DO NOT EDIT ***/

var __global = typeof global !== 'undefined' ? global : window;
function __cb(_, fn) { var ctx = __global.__context; return function(err, result) { __global.__context = ctx; if (err) return _(err); try { return fn(null, result); } catch (ex) { return __propagate(_, ex); } } }
function __future(fn, args, i) { var done, err, result; var cb = function(e, r) { done = true; err = e, result = r; }; args = Array.prototype.slice.call(args); args[i] = function(e, r) { cb(e, r); }; fn.apply(this, args); return function(_) { if (done) _.call(this, err, result); else cb = _.bind(this); }.bind(this); }
function __nt(_, fn) { var i = 0; var cb = __cb(_, fn); var safeCb = function() { try { cb(); } catch (ex) { __propagate(cb, ex); } }; if (typeof process != "undefined" && typeof process.nextTick == "function") return function() { if (++i % 20 == 0) process.nextTick(safeCb); else cb(); }; else return function() { if (++i % 20 == 0) setTimeout(safeCb); else cb(); }; }
function __propagate(_, err) { try { _(err); } catch (ex) { __trap(ex); } }
function __trap(err) { if (err) { if (__global.__context && __global.__context.errorHandler) __global.__context.errorHandler(err); else console.error("UNCAUGHT EXCEPTION: " + err.message + "\n" + err.stack); } }
(function(_) {
  var __then = (_ = (_ || __trap));
  var http = require("http");
  var streams = require("../lib/streams");
  var bufSize = 1000;
  var bufCount = 8;
  var modulo = 50;
  function makeBuffer(i) {
    var buf = new Buffer(bufSize);
    for (var j = 0; (j < bufSize); j++) {
      buf[j] = ((48 + i) + ((j % modulo)));;
    };
    return buf;
  };
  function checkBuffer(buf, i, offset, size) {
    if ((buf == null)) {
      throw new Error(("null buffer: " + i))
    };
    if ((buf.length != size)) {
      throw new Error(("bad buffer length: " + buf.length))
    };
    for (var j = 0; (j < size); j++) {
      var ii = (i + Math.floor((((offset + j)) / bufSize)));
      var jj = (offset + j);
      if ((buf[j] !== ((48 + ii) + ((jj % modulo))))) {
        throw new Error(((((("data corruption: ii=" + ii) + ", jj=") + jj) + " val=") + buf[j]))
      };
    };
  };
  http.createServer(function __1(req, res, _) {
    if (!_) {
      return __future(__1, arguments, 2);
    }
  ;
    var __then = _;
    res.writeHead(200, {
      "Content-Type": "application/octet-stream"
    });
    var i = 0;
    var __2 = false;
    return function(__break) {
      var __loop = __nt(_, function() {
        var __then = __loop;
        if (__2) {
          i++;
        }
         else {
          __2 = true;
        }
      ;
        if ((i < bufCount)) {
          res.write(makeBuffer(i));
          return process.nextTick(__cb(_, __then));
        }
         else {
          return __break();
        }
      ;
      });
      return __loop();
    }(function() {
      res.end();
      return __then();
    });
  }).listen(1337, "127.0.0.1");
  console.error("Server running at http://127.0.0.1:1337/");
  function addBufferHooks(stream) {
    var pause = stream.pause.bind(stream);
    stream.pause = function __1() {
      process.stderr.write("<");
      pause();
    };
    var resume = stream.resume.bind(stream);
    stream.resume = function __2() {
      process.stderr.write(">");
      resume();
    };
  };
  function test(_, name, options, fn) {
    if (!_) {
      return __future(test, arguments, 0);
    }
  ;
    var __then = _;
    process.stderr.write(("	testing " + name));
    options.url = "http://127.0.0.1:1337/";
    return streams.httpRequest(options).end().response(__cb(_, function(__0, resp) {
      addBufferHooks(resp.stream);
      return fn(__cb(_, function() {
        return function(__then) {
          return resp.read(__cb(_, function(__0, __3) {
            if (__3) {
              return _(new Error("unexpected data at end"));
            }
          ;
            return __then();
          }));
        }(function() {
          console.error(" ok");
          return __then();
        });
      }), resp);
    }));
  };
  function dot(_) {
    if (!_) {
      return __future(dot, arguments, 0);
    }
  ;
    var __then = _;
    return process.nextTick(__cb(_, function() {
      process.stderr.write(".");
      return __then();
    }));
  };
  function testPass(_, name, options) {
    if (!_) {
      return __future(testPass, arguments, 0);
    }
  ;
    var __then = _;
    console.error(("pass " + name));
    var t0 = Date.now();
    return test(__cb(_, function() {
      return test(__cb(_, function() {
        return test(__cb(_, function() {
          return test(__cb(_, function() {
            return test(__cb(_, function() {
              console.error((("pass completed in " + ((Date.now() - t0))) + " ms"));
              return __then();
            }), "random size read", options, function __5(_, resp) {
              if (!_) {
                return __future(__5, arguments, 0);
              }
            ;
              var __then = _;
              var total = 0;
              return function(__break) {
                var __loop = __nt(_, function() {
                  var __then = __loop;
                  if ((total < (bufCount * bufSize))) {
                    var len = Math.floor(((Math.random() * 3) * bufSize));
                    return resp.read(__cb(_, function(__0, buf) {
                      var expected = (((total + len) < (bufCount * bufSize)) ? len : ((bufCount * bufSize) - total));
                      checkBuffer(buf, Math.floor((total / bufSize)), (total % bufSize), expected);
                      total += buf.length;
                      return dot(__cb(_, __then));
                    }), len);
                  }
                   else {
                    return __break();
                  }
                ;
                });
                return __loop();
              }(function() {
                if ((total != (bufCount * bufSize))) {
                  return _(new Error("bad total at end"))
                };
                return __then();
              });
            });
          }), "odd size read", options, function __4(_, resp) {
            if (!_) {
              return __future(__4, arguments, 0);
            }
          ;
            var __then = _;
            var buf;
            var total = 0;
            var i = 0;
            var __3 = false;
            return function(__break) {
              var __loop = __nt(_, function() {
                var __then = __loop;
                if (__3) {
                  i++;
                }
                 else {
                  __3 = true;
                }
              ;
                if ((i < Math.floor((bufCount * 7)))) {
                  var len = Math.floor((bufSize / 7));
                  return resp.read(__cb(_, function(__0, __1) {
                    buf = __1;
                    checkBuffer(buf, Math.floor((total / bufSize)), (total % bufSize), len);
                    total += buf.length;
                    return dot(__cb(_, __then));
                  }), len);
                }
                 else {
                  return __break();
                }
              ;
              });
              return __loop();
            }(function() {
              var remain = ((bufCount * bufSize) - total);
              return resp.read(__cb(_, function(__0, __4) {
                buf = __4;
                checkBuffer(buf, (bufCount - 1), (total % bufSize), remain);
                total += buf.length;
                if ((total != (bufCount * bufSize))) {
                  return _(new Error("bad total at end"))
                };
                return __then();
              }), remain);
            });
          });
        }), "double size read", options, function __3(_, resp) {
          if (!_) {
            return __future(__3, arguments, 0);
          }
        ;
          var __then = _;
          var i = 0;
          var __3 = false;
          return function(__break) {
            var __loop = __nt(_, function() {
              var __then = __loop;
              if (__3) {
                i++;
              }
               else {
                __3 = true;
              }
            ;
              if ((i < Math.floor((bufCount / 2)))) {
                var dbl = (bufSize * 2);
                return resp.read(__cb(_, function(__0, buf) {
                  checkBuffer(buf, (i * 2), 0, dbl);
                  return dot(__cb(_, __then));
                }), dbl);
              }
               else {
                return __break();
              }
            ;
            });
            return __loop();
          }(__then);
        });
      }), "half size read", options, function __2(_, resp) {
        if (!_) {
          return __future(__2, arguments, 0);
        }
      ;
        var __then = _;
        var i = 0;
        var __3 = false;
        return function(__break) {
          var __loop = __nt(_, function() {
            var __then = __loop;
            if (__3) {
              i++;
            }
             else {
              __3 = true;
            }
          ;
            if ((i < (bufCount * 2))) {
              var half = (bufSize / 2);
              return resp.read(__cb(_, function(__0, buf) {
                checkBuffer(buf, Math.floor((i / 2)), (((i % 2)) * half), half);
                return dot(__cb(_, __then));
              }), half);
            }
             else {
              return __break();
            }
          ;
          });
          return __loop();
        }(__then);
      });
    }), "chunk read", options, function __1(_, resp) {
      if (!_) {
        return __future(__1, arguments, 0);
      }
    ;
      var __then = _;
      var i = 0;
      var __3 = false;
      return function(__break) {
        var __loop = __nt(_, function() {
          var __then = __loop;
          if (__3) {
            i++;
          }
           else {
            __3 = true;
          }
        ;
          if ((i < bufCount)) {
            return resp.read(__cb(_, function(__0, buf) {
              checkBuffer(buf, i, 0, bufSize);
              return dot(__cb(_, __then));
            }));
          }
           else {
            return __break();
          }
        ;
        });
        return __loop();
      }(__then);
    });
  };
  var oneTenth = Math.floor(((bufCount * bufSize) / 10));
  return testPass(__cb(_, function() {
    return testPass(__cb(_, function() {
      return testPass(__cb(_, function() {
        return testPass(__cb(_, function() {
          return testPass(__cb(_, function() {
            return testPass(__cb(_, function() {
              process.exit();
              return __then();
            }), "buffer all", {
              lowMark: 0,
              highMark: (11 * oneTenth)
            });
          }), "buffer 1 tenth and above", {
            lowMark: oneTenth,
            highMark: (11 * oneTenth)
          });
        }), "buffer 2/3 tenth", {
          lowMark: (2 * oneTenth),
          highMark: (3 * oneTenth)
        });
      }), "buffer 0/1 tenth", {
        lowMark: 0,
        highMark: oneTenth
      });
    }), "default buffering", {
    });
  }), "default buffering (warm up)", {
  });
})();