
const call = require('../call-script')
const tone = require('../tone-script')

const singleTones = [
  [' ', 20],
  ['+', 1],
  ['-', 1],
]

const dualTones = [
  ['  ', 20],
  [' +', 2],
  [' -', 2],
  ['+ ', 1],
  ['- ', 1],
  ['+-', 0.5],
  ['-+', 0.5],
]

const tones = singleTones.concat(dualTones)

const nasals = [
  ['', 20],
  ['~', 1],
]

const sizes = [
  [1, 30],
  [2, 10],
  [3, 5],
  [4, 3],
  [5, 2],
  [6, 1]
]

const consonants = [
  ['[v+]yb', 1],
  ['[v+]yc', 1],
  ['[v+]yf', 1],
  ['[v+]yj', 1],
  ['[v+]yk', 1],
  ['[v+]yl', 1],
  ['[v+]ym', 1],
  ['[v+]yn', 1],
  ['[v+]yp', 1],
  ['[v+]ys', 1],
  ['[v+]yt', 1],
  ['[v+]yv', 1],
  ['[v+]yz', 1],
  ['[v+]st', 1],
  ['[v+]mp', 1],
  ['[v+]mpt', 1],
  ['[v+]mps', 1],
  ['[v+]nt', 1],
  ['[v+]lk', 1],
  ['[v+]st', 1],
  ['[v+]nst', 1],
  ['[v+]rd', 1],
  ['[v+]rg', 1],
  ['[v+]rk', 1],
  ['[v+]lf', 1],
  ['[v+]wl', 1],
  ['[v+]\'', 1],
  ['bl[v+]', 1],
  ['fl[v+]', 1],
  ['pl[v+]', 1],
  ['gl[v+]', 1],
  ['kl[v+]', 1],
  ['b[v+]', 100],
  ['c[v+]', 100],
  ['C[v+]', 100],
  ['d[v+]', 100],
  ['h[v+]', 100],
  ['j[v+]', 100],
  ['dj[v+]', 100],
  ['k[v+]', 100],
  ['K[v+]', 100],
  ['l[v+]', 100],
  ['L[v+]', 100],
  ['m[v+]', 100],
  ['M[v+]', 100],
  ['n[v+]', 100],
  ['n[v+]', 100],
  ['p[v+]', 100],
  ['r[v+]', 20],
  ['R[v+]', 100],
  ['s[v+]', 20],
  ['S[v+]', 100],
  ['t[v+]', 20],
  ['T[v+]', 100],
  ['v[v+]', 100],
  ['V[v+]', 100],
  ['w[v+]', 100],
  ['x[v+]', 100],
  ['X[v+]', 100],
  ['y[v+]', 100],
  ['z[v+]', 100],
  ['Z[v+]', 100],
  ['q[v+]', 100],
  ['\'[v+]', 100],
  ['p![v+]', 1],
  ['t![v+]', 1],
  ['k![v+]', 1],
  ['p*[v+]', 1],
  ['t*[v+]', 1],
  ['k*[v+]', 1],
  ['d*[v+]', 1],
  ['l*[v+]', 1],
  ['t~[v+]', 1],
  ['s~[v+]', 1],
  ['C~[v+]', 1],
  ['d~[v+]', 1],
  ['[v+]bb[v+]', 50],
  ['[v+]cc[v+]', 5],
  ['[v+]CC[v+]', 5],
  ['[v+]dd[v+]', 50],
  ['[v+]hh[v+]', 5],
  ['[v+]jj[v+]', 5],
  ['[v+]kk[v+]', 50],
  ['[v+]KK[v+]', 50],
  ['[v+]ll[v+]', 50],
  ['[v+]LL[v+]', 50],
  ['[v+]mm[v+]', 50],
  ['[v+]MM[v+]', 1],
  ['[v+]nn[v+]', 50],
  ['[v+]nn[v+]', 50],
  ['[v+]pp[v+]', 50],
  ['[v+]rr[v+]', 50],
  ['[v+]RR[v+]', 2],
  ['[v+]ss[v+]', 50],
  ['[v+]SS[v+]', 2],
  ['[v+]tt[v+]', 50],
  ['[v+]TT[v+]', 20],
  ['[v+]vv[v+]', 50],
  ['[v+]VV[v+]', 5],
  ['[v+]ww[v+]', 50],
  ['[v+]xx[v+]', 50],
  ['[v+]XX[v+]', 10],
  ['[v+]yy[v+]', 50],
  ['[v+]zz[v+]', 50],
  ['[v+]ZZ[v+]', 5],
  ['[v+]qq[v+]', 5],
  ['[v+]b', 30],
  ['[v+]q', 30],
  ['[v+]c', 30],
  ['[v+]C', 30],
  ['[v+]d', 30],
  ['[v+]h', 30],
  ['[v+]j', 30],
  ['[v+]dj', 30],
  ['[v+]dz', 30],
  ['[v+]k', 30],
  ['[v+]K', 30],
  ['[v+]l', 30],
  ['[v+]L', 30],
  ['[v+]m', 30],
  ['[v+]M', 1],
  ['[v+]n', 30],
  ['[v+]n', 30],
  ['[v+]p', 30],
  ['[v+]r', 30],
  ['[v+]R', 2],
  ['[v+]s', 30],
  ['[v+]S', 2],
  ['[v+]t', 30],
  ['[v+]ts', 20],
  ['[v+]tx', 20],
  ['[v+]T', 30],
  ['[v+]TX', 3],
  ['[v+]v', 30],
  ['[v+]V', 2],
  ['[v+]w', 30],
  ['[v+]x', 30],
  ['[v+]X', 10],
  ['[v+]y', 30],
  ['[v+]z', 30],
  ['[v+]Z', 2],
  ['by[v+]', 1],
  ['cy[v+]', 1],
  ['Cy[v+]', 1],
  ['dy[v+]', 1],
  ['hy[v+]', 1],
  ['jy[v+]', 1],
  ['djy[v+]', 1],
  ['dzy[v+]', 1],
  ['ky[v+]', 1],
  ['Ky[v+]', 1],
  ['ly[v+]', 1],
  ['Ly[v+]', 1],
  ['my[v+]', 1],
  ['My[v+]', 1],
  ['ny[v+]', 1],
  ['ny[v+]', 1],
  ['py[v+]', 1],
  ['ry[v+]', 1],
  ['Ry[v+]', 1],
  ['sy[v+]', 1],
  ['Sy[v+]', 1],
  ['ty[v+]', 1],
  ['txy[v+]', 1],
  ['tsy[v+]', 1],
  ['Ty[v+]', 1],
  ['TXy[v+]', 1],
  ['vy[v+]', 1],
  ['Vy[v+]', 1],
  ['wy[v+]', 1],
  ['xy[v+]', 1],
  ['Xy[v+]', 1],
  ['yy[v+]', 1],
  ['zy[v+]', 1],
  ['Zy[v+]', 1],
  ['\'y[v+]', 1],
  ['br[v+]', 1],
  ['cr[v+]', 1],
  ['Cr[v+]', 1],
  ['dr[v+]', 1],
  ['hr[v+]', 1],
  ['jr[v+]', 1],
  ['djr[v+]', 1],
  ['kr[v+]', 1],
  ['Kr[v+]', 1],
  ['pr[v+]', 1],
  ['rr[v+]', 1],
  ['sr[v+]', 1],
  ['Sr[v+]', 1],
  ['tr[v+]', 1],
  ['txr[v+]', 1],
  ['Tr[v+]', 1],
  ['TXr[v+]', 1],
  ['vr[v+]', 1],
  ['Vr[v+]', 1],
  ['wr[v+]', 1],
  ['xr[v+]', 1],
  ['Xr[v+]', 1],
  ['zr[v+]', 1],
  ['Zr[v+]', 1],
  ['bh[v+]', 4],
  ['ch[v+]', 1],
  ['Ch[v+]', 1],
  ['dh[v+]', 4],
  ['hh[v+]', 1],
  ['jh[v+]', 1],
  ['djh[v+]', 1],
  ['kh[v+]', 4],
  ['Kh[v+]', 4],
  ['lh[v+]', 4],
  ['Lh[v+]', 1],
  ['mh[v+]', 1],
  ['Mh[v+]', 1],
  ['nh[v+]', 1],
  ['nh[v+]', 1],
  ['ph[v+]', 4],
  ['rh[v+]', 1],
  ['Rh[v+]', 1],
  ['sh[v+]', 1],
  ['Sh[v+]', 1],
  ['th[v+]', 4],
  ['Th[v+]', 4],
  ['vh[v+]', 1],
  ['Vh[v+]', 1],
  ['wh[v+]', 1],
  ['xh[v+]', 1],
  ['Xh[v+]', 1],
  ['yh[v+]', 1],
  ['zh[v+]', 1],
  ['Zh[v+]', 1],
  ['sk[v+]', 1],
  ['skr[v+]', 10],
  ['skl[v+]', 10],
  ['sn[v+]', 10],
  ['sm[v+]', 10],
  ['sl[v+]', 10],
  ['st[v+]', 10],
  ['[v+]zm', 1],
  ['[v+]sk', 1],
  ['[v+]tl', 1],
  ['[v+]dl', 1],
  ['[v+]sp', 1],
  ['spr[v+]', 10],
  ['spw[v+]', 10],
  ['spl[v+]', 10],
  ['str[v+]', 10],
  ['[v+]gc', 4],
  ['[v+]ngc', 1],
  ['[v+]fc', 4],
  ['[v+]fd', 3],
  ['[v+]ft', 3],
  ['[v+]p.', 1],
  ['[v+]t.', 1],
  ['[v+]k.', 1],
]

const simpleVowels = [
  ['i', 100],
  ['a', 100],
  ['u', 100],
  ['e', 100],
  ['E', 100],
  ['U', 100],
  ['I', 100],
  ['o', 100],
  ['A', 100],
  ['O', 100],
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

  let vowelless = parts.join('').split(/\[v\+\]/)
  for (let i = 0; i < vowelless.length; i++) {
    let vowellessi = vowelless[i]
    if (!vowellessi) {
      if (i > 0 && i < vowelless.length - 1) {
        vowelless.splice(i, 1)
        i--
      }
    }
  }

  let vowelCount = vowelless.length - 1
  let vowelled = vowelless.join('[v+]')
  let accent = vowelCount > 1 ? randomize(0, vowelCount - 1) : -1

  let vowelI = 0
  let string = vowelled
    .replace(/\[v\+\]/g, () => fetchVowels({ accent: vowelI++ == accent }))
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

  if (p.length == 1) {
    const t = getRandomElement(singleTones).trim()
    p[0] = `${p[0]}${t}`
  } else {
    const t = getRandomElement(dualTones)
    t.split('').forEach((x, i) => {
      p[i] = `${p[i]}${x}`.trim()
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
