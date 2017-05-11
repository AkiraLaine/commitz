const shell = require('shelljs')

shell.exec('git shortlog HEAD -sn')