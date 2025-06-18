import { FunctionComponent } from "preact";

type Character = {
  id: string,
  name: string,
  image: string,
}

type Props = {
  character: Character,
}

const CharacterCard: FunctionComponent<Props> = (props) => {
  const ch = props.character

  return (
    <div class="card">
      <img  src={ch.image} width="80" alt={ch.name} href={`/character/${ch.id}`}/>
      <a href={`/character/${ch.id}`}>{ch.name}</a>
    </div>
  )
}

export default CharacterCard;