import * as StarWarsI from './The Phantom Menace.json'
import * as StarWarsII from './Attack of the Clones.json'
import * as StarWarsIII from './Revenge of the Sith.json'

const subs = [
  {
    id: 'sw1',
    title: 'The Phantom Menace',
    subs: StarWarsI.default,
  },
  {
    id: 'sw2',
    title: 'Attack of the Clones',
    subs: StarWarsII.default,
  },
  {
    id: 'sw3',
    title: 'Revenge of the Sith',
    subs: StarWarsIII.default,
  },
]

export default subs
