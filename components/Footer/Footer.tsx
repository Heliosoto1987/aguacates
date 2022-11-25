import React from 'react'
import Link from 'next/link'
import { Segment, Container, Grid, List, Header } from 'semantic-ui-react'

const Footer = () => (
  <Segment
    vertical
    as="footer"
    style={{
      padding: '4em 0em',
      marginTop: '3em',
      borderTop: '1px solid #f2f2f2',
    }}
  >
    <Container text>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as="h4" content="Nosotros" />
            <List>
              <List.Item>
                <Link href="/about">
                  <div>Conoce más</div>
                </Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as="h4" content="Servicios" />
            <List>
              <List.Item>
                <Link href="/">
                  <div>Todos los productos</div>
                </Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4">Hecho para</Header>
            <p>
              <Link href="https://platzi.com/">
                Platzi y su curso de Next.JS
              </Link>{' '}
              de Platzi dictado por{' '}
              <Link href="https://twitter.com/jonalvarezz">@jonalvarezz</Link>
            </p>
            <List horizontal style={{ display: 'flex' }}>
              <List.Item
                icon="twitter"
                style={{ display: 'flex' }}
                content={
                  <Link href="https://twitter.com/jonalvarezz">Twitter</Link>
                }
              />
              <List.Item
                icon="github"
                style={{ display: 'flex' }}
                content={
                  <Link href="https://github.com/jonalvarezz/platzi-nextjs">
                    GitHub
                  </Link>
                }
              />
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="colophon">
        <p className="colophon-entry">
          Icons made by{' '}
          <Link
            target="_blank"
            href="https://www.flaticon.com/authors/freepik"
            title="Freepik"
          >
            Freepik
          </Link>
          {' from '}
          <Link
            target="_blank"
            href="https://www.flaticon.com/"
            title="Flaticon"
          >
            www.flaticon.com
          </Link>
        </p>
        <p className="colophon-entry">
          Avocado images taken from{' '}
          <Link
            className="acnor"
            target="_blank"
            href="https://www.californiaavocado.com/avocado101/avocado-varieties"
            title="California Avocado"
          >
            Avocado 101
          </Link>
          {' at '}
          <Link
            target="_blank"
            href="https://www.californiaavocado.com"
            title="Flaticon"
          >
            California Avocado
          </Link>
        </p>
      </div>
    </Container>

    <style jsx>{`
      .colophon {
        text-align: center;
        margin-top: 3.2rem;
        font-size: 0.8rem;
      }
      .colophon-entry {
        color: grey;
        margin-bottom: 0;
      }
    `}</style>
  </Segment>
)

export default Footer
