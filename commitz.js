#!/usr/bin/env node
var shell = require('shelljs')

shell.exec('git shortlog HEAD -sn')