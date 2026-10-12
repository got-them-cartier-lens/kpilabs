'use strict'

const phonebookHash = {
    'Ilya' : '+380730452190',
    'Idiot' : '+380654537654' ,
    'Someone' : '+380675489000'
};

const findPhoneByNameHash = (name) => phonebookHash[name]; 
console.log(findPhoneByNameHash('Ilya'))
console.log(findPhoneByNameHash('Idiot'))
console.log(findPhoneByNameHash('Someone'))

module.exports = { phonebookHash, findPhoneByNameHash };