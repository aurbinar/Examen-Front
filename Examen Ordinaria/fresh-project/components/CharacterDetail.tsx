import { FunctionComponent } from "preact/src/index.d.ts";

type Character = {
  id: string,
  name: string,
  image: string,
  house: string,
  alive: boolean,
}

type Props = {
  character: Character
}

const CharacterDetail: FunctionComponent<Props> = (props) => {
  const ch = props.character

  return(
    <div class="ch-card">
      <img src={ch.image} alt={ch.name} /><br/>
      <strong>{ch.name}</strong>
      <p>Casa: {ch.house}</p>
      {ch.alive && <p>Vivo</p>}
      {!ch.alive && <p>Muerto</p>}
      <a href="/">Volver</a>
    </div>
  )
}

export default CharacterDetail;