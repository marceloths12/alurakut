import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommuns.js'
import { ProfileRelationsBoxWrapper } from '../src/components/profileRelations';
function ProfileSideBar(props) {
  return (
    <Box >
      <img src={`https://github.com/${props.githubUsers}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  );
}
export default function Home() {
  const githubUsers = 'marceloths12'
  const PessoasFavoritas =
    [
      'juunegreiros', 'omariosouto',
      'peas', 'rafaballerini',
      'marcobrunodev', 'felipefialho'
    ]
  return (
    <>
      <AlurakutMenu />
      < MainGrid >
        <div className="profileArea" profileArea={{ gridArea: 'profileArea' }} >
          <ProfileSideBar githubUsers={githubUsers} />
        </div>
        <div className="welcomeArea" profileArea={{ gridArea: 'welcomeArea' }} >
          <Box>
            <h1 className="title" >
              Bem vindo
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationsArea" profileArea={{ gridArea: 'profileRelationArea' }} >
          <ProfileRelationsBoxWrapper >
            <h2 className='smallTitle'>
              Pessoas da comunidade ({PessoasFavoritas.length})
            </h2>
            <ul>
              {
                PessoasFavoritas.map((itemAtual) => {
                  return (
                    <li>
                      <a href={`/users/${itemAtual}`} key={itemAtual}>
                        <img src={`https://github.com/${itemAtual}.png`} />
                        <span>{itemAtual}</span>
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </ MainGrid>
    </>
  );
}