import { hiragana } from "../../hiragana";
import CharacterCard from "../CharacterCard/CharacterCard"
import './CharacterTable.css'

function CharacterTable() {

  return (
    <div className="character-container">
      {hiragana.map((item) =>(
        <CharacterCard
          key={item.char}
          character={item.char}
          romaji={item.romaji}
          />
      ))}
    </div>
  )
}

export default CharacterTable;