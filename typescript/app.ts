import {Spacecraft, Containership} from './base-ships'
import {MilleniumFalcon} from './starfighters'

import * as _ from 'lodash' // Para definição e checagem de tipos, muito importante
console.log(_.pad("Typescrits Examples", 40, "="))



let ship = new Spacecraft('hyperdrive')
ship.jumIntoHyperspace()



let falcon = new MilleniumFalcon()
falcon.jumIntoHyperspace()



let goodForTheJob = ( ship: Containership ) =>  ship.cargoContainers > 2
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'yes' : 'no'}`)
