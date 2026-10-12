'use strict'

const fn = () => {
    const objectname1 = ('Ilya');
    let objectname2 = ('Dasha');
    objectname1.name = ('Danya')
    objectname2.name = ('Slavic')

    objectname2 = {name: 'Vova'};

};

module.exports = { fn };