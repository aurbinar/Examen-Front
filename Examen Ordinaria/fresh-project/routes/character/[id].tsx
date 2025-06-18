import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import CharacterDetail from "../../components/CharacterDetail.tsx";


type Character = {
  id: string,
  name: string,
  image: string,
  house: string,
  alive: boolean,
}

type Data = {
  character: Character
}

type CharacterAPI = Character[];

export const handler: Handlers = {
  GET: async(_req: Request, ctx: FreshContext<unknown, Data>) => {
    const {id} = ctx.params;

    try{
      const response = await axios.get<CharacterAPI>(`https://hp-api.onrender.com/api/character/${id}`);
      const char = response.data[0]

      return ctx.render({character: char});
    
    }catch(e){
      return new Response(`Error: ${e}`)
    }
  }
}

const Page = (props: PageProps<Data>) => <CharacterDetail character={props.data.character}/>

export default Page;