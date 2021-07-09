import {
  Container,
  Heading,
  Flex,
  Button,
  Box,
  Grid,
  Image,
  Text
} from 'theme-ui'
import theme from '@hackclub/theme'
import Sparkles from '../components/sparkles'
import colours from '../lib/colours'
import names from '../lib/names.json'
import { useState } from 'react'
import tt from 'tinytime'

export default function App({ country, countryNotFound }) {
  const [formOpen, setFormOpen] = useState(false)
  return (
    <>
      <Box sx={{ bg: 'black', display: !formOpen ? 'block' : 'none' }}>
        <Box
          sx={{
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            minHeight: '100vh',
            justifyContent: 'center',
            backgroundImage:
              ' linear-gradient(180deg, rgba(1,28,54,0.9199054621848739) 0%, rgba(1,28,54,0.8906897759103641) 100%), url(https://www.countryfaq.com/wp-content/uploads/2020/11/list-of-countries-and-their-flags-1400x780.png)'
          }}
        >
          <Box>
            <Heading sx={{ fontSize: ['7vw', '3vw'], textShadow: 'card' }}>
              {countryNotFound ? (
                'Represent your country in the'
              ) : (
                <>Represent {country.full} in the</>
              )}
            </Heading>
            <Heading
              sx={{
                fontSize: ['30vw', '15vw'],
                marginBlockStart: '0em',
                marginBlockEnd: '0em',
                lineHeight: '0.9',
                color: countryNotFound
                  ? 'green'
                  : country.colours[0].toLowerCase().trim(),
                textShadow: 'card'
              }}
            >
              Hacker
            </Heading>
            <Heading
              sx={{
                fontSize: ['30vw', '15vw'],
                marginBlockStart: '0em',
                marginBlockEnd: '0em',
                lineHeight: '0.9',
                color: countryNotFound
                  ? 'yellow'
                  : (country.colours[1] === undefined
                      ? country.colours[0].toLowerCase() === 'red'
                        ? 'white'
                        : country.colours[0].toLowerCase()
                      : country.colours[1].toLowerCase()
                    ).trim(),
                textShadow: 'card'
              }}
            >
              Games
            </Heading>
            <Heading sx={{ fontSize: ['9vw', '3vw'], textShadow: 'card' }}>
              From July 17th to July 22nd, all online.
            </Heading>
            <Box
              sx={{
                justifyContent: 'center',
                display: ['block', 'flex'],
                textAlign: 'center'
              }}
              mt={3}
            >
              <Button
                mb={[3, 0]}
                sx={{ borderRadius: '6px' }}
                onClick={() => setFormOpen(true)}
              >
                Sign up for the Hacker Games
              </Button>
            </Box>
          </Box>
        </Box>
        <Box py={4}>
          <Box
            sx={{
              maxWidth: '700px',
              border: '2px dashed',
              borderColor: 'muted',
              margin: 'auto',
              p: 3,
              mx: [2, 'auto'],
              fontSize: ['1em', '1.3em'],
              borderRadius: 6
            }}
          >
            Every four* years, the international community gathers to share the
            best of ourselves in the Olympics. As we rise out of the COVID-19
            pandemic, we're bringing the Hacker World together to participate in
            the Hacker Games. We'll have bucket loads of fun, make new friends
            and participate in a hacking pentathlon over the week. All over Zoom
            & Slack.
          </Box>
        </Box>
        <Box px={[3, 5]} sx={{ textAlign: 'center' }}>
          <Heading as="h1" sx={{ fontSize: '2.5em' }}>
            Participate in <i>all sorts</i> of hacking events.
          </Heading>
          <Box
            my={2}
            sx={{ fontSize: '1.3em', maxWidth: '800px', mx: [2, 'auto'] }}
          >
            Events have designed to be great fun and beginner friendly. They
            last for about 30 minutes at two different times on each day.
          </Box>
          <Box
            sx={{
              bg: 'white',
              borderRadius: 7,
              color: 'black',
              maxWidth: '800px',
              margin: 'auto'
            }}
          >
            <Grid
              columns={['1fr', '2fr 1fr 1fr']}
              gap={0}
              sx={{
                div: {
                  px: 3,
                  py: 2
                }
              }}
            >
              <Box
                sx={{
                  bg: 'red',
                  color: 'white',
                  borderTopLeftRadius: 7,
                  textAlign: 'left',
                  fontWeight: '800',
                  borderTopRightRadius: [7, 0]
                }}
              >
                Event
                <Text sx={{ display: ['inline', 'none'] }}>s Schedule</Text>
              </Box>
              <Box
                sx={{
                  bg: 'red',
                  color: 'white',
                  textAlign: 'left',
                  fontWeight: '800',
                  display: ['none', 'block']
                }}
              >
                <Text sx={{ display: ['none', 'inline'] }}>1st Time</Text>
              </Box>
              <Box
                sx={{
                  bg: 'red',
                  color: 'white',
                  borderTopRightRadius: 7,
                  textAlign: 'left',
                  fontWeight: '800',
                  display: ['none', 'block']
                }}
              >
                <Text sx={{ display: ['none', 'inline'] }}>2nd Time</Text>
              </Box>
              <Box sx={{ textAlign: 'left' }}>
                🎉 Opening Ceremony & Marathon Launch{' '}
                <Text sx={{ display: ['inline', 'none'] }}>
                  at {tt('{Do} {MM}, {h}:{mm}{a}').render(new Date('2021-07-17T16:00:00.000Z'))}.
                </Text>
              </Box>
              <Box sx={{ textAlign: 'left', display: ['none', 'block']  }}>{tt('{Do} {MM}, {h}:{mm}{a}').render(new Date('2021-07-17T16:00:00.000Z'))}</Box>
              <Box sx={{ textAlign: 'left', display: ['none', 'block']  }}>N/A</Box>
              <Box sx={{ textAlign: 'left' }}>🏹 CSS Archery{' '}
                <Text sx={{ display: ['inline', 'none'] }}>
                  at {tt('{Do} {MM}, {h}:{mm}{a}').render(new Date('2021-07-18T12:00:00.000Z'))} & {tt('{Do} {MM}, {h}:{mm}{a}').render(new Date('2021-07-18T24:00:00.000Z'))}.
                </Text>
              </Box>
              <Box sx={{ textAlign: 'left', display: ['none', 'block'] }}>{tt('{Do} {MM}, {h}:{mm}{a}').render(new Date('2021-07-18T12:00:00.000Z'))}</Box>
              <Box sx={{ textAlign: 'left', display: ['none', 'block']  }}>{tt('{Do} {MM}, {h}:{mm}{a}').render(new Date('2021-07-18T24:00:00.000Z'))}</Box>
              <Box sx={{ textAlign: 'left' }}>🏃‍♂️ The Typing Sprints
                <Text sx={{ display: ['inline', 'none'] }}>
                {' '}at {tt('{Do} {MM}, {h}:{mm}{a}').render(new Date('2021-07-19T12:00:00.000Z'))} & {tt('{Do} {MM}, {h}:{mm}{a}').render(new Date('2021-07-19T24:00:00.000Z'))}.
                </Text>
              </Box>
              <Box sx={{ textAlign: 'left', display: ['none', 'block']  }}>{tt('{Do} {MM}, {h}:{mm}{a}').render(new Date('2021-07-19T12:00:00.000Z'))}</Box>
              <Box sx={{ textAlign: 'left', display: ['none', 'block']  }}>{tt('{Do} {MM}, {h}:{mm}{a}').render(new Date('2021-07-19T24:00:00.000Z'))}</Box>
              <Box sx={{ textAlign: 'left' }}>🌈 The Webnastics
              
              <Text sx={{ display: ['inline', 'none'] }}>
                {' '}at {tt('{Do} {MM}, {h}:{mm}{a}').render(new Date('2021-07-20T12:00:00.000Z'))} & {tt('{Do} {MM}, {h}:{mm}{a}').render(new Date('2021-07-20T24:00:00.000Z'))}.
                </Text>
              </Box>
              <Box sx={{ textAlign: 'left', display: ['none', 'block']  }}>{tt('{Do} {MM}, {h}:{mm}{a}').render(new Date('2021-07-20T12:00:00.000Z'))}</Box>
              <Box sx={{ textAlign: 'left', display: ['none', 'block']  }}>{tt('{Do} {MM}, {h}:{mm}{a}').render(new Date('2021-07-20T24:00:00.000Z'))}</Box>
              <Box sx={{ textAlign: 'left' }}>✈️ The Airplane Throw
              <Text sx={{ display: ['inline', 'none'] }}>
                {' '}at {tt('{Do} {MM}, {h}:{mm}{a}').render(new Date('2021-07-21T12:00:00.000Z'))} & {tt('{Do} {MM}, {h}:{mm}{a}').render(new Date('2021-07-21T24:00:00.000Z'))}.
                </Text>
              </Box>
              <Box sx={{ textAlign: 'left', display: ['none', 'block']  }}>{tt('{Do} {MM}, {h}:{mm}{a}').render(new Date('2021-07-21T12:00:00.000Z'))}</Box>
              <Box sx={{ textAlign: 'left', display: ['none', 'block']  }}>{tt('{Do} {MM}, {h}:{mm}{a}').render(new Date('2021-07-21T24:00:00.000Z'))}</Box>
              <Box sx={{ textAlign: 'left' }}>👏 Closing Ceremony{' '}
                <Text sx={{ display: ['inline', 'none'] }}>
                  at {tt('{Do} {MM}, {h}:{mm}{a}').render(new Date('2021-07-22T16:00:00.000Z'))}.
                </Text></Box>
              <Box sx={{ textAlign: 'left', display: ['none', 'block']  }}>{tt('{Do} {MM}, {h}:{mm}{a}').render(new Date('2021-07-22T16:00:00.000Z'))}</Box>
              <Box sx={{ textAlign: 'left', display: ['none', 'block']  }}>N/A</Box>
            </Grid>
          </Box>
        </Box>
        <Box
          px={[2, 5]}
          sx={{
            textAlign: 'center',

            backgroundImage:
              'linear-gradient(180deg, rgba(1,1,1,0.9199054621848739) 0%, rgba(1,1,1,0.8906897759103641) 100%), url(https://cloud-kx3bar6aw-hack-club-bot.vercel.app/0bg_banner.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            py: 5
          }}
          mt={5}
        >
          <Box sx={{ margin: 'auto', maxWidth: '800px' }}>
            <Heading as="h1" sx={{ fontSize: '3em' }}>
              With tons of <Sparkles>fun prizes</Sparkles> up for grabs!
            </Heading>
            <Box mt={2} sx={{ fontSize: '1.3em' }}>
              Everyone will get some epic stickers for participating. The top
              three from every individual event will get a custom plaque & a $25
              electronics voucher. Whilst the top three overall will get a $100,
              $75 & $50 electronics voucher respectively with the ultimate
              sticker trophy.
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            bg: !countryNotFound
              ? country.colours[0].toLowerCase().trim() === 'blue' ||
                country.colours[1].toLowerCase().trim() === 'blue'
                ? 'sunken'
                : 'bg'
              : 'bg'
          }}
        >
          <Box
            sx={{
              mx: [2, 'auto'],
              maxWidth: '800px',
              py: 5,
              textAlign: 'center'
            }}
          >
            <Heading
              as="h1"
              sx={{ fontSize: ['3em', '4em'], maxWidth: '600px', margin: 'auto' }}
            >
              {!countryNotFound ? <>
              <Text
                sx={{
                  textShadow: 'card',
                  ...theme.util.gxText(
                    country.colours[0].toLowerCase().trim(),
                    (country.colours[1] === undefined
                      ? country.colours[0].toLowerCase() === 'red'
                        ? 'white'
                        : country.colours[0].toLowerCase()
                      : country.colours[1].toLowerCase()
                    ).trim()
                  )
                }}
              >
                Team{' '}
                {country.full.trim().split(' ')[0].toUpperCase().trim() ===
                'THE'
                  ? country.full.replace('the', '').trim()
                  : country.full}
              </Text>{' '}</> : 'Your country '}
              needs you, sign up today!
            </Heading>
            <Box sx={{ fontSize: '1.3em', mt: 2 }}>
              Upon receiving your registration, we'll send over a confirmation
              email with more details.
            </Box>
            <Box
              sx={{
                justifyContent: 'center',
                display: ['block', 'flex'],
                textAlign: 'center'
              }}
              mt={3}
            >
              <Button
                mb={[3, 0]}
                sx={{ borderRadius: '6px' }}
                onClick={() => setFormOpen(true)}
              >
                Sign up for the Hacker Games
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            bg: !countryNotFound
              ? country.colours[0].toLowerCase().trim() === 'blue' ||
                country.colours[1].toLowerCase().trim() === 'blue'
                ? 'sunken'
                : 'bg'
              : 'bg'
          }}
        >
          <Box
            sx={{
              margin: 'auto',
              maxWidth: '800px',
              pb: 5,
              textAlign: 'center',
              textDecorationLine: 'wavy'
            }}
          >
            <Text
              as="div"
              sx={{
                borderTop: '1px solid',
                borderColor: 'muted',
                pt: 2,
                width: 'fit-content',
                margin: 'auto'
              }}
            >
              A project by <a href="https://hackclub.com">Hack Club</a>, website
              source available{' '}
              <a href="https://github.com/hackclub/games">here</a>.
            </Text>
          </Box>
        </Box>
        <style>{`
      a {
        color: white;
        text-decoration: none;
        font-weight: 800;
      }
      a:hover{
        text-decoration: underline;
        text-decoration-style: wavy;
      }
      `}</style>
      </Box>
      <Box sx={{ display: formOpen ? 'block' : 'none' }}>
        <Box
          sx={{
            position: 'absolute',
            top: 3,
            right: 3,
            transform: 'rotate(45deg)',
            cursor: 'pointer'
          }}
          onClick={() => setFormOpen(false)}
        >
          <Heading>✚</Heading>
        </Box>
        <iframe
          className="airtable-embed"
          src="https://airtable.com/embed/shrYSkKEreuS6gQFR?backgroundColor=purple"
          frameBorder="0"
          onMouseWheel=""
          width="100%"
          style={{ background: 'transparent', height: '100vh' }}
        ></iframe>
      </Box>
    </>
  )
}

export async function getServerSideProps(context) {
  try{
  const geoip = require('geoip-country')
  const { filter } = require('lodash')
  const sortedColours = colours.map(colour => ({
    country:
      names[
        colour['Country']
          .replace(' ', '')
          .normalize('NFD')
          .replace('the', '')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/\W/g, '')
          .toLocaleUpperCase()
      ],
    full: colour['Country'],
    colours: colour['Primary colours']
      .replace('and', ',')
      .replace(' ', '')
      .split(',')
  }))
  const ip = context.req.headers['x-forwarded-for']
    ? context.req.headers['x-forwarded-for']
    : '23.235.60.91112'
  console.log(geoip.lookup(ip))
  const country = filter(
    sortedColours,
    colour => colour.country === geoip.lookup(ip).country
  )

  console.log(country)

  if (typeof country[0] == 'undefined') {
    return {
      props: { countryNotFound: true }
    }
  } else {
    return {
      props: { country: country[0] }
    }
  }}
  catch(e) {
    return {
      props: { countryNotFound: true }
    }
  }
}
