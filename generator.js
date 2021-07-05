
const call = require('../call-script')
const tone = require('../tone-script')

const tones = [
  ' ',
  ' +',
  ' -',
  '+ ',
  '- ',
  '+',
  '-',
  '+-',
  '-+',
]

const nasals = [
  '',
  '~',
]

const consonants = [
  '[v+]-yb',
  '[v+]-yc',
  '[v+]-yf',
  '[v+]-yj',
  '[v+]-yk',
  '[v+]-yl',
  '[v+]-ym',
  '[v+]-yn',
  '[v+]-yp',
  '[v+]-ys',
  '[v+]-yt',
  '[v+]-yv',
  '[v+]-yz',
  '[v+]-st',
  '[v+]-mp',
  '[v+]-mpt',
  '[v+]-mps',
  '[v+]-nt',
  '[v+]-lk',
  '[v+]-st',
  '[v+]-nst',
  '[v+]-rd',
  '[v+]-rg',
  '[v+]-rk',
  '[v+]-lf',
  '[v+]-wl',
  '[v+]-\'',
  'bl-[v+]',
  'fl-[v+]',
  'pl-[v+]',
  'gl-[v+]',
  'kl-[v+]',
  'b-[v+]',
  'c-[v+]',
  'C-[v+]',
  'd-[v+]',
  'h-[v+]',
  'j-[v+]',
  'dj-[v+]',
  'k-[v+]',
  'K-[v+]',
  'l-[v+]',
  'L-[v+]',
  'm-[v+]',
  'M-[v+]',
  'n-[v+]',
  'n-[v+]',
  'p-[v+]',
  'r-[v+]',
  'R-[v+]',
  's-[v+]',
  'S-[v+]',
  't-[v+]',
  'T-[v+]',
  'v-[v+]',
  'V-[v+]',
  'w-[v+]',
  'x-[v+]',
  'X-[v+]',
  'y-[v+]',
  'z-[v+]',
  'Z-[v+]',
  'q-[v+]',
  '\'-[v+]',

  'p!-[v+]',
  't!-[v+]',
  'k!-[v+]',

  'p*-[v+]',
  't*-[v+]',
  'k*-[v+]',
  'd*-[v+]',
  'l*-[v+]',

  't~-[v+]',
  's~-[v+]',
  'C~-[v+]',
  'd~-[v+]',

  '[v+]-bb-[v+]',
  '[v+]-cc-[v+]',
  '[v+]-CC-[v+]',
  '[v+]-dd-[v+]',
  '[v+]-hh-[v+]',
  '[v+]-jj-[v+]',
  '[v+]-kk-[v+]',
  '[v+]-KK-[v+]',
  '[v+]-ll-[v+]',
  '[v+]-LL-[v+]',
  '[v+]-mm-[v+]',
  '[v+]-MM-[v+]',
  '[v+]-nn-[v+]',
  '[v+]-nn-[v+]',
  '[v+]-pp-[v+]',
  '[v+]-rr-[v+]',
  '[v+]-RR-[v+]',
  '[v+]-ss-[v+]',
  '[v+]-SS-[v+]',
  '[v+]-tt-[v+]',
  '[v+]-TT-[v+]',
  '[v+]-vv-[v+]',
  '[v+]-VV-[v+]',
  '[v+]-ww-[v+]',
  '[v+]-xx-[v+]',
  '[v+]-XX-[v+]',
  '[v+]-yy-[v+]',
  '[v+]-zz-[v+]',
  '[v+]-ZZ-[v+]',
  '[v+]-qq-[v+]',

  '[v+]-b',
  '[v+]-q',
  '[v+]-c',
  '[v+]-C',
  '[v+]-d',
  '[v+]-h',
  '[v+]-j',
  '[v+]-dj',
  '[v+]-dz',
  '[v+]-k',
  '[v+]-K',
  '[v+]-l',
  '[v+]-L',
  '[v+]-m',
  '[v+]-M',
  '[v+]-n',
  '[v+]-n',
  '[v+]-p',
  '[v+]-r',
  '[v+]-R',
  '[v+]-s',
  '[v+]-S',
  '[v+]-t',
  '[v+]-ts',
  '[v+]-tx',
  '[v+]-T',
  '[v+]-TX',
  '[v+]-v',
  '[v+]-V',
  '[v+]-w',
  '[v+]-x',
  '[v+]-X',
  '[v+]-y',
  '[v+]-z',
  '[v+]-Z',
  'by-[v+]',
  'cy-[v+]',
  'Cy-[v+]',
  'dy-[v+]',
  'hy-[v+]',
  'jy-[v+]',
  'djy-[v+]',
  'dzy-[v+]',
  'ky-[v+]',
  'Ky-[v+]',
  'ly-[v+]',
  'Ly-[v+]',
  'my-[v+]',
  'My-[v+]',
  'ny-[v+]',
  'ny-[v+]',
  'py-[v+]',
  'ry-[v+]',
  'Ry-[v+]',
  'sy-[v+]',
  'Sy-[v+]',
  'ty-[v+]',
  'txy-[v+]',
  'tsy-[v+]',
  'Ty-[v+]',
  'TXy-[v+]',
  'vy-[v+]',
  'Vy-[v+]',
  'wy-[v+]',
  'xy-[v+]',
  'Xy-[v+]',
  'yy-[v+]',
  'zy-[v+]',
  'Zy-[v+]',
  'br-[v+]',
  'cr-[v+]',
  'Cr-[v+]',
  'dr-[v+]',
  'hr-[v+]',
  'jr-[v+]',
  'djr-[v+]',
  'kr-[v+]',
  'Kr-[v+]',
  'lr-[v+]',
  'Lr-[v+]',
  'mr-[v+]',
  'Mr-[v+]',
  'nr-[v+]',
  'nr-[v+]',
  'pr-[v+]',
  'rr-[v+]',
  'Rr-[v+]',
  'sr-[v+]',
  'Sr-[v+]',
  'tr-[v+]',
  'txr-[v+]',
  'Tr-[v+]',
  'TXr-[v+]',
  'vr-[v+]',
  'Vr-[v+]',
  'wr-[v+]',
  'xr-[v+]',
  'Xr-[v+]',
  'yr-[v+]',
  'zr-[v+]',
  'Zr-[v+]',
  'bh-[v+]',
  'ch-[v+]',
  'Ch-[v+]',
  'dh-[v+]',
  'hh-[v+]',
  'jh-[v+]',
  'djh-[v+]',
  'kh-[v+]',
  'Kh-[v+]',
  'lh-[v+]',
  'Lh-[v+]',
  'mh-[v+]',
  'Mh-[v+]',
  'nh-[v+]',
  'nh-[v+]',
  'ph-[v+]',
  'rh-[v+]',
  'Rh-[v+]',
  'sh-[v+]',
  'Sh-[v+]',
  'th-[v+]',
  'Th-[v+]',
  'vh-[v+]',
  'Vh-[v+]',
  'wh-[v+]',
  'xh-[v+]',
  'Xh-[v+]',
  'yh-[v+]',
  'zh-[v+]',
  'Zh-[v+]',
  'sk-[v+]',
  'skr-[v+]',
  'skl-[v+]',
  'sn-[v+]',
  'sm-[v+]',
  'sl-[v+]',
  'st-[v+]',
  '[v+]-zm',
  '[v+]-sk',
  '[v+]-tl',
  '[v+]-dl',
  '[v+]-sp',
  'spr-[v+]',
  'spw-[v+]',
  'spl-[v+]',
]

const simpleVowels = [
  'i',
  'a',
  'u',
  'e',
  'E',
  'U',
  'I',
  'o',
  'A',
  'O',
  'o#',
  'u#',
  'e#',
  'i#',
  'a#',

  'ii',
  'aa',
  'uu',
  'ee',
  'oo',
]

const complexVowels = [
  'ia',
  'iu',
  'ie',
  'iE',
  'iU',
  'iI',
  'io',
  'iA',
  'iO',
  'io#',
  'iu#',
  'ie#',
  'ii#',
  'ia#',

  'ai',
  'au',
  'ae',
  'aE',
  'aU',
  'aI',
  'ao',
  'aA',
  'aO',
  'ao#',
  'au#',
  'ae#',
  'ai#',
  'aa#',

  'ui',
  'ua',
  'ue',
  'uE',
  'uU',
  'uI',
  'uo',
  'uA',
  'uO',
  'uo#',
  'uu#',
  'ue#',
  'ui#',
  'ua#',

  'ei',
  'ea',
  'eu',
  'eE',
  'eU',
  'eI',
  'eo',
  'eA',
  'eO',
  'eo#',
  'eu#',
  'ee#',
  'ei#',
  'ea#',

  'oi',
  'oa',
  'ou',
  'oe',
  'oE',
  'oU',
  'oI',
  'oA',
  'oO',
  'oo#',
  'ou#',
  'oe#',
  'oi#',
  'oa#',
]

const randomize = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const generate = ({ size = 3, withComplexVowels = false, withNasals = false, withTones = false } = {}) => {
  const parts = new Array(size)
  let i = 0
  while (i < size) {
    let part = consonants[randomize(0, consonants.length - 1)]
    parts[i++] = part
  }

  let vowelless = parts.join('-').split(/\[v\+\]/)
  for (let i = 0, n = vowelless.length; i < n; i++) {
    let vowellessi = vowelless[i]
    if (vowellessi == '-') {
      vowelless.splice(i, 1)
      i--
    }
  }

  let vowelCount = vowelless.length - 1
  let vowelled = vowelless.join('[v+]')
  let accent = vowelCount > 1 ? randomize(0, vowelCount - 1) : -1

  let vowelI = 0
  let string = vowelled
    // .replace(/\[v\+\]\-\[v\+\]/g, () => fetchVowels({ withComplexVowels, withNasals, withTones }))
    .replace(/\[v\+\]/g, () => fetchVowels({ accent: vowelI++ == accent, withComplexVowels, withNasals, withTones }))
    .replace(/\-/g, '')
    .replace(/bb+/g, 'bb')
    .replace(/cc+/g, 'cc')
    .replace(/CC+/g, 'CC')
    .replace(/dd+/g, 'dd')
    .replace(/hh+/g, 'hh')
    .replace(/jj+/g, 'jj')
    .replace(/kk+/g, 'kk')
    .replace(/KK+/g, 'KK')
    .replace(/ll+/g, 'll')
    .replace(/LL+/g, 'LL')
    .replace(/mm+/g, 'mm')
    .replace(/MM+/g, 'MM')
    .replace(/nn+/g, 'nn')
    .replace(/nn+/g, 'nn')
    .replace(/pp+/g, 'pp')
    .replace(/rr+/g, 'rr')
    .replace(/RR+/g, 'RR')
    .replace(/ss+/g, 'ss')
    .replace(/SS+/g, 'SS')
    .replace(/tt+/g, 'tt')
    .replace(/TT+/g, 'TT')
    .replace(/vv+/g, 'vv')
    .replace(/VV+/g, 'VV')
    .replace(/ww+/g, 'ww')
    .replace(/xx+/g, 'xx')
    .replace(/XX+/g, 'XX')
    .replace(/yy+/g, 'yy')
    .replace(/zz+/g, 'zz')
    .replace(/ZZ+/g, 'ZZ')
    .replace(/qq+/g, 'qq')
    .replace(/\'+/g, '\'')

  return string
}

const fetchVowels = ({ accent = false, withComplexVowels = false, withNasals = false, withTones = false }) => {
  const vowels = withComplexVowels ? simpleVowels.concat(complexVowels) : simpleVowels
  const v = vowels[randomize(0, vowels.length - 1)]

  let part
  let parts = []

  v.split('').forEach(x => {
    if (x != '#') {
      part = [x]
      parts.push(part)
    } else {
      part.push(x)
    }
  })

  let p = parts.map(x => x.join(''))

  if (withNasals) {
    const n = nasals[randomize(0, nasals.length - 1)]

    if (n) {
      p = p.map(x => `${x}~`)
    }
  }

  if (withTones) {
    const t = tones[randomize(0, tones.length - 1)]

    if (t.trim()) {
      let letter = p.shift()

      t.split('').forEach((x, i) => {
        const z = `${letter}${x}`.trim()
        p.splice(i, 0, z)
      })
    }
  }

  if (accent) {
    p[0] = `(${p[0]})`
  }

  return p.join('')
}

const fs = require('fs')
const out = [`call-script-encoding`,`call-script-ascii`,`tone-script-encoding`]
const log = text => {
  out.push({
    call: call(text),
    text: text,
    tone: tone(text)
  })
}
let i = 0
while (i++ < 2000) {
  log(generate({ size: 1 }))
}
i = 0
while (i++ < 2000) {
  log(generate({ size: 2 }))
}
i = 0
while (i++ < 1000) {
  log(generate({ size: 2, withTones: true }))
}
i = 0
while (i++ < 1000) {
  log(generate({ size: 1, withNasals: true }))
}
i = 0
while (i++ < 1000) {
  log(generate({ size: 1, withNasals: true, withTones: true }))
}
i = 0
while (i++ < 1000) {
  log(generate({ size: 1, withComplexVowels: true }))
}
i = 0
while (i++ < 1000) {
  log(generate({ size: 2, withComplexVowels: true }))
}
i = 0
while (i++ < 1000) {
  log(generate({ size: 3 }))
}

const html = fs.readFileSync('words.template.html', 'utf-8')
  .replace(/\{WORDS\}/, JSON.stringify(shuffleArray(out), null, 2))

fs.writeFileSync('words.html', html)

function shuffleArray(d) {
  for (var c = d.length - 1; c > 0; c--) {
    var b = Math.floor(Math.random() * (c + 1));
    var a = d[c];
    d[c] = d[b];
    d[b] = a;
  }
  return d
};
