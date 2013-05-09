/*** Generated by streamline 0.4.10 (callbacks) - DO NOT EDIT ***/ var __rt=require('streamline/lib/callbacks/runtime').runtime(__filename),__func=__rt.__func,__cb=__rt.__cb; var module = QUnit.module;
var flows = require("streamline/lib/util/flows");

function delay(_, val) { var __frame = { name: "delay", line: 4 }; return __func(_, this, arguments, delay, 0, __frame, function __$delay() {
    return flows.nextTick(__cb(_, __frame, 1, 1, function __$delay() {
      return _(null, val); }, true)); });};


function delayFail(_, err) { var __frame = { name: "delayFail", line: 9 }; return __func(_, this, arguments, delayFail, 0, __frame, function __$delayFail() {
    return flows.nextTick(__cb(_, __frame, 1, 1, function __$delayFail() {
      return _(err); }, true)); });};


module("flows");

function sparse() {
  var a = [];
  a[3] = 33;
  a[4] = 44;
  a[9] = 99;
  return a;};


function dump(a) {
  return a.reduce(function(s, v) {
    return ((s + "/") + v);
  }, "");};


asyncTest("each", 7, function __1(_) { var result; var __frame = { name: "__1", line: 30 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() {
    result = 1;
    return flows.each(__cb(_, __frame, 2, 1, function __$__1() {


      strictEqual(result, 24);
      result = 1;
      return [1,2,3,4,].forEach_(__cb(_, __frame, 7, 1, function __$__1() {



        strictEqual(result, 24);
        result = 1;
        return [1,2,3,4,].forEach_(__cb(_, __frame, 13, 1, function __$__1() {



          strictEqual(result, 24);
          result = 1;
          return [1,2,3,4,].forEach_(__cb(_, __frame, 19, 1, function __$__1() {





            strictEqual(result, 24);
            result = 1;
            return [1,2,3,4,].forEach_(__cb(_, __frame, 27, 1, function __$__1() {



              strictEqual(result, 24);
              result = "";
              return sparse().forEach_(__cb(_, __frame, 33, 1, function __$__1() {



                strictEqual(result, "/3:33/4:44/9:99");
                result = "";
                return sparse().forEach_(__cb(_, __frame, 39, 1, function __$__1() {



                  strictEqual(result, "/3:33/4:44/9:99");
                  start(); _(); }, true), -1, function __7(_, val, i) { var v; var __frame = { name: "__7", line: 69 }; return __func(_, this, arguments, __7, 0, __frame, function __$__7() { return delay(__cb(_, __frame, 1, 10, function ___(__0, __1) { v = __1; result = ((((result + "/") + i) + ":") + v); _(); }, true), val); }); }); }, true), function __6(_, val, i) { var v; var __frame = { name: "__6", line: 63 }; return __func(_, this, arguments, __6, 0, __frame, function __$__6() { return delay(__cb(_, __frame, 1, 10, function ___(__0, __1) { v = __1; result = ((((result + "/") + i) + ":") + v); _(); }, true), val); }); }); }, true), -1, function __5(_, val) { var v; var __frame = { name: "__5", line: 57 }; return __func(_, this, arguments, __5, 0, __frame, function __$__5() { return delay(__cb(_, __frame, 1, 10, function ___(__0, __1) { v = __1; result = (result * v); _(); }, true), val); }); }); }, true), { parallel: 2 }, function __4(_, val) { var v; var __frame = { name: "__4", line: 51 }; return __func(_, this, arguments, __4, 0, __frame, function __$__4() { return delay(__cb(_, __frame, 1, 10, function ___(__0, __1) { v = __1; result = (result * v); _(); }, true), val); }); }); }, true), 2, function __3(_, val) { var v; var __frame = { name: "__3", line: 43 }; return __func(_, this, arguments, __3, 0, __frame, function __$__3() { return delay(__cb(_, __frame, 1, 10, function ___(__0, __1) { v = __1; result = (result * v); _(); }, true), val); }); }); }, true), function __2(_, val) { var v; var __frame = { name: "__2", line: 37 }; return __func(_, this, arguments, __2, 0, __frame, function __$__2() { return delay(__cb(_, __frame, 1, 10, function ___(__0, __1) { v = __1; result = (result * v); _(); }, true), val); }); }); }, true), [1,2,3,4,], function __1(_, val) { var __frame = { name: "__1", line: 32 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() { return delay(__cb(_, __frame, 1, 20, function ___(__0, __1) { result = (result * __1); _(); }, true), val); }); }); });});

asyncTest("map", 9, function __2(_) { var result; var __frame = { name: "__2", line: 76 }; return __func(_, this, arguments, __2, 0, __frame, function __$__2() {
    return flows.map(__cb(_, __frame, 1, 14, function ___(__0, __8) { result = __8;


      deepEqual(result, [2,4,6,8,]);
      return [1,2,3,4,].map_(__cb(_, __frame, 5, 14, function ___(__0, __9) { result = __9;


        deepEqual(result, [2,4,6,8,]);
        return [1,2,3,4,].map_(__cb(_, __frame, 9, 14, function ___(__0, __10) { result = __10;


          deepEqual(result, [2,4,6,8,]);
          return [1,2,3,4,].map_(__cb(_, __frame, 13, 14, function ___(__0, __11) { result = __11;




            deepEqual(result, [2,4,6,8,]);
            return [1,2,3,4,].map_(__cb(_, __frame, 19, 14, function ___(__0, __12) { result = __12;


              deepEqual(result, [2,4,6,8,]);
              return sparse().map_(__cb(_, __frame, 23, 10, function ___(__0, __13) { result = __13;



                strictEqual(result.length, 10);
                strictEqual(dump(result), "/3:33/4:44/9:99");
                return sparse().map_(__cb(_, __frame, 29, 10, function ___(__0, __14) { result = __14;



                  strictEqual(result.length, 10);
                  strictEqual(dump(result), "/3:33/4:44/9:99");
                  start(); _(); }, true), -1, function __7(_, val, i) { var v; var __frame = { name: "__7", line: 105 }; return __func(_, this, arguments, __7, 0, __frame, function __$__7() { return delay(__cb(_, __frame, 1, 10, function ___(__0, __1) { v = __1; return _(null, ((i + ":") + v)); }, true), val); }); }); }, true), function __6(_, val, i) { var v; var __frame = { name: "__6", line: 99 }; return __func(_, this, arguments, __6, 0, __frame, function __$__6() { return delay(__cb(_, __frame, 1, 10, function ___(__0, __1) { v = __1; return _(null, ((i + ":") + v)); }, true), val); }); }); }, true), -1, function __5(_, val) { var __frame = { name: "__5", line: 95 }; return __func(_, this, arguments, __5, 0, __frame, function __$__5() { return delay(__cb(_, __frame, 1, 13, function ___(__0, __2) { var __1 = (2 * __2); return _(null, __1); }, true), val); }); }); }, true), { parallel: 2 }, function __4(_, val) { var __frame = { name: "__4", line: 91 }; return __func(_, this, arguments, __4, 0, __frame, function __$__4() { return delay(__cb(_, __frame, 1, 13, function ___(__0, __2) { var __1 = (2 * __2); return _(null, __1); }, true), val); }); }); }, true), 2, function __3(_, val) { var __frame = { name: "__3", line: 85 }; return __func(_, this, arguments, __3, 0, __frame, function __$__3() { return delay(__cb(_, __frame, 1, 13, function ___(__0, __2) { var __1 = (2 * __2); return _(null, __1); }, true), val); }); }); }, true), function __2(_, val) { var __frame = { name: "__2", line: 81 }; return __func(_, this, arguments, __2, 0, __frame, function __$__2() { return delay(__cb(_, __frame, 1, 13, function ___(__0, __2) { var __1 = (2 * __2); return _(null, __1); }, true), val); }); }); }, true), [1,2,3,4,], function __1(_, val) { var __frame = { name: "__1", line: 77 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() { return delay(__cb(_, __frame, 1, 13, function ___(__0, __2) { var __1 = (2 * __2); return _(null, __1); }, true), val); }); }); });});

asyncTest("filter", 9, function __3(_) { var result; var __frame = { name: "__3", line: 113 }; return __func(_, this, arguments, __3, 0, __frame, function __$__3() {
    return flows.filter(__cb(_, __frame, 1, 14, function ___(__0, __8) { result = __8;


      deepEqual(result, [1,3,]);
      return [1,2,3,4,].filter_(__cb(_, __frame, 5, 14, function ___(__0, __9) { result = __9;


        deepEqual(result, [1,3,]);
        return [1,2,3,4,].filter_(__cb(_, __frame, 9, 14, function ___(__0, __10) { result = __10;


          deepEqual(result, [1,3,]);
          return [1,2,3,4,].filter_(__cb(_, __frame, 13, 14, function ___(__0, __11) { result = __11;




            deepEqual(result, [1,3,]);
            return [1,2,3,4,].filter_(__cb(_, __frame, 19, 14, function ___(__0, __12) { result = __12;


              deepEqual(result, [1,3,]);
              return sparse().filter_(__cb(_, __frame, 23, 10, function ___(__0, __13) { result = __13;


                strictEqual(result.length, 2);
                deepEqual(result, [33,99,]);
                return sparse().filter_(__cb(_, __frame, 28, 10, function ___(__0, __14) { result = __14;


                  strictEqual(result.length, 2);
                  deepEqual(result, [33,99,]);
                  start(); _(); }, true), -1, function __7(_, val, i) { var __frame = { name: "__7", line: 141 }; return __func(_, this, arguments, __7, 0, __frame, function __$__7() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 % 2); return _(null, __1); }, true), val); }); }); }, true), function __6(_, val, i) { var __frame = { name: "__6", line: 136 }; return __func(_, this, arguments, __6, 0, __frame, function __$__6() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 % 2); return _(null, __1); }, true), val); }); }); }, true), -1, function __5(_, val) { var __frame = { name: "__5", line: 132 }; return __func(_, this, arguments, __5, 0, __frame, function __$__5() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 % 2); return _(null, __1); }, true), val); }); }); }, true), { parallel: 2 }, function __4(_, val) { var __frame = { name: "__4", line: 128 }; return __func(_, this, arguments, __4, 0, __frame, function __$__4() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 % 2); return _(null, __1); }, true), val); }); }); }, true), 2, function __3(_, val) { var __frame = { name: "__3", line: 122 }; return __func(_, this, arguments, __3, 0, __frame, function __$__3() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 % 2); return _(null, __1); }, true), val); }); }); }, true), function __2(_, val) { var __frame = { name: "__2", line: 118 }; return __func(_, this, arguments, __2, 0, __frame, function __$__2() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 % 2); return _(null, __1); }, true), val); }); }); }, true), [1,2,3,4,], function __1(_, val) { var __frame = { name: "__1", line: 114 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 % 2); return _(null, __1); }, true), val); }); }); });});

asyncTest("every true", 7, function __4(_) { var result; var __frame = { name: "__4", line: 148 }; return __func(_, this, arguments, __4, 0, __frame, function __$__4() {
    return flows.every(__cb(_, __frame, 1, 14, function ___(__0, __8) { result = __8;


      strictEqual(result, true);
      return [1,2,3,4,].every_(__cb(_, __frame, 5, 14, function ___(__0, __9) { result = __9;


        strictEqual(result, true);
        return [1,2,3,4,].every_(__cb(_, __frame, 9, 14, function ___(__0, __10) { result = __10;


          strictEqual(result, true);
          return [1,2,3,4,].every_(__cb(_, __frame, 13, 14, function ___(__0, __11) { result = __11;




            strictEqual(result, true);
            return [1,2,3,4,].every_(__cb(_, __frame, 19, 14, function ___(__0, __12) { result = __12;


              strictEqual(result, true);
              return sparse().every_(__cb(_, __frame, 23, 10, function ___(__0, __13) { result = __13;


                strictEqual(result, true);
                return sparse().every_(__cb(_, __frame, 27, 10, function ___(__0, __14) { result = __14;


                  strictEqual(result, true);
                  start(); _(); }, true), -1, function __7(_, val, i) { var __frame = { name: "__7", line: 175 }; return __func(_, this, arguments, __7, 0, __frame, function __$__7() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 > 30); return _(null, __1); }, true), val); }); }); }, true), function __6(_, val, i) { var __frame = { name: "__6", line: 171 }; return __func(_, this, arguments, __6, 0, __frame, function __$__6() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 > 30); return _(null, __1); }, true), val); }); }); }, true), -1, function __5(_, val) { var __frame = { name: "__5", line: 167 }; return __func(_, this, arguments, __5, 0, __frame, function __$__5() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 < 5); return _(null, __1); }, true), val); }); }); }, true), { parallel: 2 }, function __4(_, val) { var __frame = { name: "__4", line: 163 }; return __func(_, this, arguments, __4, 0, __frame, function __$__4() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 < 5); return _(null, __1); }, true), val); }); }); }, true), 2, function __3(_, val) { var __frame = { name: "__3", line: 157 }; return __func(_, this, arguments, __3, 0, __frame, function __$__3() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 < 5); return _(null, __1); }, true), val); }); }); }, true), function __2(_, val) { var __frame = { name: "__2", line: 153 }; return __func(_, this, arguments, __2, 0, __frame, function __$__2() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 < 5); return _(null, __1); }, true), val); }); }); }, true), [1,2,3,4,], function __1(_, val) { var __frame = { name: "__1", line: 149 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 < 5); return _(null, __1); }, true), val); }); }); });});

asyncTest("every false", 7, function __5(_) { var result; var __frame = { name: "__5", line: 181 }; return __func(_, this, arguments, __5, 0, __frame, function __$__5() {
    return flows.every(__cb(_, __frame, 1, 14, function ___(__0, __8) { result = __8;


      strictEqual(result, false);
      return [1,2,3,4,].every_(__cb(_, __frame, 5, 14, function ___(__0, __9) { result = __9;


        strictEqual(result, false);
        return [1,2,3,4,].every_(__cb(_, __frame, 9, 14, function ___(__0, __10) { result = __10;


          strictEqual(result, false);
          return [1,2,3,4,].every_(__cb(_, __frame, 13, 14, function ___(__0, __11) { result = __11;




            strictEqual(result, false);
            return [1,2,3,4,].every_(__cb(_, __frame, 19, 14, function ___(__0, __12) { result = __12;


              strictEqual(result, false);
              return sparse().every_(__cb(_, __frame, 23, 10, function ___(__0, __13) { result = __13;


                strictEqual(result, false);
                return sparse().every_(__cb(_, __frame, 27, 10, function ___(__0, __14) { result = __14;


                  strictEqual(result, false);
                  start(); _(); }, true), -1, function __7(_, val, i) { var __frame = { name: "__7", line: 208 }; return __func(_, this, arguments, __7, 0, __frame, function __$__7() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 > 40); return _(null, __1); }, true), val); }); }); }, true), function __6(_, val, i) { var __frame = { name: "__6", line: 204 }; return __func(_, this, arguments, __6, 0, __frame, function __$__6() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 > 40); return _(null, __1); }, true), val); }); }); }, true), -1, function __5(_, val) { var __frame = { name: "__5", line: 200 }; return __func(_, this, arguments, __5, 0, __frame, function __$__5() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 < 3); return _(null, __1); }, true), val); }); }); }, true), { parallel: 2 }, function __4(_, val) { var __frame = { name: "__4", line: 196 }; return __func(_, this, arguments, __4, 0, __frame, function __$__4() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 < 3); return _(null, __1); }, true), val); }); }); }, true), 2, function __3(_, val) { var __frame = { name: "__3", line: 190 }; return __func(_, this, arguments, __3, 0, __frame, function __$__3() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 < 3); return _(null, __1); }, true), val); }); }); }, true), function __2(_, val) { var __frame = { name: "__2", line: 186 }; return __func(_, this, arguments, __2, 0, __frame, function __$__2() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 < 3); return _(null, __1); }, true), val); }); }); }, true), [1,2,3,4,], function __1(_, val) { var __frame = { name: "__1", line: 182 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 < 3); return _(null, __1); }, true), val); }); }); });});

asyncTest("some true", 7, function __6(_) { var result; var __frame = { name: "__6", line: 214 }; return __func(_, this, arguments, __6, 0, __frame, function __$__6() {
    return flows.some(__cb(_, __frame, 1, 14, function ___(__0, __8) { result = __8;


      strictEqual(result, true);
      return [1,2,3,4,].some_(__cb(_, __frame, 5, 14, function ___(__0, __9) { result = __9;


        strictEqual(result, true);
        return [1,2,3,4,].some_(__cb(_, __frame, 9, 14, function ___(__0, __10) { result = __10;


          strictEqual(result, true);
          return [1,2,3,4,].some_(__cb(_, __frame, 13, 14, function ___(__0, __11) { result = __11;




            strictEqual(result, true);
            return [1,2,3,4,].some_(__cb(_, __frame, 19, 14, function ___(__0, __12) { result = __12;


              strictEqual(result, true);
              return sparse().some_(__cb(_, __frame, 23, 10, function ___(__0, __13) { result = __13;


                strictEqual(result, true);
                return sparse().some_(__cb(_, __frame, 27, 10, function ___(__0, __14) { result = __14;


                  strictEqual(result, true);
                  start(); _(); }, true), -1, function __7(_, val, i) { var __frame = { name: "__7", line: 241 }; return __func(_, this, arguments, __7, 0, __frame, function __$__7() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 > 30); return _(null, __1); }, true), val); }); }); }, true), function __6(_, val, i) { var __frame = { name: "__6", line: 237 }; return __func(_, this, arguments, __6, 0, __frame, function __$__6() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 > 30); return _(null, __1); }, true), val); }); }); }, true), -1, function __5(_, val) { var __frame = { name: "__5", line: 233 }; return __func(_, this, arguments, __5, 0, __frame, function __$__5() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 < 3); return _(null, __1); }, true), val); }); }); }, true), { parallel: 2 }, function __4(_, val) { var __frame = { name: "__4", line: 229 }; return __func(_, this, arguments, __4, 0, __frame, function __$__4() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 < 3); return _(null, __1); }, true), val); }); }); }, true), 2, function __3(_, val) { var __frame = { name: "__3", line: 223 }; return __func(_, this, arguments, __3, 0, __frame, function __$__3() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 < 3); return _(null, __1); }, true), val); }); }); }, true), function __2(_, val) { var __frame = { name: "__2", line: 219 }; return __func(_, this, arguments, __2, 0, __frame, function __$__2() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 < 3); return _(null, __1); }, true), val); }); }); }, true), [1,2,3,4,], function __1(_, val) { var __frame = { name: "__1", line: 215 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 < 3); return _(null, __1); }, true), val); }); }); });});

asyncTest("some false", 7, function __7(_) { var result; var __frame = { name: "__7", line: 247 }; return __func(_, this, arguments, __7, 0, __frame, function __$__7() {
    return flows.some(__cb(_, __frame, 1, 14, function ___(__0, __8) { result = __8;


      strictEqual(result, false);
      return [1,2,3,4,].some_(__cb(_, __frame, 5, 14, function ___(__0, __9) { result = __9;


        strictEqual(result, false);
        return [1,2,3,4,].some_(__cb(_, __frame, 9, 14, function ___(__0, __10) { result = __10;


          strictEqual(result, false);
          return [1,2,3,4,].some_(__cb(_, __frame, 13, 14, function ___(__0, __11) { result = __11;




            strictEqual(result, false);
            return [1,2,3,4,].some_(__cb(_, __frame, 19, 14, function ___(__0, __12) { result = __12;


              strictEqual(result, false);
              return sparse().some_(__cb(_, __frame, 23, 10, function ___(__0, __13) { result = __13;


                strictEqual(result, false);
                return sparse().some_(__cb(_, __frame, 27, 10, function ___(__0, __14) { result = __14;


                  strictEqual(result, false);
                  start(); _(); }, true), -1, function __7(_, val, i) { var __frame = { name: "__7", line: 274 }; return __func(_, this, arguments, __7, 0, __frame, function __$__7() { return delay(__cb(_, __frame, 1, 11, function ___(__0, __2) { var __1 = !((__2 > 20)); return _(null, __1); }, true), val); }); }); }, true), function __6(_, val, i) { var __frame = { name: "__6", line: 270 }; return __func(_, this, arguments, __6, 0, __frame, function __$__6() { return delay(__cb(_, __frame, 1, 11, function ___(__0, __2) { var __1 = !((__2 > 20)); return _(null, __1); }, true), val); }); }); }, true), -1, function __5(_, val) { var __frame = { name: "__5", line: 266 }; return __func(_, this, arguments, __5, 0, __frame, function __$__5() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 < 0); return _(null, __1); }, true), val); }); }); }, true), { parallel: 2 }, function __4(_, val) { var __frame = { name: "__4", line: 262 }; return __func(_, this, arguments, __4, 0, __frame, function __$__4() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 < 0); return _(null, __1); }, true), val); }); }); }, true), 2, function __3(_, val) { var __frame = { name: "__3", line: 256 }; return __func(_, this, arguments, __3, 0, __frame, function __$__3() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 < 0); return _(null, __1); }, true), val); }); }); }, true), function __2(_, val) { var __frame = { name: "__2", line: 252 }; return __func(_, this, arguments, __2, 0, __frame, function __$__2() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 < 0); return _(null, __1); }, true), val); }); }); }, true), [1,2,3,4,], function __1(_, val) { var __frame = { name: "__1", line: 248 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() { return delay(__cb(_, __frame, 1, 9, function ___(__0, __2) { var __1 = (__2 < 0); return _(null, __1); }, true), val); }); }); });});

asyncTest("reduce", 3, function __8(_) { var result; var __frame = { name: "__8", line: 280 }; return __func(_, this, arguments, __8, 0, __frame, function __$__8() {
    return flows.reduce(__cb(_, __frame, 1, 14, function ___(__0, __4) { result = __4;


      strictEqual(result, 24);
      return [1,2,3,4,].reduce_(__cb(_, __frame, 5, 14, function ___(__0, __5) { result = __5;


        strictEqual(result, 24);
        return sparse().reduce_(__cb(_, __frame, 9, 14, function ___(__0, __6) { result = __6;


          strictEqual(result, "/33/44/99");
          start(); _(); }, true), function __3(_, v, val) { var __frame = { name: "__3", line: 289 }; return __func(_, this, arguments, __3, 0, __frame, function __$__3() { return delay(__cb(_, __frame, 1, 19, function ___(__0, __2) { var __1 = ((v + "/") + __2); return _(null, __1); }, true), val); }); }, ""); }, true), function __2(_, v, val) { var __frame = { name: "__2", line: 285 }; return __func(_, this, arguments, __2, 0, __frame, function __$__2() { return delay(__cb(_, __frame, 1, 13, function ___(__0, __2) { var __1 = (v * __2); return _(null, __1); }, true), val); }); }, 1); }, true), [1,2,3,4,], function __1(_, v, val) { var __frame = { name: "__1", line: 281 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() { return delay(__cb(_, __frame, 1, 13, function ___(__0, __2) { var __1 = (v * __2); return _(null, __1); }, true), val); }); }, 1); });});

asyncTest("reduceRight", 3, function __9(_) { var result; var __frame = { name: "__9", line: 295 }; return __func(_, this, arguments, __9, 0, __frame, function __$__9() {
    return flows.reduceRight(__cb(_, __frame, 1, 14, function ___(__0, __4) { result = __4;


      strictEqual(result, 24);
      return [1,2,3,4,].reduceRight_(__cb(_, __frame, 5, 14, function ___(__0, __5) { result = __5;


        strictEqual(result, 24);
        return sparse().reduceRight_(__cb(_, __frame, 9, 14, function ___(__0, __6) { result = __6;


          strictEqual(result, "/99/44/33");
          start(); _(); }, true), function __3(_, v, val) { var __frame = { name: "__3", line: 304 }; return __func(_, this, arguments, __3, 0, __frame, function __$__3() { return delay(__cb(_, __frame, 1, 19, function ___(__0, __2) { var __1 = ((v + "/") + __2); return _(null, __1); }, true), val); }); }, ""); }, true), function __2(_, v, val) { var __frame = { name: "__2", line: 300 }; return __func(_, this, arguments, __2, 0, __frame, function __$__2() { return delay(__cb(_, __frame, 1, 13, function ___(__0, __2) { var __1 = (v * __2); return _(null, __1); }, true), val); }); }, 1); }, true), [1,2,3,4,], function __1(_, v, val) { var __frame = { name: "__1", line: 296 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() { return delay(__cb(_, __frame, 1, 13, function ___(__0, __2) { var __1 = (v * __2); return _(null, __1); }, true), val); }); }, 1); });});

asyncTest("sort", 4, function __10(_) { var array; var __frame = { name: "__10", line: 310 }; return __func(_, this, arguments, __10, 0, __frame, function __$__10() {
    array = [1,2,3,4,];
    return flows.sort(__cb(_, __frame, 2, 1, function __$__10() {


      deepEqual(array, [1,2,3,4,], "In order array sort ok");
      return array.sort_(__cb(_, __frame, 6, 1, function __$__10() {


        deepEqual(array, [1,2,3,4,], "In order array sort ok");
        array = [4,3,2,1,];
        return array.sort_(__cb(_, __frame, 11, 1, function __$__10() {


          deepEqual(array, [1,2,3,4,], "Reverse array sort ok");
          array = [3,1,2,4,];
          return array.sort_(__cb(_, __frame, 16, 1, function __$__10() {


            deepEqual(array, [1,2,3,4,], "Random array sort ok");
            start(); _(); }, true), function __4(_, a, b) { var __frame = { name: "__4", line: 326 }; return __func(_, this, arguments, __4, 0, __frame, function __$__4() { return delay(__cb(_, __frame, 1, 9, _, true), (a - b)); }); }); }, true), function __3(_, a, b) { var __frame = { name: "__3", line: 321 }; return __func(_, this, arguments, __3, 0, __frame, function __$__3() { return delay(__cb(_, __frame, 1, 9, _, true), (a - b)); }); }); }, true), function __2(_, a, b) { var __frame = { name: "__2", line: 316 }; return __func(_, this, arguments, __2, 0, __frame, function __$__2() { return delay(__cb(_, __frame, 1, 9, _, true), (a - b)); }); }); }, true), array, function __1(_, a, b) { var __frame = { name: "__1", line: 312 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() { return delay(__cb(_, __frame, 1, 9, _, true), (a - b)); }); }); });});

asyncTest("collectAll", 4, function __11(_) { var total, peak, count, results;




  function doIt(i) {
    return function __1(_) { var __frame = { name: "__1", line: 338 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() {
        count++;
        peak = Math.max(count, peak);
        return delay(__cb(_, __frame, 3, 11, function ___(__0, __1) { total = (__1 + total);
          count--;
          return _(null, (2 * i)); }, true), i); }); }; }; var __frame = { name: "__11", line: 332 }; return __func(_, this, arguments, __11, 0, __frame, function __$__11() { total = 0; peak = 0; count = 0;



    return flows.spray([doIt(1),doIt(2),doIt(3),]).collectAll(__cb(_, __frame, 15, 15, function ___(__0, __1) { results = __1;
      equal(total, 6);
      ok((peak >= 2));
      equal(count, 0);
      deepEqual(results, [2,4,6,]);
      start(); _(); }, true)); });});

asyncTest("collectOne", 4, function __12(_) { var total, peak, count, result;




  function doIt(i) {
    return function __1(_) { var __frame = { name: "__1", line: 360 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() {
        count++;
        peak = Math.max(count, peak);
        return delay(__cb(_, __frame, 3, 11, function ___(__0, __1) { total = (__1 + total);
          count--;
          return _(null, (2 * i)); }, true), i); }); }; }; var __frame = { name: "__12", line: 354 }; return __func(_, this, arguments, __12, 0, __frame, function __$__12() { total = 0; peak = 0; count = 0;



    return flows.spray([doIt(1),doIt(2),doIt(3),]).collectOne(__cb(_, __frame, 15, 14, function ___(__0, __1) { result = __1;
      ok(((total == 1) || (total == 2)));
      ok((peak >= 2));
      ok((count > 0));
      ok(((result == 2) || (result == 4)));
      start(); _(); }, true)); });});

asyncTest("collectAll with limit", 1, function __13(_) { var total, peak, count, results;




  function doIt(i) {
    return function __1(_) { var __frame = { name: "__1", line: 382 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() {
        count++;
        peak = Math.max(count, peak);
        return delay(__cb(_, __frame, 3, 11, function ___(__0, __1) { total = (__1 + total);
          count--;
          return _(null, (2 * i)); }, true), i); }); }; }; var __frame = { name: "__13", line: 376 }; return __func(_, this, arguments, __13, 0, __frame, function __$__13() { total = 0; peak = 0; count = 0;



    return flows.spray([doIt(1),doIt(2),doIt(3),], 2).collectAll(__cb(_, __frame, 15, 15, function ___(__0, __1) { results = __1;
      deepEqual([total,peak,count,results,], [6,2,0,[2,4,6,],]);
      start(); _(); }, true)); });});

asyncTest("contexts", 3, function __14(_) { var result;
  function testContext(_, x) { var y; var __frame = { name: "testContext", line: 396 }; return __func(_, this, arguments, testContext, 0, __frame, function __$testContext() {
      flows.setContext({
        val: x });

      return delay(__cb(_, __frame, 4, 10, function ___(__0, __1) { y = __1;
        strictEqual(y, (2 * flows.getContext().val));
        return _(null, (y + 1)); }, true), (2 * x)); }); }; var __frame = { name: "__14", line: 395 }; return __func(_, this, arguments, __14, 0, __frame, function __$__14() {












    return flows.spray([function __1(_) { var __frame = { name: "__1", line: 407 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() { return testContext(__cb(_, __frame, 1, 9, _, true), 3); }); },function __2(_) { var __frame = { name: "__2", line: 411 }; return __func(_, this, arguments, __2, 0, __frame, function __$__2() { return testContext(__cb(_, __frame, 1, 9, _, true), 5); }); },]).collectAll(__cb(_, __frame, 20, 14, function ___(__0, __3) { result = __3;
      deepEqual(result, [7,11,]);
      start(); _(); }, true)); });});


asyncTest("futures multiplex", 3, function __15(_) { var result1, result2, result3, f1, f10;




  function doIt(future, _) { var __frame = { name: "doIt", line: 425 }; return __func(_, this, arguments, doIt, 1, __frame, function __$doIt() {
      return future(__cb(_, __frame, 1, 12, function ___(__0, __1) { result1 = (__1 + result1);
        return future(__cb(_, __frame, 2, 12, function ___(__0, __2) { result2 = (__2 + result2);
          return delay(__cb(_, __frame, 3, 2, function __$doIt() {
            return future(__cb(_, __frame, 4, 12, function ___(__0, __3) { result3 = (__3 + result3); _(); }, true)); }, true)); }, true)); }, true)); }); }; var __frame = { name: "__15", line: 420 }; return __func(_, this, arguments, __15, 0, __frame, function __$__15() { result1 = 0; result2 = 0; result3 = 0;


    f1 = delay(null, 1);
    f10 = delay(null, 10);

    return flows.collect(__cb(_, __frame, 15, 1, function __$__15() {

      deepEqual(result1, 12);
      deepEqual(result2, 12);
      deepEqual(result3, 12);
      start(); _(); }, true), [doIt(f1),doIt(f10),doIt(f1),]); });});