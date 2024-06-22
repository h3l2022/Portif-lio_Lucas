import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from './styles'


const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Cum mollitia deserunt iusto rerum porro beatae qui quia exercitationem!
       Dolores excepturi, omnis veritatis assumenda maxime numquam nesciunt!
       Autem doloribus soluta sint?
    </Paragrafo>
    <GithubSecao>
    <img src="https://github-readme-stats.vercel.app/api?username=h3l2022&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=h3l2022&layout=compact&langs_count=7&theme=dracula"/>
    </GithubSecao>
  </section>
)
 export default Sobre
