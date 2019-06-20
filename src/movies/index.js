import * as StarWarsI from './The Phantom Menace.json'
import * as StarWarsII from './Attack of the Clones.json'
import * as StarWarsIII from './Revenge of the Sith.json'

const subs = [
  {
    id: 'sw1',
    title: 'I Star Wars',
    subs: StarWarsI.default,
  },
  {
    id: 'sw2',
    title: 'II Star Wars',
    subs: StarWarsII.default,
  },
  {
    id: 'sw3',
    title: 'III Star Wars',
    subs: StarWarsIII.default,
  },
]

export default subs
