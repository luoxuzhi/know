// moduleA.js
export default () => { console.log('function default') }
// moduleB.js
export const one = () => { console.log('function one')}
export const two = () => { console.log('function two')}
// index.js
import('./moduleA.js').then(ret => { ret.default() })
import('./moduleB.js').then((one,tow) => { one();two() })