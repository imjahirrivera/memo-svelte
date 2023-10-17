// const cartasIni = ['😴', '😬', '🫠', '😵', '🥴', '🤗']
const carasIni = ['😉', '😬', '😍', '🙃', '😂', '🤗']
const frutasIni = ['🍎', '🍐', '🍊', '🍓', '🍌', '🍇']
const animalesIni = ['🐶', '🐱', '🐹', '🦁', '🐷', '🐯']

const cartasIni = [[...carasIni], [...frutasIni], [...animalesIni]]

export const suffleCartas = (opc) => [...cartasIni[opc], ...cartasIni[opc]].sort(() => Math.random() - 0.5)
