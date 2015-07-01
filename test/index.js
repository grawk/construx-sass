/*───────────────────────────────────────────────────────────────────────────*\
 │  Copyright (C) 2015 eBay Software Foundation                                │
 │                                                                             │
 │hh ,'""`.                                                                    │
 │  / _  _ \  Licensed under the Apache License, Version 2.0 (the "License");  │
 │  |(@)(@)|  you may not use this file except in compliance with the License. │
 │  )  __  (  You may obtain a copy of the License at                          │
 │ /,'))((`.\                                                                  │
 │(( ((  )) ))    http://www.apache.org/licenses/LICENSE-2.0                   │
 │ `\ `)(' /'                                                                  │
 │                                                                             │
 │   Unless required by applicable law or agreed to in writing, software       │
 │   distributed under the License is distributed on an "AS IS" BASIS,         │
 │   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  │
 │   See the License for the specific language governing permissions and       │
 │   limitations under the License.                                            │
 \*───────────────────────────────────────────────────────────────────────────*/
/*global describe, it, beforeEach, afterEach*/

'use strict';


var test = require('tap').test,
  path = require('path'),
  Sass = require(path.resolve(__dirname, '..')),
  sass = Sass({}),
  fs = require('fs');

test('construx-sass', function (t) {

    t.test('processes a good sass file', function (t) {
        t.plan(1);
        //get good star file
        fs.readFile(path.resolve(__dirname, 'css/good.scss'), function (err, data) {

            sass(data, {paths: [path.resolve(__dirname, 'css')], context: {name: 'good.css'}}, function (err, compiled) {
                t.ok(compiled.indexOf('4D926F') !== -1);
                t.end();
            });

        });

    });

    t.test('processes a bad sass file', function (t) {
        t.plan(1);
        //get bad star file
        fs.readFile(path.resolve(__dirname, 'css/bad.scss'), function (err, data) {
            sass(data, {paths: '', context: {name: 'bad.css'}}, function (err, compiled) {
                t.ok(err.name === 'Error');
                t.end();
            });

        });

    });

});