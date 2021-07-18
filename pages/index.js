import MainGrid from '../src/components/MainGrid';
import React, { useState } from 'react';
import Box from '../src/components/Box';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommuns.js'
import { ProfileRelationsBoxWrapper } from '../src/components/profileRelations';
function ProfileSideBar(props) {
  return (
    <Box as='aside' >
      <img src={`https://github.com/${props.githubUsers}.png`} style={{ borderRadius: '8px' }} />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUsers}`}>
          @{props.githubUsers}
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}
export default function Home() {
  const githubUsers = 'marceloths12';
  const [comunidades, setComunidades] = React.useState([{
    id: '1231231',
    title: 'Eu odeio acordar cedo',
    image: 'data:image/jpeg;base64,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'
  }])
  const PessoasFavoritas =
    [
      'juunegreiros', 'omariosouto',
      'peas', 'rafaballerini',
      'marcobrunodev', 'felipefialho'
    ]
  return (
    <>
      <AlurakutMenu githubUser={githubUsers} />
      < MainGrid >
        <div className="profileArea" profilearea={{ gridArea: 'profileArea' }} >
          <ProfileSideBar githubUsers={githubUsers} />
        </div>
        <div className="welcomeArea" profilearea={{ gridArea: 'welcomeArea' }} >
          <Box>
            <h1 className="title" >
              Bem vindo
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle" >O que você deseja fazer?</h2>
            <form onSubmit={function handleCriaComunidade(e) {
              e.preventDefault();
              const dadosDoForm = new FormData(e.target);
              const comunidade = {
                title: dadosDoForm.get('title'),
                image: dadosDoForm.get('imaage'),
              }
              const comunidadesAtualizadas = [...comunidades, comunidade];
              setComunidades(comunidadesAtualizadas);
            }}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text" />
              </div>
              <div>
                <input
                  placeholder="Coloque uma url para usarmos de capa."
                  name="title"
                  aria-label="Coloque uma url para usarmos de capa."
                  type="text" />
              </div>
              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" profilearea={{ gridArea: 'profileRelationArea' }} >
          <ProfileRelationsBoxWrapper>
            <h2 className='smallTitle'>
              Comunidades ({comunidades.length})
            </h2>
            <ul>
              {
                comunidades.map((itemAtual) => {
                  return (
                    <li key={itemAtual.id}>
                      <a href={`/users/${itemAtual.title}`}>
                        <img src={`${itemAtual.image}`} />
                        <span>{itemAtual.title}</span>
                      </a>
                    </li>
                  )
                })
              }
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper >
            <h2 className='smallTitle'>
              Pessoas da comunidade ({PessoasFavoritas.length})
            </h2>
            <ul>
              {
                PessoasFavoritas.map((itemAtual) => {
                  return (
                    <li key={itemAtual}>
                      <a href={`/users/${itemAtual}`} >
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