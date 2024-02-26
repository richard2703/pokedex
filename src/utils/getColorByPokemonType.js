import { POKEMON_TYPE_COLORS } from "./constants";

const getColorByPokemoType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()]

export default getColorByPokemoType;