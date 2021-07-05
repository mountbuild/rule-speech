
const call = require('../call-script')
const tone = require('../tone-script')

const tones = [
  [' ', 20],
  [' +', 2],
  [' -', 2],
  ['+ ', 1],
  ['- ', 1],
  ['+', 4],
  ['-', 4],
  ['+-', 0.5],
  ['-+', 0.5],
]

const nasals = [
  ['', 20],
  ['~', 1],
]

const sizes = [
  [1, 30],
  [2, 10],
  [3, 2],
  [4, 1]
]

const consonants = [
  ['[v+]-yb', 1],
  ['[v+]-yc', 1],
  ['[v+]-yf', 1],
  ['[v+]-yj', 1],
  ['[v+]-yk', 1],
  ['[v+]-yl', 1],
  ['[v+]-ym', 1],
  ['[v+]-yn', 1],
  ['[v+]-yp', 1],
  ['[v+]-ys', 1],
  ['[v+]-yt', 1],
  ['[v+]-yv', 1],
  ['[v+]-yz', 1],
  ['[v+]-st', 1],
  ['[v+]-mp', 1],
  ['[v+]-mpt', 1],
  ['[v+]-mps', 1],
  ['[v+]-nt', 1],
  ['[v+]-lk', 1],
  ['[v+]-st', 1],
  ['[v+]-nst', 1],
  ['[v+]-rd', 1],
  ['[v+]-rg', 1],
  ['[v+]-rk', 1],
  ['[v+]-lf', 1],
  ['[v+]-wl', 1],
  ['[v+]-\'', 1],
  ['bl-[v+]', 1],
  ['fl-[v+]', 1],
  ['pl-[v+]', 1],
  ['gl-[v+]', 1],
  ['kl-[v+]', 1],
  ['b-[v+]', 10],
  ['c-[v+]', 10],
  ['C-[v+]', 10],
  ['d-[v+]', 10],
  ['h-[v+]', 10],
  ['j-[v+]', 10],
  ['dj-[v+]', 10],
  ['k-[v+]', 10],
  ['K-[v+]', 10],
  ['l-[v+]', 10],
  ['L-[v+]', 10],
  ['m-[v+]', 10],
  ['M-[v+]', 10],
  ['n-[v+]', 10],
  ['n-[v+]', 10],
  ['p-[v+]', 10],
  ['r-[v+]', 20],
  ['R-[v+]', 10],
  ['s-[v+]', 20],
  ['S-[v+]', 10],
  ['t-[v+]', 20],
  ['T-[v+]', 10],
  ['v-[v+]', 10],
  ['V-[v+]', 10],
  ['w-[v+]', 10],
  ['x-[v+]', 10],
  ['X-[v+]', 10],
  ['y-[v+]', 10],
  ['z-[v+]', 10],
  ['Z-[v+]', 10],
  ['q-[v+]', 10],
  ['\'-[v+]', 10],
  ['p!-[v+]', 10],
  ['t!-[v+]', 10],
  ['k!-[v+]', 10],
  ['p*-[v+]', 10],
  ['t*-[v+]', 10],
  ['k*-[v+]', 10],
  ['d*-[v+]', 10],
  ['l*-[v+]', 10],
  ['t~-[v+]', 10],
  ['s~-[v+]', 10],
  ['C~-[v+]', 10],
  ['d~-[v+]', 10],
  ['[v+]-bb-[v+]', 1],
  ['[v+]-cc-[v+]', 1],
  ['[v+]-CC-[v+]', 1],
  ['[v+]-dd-[v+]', 1],
  ['[v+]-hh-[v+]', 1],
  ['[v+]-jj-[v+]', 1],
  ['[v+]-kk-[v+]', 1],
  ['[v+]-KK-[v+]', 1],
  ['[v+]-ll-[v+]', 1],
  ['[v+]-LL-[v+]', 1],
  ['[v+]-mm-[v+]', 1],
  ['[v+]-MM-[v+]', 1],
  ['[v+]-nn-[v+]', 1],
  ['[v+]-nn-[v+]', 1],
  ['[v+]-pp-[v+]', 1],
  ['[v+]-rr-[v+]', 1],
  ['[v+]-RR-[v+]', 1],
  ['[v+]-ss-[v+]', 1],
  ['[v+]-SS-[v+]', 1],
  ['[v+]-tt-[v+]', 1],
  ['[v+]-TT-[v+]', 1],
  ['[v+]-vv-[v+]', 1],
  ['[v+]-VV-[v+]', 1],
  ['[v+]-ww-[v+]', 1],
  ['[v+]-xx-[v+]', 1],
  ['[v+]-XX-[v+]', 1],
  ['[v+]-yy-[v+]', 1],
  ['[v+]-zz-[v+]', 1],
  ['[v+]-ZZ-[v+]', 1],
  ['[v+]-qq-[v+]', 1],
  ['[v+]-b', 1],
  ['[v+]-q', 1],
  ['[v+]-c', 1],
  ['[v+]-C', 1],
  ['[v+]-d', 1],
  ['[v+]-h', 1],
  ['[v+]-j', 1],
  ['[v+]-dj', 1],
  ['[v+]-dz', 1],
  ['[v+]-k', 1],
  ['[v+]-K', 1],
  ['[v+]-l', 1],
  ['[v+]-L', 1],
  ['[v+]-m', 1],
  ['[v+]-M', 1],
  ['[v+]-n', 1],
  ['[v+]-n', 1],
  ['[v+]-p', 1],
  ['[v+]-r', 1],
  ['[v+]-R', 1],
  ['[v+]-s', 1],
  ['[v+]-S', 1],
  ['[v+]-t', 1],
  ['[v+]-ts', 1],
  ['[v+]-tx', 1],
  ['[v+]-T', 1],
  ['[v+]-TX', 1],
  ['[v+]-v', 1],
  ['[v+]-V', 1],
  ['[v+]-w', 1],
  ['[v+]-x', 1],
  ['[v+]-X', 1],
  ['[v+]-y', 1],
  ['[v+]-z', 1],
  ['[v+]-Z', 1],
  ['by-[v+]', 1],
  ['cy-[v+]', 1],
  ['Cy-[v+]', 1],
  ['dy-[v+]', 1],
  ['hy-[v+]', 1],
  ['jy-[v+]', 1],
  ['djy-[v+]', 1],
  ['dzy-[v+]', 1],
  ['ky-[v+]', 1],
  ['Ky-[v+]', 1],
  ['ly-[v+]', 1],
  ['Ly-[v+]', 1],
  ['my-[v+]', 1],
  ['My-[v+]', 1],
  ['ny-[v+]', 1],
  ['ny-[v+]', 1],
  ['py-[v+]', 1],
  ['ry-[v+]', 1],
  ['Ry-[v+]', 1],
  ['sy-[v+]', 1],
  ['Sy-[v+]', 1],
  ['ty-[v+]', 1],
  ['txy-[v+]', 1],
  ['tsy-[v+]', 1],
  ['Ty-[v+]', 1],
  ['TXy-[v+]', 1],
  ['vy-[v+]', 1],
  ['Vy-[v+]', 1],
  ['wy-[v+]', 1],
  ['xy-[v+]', 1],
  ['Xy-[v+]', 1],
  ['yy-[v+]', 1],
  ['zy-[v+]', 1],
  ['Zy-[v+]', 1],
  ['\'y-[v+]', 1],
  ['br-[v+]', 1],
  ['cr-[v+]', 1],
  ['Cr-[v+]', 1],
  ['dr-[v+]', 1],
  ['hr-[v+]', 1],
  ['jr-[v+]', 1],
  ['djr-[v+]', 1],
  ['kr-[v+]', 1],
  ['Kr-[v+]', 1],
  ['pr-[v+]', 1],
  ['rr-[v+]', 1],
  ['sr-[v+]', 1],
  ['Sr-[v+]', 1],
  ['tr-[v+]', 1],
  ['txr-[v+]', 1],
  ['Tr-[v+]', 1],
  ['TXr-[v+]', 1],
  ['vr-[v+]', 1],
  ['Vr-[v+]', 1],
  ['wr-[v+]', 1],
  ['xr-[v+]', 1],
  ['Xr-[v+]', 1],
  ['zr-[v+]', 1],
  ['Zr-[v+]', 1],
  ['bh-[v+]', 1],
  ['ch-[v+]', 1],
  ['Ch-[v+]', 1],
  ['dh-[v+]', 1],
  ['hh-[v+]', 1],
  ['jh-[v+]', 1],
  ['djh-[v+]', 1],
  ['kh-[v+]', 1],
  ['Kh-[v+]', 1],
  ['lh-[v+]', 1],
  ['Lh-[v+]', 1],
  ['mh-[v+]', 1],
  ['Mh-[v+]', 1],
  ['nh-[v+]', 1],
  ['nh-[v+]', 1],
  ['ph-[v+]', 1],
  ['rh-[v+]', 1],
  ['Rh-[v+]', 1],
  ['sh-[v+]', 1],
  ['Sh-[v+]', 1],
  ['th-[v+]', 1],
  ['Th-[v+]', 1],
  ['vh-[v+]', 1],
  ['Vh-[v+]', 1],
  ['wh-[v+]', 1],
  ['xh-[v+]', 1],
  ['Xh-[v+]', 1],
  ['yh-[v+]', 1],
  ['zh-[v+]', 1],
  ['Zh-[v+]', 1],
  ['sk-[v+]', 1],
  ['skr-[v+]', 1],
  ['skl-[v+]', 1],
  ['sn-[v+]', 1],
  ['sm-[v+]', 1],
  ['sl-[v+]', 1],
  ['st-[v+]', 1],
  ['[v+]-zm', 1],
  ['[v+]-sk', 1],
  ['[v+]-tl', 1],
  ['[v+]-dl', 1],
  ['[v+]-sp', 1],
  ['spr-[v+]', 1],
  ['spw-[v+]', 1],
  ['spl-[v+]', 1],
  ['str-[v+]', 1],
  ['[v+]-gc', 1],
  ['[v+]-ngc', 1],
  ['[v+]-fc', 1],
  ['[v+]-fd', 1],
  ['[v+]-ft', 1],
  ['[v+]-p.', 1],
  ['[v+]-t.', 1],
  ['[v+]-k.', 1],
]

const simpleVowels = [
  ['i', 10],
  ['a', 10],
  ['u', 10],
  ['e', 10],
  ['E', 10],
  ['U', 10],
  ['I', 10],
  ['o', 10],
  ['A', 10],
  ['O', 10],
  ['o#', 5],
  ['u#', 5],
  ['e#', 5],
  ['i#', 5],
  ['a#', 5],
  ['ii', 5],
  ['aa', 5],
  ['uu', 5],
  ['ee', 5],
  ['oo', 5],
]

const complexVowels = [
  ['ia', 1],
  ['iu', 1],
  ['ie', 1],
  ['iE', 1],
  ['iU', 1],
  ['iI', 1],
  ['io', 1],
  ['iA', 1],
  ['iO', 1],
  ['io#', 1],
  ['iu#', 1],
  ['ie#', 1],
  ['ii#', 1],
  ['ia#', 1],
  ['ai', 1],
  ['au', 1],
  ['ae', 1],
  ['aE', 1],
  ['aU', 1],
  ['aI', 1],
  ['ao', 1],
  ['aA', 1],
  ['aO', 1],
  ['ao#', 1],
  ['au#', 1],
  ['ae#', 1],
  ['ai#', 1],
  ['aa#', 1],
  ['ui', 1],
  ['ua', 1],
  ['ue', 1],
  ['uE', 1],
  ['uU', 1],
  ['uI', 1],
  ['uo', 1],
  ['uA', 1],
  ['uO', 1],
  ['uo#', 1],
  ['uu#', 1],
  ['ue#', 1],
  ['ui#', 1],
  ['ua#', 1],
  ['ei', 1],
  ['ea', 1],
  ['eu', 1],
  ['eE', 1],
  ['eU', 1],
  ['eI', 1],
  ['eo', 1],
  ['eA', 1],
  ['eO', 1],
  ['eo#', 1],
  ['eu#', 1],
  ['ee#', 1],
  ['ei#', 1],
  ['ea#', 1],
  ['oi', 1],
  ['oa', 1],
  ['ou', 1],
  ['oe', 1],
  ['oE', 1],
  ['oU', 1],
  ['oI', 1],
  ['oA', 1],
  ['oO', 1],
  ['oo#', 1],
  ['ou#', 1],
  ['oe#', 1],
  ['oi#', 1],
  ['oa#', 1],
]

const vowels = simpleVowels.concat(complexVowels)

const randomize = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const generate = () => {
  const size = getRandomElement(sizes)
  const parts = new Array(size)
  let i = 0
  while (i < size) {
    let part = getRandomElement(consonants)
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
    .replace(/\[v\+\]/g, () => fetchVowels({ accent: vowelI++ == accent }))
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

const fetchVowels = ({ accent = false }) => {
  const v = getRandomElement(vowels)

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

  const n = getRandomElement(nasals)

  if (n) {
    p = p.map(x => `${x}~`)
  }

  const t = getRandomElement(tones)

  if (t.trim()) {
    let letter = p.shift()

    t.split('').forEach((x, i) => {
      const z = `${letter}${x}`.trim()
      p.splice(i, 0, z)
    })
  }

  if (accent) {
    p[0] = `(${p[0]})`
  }

  return p.join('')
}

const out = [`call-script-encoding`,`call-script-ascii`,`tone-script-encoding`]
const log = text => {
  out.push({
    call: call(text),
    text: text,
    tone: tone(text)
  })
}
let i = 0
while (i++ < 10000) {
  log(generate())
}

const fs = require('fs')
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

function getRandomElement(data) {
  // First, we loop the main dataset to count up the total weight.
  // We're starting the counter at one because the upper boundary
  // of Math.random() is exclusive.
  let total = 0;
  for (let i = 0; i < data.length; ++i) {
      total += data[i][1];
  }

  // Total in hand, we can now pick a random value akin to our
  // random index from before.
  const threshold = Math.random() * total;

  // Now we just need to loop through the main data one more time
  // until we discover which value would live within this
  // particular threshold. We need to keep a running count of
  // weights as we go, so let's just reuse the "total" variable
  // since it was already declared.
  total = 0;
  for (let i = 0; i < data.length - 1; ++i) {
      // Add the weight to our running total.
      total += data[i][1];

      // If this value falls within the threshold, we're done!
      if (total >= threshold) {
          return data[i][0];
      }
  }

  // Wouldn't you know it, we needed the very last entry!
  return data[data.length - 1][0];
}
