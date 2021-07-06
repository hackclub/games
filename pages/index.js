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

export default function App({ country }) {
  console.log(country.colours[1] === undefined
    ? country.colours[0].toLowerCase() === 'red'
      ? 'white'
      : country.colours[0].toLowerCase()
    : country.colours[1].toLowerCase())
  return (
    <Box sx={{ bg: 'black' }}>
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
            Represent {country.full} in the
          </Heading>
          <Heading
            sx={{
              fontSize: ['30vw', '15vw'],
              marginBlockStart: '0em',
              marginBlockEnd: '0em',
              lineHeight: '0.9',
              color: country.colours[0].toLowerCase(),
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
              color: (country.colours[1] === undefined
                  ? country.colours[0].toLowerCase() === 'red'
                    ? 'white'
                    : country.colours[0].toLowerCase()
                  : country.colours[1].toLowerCase()).trim(),
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
            <Button mr={[0, 3]} mb={[3, 0]} sx={{ borderRadius: '6px' }}>
              Register with Hack Club Slack
            </Button>
            <Button sx={{ borderRadius: '6px' }}>Register with GitHub</Button>
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
          the Hacker Games. We'll have bucket loads of fun, make new friends and
          participate in a hacking pentathlon over the week. All over Zoom &
          Slack.
        </Box>
      </Box>
      <Box px={[3, 5]} sx={{ textAlign: 'center' }}>
        <Heading as="h1" mb={4} sx={{ fontSize: '2.5em' }}>
          Participate in <i>all sorts</i> of hacking events.
        </Heading>
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
              Event<Text sx={{ display: ['inline', 'none'] }}>s Schedule</Text>
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
              <Text sx={{ display: ['inline', 'none'] }}>at 17/7 12:00AM.</Text>
            </Box>
            <Box sx={{ textAlign: 'left' }}>17/7 12:00AM</Box>
            <Box sx={{ textAlign: 'left' }}>N/A</Box>
            <Box sx={{ textAlign: 'left' }}>🏹 CSS Archery</Box>
            <Box sx={{ textAlign: 'left' }}>18/7 8:00PM</Box>
            <Box sx={{ textAlign: 'left' }}>19/7 8:00AM</Box>
            <Box sx={{ textAlign: 'left' }}>🏃‍♂️ The Typing Sprints</Box>
            <Box sx={{ textAlign: 'left' }}>19/7 8:00PM</Box>
            <Box sx={{ textAlign: 'left' }}>20/7 8:00AM</Box>
            <Box sx={{ textAlign: 'left' }}>🌈 The Webnastics</Box>
            <Box sx={{ textAlign: 'left' }}>20/7 8:00PM</Box>
            <Box sx={{ textAlign: 'left' }}>21/7 8:00AM</Box>
            <Box sx={{ textAlign: 'left' }}>✈️ The Airplane Throw</Box>
            <Box sx={{ textAlign: 'left' }}>21/7 8:00PM</Box>
            <Box sx={{ textAlign: 'left' }}>22/7 8:00AM</Box>
            <Box sx={{ textAlign: 'left' }}>👏 Closing Ceremony</Box>
            <Box sx={{ textAlign: 'left' }}>22/7 12:00AM</Box>
            <Box sx={{ textAlign: 'left' }}>N/A</Box>
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
            three from every individual event will get a custom RGB medal & a
            $25 electronics voucher. Whilst the top three overall will get a
            $100, $75 & $50 electronics voucher respectively with the ultimate
            sticker trophy.
          </Box>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            mx: [2, 'auto'],
            maxWidth: '800px',
            py: 5,
            textAlign: 'center'
          }}
        >
          <Heading as="h1" sx={{ fontSize: ['3em', '4em'] }}>
            <Text sx={theme.util.gxText('green', 'yellow')}>
              Team Australia
            </Text>{' '}
            <br />
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
            <Button mr={[0, 3]} mb={[3, 0]} sx={{ borderRadius: '6px' }}>
              Register with Hack Club Slack
            </Button>
            <Button sx={{ borderRadius: '6px' }}>Register with GitHub</Button>
          </Box>
        </Box>
      </Box>
      <Box>
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
  )
}

export async function getServerSideProps(context) {
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
    : '23.235.60.92'
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
  }
}
