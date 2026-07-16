import { useState } from "react";
import './CharacterCard.css'

interface HiraganaCardProps {
  character: string;
  romaji: string;
}

function CharacterCard({
  character,
  romaji
}: HiraganaCardProps) {
  const [showRomaji, setShowRomaji] = useState(false);

  return (
    <button className="character-card"
      onClick={() => setShowRomaji(!showRomaji)}>
      {showRomaji ? romaji : character}
    </button>
  )
}

export default CharacterCard;