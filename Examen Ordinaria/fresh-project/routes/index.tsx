import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios"
import CharacterList from "../components/CharacterList.tsx";

type Character = {
  id: string,
  name: string,
  image: string,
  favorite: boolean,
}

type Data = {
  characters: Character[],
}

type CharacterAPI = Character[];

export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Data>) => {
    const headers = new Headers()
      try {
      const response = await axios.get<CharacterAPI>("https://hp-api.onrender.com/api/characters")
      const chars = response.data;

      headers.append("Set-Cookie", "favorite=false; path=/");
      headers.append("location", "/favorites");
      return ctx.render({characters: chars});
    }catch(e){
      return new Response(`Error: ${e}`)
    }
  }
}

const Home = (props: PageProps<Data>) => <CharacterList characters={props.data.characters}/>

export default Home;