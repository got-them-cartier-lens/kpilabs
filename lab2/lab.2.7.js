'use strict'

const phonebook = [
    { name: 'Ilya', phone: '+380730452190' },
        { name: 'Idiot', phone: '+380654537654' },
        { name: 'Someone', phone: '+380675489000'}
]

const findPhoneByName = (name) => {
    for (const record of phonebook) {
        if (record.name === name) {
            return record.phone
        }
    }
}
console.log(findPhoneByName('Ilya'));
console.log(findPhoneByName('Idiot'));
console.log(findPhoneByName('Someone'));

module.exports = { phonebook, findPhoneByName };
