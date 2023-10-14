const properties = require ('@babel/plugin-proposal-class-properties')
const decorators = require ('@babel/plugin-proposal-decorators')
const spread     = require ('@babel/plugin-proposal-object-rest-spread')

const presets = [[
  '@babel/preset-env',
  {
    targets : {
      esmodules : false,
      node      : 10
    },
    useBuiltIns : 'usage',
    modules     : false
  }
]]

const plugins = [
  [decorators, { legacy : true }],
  [properties, { loose  : true }],
  [spread]
]

module.exports = { presets, plugins };
