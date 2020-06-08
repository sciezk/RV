const h = document.documentElement.clientHeight;
const w = document.documentElement.clientWidth;

// canvas
const svg = d3.select('body')
  .append('svg')
  .attr('width', w)
  .attr('height', h)
  .attr('viewBox', [-w/2, -h/2, w, h].join(' '));

var N, minR, maxR;
var discs = false;

var Xs = [];
var Ys = [];
var Rs = [];
var C = null;
var EPSILON = 1e-12;


function welzl (X, Y, R) {
  var indexes  = shuffle(X.map((r, i) => i));
  var from2    = R ? from2discs    : from2points;
  var from3    = R ? from3discs    : from3points;
  var contains = R ? containsDisc  : containsPoint;

  R = R || [];

  return minDisc(indexes, [], indexes.length, X, Y, R, contains, from2, from3);
}


// Clone list to preserve the caller's data, do Knuth shuffle
function shuffle (indexes) {
	for (var i = N - 1; i >= 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
			  j = Math.max(Math.min(j, i), 0);
		var tmp    = indexes[i];
		indexes[i] = indexes[j];
		indexes[j] = tmp;
	}
  return indexes;
}


function combine (P, S, X, Y, R, from2, from3) {
  var circle = null;
  var len = S.length;
  var u, v, w;

  if (len === 1) {         // 1 point
    u = S[0];
    circle = [X[u], Y[u], R[u] || 0];
  } else if (len === 2) {  // 2 points
    u = S[0]; v = S[1];
    circle = from2(X[u], Y[u], X[v], Y[v], R[u], R[v]);
  } else if (len === 3) {  // 3 points
    u = S[0]; v = S[1]; w = S[2];
    circle = from3(X[u], Y[u], X[v], Y[v], X[w], Y[w], R[u], R[v], R[w]);
  }

  return circle;
}


function minDisc (points, bounds, n, X, Y, R, contains, from2, from3) {
  var circle = null;

  if (n === 0 || bounds.length === 3) {
    circle = combine(points, bounds, X, Y, R, from2, from3);
  } else {
    var u = points[n - 1];
    circle = minDisc(points, bounds, n - 1, X, Y, R, contains, from2, from3);

    if (circle === null || !contains(circle, X[u], Y[u], R[u])) {
      bounds.push(u);
      circle = minDisc(points, bounds, n - 1, X, Y, R, contains, from2, from3);
      bounds.pop();
    }
  }

  return circle;
}


function from2points (ax, ay, bx, by) {
  var dx = ax - bx, dy = ay - by;
	return [
		(ax + bx) / 2,
		(ay + by) / 2,
		Math.sqrt(dx * dx + dy * dy) / 2
	];
}


function from2discs (ax, ay, bx, by, ar, br) {
  var dx = bx - ax;
  var dy = by - ay;
  var dr = br - ar;
  var l = Math.sqrt(dx * dx + dy * dy);

  return [
    (ax + bx + dx / l * dr) / 2,
    (ay + by + dy / l * dr) / 2,
    (l + ar + br) / 2
  ];
}


function from3discs (ax, ay, bx, by, cx, cy, ar, br, cr) {
  var a2 = 2 * (ax - bx),
      b2 = 2 * (ay - by),
      c2 = 2 * (br - ar);
  var d2 = ax * ax + ay * ay - ar * ar - bx * bx - by * by + br * br;
  var a3 = 2 * (ax - cx),
      b3 = 2 * (ay - cy),
      c3 = 2 * (cr - ar);
  var d3 = ax * ax + ay * ay - ar * ar - cx * cx - cy * cy + cr * cr;
  var ab = a3 * b2 - a2 * b3,
      xa = (b2 * d3 - b3 * d2) / ab - ax,
      xb = (b3 * c2 - b2 * c3) / ab,
      ya = (a3 * d2 - a2 * d3) / ab - ay,
      yb = (a2 * c3 - a3 * c2) / ab;

  var A = xb * xb + yb * yb - 1,
      B = 2 * (xa * xb + ya * yb + ar),
      C = xa * xa + ya * ya - ar * ar,
      r = (-B - Math.sqrt(B * B - 4 * A * C)) / (2 * A);
  return [
    xa + xb * r + ax,
    ya + yb * r + ay,
    r
  ];
}

function from3points (ax, ay, bx, by, cx, cy) {
  var d = (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by)) * 2;
	if (d === 0) return null;
	var x = (
    (ax * ax + ay * ay) * (by - cy) +
    (bx * bx + by * by) * (cy - ay) +
    (cx * cx + cy * cy) * (ay - by)) / d;
	var y = (
    (ax * ax + ay * ay) * (cx - bx) +
    (bx * bx + by * by) * (ax - cx) +
    (cx * cx + cy * cy) * (bx - ax)) / d;
  var dx = x - ax, dy = y - ay;

	return [
    x, y,
    Math.sqrt((x - ax) * (x - ax) + (y - ay) * (y - ay))
  ];
}


function containsPoint (c, x, y) {
  var dx = c[0] - x, dy = c[1] - y;
  return Math.sqrt(dx * dx + dy * dy) < (c[2] + EPSILON);
}


function containsDisc (c, x, y, r) {
  var dx = c[0] - x, dy = c[1] - y, dr = c[2] - r;
	return (dx * dx + dy * dy) < (dr * dr + EPSILON);
}

// algorithm ends


function render () {
  svg.selectAll('circle').remove();

  Rs.forEach((r, i) => {
    svg.append('circle')
      .attr('cx', Xs[i])
      .attr('cy', Ys[i])
      .attr('r', r)
      .attr('data-id', i)
      .attr('class', 'circle')
      .call(d3.drag().on('drag',  drag));
  });

  if (C) {
    svg.append('circle')
      .attr('cx', C[0])
      .attr('cy', C[1])
      .attr('r',  C[2])
      .attr('class', 'enclosing-circle');
  }
}

var redrawTimer = 0;
function drag () {
  var id = parseInt(this.getAttribute('data-id'));
  Xs[id] = d3.event.x;
  Ys[id] = d3.event.y;

  clearTimeout(redrawTimer);
  redrawTimer = setTimeout(function () {
    C = welzl(Xs, Ys, discs ? Rs : null);
    render();
  });
}

var form = document.querySelector('.control');

function quadOut(k) {
  return k * k * k;
}

function generate () {
  N       = parseInt(form['numCircles'].value);
  minR    = parseInt(form['minR'].value);
  maxR    = parseInt(form['maxR'].value);
  discs   = form['circles'].checked;

  Xs = new Array(N);
  Ys = new Array(N);
  Rs = new Array(N);

  for (var i = 0; i < N; i++) {
    var r = minR + quadOut(i / N) * (maxR - minR);
    Rs[i] = r;
    Xs[i] = (w * (2 / 3) - 2 * r) * Math.random() - w / 3 + r;
    Ys[i] = (h * (2 / 3) - 2 * r) * Math.random() - h / 3 + r;
  }
  C = null;
}

svg.on('click', function () {
  var coords = d3.mouse(this);
  var r = minR + Math.random() * (maxR - minR);
  N++;

  Rs.push(r);
  Xs.push(coords[0]);
  Ys.push(coords[1]);

  C = welzl(Xs, Ys, discs ? Rs : null);
  render();
});

form.addEventListener('reset', (evt) => {
  evt.preventDefault();
  generate();
  C = welzl(Xs, Ys, discs ? Rs : null);
  render();
});

form['circles'].addEventListener('change', (evt) => {
  discs   = form['circles'].checked;
  C = welzl(Xs, Ys, discs ? Rs : null);
  render();
});

generate();
C = welzl(Xs, Ys, discs ? Rs : null);
render();
