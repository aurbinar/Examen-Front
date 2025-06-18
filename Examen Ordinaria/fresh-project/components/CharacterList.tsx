import { FunctionComponent } from "preact";
import CharacterCard from "./CharacterCard.tsx"

type Character = {
  id: string,
  name: string,
  image: string,
}

type Props = {
  characters: Character[],
}


const CharacterList: FunctionComponent<Props> = (props) => {
  const list = props.characters

  return (
    <>
    <ul class="list">
      {list.map((ch) => (
        <li key={ch.id}><CharacterCard character={ch}/></li>
      ))}
    </ul>
    </>
  )
}

export default CharacterList;