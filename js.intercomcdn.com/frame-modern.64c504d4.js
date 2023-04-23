!(function (e) {
  function t(t) {
    for (
      var r, s, c = t[0], a = t[1], u = t[2], d = 0, p = [];
      d < c.length;
      d++
    )
      (s = c[d]),
        Object.prototype.hasOwnProperty.call(i, s) && i[s] && p.push(i[s][0]),
        (i[s] = 0);
    for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
    for (l && l(t); p.length; ) p.shift()();
    return o.push.apply(o, u || []), n();
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], r = !0, c = 1; c < n.length; c++) {
        var a = n[c];
        0 !== i[a] && (r = !1);
      }
      r && (o.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var r = {},
    i = { 5: 0 },
    o = [];
  function s(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.e = function (e) {
    var t = [],
      n = i[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var r = new Promise(function (t, r) {
          n = i[e] = [t, r];
        });
        t.push((n[2] = r));
        var o,
          c = document.createElement("script");
        (c.charset = "utf-8"),
          (c.timeout = 120),
          s.nc && c.setAttribute("nonce", s.nc),
          (c.src = (function (e) {
            return (
              s.p +
              "" +
              ({
                0: "app~tooltips",
                1: "vendors~app~tooltips",
                2: "app",
                3: "banner",
                4: "confetti",
                6: "install",
                7: "launcher-discovery",
                8: "locale-da-json",
                9: "locale-et-json",
                10: "locale-nb-json",
                11: "locale-package-json",
                12: "locale-sv-json",
                13: "locale-zh-CN-json",
                14: "locale-zh-TW-json",
                15: "message",
                16: "sentry",
                17: "survey",
                18: "tooltips",
                20: "vendors~app",
                21: "vendors~locale-ar-json",
                22: "vendors~locale-bg-json",
                23: "vendors~locale-bn-json",
                24: "vendors~locale-bs-json",
                25: "vendors~locale-ca-json",
                26: "vendors~locale-cs-json",
                27: "vendors~locale-de-form-json",
                28: "vendors~locale-de-json",
                29: "vendors~locale-el-json",
                30: "vendors~locale-es-json",
                31: "vendors~locale-fa-IR-json",
                32: "vendors~locale-fi-json",
                33: "vendors~locale-fr-json",
                34: "vendors~locale-he-json",
                35: "vendors~locale-hr-json",
                36: "vendors~locale-hu-json",
                37: "vendors~locale-id-json",
                38: "vendors~locale-it-json",
                39: "vendors~locale-ja-json",
                40: "vendors~locale-ko-json",
                41: "vendors~locale-lt-json",
                42: "vendors~locale-lv-json",
                43: "vendors~locale-mn-json",
                44: "vendors~locale-ms-json",
                45: "vendors~locale-nl-json",
                46: "vendors~locale-pl-json",
                47: "vendors~locale-pt-BR-json",
                48: "vendors~locale-pt-json",
                49: "vendors~locale-ro-json",
                50: "vendors~locale-ru-json",
                51: "vendors~locale-sl-json",
                52: "vendors~locale-sr-json",
                53: "vendors~locale-th-json",
                54: "vendors~locale-tr-json",
                55: "vendors~locale-uk-json",
                56: "vendors~locale-vi-json",
                57: "vendors~message",
                58: "vendors~sentry",
                59: "vendors~tooltips",
              }[e] || e) +
              "-modern." +
              {
                0: "1bee4369",
                1: "684f814f",
                2: "4c56e682",
                3: "9d74d78b",
                4: "88cb29a4",
                6: "764c911a",
                7: "4ad07a1f",
                8: "8f9de549",
                9: "c9774c40",
                10: "1b97c1db",
                11: "787c4131",
                12: "6a17ef9e",
                13: "fe3e920e",
                14: "6003fee6",
                15: "6a6b103a",
                16: "fe2fc2b0",
                17: "9bd812ac",
                18: "64f3996e",
                20: "dbf9a140",
                21: "4d871b71",
                22: "5fe361f8",
                23: "7b669cf3",
                24: "d4f4d65a",
                25: "85035155",
                26: "994428b7",
                27: "0411fdc6",
                28: "b3a1b100",
                29: "67ad17f4",
                30: "24aeca65",
                31: "6817f385",
                32: "914343a0",
                33: "8560cbd6",
                34: "7969b263",
                35: "ddd419c7",
                36: "d863fcc3",
                37: "6c34dd7e",
                38: "8facb441",
                39: "35529938",
                40: "362f358b",
                41: "66c33c36",
                42: "c2c1f13c",
                43: "a466bc50",
                44: "22082baf",
                45: "dd3b1d7b",
                46: "636a430e",
                47: "783f42b4",
                48: "31806487",
                49: "c523888b",
                50: "dc2378e3",
                51: "d93e0f0a",
                52: "91208c6d",
                53: "ecd12373",
                54: "3a018e0e",
                55: "8d1b5b9d",
                56: "44fb7c2d",
                57: "f100b064",
                58: "c90dcbe7",
                59: "7d3903ba",
                60: "2143c8a8",
              }[e] +
              ".js"
            );
          })(e));
        var a = new Error();
        o = function (t) {
          (c.onerror = c.onload = null), clearTimeout(u);
          var n = i[e];
          if (0 !== n) {
            if (n) {
              var r = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src;
              (a.message =
                "Loading chunk " + e + " failed.\n(" + r + ": " + o + ")"),
                (a.name = "ChunkLoadError"),
                (a.type = r),
                (a.request = o),
                n[1](a);
            }
            i[e] = void 0;
          }
        };
        var u = setTimeout(function () {
          o({ type: "timeout", target: c });
        }, 12e4);
        (c.onerror = c.onload = o), document.head.appendChild(c);
      }
    return Promise.all(t);
  }),
    (s.m = e),
    (s.c = r),
    (s.d = function (e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (s.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          s.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = "https://js.intercomcdn.com/"),
    (s.oe = function (e) {
      throw (console.error(e), e);
    });
  var c = (window.webpackJsonp = window.webpackJsonp || []),
    a = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var u = 0; u < c.length; u++) t(c[u]);
  var l = a;
  o.push([376, 19]), n();
})([
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return r;
    }),
      n.d(t, "a", function () {
        return i;
      }),
      n.d(t, "c", function () {
        return o;
      }),
      n.d(t, "d", function () {
        return s;
      }),
      n.d(t, "e", function () {
        return c;
      }),
      n.d(t, "f", function () {
        return a;
      }),
      n.d(t, "g", function () {
        return u;
      }),
      n.d(t, "h", function () {
        return l;
      }),
      n.d(t, "i", function () {
        return d;
      }),
      n.d(t, "k", function () {
        return p;
      }),
      n.d(t, "l", function () {
        return f;
      }),
      n.d(t, "m", function () {
        return b;
      }),
      n.d(t, "n", function () {
        return h;
      }),
      n.d(t, "o", function () {
        return g;
      }),
      n.d(t, "p", function () {
        return m;
      }),
      n.d(t, "r", function () {
        return v;
      }),
      n.d(t, "s", function () {
        return y;
      }),
      n.d(t, "t", function () {
        return O;
      }),
      n.d(t, "u", function () {
        return _;
      }),
      n.d(t, "v", function () {
        return w;
      }),
      n.d(t, "w", function () {
        return j;
      }),
      n.d(t, "x", function () {
        return C;
      }),
      n.d(t, "y", function () {
        return S;
      }),
      n.d(t, "A", function () {
        return E;
      }),
      n.d(t, "B", function () {
        return I;
      }),
      n.d(t, "D", function () {
        return A;
      }),
      n.d(t, "C", function () {
        return P;
      }),
      n.d(t, "E", function () {
        return k;
      }),
      n.d(t, "F", function () {
        return T;
      }),
      n.d(t, "G", function () {
        return R;
      }),
      n.d(t, "H", function () {
        return M;
      }),
      n.d(t, "I", function () {
        return x;
      }),
      n.d(t, "J", function () {
        return L;
      }),
      n.d(t, "K", function () {
        return D;
      }),
      n.d(t, "L", function () {
        return N;
      }),
      n.d(t, "V", function () {
        return U;
      }),
      n.d(t, "W", function () {
        return z;
      }),
      n.d(t, "X", function () {
        return B;
      }),
      n.d(t, "M", function () {
        return V;
      }),
      n.d(t, "O", function () {
        return H;
      }),
      n.d(t, "N", function () {
        return F;
      }),
      n.d(t, "P", function () {
        return $;
      }),
      n.d(t, "Q", function () {
        return G;
      }),
      n.d(t, "R", function () {
        return W;
      }),
      n.d(t, "S", function () {
        return q;
      }),
      n.d(t, "T", function () {
        return J;
      }),
      n.d(t, "U", function () {
        return K;
      }),
      n.d(t, "Y", function () {
        return Z;
      }),
      n.d(t, "Z", function () {
        return Y;
      }),
      n.d(t, "bb", function () {
        return Q;
      }),
      n.d(t, "cb", function () {
        return X;
      }),
      n.d(t, "db", function () {
        return ee;
      }),
      n.d(t, "fb", function () {
        return te;
      }),
      n.d(t, "gb", function () {
        return ne;
      }),
      n.d(t, "hb", function () {
        return re;
      }),
      n.d(t, "ib", function () {
        return ie;
      }),
      n.d(t, "Vc", function () {
        return oe;
      }),
      n.d(t, "Sc", function () {
        return se;
      }),
      n.d(t, "jb", function () {
        return ce;
      }),
      n.d(t, "z", function () {
        return ae;
      }),
      n.d(t, "Od", function () {
        return ue;
      }),
      n.d(t, "Hb", function () {
        return le;
      }),
      n.d(t, "kb", function () {
        return de;
      }),
      n.d(t, "mb", function () {
        return pe;
      }),
      n.d(t, "nb", function () {
        return fe;
      }),
      n.d(t, "ub", function () {
        return be;
      }),
      n.d(t, "vb", function () {
        return he;
      }),
      n.d(t, "wb", function () {
        return ge;
      }),
      n.d(t, "xb", function () {
        return me;
      }),
      n.d(t, "zb", function () {
        return ve;
      }),
      n.d(t, "Ab", function () {
        return ye;
      }),
      n.d(t, "yb", function () {
        return Oe;
      }),
      n.d(t, "sb", function () {
        return _e;
      }),
      n.d(t, "tb", function () {
        return we;
      }),
      n.d(t, "rb", function () {
        return je;
      }),
      n.d(t, "pb", function () {
        return Ce;
      }),
      n.d(t, "Bb", function () {
        return Se;
      }),
      n.d(t, "qb", function () {
        return Ee;
      }),
      n.d(t, "Cb", function () {
        return Ie;
      }),
      n.d(t, "ob", function () {
        return Ae;
      }),
      n.d(t, "Db", function () {
        return Pe;
      }),
      n.d(t, "Eb", function () {
        return ke;
      }),
      n.d(t, "Fb", function () {
        return Te;
      }),
      n.d(t, "Gb", function () {
        return Re;
      }),
      n.d(t, "Ib", function () {
        return Me;
      }),
      n.d(t, "Jb", function () {
        return xe;
      }),
      n.d(t, "Kb", function () {
        return Le;
      }),
      n.d(t, "Lb", function () {
        return De;
      }),
      n.d(t, "Pb", function () {
        return Ne;
      }),
      n.d(t, "Qb", function () {
        return Ue;
      }),
      n.d(t, "Rb", function () {
        return ze;
      }),
      n.d(t, "Mb", function () {
        return Be;
      }),
      n.d(t, "Nb", function () {
        return Ve;
      }),
      n.d(t, "Ob", function () {
        return He;
      }),
      n.d(t, "Sb", function () {
        return Fe;
      }),
      n.d(t, "pd", function () {
        return $e;
      }),
      n.d(t, "Ec", function () {
        return Ge;
      }),
      n.d(t, "Tb", function () {
        return We;
      }),
      n.d(t, "Ub", function () {
        return qe;
      }),
      n.d(t, "Vb", function () {
        return Je;
      }),
      n.d(t, "Wb", function () {
        return Ke;
      }),
      n.d(t, "Xb", function () {
        return Ze;
      }),
      n.d(t, "Yb", function () {
        return Ye;
      }),
      n.d(t, "Zb", function () {
        return Qe;
      }),
      n.d(t, "ac", function () {
        return Xe;
      }),
      n.d(t, "bc", function () {
        return et;
      }),
      n.d(t, "cc", function () {
        return tt;
      }),
      n.d(t, "dc", function () {
        return nt;
      }),
      n.d(t, "ec", function () {
        return rt;
      }),
      n.d(t, "fc", function () {
        return it;
      }),
      n.d(t, "hc", function () {
        return ot;
      }),
      n.d(t, "jc", function () {
        return st;
      }),
      n.d(t, "kc", function () {
        return ct;
      }),
      n.d(t, "lc", function () {
        return at;
      }),
      n.d(t, "ic", function () {
        return ut;
      }),
      n.d(t, "pc", function () {
        return lt;
      }),
      n.d(t, "j", function () {
        return dt;
      }),
      n.d(t, "qc", function () {
        return pt;
      }),
      n.d(t, "sc", function () {
        return ft;
      }),
      n.d(t, "tc", function () {
        return bt;
      }),
      n.d(t, "uc", function () {
        return ht;
      }),
      n.d(t, "vc", function () {
        return gt;
      }),
      n.d(t, "wc", function () {
        return mt;
      }),
      n.d(t, "yc", function () {
        return vt;
      }),
      n.d(t, "xc", function () {
        return yt;
      }),
      n.d(t, "oc", function () {
        return Ot;
      }),
      n.d(t, "nc", function () {
        return _t;
      }),
      n.d(t, "Bc", function () {
        return wt;
      }),
      n.d(t, "Cc", function () {
        return jt;
      }),
      n.d(t, "Ac", function () {
        return Ct;
      }),
      n.d(t, "Fc", function () {
        return St;
      }),
      n.d(t, "Gc", function () {
        return Et;
      }),
      n.d(t, "mc", function () {
        return It;
      }),
      n.d(t, "Ic", function () {
        return At;
      }),
      n.d(t, "Hc", function () {
        return Pt;
      }),
      n.d(t, "Jc", function () {
        return kt;
      }),
      n.d(t, "Kc", function () {
        return Tt;
      }),
      n.d(t, "ad", function () {
        return Rt;
      }),
      n.d(t, "cd", function () {
        return Mt;
      }),
      n.d(t, "bd", function () {
        return xt;
      }),
      n.d(t, "eb", function () {
        return Lt;
      }),
      n.d(t, "rc", function () {
        return Dt;
      }),
      n.d(t, "q", function () {
        return Nt;
      }),
      n.d(t, "Lc", function () {
        return Ut;
      }),
      n.d(t, "Mc", function () {
        return zt;
      }),
      n.d(t, "Nc", function () {
        return Bt;
      }),
      n.d(t, "Oc", function () {
        return Vt;
      }),
      n.d(t, "Qc", function () {
        return Ht;
      }),
      n.d(t, "Rc", function () {
        return Ft;
      }),
      n.d(t, "Pd", function () {
        return $t;
      }),
      n.d(t, "lb", function () {
        return Gt;
      }),
      n.d(t, "Wd", function () {
        return Wt;
      }),
      n.d(t, "gc", function () {
        return qt;
      }),
      n.d(t, "Yd", function () {
        return Jt;
      }),
      n.d(t, "Tc", function () {
        return Kt;
      }),
      n.d(t, "Uc", function () {
        return Zt;
      }),
      n.d(t, "Wc", function () {
        return Yt;
      }),
      n.d(t, "Xc", function () {
        return Qt;
      }),
      n.d(t, "Yc", function () {
        return Xt;
      }),
      n.d(t, "dd", function () {
        return en;
      }),
      n.d(t, "Zc", function () {
        return tn;
      }),
      n.d(t, "Md", function () {
        return nn;
      }),
      n.d(t, "ed", function () {
        return rn;
      }),
      n.d(t, "fd", function () {
        return on;
      }),
      n.d(t, "gd", function () {
        return sn;
      }),
      n.d(t, "id", function () {
        return cn;
      }),
      n.d(t, "kd", function () {
        return an;
      }),
      n.d(t, "jd", function () {
        return un;
      }),
      n.d(t, "hd", function () {
        return ln;
      }),
      n.d(t, "ld", function () {
        return dn;
      }),
      n.d(t, "md", function () {
        return pn;
      }),
      n.d(t, "nd", function () {
        return fn;
      }),
      n.d(t, "od", function () {
        return bn;
      }),
      n.d(t, "qd", function () {
        return hn;
      }),
      n.d(t, "rd", function () {
        return gn;
      }),
      n.d(t, "sd", function () {
        return mn;
      }),
      n.d(t, "ud", function () {
        return vn;
      }),
      n.d(t, "vd", function () {
        return yn;
      }),
      n.d(t, "td", function () {
        return On;
      }),
      n.d(t, "xd", function () {
        return _n;
      }),
      n.d(t, "yd", function () {
        return wn;
      }),
      n.d(t, "zd", function () {
        return jn;
      }),
      n.d(t, "Ad", function () {
        return Cn;
      }),
      n.d(t, "Bd", function () {
        return Sn;
      }),
      n.d(t, "Cd", function () {
        return En;
      }),
      n.d(t, "Dd", function () {
        return In;
      }),
      n.d(t, "Ed", function () {
        return An;
      }),
      n.d(t, "Fd", function () {
        return Pn;
      }),
      n.d(t, "Gd", function () {
        return kn;
      }),
      n.d(t, "Hd", function () {
        return Tn;
      }),
      n.d(t, "Id", function () {
        return Rn;
      }),
      n.d(t, "Jd", function () {
        return Mn;
      }),
      n.d(t, "Kd", function () {
        return xn;
      }),
      n.d(t, "Ld", function () {
        return Ln;
      }),
      n.d(t, "Nd", function () {
        return Dn;
      }),
      n.d(t, "Qd", function () {
        return Nn;
      }),
      n.d(t, "Sd", function () {
        return Un;
      }),
      n.d(t, "Rd", function () {
        return zn;
      }),
      n.d(t, "Td", function () {
        return Bn;
      }),
      n.d(t, "Ud", function () {
        return Vn;
      }),
      n.d(t, "Vd", function () {
        return Hn;
      }),
      n.d(t, "wd", function () {
        return Fn;
      }),
      n.d(t, "Pc", function () {
        return $n;
      }),
      n.d(t, "Xd", function () {
        return Gn;
      }),
      n.d(t, "Zd", function () {
        return Wn;
      }),
      n.d(t, "ae", function () {
        return qn;
      }),
      n.d(t, "be", function () {
        return Jn;
      }),
      n.d(t, "ce", function () {
        return Kn;
      }),
      n.d(t, "ee", function () {
        return Zn;
      }),
      n.d(t, "fe", function () {
        return Yn;
      }),
      n.d(t, "ge", function () {
        return Qn;
      }),
      n.d(t, "he", function () {
        return Xn;
      }),
      n.d(t, "qe", function () {
        return er;
      }),
      n.d(t, "ie", function () {
        return tr;
      }),
      n.d(t, "je", function () {
        return nr;
      }),
      n.d(t, "ke", function () {
        return rr;
      }),
      n.d(t, "le", function () {
        return ir;
      }),
      n.d(t, "me", function () {
        return or;
      }),
      n.d(t, "ne", function () {
        return sr;
      }),
      n.d(t, "oe", function () {
        return cr;
      }),
      n.d(t, "pe", function () {
        return ar;
      }),
      n.d(t, "re", function () {
        return ur;
      }),
      n.d(t, "se", function () {
        return lr;
      }),
      n.d(t, "te", function () {
        return dr;
      }),
      n.d(t, "de", function () {
        return pr;
      }),
      n.d(t, "Dc", function () {
        return fr;
      }),
      n.d(t, "ab", function () {
        return br;
      }),
      n.d(t, "ue", function () {
        return hr;
      }),
      n.d(t, "ve", function () {
        return gr;
      }),
      n.d(t, "we", function () {
        return mr;
      }),
      n.d(t, "xe", function () {
        return vr;
      }),
      n.d(t, "ye", function () {
        return yr;
      }),
      n.d(t, "ze", function () {
        return Or;
      }),
      n.d(t, "Ae", function () {
        return _r;
      }),
      n.d(t, "Be", function () {
        return wr;
      }),
      n.d(t, "zc", function () {
        return jr;
      });
    const r = "ACTIVATE_TRIGGER_FAILED",
      i = "ACTIVATE_TRIGGER",
      o = "ADD_CONVERSATION_RATING_REMARK",
      s = "ADD_INBOUND_SUGGESTIONS",
      c = "ADD_TRIGGER",
      a = "ADMIN_IS_TYPING",
      u = "ANONYMOUS_SESSION_CHANGED",
      l = "ARTICLE_GO_BACK",
      d = "ARTICLE_LOADED",
      p = "CHANGE_CONVERSATION_RATING_INDEX",
      f = "CHANGE_VIDEO_MUTED",
      b = "CLEAR_OPEN_ON_BOOT",
      h = "CLEAR_VALIDATION_STATE",
      g = "CLOSE_ALERT",
      m = "CLOSE_ARTICLE",
      v = "CLOSE_INSTALL_MODE",
      y = "CLOSE_LAUNCHER_DISCOVERY_MODE",
      O = "CLOSE_MESSAGE",
      _ = "CLOSE_MESSENGER",
      w = "CLOSE_POINTER_MESSAGE",
      j = "CLOSE_SEARCH_BROWSE_M5",
      C = "CLOSE_SHEET",
      S = "COLLECT_EMAIL_FROM_BANNER",
      E = "COMPLETE_TOUR",
      I = "COMPOSER_CONTENT_CHANGED",
      A = "CONVERSATION_READ_ELSEWHERE",
      P = "CONVERSATIONS_SCROLLED",
      k = "CREATE_ARTICLE_REACTION_REQUEST",
      T = "CREATE_BANNER_CUSTOMIZATION_OVERRIDE",
      R = "CREATE_COMMENT_FAILURE",
      M = "CREATE_COMMENT_REQUEST",
      x = "CREATE_COMMENT_SUCCESS",
      L = "CREATE_CONVERSATION_FAILURE",
      D = "CREATE_CONVERSATION_REQUEST",
      N = "CREATE_CONVERSATION_SUCCESS",
      U = "CREATE_TICKET_FAILURE",
      z = "CREATE_TICKET_REQUEST",
      B = "CREATE_TICKET_SUCCESS",
      V = "CREATE_CUSTOMIZATION_OVERRIDE",
      H = "CREATE_EVENT_FAILED",
      F = "CREATE_EVENT",
      $ = "CREATE_OR_UPDATE_USER_FAILURE",
      G = "CREATE_OR_UPDATE_USER_REQUEST",
      W = "CREATE_OR_UPDATE_USER_SUCCESS",
      q = "CREATE_REACTION_FAILURE",
      J = "CREATE_REACTION_REQUEST",
      K = "CREATE_REACTION_SUCCESS",
      Z = "DEACTIVATE_TRIGGER",
      Y = "DELIVER_BOT_INTRO",
      Q = "DESTROY_SESSION",
      X = "DISABLE_LAUNCHER_DISCOVERY_MODE",
      ee = "DISMISS_BANNER",
      te = "DISMISS_NOTIFICATIONS_FAILURE",
      ne = "DISMISS_NOTIFICATIONS_REQUEST",
      re = "DISMISS_NOTIFICATIONS_SUCCESS",
      ie = "DISMISS_POINTER_MESSAGE",
      oe = "RECORD_SURVEY_STEP_VALIDATION_RESULT",
      se = "RECORD_FIRST_FAILED_VALIDATION_QUESTION",
      ce = "DISMISS_SURVEY",
      ae = "COMPLETE_SURVEY",
      ue = "START_SUBMITTING_SURVEY",
      le = "FINISH_SUBMITTING_SURVEY",
      de = "EMAIL_ATTRIBUTE_COLLECTOR_INSERTED",
      pe = "ENTER_STANDALONE_MODE",
      fe = "EXPANSION_TRANSITION_COMPLETE",
      be = "FETCH_BANNER_VIEW",
      he = "FETCH_MESSENGER_SHEET_DATA_FAILURE",
      ge = "FETCH_MESSENGER_SHEET_DATA_REQUEST",
      me = "FETCH_MESSENGER_SHEET_DATA_SUCCESS",
      ve = "FETCH_NEWS_ITEM_DETAILS_REQUEST",
      ye = "FETCH_NEWS_ITEM_DETAILS_SUCCESS",
      Oe = "FETCH_NEWS_ITEM_DETAILS_FAILURE",
      _e = "FETCH_ANSWER_DETAILS_REQUEST",
      we = "FETCH_ANSWER_DETAILS_SUCCESS",
      je = "FETCH_ANSWER_DETAILS_FAILURE",
      Ce = "FETCH_ALL_NEWS_ITEMS_REQUEST",
      Se = "FETCH_NEXT_NEWS_ITEMS_REQUEST",
      Ee = "FETCH_ALL_NEWS_ITEMS_SUCCESS",
      Ie = "FETCH_NEXT_NEWS_ITEMS_SUCCESS",
      Ae = "FETCH_ALL_NEWS_ITEMS_FAILURE",
      Pe = "FETCH_TOUR_FAILURE",
      ke = "FETCH_TOUR_REQUEST",
      Te = "FETCH_TOUR_SUCCESS",
      Re = "FINISH_NAVIGATION",
      Me = "GET_CARD_CONTENT_FAILURE",
      xe = "GET_CARD_CONTENT_REQUEST",
      Le = "GET_CARD_CONTENT_SUCCESS",
      De = "GET_CARD_VIEW_FAILURE",
      Ne = "GET_CONVERSATION_FAILURE",
      Ue = "GET_CONVERSATION_REQUEST",
      ze = "GET_CONVERSATION_SUCCESS",
      Be = "GET_CONVERSATIONS_FAILURE",
      Ve = "GET_CONVERSATIONS_REQUEST",
      He = "GET_CONVERSATIONS_SUCCESS",
      Fe = "GET_HOME_SCREEN_CARDS_FAILURE",
      $e = "SELECT_ANSWER",
      Ge = "REACT_TO_ANSWER",
      We = "GET_HOME_SCREEN_CARDS_REQUEST",
      qe = "GET_HOME_SCREEN_CARDS_SUCCESS",
      Je = "GET_HOME_SCREEN_CONVERSATIONS_SUCCESS",
      Ke = "GET_RECENT_CONVERSATIONS_SUCCESS",
      Ze = "GET_UNREAD_CONVERSATIONS_REQUEST",
      Ye = "GET_UNREAD_CONVERSATIONS_SUCCESS",
      Qe = "HIDE_SEARCH_BROWSE",
      Xe = "INPUT_VALUE_CHANGED",
      et = "INTERSECTION_BOOTED",
      tt = "MARK_ACTIVE_TOUR_AS_COMPLETED",
      nt = "MARK_CONVERSATION_AS_READ_FAILURE",
      rt = "MARK_CONVERSATION_AS_READ_REQUEST",
      it = "MARK_CONVERSATION_AS_READ_SUCCESS",
      ot = "MESSENGER_NAVIGATE_BACK",
      st = "MESSENGER_OPEN_REQUEST_FAILED",
      ct = "MESSENGER_OPEN_REQUEST_SENT",
      at = "MESSENGER_OPEN_REQUEST_SUCCESS",
      ut = "MESSENGER_OPEN_HANDLED",
      lt = "OPEN_ARTICLE",
      dt = "CHANGE_ARTICLE_LOCALE",
      pt = "OPEN_BORDERLESS_CONVERSATION",
      ft = "OPEN_INSTALL_MODE",
      bt = "OPEN_LAUNCHER_DISCOVERY_MODE",
      ht = "OPEN_MESSAGE",
      gt = "OPEN_MESSENGER",
      mt = "OPEN_POINTER_MESSAGE",
      vt = "OPEN_SHEET_WITH_TOKEN",
      yt = "OPEN_SHEET",
      Ot = "OPENING_MESSENGER_FROM_LAUNCHER_DISCOVERY_MODE",
      _t = "NOTIFY_NEWSFEED_VISIT_SUCCESS",
      wt = "PROGRESS_TOUR_REQUEST_FINISHED",
      jt = "PROGRESS_TOUR_REQUEST_STARTED",
      Ct = "PROGRESS_TOUR",
      St = "REACT_TO_BANNER",
      Et = "REACT_TO_NEWS_ITEM",
      It = "NEWSFEED_ID_RECEIVED",
      At = "RECEIVE_ARTICLE_COLLECTIONS",
      Pt = "RECEIVE_ARTICLE",
      kt = "RECEIVE_BANNERS",
      Tt = "RECEIVE_CHECKLISTS",
      Rt = "RESOLVE_CHECKLIST_TASK",
      Mt = "RESOLVE_CHECKLIST_TASK_STARTED",
      xt = "RESOLVE_CHECKLIST_TASK_COMPLETE",
      Lt = "DISMISS_CHECKLIST",
      Dt = "OPEN_CHECKLIST",
      Nt = "CLOSE_CHECKLIST",
      Ut = "RECEIVE_HOME_SCREEN_ARTICLE_SUGGESTIONS",
      zt = "RECEIVE_HOME_SCREEN_MIXED_SUGGESTIONS",
      Bt = "RECEIVE_SURVEY",
      Vt = "RECEIVE_SURVEY_STEP",
      Ht = "RECEIVE_TICKET_TYPES",
      Ft = "RECEIVE_TOOLTIP_GROUPS",
      $t = "START_TOOLTIP_GROUP_PREVIEW",
      Gt = "END_TOOLTIP_GROUP_PREVIEW",
      Wt = "TOGGLE_TOOLTIP",
      qt = "MATCH_TOOLTIPS",
      Jt = "TOOLTIP_VIEWED",
      Kt = "RECORD_MESSAGE_SENT",
      Zt = "RECORD_SURVEY_RESPONSE",
      Yt = "REHYDRATE",
      Qt = "REMOVE_INBOUND_SUGGESTIONS",
      Xt = "REMOVE_TRIGGER",
      en = "RETRY_SESSION",
      tn = "RESET_TOUR",
      nn = "SNOOZE_TOUR",
      rn = "SEARCH_ARTICLES_FAILURE",
      on = "SEARCH_ARTICLES_REQUEST",
      sn = "SEARCH_ARTICLES_SUCCESS",
      cn = "SEARCH_BROWSE_CLOSE_TRANSITION_ENDED",
      an = "SEARCH_BROWSE_GO_BACK_COMPLETE",
      un = "SEARCH_BROWSE_GO_BACK",
      ln = "SEARCH_BROWSE_CLOSE",
      dn = "SEARCH_BROWSE_SET_SEARCH_FOCUS",
      pn = "SEARCH_GIFS_FAILURE",
      fn = "SEARCH_GIFS_REQUEST",
      bn = "SEARCH_GIFS_SUCCESS",
      hn = "SELECT_ARTICLE_COLLECTION",
      gn = "SELECT_NEWS_ITEM",
      mn = "SET_ACCESSIBILITY_THEME",
      vn = "SET_COMPOSER_SUGGESTIONS_DISMISSED",
      yn = "SET_COMPOSER_SUGGESTIONS_LOADING",
      On = "SET_COMPOSER_SUGGESTIONS",
      _n = "SET_LIGHTWEIGHT_APP_ACTIVE",
      wn = "SET_NEW_CONVERSATION_COMPOSER_STATE",
      jn = "SET_PREDICTIVE_ANSWERS",
      Cn = "SET_PROXY_LOADED_STATUS",
      Sn = "SET_SHEET_TITLE",
      En = "SET_TAB_NAVIGATION",
      In = "SHOW_ALERT",
      An = "SHOW_CONVERSATION",
      Pn = "SHOW_CONVERSATIONS",
      kn = "SHOW_EMPTY_SCREEN",
      Tn = "SHOW_HOME_SCREEN",
      Rn = "SHOW_MESSENGER_TRIGGER_SCREEN",
      Mn = "SHOW_NEW_CONVERSATION",
      xn = "SHOW_SEARCH_BROWSE",
      Ln = "SHOW_SEARCH_BROWSE_M5",
      Dn = "START_NAVIGATION",
      Nn = "START_TOUR_PREVIEW",
      Un = "STOP_TOUR_PREVIEW",
      zn = "STOP_TOUR",
      Bn = "SUBMIT_MESSENGER_CARD_ACTION_FAILURE",
      Vn = "SUBMIT_MESSENGER_CARD_ACTION_REQUEST",
      Hn = "SUBMIT_MESSENGER_CARD_ACTION_SUCCESS",
      Fn = "SET_EXPANDED_MODE",
      $n = "RECEIVE_TICKETS",
      Gn = "TOGGLE_UPFRONT_EMAIL_COLLECTOR_STATE",
      Wn = "TOUR_UPDATE_FAILED",
      qn = "TRIGGER_TRANSITIONS_FAILURE",
      Jn = "TRIGGER_TRANSITIONS_REQUEST",
      Kn = "TRIGGER_TRANSITIONS_SUCCESS",
      Zn = "UPDATE_BOT_INTRO",
      Yn = "UPDATE_CONVERSATION_FORM_FAILURE",
      Qn = "UPDATE_CONVERSATION_FORM_REQUEST",
      Xn = "UPDATE_CONVERSATION_FORM_SUCCESS",
      er = "UPDATE_SPACE_HEADER",
      tr = "UPDATE_NOTIFICATION_TYPE_OVERRIDES",
      nr = "UPDATE_PHONE_NUMBER_FAILURE",
      rr = "UPDATE_PHONE_NUMBER_REQUEST",
      ir = "UPDATE_PHONE_NUMBER_SUCCESS",
      or = "UPDATE_PREVIEW_INBOUND_SUGGESTIONS",
      sr = "UPDATE_RESOLUTION_BOT_STATE_FROM_OPEN",
      cr = "UPDATE_SEARCH_BROWSE_QUERY",
      ar = "UPDATE_SERVER_SIDE_INBOUND_SUGGESTIONS",
      ur = "UPDATE_UPLOAD_PROGRESS",
      lr = "UPDATE_USER_SUPPLIED_EMAIL_REQUEST",
      dr = "UPDATE_USER_SUPPLIED_EMAIL_SUCCESS",
      pr = "UPDATED_CHECKLIST_NOTIFICATION_DETAILS",
      fr = "QUEUE_AUTO_RESOLVE",
      br = "DEQUEUE_ALL_AUTO_RESOLVE",
      hr = "UPFRONT_EMAIL_COLLECTION_SUBMITTED",
      gr = "USER_CONTENT_SEEN_BY_ADMIN",
      mr = "USER_IS_ABSENT",
      vr = "USER_IS_INTERACTING",
      yr = "USER_IS_PRESENT",
      Or = "USER_IS_TYPING",
      _r = "VISITOR_AUTO_MESSAGE_CONDITION_SATISFIED_ERROR",
      wr = "VISITOR_AUTO_MESSAGE_CONDITION_SATISFIED_SUCCESS",
      jr = "PREVIEW_WORKFLOW";
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    var r = n(9),
      i = n.n(r),
      o = n(5),
      s = n(6),
      c = n(285),
      a = n(27),
      u = n(21),
      l = n(20),
      d = n(16),
      p = n(240),
      f = n(54),
      b = n(4);
    const h = (e) =>
      e &&
      e.map((e) => {
        const t = Object(f.a)(e);
        return (
          t.publishedAt && (t.publishedAt = new Date(t.publishedAt)),
          t.latestInteractionAt &&
            (t.latestInteractionAt = new Date(t.latestInteractionAt)),
          t
        );
      });
    var g = n(8);
    n.d(t, "f", function () {
      return j;
    }),
      n.d(t, "d", function () {
        return C;
      }),
      n.d(t, "a", function () {
        return P;
      }),
      n.d(t, "e", function () {
        return K;
      }),
      n.d(t, "b", function () {
        return g.y;
      });
    const m = [
      "custom_bot",
      "composer_suggestions",
      "predictive_answers_suggestions",
    ];
    function v(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function y(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? v(Object(n), !0).forEach(function (t) {
              O(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : v(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function O(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function _(e, t) {
      if (null == e) return {};
      var n,
        r,
        i = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            i = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (i[n] = e[n]));
      }
      return i;
    }
    const { assign: w } = Object;
    function j(e) {
      const t = `${Object(o.b)().api_base}/messenger/web/help_center_content`;
      return s.b
        .post({ url: t, session: e })
        .then(
          ({
            collections: e,
            article_suggestions: t,
            article_suggestions_metadata: n,
          }) => ({
            articleSuggestions:
              void 0 !== t ? { suggestions: t, metadata: n } : void 0,
            articleCollections: e.map(g.e),
          })
        );
    }
    function C(e, t, n) {
      const r = `${
          Object(o.b)().api_base
        }/messenger/web/self_serve_suggestions`,
        i = { query: t, answers_limit: n };
      return s.b.post({ url: r, session: e, params: i });
    }
    function S(e) {
      return { conversations: e.conversations.map(P), pages: I(e.pages) };
    }
    function E(e) {
      return {
        unreadConversationIds: (e.unread_conversation_ids || []).map((e) =>
          e.toString()
        ),
        unreadDismissedConversationIds: (
          e.unread_dismissed_conversation_ids || []
        ).map((e) => e.toString()),
      };
    }
    function I(e) {
      return { page: e.page, perPage: e.per_page, totalPages: e.total_pages };
    }
    function A(e) {
      return {
        workflowInstanceId: e.workflow_instance_id,
        resolutionBotBehaviorVersionId: e.resolution_bot_behavior_version_id,
        botIntro: q(e.bot_intro),
      };
    }
    function P(e) {
      return {
        composerState: Object(g.l)(e.composer_state),
        dismissed: e.dismissed,
        id: e.id,
        intercomLinkSolution: e.intercom_link_solution,
        lastPartCreatedAt: Object(a.c)(e.updated_at),
        lastParticipatingAdmin: Object(g.o)(e),
        participants: e.participants || [],
        parts: [k(e), ...T(e)],
        preventEndUserReplies: e.prevent_end_user_replies,
        preventEndUserRepliesTimestamp: e.prevent_end_user_replies_timestamp,
        inboundConversationsDisabled: e.inbound_conversations_disabled,
        read: e.read,
        readAt: e.read_at ? Object(a.c)(e.read_at) : void 0,
        replyPlaceholder: e.reply_area_placeholder,
        userParticipated: e.user_participated,
        notificationStatus: e.notification_status,
        currentChannel: e.current_channel,
        analyticsMetadata: {
          customBotId: e.analytics_metadata
            ? e.analytics_metadata.custom_bot_id
            : void 0,
        },
        isInbound: e.is_inbound,
        state: e.state,
        ticket: e.ticket ? Object(g.A)(e.ticket) : void 0,
        updatedAt: Object(a.c)(e.updated_at),
        eligibleForRecentConversations: e.eligible_for_recent_conversations,
      };
    }
    function k(e) {
      var t;
      const n = e.conversation_message;
      return {
        author: Object(g.g)(n.author),
        body: z(n.blocks || [], n.attachments || []),
        clientId: n.client_assigned_uuid,
        createdAt: Object(a.c)(n.created_at),
        eventData: {},
        form: n.form,
        id:
          null !== (t = n.id) && void 0 !== t && t.startsWith("message-")
            ? n.id
            : `message-${n.id}`,
        isMessage: !0,
        messageType: L(n),
        notificationType:
          ((r = n.delivery_option),
          { badge: "badge", full: "full", summary: "snippet" }[r]),
        partType: "message",
        pointerSelector: n.pointer_selector,
        reactionsReply: n.reactions_reply
          ? Object(g.v)(n.reactions_reply)
          : void 0,
        replyOptions: n.reply_options || [],
        replyType: n.reply_type,
        seenState: N(n.seen_by_admin),
        sentAt: Object(a.c)(n.sent_at),
        showCreatedAt: n.show_created_at,
        teamAuthor: Object(g.z)(e),
        rulesetId: n.google_analytics_identifier,
      };
      var r;
    }
    function T(e) {
      let t = [];
      return (
        e.conversation_parts &&
          (t = e.conversation_parts.conversation_parts || e.conversation_parts),
        t
          .filter((e) => "lightweight_reply_user_response" !== e.part_type)
          .map(R)
      );
    }
    function R(e) {
      return {
        author: {
          avatar: Object(g.h)(e.author.avatar),
          firstName: Object(g.n)(e.author.first_name),
          id: e.author.id,
          initial: e.author.initial,
          isAdmin: e.author.is_admin,
          isBot: e.author.is_bot,
          isSelf: e.author.is_self,
          type: e.author.is_admin ? "admin" : "user",
          avatarShape: e.author.avatar_shape,
        },
        body: z(e.blocks || [], e.attachments || []),
        clientId: e.client_assigned_uuid,
        conversationRating: B(e),
        createdAt: Object(a.c)(e.created_at),
        eventData: Object(g.m)(e.event_data, e.part_type),
        form: e.form,
        id: e.id,
        isMessage: !1,
        messageType: L(e),
        partType: e.part_type,
        replyOptions: e.reply_options || [],
        seenState: N(e.seen_by_admin),
        showCreatedAt: !0,
      };
    }
    function M(e) {
      const t = e.install_mode;
      if (t) {
        const e = t.active_subscription,
          n = t.user_hash_verified,
          r = t.secure_install_v2,
          i = t.messenger_enabled_for_visitors;
        return {
          activeSubscription: e,
          messengerEnabledForUsers: t.messenger_enabled_for_users,
          messengerEnabledForVisitors: i,
          secureInstallV2: r,
          userHashVerified: n,
        };
      }
    }
    function x(e) {
      var t, n, r, i, o, s, c, a;
      const { app: u } = e,
        l = (function (e) {
          return {
            anonymousInboundMessages:
              e.inbound_lead_messaging || e.inbound_lead_messaging_docs_site,
            composerSuggestionsAsQuickReplies:
              e.composer_suggestions_as_quick_replies,
            googleAnalytics: e.google_analytics,
            hubspotInstalled: e.hubspot_installed,
            inboundMessages: e.inbound_messages,
            launcherDiscoveryMode: e.launcher_discovery_mode,
            marketoEnrichmentInstalled: e.marketo_enrichment_installed,
            outboundMessages: e.outbound_messages,
            singlePageAppRateLimiting: e.single_page_app_rate_limiting,
            crossSiteCookies: e.cross_site_cookies,
            cookieSecureFlag: e.cookie_secure_flag,
            renderNativePickerInMobile: e.render_native_picker_in_mobile,
            homeScreenArticleSuggestions: e.home_screen_article_suggestions,
            ticketCreation: e.ticket_creation,
            checklists: e.checklists,
            checklistsHiddenTabNavigation: e.checklists_hidden_tab_navigation,
            checklistsReminders: e.checklists_reminders,
            noRbBehaviorInPing: e.no_rb_behavior_in_ping,
            googleAnalytics4Integration: e.google_analytics_4_integration,
            missingRepliesInConversationBanner:
              e.missing_replies_in_conversation_banner,
            finLaunch: e.team_messenger_fin_launch,
          };
        })(e.modules.messages.features),
        d = (null === (t = e.modules) || void 0 === t ? void 0 : t.home) || {};
      return {
        backgroundImage: u.messenger_background,
        alignment: e.modules.customization.alignment,
        horizontalPadding: e.modules.customization.horizontal_padding,
        verticalPadding: e.modules.customization.vertical_padding,
        logoUrl: u.messenger_logo_url,
        launcherLogoUrl: u.launcher_logo_url,
        color: e.modules.messages.colors.base,
        secondaryColor: e.modules.messages.colors.secondary,
        isAudioEnabled: u.audio_enabled || !1,
        isDeveloperWorkspace: u.developer_workspace || !1,
        isErrorReportingDisabled:
          e.modules.error_reporting && e.modules.error_reporting.disabled,
        isInstantBootEnabled: !0 === e.modules.messages.instant_boot_enabled,
        isIntercomLinkEnabled: u.show_powered_by,
        isOverrideSamplingEnabled:
          e.modules.metrics && e.modules.metrics.enabled,
        openConfig: {
          layout:
            (null === (n = e.open_config) || void 0 === n ? void 0 : n.form) ||
            (null === (r = e.open_config) || void 0 === r ? void 0 : r.layout),
          openTo:
            null === (i = e.open_config) || void 0 === i ? void 0 : i.open_to,
          spaces:
            null !== (o = e.open_config) && void 0 !== o && o.spaces
              ? null === (s = e.open_config) || void 0 === s
                ? void 0
                : s.spaces.map((e) => {
                    const t = Object(f.a)(e);
                    return (
                      t.badge &&
                        t.badge.label &&
                        (t.badge.label = Number(t.badge.label)),
                      t
                    );
                  })
              : [],
          userHasReceivedChecklists:
            (null === (c = e.open_config) || void 0 === c
              ? void 0
              : c.user_has_received_checklists) || !1,
          userHasLiveNewsfeed:
            (null === (a = e.open_config) || void 0 === a
              ? void 0
              : a.user_has_live_newsfeed) || !1,
        },
        inboundConversationsDisabled: u.inbound_conversations_disabled || !1,
        smsEnabled: u.sms_notifications_enabled || !1,
        userConversationAttachmentsEnabled:
          u.user_conversation_attachments_enabled,
        userConversationGifsEnabled: u.user_conversation_gifs_enabled,
        customGoogleAnalyticsTrackerId:
          e.modules.messages.google_analytics_tracking_id,
        isLauncherEnabled: !0 === e.modules.messages.use_activator,
        selfServeSuggestionsMatch: u.self_serve_suggestions_match || !1,
        upfrontEmailCollectionSetting: u.upfront_email_collection_setting,
        useCacheFor: u.use_cache_for,
        originCookieDomain: e.origin_cookie_domain,
        features: l,
        helpCenterSiteUrl: u.help_center_site_url || void 0,
        boundWebEvents: ((p = e.bound_web_events), p ? p.map(V) : []),
        realtimeConfig: { endpoints: e.modules.rtm.endpoints },
        teamGreeting: u.team_greeting,
        teamIntro: u.team_intro,
        expectedResponseDelayTranslationKey:
          u.expected_response_delay_translation_key,
        temporaryExpectationsMessage: u.temporary_expectations_message,
        officeHoursResponse: u.office_hours_response || void 0,
        launcherExpectedResponseDelayTranslationKey:
          u.launcher_expected_response_delay_translation_key,
        name: u.name,
        home: Object(f.a)(d),
        localizedExpectedResponseDelayShortText:
          u.localized_expected_response_delay_short_text,
        localizedExpectedResponseDelayLongText:
          u.localized_expected_response_delay_long_text,
      };
      var p;
    }
    function L(e) {
      const t = ["chat", "post", "note", "video", "pointer"][e.message_style];
      return (
        t ||
        ("ticket_status_update" === e.part_type ||
        "ticket_state_updated_by_workflow" === e.part_type
          ? "ticketStatusUpdate"
          : "inline_answer" === e.part_type
          ? "inlineAnswer"
          : "relevant_articles" === e.part_type
          ? "relevantArticles"
          : "fin_answer" === e.part_type
          ? "finAnswer"
          : "attribute_collector" === e.part_type
          ? "attributeCollector"
          : D(e, "link") ||
            (function (e, t) {
              let n = !0;
              return (
                e.blocks.forEach((e) => {
                  e.type !== t && (n = !1);
                }),
                n && e.blocks.length > 1
              );
            })(e, "link")
          ? "link"
          : D(e, "notificationChannelsCard")
          ? "notificationChannels"
          : D(e, "conversationRating")
          ? "conversationRating"
          : D(e, "ticket")
          ? "ticketCard"
          : void 0)
      );
    }
    function D(e, t) {
      const n = e.blocks && 1 === e.blocks.length && e.blocks[0];
      return n && n.type === t;
    }
    function N(e) {
      return { unseen: "not-seen-yet", seen: "seen" }[e] || "not-seen-yet";
    }
    function U(e) {
      return {
        contact_role: "lead",
        user_role: "user",
        visitor_role: "visitor",
      }[e];
    }
    function z(e, t) {
      if (
        (function (e) {
          return 1 === e.length && "videoReply" === e[0].type;
        })(e)
      )
        return e;
      if (
        (function (e) {
          return 1 === e.length && "videoFile" === e[0].type;
        })(e)
      )
        return (function (e) {
          return [Object.assign({}, e[0])];
        })(e);
      const n = [];
      return (
        (function (e, t) {
          if (0 === e.length) return t;
          const n = [];
          return (
            e.map((e) => {
              e.attachments.map((e) => n.push(e.url));
            }),
            t.filter((e) => n.indexOf(e.url) < 0)
          );
        })(
          e.filter((e) => "attachmentList" === e.type),
          t
        ).forEach((e) => {
          !(function (e) {
            return e.content_type.indexOf("image") >= 0;
          })(e)
            ? n.push(
                (function (e) {
                  return {
                    type: "attachmentList",
                    attachments: [
                      {
                        contentType: e.content_type,
                        name: e.name,
                        size: e.size,
                        url: e.url,
                      },
                    ],
                  };
                })(e)
              )
            : n.push(
                (function (e) {
                  return {
                    height: parseInt(e.height, 10),
                    type: "image",
                    url: e.url,
                    width: parseInt(e.width, 10),
                  };
                })(e)
              );
        }),
        e.concat(n)
      );
    }
    function B(e) {
      if ("conversationRating" !== L(e)) return {};
      const { remark: t } = e.blocks[0];
      return { chosenRating: e.blocks[0].rating_index, remark: t };
    }
    function V(e) {
      return {
        id: e.id,
        description: e.description,
        name: e.name,
        selector: e.selector,
        sourceUrl: e.source_url,
        trigger: e.trigger,
        urlRegex: e.url_regex,
      };
    }
    function H(e) {
      return {
        cards: e.cards,
        cardsSuccess: e.cards_success,
        conversations: e.conversations.map(P),
        hasMoreConversations: e.has_more_conversations,
        openInboundConversationIds: e.open_inbound_conversation_ids,
        ticketTypes: F(e.ticket_types),
      };
    }
    function F(e) {
      return e.map((e) => {
        return {
          id: e.id,
          name: e.name,
          attributes:
            ((t = e.attributes),
            t.map(
              (e) => (
                "list" === e.type && (e.listOptions = e.options.list_options),
                "files" === e.type &&
                  (e.limit = "single" === e.identifier ? 1 : 10),
                e
              )
            )),
          emoji: e.emoji,
          archived: e.archived,
        };
        var t;
      });
    }
    function $(e) {
      return e
        ? e.map((e) =>
            y(
              y({}, e),
              {},
              {
                serialized_object: G(
                  e.ruleset_link_object_type,
                  e.serialized_object
                ),
              }
            )
          )
        : [];
    }
    function G(e, t) {
      switch (e) {
        case "inbound_trigger":
        case "inbound_custom_bot":
          return W(t);
        case "messenger_trigger":
        case "button_custom_bot":
          return Object(g.p)(t);
        default:
          return t;
      }
    }
    function W(e) {
      return e
        ? {
            composerDisabled: e.composer_disabled,
            prompt: e.prompt,
            rulesetId: e.ruleset_id,
            suggestions: e.suggestions.map((e) =>
              (function (e) {
                return { preAction: e.pre_action, text: e.text, uuid: e.uuid };
              })(e)
            ),
            updatedAt: e.updated_at,
            priority: e.priority,
          }
        : null;
    }
    function q(e) {
      return e
        ? { id: e.id, parts: e.parts, operator: Object(g.g)(e.operator) }
        : null;
    }
    function J(e) {
      const t = Object(p.b)(window);
      t && (e.sdk_webview_platform = t);
    }
    function K() {
      return `${Object(o.b)().api_base}/messenger/web/conversations/transcript`;
    }
    function Z(e) {
      return {
        cards: e.cards.map((e) =>
          "messenger_app" === e.type
            ? {
                type: e.type,
                card_title: e.card_title,
                uri: e.fallback_url,
                canvas: e.canvas,
                messengerAppId: e.messenger_app_id,
                messengerCardId: e.messenger_card_id,
              }
            : "recent_conversation" === e.type
            ? {
                type: e.type,
                card_title: e.card_title,
                limit: e.limit,
                conversations: e.conversations.map(Y),
              }
            : e
        ),
      };
    }
    function Y(e) {
      return {
        id: e.id,
        read: e.read,
        participants: e.participants.map((e) => ({
          id: e.id,
          name: e.name,
          firstName: e.first_name,
        })),
        parts: e.conversation_parts.map((t) => ({
          id: t.id,
          createdAt: Object(a.c)(t.created_at),
          participantId: t.participant_id,
          participantIsAdmin: t.participant_is_admin,
          body: t.body.map((e) => ({ type: e.type, text: e.text })),
          author: X(e.participants, t),
        })),
        preventEndUserReplies: e.prevent_end_user_replies,
        lastParticipatingAdmin: Q(e),
        lastPartCreatedAt: Object(a.c)(e.updated_at),
        updatedAt: Object(a.c)(e.updated_at),
        eligibleForRecentConversations: e.eligible_for_recent_conversations,
        isInbound: e.is_inbound,
        state: e.state,
      };
    }
    const Q = (e) => {
        if (e.last_participating_admin)
          return {
            id: e.last_participating_admin.id,
            type: e.last_participating_admin.type,
            name: e.last_participating_admin.name,
            firstName: Object(g.n)(e.last_participating_admin.first_name),
          };
      },
      X = (e, t) => {
        const n = e.find((e) => e.id === t.participant_id);
        if (n)
          return {
            id: n.id,
            firstName: n.first_name,
            avatar: Object(g.h)(n.avatar),
          };
      };
    t.c = {
      addConversationRatingRemark: function (e, t, n) {
        const r = `${
            Object(o.b)().api_base
          }/messenger/web/conversations/${t}/remark`,
          i = { remark: n };
        return s.b.post({ url: r, session: e, params: i }).then(() => {});
      },
      buildBanner: g.i,
      buildComment: R,
      buildComposerSuggestions: W,
      buildBotIntro: q,
      buildTour: g.D,
      changeConversationRatingIndex: function (e, t, n) {
        const r = `${
            Object(o.b)().api_base
          }/messenger/web/conversations/${t}/rate`,
          i = { rating_index: n };
        return s.b.post({ url: r, session: e, params: i }).then(() => {});
      },
      collectEmailFromBanner: function (e, t, n, r) {
        const i = `${
            Object(o.b)().api_base
          }/messenger/web/banners/${t}/collect_email`,
          c = Object.assign({ email: r }, Object(g.j)(n));
        return s.b.post({ url: i, session: e, params: c });
      },
      completeTour: function (e, t, n) {
        const r = `${Object(o.b)().api_base}/messenger/web/tours/${t}/complete`,
          i = Object(g.t)(n);
        return s.b.post({ url: r, session: e, params: i });
      },
      createArticleReaction: function (
        e,
        t,
        n,
        r = !1,
        i = null,
        c = "help_center",
        a = null
      ) {
        const u = `${Object(o.b)().api_base}/messenger/web/articles/${t}/react`,
          l = {
            reaction_index: n,
            allow_auto_responses: r,
            article_content_id: i,
            article_channel: c,
            article_source: a,
          };
        return s.b.post({ url: u, session: e, params: l }).then(() => {});
      },
      createComment: function (e, t, n, r, i, c, a, u = null) {
        const l = `${
          Object(o.b)().api_base
        }/messenger/web/conversations/${t}/reply`;
        let d = Object(g.s)(r, i, c, n, a);
        return (
          u && (d = Object.assign({}, d, { last_admin_part_created_at: u })),
          s.b
            .post({ url: l, session: e, params: d })
            .then((e) => Object.assign({}, R(e), { clientId: n }))
        );
      },
      createConversation: function (
        e,
        {
          blocks: t,
          createdAt: n,
          upload: r,
          email: i,
          composerSuggestions: c,
          selfServeSuggestionsMatch: a,
          resolutionBotBehaviorVersionId: u,
          previewWorkflowInstanceId: l,
          botIntro: d,
          currentUrl: p,
          startedFromSearchBrowse: f = !1,
        }
      ) {
        const b = {
          url: `${Object(o.b)().api_base}/messenger/web/messages`,
          session: e,
          params: Object(g.s)(t, n, r, null, i, c, a, d, u, l, f),
        };
        return p && (b.currentUrl = p), s.b.post(b).then(P);
      },
      createEvent: function (e, t, n) {
        const r = `${Object(o.b)().api_base}/messenger/web/events`,
          c = { event_name: t, metadata: n },
          a = { event_list: JSON.stringify({ data: [c] }) };
        return s.b.post({ url: r, session: e, params: a }).then((e) => {
          if (!i()(e))
            return (function (e) {
              const {
                banner: t,
                custom_bot: n,
                client_matches: r,
                tour: i,
                survey: o,
              } = e[0];
              return {
                banner: t ? Object(g.i)(t) : t,
                customBot: n ? P(n) : n,
                clientsideRulesetConditions: $(r || []),
                tour: i ? Object(g.D)(i) : i,
                survey: o ? Object(g.x)(o) : o,
              };
            })(e);
        });
      },
      createMetrics: function (e, t, n = [], r = [], i = []) {
        const c = `${Object(o.b)().api_base}/messenger/web/metrics`,
          a = (function (e, t, n, r) {
            return {
              metrics: JSON.stringify(e),
              logs: JSON.stringify(t),
              op_metrics: JSON.stringify(n),
              hc_metrics: JSON.stringify(r),
            };
          })(t, n, r, i);
        return s.b.fetch({
          url: c,
          session: e,
          params: a,
          shouldSetUserData: !1,
          keepalive: !0,
        });
      },
      createOrUpdateUser: function (e, t = {}, n, r, i, c, u = !1, l = !1) {
        (t = w({}, t)), void 0 !== n && (t.anonymous_email = n);
        const p = { source: i, sampling: l };
        void 0 !== r && (p._intercomEncryptedPayload = r);
        const f = `${Object(o.b)().api_base}/messenger/web/ping`;
        return s.b
          .post({
            url: f,
            session: e,
            params: p,
            customAttributes: t,
            internal: c,
            isIntersectionBooted: u,
          })
          .then((e) => {
            const { errors: t } = e;
            return t
              ? { errors: t }
              : (function (e) {
                  var t, n, r;
                  const { user: i } = e;
                  e.active_tour &&
                    Object(d.e)(
                      "Tour attempting to resume from ping",
                      e.active_tour
                    );
                  return {
                    id: i.id,
                    activeCompanyId: i.active_company_id || "-1",
                    activeTour: Object(g.D)(e.active_tour),
                    anonymousId: i.anonymous_id,
                    anonymousSession: e.anonymous_session,
                    app: x(e),
                    articleConversationId: JSON.stringify(
                      e.article_conversation_id
                    ),
                    banners: Object(g.k)(e.banners),
                    cdasBreachingLimit: e.cdas_breaching_limit || [],
                    checklists: h(e.checklists),
                    clientsideMessageConditions: e.client_messages,
                    clientsideRulesetConditions: $(e.client_matches),
                    requiresCookieConsent: i.requires_cookie_consent,
                    countryCode: i.country_code,
                    hasConversations: !1 !== i.has_conversations,
                    homeScreenSlots:
                      (null === (t = i.home_screen_slots) || void 0 === t
                        ? void 0
                        : t.map(g.w)) || [],
                    identityVerificationReady: e.identity_verification_ready,
                    identityVerified: e.identity_verified,
                    installModeConfig: M(e),
                    lastContactedAt: i.last_contacted_at,
                    locale: i.locale,
                    newConversationComposerState: Object(g.l)(e.composer_state),
                    notificationLinkConversationId:
                      e.notification_link_conversation_id,
                    phoneNumber: i.phone_number,
                    role: U(i.role),
                    unreadConversationIds:
                      null === (n = e.unread_conversation_ids) || void 0 === n
                        ? void 0
                        : n.map((e) => e.toString()),
                    unreadDismissedConversationIds:
                      null === (r = e.unread_dismissed_conversation_ids) ||
                      void 0 === r
                        ? void 0
                        : r.map((e) => e.toString()),
                    unreadNewsItemsCount: e.unread_news_items_count,
                    lastUnreadNewsItemId: e.last_unread_news_item_id,
                    newsfeedLastVisit: e.newsfeed_last_visit
                      ? Object(a.c)(e.newsfeed_last_visit)
                      : void 0,
                    userSuppliedEmail: i.anonymous_email,
                    newSession: i.new_session,
                    searchRequiredBeforeConversation:
                      i.help_center_require_search,
                    survey: Object(g.x)(e.survey),
                    tooltipGroups: Object(g.C)(e.tooltip_groups),
                    preventMultipleInboundConversation:
                      i.prevent_multiple_inbound_conversation,
                    testAssignments: i.user_assignments,
                    newsfeedId: e.newsfeed_id,
                  };
                })(e);
          });
      },
      sendMessengerOpen: function (e, t) {
        const n = {};
        t && (n.initial_view = t);
        const r = `${Object(o.b)().api_base}/messenger/web/open`;
        return s.b.post({ url: r, session: e, params: n }).then((e) => {
          const { errors: t } = e;
          return t
            ? { errors: t }
            : {
                composerSuggestions: W(e.composer_suggestions),
                botIntro: q(e.bot_intro),
                clientsideRulesetConditions: $(e.client_matches),
                testAssignments: e.user_assignments,
                resolutionBotBehaviorVersionId:
                  e.resolution_bot_behavior_version_id,
                accessToTeammateEnabled: e.access_to_teammate_enabled,
                botTargetedConversations: e.bot_targeted_conversations,
                botAdmin: Object(g.b)(e.bot_admin),
                activeAdmins:
                  null === (n = e.active_admins) || void 0 === n
                    ? void 0
                    : n.map(g.b),
                selfServeSuggestionsMatch: e.self_serve_suggestions_match,
                composerState: Object(g.l)(e.composer_state),
              };
          var n;
        });
      },
      createReaction: function (e, t, n) {
        const r = `${
            Object(o.b)().api_base
          }/messenger/web/conversations/${t}/react`,
          i = { reaction_index: n };
        return s.b.post({ url: r, session: e, params: i }).then(() => {});
      },
      createUpload: function (e, t, n) {
        return new Promise((r, i) => {
          const o = new FormData();
          o.append("key", e.key),
            o.append("acl", e.acl),
            o.append("Content-Type", e.content_type),
            o.append("AWSAccessKeyId", e.aws_access_key),
            o.append("policy", e.policy),
            o.append("signature", e.signature),
            o.append("success_action_status", e.success_action_status),
            o.append("file", t);
          const s = new XMLHttpRequest();
          s.upload.addEventListener(
            "progress",
            function (e) {
              const { lengthComputable: t, loaded: r, total: i } = e;
              if (!n || !t) return;
              const o = parseInt((r / i) * 100);
              n(o);
            },
            !1
          ),
            s.addEventListener(
              "error",
              function () {
                Object(b.g)(
                  "messenger_upload",
                  { xhr_status: s.status, upload_state: "errored" },
                  !0
                ),
                  i();
              },
              !1
            ),
            s.addEventListener(
              "abort",
              function () {
                Object(b.g)(
                  "messenger_upload",
                  { xhr_status: s.status, upload_state: "aborted" },
                  !0
                ),
                  i();
              },
              !1
            ),
            s.addEventListener(
              "load",
              function (t) {
                201 === t.target.status
                  ? r({
                      id: e.id,
                      publicUrl: e.public_url,
                      contentType: e.content_type,
                    })
                  : (Object(b.g)(
                      "messenger_upload",
                      { xhr_status: s.status, upload_state: "failed" },
                      !0
                    ),
                    i());
              },
              !1
            ),
            s.open("POST", e.upload_destination, !0),
            s.send(o);
        });
      },
      createUploadPolicy: function (e, t, n, r) {
        const i = `${Object(o.b)().api_base}/messenger/web/uploads`,
          a = {
            upload: JSON.stringify({
              original_filename: Object(c.a)(t.name),
              size_in_bytes: t.size,
              content_type: t.type,
              width: n,
              height: r,
            }),
          };
        return s.b.post({ url: i, session: e, params: a }).then(g.F);
      },
      disableInstallMode: function (e) {
        const t = `${Object(o.b)().api_base}/messenger/web/install`;
        return s.b.post({ url: t, session: e });
      },
      dismissBanner: function (e, t, n) {
        const r = `${
            Object(o.b)().api_base
          }/messenger/web/banners/${t}/dismiss`,
          i = Object(g.j)(n);
        return s.b.post({ url: r, session: e, params: i });
      },
      dismissNotifications: function (e, t) {
        const n = `${
            Object(o.b)().api_base
          }/messenger/web/conversations/dismiss`,
          r = { conversation_ids: t };
        return s.b.post({ url: n, session: e, params: r }).then(() => {});
      },
      fetchBannerView: function (e, t) {
        const n = `${Object(o.b)().api_base}/messenger/web/banners/${t}/fetch`;
        return s.b
          .post({ url: n, session: e })
          .then((e) => Object(g.i)(e.banner));
      },
      fetchChecklist: function ({
        session: e,
        rulesetId: t,
        triggerMethod: n,
      } = {}) {
        if (e) {
          Object(l.b)("Attempting to fetch checklist with session data.");
          const r = { trigger_method: n };
          return s.b
            .post({
              url: `${
                Object(o.b)().api_base
              }/messenger/web/checklists/${t}/fetch`,
              session: e,
              params: r,
            })
            .then((e) => h([e.checklist])[0]);
        }
      },
      fetchMessengerSheetData: function (e, t, n, r) {
        const i = `${Object(o.b)().api_base}/messenger/web/sheets/open`,
          c = { action_id: n, uri: t, values: JSON.stringify(r) };
        return s.b.post({ url: i, session: e, params: c });
      },
      fetchMessengerSheetDataWithToken: function (e, t, n) {
        const r = `${
            Object(o.b)().api_base
          }/messenger/web/messenger_card_view/open_sheet`,
          i = { action_id: t, token: e, values: JSON.stringify(n) };
        return s.b.post({ url: r, params: i });
      },
      fetchSurvey: function ({
        session: e,
        rulesetId: t,
        triggerMethod: n,
        isPreview: r,
        token: i,
      } = {}) {
        if (!e && !i)
          return (
            Object(u.g)(
              "A session or a token must be supplied when fetching a survey"
            ),
            Promise.reject("missing_session_and_token")
          );
        if (e) {
          Object(u.g)("Attempting to fetch survey with session data.");
          const i = { trigger_method: n, is_preview: r };
          return s.b
            .post({
              url: `${Object(o.b)().api_base}/messenger/web/surveys/${t}/fetch`,
              session: e,
              params: i,
            })
            .then((e) => Object(g.x)(e.survey));
        }
      },
      fetchActiveSurveyProgress: function ({
        session: e,
        entityId: t,
        entityType: n,
      } = {}) {
        const r = { entity_id: t, entity_type: n },
          i = `${
            Object(o.b)().api_base
          }/messenger/web/surveys/fetch_active_survey`;
        if (e)
          return (
            Object(u.g)(
              `Attempting to fetch active survey progress with id ${t}`
            ),
            s.b
              .post({ url: i, session: e, params: r })
              .then((e) => Object(g.x)(e.survey))
          );
      },
      fetchSurveyForPreview: function ({ session: e, surveyId: t } = {}) {
        const n = { survey_id: t },
          r = `${
            Object(o.b)().api_base
          }/messenger/web/surveys/fetch_for_preview`;
        if (e)
          return (
            Object(u.g)(
              `Attempting to fetch survey with survey id ${t} for preview`
            ),
            s.b
              .post({ url: r, session: e, params: n })
              .then((e) => Object(g.x)(e.survey))
          );
      },
      fetchSurveyFromSnippet: function ({
        session: e,
        surveyId: t,
        token: n,
      } = {}) {
        return e || n
          ? e
            ? (Object(u.g)(
                "Attempting to fetch survey from snippet with session data."
              ),
              s.b
                .post({
                  url: `${
                    Object(o.b)().api_base
                  }/messenger/web/surveys/${t}/fetch_from_snippet`,
                  session: e,
                  params: {},
                })
                .then((e) => Object(g.x)(e.survey)))
            : void 0
          : (Object(u.g)(
              "A session or a token must be supplied when fetching a survey"
            ),
            Promise.reject("missing_session_and_token"));
      },
      fetchTour: function ({ session: e, tourId: t, token: n } = {}) {
        if (!e && !n)
          return (
            Object(d.e)(
              "A session or a token must be supplied when fetching a tour"
            ),
            Promise.reject("missing_session_and_token")
          );
        if (e)
          return (
            Object(d.e)("Attempting to fetch tour with session data."),
            s.b
              .post({
                url: `${Object(o.b)().api_base}/messenger/web/tours/${t}/fetch`,
                session: e,
              })
              .then(g.D)
          );
        {
          Object(d.e)(
            "Attempting to fetch tour for messenger card in fallback state."
          );
          const e = { token: n };
          return s.b
            .post({
              url: `${
                Object(o.b)().api_base
              }/messenger/web/tours/${t}/fetch_with_token`,
              params: e,
            })
            .then(g.D);
        }
      },
      fireComposerSuggestion: function (
        e,
        {
          conversationId: t,
          suggestion: n,
          clientId: r,
          botIntro: i,
          resolutionBotBehaviorVersionId: c,
          articleUrl: a = null,
        }
      ) {
        const u = t
            ? `${Object(o.b)().api_base}/messenger/web/conversations/${t}/reply`
            : `${Object(o.b)().api_base}/messenger/web/messages`,
          l = {
            composer_suggestion: JSON.stringify(n),
            client_assigned_uuid: r,
          };
        return (
          t && (l.conversation_id = t),
          i && (l.bot_intro = i),
          c && (l.resolution_bot_behavior_version_id = c),
          a && (l.search_browse = !0),
          s.b
            .post({ url: u, session: e, params: l, currentUrl: a })
            .then(t ? R : P)
        );
      },
      fireTrigger: function (e, { triggerId: t, clientAssignedUUID: n }) {
        const r = `${Object(o.b)().api_base}/messenger/web/triggers/${t}/fire`,
          i = { client_assigned_uuid: n };
        return s.b.post({ url: r, session: e, params: i });
      },
      getArticle: function (e, t, n, r = !1) {
        const i = `${Object(o.b)().api_base}/messenger/web/articles/${t}`,
          c = (function (e, t) {
            return { conversation_id: e, browse_mode: t };
          })(n, r);
        return s.b.post({ url: i, session: e, params: c }).then(g.d);
      },
      getArticleByURL: function (e, t) {
        const n = `${Object(o.b)().api_base}/messenger/web/articles/url`,
          r = { url: t };
        return s.b.post({ url: n, session: e, params: r }).then(g.d);
      },
      getArticleReaction: function (e, t, n, r) {
        const i = `${
            Object(o.b)().api_base
          }/messenger/web/articles/get_reaction`,
          c = { article_id: t, article_content_id: n };
        s.b
          .post({ url: i, session: e, params: c })
          .then((e) => {
            e ? r(null, e) : r();
          })
          .catch((e) => {
            r(e);
          });
      },
      getCardView: function (e) {
        const t = `${
            Object(o.b)().api_base
          }/messenger/web/messenger_card_view/`,
          n = { token: e };
        return s.b.post({ url: t, params: n });
      },
      getConversation: function (e, t, n, r) {
        const i = `${Object(o.b)().api_base}/messenger/web/conversations/${t}`,
          c = { self_serve_suggestions_match: n, client_assigned_uuid: r };
        return s.b.post({ url: i, session: e, params: c }).then(P);
      },
      getConversationTranscriptURL: K,
      getConversations: function (
        e,
        { source: t, page: n, perPage: r, selfServeSuggestionsMatch: i }
      ) {
        const c = `${Object(o.b)().api_base}/messenger/web/conversations`,
          a = {
            page: n,
            per_page: r,
            source: t,
            self_serve_suggestions_match: i,
          };
        return s.b.post({ url: c, session: e, params: a }).then(S);
      },
      getHomeScreenCards: function (
        e,
        { homeScreenSlots: t, selfServeSuggestionsMatch: n }
      ) {
        const r = `${Object(o.b)().api_base}/messenger/web/home_cards`,
          i = {
            slot_card_ids: t.map((e) => e.messengerCardId),
            self_serve_suggestions_match: n,
          };
        return s.b.post({ url: r, session: e, params: i }).then(H);
      },
      getHomeData: function (e) {
        const t = `${Object(o.b)().api_base}/messenger/web/home`;
        return s.b.post({ url: t, session: e }).then(Z);
      },
      getMessengerCanvasContentWithToken: function (e, t) {
        const n = `${
            Object(o.b)().api_base
          }/messenger/web/messenger_card_view/live_content`,
          r = { token: e, canvas_id: t };
        return s.b
          .post({ url: n, params: r })
          .then((e) => Object.assign(e, { id: t }));
      },
      getMessengerCanvasWithContent: function (e, t, n) {
        const r = `${
            Object(o.b)().api_base
          }/messenger/web/messenger_cards/content`,
          i = { canvas_id: t, uri: n };
        return (
          J(i),
          s.b
            .post({ url: r, session: e, params: i })
            .then((e) => Object.assign(e, { id: t }))
        );
      },
      getUnreadConversations: function (e) {
        const t = `${
          Object(o.b)().api_base
        }/messenger/web/conversations/unread`;
        return s.b.post({ url: t, session: e }).then(E);
      },
      markConversationAsRead: function (e, t) {
        const n = `${
          Object(o.b)().api_base
        }/messenger/web/conversations/${t}/read`;
        return s.b.post({ url: n, session: e }).then(P);
      },
      outboundPreview: function (e, t) {
        const n = `${
          Object(o.b)().api_base
        }/messenger/web/custom_bots/${t}/outbound_preview`;
        return s.b.post({ url: n, session: e });
      },
      workflowPreview: function (e, t) {
        const n = `${
          Object(o.b)().api_base
        }/messenger/web/workflows/${t}/build_preview`;
        return s.b.post({ url: n, session: e }).then(A);
      },
      progressTour: function (e, t, n, r) {
        const i = Object.assign({ step_id: n }, Object(g.t)(r));
        return s.b.fetch({
          url: `${Object(o.b)().api_base}/messenger/web/tours/${t}/progress`,
          session: e,
          params: i,
          keepalive: !0,
        });
      },
      quickReply: function (e, t, n, r, i) {
        const c = `${
            Object(o.b)().api_base
          }/messenger/web/conversations/${t}/quick_reply`,
          a = Object(g.u)(n, r, i);
        return s.b.post({ url: c, session: e, params: a }).then(R);
      },
      reactToBanner: function (e, t, n, r) {
        const i = `${Object(o.b)().api_base}/messenger/web/banners/${t}/react`,
          c = Object.assign({ reaction: r }, Object(g.j)(n));
        return s.b.post({ url: i, session: e, params: c });
      },
      recordInteractions: function (e, t, n) {
        const r = `${
            Object(o.b)().api_base
          }/messenger/web/conversations/${t}/record_interactions`,
          i = { interactions: n };
        return s.b.post({ url: r, session: e, params: i }).then(() => {});
      },
      recordNewsItemReaction: function (e, t, n) {
        const r = `${Object(o.b)().api_base}/messenger/web/news/${t}/react`,
          i = { reaction_index: n };
        return s.b.post({ url: r, session: e, params: i });
      },
      recordAnswerReaction: function (e, t, n) {
        const r = `${Object(o.b)().api_base}/messenger/web/answers/${t}/react`,
          i = { reaction_index: n };
        return s.b.post({ url: r, session: e, params: i });
      },
      recordTourFailure: function (e, t, n, r, i, c) {
        const a = `${
            Object(o.b)().api_base
          }/messenger/web/tours/${t}/record_failure`,
          u = { failed_selector: r, failure_url: i, tour_step_id: n },
          l = Object.assign(u, Object(g.t)(c));
        return s.b.post({ url: a, session: e, params: l });
      },
      rulesetConditionSatisfied: function (e, t, n, r, i, c, a, u, l) {
        const d = `${Object(o.b)().api_base}/messenger/web/rulesets/${t}/match`,
          p = {
            user_id: r,
            company_id: i,
            ruleset_link_id: n,
            predicates: JSON.stringify(c),
          };
        return (
          a && (p.checkpoint_id = a),
          u && (p.notification_record_id = u),
          l && (p.extra_context = JSON.stringify(l)),
          s.b.post({ url: d, session: e, params: p }).then((e) => {
            let {
              custom_bot: t,
              composer_suggestions: n,
              predictive_answers_suggestions: r,
            } = e;
            return y(
              y({}, _(e, m)),
              {},
              {
                customBot: t,
                composerSuggestions: W(n),
                answerbotPredictiveContexts: r,
              }
            );
          })
        );
      },
      searchGifs: function (e, t) {
        const n = `${Object(o.b)().api_base}/messenger/web/gifs`,
          r = { query: t };
        return s.b.post({ url: n, session: e, params: r });
      },
      sendBeaconEvent: function (e, t, n) {
        const r = { event_name: t, metadata: n };
        return s.b.sendBeacon({
          url: `${Object(o.b)().api_base}/messenger/web/events`,
          session: e,
          params: { event_list: JSON.stringify({ data: [r] }) },
        });
      },
      snoozeContentObjectInstance: function (e, t, n, r) {
        const i = `${Object(o.b)().api_base}/messenger/web/snooze`,
          c = { object_type: t, object_id: n, instance_id: r };
        return s.b.post({ url: i, session: e, params: c });
      },
      startConversationFromSuggestion: function (
        e,
        {
          suggestionUuid: t,
          clientAssignedUUID: n,
          selfServeSuggestionsMatch: r,
          articleUrl: i = null,
        }
      ) {
        const c = `${
            Object(o.b)().api_base
          }/messenger/web/custom_bots/trigger_inbound_conversation`,
          a = {
            id: t,
            client_assigned_uuid: n,
            self_serve_suggestions_match: r,
          };
        return (
          i && (a.search_browse = !0),
          s.b.post({ url: c, session: e, params: a, currentUrl: i }).then(P)
        );
      },
      stopTour: function (e, t, n) {
        const r = `${Object(o.b)().api_base}/messenger/web/tours/${t}/stop`,
          i = Object(g.t)(n);
        return s.b.post({ url: r, session: e, params: i });
      },
      submitSurvey: function (e, t, n, r, i, c) {
        const a = `${Object(o.b)().api_base}/messenger/web/surveys/${t}/submit`,
          u = {
            survey_progress_id: n,
            current_step_id: r,
            responses: JSON.stringify(i),
            is_preview: c,
          };
        return s.b.post({ url: a, session: e, params: u });
      },
      dismissSurvey: function (e, t, n, r) {
        const i = `${
            Object(o.b)().api_base
          }/messenger/web/surveys/${t}/dismiss`,
          c = { survey_progress_id: n, is_preview: r };
        return s.b.post({ url: i, session: e, params: c });
      },
      recordViewedStat: (e, t, n) => {
        const r = `${
            Object(o.b)().api_base
          }/messenger/web/checklists/${t}/view`,
          i = { checklist_progress_id: n };
        return s.b.post({ url: r, session: e, params: i });
      },
      recordTaskView: (e, t, n, r) => {
        const i = `${
            Object(o.b)().api_base
          }/messenger/web/checklists/${t}/view_task`,
          c = { checklist_progress_id: n, checklist_task_id: r };
        return s.b.post({ url: i, session: e, params: c });
      },
      recordActionClick: (e, t, n, r) => {
        const i = `${
            Object(o.b)().api_base
          }/messenger/web/checklists/${t}/action_click`,
          c = { checklist_progress_id: n, checklist_task_id: r };
        return s.b.post({ url: i, session: e, params: c });
      },
      resetTour: function (e, t) {
        const n = `${Object(o.b)().api_base}/messenger/web/tours/${t}/reset`;
        return s.b.post({ url: n, session: e });
      },
      resolveChecklists: (e) => {
        const { checklistProgressIds: t, session: n } = e,
          r = `${Object(o.b)().api_base}/messenger/web/checklists/resolve`,
          i = { checklist_progress_ids: t };
        return s.b.post({ url: r, session: n, params: i });
      },
      searchArticles: function (e, t) {
        const n = `${Object(o.b)().api_base}/messenger/web/articles/search`,
          r = { phrase: t };
        return s.b.post({ url: n, session: e, params: r }).then(g.f);
      },
      submitMessengerCardAction: function (e, t, n, r) {
        const i = `${Object(o.b)().api_base}/messenger/web/messenger_cards`,
          c = { action_id: n, uri: t, values: JSON.stringify(r) };
        return J(c), s.b.post({ url: i, session: e, params: c });
      },
      submitMessengerCardActionWithToken: function (e, t, n) {
        const r = `${
            Object(o.b)().api_base
          }/messenger/web/messenger_card_view/submit`,
          i = { action_id: t, token: e, values: JSON.stringify(n) };
        return s.b.post({ url: r, params: i });
      },
      submitSheet: function (e, t, n) {
        const r = `${Object(o.b)().api_base}/messenger/web/sheets/submit`,
          i = { uri: t, sheet_values: JSON.stringify(n) };
        return s.b.post({ url: r, session: e, params: i });
      },
      submitSheetWithToken: function (e, t) {
        const n = `${
            Object(o.b)().api_base
          }/messenger/web/messenger_card_view/submit_sheet`,
          r = { token: e, sheet_values: JSON.stringify(t) };
        return s.b.post({ url: n, params: r });
      },
      triggerTransitions: function (e, t, n) {
        const r = `${Object(o.b)().api_base}/messenger/web/operator/trigger`,
          i = Object(g.E)(t, n);
        return s.b.post({ url: r, session: e, params: i }).then(P);
      },
      updateConversationForm: function (e, t, n, r, i, c) {
        const a = c
            ? {
                identifier: r,
                value: i,
                conversation_part_id: n,
                upfront_email_collection: c,
              }
            : { identifier: r, value: i, conversation_part_id: n },
          u = `${Object(o.b)().api_base}/messenger/web/conversations/${t}/form`,
          l = { form_params: JSON.stringify(a) };
        return s.b.post({ url: u, session: e, params: l }).then(P);
      },
      updatePhoneNumber: function (e, t) {
        const n = `${Object(o.b)().api_base}/apps/${
            e.appId
          }/notification_channels/phone_number`,
          r = { phone_number: t };
        return s.b.post({ url: n, session: e, params: r });
      },
      visitorAutoMessageConditionSatisfied: function (e, t) {
        const n = `${Object(o.b)().api_base}/messenger/web/messages/${
            t.id
          }/match`,
          r = { predicates: JSON.stringify(t.predicates) };
        return s.b.post({ url: n, session: e, params: r }).then((e) => {
          if (!i()(e)) return P(e);
        });
      },
      generateArticleCard: function (e, t) {
        const n = `${Object(o.b)().api_base}/messenger/web/articles/${t}/card`;
        return s.b.post({ url: n, session: e });
      },
      createTicket: function (
        e,
        { ticketTypeId: t, conversationId: n, attributes: r = [] }
      ) {
        const i = `${Object(o.b)().api_base}/messenger/web/tickets/create`,
          c = { type_id: t, attributes: JSON.stringify(r) };
        return (
          n && (c.conversation_id = n),
          s.b.post({ url: i, session: e, params: c }).then(g.A)
        );
      },
      fetchNewsItemsInNewsfeed: function (e, t, n = 1) {
        const r = `${Object(o.b)().api_base}/messenger/web/news`,
          i = { newsfeed_id: t, page: n };
        return s.b
          .post({ url: r, session: e, params: i })
          .then((e) => ({
            nextPage: e.next_page,
            newsItems: e.news_items
              ? Object(g.r)(e.news_items)
              : Object(g.r)(e),
          }));
      },
      notifyNewsfeedVisit: function (e, t) {
        const n = `${
          Object(o.b)().api_base
        }/messenger/web/news/visit?&newsfeed_id=${t}`;
        return s.b.post({ url: n, session: e });
      },
      fetchTooltips: function ({ session: e, customAttributes: t }) {
        const n = `${Object(o.b)().api_base}/messenger/web/embedded/content`;
        return s.b.post({
          url: n,
          session: e,
          params: {},
          customAttributes: t,
        });
      },
      markTooltipViewed: function (e, t, n) {
        const r = `${
            Object(o.b)().api_base
          }/messenger/web/tooltips/${t}/viewed`,
          i = { tooltip_group_id: n };
        return s.b.post({ url: r, session: e, params: i });
      },
      buildTooltipGroups: g.C,
      buildTooltipGroup: g.B,
      fetchNewsItemDetails: function (e, t) {
        const n = `${Object(o.b)().api_base}/messenger/web/news/${t}`;
        return s.b.post({ url: n, session: e }).then((e) => Object(g.q)(e));
      },
      fetchAnswerDetails: function (e, t) {
        const n = `${Object(o.b)().api_base}/messenger/web/answers/${t}`;
        return s.b.post({ url: n, session: e }).then((e) => Object(g.c)(e));
      },
      getTicketTypes: function (e) {
        const t = `${Object(o.b)().api_base}/messenger/web/tickets/types`;
        return s.b.post({ url: t, session: e }).then(F);
      },
      completeChecklistTask: (e) => {
        const {
            checklistId: t,
            checklistProgressId: n,
            taskId: r,
            session: i,
          } = e,
          c = `${
            Object(o.b)().api_base
          }/messenger/web/checklists/${t}/complete_task`,
          a = { checklist_progress_id: n, task_id: r };
        return s.b.post({ url: c, session: i, params: a });
      },
      buildChecklists: h,
      loadChecklists: (e) => {
        const t = `${Object(o.b)().api_base}/messenger/web/checklists/list`;
        return s.b.post({ url: t, session: e });
      },
      dismissChecklistNotification: (e, t, n) => {
        const r = `${
            Object(o.b)().api_base
          }/messenger/web/checklists/${t}/dismiss_notification`,
          i = { checklist_progress_id: n };
        return s.b.post({ url: r, session: e, params: i });
      },
      updateChecklistNotificationDetails: (e, t, n) => {
        const r = `${
            Object(o.b)().api_base
          }/messenger/web/checklists/${t}/update_notification_details`,
          i = { checklist_progress_id: n };
        return s.b.post({ url: r, session: e, params: i });
      },
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(9),
      i = n.n(r),
      o = n(33);
    var s = n(91),
      c = n(3),
      a = n(104),
      u = n(69);
    function l(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function d(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? l(Object(n), !0).forEach(function (t) {
              p(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : l(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function p(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    n.d(t, "p", function () {
      return S;
    }),
      n.d(t, "h", function () {
        return P;
      }),
      n.d(t, "n", function () {
        return k;
      }),
      n.d(t, "i", function () {
        return T;
      }),
      n.d(t, "j", function () {
        return R;
      }),
      n.d(t, "o", function () {
        return x;
      }),
      n.d(t, "d", function () {
        return L;
      }),
      n.d(t, "b", function () {
        return D;
      }),
      n.d(t, "c", function () {
        return N;
      }),
      n.d(t, "a", function () {
        return U;
      }),
      n.d(t, "f", function () {
        return z;
      }),
      n.d(t, "r", function () {
        return V;
      }),
      n.d(t, "m", function () {
        return H;
      }),
      n.d(t, "q", function () {
        return F;
      }),
      n.d(t, "l", function () {
        return $;
      }),
      n.d(t, "g", function () {
        return W;
      }),
      n.d(t, "e", function () {
        return J;
      });
    const f = 100;
    let b,
      h,
      g = 0,
      m = null,
      v = null;
    const y = [],
      O = {},
      _ = {},
      w = [],
      j = [],
      C = [],
      S = (e) => (v = e);
    function E(e, t) {
      return e.splice(0, Math.min(e.length, t));
    }
    function I() {
      if (!Object(u.a)(v)) return;
      if (g >= 5) return;
      const e = E(y, f);
      if (w.length > 0 || e.length > 0) {
        const t = E(j, f),
          n = E(C, f),
          r = E(w, f);
        c.c.createMetrics(b, e, t, n, r).catch(() => {
          var i, o, s, c;
          g++,
            (i = e),
            (o = t),
            (s = n),
            (c = r),
            Array.prototype.unshift.apply(y, i),
            Array.prototype.unshift.apply(j, o),
            Array.prototype.unshift.apply(C, s),
            Array.prototype.unshift.apply(w, c);
        });
      }
    }
    function A() {
      clearInterval(m), (m = null), I();
    }
    function P(e, t, n, r, i, o = {}) {
      if (Object(u.a)(e)) {
        x(R(e, t, n, r, i, o));
      }
    }
    function k() {
      return h;
    }
    function T(e, t, n, r, i, o = {}) {
      return M(e, t, n, r, i, o, "educate_event");
    }
    function R(e, t, n, r, o, s = {}) {
      var c, a, u;
      return M(
        e,
        t,
        n,
        r,
        o,
        s,
        i()(
          null === (c = v) ||
            void 0 === c ||
            null === (a = c.app) ||
            void 0 === a ||
            null === (u = a.openConfig) ||
            void 0 === u
            ? void 0
            : u.layout
        )
          ? "m4_metric"
          : "m5_metric"
      );
    }
    function M(e, t, n, r, i, s = {}, c = "m4_metric") {
      if (!Object(u.a)(e)) return {};
      const a = e && e.id ? e.id : null,
        l = d(
          d({}, s),
          {},
          { version: "40aa21812316e8710032e9f8c8acd0e01be0964f" }
        );
      return {
        id: o.a.generateUUID(),
        name: c,
        created_at: Math.round(Date.now() / 1e3),
        metadata: Object.assign(
          { user_id: a, action: t, object: n, place: r, context: i },
          l
        ),
      };
    }
    function x(e) {
      i()(e) || y.push(e);
    }
    function L(e) {
      Object(a.c)() && j.push({ level: "info", text: e });
    }
    function D(e) {
      Object(a.c)() && j.length < 30 && j.push({ level: "error", text: e });
    }
    function N(e, t) {
      B({ name: e, type: "inc" }, t);
    }
    function U(e, t, n) {
      B({ name: e, type: "count", value: t }, n);
    }
    function z(e, t, n) {
      B({ name: e, type: "timing", value: t }, n);
    }
    function B(e, t) {
      C.length > 50 || (t && (e.tags = t), C.push(e));
    }
    function V(e, t, n = {}) {
      O[e] = { start: t, meta: n };
    }
    function H(e, t = {}) {
      O.hasOwnProperty(e) &&
        O[e].hasOwnProperty("start") &&
        (W(e, d(d({ duration: Date.now() - O[e].start }, O[e].meta), t)),
        delete O[e]);
    }
    function F(e, t, n = {}) {
      (_[e] = _[e] || {}), (_[e][t] = { start: Date.now(), meta: n });
    }
    function $(e, t, n = {}) {
      if (
        _.hasOwnProperty(e) &&
        _[e].hasOwnProperty(t) &&
        _[e][t].hasOwnProperty("start")
      ) {
        const r = _[e][t];
        W(
          e,
          d(
            d({ duration: Date.now() - r.start, conversationUuid: t }, r.meta),
            n
          )
        ),
          delete _[e][t];
      }
    }
    function G(e, t = {}) {
      return {
        id: o.a.generateUUID(),
        name: e,
        createdAt: Date.now(),
        screenWidth: screen.width,
        screenHeight: screen.height,
        additionalMetaData: t,
        sessionId: b && b.sessionId,
      };
    }
    function W(e, t, n = !1) {
      const r = ((e = !1) => (e ? 1 : 20))(Object(s.a)() || Object(a.c)());
      if (
        (void 0 === h &&
          (h = ((e = 20) => 1 === e || Math.random() < 1 / e)(r)),
        h || n)
      ) {
        q(G(e, d({ sample_rate: n ? 1 : r }, t)));
      }
    }
    function q(e) {
      w.length < 30 && w.push(e);
    }
    function J(e, t, n, r, i) {
      P(v, e, t, n, r, i);
    }
    t.k = {
      metrics: y,
      hcMetrics: w,
      logs: j,
      opMetrics: C,
      pushMetric: x,
      startMetricsPolling: function (e, t) {
        return (
          (b = e),
          null === m && (m = setInterval(() => I(), 3e4)),
          t.addEventListener("beforeunload", () => I()),
          A
        );
      },
      buildAndAddMetric: P,
      buildAndAddHcMetric: W,
      buildMetric: R,
      buildHcMetric: G,
      addHcMetric: q,
      addInfoLog: L,
      addErrorLog: D,
      addIncrementOpMetric: N,
      addCountOpMetric: U,
      addTimingOpMetric: z,
      clearMetricsState: function () {
        y.splice(0), j.splice(0), C.splice(0), w.splice(0), w.splice(0);
        for (const e in O) delete O[e];
        g = 0;
      },
      getShouldSample: k,
      startTimingMetric: V,
      endTimingMetric: H,
      buildEducateEventMetric: T,
      addEducateEventMetric: function (e, t, n, r, i) {
        if (Object(u.a)(v)) {
          x(T(v, e, t, n, r, i));
        }
      },
    };
  },
  function (e, t, n) {
    "use strict";
    function r(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function i(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? r(Object(n), !0).forEach(function (t) {
              o(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : r(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function o(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    n.d(t, "a", function () {
      return s;
    }),
      n.d(t, "b", function () {
        return d;
      }),
      n.d(t, "d", function () {
        return p;
      }),
      n.d(t, "c", function () {
        return f;
      });
    const s = n(228),
      { assign: c } = Object;
    let a;
    function u() {
      var e;
      const t = window.parent || window;
      if (t)
        return (
          (null == t || null === (e = t.intercomSettings) || void 0 === e
            ? void 0
            : e.api_base) ||
          (function (e) {
            const t = e.document.querySelector(
              "meta[name=intercom-js-api-base]"
            );
            return null == t ? void 0 : t.content;
          })(t)
        );
    }
    function l() {
      const e = c({}, s),
        t = { api_base: u() };
      return t.api_base ? i(i({}, e), t) : e;
    }
    function d() {
      return (a = a || l()), a;
    }
    function p(e, t) {
      d(), a && (a[e] = t);
    }
    function f() {
      return !1;
    }
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      n.d(t, "a", function () {
        return g;
      });
      var r = n(217),
        i = n(18),
        o = n(214),
        s = n(131),
        c = n(38),
        a = n(46),
        u = n(36);
      const l = [
          "url",
          "session",
          "params",
          "customAttributes",
          "currentUrl",
          "idempotencyKey",
          "referrer",
          "internal",
          "isIntersectionBooted",
          "shouldSetUserData",
        ],
        d = [
          "url",
          "session",
          "params",
          "customAttributes",
          "currentUrl",
          "idempotencyKey",
          "referrer",
          "internal",
          "isIntersectionBooted",
          "shouldSetUserData",
          "method",
          "keepalive",
        ];
      function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(n), !0).forEach(function (t) {
                b(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function b(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" != typeof e || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != typeof r) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" == typeof t ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function h(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]));
        }
        return i;
      }
      function g(e, t, n, r, l, d, p, f, b = !0) {
        var h;
        (r =
          r ||
          (null === (h = Object(c.d)()) || void 0 === h ? void 0 : h.href)),
          (d = d || Object(c.e)()),
          (r = Object(s.b)(r)),
          (d = Object(s.b)(d)),
          i.a.isNativeMobile() && (r = void 0),
          (l = l || Object(o.b)());
        const {
            appId: g,
            anonymousSession: m,
            sessionId: v,
            hostUserAgent: y,
            activeCompanyId: O,
          } = e,
          _ = {
            app_id: g,
            v: 3,
            g: "40aa21812316e8710032e9f8c8acd0e01be0964f",
            s: v,
            r: d,
            platform: i.a.isMobileBrowser() ? "mobile_web" : "web",
            [o.a]: l,
            internal: p ? JSON.stringify(p) : "",
            is_intersection_booted: f,
            page_title: Object(c.b)(),
            user_active_company_id: O,
          };
        b &&
          (_.user_data = (function (e, t) {
            const { userId: n, email: r, userHash: i, anonymousId: o } = e,
              s = Object.assign(
                { email: r, user_id: n, user_hash: i, anonymous_id: o },
                t
              );
            return JSON.stringify(s);
          })(e, n));
        const w = Object.assign(_, t);
        void 0 !== r && (w.referer = r),
          void 0 !== m && (w.anonymous_session = m),
          void 0 !== y && (w.host_user_agent = y);
        const j = a.a.read(Object(u.c)(g));
        return void 0 !== j && (w.device_identifier = j), w;
      }
      function m(e) {
        const t = [];
        return (
          Object.keys(e).forEach((n) => {
            const r = e[n];
            (n = encodeURIComponent(n)),
              Array.isArray(r)
                ? r.forEach((e) => t.push(`${n}[]=${encodeURIComponent(e)}`))
                : t.push(`${n}=${encodeURIComponent(r)}`);
          }),
          t.join("&")
        );
      }
      function v(e) {
        try {
          return JSON.parse(e);
        } catch (t) {
          return e;
        }
      }
      t.b = {
        buildBody: g,
        post: function (e) {
          let {
              url: t,
              session: n = {},
              params: i = {},
              customAttributes: o = null,
              currentUrl: s = null,
              idempotencyKey: c = null,
              referrer: a = null,
              internal: u = null,
              isIntersectionBooted: d = null,
              shouldSetUserData: p = !0,
            } = e,
            b = h(e, l);
          if (!n) return Promise.reject("http_post_session_empty");
          const y = f(f({}, g(n, i, o, s, c, a, u, d, p)), b);
          return r.a
            .post(
              t,
              { "Content-Type": "application/x-www-form-urlencoded" },
              m(y)
            )
            .then(v);
        },
        sendBeacon: function ({
          url: e,
          session: t = {},
          params: n = {},
          customAttributes: i = null,
          currentUrl: o = null,
          idempotencyKey: s = null,
          referrer: c = null,
          internal: a = null,
          isIntersectionBooted: u = null,
          shouldSetUserData: l = !0,
        }) {
          var d, p, f;
          if (!t) return Promise.reject("http_post_session_empty");
          const b = g(t, n, i, o, s, c, a, u, l);
          if (
            null !== (d = window) &&
            void 0 !== d &&
            null !== (p = d.parent) &&
            void 0 !== p &&
            null !== (f = p.navigator) &&
            void 0 !== f &&
            f.sendBeacon
          ) {
            const t = { type: "application/x-www-form-urlencoded" };
            return window.parent.navigator.sendBeacon(e, new Blob([m(b)], t))
              ? Promise.resolve()
              : Promise.reject();
          }
          {
            const t = { "Content-Type": "application/x-www-form-urlencoded" };
            return r.a.post(e, t, m(b)).then(v);
          }
        },
        fetch: function (t) {
          let {
              url: n,
              session: r = {},
              params: i = {},
              customAttributes: o = null,
              currentUrl: s = null,
              idempotencyKey: c = null,
              referrer: a = null,
              internal: u = null,
              isIntersectionBooted: l = null,
              shouldSetUserData: p = !0,
              method: b = "POST",
              keepalive: y = !1,
            } = t,
            O = h(t, d);
          if (!r) return Promise.reject("http_post_session_empty");
          const _ = f(f({}, g(r, i, o, s, c, a, u, l, p)), O);
          return e
            .fetch(n, {
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: m(_),
              method: b,
              keepalive: y,
            })
            .then(v);
        },
      };
    }.call(this, n(186)));
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "g", function () {
      return h;
    }),
      n.d(t, "f", function () {
        return g;
      });
    var r = n(356),
      i = n.n(r),
      o = n(1),
      s = n(70);
    n.d(t, "c", function () {
      return s.css;
    }),
      n.d(t, "e", function () {
        return s.keyframes;
      }),
      n.d(t, "b", function () {
        return s.Global;
      }),
      n.d(t, "a", function () {
        return s.ClassNames;
      });
    var c = n(30);
    n(22);
    function a(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function u(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function l() {
      return (
        (l = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        l.apply(this, arguments)
      );
    }
    const d = ["button", "input", "select", "textarea"],
      p = ["img", "video"];
    function f(e) {
      const t = (function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                u(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      })({}, e);
      return null != t.style && "object" != typeof t.style && delete t.style, t;
    }
    const b =
      (e, t) =>
      (...n) => {
        const r = i()(e, l({}, { target: "ennp9720" }, t))(...n);
        r.displayName = "Emotion";
        const s = ((a = (function (e) {
          return (t) => {
            const n = {};
            if ("string" != typeof e || "-1" === t.tabIndex || !t.onClick)
              return n;
            const r = "a" === e && t.href,
              i = -1 !== d.indexOf(e),
              o = -1 !== p.indexOf(e);
            return (
              !1 === t.role || r || i || o || (n.role = t.role || "button"),
              r || i || (n.onKeyDown = t.onKeyDown || Object(c.z)(t.onClick)),
              t.className && (n.className = t.className),
              (n.tabIndex = t.tabIndex || "0"),
              n
            );
          };
        })(e)),
        (e) =>
          o.forwardRef((t, n) => {
            const r = f(t);
            return o.createElement(e, l({}, r, a(r), { ref: n }));
          }))(r);
        var a;
        return (
          (s.displayName = "string" == typeof e ? `Styled.${e}` : "Styled()"),
          (s.className = r),
          s
        );
      };
    function h(e) {
      return ({ theme: t }) => t[e];
    }
    function g(e) {
      return (t) => t[e];
    }
    t.d = b;
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return y;
    }),
      n.d(t, "s", function () {
        return O;
      }),
      n.d(t, "u", function () {
        return _;
      }),
      n.d(t, "r", function () {
        return w;
      }),
      n.d(t, "q", function () {
        return j;
      }),
      n.d(t, "c", function () {
        return C;
      }),
      n.d(t, "j", function () {
        return S;
      }),
      n.d(t, "t", function () {
        return E;
      }),
      n.d(t, "E", function () {
        return I;
      }),
      n.d(t, "o", function () {
        return A;
      }),
      n.d(t, "A", function () {
        return k;
      }),
      n.d(t, "l", function () {
        return M;
      }),
      n.d(t, "e", function () {
        return x;
      }),
      n.d(t, "f", function () {
        return L;
      }),
      n.d(t, "d", function () {
        return D;
      }),
      n.d(t, "z", function () {
        return N;
      }),
      n.d(t, "g", function () {
        return U;
      }),
      n.d(t, "n", function () {
        return B;
      }),
      n.d(t, "k", function () {
        return V;
      }),
      n.d(t, "i", function () {
        return H;
      }),
      n.d(t, "C", function () {
        return F;
      }),
      n.d(t, "B", function () {
        return $;
      }),
      n.d(t, "x", function () {
        return G;
      }),
      n.d(t, "y", function () {
        return W;
      }),
      n.d(t, "w", function () {
        return K;
      }),
      n.d(t, "p", function () {
        return Z;
      }),
      n.d(t, "D", function () {
        return Y;
      }),
      n.d(t, "b", function () {
        return ee;
      }),
      n.d(t, "h", function () {
        return ie;
      }),
      n.d(t, "F", function () {
        return oe;
      }),
      n.d(t, "m", function () {
        return se;
      }),
      n.d(t, "v", function () {
        return ce;
      });
    var r = n(137),
      i = n.n(r),
      o = n(108),
      s = n.n(o),
      c = n(9),
      a = n.n(c),
      u = n(175),
      l = n(27),
      d = n(16),
      p = n(54),
      f = n(219),
      b = n(12),
      h = n(163);
    function g(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function m(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? g(Object(n), !0).forEach(function (t) {
              v(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : g(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function v(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const y = "viewed-tooltips";
    function O(
      e,
      t,
      n,
      r,
      i,
      o = null,
      s = !1,
      c = null,
      a = null,
      l = null,
      d = !1
    ) {
      const p = { created_at: t, self_serve_suggestions_match: s };
      r && (p.client_assigned_uuid = r),
        i && (p.email = i),
        o && (p.composer_suggestions = JSON.stringify(o.suggestions)),
        c && (p.bot_intro = c),
        l && (p.preview_workflow_instance_id = l),
        a && (p.resolution_bot_behavior_version_id = a),
        d && (p.search_browse = !0);
      const f = e[0];
      if ("paragraph" === f.type)
        (e = e.map((e) => ({ type: e.type, text: Object(u.b)(e.text) }))),
          (p.blocks = JSON.stringify(e));
      else if ("image" === f.type)
        n && (f.url = n.publicUrl), (p.blocks = JSON.stringify(e));
      else if ("attachmentList" === f.type && n) {
        const t = f.attachments[0];
        (t.id = n.id),
          (t.url = n.publicUrl),
          (t.contentType = n.contentType),
          (p.blocks = JSON.stringify(e));
      }
      return p;
    }
    function _(e, t, n) {
      return {
        client_assigned_uuid: n,
        conversation_part: JSON.stringify({ id: e, reply_option: t }),
      };
    }
    function w(e) {
      return e.map((e) => j(e));
    }
    function j(e) {
      var t, n, r;
      return {
        id: e.id,
        title: e.title,
        description: e.description,
        publishedAt: e.published_at ? Object(l.c)(e.published_at) : void 0,
        coverImageUrl: e.cover_image_url,
        author: {
          name: null === (t = e.author) || void 0 === t ? void 0 : t.name,
          firstName:
            null === (n = e.author) || void 0 === n ? void 0 : n.first_name,
          avatar: {
            square128:
              null === (r = e.author) || void 0 === r ? void 0 : r.avatar,
          },
        },
        blocks: e.blocks || null,
        labels: e.labels || null,
        reactionsReply: e.reactions_reply ? ce(e.reactions_reply) : void 0,
      };
    }
    function C(e) {
      return {
        id: e.id,
        title: e.title,
        blocks: e.blocks || null,
        reactionsReply: e.reactions_reply ? ce(e.reactions_reply) : void 0,
      };
    }
    function S(e) {
      return e ? { banner_view_id: e } : {};
    }
    function E(e) {
      return e ? { progress_id: e } : {};
    }
    function I(
      e,
      { type: t, payload: { composerHasContent: n, executionTime: r } = {} }
    ) {
      return {
        type: t,
        payload: JSON.stringify({ composer_has_content: n, execution_time: r }),
        meta: JSON.stringify({ conversation_id: e }),
      };
    }
    function A(e) {
      return P(e) || !e.last_participating_admin
        ? void 0
        : ee(e.last_participating_admin);
    }
    function P(e) {
      if (e.conversation_message.team_author) {
        return (
          0 ===
          (e.conversation_parts
            ? e.conversation_parts.conversation_parts || e.conversation_parts
            : []
          ).filter((e) => e.author.is_admin && !e.author.is_bot).length
        );
      }
      return !1;
    }
    function k(e) {
      const t = (function (e) {
        return e.attributes.reduce(
          (e, t) =>
            m(
              m({}, e),
              {},
              { [t.name]: m(m({}, t), {}, { value: T(t.type, t.value) }) }
            ),
          {}
        );
      })(e);
      return {
        id: e.id,
        conversationId: e.conversation_id,
        name: e.title,
        attributes: t,
        status: e.current_status ? e.current_status.type : null,
        history: R(e),
        emoji: e.emoji,
        assignee: ee(e.assignee),
        ticketTypeId: e.ticket_type_id,
      };
    }
    function T(e, t) {
      return "files" === e ? t.map(p.a) : t;
    }
    function R(e) {
      const t = e.status_history || e.status_list;
      return e.current_status && t.length
        ? t.map((e) => ({
            relativeTime: Object(f.e)(Object(l.c)(parseInt(e.created_date))),
            isCurrent: e.is_current_status,
            title: e.title,
            type: e.type,
            detail: e.status_detail,
          }))
        : [];
    }
    function M(e) {
      if (e)
        return {
          visible: e.visible,
          customBotActive: e.custom_bot_active,
          workflowActive: e.workflow_active,
          selfServeSuggestionsEnabled: e.self_serve_suggestions_enabled,
          version: e.version,
        };
    }
    function x(e) {
      return {
        id: e.id,
        name: e.name,
        description: e.description,
        sections: e.sections,
        articleCount: e.article_count,
        articles: e.articles,
        children: e.children
          .filter((e) => e.articles.length > 0 || e.children.length > 0)
          .map(x),
        authors: e.authors,
      };
    }
    function L(e) {
      return {
        articles: e.articles.map((e) => {
          var t, n, r;
          const o = { id: e.id, url: e.url };
          var s, c;
          if (null !== (t = e.highlight) && void 0 !== t && t.title)
            o.title =
              null === (s = e.highlight) ||
              void 0 === s ||
              null === (c = s.title) ||
              void 0 === c
                ? void 0
                : c[0];
          else if (null !== (n = e.highlight) && void 0 !== n && n.summary) {
            var a;
            (o.title = e.title),
              (o.summary =
                i()(
                  null === (a = e.highlight) || void 0 === a
                    ? void 0
                    : a.summary
                ) || e.summary);
          } else if (null !== (r = e.highlight) && void 0 !== r && r.body) {
            var u;
            (o.title = e.title),
              (o.summary =
                i()(
                  null === (u = e.highlight) || void 0 === u ? void 0 : u.body
                ) || e.summary);
          } else o.title = e.title;
          return o;
        }),
      };
    }
    function D(e) {
      return {
        author:
          ((t = e.author),
          {
            avatar: { square128: t.avatar },
            firstName: t.first_name || t.name,
            name: t.name,
          }),
        available_locales: e.available_locales,
        blocks: e.blocks,
        contentId: e.content_id,
        description: e.description,
        id: e.id,
        reactionsReply: ce(e.reactions_reply),
        title: e.title,
        updatedAt: e.updated_at,
        url: e.url,
        alexandriaData: e.alexandria_data,
        publicUrl: e.public_url,
      };
      var t;
    }
    function N(e) {
      return P(e)
        ? {
            admins: (
              e.conversation_message.team_author.last_active_admins || []
            ).map(ee),
            name: e.conversation_message.team_author.name,
          }
        : void 0;
    }
    function U(e) {
      return {
        admins: e.authors ? e.authors.map(z) : [],
        avatar: ie(e.avatar),
        firstName: B(e.first_name),
        id: e.id,
        initial: e.initial,
        isAdmin: e.is_admin,
        isBot: e.is_bot,
        isSelf: e.is_self,
        type: e.type.toLowerCase(),
        avatarShape: e.avatar_shape,
      };
    }
    function z(e) {
      return { avatar: ie(e.avatar), firstName: B(e.first_name) };
    }
    function B(e) {
      return e || "";
    }
    function V(e = []) {
      return e.map(H);
    }
    function H(e) {
      const t = e.from ? ee(e.from) : null;
      return m(
        m({}, e),
        {},
        { from: t, reaction_set: (e.reaction_set || []).map(ae) }
      );
    }
    function F(e) {
      return e ? e.map($) : [];
    }
    function $(e) {
      const t = JSON.parse(b.a.get(y)) || [];
      return {
        id: e.id,
        displayBehavior: e.display_behavior || 0,
        tooltips: e.tooltips
          .map((n) =>
            (function (e, t, n) {
              return m(
                m({}, e),
                {},
                {
                  isOpen: !1,
                  isMatched: a()(e.url_predicates),
                  isViewed: -1 !== n.indexOf(e.id),
                  tooltipGroupId: t.id,
                  customizationOptions: t.customization_options || h.a,
                }
              );
            })(n, e, t)
          )
          .map(p.a),
      };
    }
    function G(e) {
      if (!e) return;
      const t = e.sender ? ee(e.sender) : null;
      return {
        id: e.id,
        rulesetId: e.ruleset_id,
        format: e.format,
        sender: t,
        surveyProgressId: e.survey_progress_id,
        steps: e.steps.map(W),
        stepCount: e.step_count,
        activeStepId: e.steps[0].id,
        dismissed: !1,
        hidden: !1,
        completed: !1,
        customizationOptions: m({}, Object(p.a)(e.customization_options)),
        dismissible: e.dismissible,
        showProgressBar: e.show_progress_bar,
      };
    }
    function W(e) {
      return {
        id: e.id,
        actions: e.actions.map(J),
        blocks: e.blocks,
        stepType: e.step_type,
        questions: e.questions.map(q),
        customButtonText: e.custom_button_text,
      };
    }
    function q(e) {
      return {
        id: e.id,
        blocks: e.blocks,
        data: Object(p.a)(e.data),
        questionType: e.question_type,
        response: e.response || void 0,
      };
    }
    function J(e) {
      return {
        id: e.id,
        actionType: e.action_type,
        webUrl: e.web_url,
        actionTitle: e.action_title,
      };
    }
    function K(e) {
      return { slotType: e.slot_type, messengerCardId: e.messenger_card_id };
    }
    function Z(e) {
      return {
        id: e.id,
        event: e.event,
        preAction: e.messenger_pre_action,
        selector: e.selector,
      };
    }
    function Y(e) {
      return e
        ? (Object(d.e)("Tour received", e),
          {
            id: e.id.toString(),
            activeStepId: e.active_step_id.toString(),
            author: e.author ? U(e.author) : null,
            steps: ((t = e.steps), s()(t, ["order"], ["asc"])).map((e) => {
              return {
                id: (t = e).id.toString(),
                blocks: t.blocks,
                order: t.order,
                progressionBehavior: X(t.progression_behavior),
                placement: t.placement,
                pointerSize: t.pointer_size,
                selector: t.selector,
                selectors: t.selectors,
                url: t.url,
                buttonText: t.button_text,
              };
              var t;
            }),
            title: e.title,
            url: e.url,
            restartable: e.restartable,
            snoozeable: e.snoozeable,
            endTourAnimation: e.end_tour_animation,
            progressStartUrl: e.start_url,
            progressId: e.progress_id,
            buttonColor: e.button_color,
            snoozeButtonText: e.snooze_button_text,
            restartButtonText: e.restart_button_text,
          })
        : {};
      var t;
    }
    const Q = ["manual", "click", "type"];
    function X(e) {
      return Q[e];
    }
    function ee(e) {
      return e
        ? {
            avatar: ie(e.avatar),
            calendarUrl: te(e.calendar_url),
            firstName: B(e.first_name),
            initial: e.initial || e.avatar.initials,
            intro: te(e.intro),
            isActive: e.is_active,
            isAdmin: !0,
            isBot: e.is_bot,
            isSelf: !1,
            jobTitle: te(e.job_title),
            lastActiveAt: Object(l.c)(e.last_active_at),
            location: e.location ? ne(e.location) : void 0,
            socialAccounts: (e.social_accounts || []).map(re),
            avatarShape: e.avatar_shape,
          }
        : null;
    }
    function te(e) {
      if (e && 0 !== e.trim().length) return e;
    }
    function ne(e) {
      return {
        cityName: e.city_name,
        countryCode: e.country_code,
        countryName: e.country_name,
        timezoneOffset: e.timezone_offset,
      };
    }
    function re(e) {
      return {
        imageUrl: e.image_url,
        profileUrl: e.profile_url,
        provider: e.provider,
        username: e.username,
      };
    }
    function ie(e) {
      let t;
      return (
        e.square_128
          ? (t = e.square_128)
          : e.image_urls &&
            e.image_urls.square_128 &&
            (t = e.image_urls.square_128),
        t ? { square128: t } : {}
      );
    }
    function oe(e) {
      return e;
    }
    function se(e, t) {
      return (
        ("participant_added" !== t && "participant_removed" !== t) ||
          (e.participant.avatar = ie(e.participant.avatar)),
        e || {}
      );
    }
    function ce(e) {
      return {
        reactionIndex: e.reaction_index,
        reactionSet: (e.reaction_set || []).map(ae),
      };
    }
    function ae(e) {
      return { emoji: e.unicode_emoticon, index: e.index };
    }
  },
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "m", function () {
      return j;
    }),
      n.d(t, "p", function () {
        return C;
      }),
      n.d(t, "n", function () {
        return S;
      }),
      n.d(t, "c", function () {
        return E;
      }),
      n.d(t, "u", function () {
        return I;
      }),
      n.d(t, "k", function () {
        return A;
      }),
      n.d(t, "j", function () {
        return P;
      }),
      n.d(t, "h", function () {
        return k;
      }),
      n.d(t, "i", function () {
        return T;
      }),
      n.d(t, "g", function () {
        return R;
      }),
      n.d(t, "e", function () {
        return M;
      }),
      n.d(t, "f", function () {
        return x;
      }),
      n.d(t, "d", function () {
        return L;
      }),
      n.d(t, "r", function () {
        return D;
      }),
      n.d(t, "l", function () {
        return N;
      }),
      n.d(t, "a", function () {
        return B;
      }),
      n.d(t, "v", function () {
        return V;
      }),
      n.d(t, "b", function () {
        return H;
      }),
      n.d(t, "t", function () {
        return F;
      }),
      n.d(t, "o", function () {
        return $;
      }),
      n.d(t, "s", function () {
        return W;
      }),
      n.d(t, "q", function () {
        return q;
      });
    var r = n(18),
      i = n(45),
      o = n(11),
      s = n(30),
      c = n(3),
      a = n(6),
      u = n(263),
      l = n(4),
      d = n(37),
      p = n(27),
      f = n(91),
      b = n(286),
      h = n(17),
      g = n(348),
      m = n(28),
      v = n(13),
      y = n(15),
      O = n(79),
      _ = n(0),
      w = n(42);
    function j(e, t, n = !1, r = null, i = null, s = null, c = null) {
      return (a, u) => {
        a(
          (function (e, t = !1) {
            return { type: _.Qb, conversationId: e, isUpdating: t };
          })(t, n)
        );
        const {
            session: b,
            operator: g,
            app: v,
            user: y,
            conversations: w,
          } = u(),
          j = Date.now();
        return e
          .getConversation(b, t, v.selfServeSuggestionsMatch, i)
          .then((n) => {
            var u;
            const b = w ? w.byId[t] : null;
            if (
              (i &&
                (null != c && "quick_reply_finished" === c
                  ? Object(l.g)("custom_bot_to_messenger", {
                      client_assigned_uuid: i,
                      time_to_fetch_conv_ms: Date.now() - j,
                    })
                  : s &&
                    Object(l.g)("inbox_to_messenger", {
                      client_assigned_uuid: i,
                      web_socket_enqueued_at: s,
                      time_to_fetch_conv_ms: Date.now() - j,
                      user_is_present: (null == y ? void 0 : y.isPresent) || !1,
                    })),
              Object(l.l)(
                "inboundSuggestionConversationCreation",
                null === (u = Object(o.g)(n)) || void 0 === u
                  ? void 0
                  : u.clientId,
                {
                  origin: "conversation_refreshed",
                  conversation_id: null == n ? void 0 : n.id,
                }
              ),
              a(
                (function (e) {
                  return (t, n) => {
                    const r = n(),
                      { newConversation: i } = r,
                      s = Object(h.i)(r);
                    try {
                      Object(o.g)(e).clientId === Object(o.g)(i).clientId &&
                        "conversation" !== s &&
                        (t(T(e, null, null, Date.now(), "custom_bot")),
                        t(Object(m.c)(e.id, !0)));
                    } catch (e) {}
                  };
                })(n)
              ),
              a(C(e, n, !1, Date.now())),
              g)
            ) {
              const {
                lastComposerEvent: e,
                userCreatedConversationAt: t,
                lastTriggerTransitionTimestamp: r,
              } = g;
              Object(d.j)(n, r), Object(d.i)(n, t, e);
            }
            r &&
              Object(f.a)() &&
              Object(l.g)("newCommentEvent", { duration_ms: Object(p.a)(r) }),
              r &&
                b &&
                (function (e, t) {
                  const n = e.parts ? e.parts.slice(-1) : null;
                  if (!(n && n[0] && Object(O.c)(n[0])))
                    try {
                      e.updatedAt.getTime() === t.updatedAt.getTime() &&
                        Object(l.g)("realTimeConversationUpdateGotExactCopy", {
                          conversation_id: e.id,
                        });
                      Object(o.a)(e.parts, t.parts, 5) &&
                        Object(l.g)("realTimeConversationUpdateGotExactParts", {
                          conversation_id: e.id,
                        });
                    } catch (e) {}
                })(n, b);
          })
          .catch((e) =>
            a(
              (function (e, t) {
                return { type: _.Pb, conversationId: e, error: t };
              })(t, e)
            )
          );
      };
    }
    function C(e, t, n, r) {
      return (s) => {
        Object(o.v)(t).forEach((t) => s(Object(i.a)(e, t, !1))),
          s(
            (function (e, t = !1, n) {
              return {
                type: _.Rb,
                conversation: e,
                skipNotification: t,
                createdAt: n,
              };
            })(t, n, r)
          );
      };
    }
    function S(e, t) {
      return (n, r) => {
        n(
          (function (e) {
            return { type: _.ec, conversationId: e };
          })(t)
        );
        const { session: i } = r();
        return e
          .markConversationAsRead(i, t)
          .then(() =>
            n(
              (function (e) {
                return { type: _.fc, conversationId: e };
              })(t)
            )
          )
          .catch((e) =>
            n(
              (function (e, t) {
                return { type: _.dc, conversationId: e, error: t };
              })(t, e)
            )
          );
      };
    }
    function E(e) {
      return { type: _.D, conversationId: e };
    }
    function I(e) {
      return { type: _.ve, conversationId: e };
    }
    function A(e, t, n, r) {
      return (i, o) => {
        i(
          (function (e, t, n) {
            return {
              type: _.T,
              conversationId: e,
              reactionIndex: t,
              isFromConversation: !!n,
            };
          })(t, n, r)
        );
        const { session: s } = o();
        return e
          .createReaction(s, t, n)
          .then(() =>
            i(
              (function (e, t) {
                return { type: _.U, conversationId: e, reactionIndex: t };
              })(t, n)
            )
          )
          .catch((e) =>
            i(
              (function (e, t, n) {
                return {
                  type: _.S,
                  conversationId: e,
                  reactionIndex: t,
                  error: n,
                };
              })(t, n, e)
            )
          );
      };
    }
    function P(e, t, n, r = !1, i = !1, s = null, c = null, a = !1, u) {
      return void 0 === t
        ? (function (e, t, n = !1, r, i, o) {
            return (s, c) => {
              const a = c(),
                { session: u, app: l, user: d, newConversation: p } = a,
                { body: f, createdAt: b } = t,
                h = p ? p.botIntroId : null,
                v = p ? p.fromArticleId : null,
                y = !!p && p.fromStandaloneArticle;
              s(k(t, n, o, Date.now())), o && s(G());
              let O = null;
              return (
                o || h || (O = Object(g.a)(a)),
                U(e, u, t, (e) => s(z(t, e)))
                  .then((t) => {
                    const n = {
                      blocks: f,
                      createdAt: b,
                      upload: t,
                      email: o,
                      composerSuggestions: O,
                      selfServeSuggestionsMatch: l.selfServeSuggestionsMatch,
                      botIntro: h,
                      resolutionBotBehaviorVersionId:
                        (d ? d.resolutionBotBehaviorVersionId : null) ||
                        (null == p
                          ? void 0
                          : p.previewResolutionBotBehaviorVersionId),
                      previewWorkflowInstanceId:
                        null == p ? void 0 : p.previewWorkflowInstanceId,
                    };
                    return (
                      p &&
                        p.articleUrl &&
                        ((n.currentUrl = p.articleUrl),
                        (n.startedFromSearchBrowse = !0)),
                      e.createConversation(u, n)
                    );
                  })
                  .then(
                    (e) => (
                      s(T(e, r, i, Date.now())),
                      s(Object(m.a)(e.id, !0, v, y)),
                      e
                    )
                  )
                  .catch((e) => s(R(e)))
              );
            };
          })(e, n, r, c, a, u)
        : (function (e, t, n, r = !1, i = !1, s, c, a, u) {
            return (l, d) => {
              const { session: p } = d(),
                f = Object(w.c)(d(), t),
                b = f ? Object(o.f)(f) : null,
                { body: h, createdAt: g, clientId: m } = n;
              return (
                l(M(t, n, r, u)),
                u && l(G()),
                U(e, p, n, (e) => l(z(n, e, t)))
                  .then((n) => {
                    var r;
                    return e.createComment(
                      p,
                      t,
                      m,
                      h,
                      g,
                      n,
                      u,
                      null == b || null === (r = b.createdAt) || void 0 === r
                        ? void 0
                        : r.toISOString()
                    );
                  })
                  .then((e) => {
                    l(x(t, e, i, s, c, a, Date.now()));
                  })
                  .catch((e) => l(L(t, n, e)))
              );
            };
          })(e, t, n, r, i, s, c, a, u);
    }
    function k(e, t, n, r = Date.now()) {
      return { type: _.K, part: e, isRetry: t, timestamp: r, email: n };
    }
    function T(e, t, n, r, i) {
      return {
        type: _.L,
        conversation: e,
        officeHoursResponse: t,
        isAnnotatedImage: n,
        createdAt: r,
        conversationTriggerType: i,
      };
    }
    function R(e) {
      return { type: _.J, reason: e };
    }
    function M(e, t, n, r) {
      return { type: _.H, conversationId: e, part: t, isRetry: n, email: r };
    }
    function x(e, t, n, r, i, o, s, c = !1) {
      return {
        type: _.I,
        conversationId: e,
        part: t,
        isBorderless: n,
        lastParticipatingAdmin: r,
        officeHoursResponse: i,
        isAnnotatedImage: o,
        createdAt: s,
        fromMessengerSuggestedContent: c,
      };
    }
    function L(e, t, n) {
      return { type: _.G, conversationId: e, part: t, reason: n };
    }
    function D(e, t, n) {
      const { id: r } = t;
      return (i) => {
        if (n.selectedReplyOption || n.composerSuggestionItem) {
          let r, o;
          return (
            n.selectedReplyOption
              ? ((r = n.selectedReplyOption.replyOption),
                (o = n.selectedReplyOption.quickReplyPart))
              : (r = n.composerSuggestionItem),
            i(Object(b.a)(e, t, r, !0, o))
          );
        }
        return i(P(e, r, n, !0));
      };
    }
    function N(e, t, n, r, i = []) {
      return n.size > 41943040
        ? Promise.reject("file_size")
        : e.createUploadPolicy(t, n, ...i).then((t) => e.createUpload(t, n, r));
    }
    function U(e, t, n, r) {
      const { file: i, body: o } = n,
        { width: s, height: c } = o[0];
      return i ? N(e, t, i, r, [s, c]) : Promise.resolve();
    }
    function z(e, t, n) {
      return { type: _.re, conversationId: n, part: e, progress: t };
    }
    function B(e, t, n, r, i = !1, o = new Date()) {
      return {
        type: _.f,
        conversationId: e,
        adminId: t,
        firstName: n,
        avatarUrl: r,
        isBot: i,
        lastActiveAt: o,
      };
    }
    function V(e) {
      return { type: _.ze, conversationId: e };
    }
    function H(e, t, n = new Date()) {
      return {
        type: _.B,
        conversationId: e,
        composerContent: t,
        lastActiveAt: n,
      };
    }
    function F(e, t, n, r, i, o, s, c, a) {
      return (l, d) => {
        const p = d(),
          { session: f, user: b, borderless: h } = p;
        return (
          Object(v.i)(p) && null != h && h.conversationId && l(Object(y.f)(t)),
          l(
            (function (e, t, n, r, i, o, s) {
              return {
                type: _.ge,
                conversationId: e,
                partId: t,
                identifier: n,
                value: r,
                identifierType: i,
                formType: o,
                isCustomData: s,
              };
            })(t, n, r, i, o, s, c)
          ),
          e
            .updateConversationForm(f, t, n, r, i, a)
            .then((e) => {
              l(
                (function (e, t, n, r) {
                  return {
                    type: _.he,
                    conversation: e,
                    partId: t,
                    identifier: n,
                    createdAt: r,
                  };
                })(e, n, r, Date.now())
              ),
                "email" === r && l(Object(u.d)(b, i));
            })
            .catch((e) => {
              l(
                (function (e, t, n, r) {
                  return {
                    type: _.fe,
                    conversationId: e,
                    partId: t,
                    identifier: n,
                    error: r,
                  };
                })(t, n, r, e, Date.now())
              );
            })
        );
      };
    }
    function $(e) {
      return (t, n) => {
        const { session: i } = n();
        let o = Object(c.e)();
        Object(r.l)() && (o += `?v=${Math.floor(1e8 * Math.random())}`),
          Object(s.A)(o, Object(a.a)(i, { conversation_id: e }));
      };
    }
    function G() {
      return { type: _.ue };
    }
    function W(e) {
      return { type: _.yd, composerState: e };
    }
    function q(e, t, n) {
      return (r, i) => {
        const { session: o } = i();
        return e.recordInteractions(o, t, n);
      };
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return w;
    }),
      n.d(t, "d", function () {
        return j;
      }),
      n.d(t, "f", function () {
        return C;
      }),
      n.d(t, "c", function () {
        return S;
      }),
      n.d(t, "l", function () {
        return E;
      }),
      n.d(t, "k", function () {
        return I;
      }),
      n.d(t, "n", function () {
        return A;
      }),
      n.d(t, "t", function () {
        return k;
      }),
      n.d(t, "s", function () {
        return T;
      }),
      n.d(t, "i", function () {
        return R;
      }),
      n.d(t, "o", function () {
        return M;
      }),
      n.d(t, "u", function () {
        return x;
      }),
      n.d(t, "g", function () {
        return L;
      }),
      n.d(t, "h", function () {
        return D;
      }),
      n.d(t, "m", function () {
        return N;
      }),
      n.d(t, "e", function () {
        return U;
      }),
      n.d(t, "v", function () {
        return B;
      }),
      n.d(t, "j", function () {
        return V;
      }),
      n.d(t, "w", function () {
        return H;
      }),
      n.d(t, "r", function () {
        return F;
      }),
      n.d(t, "p", function () {
        return $;
      }),
      n.d(t, "a", function () {
        return G;
      }),
      n.d(t, "q", function () {
        return W;
      });
    var r = n(108),
      i = n.n(r),
      o = n(9),
      s = n.n(o),
      c = n(353),
      a = n.n(c),
      u = n(53),
      l = n.n(u),
      d = n(174),
      p = n.n(d),
      f = n(136),
      b = n.n(f),
      h = n(213),
      g = n.n(h),
      m = n(354),
      v = n.n(m),
      y = n(32),
      O = n(4);
    const { assign: _ } = Object;
    function w(e) {
      const { lastParticipatingAdmin: t } = e;
      return !t || t.isBot;
    }
    const j = (e) => e.parts.filter((e) => e.author.isAdmin)[0],
      C = (e) => {
        var t;
        return Object(y.a)(
          (null === (t = e.parts) || void 0 === t
            ? void 0
            : t.filter((e) => e.author.isAdmin)) || []
        );
      },
      S = (e) => e.parts.reduce((e, t) => e + (t.author.isAdmin ? 1 : 0), 0),
      E = (e) => 1 === e.parts.length && "chat" === e.parts[0].messageType,
      I = (e) => e.parts.length > 1 && Object(y.a)(e.parts).author.isAdmin,
      A = (e) => e.author.isBot && "Operator" === e.author.firstName,
      P = (e, t) =>
        (!l()(e.id) && e.id === t.id) ||
        (!l()(e.clientId) && e.clientId === t.clientId),
      k = (e, t) => {
        if (s()(t)) return e.parts;
        const n = t.parts || [],
          r = a()([...e.parts, ...n], P);
        return i()(r, ["createdAt"], ["asc"]);
      },
      T = (e, t) => {
        if (!s()(t) && t.composerState) {
          if (
            t.composerState.version > e.composerState.version &&
            t.composerState.workflowActive === e.composerState.workflowActive
          )
            return t.composerState;
          t.composerState.version === e.composerState.version &&
            t.composerState.visible !== e.composerState.visible &&
            Object(O.b)(
              `Different composerState visibility with same version number for conversation with id=${e.id}`
            );
        }
        return e.composerState;
      },
      R = (e) => {
        if (e && e.parts && 0 !== e.parts.length)
          return `${e.id}-${Object(y.a)(e.parts).id}`;
      },
      M = (e) => "partial" === e.fetchState,
      x = (e) => {
        const t = C(e);
        return 1 === e.parts.length ? L(e) : _({}, t, { messageType: D(t) });
      },
      L = (e) => {
        const { lastParticipatingAdmin: t } = e,
          n = t ? t.lastActiveAt : void 0,
          r = t ? t.isActive : void 0;
        return _({}, e.parts[0], { lastActiveAt: n, isActive: r });
      },
      D = (e) => e.messageType || "adminReply",
      N = (e) =>
        !(
          !e.identifier.startsWith("custom_data.") &&
          !e.identifier.startsWith("company.custom_data.")
        ),
      U = (e, t) => {
        const n = e.attributes.find((e) => e.identifier === t);
        if (n)
          return "string" === n.type && Array.isArray(n.options)
            ? "list"
            : "email" === n.identifier
            ? "email"
            : "phone" === n.identifier
            ? "phone"
            : n.type;
      },
      z = (e) => {
        const t = g()(e.parts, (e) => e.body);
        return b()(t, (e) => "messengerCard" === e.type);
      },
      B = (e) => g()(z(e), (e) => p()(e, "type")),
      V = (e, t) => v()(z(e), { uri: t }),
      H = (e) => e.sort((e, t) => t.lastPartCreatedAt - e.lastPartCreatedAt),
      F = (e) =>
        ((e) =>
          e.composerState.visible &&
          !e.inboundConversationsDisabled &&
          !e.preventEndUserReplies)(e) &&
        !((e) => "attribute_collector" === e.parts[0].replyType)(e),
      $ = (e) =>
        e.parts &&
        Object(y.a)(e.parts) &&
        "pointer" === Object(y.a)(e.parts).messageType,
      G = (e, t, n) => {
        if (n < 1) return;
        const r = e.slice(-Math.abs(n)),
          i = t.slice(-Math.abs(n));
        return r.every((e) => i.some((t) => P(e, t)));
      },
      W = (e) => {
        try {
          var t;
          const n = JSON.parse(e);
          return (
            "replies_prevented" ===
            (null == n || null === (t = n.errors[0]) || void 0 === t
              ? void 0
              : t.code)
          );
        } catch (e) {
          return !1;
        }
      };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    }),
      n.d(t, "b", function () {
        return s;
      });
    var r = n(18);
    const i = (e) => ({
        get: (t) => {
          try {
            return e.getItem(`intercom.${t}`);
          } catch (e) {}
        },
        set: (t, n) => {
          try {
            return e.setItem(`intercom.${t}`, n || "");
          } catch (e) {}
        },
        remove: (t) => {
          try {
            return e.removeItem(`intercom.${t}`);
          } catch (e) {}
        },
        clear: () => {
          try {
            e.clear();
          } catch (e) {}
        },
      }),
      o = r.a.hasLocalStorageSupport()
        ? i(localStorage)
        : { get: () => {}, set: () => {}, remove: () => {}, clear: () => {} },
      s = r.a.hasSessionStorageSupport()
        ? i(sessionStorage)
        : { get: () => {}, set: () => {}, remove: () => {}, clear: () => {} };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return b;
    }),
      n.d(t, "g", function () {
        return h;
      }),
      n.d(t, "i", function () {
        return m;
      }),
      n.d(t, "f", function () {
        return v;
      }),
      n.d(t, "e", function () {
        return y;
      }),
      n.d(t, "h", function () {
        return O;
      }),
      n.d(t, "b", function () {
        return _;
      }),
      n.d(t, "a", function () {
        return w;
      }),
      n.d(t, "j", function () {
        return j;
      }),
      n.d(t, "d", function () {
        return C;
      });
    var r = n(9),
      i = n.n(r),
      o = n(2),
      s = n(23),
      c = n(75),
      a = n(52),
      u = n(145),
      l = n(58);
    function d(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function p(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? d(Object(n), !0).forEach(function (t) {
              f(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : d(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function f(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function b(e) {
      const t = e.split("/")[1];
      return s.e.find((e) => e.id === t) || s.b;
    }
    function h(e) {
      return e.startsWith(`/${s.f.id}/${l.b.checklists}/complete`);
    }
    const g = (e) => {
        var t;
        return null === (t = e.app) || void 0 === t ? void 0 : t.openConfig;
      },
      m = Object(o.createSelector)(
        g,
        (e) => !i()(null == e ? void 0 : e.layout)
      ),
      v = Object(o.createSelector)(g, (e) =>
        s.e.find((t) => t.id === e.openTo)
      ),
      y = Object(o.createSelector)(v, (e) => (e ? `/${e.id}` : "/")),
      O = Object(o.createSelector)(
        g,
        (e) => "compact" === (null == e ? void 0 : e.layout)
      ),
      _ = Object(o.createSelector)(c.a, b),
      w = Object(o.createSelector)(g, a.e, (e, t) => {
        if (null == e || !e.spaces) return [];
        let n = e.spaces
          .map((e) => {
            const t = s.e.find((t) => t.id === e.type);
            if (t) return p(p({}, t), {}, { title: e.label, badge: e.badge });
          })
          .filter((e) => void 0 !== e);
        return (
          (null == t ? void 0 : t.length) > 0 ||
            !!e.userHasReceivedChecklists ||
            (n = n.filter((e) => (null == e ? void 0 : e.id) !== s.f.id)),
          e.userHasLiveNewsfeed ||
            (n = n.filter((e) => (null == e ? void 0 : e.id) !== s.d.id)),
          n
        );
      }),
      j = Object(o.createSelector)(w, _, u.c, (e, t, n) =>
        e.reduce((e, r) => {
          var i, o;
          return (
            e.push(
              p(
                p({}, r),
                {},
                {
                  isActive: r.id === t.id,
                  activeNotificationCount:
                    null === (i = n[r.id]) || void 0 === i
                      ? void 0
                      : i.activeNotificationCount,
                  hasPassiveNotifications:
                    null === (o = n[r.id]) || void 0 === o
                      ? void 0
                      : o.hasPassiveNotifications,
                  ariaControlElementId: `spaces-${r.id}`,
                }
              )
            ),
            e
          );
        }, [])
      ),
      C =
        (Object(o.createSelector)(w, (e) =>
          e.reduce(
            (e, t) =>
              t.badge && "unread" === t.badge.badgeType ? e + t.badge.label : e,
            0
          )
        ),
        Object(o.createSelector)(w, (e) => e.some((e) => e.id === s.a.id)));
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return c;
    }),
      n.d(t, "d", function () {
        return p;
      }),
      n.d(t, "a", function () {
        return f;
      }),
      n.d(t, "e", function () {
        return b;
      }),
      n.d(t, "b", function () {
        return h;
      });
    var r = n(4),
      i = n(22),
      o = n(168);
    const s = [
        "ar",
        "bg",
        "bn",
        "bs",
        "ca",
        "cs",
        "da",
        "de",
        "de-form",
        "el",
        "en",
        "es",
        "et",
        "fa-IR",
        "fi",
        "fr",
        "he",
        "hr",
        "hu",
        "id",
        "it",
        "ja",
        "ko",
        "lt",
        "lv",
        "mn",
        "ms",
        "nb",
        "nl",
        "pl",
        "pt",
        "pt-BR",
        "ro",
        "ru",
        "sl",
        "sr",
        "sv",
        "th",
        "tr",
        "uk",
        "vi",
        "zh-CN",
        "zh-TW",
      ],
      c = ["ar", "he", "fa-IR"],
      a = { en: n(331) };
    let u = a,
      l = "en";
    const d = (e, t) => e && e.replace(/{([\s\S]+?)}/g, (e, n) => t[n]),
      p = async (e) => {
        if (-1 === s.indexOf(e)) return Object(i.b)(`Unsupported locale: ${e}`);
        if (!a[e]) {
          const t = await Object(o.a)({ promise: () => n(510)(`./${e}.json`) });
          a[e] = t;
        }
        l = e;
      },
      f = () => l,
      b = (e, t) => {
        const n = u[l];
        if (!n) return Object(r.b)(`Unknown locale '${l}'`), "";
        const i = n[e];
        if (!i) {
          Object(r.b)(`Unknown key '${e}' in locale '${l}'`);
          const n = u.en || {};
          return d(n[e], t) || "";
        }
        try {
          return d(i, t);
        } catch (t) {
          return (
            Object(r.b)(`Interpolation failed for key '${e}' in locale '${l}'`),
            ""
          );
        }
      },
      h = (e) => -1 !== c.indexOf(e);
  },
  function (e, t, n) {
    "use strict";
    var r = n(17),
      i = n(132),
      o = n(19),
      s = n(68),
      c = n(88),
      a = n(2),
      u = Object(a.createSelector)(
        (e) => Object(c.a)(e.conversations.byId),
        (e) => e.filter((e) => !e.read && e.dismissed)
      ),
      l = n(74),
      d = n(97),
      p = n(13),
      f = n(3),
      b = n(10),
      h = n(73),
      g = n(28),
      m = n(4);
    const v = "delivered",
      y = "renotifying";
    var O = n(0),
      _ = n(23);
    n.d(t, "e", function () {
      return j;
    }),
      n.d(t, "m", function () {
        return C;
      }),
      n.d(t, "h", function () {
        return S;
      }),
      n.d(t, "a", function () {
        return E;
      }),
      n.d(t, "l", function () {
        return I;
      }),
      n.d(t, "k", function () {
        return A;
      }),
      n.d(t, "i", function () {
        return T;
      }),
      n.d(t, "f", function () {
        return M;
      }),
      n.d(t, "g", function () {
        return x;
      }),
      n.d(t, "j", function () {
        return L;
      }),
      n.d(t, "c", function () {
        return N;
      }),
      n.d(t, "d", function () {
        return H;
      }),
      n.d(t, "n", function () {
        return F;
      });
    const { assign: w } = Object;
    function j() {
      return (e, t) => {
        const {
          launcherDiscoveryMode: { isLauncherDiscoveryModeOpening: n },
        } = t();
        n
          ? (e(Object(i.d)()),
            setTimeout(() => e(C()), 100),
            setTimeout(() => e(Object(i.a)()), 100))
          : e(C());
      };
    }
    function C() {
      return (e, t) => {
        const n = t(),
          {
            conversations: r,
            borderless: { conversationId: i },
          } = n,
          o = Object(p.i)(n),
          s = r.byId[i];
        i && !o
          ? (e(x(i)),
            (function (e) {
              return e && -1 !== [v, y].indexOf(e.notificationStatus);
            })(s) && e(Object(b.q)(f.c, i, ["opened"])))
          : e((e, t) => {
              const n = t(),
                {
                  app: { isMessengerOpen: r },
                } = n;
              e(
                r
                  ? E()
                  : (e) => {
                      e(z()), e(S()), e(Object(h.a)());
                    }
              );
            });
      };
    }
    function S(e = !1) {
      return { type: O.vc, hideLightweightAppMessenger: e };
    }
    function E(e = !1) {
      return { type: O.u, fromCloseButton: e };
    }
    function I(e = "", t = !1, n = null, r = null, i = !1) {
      return (s) => {
        s({
          type: O.Jd,
          defaultMessage: e,
          replaceCurrentView: t,
          articleUrl: n,
          fromArticleId: r,
          fromStandaloneArticle: i,
        });
        s(
          (t ? o.replace : o.push)(
            "/messages/conversation/new" + (r ? `?fromArticleID=${r}` : "")
          )
        );
      };
    }
    function A() {
      return { type: O.Fd };
    }
    function P() {
      return { type: O.Gd };
    }
    function k(e = !1) {
      return (t) => {
        t({ type: O.Id, replaceCurrentView: e });
        t((e ? o.replace : o.push)("/messages/conversation/trigger-screen"));
      };
    }
    function T() {
      return (e) => {
        e(k(!0)), e(S());
      };
    }
    function R() {
      return { type: O.Hd };
    }
    function M(e) {
      return (t) => {
        t(Object(g.c)(e)), t(S());
      };
    }
    function x(e) {
      return (t) => {
        t(Object(h.a)()), t(M(e)), t(Object(b.m)(f.c, e));
      };
    }
    function L(e) {
      return (t, n) => {
        n().app.inboundConversationsDisabled || t(I(e)), t(S());
      };
    }
    function D(e) {
      return (t) => {
        t(Object(g.c)(e)), t(Object(b.m)(f.c, e));
      };
    }
    function N(e) {
      return (t) => t(Object(b.m)(f.c, e)).then(() => t(M(e)));
    }
    function U(e, t) {
      const { app: n, user: r, message: i } = t,
        { features: c, inboundConversationsDisabled: a, viewStack: p } = n,
        { hasConversations: f, articleConversationId: b } = r,
        g = Object(l.b)(t),
        m = Object(d.m)(t),
        v = Object(s.a)(t),
        y = u(t),
        O = (function (e, t) {
          return (
            ("user" === e.role && t.inboundMessages) ||
            ("user" !== e.role && t.anonymousInboundMessages)
          );
        })(r, c),
        _ = (function (e) {
          return !!e.newsfeedId && e.unreadNewsItemsCount > 0;
        })(r);
      O
        ? g > 1
          ? (e(R()), B(r, "homescreen"))
          : i && i.conversationId
          ? (e(D(i.conversationId)),
            e(Object(h.a)()),
            B(r, "conversation-from-auto-message"))
          : 1 === v.length
          ? (e(D(v[0].id)), B(r, "conversation-from-notification"))
          : 1 === y.length
          ? (e(D(y[0].id)), B(r, "conversation-from-dismissed"))
          : b
          ? (e(D(b)), B(r, "conversation-from-article"))
          : _
          ? (e(
              (function (e) {
                return (t) => {
                  1 === e.unreadNewsItemsCount &&
                  e.lastUnreadNewsItemId &&
                  e.newsfeedLastVisit
                    ? t(
                        Object(o.push)(
                          `/news/details/${e.lastUnreadNewsItemId}`
                        )
                      )
                    : t(Object(o.push)("/news/feed")),
                    t(R());
                };
              })(r)
            ),
            B(r, "news-screen"))
          : p.length ||
            (m || f
              ? (e(R()), B(r, "homescreen"))
              : a
              ? m
                ? (e(R()), B(r, "homescreen"))
                : (e(P()), B(r, "empty-screen"))
              : (e(I()), B(r, "new-conversation")))
        : (e(P()), B(r, "empty-screen"));
    }
    function z() {
      return (e, t) => {
        const n = t();
        if (!n.app.isBooting)
          if (Object(p.i)(n)) {
            if (!n.router.location || "/" === n.router.location.pathname) {
              const t = Object(p.e)(n);
              e(Object(o.push)(t));
            }
          } else U(e, n);
      };
    }
    function B(e, t = "homescreen") {
      Object(m.h)(e, t, "initial-screen", "messenger", "from_launcher");
    }
    function V(e, t) {
      const n = t(),
        i = (function (e) {
          return w({}, e, { viewStack: e.viewStack.slice(0, -1) });
        })(n.app);
      Object(r.l)(n) && "messenger-trigger" === Object(r.e)(i)
        ? e(R())
        : Object(r.l)(n)
        ? e({ type: O.hc })
        : e(R());
    }
    function H() {
      return V;
    }
    function F() {
      return { type: O.Xd };
    }
    t.b = {
      closeMessenger: E,
      getAndOpenConversation: N,
      navigateBack: H,
      onLauncherClick: j,
      openConversation: M,
      openConversationInMessenger: x,
      openConversations: function () {
        return (e, t) => {
          e(Object(p.i)(t()) ? Object(o.push)(_.c.path) : A()), e(S());
        };
      },
      openMessenger: S,
      openNewConversation: L,
      showAndGetConversation: D,
      showConversation: g.c,
      showConversations: A,
      showEmptyScreen: P,
      showMessengerTriggerScreen: k,
      showInitialScreen: z,
      showNewConversation: I,
      toggleMessenger: C,
      toggleUpfrontEmailCollectorState: F,
      openMessengerLoadingView: T,
      updateResolutionBotStateFromOpen: function (e, t, n, r, i) {
        return {
          type: O.ne,
          accessToTeammateEnabled: e,
          selfServeSuggestionsMatch: t,
          activeAdmins: n,
          botTargetedConversations: r,
          botAdmin: i,
        };
      },
    };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return u;
    }),
      n.d(t, "c", function () {
        return l;
      }),
      n.d(t, "d", function () {
        return findAndValidateInputField;
      }),
      n.d(t, "e", function () {
        return p;
      }),
      n.d(t, "a", function () {
        return DelayedNodeVisibilityCheck;
      }),
      n.d(t, "f", function () {
        return f;
      });
    var r = n(239),
      i = n.n(r),
      o = n(30),
      s = n(29),
      c = n.n(s),
      a = n(12);
    function u(e) {
      const t = "tour_triggered_from_url",
        n = JSON.parse(a.b.get(t));
      if (n) {
        const r = n.indexOf(e.toString());
        -1 !== r && (n.splice(r, 1), a.b.set(t, JSON.stringify(n)));
      }
    }
    function l(e, t) {
      return (
        t.hostname === e.hostname &&
        t.pathname === e.pathname &&
        t.hash === e.hash
      );
    }
    const d = (e) => e.replace(/[\u200B-\u200D\uFEFF]/g, "");
    class findAndValidateInputField {
      constructor(e, t) {
        (this.elements = void 0),
          (this.callback = void 0),
          (this.destroyed = void 0),
          (this.validateInputs = () => {
            let e = !0;
            this.elements.forEach((t) => {
              "checkbox" !== t.type &&
                "radio" !== t.type &&
                this.elementHasEmptyValue(t) &&
                (e = !1);
            }),
              this.onChange(e);
          }),
          (this.callback = t),
          (this.destroyed = !1),
          (this.elements = []);
        const n = window.parent.document.querySelector(e);
        if (n) {
          const e = n.tagName.toLowerCase(),
            t =
              "input" === e ||
              "textarea" === e ||
              "select" === e ||
              n.isContentEditable;
          this.elements = t
            ? [n]
            : Array.from(
                n.querySelectorAll(
                  "input, textarea, select, div[contenteditable]"
                )
              );
        }
      }
      onChange(e) {
        this.destroyed || this.callback(e);
      }
      destroy() {
        (this.destroyed = !0), this.removeListeners();
      }
      elementHasEmptyValue(e) {
        return e instanceof HTMLSelectElement
          ? !d(e.options[e.selectedIndex].value)
          : e.isContentEditable
          ? !d(e.innerText || "")
          : !d(e.value);
      }
      addListeners() {
        this.elements.forEach((e) => {
          "select" === e.tagName.toLowerCase()
            ? e.addEventListener("change", this.validateInputs)
            : e.addEventListener("input", this.validateInputs);
        });
      }
      removeListeners() {
        this.elements.forEach((e) => {
          "select" === e.type
            ? e.removeEventListener("change", this.validateInputs)
            : e.removeEventListener("input", this.validateInputs);
        });
      }
      run() {
        if (!this.elements.length) return this.callback(!0);
        this.validateInputs(), this.addListeners();
      }
    }
    const p = c()("tours:debug");
    class DelayedNodeVisibilityCheck {
      constructor(e, t, n, r) {
        (this.selector = void 0),
          (this.timeoutValue = void 0),
          (this.callback = void 0),
          (this.timeout = void 0),
          (this.waitTimeout = void 0),
          (this.document = void 0),
          (this.observer = void 0),
          (this.selector = e),
          (this.timeoutValue = t),
          (this.document = window.parent.document),
          (this.callback = r),
          (this.observer = new MutationObserver(
            i()(this._check.bind(this), 200)
          )),
          (this.waitTimeout = setTimeout(() => {
            this._initObserver(), this._startTimer(), this._check();
          }, n || 0));
      }
      _initObserver() {
        this.document.body &&
          this.observer.observe(this.document.body, {
            attributes: !0,
            childList: !0,
            subtree: !0,
          });
      }
      _check() {
        const e = Object(o.i)(this.document, this.selector);
        Object(o.y)(e) ? (this.callback(!0), this.cancel()) : this.callback(!1);
      }
      _startTimer() {
        (this.timeoutValue || 0 === this.timeoutValue) &&
          (this.timeout = setTimeout(() => {
            this.callback(!1), this.cancel();
          }, this.timeoutValue));
      }
      cancel() {
        this.observer.disconnect(),
          this.timeout && clearTimeout(this.timeout),
          this.waitTimeout && clearTimeout(this.waitTimeout);
      }
    }
    const f = (e, t) => (e.length <= t ? e : `${e.slice(0, t)}...`);
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "k", function () {
      return u;
    }),
      n.d(t, "e", function () {
        return p;
      }),
      n.d(t, "j", function () {
        return f;
      }),
      n.d(t, "o", function () {
        return b;
      }),
      n.d(t, "a", function () {
        return h;
      }),
      n.d(t, "h", function () {
        return g;
      }),
      n.d(t, "g", function () {
        return m;
      }),
      n.d(t, "i", function () {
        return v;
      }),
      n.d(t, "l", function () {
        return y;
      }),
      n.d(t, "b", function () {
        return O;
      }),
      n.d(t, "s", function () {
        return _;
      }),
      n.d(t, "c", function () {
        return w;
      }),
      n.d(t, "p", function () {
        return j;
      }),
      n.d(t, "w", function () {
        return C;
      }),
      n.d(t, "r", function () {
        return S;
      }),
      n.d(t, "q", function () {
        return E;
      }),
      n.d(t, "n", function () {
        return I;
      }),
      n.d(t, "d", function () {
        return A;
      }),
      n.d(t, "v", function () {
        return P;
      }),
      n.d(t, "u", function () {
        return k;
      }),
      n.d(t, "m", function () {
        return T;
      }),
      n.d(t, "t", function () {
        return R;
      }),
      n.d(t, "f", function () {
        return M;
      });
    var r = n(2),
      i = n(42),
      o = n(11),
      s = n(32),
      c = n(62),
      a = n(176);
    const u = ({ app: e }) => e.features || {},
      l = ({ viewStack: e }) => e,
      d = Object(r.createSelector)(l, (e) => !!e && e.length > 1),
      p = Object(r.createSelector)(l, (e) =>
        e && e.length > 0 ? e[e.length - 1] : void 0
      ),
      f = ({
        app: {
          localizedExpectedResponseDelayShortText: e,
          localizedExpectedResponseDelayLongText: t,
          officeHoursResponse: n,
        },
      }) => ({
        localizedExpectedResponseDelayShortText: e,
        localizedExpectedResponseDelayLongText: t,
        officeHoursResponse: n,
      }),
      b = Object(r.createSelector)(l, (e) => !e || 0 === e.length),
      h = (e) => e.app.accessToTeammateEnabled,
      g = (e) => !!e.app.botTargetedConversations,
      m = (e) => e.app.botAdmin,
      v = ({ app: e }) => p(e),
      y = ({ app: e }) => d(e),
      O = Object(r.createSelector)(
        (e) => e.app,
        (e) => e.user,
        (e) => e.article,
        a.a,
        (e, t, n, r) => {
          if (n.articleId && !n.inSearchBrowse && n.isStandalone) return !1;
          if (e.inboundConversationsDisabled) return !1;
          const i = t.preventMultipleInboundConversation && r,
            o =
              "user" === t.role
                ? !e.features.inboundMessages
                : !e.features.anonymousInboundMessages;
          return !(i || o);
        }
      ),
      _ = (e) => {
        const { app: t } = e;
        return t.launcherLogoUrl;
      },
      w = Object(r.createSelector)(
        [O, (e) => e.app.helpCenterSiteUrl],
        (e, t) => !e && !!t
      ),
      j = (e, { currentView: t }) =>
        "home-screen" !== t && "empty-screen" !== t,
      C = (e) => {
        if (!e) return !1;
        const { officeHoursResponse: t } = e.app,
          n = { only_outside_of_office_hours: !!t, always: !0, never: !1 },
          { role: r, userSuppliedEmail: c } = e.user,
          {
            upfrontEmailCollectionSetting: a,
            upfrontEmailCollectionSubmitted: u,
          } = e.app.upfrontEmailCollection,
          l = e.session && e.session.email,
          d = Object(i.d)(e);
        return (
          (!d || !d.isEmailAttributeCollectorInserted) &&
          !c &&
          -1 !== ["visitor", "lead"].indexOf(r) &&
          !l &&
          !u &&
          !(function (e) {
            return !!e && Object(o.k)(e) && !Object(s.a)(e.parts).author.isBot;
          })(d) &&
          n[a]
        );
      };
    const S = (e) => e.app.isIntercomLinkEnabled,
      E = Object(r.createSelector)(S, c.c, (e, t) => e && !t),
      I = Object(r.createSelector)(
        c.g,
        v,
        (e, t) => !(!e || "new-conversation" !== t)
      ),
      A = (e) => e.app.color,
      P = (e) => e.user.searchRequiredBeforeConversation,
      k = Object(r.createSelector)(P, O, h, (e, t, n) => e && t && n),
      T = (e) => e.app.hideLightweightAppMessenger,
      R = (e) => {
        var t, n;
        return null === (t = e.router) ||
          void 0 === t ||
          null === (n = t.location) ||
          void 0 === n
          ? void 0
          : n.pathname;
      },
      M = (e) => e.app.isBooted;
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "d", function () {
      return s;
    }),
      n.d(t, "c", function () {
        return c;
      }),
      n.d(t, "k", function () {
        return a;
      }),
      n.d(t, "l", function () {
        return u;
      }),
      n.d(t, "f", function () {
        return l;
      }),
      n.d(t, "b", function () {
        return d;
      }),
      n.d(t, "g", function () {
        return p;
      }),
      n.d(t, "h", function () {
        return f;
      }),
      n.d(t, "i", function () {
        return b;
      }),
      n.d(t, "n", function () {
        return h;
      }),
      n.d(t, "m", function () {
        return g;
      }),
      n.d(t, "j", function () {
        return m;
      }),
      n.d(t, "e", function () {
        return v;
      });
    const r = /iphone|ipad|ipod|android|blackberry|opera mini|iemobile/i,
      i = [
        ".intercom-lightweight-app-launcher",
        ".intercom-launcher-frame",
        "#intercom-container",
        ".intercom-messenger",
        ".intercom-notifications",
      ];
    function o(e) {
      try {
        if (!(e in window)) return !1;
        const t = window[e];
        return (
          null !== t &&
          (t.setItem("intercom-test", "0"), t.removeItem("intercom-test"), !0)
        );
      } catch (e) {
        return !1;
      }
    }
    function s() {
      return o("localStorage");
    }
    function c() {
      return !!(
        window.FileReader &&
        window.File &&
        window.FileList &&
        window.FormData
      );
    }
    function a() {
      const e = d().userAgent;
      return !!e && null !== e.match(r) && void 0 !== window.parent;
    }
    function u() {
      const e = d().vendor || "",
        t = d().userAgent || "";
      return 0 === e.indexOf("Apple") && /\sSafari\//.test(t);
    }
    function l(e = window) {
      const t = d(),
        n = "Google Inc." === t.vendor && !e.chrome;
      return "" === t.languages && (t.webdriver || n);
    }
    function d() {
      return navigator || {};
    }
    function p(e = d().userAgent) {
      return /iPad|iPhone|iPod/.test(e) && !window.MSStream;
    }
    function f() {
      var e;
      return (
        (null ===
          (e = (function () {
            if (p()) {
              const e = d().appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
              return {
                major: parseInt(e[1], 10),
                minor: parseInt(e[2], 10),
                patch: parseInt(e[3] || 0, 10),
              };
            }
            return null;
          })()) || void 0 === e
          ? void 0
          : e.major) >= 15
      );
    }
    function b() {
      const e = d().userAgent,
        t = p(e),
        n = !!e.match(/WebKit/i);
      return t && n && !e.match(/CriOS/i) && f();
    }
    function h() {
      return i.some((e) => {
        const t = window.parent.document.querySelector(e);
        if (t) {
          const e = window.getComputedStyle(t);
          return null === e || "none" === e.display;
        }
      });
    }
    const g = () => "ontouchstart" in window || navigator.maxTouchPoints > 0,
      m = () => window.navigator.appVersion.indexOf("Mac") >= 0,
      v = () => "ResizeObserver" in window;
    t.a = {
      hasXhr2Support: function () {
        return (
          "XMLHttpRequest" in window &&
          "withCredentials" in new XMLHttpRequest()
        );
      },
      hasLocalStorageSupport: s,
      hasSessionStorageSupport: function () {
        return o("sessionStorage");
      },
      hasFileSupport: c,
      hasAudioSupport: function () {
        const e = document.createElement("audio");
        return (
          !!e.canPlayType && !!e.canPlayType("audio/mpeg;").replace(/^no$/, "")
        );
      },
      hasVisibilitySupport: function () {
        return (
          void 0 !== document.hidden ||
          void 0 !== document.mozHidden ||
          void 0 !== document.msHidden ||
          void 0 !== document.webkitHidden
        );
      },
      messengerIsVisible: function () {
        return i.some((e) => {
          const t = window.parent.document.querySelector(e);
          if (t) {
            const e = t.getBoundingClientRect();
            return e && e.width > 0 && e.height > 0;
          }
        });
      },
      messengerHasDisplayNoneSet: h,
      isMobileBrowser: a,
      isIOSFirefox: function () {
        return !!d().userAgent.match("FxiOS");
      },
      isFirefox: function () {
        return !!d().userAgent.match("Firefox");
      },
      isSafari: u,
      isElectron: function () {
        const e = d().userAgent || "",
          t = window.parent || {},
          n = t.process && t.versions && t.versions.electron;
        return /\sElectron\//.test(e) || n;
      },
      isIE: function () {
        const e = d().userAgent || "";
        return e.indexOf("MSIE") > 0 || e.indexOf("Trident") > 0;
      },
      isEdge: function () {
        return (d().userAgent || "").indexOf("Edge") > 0;
      },
      isNativeMobile: function () {
        return d().isNativeMobile;
      },
      isChrome: function () {
        const e = window.chrome,
          t = d().vendor,
          n = d().userAgent.indexOf("OPR") > -1,
          r = d().userAgent.indexOf("Edge") > -1;
        return (
          !!d().userAgent.match("CriOS") ||
          (null != e && "Google Inc." === t && !1 === n && !1 === r)
        );
      },
      isIOS: p,
      isIOS15: f,
      isIOS15Safari: b,
      isAndroid: function (e = d().userAgent) {
        return e && e.toLowerCase().indexOf("android") > -1;
      },
      isMacOS: m,
    };
  },
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return s;
    }),
      n.d(t, "f", function () {
        return c;
      }),
      n.d(t, "d", function () {
        return a;
      }),
      n.d(t, "i", function () {
        return u;
      }),
      n.d(t, "h", function () {
        return l;
      }),
      n.d(t, "c", function () {
        return d;
      }),
      n.d(t, "g", function () {
        return p;
      }),
      n.d(t, "e", function () {
        return f;
      }),
      n.d(t, "a", function () {
        return b;
      });
    var r = n(29),
      i = n.n(r),
      o = n(58);
    const s = i()("checklists:debug"),
      c = (e) =>
        e.reduce((e, t) => {
          const n = new Date(e.publishedAt);
          return new Date(t.publishedAt) < n ? t : e;
        }),
      a = (e) => (e.length ? e.find((e) => !e.isComplete) : void 0),
      u = (e) => {
        const t = new Date();
        t.setDate(t.getDate() - o.c);
        return e.map((e) => e.latestInteractionAt).some((e) => !e || e > t);
      },
      l = (e) => {
        const t = [];
        return e && e.taskGroups.map((e) => t.push(...e.tasks)), t;
      },
      d = (e) => e.filter((e) => !0 === e.isComplete),
      p = (e) => e.filter((e) => !e.isComplete),
      f = (e) => e.sort((e, t) => e.order - t.order)[0],
      b = (e) => {
        const t = l(e),
          n = d(t);
        return t.length - n.length == 0;
      };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return f;
    }),
      n.d(t, "f", function () {
        return b;
      }),
      n.d(t, "g", function () {
        return h;
      }),
      n.d(t, "e", function () {
        return g;
      }),
      n.d(t, "i", function () {
        return m;
      }),
      n.d(t, "d", function () {
        return v;
      }),
      n.d(t, "a", function () {
        return y;
      }),
      n.d(t, "b", function () {
        return O;
      }),
      n.d(t, "h", function () {
        return _;
      });
    var r = n(9),
      i = n.n(r),
      o = n(232),
      s = n(118),
      c = n(233),
      a = n(40),
      u = n(29),
      l = n.n(u),
      d = n(67),
      p = n.n(d);
    const f = ({ backgroundColor: e, buttonColor: t }) => {
        const n = p()({ primaryColor: t, secondaryColor: e, darkenAmount: 20 }),
          r = "#D22628",
          i = "#FFFFFF";
        return {
          backgroundColor: e,
          buttonColor: t,
          backgroundTextColor: n.secondary_on_white_contrast > 1.6 ? i : "#222",
          buttonTextColor: n.primary_on_white_contrast > 1.6 ? i : "#222",
          isBackgroundColorLight: "light" === n.secondary_type,
          isButtonColorLight: "light" === n.primary_type,
          buttonColorHover: n.button_background_color_hover,
          buttonColorActive: n.button_background_color_active,
          bannerErrorText: Object(s.b)(r, e) > 3 ? r : i,
          progressBarBackground: Object(s.a)(t, 0.25),
          progressBarOverlay:
            "light" === n.primary_type ? Object(s.a)("#222", 0.2) : "#00000000",
          grayBackgroundTextColor: "#222",
          grayBackground: "#F1F1F1",
          grayBackgroundActive: "#D7D7D7",
          grayBackgroundHover: "#BEBEBE",
        };
      },
      b =
        (e) =>
        ({ theme: t }) => {
          if (t) return t.surveyColorPalette[e];
        },
      h = l()("surveys:debug"),
      g = (e) => null != e && -1 !== Object.values(a.f).indexOf(e),
      m = (e, t) => {
        var n;
        let r = null;
        const { required: s } = t;
        if (s && i()(e)) r = a.f.required;
        else if (
          e &&
          t.validation &&
          null != t &&
          null !== (n = t.validation) &&
          void 0 !== n &&
          n.type
        ) {
          const n = t.validation.type,
            i = ((e, t) => {
              switch (t) {
                case a.f.email:
                  return Object(o.a)(e);
                case a.f.number:
                  return !isNaN(e);
                case a.f.phone:
                  return Object(c.d)(e);
                default:
                  return null;
              }
            })(e, n);
          i || (r = n);
        }
        return { failedValidation: g(r), validationError: r };
      },
      v = (e, t) => {
        if (!e) return [];
        return e.reduce((e, n, r) => {
          const i = Math.floor(r / t);
          return e[i] || (e[i] = []), e[i].push(n), e;
        }, []);
      },
      y = {
        container: { default: "660px", withSender: "716px" },
        wrapper: { default: "484px", withSender: "540px" },
      },
      O = { large: "661px", medium: "556px", small: "477px" },
      _ = (e, t) => (e.length <= t ? e : `${e.slice(0, t)}...`);
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      console && console.warn(e);
    }
    function i(e) {
      console && console.error(e);
    }
    n.d(t, "b", function () {
      return r;
    }),
      n.d(t, "a", function () {
        return i;
      });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return f;
    }),
      n.d(t, "c", function () {
        return b;
      }),
      n.d(t, "a", function () {
        return h;
      }),
      n.d(t, "d", function () {
        return g;
      }),
      n.d(t, "f", function () {
        return m;
      }),
      n.d(t, "g", function () {
        return v;
      }),
      n.d(t, "e", function () {
        return y;
      });
    var r = n(50),
      i = n(76),
      o = n(51),
      s = n(64),
      c = n(146),
      a = n(178),
      u = n(179);
    function l(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function d(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function p(e) {
      return (function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                d(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      })({ path: `/${e.id}`, getContent() {} }, e);
    }
    const f = p({
        id: "home",
        iconComponent: { active: r.HomeActive, default: r.Home },
        getContent: i.b,
      }),
      b = p({
        id: "messages",
        iconComponent: { active: r.MessagesActive, default: r.Messages },
        getContent: o.e,
      }),
      h = p({
        id: "help",
        iconComponent: { active: r.HelpActive, default: r.Help },
        getContent: s.d,
      }),
      g = p({
        id: "news",
        iconComponent: { active: r.NewsActive, default: r.News },
        getContent: c.a,
      }),
      m = p({
        id: "tasks",
        iconComponent: { active: r.TaskActive, default: r.Task },
        getContent: a.b,
      }),
      v = p({
        id: "tickets",
        iconComponent: { active: r.TicketsActive, default: r.Tickets },
        getContent: u.b,
      }),
      y = [f, b, h, g, m, v];
  },
  function (e, t, n) {
    "use strict";
    let r, i;
    n.d(t, "b", function () {
      return r;
    }),
      n.d(t, "a", function () {
        return i;
      }),
      (function (e) {
        (e.submitted = "submitted"),
          (e.inProgress = "in_progress"),
          (e.waiting = "waiting_on_customer"),
          (e.resolved = "resolved");
      })(r || (r = {})),
      (function (e) {
        (e.notStarted = "not_started"),
          (e.inProgress = "in_progress"),
          (e.success = "success"),
          (e.failure = "failure");
      })(i || (i = {}));
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "z", function () {
      return r;
    }),
      n.d(t, "A", function () {
        return i;
      }),
      n.d(t, "j", function () {
        return o;
      }),
      n.d(t, "n", function () {
        return s;
      }),
      n.d(t, "o", function () {
        return c;
      }),
      n.d(t, "p", function () {
        return a;
      }),
      n.d(t, "k", function () {
        return u;
      }),
      n.d(t, "l", function () {
        return l;
      }),
      n.d(t, "m", function () {
        return d;
      }),
      n.d(t, "t", function () {
        return p;
      }),
      n.d(t, "x", function () {
        return f;
      }),
      n.d(t, "v", function () {
        return b;
      }),
      n.d(t, "w", function () {
        return h;
      }),
      n.d(t, "i", function () {
        return g;
      }),
      n.d(t, "u", function () {
        return m;
      }),
      n.d(t, "q", function () {
        return v;
      }),
      n.d(t, "y", function () {
        return y;
      }),
      n.d(t, "r", function () {
        return O;
      }),
      n.d(t, "s", function () {
        return _;
      }),
      n.d(t, "D", function () {
        return w;
      }),
      n.d(t, "F", function () {
        return j;
      }),
      n.d(t, "G", function () {
        return C;
      }),
      n.d(t, "E", function () {
        return S;
      }),
      n.d(t, "C", function () {
        return E;
      }),
      n.d(t, "B", function () {
        return I;
      }),
      n.d(t, "f", function () {
        return A;
      }),
      n.d(t, "e", function () {
        return P;
      }),
      n.d(t, "g", function () {
        return k;
      }),
      n.d(t, "h", function () {
        return T;
      }),
      n.d(t, "a", function () {
        return R;
      }),
      n.d(t, "b", function () {
        return M;
      }),
      n.d(t, "c", function () {
        return x;
      }),
      n.d(t, "d", function () {
        return L;
      });
    const r = "search_browse_card",
      i = "search_browse_card_input",
      o = "article",
      s = "chrome",
      c = "collection",
      a = "help_card_suggestion",
      u = "article_suggestion",
      l = "article_suggestions",
      d = "article_suggestions_section",
      p = "input",
      f = "reaction",
      b = "newsfeed",
      h = "news_item",
      g = "answer",
      m = "news",
      v = "help_center",
      y = "recent_conversation_card",
      O = "help_center_card",
      _ = "help_center_card_with_answers",
      w = "search_browse",
      j = "search_browse",
      C = "search_browse_card",
      S = "messenger",
      E = "home",
      I = "help",
      A = "messenger",
      P = "home_screen",
      k = "search_browse",
      T = "search_browse_article",
      R = "newsfeed",
      M = "help_center",
      x = "help_center_suggestions",
      L = "home";
  },
  ,
  function (e, t, n) {
    "use strict";
    function r(e) {
      if (null != e) return new Date(1e3 * e);
    }
    function i(e) {
      return Date.now() - 1e3 * e;
    }
    n.d(t, "c", function () {
      return r;
    }),
      n.d(t, "a", function () {
        return i;
      }),
      (t.b = {
        timestampToDate: r,
        now: function () {
          return (function () {
            const e = Date.now;
            return "function" == typeof e && !("prototype" in e);
          })()
            ? Date.now()
            : new Date().getTime();
        },
        calculateDurationInMs: i,
      });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return d;
    }),
      n.d(t, "c", function () {
        return p;
      }),
      n.d(t, "b", function () {
        return f;
      });
    var r = n(0),
      i = n(19),
      o = n(58),
      s = n(75),
      c = n(140),
      a = n(23),
      u = n(31),
      l = n(20);
    const d = (e, t = !1, n = null, r = !1) =>
      (t ? i.replace : i.push)(
        "/messages/conversation/" +
          e +
          `?fromStandaloneArticle=${r}` +
          (n ? `&fromArticleID=${n}` : "")
      );
    function p(e, t = !1) {
      return (n, o) => {
        var u, l, p;
        const f = o(),
          b = Object(s.a)(f),
          h = Object(c.matchPath)(`/${a.c.id}/conversation/:conversationId`, b);
        n(
          ((e, t = !1) => {
            const n = { type: r.Ed, conversationId: e };
            return t && (n.replaceCurrentView = t), n;
          })(e, t)
        );
        const g =
            (null === (u = f.router) ||
            void 0 === u ||
            null === (l = u.previousLocations) ||
            void 0 === l
              ? void 0
              : l.length) || 0,
          m = (!t && 0 === g) || (t && g <= 1);
        if (m) {
          n((t ? i.replace : i.push)("/messages"));
        }
        e.toString() !==
          (null == h || null === (p = h.params) || void 0 === p
            ? void 0
            : p.conversationId) && n(d(e, t && !m));
      };
    }
    const f =
      (e, t = !1) =>
      (n) => {
        Object(l.b)(`Showing checklist progress: ${e}`);
        const r = t ? i.replace : i.push;
        return (
          n(Object(u.i)(e)),
          n(r(`/tasks/${o.b.checklistDetails(e.toString())}`))
        );
      };
  },
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    }),
      n.d(t, "p", function () {
        return s;
      }),
      n.d(t, "q", function () {
        return c;
      }),
      n.d(t, "G", function () {
        return a;
      }),
      n.d(t, "i", function () {
        return u;
      }),
      n.d(t, "w", function () {
        return l;
      }),
      n.d(t, "f", function () {
        return d;
      }),
      n.d(t, "v", function () {
        return p;
      }),
      n.d(t, "E", function () {
        return f;
      }),
      n.d(t, "e", function () {
        return b;
      }),
      n.d(t, "F", function () {
        return h;
      }),
      n.d(t, "b", function () {
        return g;
      }),
      n.d(t, "B", function () {
        return m;
      }),
      n.d(t, "c", function () {
        return v;
      }),
      n.d(t, "C", function () {
        return y;
      }),
      n.d(t, "d", function () {
        return O;
      }),
      n.d(t, "n", function () {
        return _;
      }),
      n.d(t, "s", function () {
        return w;
      }),
      n.d(t, "k", function () {
        return j;
      }),
      n.d(t, "g", function () {
        return C;
      }),
      n.d(t, "u", function () {
        return S;
      }),
      n.d(t, "r", function () {
        return E;
      }),
      n.d(t, "A", function () {
        return I;
      }),
      n.d(t, "z", function () {
        return A;
      }),
      n.d(t, "x", function () {
        return P;
      }),
      n.d(t, "y", function () {
        return k;
      }),
      n.d(t, "t", function () {
        return T;
      }),
      n.d(t, "m", function () {
        return R;
      }),
      n.d(t, "o", function () {
        return M;
      }),
      n.d(t, "j", function () {
        return x;
      }),
      n.d(t, "h", function () {
        return L;
      }),
      n.d(t, "D", function () {
        return D;
      }),
      n.d(t, "l", function () {
        return N;
      });
    var r = n(14),
      i = n(18);
    const o = {
        TAB: 9,
        ENTER: 13,
        ESC: 27,
        SPACE: 32,
        BACKSPACE: 8,
        DELETE: 46,
      },
      s = (e) => e.scrollHeight - e.clientHeight - e.scrollTop,
      c = (e) => e.scrollTop / (e.scrollHeight - e.clientHeight),
      a = (e, t = 0) => {
        e && (e.scrollTop = t);
      },
      u = (e, t) => {
        let n = e;
        return t.split(" > :shadow-root > ").reduce((e, t) => {
          const r = n.querySelector(t);
          return (n = null == r ? void 0 : r.shadowRoot), r;
        }, void 0);
      },
      l = (e, t = 0) => {
        const { scrollTop: n, scrollHeight: r, clientHeight: i } = e;
        return r - n - i < t + 1;
      },
      d = (e) => {
        if (!e) return 0;
        const { scrollTop: t, scrollHeight: n, clientHeight: r } = e;
        return n - r - t;
      },
      p = (e) => {
        const { scrollHeight: t, clientHeight: n } = e;
        return t > n;
      },
      f = (e) => {
        const { scrollHeight: t, clientHeight: n } = e;
        e.scrollTop = t - n;
      },
      b = (e) => {
        const { scrollHeight: t, clientHeight: n } = e;
        if (!e.scrollBy) return f(e);
        e.scrollBy({ top: t - n, left: 0, behavior: "smooth" });
      },
      h = (e, t) => {
        const { bottom: n, top: r, height: i } = e.getBoundingClientRect(),
          { bottom: o, top: s, height: c } = t.getBoundingClientRect();
        if (!(r < s) && !(n > o)) return;
        let a = e.offsetTop;
        for (; e; ) {
          const { position: t } = window.getComputedStyle(e);
          "relative" === t && (a += e.offsetTop - e.scrollTop + e.clientTop),
            (e = e.offsetParent);
        }
        t.scrollTop = a - Math.trunc(c / 2) + Math.trunc(i / 2);
      },
      g = (e, t) => {
        const n = e.className.split(" ");
        n.some((e) => e === t) ||
          (n.push(t), (e.className = n.join(" ").trim()));
      },
      m = (e, t) => {
        e.className = e.className
          .split(" ")
          .filter((e) => e !== t)
          .join(" ");
      },
      v = (e, t, n, r = !1) => {
        null != e &&
          (e.addEventListener
            ? e.addEventListener(t, n, r)
            : e.attachEvent && e.attachEvent(`on${t}`, n));
      },
      y = (e, t, n) => {
        null != e &&
          (e.removeEventListener
            ? e.removeEventListener(t, n)
            : e.detachEvent && e.detachEvent(`on${t}`, n));
      },
      O = (e) => {
        const t = e.currentTarget,
          { scrollTop: n, scrollHeight: r, clientHeight: i } = t,
          { deltaY: o } = e,
          s = o > 0;
        s && o > r - i - n
          ? (t.scrollTop = r)
          : !s && -o > n
          ? (t.scrollTop = 0)
          : e.stopPropagation();
      },
      _ = (e) => {
        if (e && "selectionEnd" in e) return e.selectionEnd;
      },
      w = (e, t, n) => e.slice(0, n) + t + e.slice(n),
      j = (e, t = -1) => {
        e &&
          (e.focus(),
          "setSelectionRange" in e && t >= 0 && e.setSelectionRange(t, t));
      };
    function C(e, t, n) {
      const r = e.document || e.ownerDocument;
      return (e) => {
        const i = [];
        Array.from(r.querySelectorAll(t)).forEach((e) => i.push(e));
        let { target: o } = e;
        for (; o && o !== this; ) {
          if (i.indexOf(o) > -1) {
            n.call(o, e);
            break;
          }
          o = o.parentNode;
        }
      };
    }
    const S = (e) =>
        void 0 !== e.hidden
          ? !e.hidden
          : void 0 !== e.mozHidden
          ? !e.mozHidden
          : void 0 !== e.msHidden
          ? !e.msHidden
          : void 0 === e.webkitHidden || !e.webkitHidden,
      E = () => {
        let e;
        return (
          void 0 !== document.hidden
            ? (e = "visibilitychange")
            : void 0 !== document.mozHidden
            ? (e = "mozvisibilitychange")
            : void 0 !== document.msHidden
            ? (e = "msvisibilitychange")
            : void 0 !== document.webkitHidden &&
              (e = "webkitvisibilitychange"),
          e
        );
      },
      I = (e, t = {}) => {
        const n = document.createElement("form");
        n.setAttribute("target", "_blank"),
          n.setAttribute("method", "post"),
          n.setAttribute("action", e),
          Object.keys(t).forEach((e) => {
            const r = document.createElement("input");
            (r.type = "hidden"),
              (r.name = e),
              (r.value = t[e]),
              n.appendChild(r);
          }),
          document.body.appendChild(n),
          n.submit(),
          document.body.removeChild(n);
      },
      A = (e) => (t) =>
        (t.keyCode === o.ENTER || t.keyCode === o.SPACE) && e(t),
      P = (e) =>
        e.keyCode === o.TAB &&
        !(-1 !== ["INPUT", "TEXTAREA", "BUTTON"].indexOf(e.target.tagName)),
      k = (e) => {
        if (e)
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
      },
      T = (e) => e.keyCode === o.ESC,
      R = (e) =>
        Array.from(
          e.querySelectorAll(
            'button, [href], input:not([type="file"]):not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((e) => !e.closest('[aria-hidden="true"]')),
      M = (e) => (Object(r.b)(e) ? "rtl" : "ltr"),
      x = (e, t, n) => {
        const r = e.document.getElementById(t);
        return r || L(e, t, n);
      },
      L = (e, t, n) => {
        const { document: r } = e,
          i = r.createElement("div");
        return (i.id = t), n && i.classList.add(n), r.body.appendChild(i), i;
      },
      D = (e) => {
        var t;
        null == e ||
          null === (t = e.parentNode) ||
          void 0 === t ||
          t.removeChild(e);
      },
      N = (e, t = 500) => {
        if (!i.g)
          return setTimeout(() => {
            e.focus();
          }, t);
        const n = document.createElement("input");
        return (
          n.setAttribute("type", "text"),
          (n.style.position = "absolute"),
          (n.style.opacity = 0),
          (n.style.height = 0),
          (n.style.fontSize = "16px"),
          document.body.prepend(n),
          n.focus({ preventScroll: !0 }),
          setTimeout(() => {
            e.focus(), n.remove();
          }, t)
        );
      };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "d", function () {
      return w;
    }),
      n.d(t, "k", function () {
        return j;
      }),
      n.d(t, "i", function () {
        return E;
      }),
      n.d(t, "c", function () {
        return I;
      }),
      n.d(t, "a", function () {
        return A;
      }),
      n.d(t, "n", function () {
        return P;
      }),
      n.d(t, "m", function () {
        return k;
      }),
      n.d(t, "l", function () {
        return T;
      }),
      n.d(t, "g", function () {
        return R;
      }),
      n.d(t, "q", function () {
        return M;
      }),
      n.d(t, "j", function () {
        return x;
      }),
      n.d(t, "o", function () {
        return L;
      }),
      n.d(t, "p", function () {
        return D;
      }),
      n.d(t, "f", function () {
        return U;
      }),
      n.d(t, "e", function () {
        return z;
      }),
      n.d(t, "b", function () {
        return B;
      }),
      n.d(t, "h", function () {
        return H;
      });
    var r = n(9),
      i = n.n(r),
      o = n(0),
      s = n(52),
      c = n(3),
      a = n(20),
      u = n(28),
      l = n(15),
      d = n(41),
      p = n(19),
      f = n(58),
      b = n(92),
      h = n(12),
      g = n(346),
      m = n(75);
    const v = (e, t) => Boolean(Object(s.d)(e)(t()));
    let y, O;
    const _ = (e) => ({ type: o.Kc, checklists: e }),
      w = (e) => ({ type: o.eb, checklistProgressId: e }),
      j =
        (e, t = !0) =>
        (n) => {
          n(_(e)), t && n(N());
        },
      C = (e, t, n) => ({
        type: o.ad,
        checklistProgressId: t,
        checklistId: e,
        taskId: n,
      }),
      S = (e) => ({ type: o.ab }),
      E = (e) => ({ type: o.rc, checklistProgressId: e }),
      I = () => ({ type: o.q }),
      A = (e, t, n) => (r, i) => {
        if (!v(t, i)) return;
        const { article: s, tour: c, checklists: d } = i();
        if (((e) => Boolean(Object(g.a)()(e())))(i))
          return (
            Object(a.b)(
              `Task already resolving. Resolving taskId ${n} in the background. checklistId: ${e}. checklistProgressId: ${t}`
            ),
            void r(C(e, t, n))
          );
        if (
          (null != s && s.activeArticleId) ||
          (null != c && c.activeTour) ||
          (null != c && c.isFetching)
        ) {
          Object(a.b)(
            `Article/tour open. Attempting to queue resolve of task ${n}`
          );
          const e = d.find((e) => e.queuedTaskId);
          return (
            e &&
              e.queuedTaskId &&
              (Object(a.b)(
                `Task already enqueued, marking queued task ${e.queuedTaskId} as resolved. progress: ${e.checklistProgressId}`
              ),
              r(C(e.id, e.checklistProgressId, e.queuedTaskId)),
              Object(a.b)(
                `Dequeueing task: ${e.queuedTaskId} progress: ${e.checklistProgressId}`
              ),
              r(S(e.checklistProgressId))),
            Object(a.b)(`Queueing resolve of task ${n} | progress: ${t}`),
            void r(
              ((e, t) => ({ type: o.Dc, checklistProgressId: e, taskId: t }))(
                t,
                n
              )
            )
          );
        }
        r(Object(l.h)()),
          r(Object(u.b)(t)),
          r(((e) => ({ type: o.cd, taskId: e }))(n)),
          y && clearTimeout(y),
          O && clearTimeout(O),
          (y = setTimeout(() => {
            r(C(e, t, n)),
              (O = setTimeout(() => {
                r({ type: o.bd });
              }, 800));
          }, 1200));
      },
      P = (e, t) => (n, r) => {
        const { session: i } = r();
        c.c.recordViewedStat(i, e, t);
      },
      k = (e, t, n) => (r, i) => {
        if (!e || !t || !n) return;
        const { session: o } = i();
        c.c.recordTaskView(o, e, t, n);
      },
      T = (e, t, n) => (r, i) => {
        if (!e || !t || !n) return;
        const { session: o } = i();
        c.c.recordActionClick(o, e, t, n);
      },
      R = (e, t, n) => async (r, i) => {
        const o = v(t, i),
          { session: s } = i();
        if (o) {
          r(C(e, t, n));
          try {
            await c.c.completeChecklistTask({
              checklistId: e,
              checklistProgressId: t,
              taskId: n,
              session: s,
            });
          } catch (t) {
            Object(a.b)(
              `Checklist task with id ${n} for checklist id ${e} could not be processed`
            );
          }
        }
      },
      M = (e, t) => async (n, r) => {
        const i = v(t, r),
          { session: s } = r();
        if (i) {
          n(((e) => ({ type: o.de, checklistProgressId: e }))(t));
          try {
            await c.c.updateChecklistNotificationDetails(s, e, t);
          } catch (n) {
            Object(a.b)(
              `Checklist notification details could not be updated for ${e} with progress ${t}`
            );
          }
        }
      },
      x = (e, t) => async (n, r) => {
        const i = v(t, r),
          { session: o } = r();
        if (i) {
          n(w(t));
          try {
            await c.c.dismissChecklistNotification(o, e, t);
          } catch (n) {
            Object(a.b)(
              `Checklist ${e} with progress ${t} could not be dismissed`
            );
          }
        }
      },
      L = () => async (e, t) => {
        var n;
        const { session: r, checklists: o, article: s, tour: u } = t();
        if (i()(o)) return;
        if (
          (null != s && s.activeArticleId) ||
          (null != u && u.activeTour) ||
          ((l =
            null == u || null === (n = u.activeTour) || void 0 === n
              ? void 0
              : n.id) &&
            (
              Object(d.a)(
                null === (p = window) ||
                  void 0 === p ||
                  null === (f = p.parent) ||
                  void 0 === f
                  ? void 0
                  : f.location
              ) || {}
            ).product_tour_id === l)
        )
          return;
        var l, p, f;
        const b = o.find((e) => e.queuedTaskId);
        b &&
          b.queuedTaskId &&
          (e(A(b.id, b.checklistProgressId, b.queuedTaskId)),
          e(S(b.checklistProgressId)));
        const h = o.map((e) => e.checklistProgressId);
        try {
          await c.c.resolveChecklists({ checklistProgressIds: h, session: r });
        } catch (e) {
          Object(a.b)("Checklists could not be resolved");
        }
      },
      D = () => (e, t) => {
        const n = JSON.parse(h.a.get("lastChecklistsBackgroundResolve")),
          r = new Date().getTime();
        n && n > r - f.a
          ? Object(a.b)(
              "Checklists have already been resolved in the background in the last 24 hours. Returning early."
            )
          : (Object(a.b)(
              "Checklists have not been resolved in the background in the last 24 hours. Checking again."
            ),
            e(L()),
            h.a.set("lastChecklistsBackgroundResolve", r));
      },
      N = () => (e, t) => {
        const n = Object(s.i)()(t());
        if (!n) return;
        const r = n.checklistProgressId,
          i = Object(m.a)(t()).endsWith(
            `/tasks/${f.b.checklistDetails(r.toString())}`
          );
        i
          ? Object(a.b)(
              `Already viewing progress ${r}, replacing current stack entry`
            )
          : Object(a.b)(`Opening unseen checklist progress ${r}`),
          e(Object(l.h)()),
          e(Object(u.b)(r, i));
      },
      U = () => async (e, t) => {
        const { session: n } = t();
        try {
          const { checklists: t } = await c.c.loadChecklists(n);
          if (i()(t)) return;
          e(j(c.c.buildChecklists(t), !1));
        } catch (e) {
          Object(a.b)("Checklists could not be loaded");
        }
      },
      z =
        (e, t, n = !1) =>
        async (r, i) => {
          Object(a.b)(`Will attempt to fetch checklist ruleset with id ${e}`);
          const { session: o } = i(),
            s = await c.c.fetchChecklist({
              session: o,
              rulesetId: e,
              triggerMethod: t,
            });
          if (!s) return;
          const d = [];
          n && r(U());
          const { checklists: p } = i();
          p && d.concat(p),
            -1 === d.indexOf(s) && d.push(s),
            r(_(d)),
            r(Object(l.h)()),
            r(Object(u.b)(s.checklistProgressId));
        },
      B = () => async (e, t) => {
        var n, r;
        Object(a.b)("Checking for checklist ID in URL");
        const i = V(
          null === (n = window) ||
            void 0 === n ||
            null === (r = n.parent) ||
            void 0 === r
            ? void 0
            : r.location
        );
        i
          ? (Object(a.b)(`Checklist ruleset id ${i} attached in the url`),
            e(z(i, b.a.shareable_url)))
          : Object(a.b)("No attached checklist found in the URL");
      },
      V = (e) => {
        if (!e) return;
        let t = Object(d.a)(e).intercom_checklist_id;
        if (!t) {
          const n = e.toString();
          if (!n) return;
          const r = n.match(/intercom_checklist_id=(\d+)/i);
          r && (t = r[1]);
        }
        return t;
      },
      H = (e) => (t) => {
        Object(a.b)(
          `Navigating to completion screen for checklist progress: ${e}`
        ),
          t(
            Object(p.push)(
              `/tasks/${f.b.checklistCompletionScreen(JSON.stringify(e))}`
            )
          );
      };
  },
  function (e, t, n) {
    "use strict";
    t.a = (e) => {
      if (e) return e[e.length - 1];
    };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return r;
    });
    function r() {
      const e = new Date().getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
        const n = (e + 16 * Math.random()) % 16 | 0;
        return ("x" === t ? n : (3 & n) | 8).toString(16);
      });
    }
    t.a = { generateUUID: r };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "k", function () {
      return o;
    }),
      n.d(t, "c", function () {
        return s;
      }),
      n.d(t, "i", function () {
        return c;
      }),
      n.d(t, "g", function () {
        return a;
      }),
      n.d(t, "a", function () {
        return u;
      }),
      n.d(t, "j", function () {
        return l;
      }),
      n.d(t, "d", function () {
        return d;
      }),
      n.d(t, "e", function () {
        return p;
      }),
      n.d(t, "f", function () {
        return f;
      }),
      n.d(t, "l", function () {
        return b;
      }),
      n.d(t, "o", function () {
        return h;
      }),
      n.d(t, "n", function () {
        return g;
      }),
      n.d(t, "b", function () {
        return m;
      }),
      n.d(t, "m", function () {
        return y;
      }),
      n.d(t, "h", function () {
        return O;
      });
    var r = n(2);
    const i = (e) => e.tour,
      o =
        (Object(r.createSelector)(i, (e) => e.isFetching),
        Object(r.createSelector)(i, (e) => e.isFetched)),
      s =
        (Object(r.createSelector)(i, (e) => e.fetchingFailed),
        Object(r.createSelector)(i, (e) => e.activeTour)),
      c = Object(r.createSelector)(i, (e) => e.isPreviewing),
      a = Object(r.createSelector)(i, (e) => e.updateFailed),
      u = Object(r.createSelector)(i, (e) => {
        if (e.activeTour) return e.activeTour.author;
      }),
      l = Object(r.createSelector)(
        i,
        (e) => !(!e.activeTour || !e.activeTour.isCompleted)
      ),
      d = Object(r.createSelector)(i, (e) => {
        if (e.activeTour) return e.activeTour.steps.length;
      }),
      p = Object(r.createSelector)(i, (e) => {
        const t = e.activeTour;
        if (t) return t.steps.findIndex((e) => e.id === t.activeStepId);
      }),
      f = Object(r.createSelector)(i, (e) => {
        const t = e.activeTour;
        if (!t) return;
        const { steps: n, activeStepId: r } = t;
        return t ? n.find((e) => e.id === r) : void 0;
      }),
      b = Object(r.createSelector)(i, (e) => {
        const t = e.activeTour;
        if (!t) return;
        const { steps: n, activeStepId: r } = t,
          i = n.findIndex((e) => e.id === r);
        return n[i + 1];
      }),
      h = Object(r.createSelector)(i, (e) => e.videoAudioMuted),
      g = Object(r.createSelector)(i, (e) => e.userHasInteractedWithVideo),
      m = Object(r.createSelector)(i, (e) => {
        const t = e.activeTour;
        if (t) return t.endTourAnimation;
      }),
      v = Object(r.createSelector)(p, d, (e, t) => e + 1 === t),
      y = Object(r.createSelector)(m, v, (e, t) => "confetti" === e && t),
      O = Object(r.createSelector)(i, (e) => e.isAwaitingProgress);
  },
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "e", function () {
      return r;
    }),
      n.d(t, "a", function () {
        return i;
      }),
      n.d(t, "b", function () {
        return o;
      }),
      n.d(t, "c", function () {
        return s;
      }),
      n.d(t, "f", function () {
        return c;
      }),
      n.d(t, "d", function () {
        return a;
      }),
      n.d(t, "g", function () {
        return u;
      });
    const r = () => "intercom-id",
      i = (e) => `intercom-id-${e}`,
      o = (e) => `intercom-session-${e}`,
      s = (e) => `intercom-device-id-${e}`,
      c = () => "_mkto_trk",
      a = () => "hubspotutk",
      u = () => "1" === navigator.doNotTrack;
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "f", function () {
      return f;
    }),
      n.d(t, "d", function () {
        return b;
      }),
      n.d(t, "e", function () {
        return h;
      }),
      n.d(t, "h", function () {
        return g;
      }),
      n.d(t, "m", function () {
        return m;
      }),
      n.d(t, "a", function () {
        return v;
      }),
      n.d(t, "l", function () {
        return y;
      }),
      n.d(t, "c", function () {
        return O;
      }),
      n.d(t, "j", function () {
        return _;
      }),
      n.d(t, "i", function () {
        return w;
      }),
      n.d(t, "k", function () {
        return S;
      }),
      n.d(t, "b", function () {
        return E;
      }),
      n.d(t, "g", function () {
        return I;
      });
    var r = n(9),
      i = n.n(r),
      o = n(18),
      s = n(22),
      c = n(4);
    let a = !1,
      u = !1,
      l = !1,
      d = !1,
      p = !1;
    const f = (e) => !!e && !!e[0] && "attachmentList" === e[0].type,
      b = (e) => {
        if (e) return e.isActive ? "active" : "away";
      },
      h = (e) => {
        if (!e || !e.lastActiveAt) return;
        const t = new Date();
        return Math.round((t.getTime() - e.lastActiveAt.getTime()) / 6e4);
      },
      g = (e) => i()(e),
      m = (e) => {
        a = e;
      },
      v = () => a,
      y = (e) => {
        u = e;
      },
      O = () => u;
    function _(e, t) {
      try {
        const n = C(),
          r = e.parts[e.parts.length - 1].author.isBot;
        if (n || !r || !t) return;
        Object(c.g)("timeToFirstBotResponse", { duration_ms: Date.now() - t }),
          j(!0);
      } catch (e) {
        Object(s.a)(`Failure while recording trigger transition duration ${e}`);
      }
    }
    function w(e, t, n) {
      try {
        let r = p;
        const i = e.parts[e.parts.length - 1].author.isBot;
        if (r || !i || !t || Math.abs(n - t) > 50) return void (p = !0);
        Object(c.g)("durationFromCreateConversationToOperatorReply", {
          duration_ms: Date.now() - t,
        }),
          (p = !0);
      } catch (e) {
        Object(s.a)(`Failure while recording trigger transition duration ${e}`);
      }
    }
    const j = (e) => {
        d = e;
      },
      C = () => d,
      S = (e) => {
        l = e;
      },
      E = () => l,
      I = (e) => !!e && o.a.messengerIsVisible();
  },
  function (e, t, n) {
    "use strict";
    var r;
    n.d(t, "g", function () {
      return s;
    }),
      n.d(t, "b", function () {
        return c;
      }),
      n.d(t, "d", function () {
        return a;
      }),
      n.d(t, "e", function () {
        return u;
      }),
      n.d(t, "c", function () {
        return l;
      }),
      n.d(t, "a", function () {
        return d;
      }),
      n.d(t, "f", function () {
        return p;
      });
    let i = null === (r = window) || void 0 === r ? void 0 : r.parent,
      o = [];
    const s = (e) => {
        (i = e),
          window.parent.addEventListener("resize", (e) =>
            o.forEach((t) => t(e))
          );
      },
      c = () => {
        var e, t;
        return null === (e = i) ||
          void 0 === e ||
          null === (t = e.document) ||
          void 0 === t
          ? void 0
          : t.title;
      },
      a = () => {
        var e;
        return null === (e = i) || void 0 === e ? void 0 : e.location;
      },
      u = () => {
        var e, t;
        return null === (e = i) ||
          void 0 === e ||
          null === (t = e.document) ||
          void 0 === t
          ? void 0
          : t.referrer;
      },
      l = () => {
        var e, t;
        return {
          innerWidth: null === (e = i) || void 0 === e ? void 0 : e.innerWidth,
          innerHeight:
            null === (t = i) || void 0 === t ? void 0 : t.innerHeight,
        };
      },
      d = (e) => {
        o.push(e);
      },
      p = (e) => (o = o.filter((t) => t !== e));
  },
  ,
  function (e, t, n) {
    "use strict";
    let r, i, o, s, c, a;
    n.d(t, "c", function () {
      return r;
    }),
      n.d(t, "e", function () {
        return i;
      }),
      n.d(t, "f", function () {
        return o;
      }),
      n.d(t, "d", function () {
        return s;
      }),
      n.d(t, "b", function () {
        return c;
      }),
      n.d(t, "a", function () {
        return a;
      }),
      (function (e) {
        (e[(e.input = 0)] = "input"),
          (e[(e.text = 1)] = "text"),
          (e[(e.dropdown = 2)] = "dropdown"),
          (e[(e.scale = 3)] = "scale"),
          (e[(e.multiSelect = 4)] = "multiSelect");
      })(r || (r = {})),
      (function (e) {
        (e[(e.banner = 0)] = "banner"), (e[(e.post = 1)] = "post");
      })(i || (i = {})),
      (function (e) {
        (e[(e.required = -1)] = "required"),
          (e[(e.text = 0)] = "text"),
          (e[(e.number = 1)] = "number"),
          (e[(e.email = 2)] = "email"),
          (e[(e.phone = 3)] = "phone");
      })(o || (o = {})),
      (function (e) {
        (e[(e.numeric = 0)] = "numeric"),
          (e[(e.stars = 1)] = "stars"),
          (e[(e.emoji = 2)] = "emoji"),
          (e[(e.nps = 3)] = "nps");
      })(s || (s = {})),
      (function (e) {
        (e[(e.content = 0)] = "content"),
          (e[(e.question = 1)] = "question"),
          (e[(e.intro = 2)] = "intro"),
          (e[(e.thankYou = 3)] = "thankYou");
      })(c || (c = {})),
      (function (e) {
        (e[(e.openUrlCurrentTab = 0)] = "openUrlCurrentTab"),
          (e[(e.openUrlNewTab = 1)] = "openUrlNewTab");
      })(a || (a = {}));
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      const t = document.createElement("a");
      return (
        (t.href = e),
        {
          protocol: t.protocol,
          host: t.host,
          port: t.port,
          pathname: t.pathname,
          hash: t.hash,
          search: t.search,
          hostname: t.hostname,
          origin: t.origin,
        }
      );
    }
    function i(e) {
      const t = r(e.toString()).search;
      return t
        ? (/^[?#]/.test(t) ? t.slice(1) : t).split("&").reduce((e, t) => {
            const [n, r] = t.split("=");
            return (
              (e[n] = r ? decodeURIComponent(r.replace(/\+/g, " ")) : ""), e
            );
          }, {})
        : {};
    }
    n.d(t, "b", function () {
      return r;
    }),
      n.d(t, "a", function () {
        return i;
      });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "e", function () {
      return u;
    }),
      n.d(t, "d", function () {
        return l;
      }),
      n.d(t, "c", function () {
        return d;
      }),
      n.d(t, "b", function () {
        return p;
      }),
      n.d(t, "a", function () {
        return f;
      });
    var r = n(2),
      i = n(151);
    function o(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function s(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? o(Object(n), !0).forEach(function (t) {
              c(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : o(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function c(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const a = (e) => {
        var t;
        return (
          (null === (t = e.conversations) || void 0 === t ? void 0 : t.byId) ||
          {}
        );
      },
      u = (e) => e.newConversation,
      l = Object(r.createSelector)(
        [(e) => e.app.conversationId, a, u],
        (e, t, n) => {
          const r = null === e ? n : t[e];
          if (r)
            return r.composerState || (r.composerState = n.composerState), r;
        }
      ),
      d = Object(r.createSelector)([a, (e, t) => t, i.b], (e, t, n) => {
        const r = e[t];
        if (r) return f(r, n);
      }),
      p = Object(r.createSelector)(
        (e) => e.app,
        ({ teamIntro: e }) => ({ teamIntro: e })
      );
    function f(e, t) {
      const { ticketId: n } = e,
        r = n ? t.find((e) => e.id === n) : null;
      return r ? s(s({}, e), {}, { ticket: r }) : e;
    }
  },
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return l;
    }),
      n.d(t, "b", function () {
        return d;
      }),
      n.d(t, "d", function () {
        return p;
      });
    var r = n(88),
      i = n(2),
      o = n(11),
      s = n(42),
      c = n(151);
    const a = Object(i.createSelector)(
      [
        (e) => Object(r.a)(e.conversations.byId || {}),
        (e) => e.notificationTypeOverrides,
        c.b,
      ],
      (e, t, n) =>
        e
          .filter((e) => !Object(o.o)(e))
          .map(
            (e) => (
              (e = ((e, t) => {
                const n = Object(o.i)(e);
                return Object.assign({}, e, {
                  suppress: (null == t ? void 0 : t.suppress[n]) || !1,
                  forceSnippet: (null == t ? void 0 : t.forceSnippet[n]) || !1,
                });
              })(e, t)),
              (e = Object(s.a)(e, n))
            )
          )
    );
    t.a = a;
    Object(i.createSelector)(
      [
        (e) => {
          var t;
          return Object(r.a)(
            (null === (t = e.conversations) || void 0 === t
              ? void 0
              : t.byId) || {}
          );
        },
      ],
      (e) =>
        e.filter((e) => e.isInbound && "state_closed" !== e.state).length >= 1
    );
    const u = ["pointer"],
      l = Object(i.createSelector)(a, (e) =>
        e
          .filter((e) => {
            const t = e.parts[0];
            return (
              !t ||
              !(-1 !== u.indexOf(t.messageType) && "disabled" === t.replyType)
            );
          })
          .sort(
            (e, t) =>
              t.lastPartCreatedAt.getTime() - e.lastPartCreatedAt.getTime()
          )
      ),
      d = Object(i.createSelector)(l, (e) => !(null != e && e.length)),
      p = Object(i.createSelector)(
        d,
        (e) => e.conversations.isFetching,
        (e, t) => e && !t
      );
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    });
    var r = n(22),
      i = n(78),
      o = n(0);
    const s = (e, t, n) => (o, s) => {
        const { messengerCards: d } = s(),
          p = n && d && d[t.uri],
          f = Object(i.c)(t);
        if (
          (o(a(f)),
          p &&
            c(p.card) &&
            !f.canvas.content &&
            (f.canvas = Object.assign({}, f.canvas, p.card.canvas)),
          f.canvas.content)
        )
          return void o(u(f, f.canvas.content));
        const { session: b } = s();
        return e
          .getMessengerCanvasWithContent(b, f.canvas.id, f.uri)
          .then((e) => {
            o(u(f, e.content));
          })
          .catch((e) => {
            o(l(f)),
              Object(r.a)(
                `There was a problem retrieving the live card content: ${e}`
              );
          });
      },
      c = (e) => !(!e || !e.canvas),
      a = (e) => ({ type: o.Jb, card: e }),
      u = (e, t) => ({ type: o.Kb, card: e, content: t }),
      l = (e) => ({ type: o.Ib, card: e });
  },
  function (e, t, n) {
    "use strict";
    t.a = {
      read(e, t) {
        t = t || parent.document.cookie;
        const n =
            "(?:(?:^|[^]*;)\\s*" +
            encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") +
            "\\s*\\=\\s*([^;]*).*$)|^.*$",
          r = t.match(new RegExp(n));
        if (null !== r && void 0 !== r[1]) return decodeURIComponent(r[1]);
      },
      write(e, t, n = {}) {
        const { domain: r, path: i, expires: o, secure: s, sameSite: c } = n;
        let a = `${e}=${t}`;
        return (
          r && (a += `; domain=${r}`),
          i && (a += `; path=${i}`),
          o && (a += `; expires=${o.toUTCString()}`),
          c && (a += `; samesite=${c}`),
          s && (a += "; secure"),
          ((e) => {
            parent.document.cookie = e;
          })(a),
          a
        );
      },
      clear(e, t = {}) {
        const { domain: n, path: r } = t,
          i = new Date(0);
        return this.write(e, "", { domain: n, path: r, expires: i });
      },
    };
  },
  ,
  function (e, t, n) {
    "use strict";
    var r = n(9),
      i = n.n(r),
      o = n(53),
      s = n.n(o),
      c = n(34),
      a = n(15),
      u = n(139),
      l = n(41),
      d = n(4),
      p = n(16),
      f = n(3),
      b = n(91);
    class tour_progress_CheckIfTourReadyToProgress {
      constructor(e, t) {
        (this.whenReady = void 0),
          (this.state = void 0),
          (this.activeStep = void 0),
          (this.nextStep = void 0),
          (this.state = e),
          (this.whenReady = t),
          (this.activeStep = Object(c.f)(e)),
          (this.nextStep = Object(c.l)(e)),
          this._check();
      }
      _check() {
        return "click" === this.activeStep.progressionBehavior
          ? (Object(p.e)("Click to progress behavior detected."),
            this._evaluateProgressionByClick())
          : this.whenReady();
      }
      _evaluateProgressionByClick() {
        let e = 0,
          t = 0;
        this._pageNeedsRedirection()
          ? (Object(p.e)(
              "Step url for the next step is different so the tour will wait 2s for the page to reload"
            ),
            (e = 2e3))
          : Object(p.e)("No page redirection detected."),
          this._nextStepIsPointer() &&
            (Object(p.e)(
              "The page is going to wait upto 5s for the next step's selector to become visible in page"
            ),
            (t = 5e3)),
          new p.a(this.nextStep.selector, t, e, this.whenReady);
      }
      _pageNeedsRedirection() {
        return this.activeStep.url !== this.nextStep.url;
      }
      _nextStepIsPointer() {
        return !!this.nextStep.selector;
      }
    }
    var h = n(12),
      g = n(18),
      m = n(0),
      v = n(31);
    n.d(t, "e", function () {
      return O;
    }),
      n.d(t, "h", function () {
        return _;
      }),
      n.d(t, "i", function () {
        return w;
      }),
      n.d(t, "c", function () {
        return S;
      }),
      n.d(t, "f", function () {
        return E;
      }),
      n.d(t, "b", function () {
        return I;
      }),
      n.d(t, "d", function () {
        return P;
      }),
      n.d(t, "a", function () {
        return T;
      }),
      n.d(t, "l", function () {
        return R;
      }),
      n.d(t, "j", function () {
        return M;
      }),
      n.d(t, "g", function () {
        return x;
      }),
      n.d(t, "k", function () {
        return L;
      });
    function y(e) {
      return Object(c.g)(e) || Object(c.i)(e) || Object(c.j)(e);
    }
    function O() {
      return async (e, t) => {
        const n = t(),
          { session: r } = t(),
          { id: i, progressId: o } = Object(c.c)(n),
          s = Object(c.l)(n);
        if (s) {
          if (
            (Object(p.e)(
              `Tour with id ${i} is attempting to progress to step ${s}`
            ),
            !y(n))
          ) {
            e({ type: m.Cc });
            try {
              await f.c.progressTour(r, i, s.id, o);
            } catch (t) {
              e({ type: m.Zd }),
                Object(p.e)(`Could not update tour due to e=${t}`);
            }
          }
          Object(c.i)(n) && h.b.set("tour_progress_preview", s.id),
            new tour_progress_CheckIfTourReadyToProgress(n, () => {
              e(
                (function (e, t) {
                  return { type: m.Ac, activeStepId: e, progressId: t };
                })(s.id, o)
              ),
                e({ type: m.Bc });
            });
        } else
          window.parent && window.parent.postMessage("exit_tour_preview", "*"),
            (function (e) {
              j("intercom:tourComplete", { tourId: e });
            })(i),
            e(
              (function (e) {
                return { type: m.A, progressId: e };
              })(o)
            ),
            e(Object(v.o)());
      };
    }
    function _() {
      return async (e, t) => {
        const n = t(),
          r = Object(c.c)(n),
          { session: i } = t(),
          o = window.parent;
        if (Object(c.i)(n))
          h.b.remove("tour_progress_preview"),
            o.__intercomAssignLocation(r.url);
        else {
          e({ type: m.Zc });
          try {
            Object(p.b)(Number(null == r ? void 0 : r.id));
            const e = await f.c.resetTour(i, null == r ? void 0 : r.id);
            e.progress_start_url
              ? (o.__intercomAssignLocation(e.progress_start_url),
                -1 !== e.progress_start_url.indexOf("#") &&
                  setTimeout(() => {
                    o.__intercomReloadLocation();
                  }, 1e3))
              : Object(p.e)(
                  "Could not redirect Tour due to in valid progress URL"
                );
          } catch (e) {
            Object(p.e)(`Could not reset tour due to exception - ${e}`);
          }
        }
      };
    }
    function w() {
      return async (e, t) => {
        const n = t(),
          { session: r } = t(),
          { id: i, progressId: o } = Object(c.c)(n);
        if (Object(c.i)(n)) e(D(""));
        else {
          e({ type: "SNOOZE_TOUR" });
          try {
            const e = u.a.TOUR;
            f.c.snoozeContentObjectInstance(r, e, i, o);
          } catch (e) {
            Object(p.e)(`Could not snooze tour due to exception - ${e}`);
          }
        }
      };
    }
    function j(e, t) {
      if (!Object(b.a)()) return;
      const n = new CustomEvent(e, { detail: t });
      window.parent.document.dispatchEvent(n);
    }
    function C(e) {
      j("intercom:tourError", { tourId: e });
    }
    function S() {
      return (e, t) => {
        const n = t(),
          { id: r, progressId: i } = Object(c.c)(n),
          { session: o } = t();
        Object(p.e)(`Tour with id ${r} marked as complete`),
          y(n) || (e({ type: m.cc }), f.c.completeTour(o, r, i));
      };
    }
    function E() {
      return (e, t) => {
        const n = t(),
          { id: r, progressId: i } = Object(c.c)(n),
          o = Object(c.f)(n);
        var s, a, u;
        if (!y(n))
          return (
            C(r),
            f.c.recordTourFailure(
              n.session,
              r,
              null == o ? void 0 : o.id,
              null == o ? void 0 : o.selector,
              null === (s = window) ||
                void 0 === s ||
                null === (a = s.parent) ||
                void 0 === a ||
                null === (u = a.location) ||
                void 0 === u
                ? void 0
                : u.pathname,
              i
            )
          );
      };
    }
    function I() {
      return (e) => {
        var t, n;
        if (Object(g.k)()) return;
        const r = A(
          null === (t = window) ||
            void 0 === t ||
            null === (n = t.parent) ||
            void 0 === n
            ? void 0
            : n.location
        );
        if ((Object(p.e)("Checking if URL has tour attached"), r)) {
          const t = "tour_triggered_from_url";
          let n = JSON.parse(h.b.get(t));
          n = n || [];
          n.indexOf(r) > -1
            ? Object(p.e)(`Tour with id ${r} has already been triggered`)
            : (Object(p.e)(`Tour id ${r} attached in the url`),
              e(P(r)),
              n.push(r),
              h.b.set(t, JSON.stringify(n)));
        } else Object(p.e)("No attached tour found in the URL");
      };
    }
    const A = (e) => {
      if (!e) return;
      let t = Object(l.a)(e).product_tour_id;
      if (!t) {
        const n = e.toString();
        if (!n) return;
        const r = n.match(/product_tour_id=(\d+)/i);
        r && (t = r[1]);
      }
      return t;
    };
    function P(e) {
      return async (t, n) => {
        const r = Object(c.c)(n()),
          { session: i } = n();
        if (r)
          Object(p.e)(
            `Active tour with id ${r.id} already found so tour id ${e} won't be fetched`
          );
        else {
          Object(p.e)(`Will attempt to fetch tour with id ${e}`);
          try {
            t(R(await f.c.fetchTour({ session: i, tourId: e })));
          } catch (t) {
            e && C(e),
              Object(p.e)(`Could not fetch or start tour due to e=${t}`);
          }
        }
      };
    }
    function k(e, t) {
      return { type: m.Fb, tour: e, isPreviewingTour: t };
    }
    function T(e) {
      return { type: m.l, muted: e };
    }
    function R(e) {
      return (t, n) => {
        if (i()(e)) return;
        const { user: r } = n(),
          o = Object(c.c)(n());
        if (!i()(o))
          return (
            Object(p.e)("There is already an active tour", o),
            void Object(p.e)("The tour won't attempt to start", e)
          );
        const u = (function (e) {
          if (!e.steps) return;
          const { activeStepId: t, steps: n } = e,
            r = n.findIndex((e) => parseInt(e.id, 10) === parseInt(t, 10)),
            i = n.slice(r).find((e) => !s()(e.selector));
          return i ? i.selector : void 0;
        })(e);
        u
          ? (Object(p.e)(
              "Checking if selector of the first active pointer step is visible on the page",
              e
            ),
            new p.a(u, 0, 0, (n) => {
              n
                ? (Object(p.e)(
                    "Node is visible. Tour is attempting to start",
                    e
                  ),
                  t(k(e, !1)),
                  t(Object(a.a)()),
                  Object(d.h)(r, "received", "tour", "messenger", null, {
                    tour_id: e.id,
                  }))
                : (Object(p.e)("Node is not visible. Tour will not start", e),
                  (function (e, t) {
                    Object(b.a)() &&
                      (Object(d.c)("tour_failed_css_evaluation", {
                        tour_id: e,
                      }),
                      Object(d.b)(`tour_failed_css_evaluation tour_id=${e}`)),
                      Object(d.h)(
                        t,
                        "received_but_failed_css_evaluation",
                        "tour",
                        "messenger",
                        null,
                        { tour_id: e }
                      );
                  })(e.id, r),
                  C(e.id));
            }))
          : (Object(p.e)("Tour is attempting to start", e),
            t(k(e, !1)),
            t(Object(a.a)()),
            Object(d.h)(r, "received", "tour", "messenger", null, {
              tour_id: e.id,
            }));
      };
    }
    function M(e) {
      return (t) => {
        t(k(e, !0)), t(Object(a.a)());
      };
    }
    function x(e) {
      return async (t, n) => {
        const { session: r } = n();
        try {
          var i, o;
          const n = await f.c.fetchTour({ session: r, tourId: e }),
            s = window.parent,
            c = Object(l.b)(n.url);
          n.url &&
          !Object(p.c)(
            c,
            null === (i = window) ||
              void 0 === i ||
              null === (o = i.parent) ||
              void 0 === o
              ? void 0
              : o.location
          )
            ? s.__intercomAssignLocation(n.url)
            : (t(k(n, !1)), t(Object(a.a)()));
        } catch (t) {
          C(e), Object(p.e)(`Could not fetch or start tour due to e=${t}`);
        }
      };
    }
    function L() {
      return (e, t) => {
        const n = t();
        if (y(n)) e(D(""));
        else {
          const { session: r } = t(),
            { id: i, progressId: o } = Object(c.c)(n);
          e(D(o)), f.c.stopTour(r, i, o);
        }
        e(Object(v.o)());
      };
    }
    function D(e) {
      return { type: m.Rd, progressId: e };
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "g", function () {
      return m;
    }),
      n.d(t, "i", function () {
        return v;
      }),
      n.d(t, "h", function () {
        return O;
      }),
      n.d(t, "c", function () {
        return _;
      }),
      n.d(t, "j", function () {
        return w;
      }),
      n.d(t, "n", function () {
        return C;
      }),
      n.d(t, "m", function () {
        return S;
      }),
      n.d(t, "l", function () {
        return E;
      }),
      n.d(t, "d", function () {
        return I;
      }),
      n.d(t, "e", function () {
        return A;
      }),
      n.d(t, "f", function () {
        return P;
      }),
      n.d(t, "k", function () {
        return k;
      }),
      n.d(t, "a", function () {
        return R;
      }),
      n.d(t, "b", function () {
        return M;
      });
    var r = n(9),
      i = n.n(r),
      o = n(3),
      s = n(93),
      c = n(0),
      a = n(21),
      u = n(40),
      l = n(41),
      d = n(12),
      p = n(92),
      f = n(77);
    function b(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function h(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? b(Object(n), !0).forEach(function (t) {
              g(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : b(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function g(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function m(e) {
      return { type: c.Nc, survey: e };
    }
    function v(e, t) {
      return { type: c.Uc, questionId: e, response: t };
    }
    function y(e, t, n) {
      return { type: c.Vc, surveyId: e, stepId: t, validationResult: n };
    }
    function O(e) {
      return { type: c.Sc, questionId: e };
    }
    function _(e) {
      return { type: c.n, questionId: e };
    }
    function w(e) {
      return { type: c.Od, surveyId: e };
    }
    function j(e) {
      return { type: c.Hb, surveyId: e };
    }
    function C(e) {
      return (t, n) => {
        var r;
        const i = n(),
          o = Object(s.b)(i),
          c = Object(s.c)(i),
          l =
            null == c || null === (r = c.questions) || void 0 === r
              ? void 0
              : r.find((t) => t.id === e);
        if (!o || !c || !l) return;
        const { failedValidation: d, validationError: p } = Object(a.i)(
          l.response,
          l.data
        );
        d && p !== u.f.required && t(y(o.id, c.id, { [l.id]: p }));
      };
    }
    function S(e, t, n) {
      return (r, u) => {
        const l = u(),
          d = Object(s.c)(l),
          p = {};
        null == d ||
          d.questions.forEach((e) => {
            const { failedValidation: t, validationError: n } = Object(a.i)(
              e.response,
              e.data
            );
            t && (p[e.id] = n);
          }),
          r(y(e, n, p)),
          i()(p)
            ? r(
                (function (e, t, n) {
                  return async (r, i) => {
                    const a = i(),
                      u = Object(s.a)(a),
                      l = Object(f.b)();
                    try {
                      const i = await o.c.submitSurvey(
                        a.session,
                        e,
                        t,
                        n,
                        u,
                        l
                      );
                      r(j(e));
                      const { complete: s, next_step: d, survey_id: p } = i;
                      if (p !== e) return;
                      r(
                        s && !d
                          ? { type: c.z }
                          : (function (e, t, n) {
                              return {
                                type: c.Oc,
                                surveyId: e,
                                surveyStep: t,
                                completed: n,
                              };
                            })(e, Object(o.b)(d), s)
                      );
                    } catch (t) {
                      r(j(e));
                    }
                  };
                })(e, t, n)
              )
            : r(j(e));
      };
    }
    function E() {
      return (e, t) => {
        const n = t(),
          r = Object(s.c)(n),
          i =
            null == r
              ? void 0
              : r.questions.find(
                  (e) =>
                    void 0 !== e.validationError && null !== e.validationError
                );
        e(O(i ? i.id : void 0));
      };
    }
    function I(e, t) {
      return (n, r) => {
        const i = r(),
          a = Object(s.b)(i);
        if (
          (n(
            (function (e) {
              return { type: c.jb, surveyId: e };
            })(e)
          ),
          null != a && a.completed)
        )
          return;
        const { session: u } = i,
          l = Object(f.b)();
        o.c.dismissSurvey(u, e, t, l);
      };
    }
    function A(e, t) {
      return async (n, r) => {
        Object(a.g)(`Will attempt to fetch survey ruleset with id ${e}`);
        const { session: i } = r(),
          s = Object(f.b)();
        n(
          m(
            await o.c.fetchSurvey({
              session: i,
              rulesetId: e,
              triggerMethod: t,
              isPreview: s,
            })
          )
        );
      };
    }
    function P(e, t) {
      return async (n, r) => {
        Object(a.g)(`Will attempt to fetch survey progress with id ${e}`);
        const { session: i } = r();
        n(
          m(
            await o.c.fetchActiveSurveyProgress({
              session: i,
              entityId: e,
              entityType: t,
            })
          )
        );
      };
    }
    function k(e) {
      return async (t, n) => {
        Object(a.g)(
          `Will attempt to fetch survey with survey_id ${e} for preview`
        );
        const { session: r } = n();
        t(m(await o.c.fetchSurveyForPreview({ session: r, surveyId: e })));
      };
    }
    function T(e, t) {
      return async (n, r) => {
        const { session: i } = r(),
          { questionId: s, questionResponse: c } = t,
          l = await o.c.fetchSurveyFromSnippet({ session: i, surveyId: e }),
          d = l.steps
            .filter((e) => e.id === l.activeStepId)[0]
            .questions.filter((e) => e.id === s)[0];
        if (
          !d ||
          !c ||
          !(() => {
            var e;
            const t = "string" == typeof c ? parseFloat(c) : void 0,
              n =
                "string" == typeof c &&
                (null === (e = d.data.options) || void 0 === e
                  ? void 0
                  : -1 !== e.indexOf(c)),
              r =
                void 0 !== t &&
                !isNaN(t) &&
                d.data.scaleStart <= t &&
                t <= d.data.scaleEnd;
            return d.questionType === u.c.multiSelect ? n : r;
          })()
        )
          return (
            Object(a.g)(
              "Could not find matching question, question response was not provided or question options do not match with response - returning regular survey"
            ),
            void n(m(l))
          );
        const p = (function (e, t, n) {
          const r = e.steps[0].questions.find((e) => e.id === t),
            i = e.steps[0].questions.findIndex((e) => e.id === t);
          if (r)
            return (
              Object(a.g)(
                `Will update question response for survey with id ${e.id}`
              ),
              (e.steps[0].questions[i] = h(
                h({}, r),
                {},
                { response: r.questionType === u.c.multiSelect ? [n] : n }
              )),
              e
            );
          Object(a.g)("Could not find matching question");
        })(l, s, c);
        (null == l ? void 0 : l.format) === u.e.banner &&
          p &&
          (Object(a.g)(
            `Will attempt to record answer ${c} and fetch next step`
          ),
          n(
            (function (e, t, n) {
              return async (r, i) => {
                const { session: s } = i(),
                  c = Object(f.b)();
                Object(a.g)(
                  `Will attempt to fetch survey ruleset with id ${e.id}`
                ),
                  r(w(e.id));
                const { complete: u, next_step: l } = await o.c.submitSurvey(
                    s,
                    e.id,
                    e.surveyProgressId,
                    e.steps[0].id,
                    [{ question_id: t, response: n }],
                    c
                  ),
                  d = h(
                    h({}, e),
                    {},
                    {
                      steps: [...(e.steps || []), Object(o.b)(l)],
                      activeStepId: l.id,
                      completed: u,
                    }
                  );
                Object(a.g)(
                  `Survey with id ${e.id} has been updated with next step`
                ),
                  r(m(d));
              };
            })(p, s, c)
          )),
          (null == l ? void 0 : l.format) === u.e.post &&
            p &&
            (Object(a.g)(`Will mark selected answer ${c}`), n(m(p)));
      };
    }
    function R() {
      return (e) => {
        var t, n;
        Object(a.g)("Checking for survey in URL");
        const r = x(
          null === (t = window) ||
            void 0 === t ||
            null === (n = t.parent) ||
            void 0 === n
            ? void 0
            : n.location,
          "intercom_survey_id"
        );
        if (r) {
          const t = "survey_triggered_from_url";
          let n = JSON.parse(d.b.get(t));
          n = n || [];
          n.indexOf(r) > -1
            ? Object(a.g)(
                `Survey ruleset id ${r} has already been triggered in the current tab`
              )
            : (Object(a.g)(`Survey ruleset id ${r} attached in the url`),
              e(A(r, p.a.shareable_url)),
              n.push(r),
              d.b.set(t, JSON.stringify(n)));
        } else Object(a.g)("No attached survey found in the URL");
      };
    }
    function M() {
      return (e) => {
        var t, n, r, i, o, s;
        Object(a.g)("Checking for email survey in URL");
        const c = x(
            null === (t = window) ||
              void 0 === t ||
              null === (n = t.parent) ||
              void 0 === n
              ? void 0
              : n.location,
            "intercom_email_survey_id"
          ),
          u = Object(l.a)(
            null === (r = window) ||
              void 0 === r ||
              null === (i = r.parent) ||
              void 0 === i
              ? void 0
              : i.location
          ).intercom_email_survey_question_response,
          p = Object(l.a)(
            null === (o = window) ||
              void 0 === o ||
              null === (s = o.parent) ||
              void 0 === s
              ? void 0
              : s.location
          ).intercom_email_survey_question_id;
        if (c) {
          const t = "survey_triggered_from_email";
          let n = JSON.parse(d.b.get(t));
          n = n || [];
          n.indexOf(c) > -1
            ? Object(a.g)(
                `Survey ruleset id ${c} has already been triggered in the current tab`
              )
            : (Object(a.g)(`Survey ruleset id ${c} attached in the url`),
              e(T(c, { surveyId: c, questionResponse: u, questionId: p })),
              n.push(c),
              d.b.set(t, JSON.stringify(n)));
        } else Object(a.g)("No attached survey found in the URL");
      };
    }
    const x = (e, t) => {
      if (!e) return;
      let n = Object(l.a)(e)[t];
      if (!n) {
        const r = e.toString();
        if (!r) return;
        const i = new RegExp(`${t}=(\\d+)`, "i"),
          o = r.match(i);
        o && (n = o[1]);
      }
      return n;
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(264),
      i = n(259),
      o = n(241),
      s = n(1),
      c = n.n(s);
    function a() {
      return (
        (a = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        a.apply(this, arguments)
      );
    }
    var u = s.createElement("path", {
      d: "M6.857 16l-2.305-2.305H1.6a1.54 1.54 0 01-1.13-.47 1.54 1.54 0 01-.47-1.13V1.6C0 1.16.157.783.47.47A1.54 1.54 0 011.6 0h10.514c.44 0 .817.157 1.13.47.314.313.47.69.47 1.13v10.495c0 .44-.156.817-.47 1.13a1.54 1.54 0 01-1.13.47H9.143L6.857 16zm.705-7.543c0-.47.048-.806.143-1.01.095-.203.289-.45.58-.742.445-.432.769-.8.972-1.105.203-.305.305-.667.305-1.086 0-.685-.238-1.231-.714-1.638-.477-.406-1.095-.61-1.857-.61-.686 0-1.276.174-1.77.52-.495.346-.838.827-1.03 1.443l1.333.533c.152-.381.354-.664.606-.848a1.45 1.45 0 01.88-.276c.31 0 .568.08.775.238.207.159.31.384.31.676 0 .229-.08.46-.238.696-.159.235-.41.51-.752.828-.381.343-.645.69-.79 1.038-.147.35-.22.797-.22 1.343h1.467zm-.74 2.952a.951.951 0 00.702-.287.962.962 0 00.286-.705.951.951 0 00-.288-.703.962.962 0 00-.705-.285.951.951 0 00-.703.287.962.962 0 00-.285.705c0 .278.096.512.287.703.192.19.427.285.705.285z",
      fill: "#000",
    });
    function l(e) {
      return s.createElement(
        "svg",
        a(
          {
            width: 14,
            height: 16,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        u
      );
    }
    n.p;
    var d = n(225);
    function p() {
      return (
        (p = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        p.apply(this, arguments)
      );
    }
    var f = s.createElement("path", {
      d: "M2 3.5H.5V14c0 .825.675 1.5 1.5 1.5h10.5V14H2V3.5zm12-3H5c-.825 0-1.5.675-1.5 1.5v9c0 .825.675 1.5 1.5 1.5h9c.825 0 1.5-.675 1.5-1.5V2c0-.825-.675-1.5-1.5-1.5zM14 11H5V2h9v9zM6.5 5.75h6v1.5h-6v-1.5zM6.5 8h3v1.5h-3V8zm0-4.5h6V5h-6V3.5z",
      fill: "gray",
    });
    function b(e) {
      return s.createElement(
        "svg",
        p(
          {
            width: 16,
            height: 16,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        f
      );
    }
    n.p;
    var h = n(265),
      g = n(242),
      m = n(266),
      v = n(268),
      y = n(165);
    function O() {
      return s.createElement(
        y.a,
        { focusable: "false", "aria-hidden": "true", viewBox: "0 0 15 16" },
        s.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M1 6.56621C1 5.16386 1 4.46268 1.30332 3.84042C1.55133 3.33165 2.03569 2.81787 2.52897 2.54034C3.13229 2.2009 3.76911 2.16334 5.04275 2.0882C5.93141 2.03578 6.92992 2 8 2C9.07008 2 10.0686 2.03578 10.9572 2.0882C12.2309 2.16334 12.8677 2.2009 13.471 2.54034C13.9643 2.81787 14.4487 3.33165 14.6967 3.84042C15 4.46268 15 5.16386 15 6.56621V8.43379C15 9.83614 15 10.5373 14.6967 11.1596C14.4487 11.6683 13.9643 12.1821 13.471 12.4597C12.8677 12.7991 12.2309 12.8367 10.9573 12.9118C10.0686 12.9642 9.07008 13 8 13C7.1234 13 6.29483 12.976 5.53533 12.9385L2.80967 14.1774C2.20727 14.4512 1.90606 14.5882 1.6626 14.5457C1.44988 14.5086 1.26117 14.3871 1.13938 14.2088C1 14.0047 1 13.6739 1 13.0122V6.56621ZM4 5.4C4 5.17909 4.17909 5 4.4 5H11.6C11.8209 5 12 5.17909 12 5.4V6C12 6.22091 11.8209 6.4 11.6 6.4H4.4C4.17909 6.4 4 6.22091 4 6V5.4ZM4.4 8C4.17909 8 4 8.17909 4 8.4V9C4 9.22091 4.17909 9.4 4.4 9.4H8.6C8.82091 9.4 9 9.22091 9 9V8.4C9 8.17909 8.82091 8 8.6 8H4.4Z",
          fill: "#334BFA",
        })
      );
    }
    var _ = n(229),
      w = n(287),
      j = n(220),
      C = n(234),
      S = n(270),
      E = n(243),
      I = n(244),
      A = n(226),
      P = n(245),
      k = n(271);
    function T() {
      return (
        (T = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        T.apply(this, arguments)
      );
    }
    var R = s.createElement("path", {
      fill: "#000",
      fillRule: "evenodd",
      d: "M3 3.7h4V2H3a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2v-2h-1.7v2a.3.3 0 01-.3.3H3a.3.3 0 01-.3-.3V4a.3.3 0 01.3-.3zM9.218 3c0 .47.38.85.85.85h1.88L8.296 7.502a.85.85 0 001.202 1.202l3.652-3.652v1.88a.85.85 0 001.7 0V3a.85.85 0 00-.85-.85h-3.932a.85.85 0 00-.85.85z",
      clipRule: "evenodd",
    });
    function M(e) {
      return s.createElement(
        "svg",
        T(
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: 16,
            height: 16,
            fill: "none",
          },
          e
        ),
        R
      );
    }
    n.p;
    var x = n(272),
      L = n(246),
      D = n(288),
      N = n(273),
      U = n(247),
      z = n(248),
      B = n(222),
      V = n(7);
    const H = Object(V.d)("svg", { target: "e1huj08u0" })(
      "width:12px;height:12px;fill:",
      Object(V.g)("errorText"),
      ";"
    );
    function F() {
      return s.createElement(
        H,
        { focusable: "false", "aria-hidden": "true", viewBox: "0 0 14 14" },
        s.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          fill: "currentColor",
          d: "M3.4 4c0-.665-.535-1.2-1.2-1.2C1.535 2.8 1 3.335 1 4c0 .665.535 1.2 1.2 1.2.665 0 1.2-.535 1.2-1.2zm0 4c0-.665-.535-1.2-1.2-1.2C1.535 6.8 1 7.335 1 8c0 .665.535 1.2 1.2 1.2.665 0 1.2-.535 1.2-1.2zm-1.2 2.8c.665 0 1.2.535 1.2 1.2 0 .665-.535 1.2-1.2 1.2-.665 0-1.2-.535-1.2-1.2 0-.665.535-1.2 1.2-1.2zM5 3.6a.4.4 0 01.4-.4h9.2a.4.4 0 01.4.4v.8a.4.4 0 01-.4.4H5.4a.4.4 0 01-.4-.4v-.8zm0 4a.4.4 0 01.4-.4h9.2a.4.4 0 01.4.4v.8a.4.4 0 01-.4.4H5.4a.4.4 0 01-.4-.4v-.8zm0 4c0-.22.18-.4.4-.4h7.2c.22 0 .4.18.4.4v.8a.4.4 0 01-.4.4H5.4a.4.4 0 01-.4-.4v-.8z",
        })
      );
    }
    var $ = n(274);
    function G() {
      return s.createElement(
        "svg",
        {
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        s.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M8 2.5C8.46106 2.5 8.83482 2.87376 8.83482 3.33482V7.16518L12.6652 7.16518C13.1262 7.16518 13.5 7.53894 13.5 8C13.5 8.46106 13.1262 8.83482 12.6652 8.83482L8.83482 8.83482V12.6652C8.83482 13.1262 8.46106 13.5 8 13.5C7.53894 13.5 7.16518 13.1262 7.16518 12.6652V8.83482H3.33482C2.87376 8.83482 2.5 8.46106 2.5 8C2.5 7.53894 2.87376 7.16518 3.33482 7.16518H7.16518V3.33482C7.16518 2.87376 7.53894 2.5 8 2.5Z",
          fill: "#222222",
        })
      );
    }
    function W() {
      return (
        (W = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        W.apply(this, arguments)
      );
    }
    var q = s.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.563 14.605l9.356-5.402c1-.577 1-2.02 0-2.598L4.563 1.203a1.5 1.5 0 00-2.25 1.3v10.803a1.5 1.5 0 002.25 1.3zM6.51 8.387L2.313 9.512V6.297L6.51 7.42c.494.133.494.834 0 .966z",
      fill: "#334BFA",
    });
    function J(e) {
      return s.createElement(
        "svg",
        W(
          {
            width: 17,
            height: 16,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        q
      );
    }
    n.p;
    var K = n(249),
      Z = n(250);
    function Y() {
      return c.a.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          xmlnsXlink: "http://www.w3.org/1999/xlink",
          width: "16px",
          height: "16px",
          viewBox: "0 0 16 16",
          version: "1.1",
        },
        c.a.createElement(
          "g",
          { id: "surface1" },
          c.a.createElement("path", {
            style: {
              stroke: "none",
              fillRule: "nonzero",
              fill: "rgb(0%,0%,0%)",
              fillOpacity: 1,
            },
            d: "M 0 14.4375 L 8 14.4375 L 8 12.4375 L 0 12.4375 Z M 0 11.101562 L 16 11.101562 L 16 9.101562 L 0 9.101562 Z M 0 7.773438 L 16 7.773438 L 16 5.773438 L 0 5.773438 Z M 0 2.4375 L 0 4.4375 L 16 4.4375 L 16 2.4375 Z M 0 2.4375 ",
          })
        )
      );
    }
    var Q = n(275),
      X = n(223),
      ee = n(166),
      te = n(276),
      ne = n(251),
      re = n(252),
      ie = n(253);
    const oe = Object(V.d)("svg", { target: "exb56pi0" })(
      "width:12px;height:12px;fill:",
      Object(V.g)("errorText"),
      ";"
    );
    function se() {
      return s.createElement(
        oe,
        { focusable: "false", "aria-hidden": "true", viewBox: "0 0 15 15" },
        s.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          fill: "currentColor",
          d: "M8 5a3.5 3.5 0 012.832 5.557L8 8.5V5zm6.05-1.818l.468.586c.113.083.08.266-.064.367L12.67 5.43c-.083.111-.267.079-.369-.065l-.468-.586c-.112-.083-.08-.266.065-.367l1.845-1.284c.072-.05.257-.018.307.054z",
        }),
        s.createElement("rect", {
          x: "5.5",
          width: "5",
          height: "1.5",
          rx: ".5",
          fill: "currentColor",
        }),
        s.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          fill: "currentColor",
          d: "M8 13.5a5 5 0 100-10 5 5 0 000 10zM8 15A6.5 6.5 0 108 2a6.5 6.5 0 000 13z",
        }),
        s.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          fill: "currentColor",
          d: "M8.5 1v2h-1V1h1z",
        })
      );
    }
    var ce = n(277),
      ae = n(221),
      ue = n(278),
      le = n(254),
      de = n(279),
      pe = n(280),
      fe = n(289);
    function be() {
      return (
        (be = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        be.apply(this, arguments)
      );
    }
    var he = s.createElement("path", {
        d: "M8.312 12V7",
        stroke: "#1A1A1A",
        strokeWidth: 1.7,
      }),
      ge = s.createElement("circle", {
        r: 1.1,
        transform: "matrix(1 0 0 -1 8.312 5.1)",
        fill: "#1A1A1A",
      }),
      me = s.createElement("circle", {
        cx: 8.313,
        cy: 8,
        r: 6.5,
        stroke: "#1A1A1A",
        strokeWidth: 1.75,
      });
    function ve(e) {
      return s.createElement(
        "svg",
        be(
          {
            width: 16,
            height: 16,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        he,
        ge,
        me
      );
    }
    n.p;
    function ye() {
      return (
        (ye = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        ye.apply(this, arguments)
      );
    }
    var Oe = s.createElement("path", {
      d: "M6.71.71a.996.996 0 00-1.41 0L.71 5.3a.996.996 0 000 1.41L5.3 11.3a.996.996 0 101.41-1.41L2.83 6l3.88-3.88c.39-.39.38-1.03 0-1.41z",
      fill: "#fff",
    });
    function _e(e) {
      return s.createElement(
        "svg",
        ye(
          {
            width: 8,
            height: 12,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        Oe
      );
    }
    n.p;
    function we() {
      return (
        (we = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        we.apply(this, arguments)
      );
    }
    var je = s.createElement("path", {
      d: "M7.992.5C3.853.5.5 3.86.5 8c0 4.14 3.353 7.5 7.492 7.5 4.148 0 7.508-3.36 7.508-7.5 0-4.14-3.36-7.5-7.508-7.5zM8 14c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm-.165-9.75H7.79c-.3 0-.54.24-.54.54v3.54c0 .262.135.51.367.645l3.113 1.867c.255.15.585.075.735-.18a.533.533 0 00-.188-.742L8.375 8.195V4.79c0-.3-.24-.54-.54-.54z",
      fill: "#fff",
      fillOpacity: 0.9,
    });
    function Ce(e) {
      return s.createElement(
        "svg",
        we(
          {
            width: 16,
            height: 16,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        je
      );
    }
    n.p;
    function Se() {
      return (
        (Se = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        Se.apply(this, arguments)
      );
    }
    var Ee = s.createElement("path", {
      d: "M7.75 13.75h6v-6l-2.467 2.467-7.5-7.5L6.25.25h-6v6l2.467-2.467 7.5 7.5L7.75 13.75z",
      fill: "#fff",
    });
    function Ie(e) {
      return s.createElement(
        "svg",
        Se(
          {
            width: 14,
            height: 14,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        Ee
      );
    }
    n.p;
    var Ae = () =>
      c.a.createElement(
        "svg",
        { width: 8, height: 8 },
        c.a.createElement("circle", {
          fill: "#FF4D4D",
          cx: "8",
          r: "4",
          cy: "8",
          strokeWidth: "0",
        })
      );
    function Pe() {
      return (
        (Pe = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        Pe.apply(this, arguments)
      );
    }
    var ke = s.createElement("path", {
        d: "M14.25 3.75v10.5H3.75V3.75h10.5zm0-1.5H3.75c-.825 0-1.5.675-1.5 1.5v10.5c0 .825.675 1.5 1.5 1.5h10.5c.825 0 1.5-.675 1.5-1.5V3.75c0-.825-.675-1.5-1.5-1.5z",
        fill: "#3465F6",
      }),
      Te = s.createElement("path", {
        d: "M10.5 12.75H5.25v-1.5h5.25v1.5zm2.25-3h-7.5v-1.5h7.5v1.5zm0-3h-7.5v-1.5h7.5v1.5z",
        fill: "#3465F6",
      });
    function Re(e) {
      return s.createElement(
        "svg",
        Pe(
          {
            width: 18,
            height: 18,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        ke,
        Te
      );
    }
    n.p;
    function Me() {
      return (
        (Me = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        Me.apply(this, arguments)
      );
    }
    var xe = s.createElement("path", {
      d: "M7.563 3.57c0-.575-.324-1.114-.872-1.285A6.298 6.298 0 004.813 2a6.272 6.272 0 00-3.045.783.916.916 0 00-.456.812v9.155c0 .56.638.908 1.158.7A6.283 6.283 0 014.812 13c1.056 0 2.051.26 2.926.719a1.24 1.24 0 001.15 0A6.273 6.273 0 0111.812 13c.827 0 1.618.16 2.342.45.52.208 1.158-.14 1.158-.7V3.595a.916.916 0 00-.456-.812A6.271 6.271 0 0011.813 2c-.655 0-1.285.1-1.879.285-.548.17-.871.71-.871 1.284V11a.75.75 0 01-1.5 0V3.57z",
      fill: "#334BFA",
    });
    function Le(e) {
      return s.createElement(
        "svg",
        Me(
          {
            width: 17,
            height: 16,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        xe
      );
    }
    n.p;
    function De() {
      return (
        (De = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        De.apply(this, arguments)
      );
    }
    var Ne = s.createElement("path", {
        d: "M16.875 20.625H45v3.75H16.875v-3.75zM16.875 30H45v3.75H16.875V30zM16.875 39.374h15v3.75h-15v-3.75zM46.875 56.249c1.035 0 1.875-1.26 1.875-2.813 0-1.553-.84-2.812-1.875-2.812-1.036 0-1.875 1.259-1.875 2.812s.84 2.813 1.875 2.813zM58.125 56.249c1.035 0 1.874-1.26 1.874-2.813 0-1.553-.839-2.812-1.874-2.812-1.036 0-1.875 1.259-1.875 2.812s.84 2.813 1.875 2.813z",
        fill: "#737376",
      }),
      Ue = s.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M68.98 54.73a16.522 16.522 0 00-.993-3.169 16.75 16.75 0 00-1.556-2.812 16.877 16.877 0 00-4.556-4.613 16.748 16.748 0 00-2.87-1.556 16.991 16.991 0 00-3.168-.993 19.688 19.688 0 00-1.462-.225V11.25a1.875 1.875 0 00-.544-1.331L44.456.544A1.875 1.875 0 0043.125 0H9.375C8.34 0 7.502.84 7.502 1.875v59.999c0 1.035.84 1.875 1.875 1.875h27.168c.034.095.066.19.098.286.074.222.147.441.24.651a16.875 16.875 0 003.618 5.362l2.625-2.55a13.124 13.124 0 01-2.813-4.162 13.125 13.125 0 011.2-12.45 13.124 13.124 0 015.775-4.762 13.122 13.122 0 012.456-.769 13.403 13.403 0 015.288 0 13.125 13.125 0 019.375 7.744c.337.79.595 1.614.768 2.456a13.328 13.328 0 010 5.287 13.124 13.124 0 01-3.581 6.619 13.388 13.388 0 01-1.875 1.612 13.125 13.125 0 01-4.687 1.97 13.406 13.406 0 01-5.288 0 13.129 13.129 0 01-2.456-.77l-1.462 3.45a16.874 16.874 0 006.675 1.275c2.255.003 4.487-.45 6.562-1.33a16.765 16.765 0 002.813-1.557 16.875 16.875 0 004.556-4.612 16.878 16.878 0 001.556-2.87c.436-1.02.769-2.081.994-3.168.455-2.24.455-4.548 0-6.787v.056zM43.126 3.75l6.731 6.731h-6.731V3.75zm6.04 37.81c.473-.105.974-.217 1.46-.217V15H41.25a1.875 1.875 0 01-1.875-1.875V3.75H11.251v56.249h18.88a5.625 5.625 0 005.794-4.819v-.394c.22-1.086.546-2.147.975-3.168a16.875 16.875 0 011.556-2.87c.603-.92 1.294-1.78 2.063-2.568a16.875 16.875 0 018.53-4.593l.116-.026z",
        fill: "#737376",
      }),
      ze = s.createElement("path", {
        d: "M56.25 65.52l2.643-2.644c-3.836-3.837-10.056-3.837-13.893 0l2.644 2.643a6.225 6.225 0 018.606 0z",
        fill: "#737376",
      });
    function Be(e) {
      return s.createElement(
        "svg",
        De(
          {
            width: 75,
            height: 75,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        Ne,
        Ue,
        ze
      );
    }
    n.p;
    function Ve() {
      return (
        (Ve = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        Ve.apply(this, arguments)
      );
    }
    var He = s.createElement("circle", {
        r: 2.955,
        transform: "matrix(-1 0 0 1 8 3.955)",
        fill: "#fff",
      }),
      Fe = s.createElement("path", {
        d: "M13.5 14c.552 0 1.002-.45.9-.993-.192-1.028-.729-2.497-2.155-3.61-.557-.464-2.186-1.306-4.245-1.306s-3.688.842-4.245 1.307c-1.427 1.112-1.963 2.58-2.155 3.609-.102.543.348.993.9.993h11z",
        fill: "#fff",
      });
    function $e(e) {
      return s.createElement(
        "svg",
        Ve(
          {
            width: 16,
            height: 16,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        He,
        Fe
      );
    }
    n.p;
    function Ge() {
      return (
        (Ge = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        Ge.apply(this, arguments)
      );
    }
    var We = s.createElement("path", {
      d: "M12.286 11.5h-2.143L8.714 8.7V4.5H13v4.2h-2.143l1.429 2.8zm-5.715 0H4.43L3 8.7V4.5h4.286v4.2H5.143l1.428 2.8z",
      fill: "#fff",
    });
    function qe(e) {
      return s.createElement(
        "svg",
        Ge(
          {
            width: 16,
            height: 16,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        We
      );
    }
    n.p;
    function Je() {
      return (
        (Je = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        Je.apply(this, arguments)
      );
    }
    var Ke = s.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1.92 3.568c1.2 0 1.936-.8 1.936-1.776C3.84.768 3.12 0 1.936 0 .768 0 0 .768 0 1.792c0 .992.736 1.776 1.888 1.776h.032zm1.504 11.456V5H0v10.024h3.424zm2.577.192H6v.328l.001-.328zm3.423-8.52V5.24H6c.028.838.006 8.31.001 9.976h3.423V9.784c0-.304.016-.624.112-.832.24-.624.816-1.248 1.76-1.248 1.248 0 1.744.944 1.744 2.336v5.176h3.424V9.64c0-3.168-1.696-4.64-3.952-4.64-1.814 0-2.62.994-3.088 1.696z",
      fill: "#fff",
    });
    function Ze(e) {
      return s.createElement(
        "svg",
        Je(
          {
            width: 17,
            height: 16,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        Ke
      );
    }
    n.p;
    function Ye() {
      return (
        (Ye = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        Ye.apply(this, arguments)
      );
    }
    var Qe = s.createElement("path", {
      d: "M16 3.549c-.6.261-1.236.434-1.886.512a3.277 3.277 0 001.438-1.822 6.447 6.447 0 01-2.077.799A3.281 3.281 0 007.8 5.276c0 .255.031.51.08.75a9.321 9.321 0 01-6.762-3.42A3.218 3.218 0 00.67 4.253a3.29 3.29 0 001.455 2.733 3.14 3.14 0 01-1.487-.416v.048A3.29 3.29 0 003.276 9.83c-.272.08-.56.112-.863.112-.208 0-.416-.016-.624-.064a3.274 3.274 0 003.07 2.27A6.59 6.59 0 010 13.507a9.325 9.325 0 005.019 1.47c6.026 0 9.335-5.002 9.335-9.334 0-.144 0-.287-.016-.431A5.682 5.682 0 0016 3.549z",
      fill: "#fff",
    });
    function Xe(e) {
      return s.createElement(
        "svg",
        Ye(
          {
            width: 16,
            height: 16,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        Qe
      );
    }
    n.p;
    function et() {
      return (
        (et = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        et.apply(this, arguments)
      );
    }
    var tt = s.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4 2a1 1 0 012 0h4a1 1 0 112 0h.5A1.5 1.5 0 0114 3.5V4H2v-.5A1.5 1.5 0 013.5 2H4zM2 5.5h12V12a2 2 0 01-2 2H4a2 2 0 01-2-2V5.5zm2.571 3.7a1.1 1.1 0 100-2.2 1.1 1.1 0 000 2.2zm4.53-1.1a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0zm2.328 1.1a1.1 1.1 0 100-2.2 1.1 1.1 0 000 2.2zM5.67 11.393a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0zm2.33 1.1a1.1 1.1 0 100-2.2 1.1 1.1 0 000 2.2z",
      fill: "#fff",
    });
    function nt(e) {
      return s.createElement(
        "svg",
        et(
          {
            width: 16,
            height: 16,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        tt
      );
    }
    n.p;
    function rt() {
      return (
        (rt = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        rt.apply(this, arguments)
      );
    }
    var it = s.createElement("path", {
      d: "M11.5 9.5L8 6 4.5 9.5",
      stroke: "#fff",
      strokeWidth: 1.7,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    });
    function ot(e) {
      return s.createElement(
        "svg",
        rt(
          {
            width: 16,
            height: 16,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        it
      );
    }
    n.p;
    function st() {
      return (
        (st = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        st.apply(this, arguments)
      );
    }
    var ct = s.createElement(
        "mask",
        { id: "help-active_svg__a", fill: "#fff" },
        s.createElement("path", {
          shapeRendering: "crispEdges",
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zM11.926 7.85a1.56 1.56 0 00-1.465 1.02.85.85 0 11-1.594-.588 3.26 3.26 0 115.547 3.233l-.019.022-.02.021-1.075 1.105-.006.006-.006.006c-.319.315-.512.534-.512.94v.363a.85.85 0 01-1.7 0v-.364c0-1.144.664-1.8 1.003-2.134l.009-.008 1.046-1.076a1.56 1.56 0 00-1.208-2.546zm0 9.917a.884.884 0 100-1.767.884.884 0 000 1.767z",
        })
      ),
      at = s.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zM11.926 7.85a1.56 1.56 0 00-1.465 1.02.85.85 0 11-1.594-.588 3.26 3.26 0 115.547 3.233l-.019.022-.02.021-1.075 1.105-.006.006-.006.006c-.319.315-.512.534-.512.94v.363a.85.85 0 01-1.7 0v-.364c0-1.144.664-1.8 1.003-2.134l.009-.008 1.046-1.076a1.56 1.56 0 00-1.208-2.546zm0 9.917a.884.884 0 100-1.767.884.884 0 000 1.767z",
        fill: "#0057FF",
      }),
      ut = s.createElement("path", {
        d: "M10.461 8.87l1.595.588-1.595-.588zm-1.091.503l-.588 1.595.588-1.595zm-.503-1.091l-1.595-.589 1.595.589zm5.547 3.233l-1.297-1.099 1.297 1.099zm-.019.022l1.22 1.185.04-.042.038-.044-1.298-1.099zm-.02.021l1.219 1.186-1.22-1.186zM13.3 12.663l1.22 1.185-1.22-1.185zm-.006.006l1.195 1.21.012-.012.012-.013-1.219-1.185zm-.006.006l-1.194-1.21 1.194 1.21zM12.08 11.48l1.194 1.21-1.194-1.21zm.009-.008l1.194 1.21.012-.013.013-.012-1.22-1.185zm1.046-1.076l1.218 1.186.051-.053.046-.056-1.315-1.077zM12 24.2c6.738 0 12.2-5.462 12.2-12.2h-3.4a8.8 8.8 0 01-8.8 8.8v3.4zM-.2 12c0 6.738 5.462 12.2 12.2 12.2v-3.4A8.8 8.8 0 013.2 12H-.2zM12-.2C5.262-.2-.2 5.262-.2 12h3.4A8.8 8.8 0 0112 3.2V-.2zM24.2 12C24.2 5.262 18.738-.2 12-.2v3.4a8.8 8.8 0 018.8 8.8h3.4zM12.057 9.458a.137.137 0 01-.05.065.147.147 0 01-.081.027v-3.4a3.26 3.26 0 00-3.06 2.132l3.19 1.176zm-3.275 1.51a2.55 2.55 0 003.274-1.51l-3.19-1.176a.85.85 0 011.092-.504l-1.176 3.19zm-1.51-3.275a2.55 2.55 0 001.51 3.275l1.176-3.19a.85.85 0 01.503 1.092l-3.19-1.177zm4.654-3.243a4.96 4.96 0 00-4.654 3.243l3.19 1.177a1.56 1.56 0 011.464-1.02v-3.4zm4.96 4.96a4.96 4.96 0 00-4.96-4.96v3.4c.861 0 1.56.698 1.56 1.56h3.4zm-1.174 3.203a4.95 4.95 0 001.173-3.203h-3.4c0 .384-.138.734-.368 1.006l2.595 2.197zm-.019.023l.019-.023-2.595-2.197-.02.023 2.596 2.197zm-.1.108l.021-.021-2.437-2.371-.02.021 2.437 2.37zm-1.074 1.104l1.075-1.104-2.438-2.371-1.074 1.105 2.437 2.37zm-.006.006l.006-.006-2.437-2.37-.006.006 2.437 2.37zm-.03.031l.006-.006-2.389-2.42-.006.007 2.389 2.42zm-.007-.27a.793.793 0 01-.112.382c-.025.04-.039.052-.018.028.023-.026.06-.065.137-.14l-2.389-2.42c-.33.326-1.018.985-1.018 2.15h3.4zm0 .363v-.364h-3.4v.364h3.4zm-2.55 2.55a2.55 2.55 0 002.55-2.55h-3.4c0-.47.38-.85.85-.85v3.4zm-2.55-2.55a2.55 2.55 0 002.55 2.55v-3.4c.469 0 .85.38.85.85h-3.4zm0-.364v.364h3.4v-.364h-3.4zm1.51-3.344c-.372.366-1.51 1.455-1.51 3.344h3.4c0-.4.19-.621.497-.923l-2.388-2.421zm.008-.009l-.009.01 2.388 2.42.009-.01-2.388-2.42zm1.021-1.05l-1.046 1.075 2.438 2.37 1.045-1.074-2.437-2.37zm-.13.199a.144.144 0 01.033-.09l2.631 2.153a3.25 3.25 0 00.736-2.063h-3.4zm.14.14a.14.14 0 01-.14-.14h3.4c0-1.8-1.46-3.26-3.26-3.26v3.4zm-.815 7.334c0-.451.366-.817.817-.817v3.4a2.584 2.584 0 002.583-2.583h-3.4zm.817.816a.816.816 0 01-.817-.816h3.4a2.584 2.584 0 00-2.583-2.584v3.4zm.816-.816c0 .45-.366.816-.816.816v-3.4a2.584 2.584 0 00-2.584 2.584h3.4zm-.816-.817c.45 0 .816.366.816.817h-3.4a2.584 2.584 0 002.584 2.583v-3.4z",
        fill: "#0057FF",
        mask: "url(#help-active_svg__a)",
      });
    function lt(e) {
      return s.createElement(
        "svg",
        st(
          {
            width: 24,
            height: 24,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        ct,
        at,
        ut
      );
    }
    n.p;
    function dt() {
      return (
        (dt = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        dt.apply(this, arguments)
      );
    }
    var pt = s.createElement("circle", {
        className: "help_svg__stroke help_svg__circle",
        cx: 12,
        cy: 12,
        r: 9.65,
        stroke: "#1A1A1A",
        strokeWidth: 1.7,
      }),
      ft = s.createElement("path", {
        className: "help_svg__stroke help_svg__negative",
        d: "M9.664 8.576a2.41 2.41 0 114.102 2.39l-1.075 1.104c-.326.322-.765.76-.765 1.544v.364",
        stroke: "#1A1A1A",
        strokeWidth: 1.7,
        strokeLinecap: "round",
      }),
      bt = s.createElement("circle", {
        className: "help_svg__fill help_svg__negative",
        cx: 11.927,
        cy: 16.884,
        r: 0.884,
        fill: "#1A1A1A",
      });
    function ht(e) {
      return s.createElement(
        "svg",
        dt(
          {
            width: 24,
            height: 24,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        pt,
        ft,
        bt
      );
    }
    n.p;
    function gt() {
      return (
        (gt = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        gt.apply(this, arguments)
      );
    }
    var mt = s.createElement(
        "mask",
        { id: "home-active_svg__a", fill: "#fff" },
        s.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M10.5 2.335L3 7.51c-.625.437-1 1.116-1 1.84V19.7C2 20.965 3.125 22 4.5 22h15c1.375 0 2.5-1.035 2.5-2.3V9.35c0-.724-.375-1.403-1-1.84l-7.5-5.175a2.69 2.69 0 00-3 0zM7.316 14.366a.85.85 0 10-1.132 1.268A8.704 8.704 0 0012 17.852c2.233 0 4.272-.84 5.816-2.218a.85.85 0 10-1.132-1.268A7.005 7.005 0 0112 16.152c-1.8 0-3.44-.675-4.684-1.786z",
        })
      ),
      vt = s.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.5 2.335L3 7.51c-.625.437-1 1.116-1 1.84V19.7C2 20.965 3.125 22 4.5 22h15c1.375 0 2.5-1.035 2.5-2.3V9.35c0-.724-.375-1.403-1-1.84l-7.5-5.175a2.69 2.69 0 00-3 0zM7.316 14.366a.85.85 0 10-1.132 1.268A8.704 8.704 0 0012 17.852c2.233 0 4.272-.84 5.816-2.218a.85.85 0 10-1.132-1.268A7.005 7.005 0 0112 16.152c-1.8 0-3.44-.675-4.684-1.786z",
        fill: "#0057FF",
      }),
      yt = s.createElement("path", {
        d: "M3 7.51l-.965-1.4-.01.007L3 7.51zm7.5-5.175L9.538.934l-.003.002.965 1.399zM21 7.51l.974-1.393-.009-.006L21 7.51zm-7.5-5.175l.966-1.4-.004-.001-.962 1.401zM6.116 14.434l1.268 1.132-1.268-1.132zm1.2-.068l1.133-1.268-1.133 1.268zm-1.132 1.268L5.05 16.902l1.133-1.268zm11.632 0l1.133 1.268-1.133-1.268zm.068-1.2l-1.268 1.132 1.268-1.132zm-1.2-.068l-1.133-1.268 1.133 1.268zM3.965 8.91l7.5-5.175L9.536.936l-7.5 5.175 1.93 2.798zM3.7 9.35c0-.12.063-.299.274-.447L2.026 6.117C.987 6.843.3 8.022.3 9.35h3.4zm0 10.35V9.35H.3V19.7h3.4zm.8.6a.906.906 0 01-.615-.227.509.509 0 01-.185-.373H.3c0 2.335 2.022 4 4.2 4v-3.4zm15 0h-15v3.4h15v-3.4zm.8-.6c0 .11-.047.246-.185.373a.906.906 0 01-.615.227v3.4c2.178 0 4.2-1.665 4.2-4h-3.4zm0-10.35V19.7h3.4V9.35h-3.4zm-.274-.447c.211.148.274.326.274.447h3.4c0-1.328-.687-2.507-1.726-3.233l-1.948 2.786zm-7.492-5.169l7.5 5.175 1.931-2.798-7.5-5.175-1.93 2.798zm-1.072.002a.991.991 0 011.076 0L14.462.934a4.39 4.39 0 00-4.924 0l1.924 2.802zm-4.078 11.83a.85.85 0 01-1.2.068l2.265-2.536a2.55 2.55 0 00-3.6.203l2.535 2.265zm-.068-1.2c.35.313.38.85.068 1.2l-2.536-2.265a2.55 2.55 0 00.203 3.6l2.265-2.535zM12 16.152c-1.8 0-3.44-.675-4.684-1.786l-2.265 2.536A10.405 10.405 0 0012 19.552v-3.4zm4.684-1.786A7.005 7.005 0 0112 16.152v3.4c2.667 0 5.105-1.004 6.949-2.65l-2.265-2.536zm-.068 1.2a.85.85 0 01.068-1.2l2.265 2.536a2.55 2.55 0 00.203-3.6l-2.536 2.264zm1.2.068a.85.85 0 01-1.2-.068l2.536-2.265a2.55 2.55 0 00-3.6-.203l2.264 2.536zM12 17.852c2.233 0 4.272-.839 5.816-2.218l-2.265-2.536A5.305 5.305 0 0112 14.452v3.4zm-5.816-2.218A8.704 8.704 0 0012 17.852v-3.4a5.305 5.305 0 01-3.551-1.354l-2.265 2.536z",
        fill: "#0057FF",
        mask: "url(#home-active_svg__a)",
      });
    function Ot(e) {
      return s.createElement(
        "svg",
        gt(
          {
            width: 24,
            height: 24,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        mt,
        vt,
        yt
      );
    }
    n.p;
    function _t() {
      return (
        (_t = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        _t.apply(this, arguments)
      );
    }
    var wt = s.createElement("path", {
        className: "home_svg__stroke",
        d: "M2.85 9.35c0-.423.218-.85.635-1.143l7.496-5.172h.001a1.84 1.84 0 012.036 0s0 0 0 0l7.495 5.17.002.002c.417.293.635.72.635 1.142V19.7c0 .73-.676 1.45-1.65 1.45h-15c-.974 0-1.65-.72-1.65-1.45V9.35z",
        stroke: "#1A1A1A",
        strokeWidth: 1.7,
      }),
      jt = s.createElement("path", {
        className: "home_svg__stroke",
        d: "M17.25 15A7.855 7.855 0 0112 17.002 7.855 7.855 0 016.75 15",
        stroke: "#1A1A1A",
        strokeWidth: 1.7,
        strokeLinecap: "round",
      });
    function Ct(e) {
      return s.createElement(
        "svg",
        _t(
          {
            width: 24,
            height: 24,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        wt,
        jt
      );
    }
    n.p;
    function St() {
      return (
        (St = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        St.apply(this, arguments)
      );
    }
    var Et = s.createElement(
        "mask",
        { id: "messages-active_svg__a", fill: "#fff" },
        s.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M22 5a3 3 0 00-3-3H5a3 3 0 00-3 3v10a3 3 0 003 3h10.558l3.883 3.87c.946.942 2.559.272 2.559-1.063V5zm-4.15 2.85A.85.85 0 0017 7H7a.85.85 0 000 1.7h10c.47 0 .85-.38.85-.85zm-5 4A.85.85 0 0012 11H7a.85.85 0 000 1.7h5c.47 0 .85-.38.85-.85z",
        })
      ),
      It = s.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M22 5a3 3 0 00-3-3H5a3 3 0 00-3 3v10a3 3 0 003 3h10.558l3.883 3.87c.946.942 2.559.272 2.559-1.063V5zm-4.15 2.85A.85.85 0 0017 7H7a.85.85 0 000 1.7h10c.47 0 .85-.38.85-.85zm-5 4A.85.85 0 0012 11H7a.85.85 0 000 1.7h5c.47 0 .85-.38.85-.85z",
        fill: "#0057FF",
      }),
      At = s.createElement("path", {
        d: "M15.558 18v-1.7h.702l.498.496-1.2 1.204zm3.883 3.87l1.2-1.205-1.2 1.204zM19 .3A4.7 4.7 0 0123.7 5h-3.4A1.3 1.3 0 0019 3.7V.3zM5 .3h14v3.4H5V.3zM.3 5A4.7 4.7 0 015 .3v3.4A1.3 1.3 0 003.7 5H.3zm0 10V5h3.4v10H.3zM5 19.7A4.7 4.7 0 01.3 15h3.4A1.3 1.3 0 005 16.3v3.4zm10.558 0H5v-3.4h10.558v3.4zm2.683 3.374l-3.883-3.87 2.4-2.408 3.883 3.87-2.4 2.408zm5.459-2.267c0 2.848-3.441 4.277-5.459 2.267l2.4-2.409a.228.228 0 00-.218-.043.228.228 0 00-.123.185h3.4zm0-4.307v4.307h-3.4V16.5h3.4zm0-2.543V16.5h-3.4v-2.543h3.4zM23.7 5v8.957h-3.4V5h3.4zm-6.7.3a2.55 2.55 0 012.55 2.55h-3.4c0 .47.38.85.85.85V5.3zm-10 0h10v3.4H7V5.3zM4.45 7.85A2.55 2.55 0 017 5.3v3.4c.47 0 .85-.38.85-.85h-3.4zM7 10.4a2.55 2.55 0 01-2.55-2.55h3.4A.85.85 0 007 7v3.4zm10 0H7V7h10v3.4zm2.55-2.55A2.55 2.55 0 0117 10.4V7a.85.85 0 00-.85.85h3.4zM12 9.3a2.55 2.55 0 012.55 2.55h-3.4c0 .47.38.85.85.85V9.3zm-5 0h5v3.4H7V9.3zm-2.55 2.55A2.55 2.55 0 017 9.3v3.4c.47 0 .85-.38.85-.85h-3.4zM7 14.4a2.55 2.55 0 01-2.55-2.55h3.4A.85.85 0 007 11v3.4zm5 0H7V11h5v3.4zm2.55-2.55A2.55 2.55 0 0112 14.4V11a.85.85 0 00-.85.85h3.4z",
        fill: "#0057FF",
        mask: "url(#messages-active_svg__a)",
      });
    function Pt(e) {
      return s.createElement(
        "svg",
        St(
          {
            width: 24,
            height: 24,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        Et,
        It,
        At
      );
    }
    n.p;
    function kt() {
      return (
        (kt = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        kt.apply(this, arguments)
      );
    }
    var Tt = s.createElement(
        "mask",
        { id: "messages_svg__a", fill: "#fff" },
        s.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M19 2a3 3 0 013 3V20.806c0 1.335-1.613 2.005-2.559 1.062L15.56 18H5a3 3 0 01-3-3V5a3 3 0 013-3h14z",
        })
      ),
      Rt = s.createElement("path", {
        className: "messages_svg__fill",
        d: "M19.441 21.868l1.2-1.204-1.2 1.204zM15.56 18v-1.7h.702l.498.496-1.2 1.204zM20.3 5A1.3 1.3 0 0019 3.7V.3A4.7 4.7 0 0123.7 5h-3.4zm0 8.956V5h3.4v8.956h-3.4zm0 2.544v-2.544h3.4V16.5h-3.4zm0 4.306V16.5h3.4v4.306h-3.4zm.341-.142a.23.23 0 00-.218-.043.228.228 0 00-.123.185h3.4c0 2.848-3.441 4.277-5.459 2.267l2.4-2.409zm-3.882-3.868l3.882 3.868-2.4 2.409-3.882-3.869 2.4-2.408zM5 16.3h10.559v3.4H5v-3.4zM3.7 15A1.3 1.3 0 005 16.3v3.4A4.7 4.7 0 01.3 15h3.4zm0-10v10H.3V5h3.4zM5 3.7A1.3 1.3 0 003.7 5H.3A4.7 4.7 0 015 .3v3.4zm14 0H5V.3h14v3.4z",
        fill: "#1A1A1A",
        mask: "url(#messages_svg__a)",
      }),
      Mt = s.createElement("path", {
        className: "messages_svg__fill",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17 7a.85.85 0 010 1.7H7A.85.85 0 117 7h10zm-5 4a.85.85 0 010 1.7H7A.85.85 0 017 11h5z",
        fill: "#1A1A1A",
      });
    function xt(e) {
      return s.createElement(
        "svg",
        kt(
          {
            width: 24,
            height: 24,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        Tt,
        Rt,
        Mt
      );
    }
    n.p;
    function Lt() {
      return (
        (Lt = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        Lt.apply(this, arguments)
      );
    }
    var Dt = s.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.218 14H9.5v6.232a2.268 2.268 0 01-4.456.597l-1.967-7.212A5.001 5.001 0 015 4h5.938l4.511-2.977A1 1 0 0117 1.858v14.76a1 1 0 01-1.55.834L10.217 14zM20.595 3.393a.85.85 0 10-1.19 1.214A6.129 6.129 0 0121.251 9a6.129 6.129 0 01-1.846 4.393.85.85 0 101.19 1.214A7.829 7.829 0 0022.95 9a7.829 7.829 0 00-2.356-5.607z",
      fill: "#0057FF",
    });
    function Nt(e) {
      return s.createElement(
        "svg",
        Lt(
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            fill: "none",
          },
          e
        ),
        Dt
      );
    }
    n.p;
    function Ut() {
      return (
        (Ut = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        Ut.apply(this, arguments)
      );
    }
    var zt = s.createElement("path", {
        className: "news_svg__stroke",
        d: "M20 4a6.979 6.979 0 012.101 5c0 1.959-.804 3.73-2.101 5",
        stroke: "#1A1A1A",
        strokeWidth: 1.7,
        strokeLinecap: "round",
      }),
      Bt = s.createElement(
        "mask",
        { id: "news_svg__a", fill: "#fff" },
        s.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M9.5 14h.718l5.231 3.452A1 1 0 0017 16.617V1.858a1 1 0 00-1.55-.835L10.937 4H5a5 5 0 00-1.923 9.617l1.967 7.212a2.268 2.268 0 004.456-.597V14z",
        })
      ),
      Vt = s.createElement("path", {
        className: "news_svg__fill",
        d: "M10.218 14l.936-1.419-.426-.28h-.51V14zM9.5 14v-1.7H7.8V14h1.7zm5.95 3.452l-.937 1.42.936-1.42zm0-16.429l-.937-1.419.936 1.42zM10.937 4v1.7h.51l.426-.28L10.938 4zm-7.86 9.617l1.64-.447-.22-.802-.766-.32-.655 1.57zm1.966 7.212l1.64-.447-1.64.447zm5.174-8.529H9.5v3.4h.718v-3.4zm6.168 3.733l-5.232-3.452L9.28 15.42l5.232 3.452 1.873-2.838zm-1.086.584a.7.7 0 011.085-.584l-1.872 2.838c1.795 1.185 4.187-.103 4.187-2.253h-3.4zm0-14.759v14.76h3.4V1.857h-3.4zm1.085.584a.7.7 0 01-1.085-.584h3.4c0-2.15-2.392-3.438-4.187-2.254l1.873 2.838zm-4.51 2.977l4.51-2.977-1.872-2.838-4.511 2.977 1.872 2.838zM5 5.7h5.938V2.3H5v3.4zM1.7 9A3.3 3.3 0 015 5.7V2.3c-3.7 0-6.7 3-6.7 6.7h3.4zm2.032 3.048A3.301 3.301 0 011.7 9h-3.4a6.701 6.701 0 004.123 6.186l1.309-3.138zm2.952 8.334L4.718 13.17l-3.28.895 1.966 7.211 3.28-.894zm.548.418a.568.568 0 01-.548-.418l-3.28.894A3.968 3.968 0 007.232 24.2v-3.4zm.568-.568a.568.568 0 01-.568.568v3.4a3.968 3.968 0 003.968-3.968H7.8zM7.8 14v6.232h3.4V14H7.8z",
        fill: "#1A1A1A",
        mask: "url(#news_svg__a)",
      });
    function Ht(e) {
      return s.createElement(
        "svg",
        Ut(
          {
            width: 24,
            height: 24,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        zt,
        Bt,
        Vt
      );
    }
    n.p;
    function Ft() {
      return (
        (Ft = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        Ft.apply(this, arguments)
      );
    }
    var $t = s.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.75 4.5A2.25 2.25 0 001.5 6.75v1.875c0 .414.343.74.74.856a2.626 2.626 0 010 5.038c-.397.117-.74.442-.74.856v1.875a2.25 2.25 0 002.25 2.25h16.5a2.25 2.25 0 002.25-2.25v-1.875c0-.414-.343-.74-.74-.856a2.626 2.626 0 010-5.038c.397-.117.74-.442.74-.856V6.75a2.25 2.25 0 00-2.25-2.25H3.75zM16.5 9.75h-9a1.125 1.125 0 010-2.25h9a1.125 1.125 0 010 2.25z",
      fill: "#334BFA",
    });
    function Gt(e) {
      return s.createElement(
        "svg",
        Ft(
          {
            width: 24,
            height: 24,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        $t
      );
    }
    n.p;
    function Wt() {
      return (
        (Wt = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        Wt.apply(this, arguments)
      );
    }
    var qt = s.createElement(
        "mask",
        { id: "tickets_svg__a", fill: "#fff" },
        s.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M3 4.5A1.5 1.5 0 001.5 6v2.875c0 .276.226.495.497.547a2.626 2.626 0 010 5.156c-.271.052-.497.27-.497.547V18A1.5 1.5 0 003 19.5h18a1.5 1.5 0 001.5-1.5v-2.875c0-.276-.226-.495-.497-.547a2.626 2.626 0 010-5.156c.271-.052.497-.27.497-.547V6A1.5 1.5 0 0021 4.5H3z",
        })
      ),
      Jt = s.createElement("path", {
        d: "M1.997 9.422l-.32 1.67.32-1.67zm0 5.156l-.32-1.67.32 1.67zm20.006 0l-.32 1.67.32-1.67zm0-5.156l-.32-1.67.32 1.67zM3.2 6a.2.2 0 01-.2.2V2.8A3.2 3.2 0 00-.2 6h3.4zm0 1.5V6H-.2v1.5h3.4zm0 1.375V7.5H-.2v1.375h3.4zm-.883-1.123c.332.064.883.397.883 1.123H-.2c0 1.278 1.003 2.05 1.877 2.217l.64-3.34zM5.825 12c0-2.11-1.51-3.865-3.508-4.248l-.64 3.34c.426.081.748.459.748.908h3.4zm-3.508 4.248A4.326 4.326 0 005.825 12h-3.4c0 .45-.322.827-.748.908l.64 3.34zm.883-1.123c0 .726-.551 1.059-.883 1.123l-.64-3.34c-.874.168-1.877.94-1.877 2.217h3.4zm0 1.375v-1.375H-.2V16.5h3.4zm0 1.5v-1.5H-.2V18h3.4zm-.2-.2c.11 0 .2.09.2.2H-.2A3.2 3.2 0 003 21.2v-3.4zm18 0H3v3.4h18v-3.4zm-.2.2c0-.11.09-.2.2-.2v3.4a3.2 3.2 0 003.2-3.2h-3.4zm0-1.5V18h3.4v-1.5h-3.4zm3.4 0v-1.375h-3.4V16.5h3.4zm0-1.375c0-1.278-1.003-2.05-1.877-2.217l-.64 3.34a1.119 1.119 0 01-.883-1.123h3.4zm-1.877-2.217a.926.926 0 01-.748-.908h-3.4c0 2.11 1.51 3.865 3.508 4.248l.64-3.34zM21.575 12c0-.45.322-.827.748-.908l-.64-3.34A4.326 4.326 0 0018.175 12h3.4zm.748-.908c.874-.168 1.877-.94 1.877-2.217h-3.4c0-.726.551-1.059.883-1.123l.64 3.34zM24.2 8.875V7.5h-3.4v1.375h3.4zM20.8 6v1.5h3.4V6h-3.4zm.2.2a.2.2 0 01-.2-.2h3.4A3.2 3.2 0 0021 2.8v3.4zm-18 0h18V2.8H3v3.4z",
        fill: "#1A1A1A",
        mask: "url(#tickets_svg__a)",
      }),
      Kt = s.createElement("path", {
        d: "M7.5 8.625h9",
        stroke: "#1A1A1A",
        strokeWidth: 1.7,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      });
    function Zt(e) {
      return s.createElement(
        "svg",
        Wt(
          {
            width: 24,
            height: 24,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        qt,
        Jt,
        Kt
      );
    }
    n.p;
    function Yt() {
      return (
        (Yt = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        Yt.apply(this, arguments)
      );
    }
    var Qt = s.createElement("path", {
      d: "M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89l-2.26-.97c-.65-.28-.81-1.13-.31-1.63l3.01-3.01c.47-.47 1.15-.68 1.81-.55l1.32.27zm1.49 10.16c.3.3.74.38 1.12.2 1.16-.54 3.65-1.81 5.26-3.42 4.59-4.59 4.63-8.33 4.36-9.93a.979.979 0 00-.79-.79c-1.6-.27-5.34-.23-9.93 4.36-1.61 1.61-2.87 4.1-3.42 5.26-.18.38-.09.83.2 1.12l3.2 3.2zm6.97-1.7c-2.29 2.04-5.58 3.44-5.89 3.57l.97 2.26c.28.65 1.13.81 1.63.31l3.01-3.01c.47-.47.68-1.15.55-1.81l-.27-1.32zm-8.71 2.6a3 3 0 01-.82 2.71c-.77.77-3.16 1.34-4.71 1.64-.69.13-1.3-.48-1.17-1.17.3-1.55.86-3.94 1.64-4.71a3 3 0 012.71-.82c1.17.22 2.13 1.18 2.35 2.35zM13 9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z",
      fill: "#000",
    });
    function Xt(e) {
      return s.createElement(
        "svg",
        Yt(
          {
            width: 24,
            height: 24,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        Qt
      );
    }
    n.p;
    function en() {
      return (
        (en = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        en.apply(this, arguments)
      );
    }
    var tn = s.createElement("path", {
      className: "tasks_svg__fill",
      d: "M5.5 3.35A2.15 2.15 0 003.35 5.5v10a2.15 2.15 0 002.15 2.15h10a2.15 2.15 0 002.15-2.15v-10a2.15 2.15 0 00-2.15-2.15h-10zM1.65 5.5A3.85 3.85 0 015.5 1.65h10a3.85 3.85 0 013.85 3.85v10a3.85 3.85 0 01-3.85 3.85h-10a3.85 3.85 0 01-3.85-3.85v-10zM14.1 7.899a.85.85 0 010 1.202l-4 4a.85.85 0 01-1.201 0l-2-2A.85.85 0 118.1 9.899l1.4 1.399 3.399-3.4a.85.85 0 011.202 0zm6.55 1.6a.85.85 0 111.7 0v6.851a5.85 5.85 0 01-5.85 5.85h-7a.85.85 0 010-1.7h7a4.15 4.15 0 004.15-4.15V9.5z",
      stroke: "#1A1A1A",
      strokeWidth: 1.7,
    });
    function nn(e) {
      return s.createElement(
        "svg",
        en(
          {
            width: 24,
            height: 24,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        tn
      );
    }
    n.p;
    function rn() {
      return (
        (rn = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        rn.apply(this, arguments)
      );
    }
    var on = s.createElement("path", {
      fill: "#000",
      fillRule: "evenodd",
      d: "M19.35 16.35V4.65a3 3 0 00-3-3H4.65a3 3 0 00-3 3v11.7a3 3 0 003 3h11.7a3 3 0 003-3zM14.1 7.899a.85.85 0 010 1.202l-4 4a.85.85 0 01-1.201 0l-2-2A.85.85 0 118.1 9.899l1.4 1.399 3.399-3.4a.85.85 0 011.202 0zm6.55 1.6a.85.85 0 111.7 0v6.851a5.85 5.85 0 01-5.85 5.85h-7a.85.85 0 010-1.7h7a4.15 4.15 0 004.15-4.15V9.5z",
      clipRule: "evenodd",
    });
    function sn(e) {
      return s.createElement(
        "svg",
        rn(
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            fill: "none",
          },
          e
        ),
        on
      );
    }
    n.p;
    function cn() {
      return (
        (cn = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        cn.apply(this, arguments)
      );
    }
    var an = s.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.5 3A1.5 1.5 0 001 4.5v1.25c0 .276.228.493.493.57a1.75 1.75 0 010 3.36c-.265.077-.493.294-.493.57v1.25A1.5 1.5 0 002.5 13h11a1.5 1.5 0 001.5-1.5v-1.25c0-.276-.228-.493-.493-.57a1.75 1.75 0 010-3.36c.265-.077.493-.294.493-.57V4.5A1.5 1.5 0 0013.5 3h-11zM11 6.5H5A.75.75 0 015 5h6a.75.75 0 010 1.5z",
      fill: "#334BFA",
    });
    function un(e) {
      return s.createElement(
        "svg",
        cn(
          {
            width: 16,
            height: 16,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        an
      );
    }
    n.p;
    function ln() {
      return (
        (ln = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        ln.apply(this, arguments)
      );
    }
    var dn = s.createElement("path", {
      d: "M11.89 11.889L8 7.999m0 0L4.111 4.112M8.001 8l3.889-3.89M8 8l-3.889 3.889",
      stroke: "#1A1A1A",
      strokeWidth: 1.7,
      strokeLinecap: "round",
    });
    function pn(e) {
      return s.createElement(
        "svg",
        ln(
          {
            width: 16,
            height: 16,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        dn
      );
    }
    n.p;
    function fn() {
      return (
        (fn = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        fn.apply(this, arguments)
      );
    }
    var bn = s.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.223 3.3H14a.7.7 0 01.7.7v8a.7.7 0 01-.7.7H4.223a.7.7 0 01-.7-.7h-1.3a2 2 0 002 2H14a2 2 0 002-2V4a2 2 0 00-2-2H4.223a2 2 0 00-2 2h1.3a.7.7 0 01.7-.7z",
        fill: "#757575",
      }),
      hn = s.createElement("path", {
        d: "M5.658 7.1a1.883 1.883 0 00-.172-.671 1.735 1.735 0 00-.418-.57 1.95 1.95 0 00-.672-.399 2.697 2.697 0 00-.922-.144c-.507 0-.937.103-1.289.308-.351.206-.618.491-.8.856-.183.362-.274.781-.274 1.258v.64c0 .35.046.673.137.973.094.297.237.557.43.781.192.221.437.395.734.52s.65.187 1.059.187c.382 0 .712-.053.988-.16.279-.11.506-.257.683-.441.18-.188.313-.4.399-.637.086-.24.129-.49.129-.75V7.81H3.53v.903h.929v.234a.844.844 0 01-.106.415.78.78 0 01-.32.308 1.116 1.116 0 01-.539.117c-.263 0-.475-.06-.637-.183a1.066 1.066 0 01-.347-.508 2.305 2.305 0 01-.106-.723V7.75c0-.44.091-.78.274-1.02.182-.241.444-.363.785-.363.135 0 .256.019.363.055a.863.863 0 01.48.39.91.91 0 01.102.29h1.25zm2.328 3.642V5.409H6.701v5.333h1.285zm2.524 0V8.73h2.058v-1H10.51V6.44h2.265V5.41h-3.55v5.332h1.285z",
        fill: "#757575",
      });
    function gn(e) {
      return s.createElement(
        "svg",
        fn(
          {
            width: 17,
            height: 16,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        bn,
        hn
      );
    }
    n.p;
    function mn() {
      return (
        (mn = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        mn.apply(this, arguments)
      );
    }
    var vn = s.createElement("circle", {
        cx: 8,
        cy: 8,
        r: 6.725,
        stroke: "#757575",
        strokeWidth: 1.3,
      }),
      yn = s.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.818 7.534a1.1 1.1 0 100-2.2 1.1 1.1 0 000 2.2zm4.364 0a1.1 1.1 0 100-2.2 1.1 1.1 0 000 2.2z",
        fill: "#757575",
      }),
      On = s.createElement("path", {
        d: "M10 10c-.44.604-1.172 1-2 1-.828 0-1.56-.396-2-1",
        stroke: "#757575",
        strokeWidth: 1.3,
        strokeLinecap: "round",
      });
    function _n(e) {
      return s.createElement(
        "svg",
        mn(
          {
            width: 16,
            height: 16,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        vn,
        yn,
        On
      );
    }
    n.p;
    function wn() {
      return (
        (wn = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        wn.apply(this, arguments)
      );
    }
    var jn = s.createElement("path", {
      d: "M5.27 9.512l5.882-5.882a1.685 1.685 0 012.383 2.384l-5.928 5.929A3.314 3.314 0 012.92 7.257l4.149-4.15",
      stroke: "#757575",
      strokeWidth: 1.3,
      strokeMiterlimit: 10,
      strokeLinecap: "round",
    });
    function Cn(e) {
      return s.createElement(
        "svg",
        wn(
          {
            width: 16,
            height: 16,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        jn
      );
    }
    n.p;
    function Sn() {
      return (
        (Sn = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        Sn.apply(this, arguments)
      );
    }
    var En = s.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2zm4.481 4.323c.1.214.157.438.172.672h-1.25a.91.91 0 00-.101-.289.838.838 0 00-.48-.39 1.121 1.121 0 00-.364-.055c-.341 0-.603.12-.785.363-.183.24-.274.58-.274 1.02v.625c0 .268.035.509.106.722.073.214.189.383.347.508.162.122.374.184.637.184.216 0 .396-.04.54-.118a.78.78 0 00.32-.308.844.844 0 00.105-.414v-.235h-.93v-.902h2.14v1.04c0 .26-.042.51-.128.75-.086.236-.219.448-.398.636a1.88 1.88 0 01-.684.441c-.276.107-.605.16-.988.16-.41 0-.762-.062-1.059-.187a1.969 1.969 0 01-.734-.52 2.198 2.198 0 01-.43-.78 3.326 3.326 0 01-.137-.974v-.64c0-.477.091-.896.274-1.258.182-.365.449-.65.8-.855.352-.206.782-.309 1.29-.309.349 0 .656.048.921.144.266.097.49.23.672.399.183.167.322.357.418.57zm2.5-1.02v5.333H7.696V5.304h1.285zm2.524 3.321v2.012H10.22V5.304h3.55v1.031h-2.265v1.289h2.058v1h-2.058z",
      fill: "#334BFA",
    });
    function In(e) {
      return s.createElement(
        "svg",
        Sn(
          {
            width: 16,
            height: 16,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        En
      );
    }
    n.p;
    function An() {
      return (
        (An = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        An.apply(this, arguments)
      );
    }
    var Pn = s.createElement("circle", {
        cx: 8,
        cy: 8,
        r: 6.725,
        fill: "#334BFA",
        stroke: "#334BFA",
        strokeWidth: 1.3,
      }),
      kn = s.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.818 7.534a1.1 1.1 0 100-2.2 1.1 1.1 0 000 2.2zm4.364 0a1.1 1.1 0 100-2.2 1.1 1.1 0 000 2.2z",
        fill: "#fff",
      }),
      Tn = s.createElement("path", {
        d: "M10 10c-.44.604-1.172 1-2 1-.828 0-1.56-.396-2-1",
        stroke: "#fff",
        strokeWidth: 1.3,
        strokeLinecap: "round",
      });
    function Rn(e) {
      return s.createElement(
        "svg",
        An(
          {
            width: 16,
            height: 16,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        Pn,
        kn,
        Tn
      );
    }
    n.p;
    function Mn() {
      return (
        (Mn = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        Mn.apply(this, arguments)
      );
    }
    var xn = s.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.394 14.7L13.75 9.3c1-.577 1-2.02 0-2.598L4.394 1.299a1.5 1.5 0 00-2.25 1.3v3.438l4.059 1.088c.494.132.494.833 0 .966l-4.06 1.087v4.224a1.5 1.5 0 002.25 1.299z",
      fill: "#0057FF",
    });
    function Ln(e) {
      return s.createElement(
        "svg",
        Mn(
          {
            width: 16,
            height: 16,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        xn
      );
    }
    n.p;
    function Dn() {
      return (
        (Dn = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        Dn.apply(this, arguments)
      );
    }
    var Nn = s.createElement("path", {
      d: "M14 18l-6-6 6-6",
      stroke: "#fff",
      strokeWidth: 1.7,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    });
    function Un(e) {
      return s.createElement(
        "svg",
        Dn(
          {
            width: 24,
            height: 24,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        Nn
      );
    }
    n.p;
    function zn() {
      return (
        (zn = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        zn.apply(this, arguments)
      );
    }
    var Bn = s.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.5 5.5a4.5 4.5 0 019 0V8l2.293 2.293c.63.63.184 1.707-.707 1.707H1.914c-.89 0-1.337-1.077-.707-1.707L3.5 8V5.5zm6.5 8.08A2 2 0 116 13.5h3.997l.002.08z",
      fill: "#1A1A1A",
    });
    function Vn(e) {
      return s.createElement(
        "svg",
        zn(
          {
            width: 16,
            height: 16,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        Bn
      );
    }
    n.p;
    function Hn() {
      return (
        (Hn = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        Hn.apply(this, arguments)
      );
    }
    var Fn = s.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13 3.7H3a.3.3 0 00-.3.3v4.632l1.904-1.07a2.85 2.85 0 012.792 0l2.04 1.146c.35.197.778.197 1.127 0L13.3 7.171V4a.3.3 0 00-.3-.3zM2.7 12v-1.418l2.737-1.538a1.15 1.15 0 011.126 0l2.041 1.146a2.85 2.85 0 002.792 0L13.3 9.12V12a.3.3 0 01-.3.3H3a.3.3 0 01-.3-.3zM3 2a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H3zm7.1 5.2a1.1 1.1 0 100-2.2 1.1 1.1 0 000 2.2z",
      fill: "#334BFA",
    });
    function $n(e) {
      return s.createElement(
        "svg",
        Hn(
          {
            width: 16,
            height: 16,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        Fn
      );
    }
    n.p;
    function Gn() {
      return (
        (Gn = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        Gn.apply(this, arguments)
      );
    }
    var Wn = s.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 2a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H3zm3.55 3.106l3.962 2.288a.7.7 0 010 1.212L6.55 10.894a.7.7 0 01-1.05-.606V5.712a.7.7 0 011.05-.606z",
      fill: "#737376",
    });
    function qn(e) {
      return s.createElement(
        "svg",
        Gn(
          {
            width: 16,
            height: 16,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        Wn
      );
    }
    n.p;
    function Jn() {
      return (
        (Jn = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        Jn.apply(this, arguments)
      );
    }
    var Kn = s.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.67 2.507a.85.85 0 010 1.202L3.524 7.855a2.464 2.464 0 003.485 3.484l5.925-5.926a.836.836 0 00-1.181-1.182L5.87 10.113A.85.85 0 014.67 8.91l5.882-5.882a2.536 2.536 0 013.585 3.586l-5.934 5.934a4.164 4.164 0 01-5.889-5.887l.006-.006 4.149-4.149a.85.85 0 011.202 0z",
      fill: "#334BFA",
    });
    function Zn(e) {
      return s.createElement(
        "svg",
        Jn(
          {
            width: 16,
            height: 16,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        Kn
      );
    }
    n.p;
    var Yn = n(105);
    var Qn = ({ color: e }) => {
      const t = Object(Yn.a)(),
        n = (t && e && t[e]) || "#000";
      return s.createElement(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        s.createElement("path", {
          d: "M12.3477 4.50696H8.09214C5.33264 4.50696 3.09562 6.74398 3.09562 9.50348C3.09562 12.263 5.33264 14.5 8.09214 14.5C10.384 14.5 12.3155 12.9569 12.9043 10.853M12.3477 4.50696L9.34051 1.5M12.3477 4.50696L9.34051 7.51412",
          stroke: n,
          strokeWidth: "1.7",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          style: { fill: "none" },
        })
      );
    };
    function Xn({ color: e }) {
      const t = Object(Yn.a)(),
        n = (t && e && t[e]) || "#fff";
      return s.createElement(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        s.createElement("path", {
          d: "M7.99994 12V7",
          stroke: n,
          strokeWidth: "1.7",
        }),
        s.createElement("circle", {
          cx: "1.1",
          cy: "1.1",
          r: "1.1",
          transform: "matrix(1 0 0 -1 6.89993 6.2002)",
          fill: n,
          strokeWidth: "0",
          stroke: "none",
        }),
        s.createElement("circle", {
          cx: "8",
          cy: "8",
          r: "6.5",
          stroke: n,
          strokeWidth: "1.75",
        })
      );
    }
    function er() {
      return (
        (er = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        er.apply(this, arguments)
      );
    }
    var tr = s.createElement("path", {
      d: "M2 0h14s2 0 2 2v10s0 2-2 2H2s-2 0-2-2V2s0-2 2-2m4.852 11H9L6.803 3.25H4.392L2.2 11h1.955l.37-1.703h1.967L6.852 11zm-1.38-6.005h.101l.613 2.884H4.837l.634-2.884zM15.015 11V9.416h-1.633V4.834h1.633V3.25H9.784v1.584h1.633v4.582H9.784V11h5.232z",
      fill: "#000",
    });
    function nr(e) {
      return s.createElement(
        "svg",
        er(
          {
            width: 18,
            height: 14,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        tr
      );
    }
    n.p;
    var rr = n(255);
    n.d(t, "NotificationsIcon", function () {
      return r.a;
    }),
      n.d(t, "Alert", function () {
        return i.a;
      }),
      n.d(t, "AskQuestion", function () {
        return o.a;
      }),
      n.d(t, "AskQuestionSquare", function () {
        return l;
      }),
      n.d(t, "Attachement", function () {
        return d.a;
      }),
      n.d(t, "Article", function () {
        return b;
      }),
      n.d(t, "Bio", function () {
        return h.a;
      }),
      n.d(t, "ButtonSubmit", function () {
        return g.a;
      }),
      n.d(t, "ButtonSuccess", function () {
        return m.a;
      }),
      n.d(t, "ChatBubble", function () {
        return v.a;
      }),
      n.d(t, "ChatWithUs", function () {
        return O;
      }),
      n.d(t, "Check", function () {
        return _.a;
      }),
      n.d(t, "Clock", function () {
        return w.a;
      }),
      n.d(t, "CloseButton", function () {
        return j.a;
      }),
      n.d(t, "Close", function () {
        return C.a;
      }),
      n.d(t, "Collapse", function () {
        return S.a;
      }),
      n.d(t, "Download", function () {
        return E.a;
      }),
      n.d(t, "EmojiPickerActive", function () {
        return I.a;
      }),
      n.d(t, "EmojiPicker", function () {
        return A.a;
      }),
      n.d(t, "Error", function () {
        return P.a;
      }),
      n.d(t, "Expander", function () {
        return k.a;
      }),
      n.d(t, "ExternalLink", function () {
        return M;
      }),
      n.d(t, "GifPickerActive", function () {
        return x.a;
      }),
      n.d(t, "GifPicker", function () {
        return L.a;
      }),
      n.d(t, "HelpCenter", function () {
        return D.a;
      }),
      n.d(t, "JobTitle", function () {
        return N.a;
      }),
      n.d(t, "Launcher", function () {
        return U.a;
      }),
      n.d(t, "LauncherMinimize", function () {
        return z.a;
      }),
      n.d(t, "LeftCaret", function () {
        return B.a;
      }),
      n.d(t, "List", function () {
        return F;
      }),
      n.d(t, "Location", function () {
        return $.a;
      }),
      n.d(t, "New", function () {
        return G;
      }),
      n.d(t, "NewConversation", function () {
        return J;
      }),
      n.d(t, "NewMessage", function () {
        return K.a;
      }),
      n.d(t, "OpenInNewWindow", function () {
        return Z.a;
      }),
      n.d(t, "Paragraph", function () {
        return Y;
      }),
      n.d(t, "ProductTour", function () {
        return Q.a;
      }),
      n.d(t, "RightChevron", function () {
        return X.a;
      }),
      n.d(t, "RightChevronColorable", function () {
        return ee.a;
      }),
      n.d(t, "RightChevronSmall", function () {
        return te.a;
      }),
      n.d(t, "Search", function () {
        return ne.a;
      }),
      n.d(t, "SelfServe", function () {
        return re.a;
      }),
      n.d(t, "Send", function () {
        return ie.a;
      }),
      n.d(t, "Sla", function () {
        return se;
      }),
      n.d(t, "SurveyStar", function () {
        return ce.a;
      }),
      n.d(t, "Ticket", function () {
        return ae.a;
      }),
      n.d(t, "VideoPause", function () {
        return ue.a;
      }),
      n.d(t, "VideoPlay", function () {
        return le.a;
      }),
      n.d(t, "VideoReplay", function () {
        return de.a;
      }),
      n.d(t, "DescriptionIcon", function () {
        return pe.a;
      }),
      n.d(t, "WeRunOnIntercom", function () {
        return fe.a;
      }),
      n.d(t, "GreyInfoIcon", function () {
        return ve;
      }),
      n.d(t, "LeftCaretM5", function () {
        return _e;
      }),
      n.d(t, "ClockM5", function () {
        return Ce;
      }),
      n.d(t, "Expand", function () {
        return Ie;
      }),
      n.d(t, "UnreadIndicator", function () {
        return Ae;
      }),
      n.d(t, "ArticleIcon", function () {
        return Re;
      }),
      n.d(t, "ArticleOpenBook", function () {
        return Le;
      }),
      n.d(t, "ArticleFeedback", function () {
        return Be;
      }),
      n.d(t, "Person", function () {
        return $e;
      }),
      n.d(t, "Quote", function () {
        return qe;
      }),
      n.d(t, "LinkedInSocial", function () {
        return Ze;
      }),
      n.d(t, "TwitterSocial", function () {
        return Xe;
      }),
      n.d(t, "Calendar", function () {
        return nt;
      }),
      n.d(t, "TopCaret", function () {
        return ot;
      }),
      n.d(t, "HelpActive", function () {
        return lt;
      }),
      n.d(t, "Help", function () {
        return ht;
      }),
      n.d(t, "HomeActive", function () {
        return Ot;
      }),
      n.d(t, "Home", function () {
        return Ct;
      }),
      n.d(t, "MessagesActive", function () {
        return Pt;
      }),
      n.d(t, "Messages", function () {
        return xt;
      }),
      n.d(t, "NewsActive", function () {
        return Nt;
      }),
      n.d(t, "News", function () {
        return Ht;
      }),
      n.d(t, "TicketsActive", function () {
        return Gt;
      }),
      n.d(t, "Tickets", function () {
        return Zt;
      }),
      n.d(t, "Rocket", function () {
        return Xt;
      }),
      n.d(t, "Task", function () {
        return nn;
      }),
      n.d(t, "TaskActive", function () {
        return sn;
      }),
      n.d(t, "TicketSmall", function () {
        return un;
      }),
      n.d(t, "CloseM5", function () {
        return pn;
      }),
      n.d(t, "ComposerGif", function () {
        return gn;
      }),
      n.d(t, "ComposerEmoji", function () {
        return _n;
      }),
      n.d(t, "ComposerAttachment", function () {
        return Cn;
      }),
      n.d(t, "ComposerGifActive", function () {
        return In;
      }),
      n.d(t, "ComposerEmojiActive", function () {
        return Rn;
      }),
      n.d(t, "ComposerSend", function () {
        return Ln;
      }),
      n.d(t, "ChevronBack", function () {
        return Un;
      }),
      n.d(t, "Bell", function () {
        return Vn;
      }),
      n.d(t, "Photo", function () {
        return $n;
      }),
      n.d(t, "Video", function () {
        return qn;
      }),
      n.d(t, "Attachment", function () {
        return Zn;
      }),
      n.d(t, "Retry", function () {
        return Qn;
      }),
      n.d(t, "Info", function () {
        return Xn;
      }),
      n.d(t, "AI", function () {
        return nr;
      }),
      n.d(t, "AICurved", function () {
        return rr.a;
      });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "e", function () {
      return u;
    }),
      n.d(t, "d", function () {
        return l;
      }),
      n.d(t, "b", function () {
        return b;
      }),
      n.d(t, "a", function () {
        return m;
      }),
      n.d(t, "c", function () {
        return v;
      }),
      n.d(t, "f", function () {
        return y;
      });
    var r = n(45),
      i = n(11),
      o = n(335),
      s = n(0),
      c = n(3),
      a = n(13);
    function u() {
      return l(c.c, "messengerPrefetchSpaceData");
    }
    function l(e, t = "unknown", n = 1, o = 10) {
      return (s, c) => {
        s(d());
        const u = c(),
          { session: l, app: b } = u,
          h = Object(a.i)(u);
        return e
          .getConversations(l, {
            source: t,
            page: n,
            perPage: o,
            selfServeSuggestionsMatch: b.selfServeSuggestionsMatch,
          })
          .then((t) => {
            t.conversations.forEach((t) => {
              Object(i.v)(t).forEach((t) => {
                s(Object(r.a)(e, t));
              });
            }),
              s(y(t)),
              s(p(t, h));
          })
          .catch(() => {
            s(f());
          });
      };
    }
    function d() {
      return { type: s.Nb };
    }
    function p(e, t) {
      return { type: s.Ob, conversations: e, m5Enabled: t };
    }
    function f(e) {
      return { type: s.Mb, error: e };
    }
    function b(e, t) {
      return (n, r) => {
        n(h(t));
        const { session: i } = r();
        return e.dismissNotifications(i, t).then(() => n(g(t)));
      };
    }
    function h(e) {
      return { type: s.gb, conversationIds: e };
    }
    function g(e) {
      return { type: s.hb, conversationIds: e };
    }
    function m(e) {
      return { type: s.C, scrollPosition: e };
    }
    function v(e) {
      return { type: s.kb, conversationId: e };
    }
    function y(e) {
      return (t) => {
        const n = e.conversations;
        n &&
          n.forEach((e) => {
            Object(i.p)(e) && e.read && t(Object(o.a)(e.id));
          });
      };
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "e", function () {
      return a;
    }),
      n.d(t, "g", function () {
        return u;
      }),
      n.d(t, "f", function () {
        return l;
      }),
      n.d(t, "d", function () {
        return d;
      }),
      n.d(t, "h", function () {
        return f;
      }),
      n.d(t, "a", function () {
        return b;
      }),
      n.d(t, "i", function () {
        return h;
      }),
      n.d(t, "c", function () {
        return g;
      }),
      n.d(t, "b", function () {
        return v;
      });
    var r = n(9),
      i = n.n(r),
      o = n(2),
      s = n(87),
      c = n(20);
    const a = Object(o.createSelector)(
        (e) => e.checklists,
        (e) => e
      ),
      u = Object(o.createSelector)(
        a,
        (e) =>
          e
            .filter((e) => e.status !== s.b.Complete)
            .sort(
              (e, t) => t.publishedAt.getTime() - e.publishedAt.getTime()
            )[0]
      ),
      l = Object(o.createSelector)(a, (e) => e.length > 1),
      d = (e) =>
        Object(o.createSelector)(a, (t) =>
          t.length ? t.find((t) => t.checklistProgressId === e) : void 0
        ),
      p = Object(o.createSelector)(a, (e) =>
        i()(e)
          ? []
          : null == e
          ? void 0
          : e.flatMap((e) => e.taskGroups.flatMap((e) => e.tasks))
      ),
      f = Object(o.createSelector)(p, (e) =>
        e
          ? e.filter((e) => e.hasNonContentEventPredicates && !e.isComplete)
          : []
      ),
      b = Object(o.createSelector)(a, (e) =>
        e.sort((e, t) =>
          e.status === s.b.Complete && Object(c.a)(e)
            ? 1
            : t.status === s.b.Complete && Object(c.a)(t)
            ? -1
            : t.publishedAt.getTime() - e.publishedAt.getTime()
        )
      ),
      h = () =>
        Object(o.createSelector)(a, (e) => {
          const t =
            null == e
              ? void 0
              : e.filter(
                  (e) => e.status === s.b.New && "full" === e.deliveryOption
                );
          if (null != t && t.length) return Object(c.f)(t);
        }),
      g = Object(o.createSelector)(a, (e) =>
        e
          .filter(
            (e) =>
              ((e.status === s.b.New && "snippet" === e.deliveryOption) ||
                e.shouldRenotify) &&
              !e.dismissed
          )
          .map((e) => ({
            type: "checklist",
            data: e,
            receivedAt: e.publishedAt,
          }))
      ),
      m = Object(o.createSelector)(a, (e) =>
        e
          .filter((e) => e.status === s.b.New)
          .map((e) => ({
            type: "checklist",
            data: e,
            receivedAt: e.publishedAt,
          }))
      ),
      v = Object(o.createSelector)(m, (e) => e.length || 0);
  },
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return c;
    });
    var r = n(210),
      i = n.n(r),
      o = n(332),
      s = n.n(o);
    const c = (e) => {
      if (!i()(e)) return e;
      const t = {};
      return (
        Object.keys(e).forEach((n) => {
          let r = c(e[n]);
          Array.isArray(r) && (r = r.map((e) => c(e))), (t[s()(n)] = r);
        }),
        t
      );
    };
  },
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return r;
    }),
      n.d(t, "c", function () {
        return i;
      }),
      n.d(t, "a", function () {
        return o;
      }),
      n.d(t, "d", function () {
        return s;
      });
    const r = {
        checklists: "checklists",
        checklistDetails: (e) => `${r.checklists}/${e}`,
        checklistCompletionScreen: (e) => `${r.checklists}/complete/${e}`,
      },
      i = 5,
      o = 864e5,
      s = (e) => {
        e({
          particleCount: 100,
          spread: 50,
          origin: { y: 0.3 },
          ticks: 800,
          gravity: 2,
          scalar: 1.3,
        });
      };
  },
  function (e, t, n) {
    "use strict";
    var r = n(9),
      i = n.n(r),
      o = n(132),
      s = n(15),
      c = n(80),
      a = n(49),
      u = n(109),
      l = n(3),
      d = n(51),
      p = n(10),
      f = n(110),
      b = n(182),
      h = n(211);
    var g = n(4),
      m = n(27);
    const v = (e) => {
        let t;
        return (...n) => {
          const r = () => e(...n);
          return (t = Promise.resolve(t).then(r, r)), t;
        };
      },
      y = (e, t, n, r) => {
        let i = 0,
          o = 0;
        return (...s) => {
          const c = m.b.now();
          return (
            c - o >= n && ((i = 0), (o = c)),
            i++,
            i <= t
              ? e(...s)
              : (Object(g.c)(`rate_limiting.${r}`),
                Object(g.g)(
                  `rate_limit_check_${r}`,
                  { rate_limited: !0, rate_limit_count: n },
                  !0
                ),
                Promise.reject("rate_limited_update"))
          );
        };
      };
    var O = n(21),
      _ = n(16),
      w = n(82),
      j = n(41),
      C = n(48),
      S = n(33),
      E = n(18),
      I = n(22);
    const A =
        "https://docs.intercom.com/configure-intercom-for-your-product-or-site/staying-secure/enable-identity-verification-on-your-web-product",
      P = {
        IDENTITY_VERIFICATION_READY_WARNING: `Intercom Messenger warning: Identity Verification is set up correctly but not enabled. For details on how to enable it, see ${A}.`,
        IDENTITY_VERIFICATION_FAILURE_WITH_USER_ID_WARNING: `Intercom Messenger warning: Your Identity Verification user_hash is invalid. Check that you are generating the user_hash with your user's user_id and your app's secret key. For more details, see ${A}.`,
        IDENTITY_VERIFICATION_FAILURE_WITH_EMAIL_WARNING: `Intercom Messenger warning: Your Identity Verification user_hash is invalid. Check that you are generating the user_hash with your user's email and your app's secret key. For more details, see ${A}.`,
      };
    var k = n(29),
      T = n.n(k),
      R = n(17),
      M = n(104),
      x = n(31),
      L = n(0),
      D = n(146),
      N = n(76),
      U = n(52),
      z = n(20);
    n.d(t, "b", function () {
      return $;
    }),
      n.d(t, "d", function () {
        return Y;
      }),
      n.d(t, "a", function () {
        return Q;
      }),
      n.d(t, "f", function () {
        return X;
      }),
      n.d(t, "e", function () {
        return ee;
      });
    const B = T()("intercom.actions.user");
    let V, H;
    const F = ((e, t = 6e4, n = 0) => {
      let r;
      const i = () => {
          r = [];
        },
        o = (...i) => {
          const o = e(...i),
            s = r.findIndex((e) => e.key === o),
            c = Date.now();
          return (
            (s > -1 && !((e, n) => e - n.createdAt > t)(c, r[s])) ||
            (n > 0 && r.length === n && r.shift(),
            (r[Math.max(s, 0)] = { key: o, createdAt: c }),
            !1)
          );
        };
      return (o.reset = i), i(), o;
    })(
      (e, t, n, r) => {
        const { email: i, userId: o, userHash: s, anonymousId: c } = e;
        return JSON.stringify(
          Object.assign(
            { encryptedPayload: r },
            { url: t, email: i, userId: o, userHash: s, anonymousId: c },
            n
          )
        );
      },
      6e4,
      1
    );
    function $(e, t, n, r, l, m, v, y = !1, A, P = "unknown", k, T, R) {
      return async (L, B) => {
        var $, J, K, Z, Y, Q, X, ee, ne, se, ce, ae, ue, le;
        let de,
          { app: pe, session: fe } = B();
        if (
          ((!V ||
            (H !== n &&
              pe &&
              pe.features &&
              pe.features.singlePageAppRateLimiting)) &&
            te(n),
          (fe = t || fe),
          fe.sessionId || (fe.sessionId = S.a.generateUUID()),
          L(G(fe, n, r, l, m, v, k, T)),
          !y && F(fe, n, r, A))
        )
          return null;
        try {
          de = await V(e, B, r, A, P, k, T);
        } catch (e) {
          const t = Object(w.c)(e);
          if ("403" === Object(w.b)(t) && R)
            return (
              Object(I.b)(
                "This domain is not allowed for the Intercom Messenger. Add your domain here: https://app.intercom.com/a/apps/_/messenger"
              ),
              R(!0),
              null
            );
          t &&
            t.find((e) => "App Not Found" === e.message) &&
            Object(I.b)(
              "The App ID in your code snippet is incorrect. Change it to your App ID found in settings to complete installation: http://app.intercom.com/a/apps/_/settings/web"
            );
          L(q(e, oe(e)));
          const n = Object(w.a)(e);
          return n && L(Object(h.c)(n)), null;
        }
        Object(g.p)(de),
          Object(M.e)(
            null === ($ = de.app) || void 0 === $
              ? void 0
              : $.isOverrideSamplingEnabled
          );
        const {
          errors: be,
          installModeConfig: he,
          notificationLinkConversationId: ge,
        } = de;
        if ((he && L(Object(h.c)(he)), be)) return null;
        if (
          (ie(de, fe, he),
          re(de),
          L(W(de)),
          L(Object(N.d)(de.app.home.header)),
          L(Object(D.c)(de.newsfeedId)),
          de.newConversationComposerState &&
            L(Object(p.s)(de.newConversationComposerState)),
          L(Object(C.b)()),
          L(Object(a.b)()),
          L(Object(a.a)()),
          L(Object(x.b)()),
          L(
            Object(f.a)({
              color: de.app.color,
              secondaryColor: de.app.secondaryColor,
            })
          ),
          ge && L(Object(s.c)(ge)),
          (null === (J = de.unreadConversationIds) || void 0 === J
            ? void 0
            : J.length) > 0)
        ) {
          const t = B();
          Object(b.a)(t, de.unreadConversationIds)
            ? L(Object(p.m)(e, t.app.conversationId))
            : L(Object(d.d)(e, "createOrUpdateUser"));
        }
        !Object(E.k)() &&
          de.app.features.launcherDiscoveryMode &&
          L(Object(o.e)());
        const { activeTour: me } = de,
          ve =
            null ===
              (K = Object(j.a)(
                null === (Z = window) ||
                  void 0 === Z ||
                  null === (Y = Z.parent) ||
                  void 0 === Y
                  ? void 0
                  : Y.location
              )) || void 0 === K
              ? void 0
              : K.product_tour_id;
        i()(me) ||
          (i()(ve)
            ? L(Object(C.l)(me))
            : ve === me.id
            ? (Object(_.e)(
                `Active tour with id ${me.id} is the same as the query params so starting tour`
              ),
              L(Object(C.l)(me)))
            : Object(_.e)(
                `Tour with id ${me.id} received from ping won't start because there is a tourId in the query params`
              ));
        const { banners: ye } = de;
        i()(ye) || L(Object(c.f)(ye));
        const { tooltipGroups: Oe } = de;
        i()(Oe) || L(Object(u.f)(Oe));
        const { survey: _e } = de,
          we =
            (null ===
              (Q = Object(j.a)(
                null === (X = window) ||
                  void 0 === X ||
                  null === (ee = X.parent) ||
                  void 0 === ee
                  ? void 0
                  : ee.location
              )) || void 0 === Q
              ? void 0
              : Q.intercom_survey_id) ||
            (null ===
              (ne = Object(j.a)(
                null === (se = window) ||
                  void 0 === se ||
                  null === (ce = se.parent) ||
                  void 0 === ce
                  ? void 0
                  : ce.location
              )) || void 0 === ne
              ? void 0
              : ne.intercom_email_survey_id);
        i()(_e) ||
          (i()(we)
            ? L(Object(a.g)(_e))
            : parseInt(we) === _e.rulesetId
            ? (Object(O.g)(
                `Active survey with id ${_e.id} is the same as the query params so starting survey`
              ),
              L(Object(a.g)(_e)))
            : Object(O.g)(
                `Survey with id ${_e.id} received from ping won't start because there is a Survey in the query params`
              ));
        const { checklists: je } = de,
          Ce =
            null ===
              (ae = Object(j.a)(
                null === (ue = window) ||
                  void 0 === ue ||
                  null === (le = ue.parent) ||
                  void 0 === le
                  ? void 0
                  : le.location
              )) || void 0 === ae
              ? void 0
              : ae.intercom_checklist_id;
        if (!i()(je)) {
          L(Object(x.k)(je, i()(Ce)));
          const e = B(),
            t = Object(U.h)(e);
          (null == t ? void 0 : t.length) > 0
            ? Object(z.i)(e.checklists)
              ? (Object(z.b)(
                  "Checklists received from ping are recently active - resolving as normal."
                ),
                L(Object(x.o)()))
              : (Object(z.b)(
                  "Checklists received from ping are not recently active - resolving with throttling."
                ),
                L(Object(x.p)()))
            : Object(z.b)(
                "Checklists received from ping do not contain auto-resolve rules that require background resolving."
              );
        }
        return de;
      };
    }
    function G(e, t, n, r, i, o, s, c) {
      return {
        type: L.Q,
        session: e,
        url: t,
        customAttributes: n,
        launcherEnabledOverride: r,
        anonymousSessionDuration: i,
        customizationAttributes: o,
        internal: s,
        isIntersectionBooted: c,
      };
    }
    function W(e) {
      return { type: L.R, user: e };
    }
    function q(e, t = !1) {
      return { type: L.P, error: e, isIdentityVerificationError: t };
    }
    function J() {
      return { type: L.kc };
    }
    function K(e) {
      return { type: L.lc, response: e };
    }
    function Z(e) {
      return { type: L.jc, error: e };
    }
    function Y() {
      return { type: L.dd };
    }
    function Q(e) {
      return { type: L.g, anonymousSession: e };
    }
    function X() {
      return { type: L.ye };
    }
    function ee() {
      return { type: L.we };
    }
    function te(e) {
      ne(30, 18e5, e);
    }
    function ne(e, t, n) {
      (H = n),
        (V = ((e, t, n, r) => v(y(e, t, n, r)))(
          (e, t, n, r, i, o, s) => {
            const { session: c } = t();
            return e.createOrUpdateUser(
              c,
              n,
              void 0,
              r,
              i,
              o,
              s,
              Object(g.n)()
            );
          },
          e,
          t,
          "user_update"
        ));
    }
    function re(e) {
      const t = e.cdasBreachingLimit;
      if (!t.length) return;
      const n = 1 === t.length ? "attribute" : "attributes",
        r = t.join(", ");
      Object(I.b)(
        `You have reached your CDA limit and we were not able to create or update the following ${n}: ${r}. For more details, see: https://www.intercom.com/help/configure-intercom/customize-intercom-to-be-about-your-users/send-custom-user-attributes-to-intercom`
      );
    }
    function ie(e, t, n = {}) {
      const { userHash: r, userId: i, email: o } = t,
        { secureInstallV2: s, secureInstallV3: c } = n;
      if (s || c) {
        if (!i && !o) return;
      } else if (!r) return;
      const a = (function (e, t) {
        if (e.identityVerificationReady)
          return P.IDENTITY_VERIFICATION_READY_WARNING;
        if (!e.identityVerified && t.userId)
          return P.IDENTITY_VERIFICATION_FAILURE_WITH_USER_ID_WARNING;
        if (!e.identityVerified && !t.userId)
          return P.IDENTITY_VERIFICATION_FAILURE_WITH_EMAIL_WARNING;
        return null;
      })(e, t);
      a && Object(I.b)(a);
    }
    function oe(e) {
      const t = Object(w.c)(e);
      if (!t) return !1;
      let n = !1;
      return (
        t.forEach((e) => {
          -1 !== e.code.indexOf("identity_verification") &&
            ((n = !0),
            Object(I.a)(
              `Intercom Messenger error: ${e.message} For more details, see ${A}.`
            ));
        }),
        n
      );
    }
    t.c = {
      createOrUpdateUser: $,
      createOrUpdateUserRequest: G,
      createOrUpdateUserSuccess: W,
      createOrUpdateUserFailure: q,
      sendMessengerOpen: function (e) {
        return async (t, n) => {
          const r = n(),
            i = Object(R.i)(r),
            { session: o } = r;
          let s;
          t(J());
          try {
            s = await e.sendMessengerOpen(o, i);
          } catch (e) {
            return B("Request to messenger open failed", e), t(Z(e)), null;
          }
          return t(K(s)), s;
        };
      },
      messengerOpenRequestSent: J,
      messengerOpenRequestSuccess: K,
      messengerOpenRequestFailed: Z,
      messengerOpenHandled: function () {
        return { type: L.ic };
      },
      destroySession: function (e = !0) {
        return { type: L.bb, clearCookies: e };
      },
      anonymousSessionChanged: Q,
      userIsPresent: X,
      userIsAbsent: ee,
      createEvent: function (e, t, n) {
        return (r, i) => {
          const { session: o } = i();
          if (o)
            return (
              r({ type: L.N, name: t, metadata: n }),
              e
                .createEvent(o, t, n)
                .then((t) => {
                  const { banner: n, customBot: i, survey: o, tour: s } = t;
                  return (
                    n
                      ? r(Object(c.f)([n]))
                      : s
                      ? r(Object(C.l)(s))
                      : o && r(Object(a.g)(o)),
                    i && r(Object(p.p)(e, Object(l.a)(i))),
                    t
                  );
                })
                .catch(() => r({ type: L.O }))
            );
        };
      },
      setupCreateOrUpdateUserRateLimiting: ne,
      setupDefaultCreateOrUpdateUserRateLimiting: te,
      isDuplicateCreateOrUpdateUserRequest: F,
      checkCdasBreachingLimit: re,
      checkIdentityVerificationInstall: ie,
      checkIdentityVerificationError: oe,
    };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return r;
    }),
      n.d(t, "d", function () {
        return i;
      }),
      n.d(t, "a", function () {
        return o;
      }),
      n.d(t, "b", function () {
        return s;
      });
    const r = "initialising",
      i = "pending",
      o = "connected",
      s = "disconnected";
  },
  function (e, t, n) {
    "use strict";
    var r = n(38);
    n.d(t, "a", function () {
      return o;
    }),
      n.d(t, "d", function () {
        return s;
      }),
      n.d(t, "c", function () {
        return c;
      }),
      n.d(t, "b", function () {
        return a;
      }),
      n.d(t, "e", function () {
        return d;
      });
    const i = [],
      o = (e) => {
        e.document.getElementById("intercom-viewport-meta") ||
          (u(e),
          ((e) => {
            const t = document.createElement("meta");
            (t.id = "intercom-viewport-meta"),
              (t.name = "viewport"),
              (t.content =
                "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"),
              e.document.getElementsByTagName("head")[0].appendChild(t);
          })(e));
      },
      s = (e) => {
        const t = e.document.getElementById("intercom-viewport-meta");
        t && (t.parentNode.removeChild(t), l(e));
      },
      c = () => {
        const e = Object(r.c)();
        return (
          e.innerWidth <= 450 || (e.innerWidth <= 900 && e.innerHeight <= 450)
        );
      },
      a = () => {
        const e = Object(r.c)();
        return c() && e.innerWidth > e.innerHeight;
      },
      u = (e) => {
        [].slice.call(e.document.getElementsByTagName("meta")).forEach((e) => {
          "viewport" === e.name &&
            (i.push(e.cloneNode()), e.parentNode.removeChild(e));
        });
      },
      l = (e) => {
        const t = i.length;
        for (let n = 0; n < t; n++)
          e.document.getElementsByTagName("head")[0].appendChild(i.pop());
      },
      d = () => {
        try {
          c() &&
            !window.parent.navigator.standalone &&
            window.parent.scrollTo(0, 0);
        } catch (e) {}
      };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return o;
    }),
      n.d(t, "k", function () {
        return s;
      }),
      n.d(t, "g", function () {
        return c;
      }),
      n.d(t, "e", function () {
        return a;
      }),
      n.d(t, "h", function () {
        return u;
      }),
      n.d(t, "j", function () {
        return l;
      }),
      n.d(t, "i", function () {
        return d;
      }),
      n.d(t, "f", function () {
        return p;
      }),
      n.d(t, "a", function () {
        return f;
      }),
      n.d(t, "d", function () {
        return b;
      }),
      n.d(t, "b", function () {
        return h;
      }),
      n.d(t, "l", function () {
        return g;
      });
    var r = n(2);
    const i = (e) => e.browseMode,
      o = Object(r.createSelector)(i, ({ isOpen: e }) => e),
      s = Object(r.createSelector)(i, ({ fetchedCollections: e }) => !e),
      c = Object(r.createSelector)(i, ({ routedToNewConversation: e }) => e),
      a = (e) => {
        var t;
        return null === (t = e.browseMode) || void 0 === t ? void 0 : t.phrase;
      },
      u = (e) => {
        var t;
        return null === (t = e.browseMode) || void 0 === t
          ? void 0
          : t.searchedPhrase;
      },
      l = (e) => {
        var t;
        return null === (t = e.browseMode) || void 0 === t
          ? void 0
          : t.searchResults;
      },
      d =
        (Object(r.createSelector)(i, (e) => e.articleHistory || []),
        Object(r.createSelector)(i, (e) => e.skipOpenAnimation)),
      p = Object(r.createSelector)(
        o,
        c,
        d,
        (e) => e.user,
        (e, t, n, r) => ({
          isOpen: e,
          transitioningToNewConversation: t,
          skipOpenAnimation: n,
          user: r,
        })
      ),
      f = Object(r.createSelector)(i, ({ hasViewedAnArticle: e }) => e),
      b = Object(r.createSelector)(
        i,
        ({ phrase: e, hideResultsWithDelay: t, searchResults: n }) =>
          (e || t) && 0 === n.length
      ),
      h = Object(r.createSelector)(i, ({ closeTransitionEnded: e } = {}) => !e),
      g = Object(r.createSelector)(
        i,
        ({ hasSearchResults: e, showSearchResults: t }) => e || t
      );
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return a;
    }),
      n.d(t, "a", function () {
        return u;
      }),
      n.d(t, "d", function () {
        return l;
      }),
      n.d(t, "b", function () {
        return d;
      }),
      n.d(t, "f", function () {
        return f;
      }),
      n.d(t, "e", function () {
        return b;
      }),
      n.d(t, "g", function () {
        return h;
      }),
      n.d(t, "h", function () {
        return v;
      }),
      n.d(t, "i", function () {
        return y;
      });
    var r = n(23),
      i = n(13),
      o = n(2),
      s = n(61),
      c = n(62);
    const a = (e) => e.article || {},
      u = Object(o.createSelector)(
        a,
        (e) => e.articles || {},
        (e, t) => t[e.activeArticleId]
      ),
      l = (e) => e.article.inSearchBrowse && e.article.activeArticleId,
      d = (e) => e.article.fromHomeScreenSuggestions,
      p = Object(o.createSelector)(l, d, (e, t) => e || t),
      f = Object(o.createSelector)(u, p, (e, t) => (t ? e : null)),
      b = (e) => {
        var t, n;
        return (
          (null === (t = e.router) ||
          void 0 === t ||
          null === (n = t.location) ||
          void 0 === n
            ? void 0
            : n.pathname) === `/${r.a.id}`
        );
      },
      h = Object(o.createSelector)(
        u,
        l,
        c.c,
        (e) => e.article.isStandalone,
        i.i,
        b,
        (e, t, n, r, i, o) =>
          !!r || (i ? null !== e && t && o : null !== e && t && n)
      ),
      g = (e) => e.article.isLoaded,
      m = Object(o.createSelector)(
        (e) => !!e.chrome.expansionTransitionComplete,
        s.c,
        (e, t) => !(!t && !e)
      ),
      v = Object(o.createSelector)(g, m, (e, t) => e && t),
      y = Object(o.createSelector)(g, m, (e, t) => !e && t);
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "n", function () {
      return u;
    }),
      n.d(t, "k", function () {
        return l;
      }),
      n.d(t, "a", function () {
        return d;
      }),
      n.d(t, "b", function () {
        return p;
      }),
      n.d(t, "e", function () {
        return b;
      }),
      n.d(t, "d", function () {
        return h;
      }),
      n.d(t, "f", function () {
        return g;
      }),
      n.d(t, "g", function () {
        return m;
      }),
      n.d(t, "l", function () {
        return v;
      }),
      n.d(t, "m", function () {
        return y;
      }),
      n.d(t, "c", function () {
        return O;
      }),
      n.d(t, "h", function () {
        return _;
      }),
      n.d(t, "i", function () {
        return w;
      }),
      n.d(t, "j", function () {
        return j;
      });
    var r = n(342),
      i = n(4),
      o = n(25),
      s = n(3),
      c = n(13),
      a = n(0);
    function u(e, t) {
      return (n) => {
        "" !== e && n(Object(r.a)(e)),
          n({ type: a.oe, phrase: e, hideResultsWithDelay: t });
      };
    }
    function l(e) {
      return (t, n) => {
        const r = n(),
          { user: s } = r,
          u = Object(c.i)(r) ? o.b : o.f,
          l = Object(c.i)(r) ? o.B : o.F;
        Object(i.h)(s, "clicked", o.o, l, u, { collection_id: e }),
          t({ type: a.qd, collectionId: e });
      };
    }
    function d({ object: e, place: t, context: n, metadata: r = {} }) {
      return f({
        action: "clicked",
        object: e,
        place: t,
        context: n,
        metadata: r,
      });
    }
    function p({ object: e, place: t, context: n, metadata: r = {} }) {
      return f({
        action: "viewed",
        object: e,
        place: t,
        context: n,
        metadata: r,
      });
    }
    function f({
      action: e,
      object: t,
      place: n,
      context: r = "messenger",
      metadata: o = {},
    }) {
      return (s, c) => {
        const a = c(),
          { user: u } = a;
        Object(i.h)(u, e, t, n, r, o);
      };
    }
    function b() {
      return (e, t) => {
        const n = t(),
          { articleCollections: r } = n;
        e(v()), 1 === r.length && e(l(r[0].id));
      };
    }
    function h() {
      return (e, t) => {
        const n = t(),
          { session: r } = n,
          i = Object(c.i)(n);
        Object(s.f)(r).then(
          ({ articleCollections: t, articleSuggestions: n }) => {
            e(
              (function (e) {
                return { type: a.Ic, articleCollections: e };
              })(t)
            ),
              !i && n && e(g(n));
          }
        );
      };
    }
    function g(e) {
      return { type: a.Lc, articleSuggestions: e };
    }
    function m(e) {
      return { type: a.Mc, mixedSuggestions: e };
    }
    function v(e = !1) {
      return { type: a.Kd, skipOpenAnimation: e };
    }
    function y() {
      return { type: a.Ld };
    }
    function O() {
      return { type: a.w };
    }
    function _() {
      return (e, t) => {
        const n = t(),
          r = Object(c.i)(n),
          { articleCollections: i } = n;
        r || 1 !== i.length ? e({ type: a.jd }) : e({ type: a.hd });
      };
    }
    function w() {
      return { type: a.kd };
    }
    function j(e) {
      return { type: a.ld, value: e };
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "g", function () {
      return f;
    }),
      n.d(t, "f", function () {
        return b;
      }),
      n.d(t, "d", function () {
        return h;
      }),
      n.d(t, "e", function () {
        return g;
      }),
      n.d(t, "c", function () {
        return m;
      }),
      n.d(t, "a", function () {
        return v;
      }),
      n.d(t, "b", function () {
        return y;
      });
    var r = n(79),
      i = n(14),
      o = n(89),
      s = n.n(o),
      c = n(175),
      a = n(32),
      u = n(235);
    const l = [
        "image",
        "attachmentList",
        "video",
        "videoReply",
        "videoFile",
        "messengerCard",
      ],
      d = [
        "image",
        "video",
        "videoReply",
        "videoFile",
        "notificationChannelsCard",
      ],
      p = [
        { user: "sent_an_image", admin: "sent_you_an_image" },
        { user: "sent_an_attachment", admin: "sent_you_an_attachment" },
        { user: "sent_a_video", admin: "sent_you_a_video" },
        { user: "sent_a_video_reply", admin: "sent_you_a_video_reply" },
        { user: "sent_a_video", admin: "sent_you_a_video" },
        { user: "sent_an_app", admin: "sent_you_an_app" },
      ],
      f = (e) => e && e.type && "videoFile" === e.type,
      b = (e) => d.indexOf(e.type) > -1,
      h = (e) => e.text || e.content,
      g = (e) => {
        var t;
        const n = Object(a.a)(e);
        if (!n) return;
        const o = n.body,
          s = n.author;
        let c,
          l = !(null === (t = n.body) || void 0 === t || !t.some(b));
        o && Array.isArray(o) && S(o[0]) && (c = w(o));
        const d = _(o),
          p = C(o, s);
        return (
          (c = 0 === d.length && p ? p : d),
          Object(r.b)(n)
            ? g(e.slice(0, e.length - 1))
            : (Object(r.a)(n) &&
                ((c = Object(i.e)("operator_asked_for_attribute", {
                  attribute: O(n),
                })),
                (l = !0)),
              Object(r.c)(n) && (c = Object(u.c)(n.eventData.status)),
              { author: s, summaryText: c.trim(), isMetadata: l })
        );
      },
      m = (e) => {
        const t = Object(c.a)(e);
        return E(t).map((e) => ({ type: "paragraph", text: e }));
      },
      v = (e, t, n) => [
        {
          type: "attachmentList",
          attachments: [{ contentType: t, name: e, size: n }],
        },
      ],
      y = (e, t, n, r, i) => [
        {
          type: "image",
          url: e,
          width: t,
          height: n,
          attribution: r,
          title: i,
        },
      ],
      O = (e) => {
        const t = e.form.attributes[0];
        return t.name || t.identifier.toLowerCase().replace(".", " ");
      },
      _ = (e) => {
        if (!e) return "";
        const t = e
          .filter((e) => "button" !== e.type && !S(e))
          .map((e) => j(e))
          .filter((e) => !!e)
          .join(" ");
        return s()(t.replace(/<br>/g, " "));
      },
      w = (e) => {
        const t = e.filter((e) => S(e))[0];
        if (t && t.title) return s()(t.title);
      },
      j = (e) => {
        switch (e.type) {
          case "videoFile":
          case "messengerCard":
            return "";
          case "orderedList":
            return e.items
              ? e.items.map((e, t) => `${t + 1}. ${e}`).join(", ")
              : "";
          case "unorderedList":
            return e.items ? e.items.join(", ") : "";
          default:
            return e.text || e.content;
        }
      },
      C = (e, t) => {
        if (!e) return "";
        const n = ((e) => e.filter((e) => l.indexOf(e.type) > -1)[0])(e);
        if (!n) return "";
        const r = l.indexOf(n.type),
          o = p[r];
        return t.isAdmin ? Object(i.e)(o.admin) : Object(i.e)(o.user);
      },
      S = (e) => e && e.type && "link" === e.type,
      E = (e) => {
        const t = e.split("\n\n");
        for (let e = 0; e < t.length; e++) t[e] = t[e].replace(/\n/g, "<br>");
        return t.filter((e) => e);
      };
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return d;
    });
    var r = n(2),
      i = n(11),
      o = n(44),
      s = n(32),
      c = n(143),
      a = n(52);
    const u = Object(r.createSelector)(o.a, (e) =>
        e.filter((e) => {
          var t, n, r;
          return (
            !Object(i.o)(e) &&
            !e.read &&
            !e.dismissed &&
            !Object(c.a)(
              null === (t = Object(s.a)(e.parts)) || void 0 === t
                ? void 0
                : t.partType
            ) &&
            !e.suppress &&
            ((n = e),
            "snippet" ===
              (null === (r = Object(s.a)(n.parts)) || void 0 === r
                ? void 0
                : r.notificationType) || n.forceSnippet) &&
            !Object(i.p)(e)
          );
        })
      ),
      l = Object(r.createSelector)(u, (e) =>
        e.map((e) => ({
          type: "conversation",
          data: e,
          receivedAt: e.lastPartCreatedAt,
        }))
      ),
      d = Object(r.createSelector)(l, a.c, (e, t) =>
        [...e, ...t]
          .sort((e, t) => {
            var n, r, i, o;
            return (
              (null === (n = t.receivedAt) ||
              void 0 === n ||
              null === (r = n.getTime) ||
              void 0 === r
                ? void 0
                : r.call(n)) -
              (null === (i = e.receivedAt) ||
              void 0 === i ||
              null === (o = i.getTime) ||
              void 0 === o
                ? void 0
                : o.call(i))
            );
          })
          .slice(0, 3)
          .reverse()
      );
    t.a = u;
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return i;
    }),
      n.d(t, "a", function () {
        return o;
      });
    var r = n(46);
    function i(e) {
      return e.requiresCookieConsent || !1;
    }
    function o(e) {
      if (!e) return !0;
      if (!(e.requiresCookieConsent || !1)) return !0;
      const t = r.a.read("gtm_cookie_consent");
      if (!t) return !1;
      const n = (function (e) {
        const {
          advertising: t,
          marketing: n,
          analytics: r,
          performance: i,
        } = Object.fromEntries(e.split("+").map((e) => [e, !0]));
        return {
          advertising: !!t,
          analytics: !!r,
          marketing: !!n,
          performance: !!i,
        };
      })(t);
      return n.analytics;
    }
  },
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return i;
    }),
      n.d(t, "a", function () {
        return o;
      }),
      n.d(t, "c", function () {
        return s;
      });
    var r = n(0);
    function i(e, t) {
      return { type: r.uc, conversationId: e, partId: t };
    }
    function o() {
      return { type: r.t };
    }
    function s(e, t) {
      return { type: r.Tc, conversationId: e, partId: t };
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    }),
      n.d(t, "c", function () {
        return u;
      }),
      n.d(t, "b", function () {
        return l;
      });
    var r = n(17),
      i = n(88),
      o = n(2),
      s = n(11),
      c = n(106);
    const a = (e, t) => {
        const n = Number(e.id) === Number(t);
        return (
          !e.read &&
          "whatsapp" !== e.currentChannel &&
          !n &&
          (e.dismissed || !Object(s.o)(e))
        );
      },
      u = Object(o.createSelector)(
        (e) => Object(i.a)(e.conversations.byId),
        (e) => {
          const {
            app: { conversationId: t, isMessengerOpen: n },
            user: { isPresent: i },
          } = e;
          if (n && "conversation" === Object(r.i)(e)) return t;
          if (!n) {
            const t = Object(c.a)(e);
            if (1 === t.length && i) return t[0].id;
          }
        },
        (e, t) => e.reduce((e, n) => (a(n, t) && e.push(n.id), e), [])
      ),
      l = Object(o.createSelector)(u, (e) => e.length);
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    }),
      n.d(t, "b", function () {
        return o;
      });
    var r = n(2);
    const i = (e) => {
        var t, n;
        return (
          (null === (t = e.router) ||
          void 0 === t ||
          null === (n = t.location) ||
          void 0 === n
            ? void 0
            : n.pathname) || ""
        );
      },
      o = Object(r.createSelector)(
        (e) => e.router,
        (e) => e.previousLocations || []
      );
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return l;
    }),
      n.d(t, "c", function () {
        return h;
      }),
      n.d(t, "d", function () {
        return g;
      });
    var r = n(26),
      i = n(3),
      o = n(64),
      s = n(51),
      c = n(45),
      a = n(0);
    const u = {
        headerHeight: 1,
        header: void 0,
        isFetched: !1,
        isFetching: !1,
        isFailed: !1,
      },
      l = Object(r.createAsyncThunk)("home/getHomeData", async (e, t) => {
        const n = t.getState(),
          r = t.dispatch,
          { session: a } = n,
          { isFetching: u, isFetched: l } = n.home;
        if (u || l) return;
        r(b());
        const f = await i.c.getHomeData(a);
        (f.cards || []).forEach((e) => {
          "messenger_app" === e.type && r(Object(c.a)(i.c, e)),
            "help_center" === e.type &&
              ("suggested_articles" in e
                ? void 0 !== e.suggested_articles &&
                  r(
                    Object(o.f)({
                      suggestions: e.suggested_articles,
                      metadata: e.suggested_articles_metadata,
                    })
                  )
                : void 0 !== e.help_card_suggestions &&
                  r(Object(o.g)(e.help_card_suggestions)));
        }),
          r(h(f));
        const g = d(f);
        return g && (r(Object(s.f)(g.conversations)), r(p(g.conversations))), f;
      }),
      d = (e) => e.cards.find((e) => "recent_conversation" === e.type),
      p = (e) => ({ type: a.Wb, conversations: e }),
      f = Object(r.createSlice)({
        name: "home",
        initialState: u,
        reducers: {
          setHomeHeaderContent(e, t) {
            e.header = t.payload;
          },
          getHomeDataRequest(e) {
            (e.isFetching = !0), (e.isFetched = !1), (e.isFailed = !1);
          },
          getHomeDataComplete(e, t) {
            e.cards = t.payload.cards;
          },
        },
        extraReducers: (e) => {
          e.addCase(l.fulfilled, (e) => {
            (e.isFetching = !1), (e.isFetched = !0), (e.isFailed = !1);
          });
        },
      }),
      {
        getHomeDataRequest: b,
        getHomeDataComplete: h,
        setHomeHeaderContent: g,
      } = f.actions;
    t.a = f.reducer;
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    }),
      n.d(t, "b", function () {
        return s;
      });
    var r = n(12);
    const i = "intercom-snippet__intersection-mode",
      o = () => !!r.b.get(i),
      s = () =>
        "survey-preview" === r.b.get(i) ||
        "survey-local-preview" === r.b.get(i);
  },
  function (e, t, n) {
    "use strict";
    var r = n(95),
      i = n.n(r),
      o = n(215),
      s = n.n(o),
      c = n(117),
      a = n.n(c),
      u = n(54),
      l = n(111),
      d = n.n(l),
      p = n(185),
      f = n.n(p),
      b = n(355),
      h = n.n(b);
    const g = {
      button: function (e) {
        return e.action.id ? ((e.id = e.action.id), f()(e, "action.id"), e) : e;
      },
      input: function (e) {
        return e.action && e.action.id
          ? ((e.id = e.action.id), f()(e, "action.id"), e)
          : e;
      },
      list: function (e) {
        const t = e.items.map((e) => {
          if (e.action) {
            if (!e.action.id) return e;
            (e.id = e.action.id), f()(e, "action.id");
          }
          return e;
        });
        return (e.items = t), e;
      },
    };
    function m(e) {
      return e.components.map((e) =>
        (function (e) {
          const t = h()({}, e);
          return d()(g, e.type, () => {})(t), t;
        })(e)
      );
    }
    var v = n(224);
    function y(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function O(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    n.d(t, "a", function () {
      return w;
    }),
      n.d(t, "c", function () {
        return j;
      }),
      n.d(t, "e", function () {
        return C;
      }),
      n.d(t, "b", function () {
        return E;
      }),
      n.d(t, "d", function () {
        return I;
      });
    const _ = (e) => (e ? Object(v.a)(e.toString()) : ""),
      w = (e, t) => {
        switch (e.type) {
          case "button":
            return `button-${_(e.id)}`;
          case "text":
            return `text-${t}-${_(e.text)}`;
          case "input":
            return `input-${_(e.id)}`;
          case "spacer":
            return `spacer-${t}`;
          case "divider":
            return `divider-${t}`;
          case "image":
            return `image-${t}-${_(e.url)}`;
          case "list":
            return `list-${e.items.map((e) => _(e.id)).join("-")}`;
          case "dropdown":
            return `dropdown-${_(e.id)}`;
          case "single-select":
            return `single-select-${_(e.id)}`;
          default:
            return `unknown-${t}`;
        }
      },
      j = (e) =>
        e.state ? { uri: e.uri, canvas: { id: "", content: e.state } } : e,
      C = (e) => {
        const t = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? y(Object(n), !0).forEach(function (t) {
                  O(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : y(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        })({}, e);
        return (
          i()(t, ["canvas", "content"], (e) =>
            ((e) =>
              "0.1" === e.version ? e : { version: "0.1", components: m(e) })(
              a()(e)
            )
          ),
          i()(t, ["canvas", "content", "components"], (e) => e.map(u.a))
        );
      },
      S = (e, t, n) => {
        const r = [];
        return (
          e.forEach((e) => {
            "list" === e.type ? r.push(...e.items) : r.push(e);
          }),
          r.find((e) => e[t] && (!n || e[t] === n))
        );
      },
      E = (e, t, n) => !!S(e, t, n),
      I = (e, t, n = !0) => {
        const r = ((e, t) => S(e, "id", t))(t, e),
          i = A(r, t);
        return i && r && r.type
          ? "button" === r.type || "item" === r.type
            ? s()(a()(t), `${i}.loading`, n, a.a)
            : "input" === r.type ||
              "dropdown" === r.type ||
              "single-select" === r.type
            ? s()(a()(t), `${i}.saveState`, n ? "saving" : "unsaved", a.a)
            : void 0
          : t;
      },
      A = (e, t) => {
        for (const n in t)
          if (t.hasOwnProperty(n)) {
            if (e === t[n]) return `[${n}]`;
            if (t[n] && "object" == typeof t[n]) {
              const r = A(e, t[n]);
              if (r) return `[${n}]` + r;
            }
          }
      };
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      return "quick_reply" === e.partType;
    }
    function i(e) {
      return "attribute_collector" === e.partType;
    }
    n.d(t, "b", function () {
      return r;
    }),
      n.d(t, "a", function () {
        return i;
      }),
      n.d(t, "c", function () {
        return o;
      });
    const o = (e) => "ticketStatusUpdate" === e.messageType;
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "f", function () {
      return a;
    }),
      n.d(t, "d", function () {
        return u;
      }),
      n.d(t, "a", function () {
        return l;
      }),
      n.d(t, "b", function () {
        return d;
      }),
      n.d(t, "e", function () {
        return p;
      }),
      n.d(t, "c", function () {
        return f;
      });
    var r = n(3),
      i = n(180),
      o = n(98),
      s = n(4),
      c = n(0);
    function a(e) {
      return { type: c.Jc, banners: e };
    }
    function u(e) {
      return (t, n) => {
        const r = n(),
          { verticalPadding: s } = Object(o.a)(r),
          { customizationOverrides: c = {} } = r,
          { isSetByBanner: a } = c;
        (20 === s || a) && t(Object(i.a)({ verticalPadding: e }));
      };
    }
    function l(e, t, n) {
      return (i, o) => {
        const { session: s } = o();
        i(
          (function (e, t) {
            return { type: c.y, bannerId: e, email: t };
          })(e, n)
        ),
          r.c.collectEmailFromBanner(s, e, t, n);
      };
    }
    function d(e, t) {
      return (n, i) => {
        const { session: o } = i();
        n({ type: c.db }), r.c.dismissBanner(o, e, t);
        const s = [];
        for (const t of i().banners) t.banner_id !== e && s.push(t);
        n(a(s));
      };
    }
    function p(e, t, n) {
      return (i, o) => {
        const { session: s } = o();
        i(
          (function (e, t) {
            return { type: c.Fc, bannerId: e, reaction: t };
          })(e, n)
        ),
          r.c.reactToBanner(s, e, t, n);
      };
    }
    function f(e) {
      return async (t, n) => {
        const { session: i } = n();
        try {
          t(
            (function (e) {
              return { type: c.ub, bannerViewId: e };
            })(e)
          );
          const n = [],
            o = await r.c.fetchBannerView(i, e);
          if (!o) return;
          n.push(o), t(a(n));
        } catch (e) {
          Object(s.b)(`Could not fetch banner_view due to e=${e}`);
        }
      };
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return f;
    }),
      n.d(t, "a", function () {
        return b;
      }),
      n.d(t, "e", function () {
        return h;
      }),
      n.d(t, "d", function () {
        return g;
      }),
      n.d(t, "b", function () {
        return m;
      });
    var r = n(29),
      i = n.n(r),
      o = n(10),
      s = n(33),
      c = n(65),
      a = n(4),
      u = n(28),
      l = n(13),
      d = n(0);
    const p = i()("intercom.actions.inbound-triggers");
    function f(e, t, n = !1) {
      return async (r, i) => {
        try {
          const d = i(),
            { app: p, session: f, newConversation: b } = d,
            h = Object(s.b)(),
            g = {
              clientId: h,
              body: Object(c.c)(t.text),
              createdAt: new Date(),
              composerSuggestionItem: t,
            },
            m = b.composerState.visible;
          r(
            (function (e) {
              if ("close-composer" === e.preAction)
                return Object(o.s)({ visible: !1 });
              throw `Invalid PRE ACTION type for suggestion=${e.preAction}`;
            })(t)
          ),
            r(Object(o.h)(g, n)),
            Object(a.q)("inboundSuggestionConversationCreation", h, {
              custom_bot_control_id: null == t ? void 0 : t.uuid,
            });
          const v = await e.startConversationFromSuggestion(f, {
            suggestionUuid: t.uuid,
            clientAssignedUUID: h,
            selfServeSuggestionsMatch: p.selfServeSuggestionsMatch,
            articleUrl: b.articleUrl,
          });
          Object(a.l)("inboundSuggestionConversationCreation", h, {
            origin: "conversation_created",
            conversation_id: null == v ? void 0 : v.id,
          }),
            r(Object(o.i)(v, null, null, Date.now(), "custom_bot")),
            m && r(Object(o.s)({ visible: !0 }));
          Object(l.i)(d) && r(Object(u.c)(v.id, !0));
        } catch (e) {
          r(Object(o.g)(null)),
            p(`Couldnt start conversation from suggestion due to e=${e}`);
        }
      };
    }
    function b(e) {
      return { type: d.d, composerSuggestions: e };
    }
    function h(e) {
      return { type: d.pe, composerSuggestions: e };
    }
    function g(e) {
      return { type: d.me, composerSuggestions: e };
    }
    function m(e) {
      return { type: d.Xc, rulesetId: e };
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return o;
    }),
      n.d(t, "a", function () {
        return s;
      }),
      n.d(t, "b", function () {
        return c;
      });
    var r = n(86),
      i = n(22);
    const o = (e) => {
        if ("rate_limited_update" === e) return null;
        try {
          return e.errors || JSON.parse(e).errors;
        } catch (t) {
          Object(i.a)(e), Object(r.c)(e);
        }
      },
      s = (e) => {
        const t = o(e);
        if (!t) return;
        const n = t.find((e) => e.data);
        if (!n) return;
        const r = n.data;
        return {
          activeSubscription: r.active_subscription,
          userHashVerified: r.user_hash_verified,
          secureInstallV2: r.secure_install_v2,
          messengerEnabledForVisitors: r.messenger_enabled_for_visitors,
          messengerEnabledForUsers: r.messenger_enabled_for_users,
        };
      },
      c = (e) => e && e[0].code;
  },
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return _;
    }),
      n.d(t, "a", function () {
        return w;
      }),
      n.d(t, "e", function () {
        return j;
      }),
      n.d(t, "b", function () {
        return C;
      }),
      n.d(t, "d", function () {
        return S;
      });
    var r,
      i,
      o = n(357),
      s = n.n(o),
      c = n(43),
      a = n.n(c),
      u = n(358),
      l = n.n(u),
      d = n(133),
      p = n.n(d),
      f = n(168);
    const b = "1" === window.navigator.doNotTrack,
      h = [
        "address",
        "addresses",
        "email",
        "emailAddress",
        "emailAddresses",
        "phoneNumber",
        "phone",
        "number",
        "name",
        "firstName",
        "lastName",
        "userSuppliedEmail",
        "initial",
        "socialAccounts",
        "text",
        "messengerCards",
        "url",
      ],
      g = [];
    let m, v;
    const y = (e) =>
        l()(e, (e, t, n) => {
          h.indexOf(n) >= 0
            ? (e[n] = "removedIdentifyingInfo")
            : a()(t) && !s()(t)
            ? (e[n] = y(t.toJS ? t.toJS() : t))
            : (e[n] = t);
        }),
      O = (e) =>
        b
          ? "removedIdentifyingInfo"
          : ((e) => {
              const t = p()(e);
              return y(t);
            })(e),
      _ = async (e) => {
        const {
          addTag: t,
          addExtra: r,
          logError: i,
          addBreadcrumb: o,
        } = await Object(f.a)({
          promise: () =>
            Promise.all([n.e(58), n.e(16)]).then(n.bind(null, 606)),
        });
        t("app.id", m),
          g.forEach(({ type: e }) => o("redux-action", e)),
          v && v.getState && r("state", O(v.getState())),
          i(e);
      },
      w = (e) => {
        (e.onerror = (e, t, n, r, i) => _(i)),
          (e.onunhandledrejection = (e) => _(e.reason));
      },
      j = (e) => {
        e && (m = e);
      },
      C = (e) => {
        e && (v = e);
      },
      S = () =>
        function (e) {
          return function (t) {
            return g.push({ type: t.type, timestamp: +new Date() }), e(t);
          };
        };
    null !== (r = window) &&
      void 0 !== r &&
      null !== (i = r.parent) &&
      void 0 !== i &&
      i.intercomSettings &&
      j(window.parent.intercomSettings.app_id);
  },
  function (e, t, n) {
    "use strict";
    let r, i, o;
    n.d(t, "b", function () {
      return r;
    }),
      n.d(t, "a", function () {
        return i;
      }),
      (function (e) {
        (e[(e.Active = 0)] = "Active"),
          (e[(e.Complete = 1)] = "Complete"),
          (e[(e.New = 2)] = "New");
      })(r || (r = {})),
      (function (e) {
        (e[(e.ReadOnly = 0)] = "ReadOnly"),
          (e[(e.OpenUrl = 1)] = "OpenUrl"),
          (e[(e.ProductTour = 2)] = "ProductTour"),
          (e[(e.Article = 3)] = "Article");
      })(i || (i = {})),
      (function (e) {
        e[(e.CloseCompletionScreen = 0)] = "CloseCompletionScreen";
      })(o || (o = {}));
  },
  function (e, t, n) {
    "use strict";
    t.a = (e) => Object.keys(e).map((t) => e[t]);
  },
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return c;
    }),
      n.d(t, "c", function () {
        return a;
      }),
      n.d(t, "b", function () {
        return u;
      }),
      n.d(t, "d", function () {
        return l;
      });
    var r = n(212),
      i = n(18),
      o = n(61),
      s = n(14);
    const c = 60,
      a = 48,
      u = 24,
      l = 150,
      d = '"Helvetica Neue", "Apple Color Emoji", Helvetica, Arial, sans-serif',
      p = `"intercom-font", ${d}`,
      f = [
        "en",
        "it",
        "es",
        "pt",
        "pt-BR",
        "fr",
        "de-form",
        "de",
        "da",
        "nl",
        "nb",
        "sv",
        "ca",
        "hr",
        "cs",
        "et",
        "hu",
        "pl",
        "tr",
      ],
      b = (e, t) =>
        i.a.isMobileBrowser() || Object(o.c)() || isNaN(e) ? t : Math.max(t, e);
    t.e = (e) => {
      const t = 2147483e3,
        n = b(e.horizontalPadding, 20),
        i = b(e.verticalPadding, 20),
        o = -1 !== f.indexOf(e.locale) ? p : d,
        l = e.m5Enabled ? a : c,
        h = e.m5Enabled ? 10 : 5,
        g = e.m5Enabled ? 16 : 20,
        m =
          "0px 0px 0px 1px rgba(0, 0, 0, 0.08), 0px 2px 8px rgba(0, 0, 0, 0.06)";
      return {
        zIndexBase: t,
        horizontalPaddingPx: n,
        verticalPaddingPx: i,
        fontSansSerif: e.m5Enabled
          ? 'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
          : o,
        fontMono: "Courier, monospace",
        messengerWidthPx: e.m5Enabled ? 400 : 376,
        messengerCompactWidthPx: 300,
        messengerMaxHeightPx: 704,
        mobileMaxWidthPx: 667,
        chatMarginPx: 0,
        noteMarginPercent: 7.31,
        tourPostMarginPx: 24,
        postMarginPercent: 15.27,
        postHeaderHeightPx: 72,
        postFooterHeightPx: 56,
        pointerFooterHeightPx: 49,
        chatBodyLineHeight: "1.4",
        noteBodyLineHeight: "1.4",
        postBodyLineHeight: "1.4",
        conversationPartBorderRadiusPx: e.m5Enabled ? "10px" : "5px",
        notificationHeightPx: 120,
        notificationBorderRadiusPx: e.m5Enabled ? 10 : 5,
        notificationBoxShadow: "0 2px 8px 0 rgba(35,47,53,0.09)",
        cardsHoverShadow: "0 8px 20px -10px rgba(0, 0, 0, 0.10)",
        chatComposerHeightPx: 52,
        borderlessComposerHeightPx: 56,
        composerShadowColor: "rgba(0, 0, 0, 0.1)",
        newConversationButtonBottomPx: 32,
        launcherSizePx: l,
        launcherIconSizePxM5: u,
        launcherOffsetBottomPaddingPx: l + g,
        launcherBadgePaddingLeftPx: 45,
        messengerBorderRadiusPx: e.m5Enabled ? 16 : 8,
        messengerCompactBorderRadiusPx: 16,
        messengerHeaderBoxShadow: "0px 1px 4px rgba(0,0,0,0.2)",
        homeCardBoxShadow: m,
        homeCardLightModeHoverBoxShadow: `${m}, 0px 0px 1px 1px rgba(0, 0, 0, 0.2)`,
        defaultHorizontalPaddingPx: 20,
        defaultVerticalPaddingPx: 20,
        borderlessIframePaddingPx: 10,
        borderlessIframePaddingLeftPx: 64,
        borderlessConversationWidthPx: 340,
        borderlessAvatarOffsetWidthPx: 50,
        messengerSheetZIndex: 2147483003,
        messengerAlertsZIndex: 2147483004,
        messengerSheetLoaderZIndex: 2147483005,
        discoveryLauncherPaddingPx: 5,
        discoveryLauncherHorizontalPaddingPx: n - h,
        discoveryLauncherVerticalPaddingPx: i - h,
        isLeftAlign: "left" === e.alignment,
        isMobile: e.isMobileBrowser || e.isMobileSize,
        scrollBarsWidthPx: Object(r.a)(),
        visibleScrollBars: 0 !== Object(r.a)(),
        suggestionsMaxHeightWithExpandedHeaderPx: 316,
        isRtlLocale: Object(s.b)(e.locale),
      };
    };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    });
    const r = () =>
      window.parent &&
      window.parent.intercomSettings &&
      "tx2p130c" === window.parent.intercomSettings.app_id;
  },
  function (e, t, n) {
    "use strict";
    let r;
    n.d(t, "a", function () {
      return r;
    }),
      (function (e) {
        (e[(e.shareable_url = 3)] = "shareable_url"),
          (e[(e.triggered_from_code = 7)] = "triggered_from_code"),
          (e[(e.triggered_from_email = 8)] = "triggered_from_email");
      })(r || (r = {}));
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return c;
    }),
      n.d(t, "a", function () {
        return a;
      }),
      n.d(t, "c", function () {
        return u;
      }),
      n.d(t, "d", function () {
        return l;
      });
    var r = n(9),
      i = n.n(r),
      o = n(2),
      s = n(40);
    const c = Object(o.createSelector)([(e) => e.survey], (e) => {
        if (!i()(e)) return e;
      }),
      a = Object(o.createSelector)(c, (e) => {
        if (!e) return [];
        const t = [];
        return (
          e.steps.forEach((e) => {
            e.questions.forEach((e) => {
              t.push({
                question_id: e.id,
                response: e.response ? e.response : null,
              });
            });
          }),
          t
        );
      }),
      u = Object(o.createSelector)(c, (e) => {
        if (!e) return;
        const { activeStepId: t } = e;
        return e.steps.find((e) => e.id === t);
      }),
      l = Object(o.createSelector)(c, (e) => {
        if (!e) return;
        return e.steps.filter((e) => e.stepType === s.b.question).length - 1;
      });
  },
  function (e, t, n) {
    "use strict";
    var r = n(47),
      i = n.n(r),
      o = n(183),
      s = n(15),
      c = n(28),
      a = n(10),
      u = n(17);
    var l = n(33);
    const d = {};
    var p = n(29),
      f = n.n(p),
      b = n(0),
      h = n(73),
      g = n(3),
      m = n(172);
    n.d(t, "a", function () {
      return w;
    }),
      n.d(t, "b", function () {
        return j;
      }),
      n.d(t, "c", function () {
        return C;
      }),
      n.d(t, "d", function () {
        return S;
      }),
      n.d(t, "f", function () {
        return E;
      }),
      n.d(t, "e", function () {
        return I;
      });
    const v = f()("intercom.actions.triggers"),
      y = { "open-messenger-loading-view": s.i },
      O = {
        "show-conversation": function (e, t) {
          return async (n, r) => {
            if ("conversation" !== Object(u.i)(r()))
              return await n(Object(a.m)(e, t.id)), n(Object(c.c)(t.id, !0));
          };
        },
      },
      _ = {};
    function w(e, t) {
      return (n) => {
        n(
          (function (e) {
            return { type: b.e, trigger: e };
          })(e)
        ),
          (function (e, t, n) {
            try {
              const { selector: r, event: o, id: s } = e,
                c = window.parent.document.querySelector(r),
                a = i()(
                  () =>
                    (function (e, t, n) {
                      v(`Handling event (triggerId=${e})`), t(C(e, n));
                    })(s, t, n),
                  3e3,
                  { leading: !0, trailing: !1 }
                ),
                u = () => {
                  v(`${o} event fired from ${r} (triggerId=${s})`), a();
                };
              null == c || c.addEventListener(o, u),
                (_[s] = { targetElement: c, boundHandler: u }),
                v(`Attached ${o} event handler to ${r}`);
            } catch (e) {
              v(
                `Couldnt attach the messenger trigger to the DOM due to e=${e}`
              );
            }
          })(e, n, t);
      };
    }
    function j(e) {
      return (t, n) => {
        !(function (e, t) {
          try {
            const { selector: n, event: r } = Object(o.c)(e)(t),
              { targetElement: i, boundHandler: s } = _[e];
            null == i || i.removeEventListener(r, s),
              v(`Detached ${r} event handler from ${n}`);
          } catch (e) {
            v(`Couldn't detach the messenger trigger to the DOM due to e=${e}`);
          } finally {
            delete _[e];
          }
        })(e, n()),
          t(
            (function (e) {
              return { type: b.Yc, triggerId: e };
            })(e)
          );
      };
    }
    function C(e, t) {
      return async (n, r) => {
        const i = Object(o.c)(e);
        try {
          i(r());
        } catch (t) {
          return void v(
            `Rejected trigger=${e} as it's no longer present in the store`
          );
        }
        try {
          await (async function (e) {
            return new Promise((t) => {
              if (d[e]) throw new Error(`Multiple events of type=${e} fired`);
              (d[e] = !0),
                setTimeout(async () => {
                  (d[e] = !1), t();
                }, 0);
            });
          })("messenger-trigger-fire");
        } catch (t) {
          return void v(
            `Rejected trigger=${e} as multiple triggers were fired in same tick`
          );
        }
        try {
          const o = r(),
            { session: s } = o,
            c = i(o),
            u = Object(l.b)(),
            d = { clientId: u, createdAt: new Date() };
          n(
            (function (e) {
              return { type: b.a, triggerId: e };
            })(e)
          ),
            n(
              (function (e) {
                return (t) => {
                  const n = y[e.preAction];
                  if ("function" == typeof n) return t(n());
                  throw `Invalid PRE ACTION type for trigger=${e.id}`;
                };
              })(c)
            ),
            n(Object(a.h)(d, !1));
          const p = await t.fireTrigger(s, {
            triggerId: String(e),
            clientAssignedUUID: u,
          });
          return (
            n(
              (function (e, t) {
                return (n) => {
                  const { action: r, data: i } = t,
                    o = O[r];
                  if (o) return n(o(e, i));
                  throw `Invalid POST ACTION type for trigger_action=${r}`;
                };
              })(t, p)
            ),
            n({ type: b.Y }),
            { success: !0 }
          );
        } catch (e) {
          return (
            n({ type: b.b }),
            n(Object(a.g)(null)),
            v(`Couldnt fire messenger trigger due to e=${e}`),
            { success: !1 }
          );
        }
      };
    }
    function S(e, t) {
      return async (n, r) => {
        var i;
        const o = r(),
          { session: s } = o,
          c = await e.outboundPreview(s, t),
          u = Object(g.a)(c.data);
        n(Object(a.p)(e, u, !1, Date.now())),
          n(
            Object(h.b)(
              u.id,
              null === (i = u.parts[0]) || void 0 === i ? void 0 : i.id
            )
          );
      };
    }
    function E(e, t) {
      return async (n, r) => {
        const i = r(),
          { session: o } = i,
          c = await e.workflowPreview(o, t);
        n(Object(s.j)()),
          c.botIntro && n(Object(m.a)(c.botIntro)),
          n(
            (function ({
              workflowInstanceId: e,
              resolutionBotBehaviorVersionId: t,
            }) {
              return {
                type: b.zc,
                workflowInstanceId: e,
                resolutionBotBehaviorVersionId: t,
              };
            })(c)
          );
      };
    }
    function I(e) {
      return (t, n) => {
        try {
          const r = n();
          t(C(Object(o.a)(r).id, e));
        } catch (e) {
          v("Couldnt retry firing messenger trigger");
        }
      };
    }
  },
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "l", function () {
      return o;
    }),
      n.d(t, "k", function () {
        return s;
      }),
      n.d(t, "n", function () {
        return c;
      }),
      n.d(t, "g", function () {
        return a;
      }),
      n.d(t, "h", function () {
        return u;
      }),
      n.d(t, "c", function () {
        return l;
      }),
      n.d(t, "e", function () {
        return d;
      }),
      n.d(t, "f", function () {
        return p;
      }),
      n.d(t, "d", function () {
        return f;
      }),
      n.d(t, "b", function () {
        return b;
      }),
      n.d(t, "a", function () {
        return h;
      }),
      n.d(t, "i", function () {
        return g;
      }),
      n.d(t, "m", function () {
        return m;
      }),
      n.d(t, "j", function () {
        return y;
      });
    var r = n(7);
    const i = (e, t) => (t ? e({ theme: t }) : e),
      o = ({ theme: e }) => {
        let t = e.verticalPaddingPx;
        return e.isLauncherEnabled && (t += e.launcherOffsetBottomPaddingPx), t;
      },
      s = (e) => i(o, e),
      c = (e = 0, t) =>
        i(
          (
            (e) =>
            ({ theme: t }) =>
              t.zIndexBase + e
          )(e),
          t
        ),
      a = {
        name: "1e53tp2",
        styles:
          "position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);",
      },
      u = {
        name: "8wlotg",
        styles:
          "content:'';position:absolute;bottom:0;/* @noflip */ left:-5px;width:0;height:0;border-style:solid;/* @noflip */ border-width:0 0 13px 5px;border-color:transparent transparent white transparent;",
      },
      l = ({ theme: e }) =>
        Object(r.c)(
          "box-shadow:0 4px 15px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.1),inset 0 2px 0 0 ",
          e.cardBorderTopColor,
          ";"
        ),
      d = {
        name: "1mz77v4",
        styles:
          "box-shadow:0 4px 15px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.1);",
      },
      p = ({ theme: e }) =>
        Object(r.c)(
          "border:1px solid ",
          e.lightGrey8,
          ";",
          !e.m5Enabled &&
            Object(r.c)(
              "box-shadow:inset 0 2px 0 0 ",
              e.cardBorderTopColor,
              ";border-top:none;"
            )
        ),
      f = ({ theme: e }) =>
        Object(r.c)(
          "box-shadow:inset 0 2px 0 0 ",
          e.cardBorderTopColor,
          ",",
          e.cardsHoverShadow,
          ";border-top:none;"
        ),
      b = (e, t, n, i, o = "no-repeat") =>
        Object(r.c)(
          "background-image:url(",
          e,
          ");background-size:",
          n,
          " ",
          i,
          ";background-repeat:",
          o,
          ";@media (--moz-device-pixel-ratio:1.3),(-o-min-device-pixel-ratio:2.6/2),(-webkit-min-device-pixel-ratio:1.3),(min-resolution:1.3dppx){&{background-image:url(",
          t,
          ");}}"
        ),
      h = Object(r.d)("div", { target: "eftbqer0" })({
        name: "79elbk",
        styles: "position:relative;",
      }),
      g = {
        name: "n6sm7g",
        styles:
          "&:before,&:after{content:' ';display:table;}&:after{clear:both;}",
      },
      m = {
        name: "1h2ruwl",
        styles: "white-space:nowrap;overflow:hidden;text-overflow:ellipsis;",
      };
    var v = { name: "e2v18t", styles: "transform:scaleX(-1);" };
    const y = ({ theme: e }) => e.isRtlLocale && v;
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return l;
    }),
      n.d(t, "i", function () {
        return d;
      }),
      n.d(t, "m", function () {
        return p;
      }),
      n.d(t, "g", function () {
        return f;
      }),
      n.d(t, "k", function () {
        return g;
      }),
      n.d(t, "l", function () {
        return y;
      }),
      n.d(t, "a", function () {
        return _;
      }),
      n.d(t, "e", function () {
        return w;
      }),
      n.d(t, "f", function () {
        return v;
      }),
      n.d(t, "h", function () {
        return h;
      }),
      n.d(t, "b", function () {
        return m;
      }),
      n.d(t, "j", function () {
        return O;
      }),
      n.d(t, "d", function () {
        return a;
      });
    var r = n(2),
      i = n(343),
      o = n(17),
      s = n(44),
      c = n(119);
    const a = (e) => e.homeScreen,
      u = (e, t) => e.some((e) => e.slotType === t),
      l = Object(r.createSelector)(a, ({ matchedSlots: e = [] } = {}) =>
        u(e, "help_center")
      ),
      d = Object(r.createSelector)(a, ({ fetchedSlots: e = [] } = {}) =>
        u(e, "help_center")
      ),
      p = Object(r.createSelector)(
        a,
        ({ matchedSlots: e = [] }) =>
          u(e, "help_center") || u(e, "messenger_app")
      ),
      f = Object(r.createSelector)([d, o.v, o.b], (e, t, n) => (!e || !t) && n),
      b = Object(r.createSelector)(
        a,
        ({ fetchedSlots: e = [] }) =>
          0 === e.findIndex((e) => "new_conversation_card" === e.slotType)
      ),
      h = Object(r.createSelector)([i.a], (e = []) => e.length > 0),
      g = Object(r.createSelector)([h, b], (e, t) => !!e || !t),
      m = Object(r.createSelector)(
        [s.a, (e) => e.homeScreen.hasMoreConversations],
        (e, t) => e.length > 0 || t
      ),
      v = Object(r.createSelector)([h, m], (e, t) => !e && t),
      y = o.u,
      O = Object(r.createSelector)([h, f, m], (e, t, n) => !e && !t && n),
      _ = Object(r.createSelector)(a, ({ articleSuggestions: e } = {}) => e),
      w = Object(r.createSelector)(a, ({ mixedSuggestions: e } = {}) => e);
    Object(r.createSelector)(
      a,
      f,
      d,
      c.e,
      ({ fetchedSlots: e, isFetched: t, isFailed: n }, r, i) => ({
        slots: e.filter((e) => {
          switch (e.slotType) {
            case "new_conversation_card":
              return r;
            case "help_center":
              return i;
            default:
              return !0;
          }
        }),
        isFetched: t,
        isFailed: n,
      })
    );
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return c;
    });
    var r = n(2);
    const i = ["left", "right"],
      o = (e) => Math.max(e || 20, 20),
      s = (e) => (((e) => i.indexOf(e) >= 0)(e) ? e : "right"),
      c = Object(r.createSelector)(
        (e) => e.app,
        (e) => e.customizationOverrides,
        (e, t = {}) => {
          const {
              alignment: n,
              horizontalPadding: r,
              verticalPadding: i,
              color: c,
              secondaryColor: a,
            } = e,
            {
              alignment: u,
              horizontalPadding: l,
              verticalPadding: d,
              color: p,
              secondaryColor: f,
            } = t;
          return {
            alignment: s(u || n),
            horizontalPadding: o(l || r),
            verticalPadding: o(d || i),
            color: p || c,
            secondaryColor: f || a,
          };
        }
      );
    t.b = c;
  },
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    let r, i;
    n.d(t, "a", function () {
      return s;
    }),
      n.d(t, "f", function () {
        return c;
      }),
      n.d(t, "e", function () {
        return a;
      }),
      n.d(t, "c", function () {
        return u;
      }),
      n.d(t, "b", function () {
        return l;
      }),
      n.d(t, "d", function () {
        return d;
      });
    let o = !1;
    const s = () => r,
      c = (e) => (r = e),
      a = (e) => (i = e),
      u = () => i,
      l = () => !o,
      d = (e) => (o = e);
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var r = n(1),
      i = n(70);
    function o() {
      return Object(r.useContext)(i.ThemeContext);
    }
  },
  function (e, t, n) {
    "use strict";
    var r = n(2),
      i = n(44),
      o = n(11);
    const s = Object(r.createSelector)(i.a, (e) =>
      e.filter((e) => {
        return (
          !e.read &&
          "whatsapp" !== e.currentChannel &&
          !e.forceSnippet &&
          ((1 === (t = e).parts.length &&
            "full" === t.parts[0].notificationType) ||
            Object(o.k)(e)) &&
          "pointer" !== e.messageType &&
          !Object(o.p)(e) &&
          !e.preventEndUserReplies
        );
        var t;
      })
    );
    t.a = Object(r.createSelector)(
      (e) => {
        const {
          conversations: { byId: t },
          message: { conversationId: n },
        } = e;
        return t[n];
      },
      s,
      (e, t) => {
        return (
          (n = t),
          void 0 === (r = e) ||
          ((e, t) => void 0 !== e.find((e) => e.id === t.id))(n, r) ||
          Object(o.p)(r)
            ? n
            : n.concat(r)
        );
        var n, r;
      }
    );
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return o;
    }),
      n.d(t, "c", function () {
        return s;
      }),
      n.d(t, "f", function () {
        return c;
      }),
      n.d(t, "g", function () {
        return a;
      }),
      n.d(t, "d", function () {
        return u;
      }),
      n.d(t, "e", function () {
        return l;
      }),
      n.d(t, "a", function () {
        return d;
      });
    var r = n(0),
      i = n(3);
    function o({ session: e, customAttributes: t }) {
      return async (n, r) => {
        try {
          const r = await i.c.fetchTooltips({
            session: e,
            customAttributes: t,
          });
          n(c(i.c.buildTooltipGroups(null == r ? void 0 : r.tooltip_groups)));
        } catch (e) {
          return;
        }
      };
    }
    function s(e, t) {
      return async (n, o) => {
        const { session: s } = o();
        try {
          await i.c.markTooltipViewed(s, e, t),
            n(
              (function (e) {
                return { type: r.Yd, tooltipId: e };
              })(e)
            );
        } catch (e) {
          return;
        }
      };
    }
    function c(e) {
      return { type: r.Rc, tooltipGroups: e };
    }
    function a(e) {
      return { type: r.Wd, tooltipId: e };
    }
    function u(e) {
      return { type: r.gc, matches: e };
    }
    function l(e) {
      return { type: r.Pd, tooltipGroup: e };
    }
    function d() {
      return { type: r.lb };
    }
  },
  function (e, t, n) {
    "use strict";
    const r = 1 / 12.92;
    function i(e) {
      return Math.pow((e + 0.055) / 1.055, 2.4);
    }
    function o(e) {
      const t = e[0] / 255,
        n = e[1] / 255,
        o = e[2] / 255;
      return (
        0.2126 * (t <= 0.03928 ? t * r : i(t)) +
        0.7152 * (n <= 0.03928 ? n * r : i(n)) +
        0.0722 * (o <= 0.03928 ? o * r : i(o))
      );
    }
    function s(e) {
      let t = 255;
      8 === (e = e.replace(/^#/, "")).length &&
        ((t = parseInt(e.slice(6, 8), 16)), (e = e.substring(0, 6))),
        4 === e.length &&
          ((t = parseInt(e.slice(3, 4).repeat(2), 16)),
          (e = e.substring(0, 3))),
        3 === e.length && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
      const n = parseInt(e, 16);
      return [n >> 16, (n >> 8) & 255, 255 & n, t];
    }
    function c(e, t) {
      return (function (e, t) {
        return (Math.max(e, t) + 0.05) / (Math.min(e, t) + 0.05);
      })(o(e), o(t));
    }
    function a(e, t) {
      return c(s(e), s(t));
    }
    var u = n(135),
      l = n(0);
    n.d(t, "b", function () {
      return p;
    }),
      n.d(t, "a", function () {
        return f;
      });
    const d = (e, t, n, r) =>
        (a(t[r], e) >= n ? r : null) ||
        Object.keys(t).find((r) => a(t[r], e) >= n) ||
        r,
      p = (e) => ({ type: l.Cd, tabNavigation: e }),
      f = ({ color: e, secondaryColor: t }) => ({
        type: l.sd,
        accessibilityTheme: d(e, u.a, 2, "default"),
        secondaryAccessibilityTheme: d(t, u.a, 2, "light"),
      });
  },
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var r = n(7),
      i = { name: "1tu59u4", styles: "flex:0 0 auto;" };
    const o = Object(r.d)("svg", { target: "e10dfw480" })(
      "width:16px;height:16px;margin-right:5px;vertical-align:text-bottom;> g > g{stroke:",
      Object(r.g)("headerTitleColor"),
      ";}",
      ({ isBio: e }) => e && i
    );
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return o;
    });
    var r = n(26);
    const i = Object(r.createSlice)({
        name: "help",
        initialState: { searchPerformed: !1 },
        reducers: {
          searchPerformed(e) {
            e.searchPerformed = !0;
          },
        },
      }),
      { searchPerformed: o } = i.actions;
    t.a = i.reducer;
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return a;
    });
    var r = n(0);
    function i(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function o(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? i(Object(n), !0).forEach(function (t) {
              s(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : i(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function s(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const c = [],
      a = (e) => ({ type: r.Qc, ticketTypes: e });
    t.a = function (e = c, t) {
      switch (t.type) {
        case r.Qc:
          if (t.ticketTypes) return t.ticketTypes;
          break;
        case r.W:
          return [
            ...e.map(
              (e) => (e.id === t.ticketTypeId && (e.isFetching = !0), o({}, e))
            ),
          ];
        case r.X:
        case r.V:
          return [
            ...e.map(
              (e) => (e.id === t.ticketTypeId && (e.isFetching = !1), o({}, e))
            ),
          ];
      }
      return e;
    };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return r;
    }),
      n.d(t, "d", function () {
        return i;
      }),
      n.d(t, "e", function () {
        return o;
      }),
      n.d(t, "a", function () {
        return s;
      }),
      n.d(t, "h", function () {
        return c;
      }),
      n.d(t, "g", function () {
        return a;
      }),
      n.d(t, "b", function () {
        return u;
      }),
      n.d(t, "f", function () {
        return l;
      }),
      n.d(t, "i", function () {
        return d;
      });
    const r = "send-data-to-messenger",
      i = "send-data-to-sheet",
      o = "set-iframe-src",
      s = "close",
      c = "submit-sheet",
      a = "start-navigation",
      u = "finish-navigation",
      l = "set-title";
    function d(e, t, n) {
      return { intercomSheet: { type: e, payload: t, meta: { proxy: n } } };
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return u;
    });
    var r = n(12),
      i = n(0);
    function o(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function s(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? o(Object(n), !0).forEach(function (t) {
              c(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : o(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function c(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const a = (() => {
      var e, t, n;
      const r = "composer-suggestions-disabled-at",
        i =
          null === (e = window) ||
          void 0 === e ||
          null === (t = e.parent) ||
          void 0 === t ||
          null === (n = t.intercomSettings) ||
          void 0 === n
            ? void 0
            : n.app_id;
      return i ? `${i}-${r}` : r;
    })();
    const u = {
      loading: !1,
      isViewed: !1,
      isDismissed:
        (function () {
          const e = parseInt(r.a.get(a));
          return !!e && Date.now() - e < 2592e6;
        })() || !1,
      suggestions: [],
      prompt: [],
      priority: 0,
    };
    t.a = function (e = u, t) {
      switch (t.type) {
        case i.B:
          return "" === t.composerContent
            ? s(s({}, e), {}, { isViewed: !1 })
            : e;
        case i.td: {
          var n, o;
          const { priority: r } = t,
            i =
              e.isViewed ||
              ((null == t ||
              null === (n = t.composerSuggestions) ||
              void 0 === n ||
              null === (o = n.suggestions) ||
              void 0 === o
                ? void 0
                : o.length) || 0) > 0;
          return (r || 0) < ((null == e ? void 0 : e.priority) || 0)
            ? e
            : t.composerSuggestions
            ? s(
                s(s({}, e), t.composerSuggestions),
                {},
                { priority: r, loading: !1, isViewed: i }
              )
            : s(
                s({}, u),
                {},
                {
                  isViewed: e.isViewed,
                  isDismissed: e.isDismissed,
                  priority: r,
                }
              );
        }
        case i.vd:
          return s(s({}, e), {}, { loading: t.loadingStatus });
        case i.ud:
          return (
            (c = Date.now()),
            r.a.set(a, c),
            s(s({}, e), {}, { isDismissed: !0 })
          );
        default:
          return e;
      }
      var c;
    };
  },
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "d", function () {
      return i;
    }),
      n.d(t, "c", function () {
        return o;
      }),
      n.d(t, "a", function () {
        return s;
      }),
      n.d(t, "b", function () {
        return c;
      });
    var r = n(67);
    const i = (e, t) => Object(r.tinycolor)(e).lighten(t).toHexString(),
      o = (e, t) => Object(r.tinycolor)(e).darken(t).toHexString(),
      s = (e, t) =>
        Object(r.tinycolor)(e)
          .setAlpha(Math.min(Math.max(t, 0), 1))
          .toRgbString(),
      c = (e, t) => Math.round(1e3 * r.tinycolor.readability(e, t)) / 1e3;
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return c;
    }),
      n.d(t, "b", function () {
        return u;
      }),
      n.d(t, "f", function () {
        return l;
      }),
      n.d(t, "d", function () {
        return d;
      }),
      n.d(t, "a", function () {
        return p;
      }),
      n.d(t, "i", function () {
        return f;
      }),
      n.d(t, "e", function () {
        return b;
      }),
      n.d(t, "h", function () {
        return h;
      }),
      n.d(t, "g", function () {
        return g;
      });
    var r = n(2),
      i = n(24);
    const o = (e) => e.newsItems,
      s = (e) => e.user,
      c = Object(r.createSelector)(o, (e) => (null == e ? void 0 : e.data)),
      a = Object(r.createSelector)(o, (e) =>
        null == e ? void 0 : e.fetchingStatus
      ),
      u = Object(r.createSelector)(a, (e) => e === i.a.inProgress),
      l = Object(r.createSelector)(s, (e) => e.newsfeedLastVisit),
      d = Object(r.createSelector)(s, (e) => e.unreadNewsItemsCount),
      p = Object(r.createSelector)(d, (e) => void 0 !== e && e > 0),
      f = Object(r.createSelector)(
        o,
        (e) => !(null == e || !e.newsfeedVisited)
      ),
      b = Object(r.createSelector)(o, (e) =>
        null == e ? void 0 : e.newsfeedId
      ),
      h = Object(r.createSelector)(o, (e) => (null == e ? void 0 : e.nextPage)),
      g = Object(r.createSelector)(u, b, c, (e, t, n) => !(e || !t || n));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    }),
      n.d(t, "b", function () {
        return s;
      });
    var r = n(38);
    const i = [
        "password",
        "passwd",
        "secret",
        "api_key",
        "apikey",
        "access_token",
        "auth_token",
        "credentials",
        "mysql_pwd",
        "stripetoken",
        "token",
      ],
      o = () => {
        var e;
        return null === (e = Object(r.d)()) || void 0 === e ? void 0 : e.host;
      },
      s = (e) =>
        e
          ? (i.forEach((t) => {
              e = c(e, t, "***");
            }),
            e)
          : e,
      c = (e, t, n) => {
        const r = new RegExp("([?&])" + t + "=.*?(&|$)", "i");
        return e.match(r) ? e.replace(r, "$1" + t + "=" + n + "$2") : e;
      };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "e", function () {
      return s;
    }),
      n.d(t, "b", function () {
        return c;
      }),
      n.d(t, "c", function () {
        return a;
      }),
      n.d(t, "d", function () {
        return l;
      }),
      n.d(t, "a", function () {
        return d;
      });
    var r = n(0);
    let i, o;
    function s() {
      return (e, t) => {
        const {
          launcherDiscoveryMode: {
            hasDiscoveredLauncher: n,
            isLauncherDiscoveryModeOpening: i,
            isLauncherDiscoveryModeClosing: o,
          },
        } = t();
        n ||
          i ||
          o ||
          (setTimeout(() => {
            e({ type: r.tc });
          }, 6e3),
          u(e));
      };
    }
    function c() {
      i && clearTimeout(i), o && clearTimeout(o);
    }
    function a() {
      return (e) => {
        u(e);
      };
    }
    const u = (e) => {
      (i = setTimeout(() => e({ type: r.s }), 9500)),
        (o = setTimeout(() => e(d()), 10200));
    };
    function l() {
      return { type: r.oc };
    }
    function d() {
      return { type: r.cb };
    }
  },
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return s;
    }),
      n.d(t, "c", function () {
        return c;
      }),
      n.d(t, "d", function () {
        return a;
      });
    var r = n(26),
      i = n(13),
      o = n(23);
    const s = Object(r.createAsyncThunk)(
        "spaces/prefetchAllSpaceContent",
        async (e, t) => {
          Object(i.a)(t.getState()).forEach((e) => {
            t.dispatch(u(e));
          });
        }
      ),
      c = Object(r.createAsyncThunk)(
        "spaces/prefetchInitialSpaceContent",
        async (e, t) => {
          const n = Object(i.f)(t.getState());
          return n === o.b && t.dispatch(u(o.d)), t.dispatch(u(n));
        }
      ),
      a = Object(r.createAsyncThunk)(
        "spaces/prefetchTasksSpaceContent",
        async (e, t) => {
          if (
            -1 !==
            Object(i.a)(t.getState())
              .map((e) => e.id)
              .indexOf(o.f.id)
          )
            return t.dispatch(u(o.f));
        }
      ),
      u = Object(r.createAsyncThunk)(
        "spaces/prefetchSpaceContent",
        async (e, t) => {
          if (!e) return t.rejectWithValue("Space does not exist");
          try {
            return await t.dispatch(e.getContent()), t.fulfillWithValue(e);
          } catch (n) {
            return t.rejectWithValue(e);
          }
        },
        {
          condition: (e, { getState: t }) =>
            ((e, t) =>
              !0 !== e.spaces.dataPrefetchedBySpace[null == t ? void 0 : t.id])(
              t(),
              e
            ),
        }
      ),
      l = Object(r.createSlice)({
        name: "spaces",
        initialState: { dataPrefetchedBySpace: {} },
        reducers: {},
        extraReducers: (e) => {
          e.addCase(u.pending, (e, t) => {
            const n = t.meta.arg;
            n && (e.dataPrefetchedBySpace[n.id] = !0);
          });
        },
      });
    t.a = l.reducer;
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    });
    const r = { default: "#3b99fc", dark: "#38373e", light: "#cdcecd" };
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return p;
    }),
      n.d(t, "a", function () {
        return f;
      });
    var r = n(29),
      i = n.n(r),
      o = n(10),
      s = n(33),
      c = n(65),
      a = n(0),
      u = n(28),
      l = n(13);
    const d = i()("intercom.actions.predictive-answers");
    function p(e, t, n = !1) {
      return async (r, i) => {
        try {
          const a = void 0,
            d = i(),
            { session: p, newConversation: b, user: h } = d,
            g = Object(s.b)(),
            m = {
              clientId: g,
              body: Object(c.c)(t.text),
              createdAt: new Date(),
              composerSuggestionItem: t,
            };
          r(f(null)), r(Object(o.h)(m, n));
          const v = await e.fireComposerSuggestion(p, {
            conversationId: a,
            suggestion: t,
            clientId: g,
            botIntro: b ? b.botIntroId : null,
            articleUrl: b ? b.articleUrl : null,
            resolutionBotBehaviorVersionId: h
              ? h.resolutionBotBehaviorVersionId
              : null,
          });
          r(Object(o.i)(v, null, null, Date.now(), "predictive_answer"));
          Object(l.i)(d) && r(Object(u.c)(v.id, !0));
        } catch (e) {
          r(Object(o.g)(null)),
            d(`Couldnt start conversation from suggestion due to e=${e}`);
        }
      };
    }
    function f(e) {
      return { type: a.zd, predictiveAnswersSuggestions: e };
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    });
    const r = { TOUR: 0, BANNER_VIEW: 11, SURVEY_PROGRESS: 85 };
  },
  ,
  function (e, t, n) {
    "use strict";
    var r = n(0);
    function i(e, t) {
      return async (n, i) => {
        const o = i(),
          { session: s } = o;
        let c;
        if (!t.payload || !t.payload.conversationId)
          throw new Error("conversationId needs to be provided as a parameter");
        c = t.payload.conversationId;
        try {
          n({ type: r.be, payload: { timestamp: Date.now() } });
          n(
            (function (e) {
              return { type: r.ce, payload: e, conversation: e };
            })(await e.triggerTransitions(s, c, t))
          );
        } catch (e) {
          n(
            ((a = e),
            {
              type: r.ae,
              error: !0,
              payload: new Error(
                (
                  a || "An error occured when triggering Operator transition."
                ).toString()
              ),
            })
          );
        }
        var a;
      };
    }
    var o = n(3),
      s = n(4),
      c = n(25),
      a = n(62),
      u = n(142),
      l = n(231),
      d = n(19),
      p = n(13),
      f = n(23),
      b = n(63),
      h = n(113),
      g = n(282),
      m = n(31);
    function v(e) {
      return { type: r.Hc, article: e };
    }
    function y(e, t, n = !1, i = !1, o = null, s = "", c) {
      return (a) => {
        a({
          type: r.pc,
          articleId: e,
          fromBrowseMode: n,
          metricMetadata: t,
          conversationId: o,
          hash: s,
          fromHomeScreenSuggestions: c,
        }),
          i && a(Object(l.a)());
      };
    }
    function O(e, t, n) {
      return (i) => {
        i({ type: r.mb }), i(y(e, t, !1, !0, null, "", n));
      };
    }
    function _(e, t, n = !1) {
      return async (i, s) => {
        const c = s(),
          {
            session: a,
            article: { viewStack: u },
          } = c;
        let l;
        if (e === u[u.length - 1]) l = Object(b.a)(c);
        else {
          if (((l = await o.c.getArticle(a, e, null, !1)), !l)) return;
          i(v(l)),
            i({ type: r.mb }),
            Object(p.i)(c) &&
              i(Object(d.push)(`/${f.a.id}/article-standalone`));
        }
        l && i(y(e, t, !1, !0, null, "", n));
      };
    }
    function w(e, t, n = !1) {
      return async (t, r) => {
        const { session: i, app: s } = r(),
          { conversationId: c } = s;
        return t(v(await o.c.getArticle(i, e, c, n)));
      };
    }
    function j(e, t, n = !1, r = !1, i = !1) {
      return async (o, s) => {
        const { app: c } = s(),
          { conversationId: a } = c;
        await o(w(e, 0, n)), o(y(e, t, n, r, a, "", i));
      };
    }
    function C(e) {
      return async (t, n) => {
        const { session: r } = n(),
          i = await o.c.getArticleByURL(r, e.url);
        await t(v(i)),
          await t({
            type: "CHANGE_ARTICLE_LOCALE",
            articleId: i.id,
            articleLocale: e,
          });
      };
    }
    function S(e, t = !0) {
      return (n, r) => {
        const { session: i } = r(),
          s = e.split("#")[1] || "";
        return o.c
          .getArticleByURL(i, e)
          .then((e) => {
            n(v(e)), n(t ? y(e.id, null, !0, !0, null, s) : _(e.id, {}));
          })
          .catch(() => {
            const t = Object(u.b)().createElement("a");
            (t.target = "_blank"), (t.href = e), t.click();
          });
      };
    }
    function E() {
      return (e, t) => {
        var n;
        const i = t();
        e({ type: r.h }),
          Object(p.i)(i) &&
            null !== (n = Object(b.c)(i)) &&
            void 0 !== n &&
            n.isStandalone &&
            e(Object(d.goBack)()),
          Object(p.i)(i) && Object(g.a)(i) && e(Object(h.b)());
      };
    }
    function I(e) {
      return (t, n) => {
        const o = n(),
          u = Object(a.c)(o);
        t({ type: r.p, closedAt: new Date() });
        const { conversationId: l } = o.app;
        if (u) {
          const { user: e, article: t } = o;
          Object(s.h)(e, "closed", c.j, c.F, "messenger", {
            article_id: null == t ? void 0 : t.activeArticleId,
          });
        } else
          l &&
            t(i(e, { type: "closed_article", payload: { conversationId: l } }));
        t(Object(m.o)());
      };
    }
    function A(e, t, n, i) {
      return (o, a) => {
        const { user: u } = a();
        return (
          Object(s.h)(u, "clicked", c.x, c.F, "messenger", {
            reaction_index: n,
          }),
          o(
            (function (e, t, n, i, o = "help_center", s = null) {
              return (c, a) => {
                c({ type: r.E, articleId: t, reactionIndex: n });
                const { session: u } = a(),
                  l = !1;
                return e.createArticleReaction(u, t, n, l, i, o, s);
              };
            })(e, t, n, i, "messenger", "search_browse")
          )
        );
      };
    }
    function P() {
      return { type: r.i };
    }
    n.d(t, "h", function () {
      return y;
    }),
      n.d(t, "k", function () {
        return O;
      }),
      n.d(t, "f", function () {
        return _;
      }),
      n.d(t, "g", function () {
        return w;
      }),
      n.d(t, "e", function () {
        return j;
      }),
      n.d(t, "i", function () {
        return C;
      }),
      n.d(t, "j", function () {
        return S;
      }),
      n.d(t, "a", function () {
        return E;
      }),
      n.d(t, "c", function () {
        return I;
      }),
      n.d(t, "d", function () {
        return A;
      }),
      n.d(t, "b", function () {
        return P;
      });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "f", function () {
      return s;
    }),
      n.d(t, "d", function () {
        return c;
      }),
      n.d(t, "e", function () {
        return a;
      }),
      n.d(t, "a", function () {
        return u;
      }),
      n.d(t, "c", function () {
        return l;
      }),
      n.d(t, "b", function () {
        return d;
      }),
      n.d(t, "i", function () {
        return p;
      }),
      n.d(t, "g", function () {
        return b;
      }),
      n.d(t, "h", function () {
        return h;
      });
    var r = n(30),
      i = n(38);
    const o = (e) => {
        var t, n;
        if (
          null !== (t = window) &&
          void 0 !== t &&
          null !== (n = t.parent) &&
          void 0 !== n &&
          n.document
        )
          return window.parent.document.querySelector(e);
      },
      s = () => {
        var e;
        return (
          (null === (e = Object(i.c)()) || void 0 === e
            ? void 0
            : e.innerHeight) || 0
        );
      },
      c = () => o('[name="intercom-modal-frame"]'),
      a = () => o('[name="intercom-note-frame"]'),
      u = () => o('[name="intercom-borderless-frame"]'),
      l = () => o('[name="intercom-messenger-frame"]'),
      d = () => {
        const e = l();
        if (e) return e.contentDocument;
      },
      p = (e) =>
        !(null == e || !e.postMessage || "function" != typeof e.postMessage),
      f = () => {
        const e = o('[name="intercom-launcher-frame"]');
        if (e) return e.contentDocument;
      },
      b = () => f() && Object(r.m)(f())[0],
      h = () => d() && Object(r.m)(d())[0];
  },
  function (e, t, n) {
    "use strict";
    t.a = (e) =>
      "participant_added" === e ||
      "participant_removed" === e ||
      "article_feedback_requested" === e ||
      "temporary_expectations" === e;
  },
  function (e, t, n) {
    "use strict";
    var r = n(9),
      i = n.n(r),
      o = n(2),
      s = n(12),
      c = n(334);
    t.a = Object(o.createSelector)(
      [(e) => e.app, (e) => e.user, (e) => e.launcher, c.a],
      (e, t, n, r) =>
        !r &&
        (function (e, t) {
          const {
            inboundMessages: n,
            outboundMessages: r,
            anonymousInboundMessages: i,
          } = e.features;
          return "user" === t.role ? n || r : i;
        })(e, t) &&
        (function (e) {
          switch (e.launcherEnabledOverride) {
            case "show":
              return !0;
            case "hide":
              return !1;
            default:
              return e.isLauncherEnabled;
          }
        })(n) &&
        !(function () {
          const e = s.b.get("intercom-snippet__intersection-mode");
          return !(
            i()(e) ||
            -1 !==
              [
                "inbound-custom-bot-preview",
                "outbound-custom-bot-preview",
                "inbound-custom-bot-local-preview",
                "outbound-custom-bot-local-preview",
              ].indexOf(e)
          );
        })()
    );
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "d", function () {
      return s;
    }),
      n.d(t, "c", function () {
        return c;
      }),
      n.d(t, "a", function () {
        return a;
      }),
      n.d(t, "b", function () {
        return u;
      });
    var r = n(2),
      i = n(74),
      o = n(52);
    const s = (e) => e.user.unreadNewsItemsCount || 0,
      c = Object(r.createSelector)(i.b, s, o.b, (e, t, n) => ({
        home: { activeNotificationCount: 0, hasPassiveNotifications: !1 },
        messages: { activeNotificationCount: e, hasPassiveNotifications: !1 },
        help: { activeNotificationCount: 0, hasPassiveNotifications: !1 },
        news: { activeNotificationCount: 0, hasPassiveNotifications: t > 0 },
        tasks: { activeNotificationCount: n, hasPassiveNotifications: !1 },
      })),
      a = Object(r.createSelector)(c, (e) => {
        let t = 0;
        return (
          Object.values(e).forEach((e) => {
            t += e.activeNotificationCount;
          }),
          t
        );
      }),
      u = Object(r.createSelector)(i.b, s, o.b, (e, t, n) => e + t + n > 0);
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return c;
    }),
      n.d(t, "b", function () {
        return a;
      }),
      n.d(t, "d", function () {
        return u;
      }),
      n.d(t, "c", function () {
        return l;
      });
    var r = n(3),
      i = n(0),
      o = n(27),
      s = n(119);
    function c() {
      return (e, t) => {
        const n = t();
        if (!Object(s.g)(n)) return;
        const { session: o } = n;
        e({ type: i.pb });
        const c = Object(s.e)(n);
        return r.c
          .fetchNewsItemsInNewsfeed(o, c)
          .then((t) => {
            e(
              (function (e) {
                return {
                  type: i.qb,
                  newsItems: e.newsItems,
                  nextPage: e.nextPage,
                };
              })(t)
            );
          })
          .catch(() => {
            e(d());
          });
      };
    }
    function a(e) {
      return (t, n) => {
        const { session: o, user: s } = n();
        return (
          t({ type: i.Bb }),
          r.c
            .fetchNewsItemsInNewsfeed(o, s.newsfeedId, e)
            .then((e) => {
              t(
                (function (e) {
                  return {
                    type: i.Cb,
                    newsItems: e.newsItems,
                    nextPage: e.nextPage,
                  };
                })(e)
              );
            })
            .catch(() => {
              t(d());
            })
        );
      };
    }
    function u() {
      return (e, t) => {
        const { session: n, user: s } = t();
        return r.c.notifyNewsfeedVisit(n, s.newsfeedId).then((t) => {
          var n;
          e(
            ((n = Object(o.c)(t.last_visit)),
            { type: i.nc, newsfeedLastVisit: n })
          );
        });
      };
    }
    function l(e) {
      return { type: i.mc, newsfeedId: e };
    }
    function d() {
      return { type: i.ob };
    }
  },
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return i;
    }),
      n.d(t, "a", function () {
        return o;
      });
    var r = n(2);
    const i = Object(r.createSelector)(
        (e) => e.tickets,
        (e) => (null == e ? void 0 : e.data) || []
      ),
      o = (e) => Object(r.createSelector)(i, (t) => t.find((t) => t.id === e));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return i;
    }),
      n.d(t, "a", function () {
        return o;
      });
    var r = n(29);
    const i = n.n(r)()("debug:tooltips"),
      o = {
        backgroundColor: "#FFFFFF",
        buttonColor: null,
        fontColor: "#222222",
      };
  },
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    });
    var r = n(7),
      i = n(188),
      o = n(96);
    const s = Object(r.d)("svg", { target: "ep90zfb0" })(
      "width:15px;height:16px;path{fill:",
      Object(r.g)("buttonTextColor"),
      ";}",
      ({ variant: e, theme: t }) =>
        !t.isPrimaryColorLight &&
        "secondary" === e &&
        Object(r.c)(
          "path{fill:",
          t.buttonBackgroundColor,
          ";}",
          i.a.className,
          ":hover &{path{fill:",
          t.buttonBackgroundColorHover,
          ";}}",
          i.a.className,
          ":active{path{fill:",
          t.buttonBackgroundColorActive,
          ";}}"
        ),
      " ",
      o.j
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1);
    t.a = () =>
      r.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
        },
        r.createElement("path", {
          d: "M5.42773 4.70898C5.46387 4.85254 5.53809 4.98828 5.65039 5.10059L8.54932 8L5.64893 10.9004C5.31689 11.2324 5.31689 11.7705 5.64893 12.1025C5.98096 12.4336 6.51904 12.4336 6.85107 12.1025L10.3516 8.60059C10.5591 8.39355 10.6367 8.10449 10.585 7.83691C10.5537 7.67578 10.4761 7.52246 10.3516 7.39844L6.85254 3.89941C6.52051 3.56738 5.98242 3.56738 5.65039 3.89941C5.43066 4.11816 5.35645 4.42871 5.42773 4.70898Z",
          fill: "#000000",
        })
      );
  },
  ,
  function (e, t, n) {
    "use strict";
    var r = n(4);
    t.a = ({ promise: e, maxRetries: t = 3 }) => {
      let n = 0;
      const i = window.parent.requestAnimationFrame,
        o = (s, c) => {
          e().then(
            (e) => s(e),
            (e) => {
              n < t && i
                ? ((n += 1), window.setTimeout(() => i(() => o(s, c)), 1e3 * n))
                : (Object(r.g)("dynamicImportCdnError", {
                    message: e && e.message,
                  }),
                  c(e));
            }
          );
        };
      return new Promise((e, t) => o(e, t));
    };
  },
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "d", function () {
      return o;
    }),
      n.d(t, "c", function () {
        return s;
      }),
      n.d(t, "e", function () {
        return c;
      }),
      n.d(t, "a", function () {
        return a;
      }),
      n.d(t, "b", function () {
        return u;
      }),
      n.d(t, "g", function () {
        return l;
      }),
      n.d(t, "f", function () {
        return d;
      }),
      n.d(t, "h", function () {
        return f;
      });
    var r = n(2);
    const i = (e) => e.messengerSheet,
      o =
        (Object(r.createSelector)(i, (e) => e.isSheetsDataLoading),
        Object(r.createSelector)(i, (e) => e.isSheetsDataLoaded)),
      s = Object(r.createSelector)(i, (e) => e.isProxyLoaded),
      c = Object(r.createSelector)(i, (e) => e.sheetTitle),
      a = Object(r.createSelector)(i, (e) => e.isNavigating),
      u = Object(r.createSelector)(i, (e) => e.isOpen),
      l = Object(r.createSelector)(i, (e) => e.sourceCard),
      d = Object(r.createSelector)(i, (e) => e.url),
      p = Object(r.createSelector)(i, (e) => e.data),
      f = Object(r.createSelector)(p, (e) => JSON.stringify(e));
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    }),
      n.d(t, "b", function () {
        return s;
      }),
      n.d(t, "c", function () {
        return c;
      });
    var r = n(19),
      i = n(169);
    const {
      createReduxHistory: o,
      routerMiddleware: s,
      routerReducer: c,
    } = Object(r.createReduxHistoryContext)({
      history: Object(i.createMemoryHistory)(),
      savePreviousLocations: 1,
    });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    }),
      n.d(t, "b", function () {
        return o;
      });
    var r = n(0);
    function i(e) {
      return { type: r.Z, botIntro: e, createdAt: new Date() };
    }
    function o(e) {
      return { type: r.ee, botIntro: e };
    }
  },
  function (e, t, n) {
    "use strict";
    class Predicate {
      constructor(e) {
        (this.chain = e), (this.matched = !1);
      }
      trigger() {
        this.triggering ||
          ((this.triggering = !0),
          (this.matched = !0),
          this.chain.evaluate(),
          (this.triggering = !1));
      }
      evaluate() {
        return this.matched;
      }
      cancel() {}
    }
    class composite_predicate_CompositePredicate extends Predicate {
      constructor(e, t) {
        super(e), (this.predicates = t);
      }
      cancel() {
        this.predicates.forEach((e) => e.cancel());
      }
    }
    class and_predicate_AndPredicate extends composite_predicate_CompositePredicate {
      evaluate() {
        return this.predicates.every((e) => e.evaluate());
      }
    }
    class duration_predicate_DurationPredicate extends Predicate {
      constructor(e, t) {
        super(e),
          (this.interval = t),
          (this.timer = setTimeout(() => this.trigger(), t));
      }
      cancel() {
        clearTimeout(this.timer);
      }
    }
    var r = n(38);
    class time_on_page_predicate_TimeOnPagePredicate extends Predicate {
      constructor(e, t) {
        super(e),
          (this._getURL = () => {
            var e;
            return null === (e = Object(r.d)()) || void 0 === e
              ? void 0
              : e.href.toLowerCase();
          }),
          (this._setURL = () => (this.url = this._getURL())),
          (this.interval = t),
          this._setTimeOnPageTimeout();
      }
      _check() {
        this.url !== this._getURL() && this._resetTimeOnPage();
      }
      _resetTimeOnPage() {
        this.cancel(), (this.matched = !1), this._setTimeOnPageTimeout();
      }
      _setTimeOnPageTimeout() {
        (this.timer = setTimeout(() => this.trigger(), this.interval)),
          (this.urlCheckInterval = setInterval(() => this._check(), 100)),
          this._setURL();
      }
      evaluate() {
        return this._check(), this.matched;
      }
      cancel() {
        clearTimeout(this.timer), clearInterval(this.urlCheckInterval);
      }
    }
    class duration_delta_predicate_DurationDeltaPredicate extends Predicate {
      constructor(e, t, n) {
        super(e),
          (this.attribute = n),
          (this.interval = t),
          setTimeout(() => this._createDeltaTimer(), 0);
      }
      _createDeltaTimer() {
        this.timer = setTimeout(() => {
          this._evaluateDeltaPredicate()
            ? this.trigger()
            : this._createDeltaTimer();
        }, this._getInterval());
      }
      _getInterval() {
        const e = this.getTimestamp();
        if (!e) return this.interval;
        const t = Date.now() - e;
        return Math.max(100, this.interval - t);
      }
      _evaluateDeltaPredicate() {
        const e = this.getTimestamp();
        if (!e) return !1;
        return Date.now() - e > this.interval;
      }
      getTimestamp() {
        return this.chain.getAttribute(this.attribute);
      }
      cancel() {
        clearTimeout(this.timer);
      }
    }
    class periodic_predicate_PeriodicPredicate extends Predicate {
      constructor(e, t, n) {
        super(e),
          (this.missing = n || !1),
          (this.interval = t),
          (this.intervalTimer = setInterval(() => {
            this._check();
          }, t));
      }
      _check() {
        this.check() ? this.trigger() : (this.matched = !1);
      }
      evaluate() {
        return this._check(), this.matched;
      }
      cancel() {
        clearInterval(this.intervalTimer);
      }
    }
    class duration_since_predicate_DurationSincePredicate extends periodic_predicate_PeriodicPredicate {
      constructor(e, t, n, r) {
        super(e, t, r), (this.attribute = n);
      }
      check() {
        const e = this.chain.getAttribute(this.attribute);
        if (!e) return this.missing;
        return Date.now() - e >= this.interval;
      }
    }
    class equals_predicate_EqualsPredicate extends periodic_predicate_PeriodicPredicate {
      constructor(e, t, n, r, i) {
        super(e, t), (this.attribute = n), (this.value = r), (this.other = i);
      }
      check() {
        return this.other
          ? this.chain.getAttribute(this.other) ===
              this.chain.getAttribute(this.attribute)
          : this.value === this.chain.getAttribute(this.attribute);
      }
    }
    class or_predicate_OrPredicate extends composite_predicate_CompositePredicate {
      evaluate() {
        return this.predicates.some((e) => e.evaluate());
      }
    }
    var i = n(30);
    class css_selector_predicate_CssSelectorPredicate extends Predicate {
      constructor(e, t) {
        super(e),
          (this._check = (e) => {
            if (this.isNodeVisible(e)) {
              if (this.matched) return;
              this.trigger();
            } else this.matched = !1;
          }),
          (this.selector = t);
      }
      evaluate() {
        const e = Object(i.i)(window.parent.document, this.selector);
        return this._check(e), this.matched;
      }
      isNodeVisible(e) {
        return e && Object(i.y)(e);
      }
    }
    class string_predicate_StringPredicate extends Predicate {
      constructor(e, t, n, r) {
        super(e),
          (this.targetString = t),
          (this.comparison = n),
          (this.candidateString = r);
      }
      evaluate() {
        return (this.matched = this._check()), this.matched;
      }
      _check() {
        switch (this.comparison) {
          case "eq":
            return this.candidateString === this.targetString;
          case "ne":
            return this.candidateString !== this.targetString;
          case "starts_with":
            return this.targetString.startsWith(this.candidateString);
          case "ends_with":
            return this.targetString.endsWith(this.candidateString);
          case "contains":
            return -1 !== this.targetString.indexOf(this.candidateString);
          case "not_contains":
            return !(-1 !== this.targetString.indexOf(this.candidateString));
          case "known":
            return !!this.targetString && "" !== this.targetString;
          default:
            return !1;
        }
      }
    }
    class url_predicate_UrlPredicate extends string_predicate_StringPredicate {
      constructor(e, t, n) {
        super(e),
          (this._getURL = () => {
            var e;
            return null === (e = Object(r.d)()) || void 0 === e
              ? void 0
              : e.href.toLowerCase();
          }),
          (this.targetString = this._getURL()),
          (this.comparison = t),
          (this.candidateString = null == n ? void 0 : n.toLowerCase()),
          setTimeout(() => this.evaluate(), 0),
          (this.interval = setInterval(() => this.evaluate(), 1e3));
      }
      evaluate() {
        return (
          (this.targetString = this._getURL()),
          this._check() ? this.trigger() : (this.matched = !1),
          this.matched
        );
      }
      _check() {
        if ("regex" === this.comparison) {
          return new RegExp(this.candidateString).test(this.targetString);
        }
        return super._check();
      }
      cancel() {
        clearInterval(this.interval);
      }
    }
    n.d(t, "a", function () {
      return predicate_chain_PredicateChain;
    });
    class predicate_chain_PredicateChain {
      constructor(e, t) {
        (this.condition = e),
          (this.callback = t),
          (this.root = new and_predicate_AndPredicate(
            this,
            this.processSubpredicates(e.predicates)
          ));
      }
      evaluate() {
        if (!this.evaluating) {
          this.evaluating = !0;
          const e = this.root.evaluate();
          return (
            e &&
              (this.cancel(),
              setTimeout(() => this.callback(this.condition), 0)),
            (this.evaluating = !1),
            e
          );
        }
      }
      cancel() {
        this.root.cancel();
      }
      setContext(e) {
        this.context = e;
      }
      getAttribute(e) {
        if (this.context) return this.context[e];
      }
      processPredicate(e) {
        var t;
        switch (e.type) {
          case "or":
            return new or_predicate_OrPredicate(
              this,
              this.processSubpredicates(e.predicates)
            );
          case "and":
            return new and_predicate_AndPredicate(
              this,
              this.processSubpredicates(e.predicates)
            );
          case "eq":
            return new equals_predicate_EqualsPredicate(
              this,
              this.parseInterval(e.interval),
              e.attribute,
              e.value,
              e.other
            );
          case "string":
            if ("client_attributes.last_visited_url" === e.attribute)
              return new url_predicate_UrlPredicate(
                this,
                e.comparison,
                e.value
              );
          case "duration_integer":
            return null !== (t = e.attribute) &&
              void 0 !== t &&
              -1 !== t.indexOf("time_on_page")
              ? new time_on_page_predicate_TimeOnPagePredicate(
                  this,
                  1e3 * this.parseInterval(e.value)
                )
              : new duration_predicate_DurationPredicate(
                  this,
                  1e3 * this.parseInterval(e.value)
                );
          case "duration_integer_ms":
            return new duration_predicate_DurationPredicate(
              this,
              this.parseInterval(e.value)
            );
          case "duration_delta":
            return new duration_delta_predicate_DurationDeltaPredicate(
              this,
              this.parseInterval(e.value),
              e.attribute
            );
          case "duration_since":
            return new duration_since_predicate_DurationSincePredicate(
              this,
              this.parseInterval(e.value),
              e.attribute,
              e.missing
            );
          case "css_selector":
            return new css_selector_predicate_CssSelectorPredicate(
              this,
              e.value
            );
        }
      }
      parseInterval(e) {
        return parseInt(e, 10);
      }
      processSubpredicates(e) {
        return e ? e.map((e) => this.processPredicate(e)).filter(Boolean) : [];
      }
    }
  },
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    }),
      n.d(t, "b", function () {
        return o;
      });
    const r = (e) => {
        const t = function (t) {
            return e[t];
          },
          n = "(?:" + Object.keys(e).join("|") + ")",
          r = RegExp(n),
          i = RegExp(n, "g");
        return function (e) {
          return (e = null == e ? "" : "" + e), r.test(e) ? e.replace(i, t) : e;
        };
      },
      i = r({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;",
      }),
      o = r({
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#x27;": "'",
        "&#x60;": "`",
        "&#39;": "'",
      });
  },
  function (e, t, n) {
    "use strict";
    var r = n(2);
    t.a = Object(r.createSelector)(
      (e) => e.openInboundConversationIds,
      (e) => (null == e ? void 0 : e.length) > 0
    );
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    }),
      n.d(t, "b", function () {
        return s;
      });
    var r = n(7);
    const i = {
        name: "7zjkqo",
        styles: "width:24px;height:24px;fill:white;cursor:pointer;",
      },
      o = Object(r.d)("svg", { target: "e1ln3wwy0" })(i),
      s = Object(r.d)("svg", { target: "e1ln3wwy1" })(i);
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return a;
    });
    var r = n(9),
      i = n.n(r),
      o = n(26),
      s = n(31),
      c = n(3);
    const a = Object(o.createAsyncThunk)("tasks/getTasksData", async (e, t) => {
        const n = t.getState(),
          r = t.dispatch,
          { session: o } = n,
          { isFetching: a, isFetched: u } = n.tasks;
        if (a || u) return;
        r(l());
        const { checklists: d } = await c.c.loadChecklists(o);
        i()(d) || r(Object(s.k)(c.c.buildChecklists(d), !1));
      }),
      u = Object(o.createSlice)({
        name: "tasks",
        initialState: { isFetched: !1, isFetching: !1, isFailed: !1 },
        reducers: {
          getTasksDataRequest(e) {
            (e.isFetching = !0), (e.isFetched = !1), (e.isFailed = !1);
          },
        },
        extraReducers: (e) => {
          e.addCase(a.fulfilled, (e) => {
            (e.isFetching = !1), (e.isFetched = !0), (e.isFailed = !1);
          });
        },
      }),
      { getTasksDataRequest: l } = u.actions;
    t.a = u.reducer;
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return u;
    });
    var r = n(9),
      i = n.n(r),
      o = n(26),
      s = n(347),
      c = n(209),
      a = n(0);
    const u = Object(o.createAsyncThunk)(
        "tickets/getTicketsData",
        async (e, t) => {
          const n = t.getState(),
            r = t.dispatch,
            { isFetching: o, isFetched: c } = n.tickets;
          if (o || c) return;
          r(p());
          const { tickets: a } = { tickets: [] };
          i()(a) || r(Object(s.c)(a));
        }
      ),
      l = Object(o.createSlice)({
        name: "tickets",
        initialState: { isFetched: !1, isFetching: !1, isFailed: !1, data: [] },
        reducers: {
          getTicketsDataRequest(e) {
            (e.isFetching = !0), (e.isFetched = !1), (e.isFailed = !1);
          },
        },
        extraReducers: (e) => {
          e.addCase(u.fulfilled, (e) => {
            (e.isFetching = !1), (e.isFetched = !0), (e.isFailed = !1);
          }),
            e.addCase(a.Rb, (e, t) => {
              var n;
              const r =
                null == t || null === (n = t.conversation) || void 0 === n
                  ? void 0
                  : n.ticket;
              r && d(e, [r]);
            }),
            e.addCase(a.Ob, (e, t) => {
              var n;
              const r =
                null == t || null === (n = t.conversations) || void 0 === n
                  ? void 0
                  : n.conversations;
              if (!r) return;
              d(e, r.map((e) => e.ticket).filter(Boolean));
            }),
            e.addCase(a.Pc, (e, t) => {
              t.tickets.forEach((t) => (e.data = Object(c.c)(e.data, t, "id")));
            });
        },
      });
    function d(e, t) {
      t.forEach((t) => {
        e.data = Object(c.c)(e.data, t, "id");
      });
    }
    const { getTicketsDataRequest: p } = l.actions;
    t.a = l.reducer;
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return i;
    }),
      n.d(t, "a", function () {
        return o;
      });
    var r = n(0);
    function i(e) {
      return { type: r.M, customizationAttributes: e };
    }
    function o(e) {
      return { type: r.F, customizationAttributes: e };
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var r = n(0);
    let i;
    function o(e, t) {
      return (n) => {
        const o = { type: r.Dd, payload: { alertType: e, alertPayload: t } };
        n(o),
          i && clearTimeout(i),
          (i = setTimeout(() => {
            n({ type: r.o });
          }, 5e3));
      };
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return c;
    }),
      n.d(t, "a", function () {
        return a;
      });
    var r = n(10),
      i = n(51),
      o = n(17),
      s = n(0);
    function c(e) {
      return (t, n) => {
        t(u());
        const { session: o } = n();
        return e
          .getUnreadConversations(o)
          .then((o) => {
            !(function (e, t, n, o) {
              n(l(e));
              const { unreadConversationIds: s } = e;
              s.length > 0 && n(Object(i.d)(t, "handleUnreadConversations"));
              const c = o(),
                { conversationId: u } = c.app;
              a(c, s) && n(Object(r.m)(t, u));
            })(o, e, t, n);
          })
          .catch(() => {});
      };
    }
    function a(e, t) {
      const { conversationId: n } = e.app;
      return "conversation" === Object(o.i)(e) && -1 !== t.indexOf(n);
    }
    function u() {
      return { type: s.Xb };
    }
    function l(e) {
      return { type: s.Yb, unreadConversations: e };
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return c;
    }),
      n.d(t, "c", function () {
        return a;
      }),
      n.d(t, "a", function () {
        return u;
      });
    var r = n(2);
    const i = (e) => e.triggers,
      o = Object(r.createSelector)(i, (e) => e.triggers),
      s = Object(r.createSelector)(i, (e) => e.active),
      c = Object(r.createSelector)(i, (e) => e.failed),
      a = (e) =>
        Object(r.createSelector)(o, (t) => {
          const n = t[e];
          if (n) return n;
          throw new Error(`Can't find the messenger trigger of id=${e}`);
        }),
      u = Object(r.createSelector)(o, s, (e, t) => {
        const n = e[t];
        if (n) return n;
        throw new Error("No messenger trigger is active");
      });
  },
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    }),
      n.d(t, "b", function () {
        return o;
      });
    var r = n(7);
    const i = Object(r.d)("button", { target: "e1prtmiu0" })(
        "height:40px;color:",
        Object(r.g)("buttonTextColor"),
        ";font-size:14px;line-height:40px;pointer-events:auto;cursor:pointer;border-radius:40px;text-align:center;transition:all 120ms;padding:0 24px;span{padding-left:10px;white-space:nowrap;font-weight:600;}",
        ({ variant: e, theme: t }) =>
          "default" === e &&
          Object(r.c)(
            "background-color:",
            t.buttonBackgroundColor,
            ";color:",
            t.buttonTextColor,
            ";transition:color 0.3s,background-color 0.3s;&:hover{background-color:",
            t.buttonBackgroundColorHover,
            ";}&:active{background-color:",
            t.buttonBackgroundColorActive,
            ";}"
          ),
        " ",
        ({ variant: e, theme: t }) =>
          "default" === e &&
          t.isPrimaryColorLight &&
          Object(r.c)("border:1px solid ", t.lightGrey2, ";"),
        " ",
        ({ variant: e, theme: t }) =>
          "secondary" === e &&
          t.isPrimaryColorLight &&
          Object(r.c)(
            "background-color:",
            t.buttonBackgroundColor,
            ";color:",
            t.buttonTextColor,
            ";transition:color 0.3s,background-color 0.3s;border:1px solid ",
            t.lightGrey2,
            ";&:hover{background-color:",
            t.buttonBackgroundColorHover,
            ";}&:active{background-color:",
            t.buttonBackgroundColorActive,
            ";}"
          ),
        " ",
        ({ variant: e, theme: t }) =>
          "secondary" === e &&
          !t.isPrimaryColorLight &&
          Object(r.c)(
            "background-color:",
            t.white,
            ";color:",
            t.buttonBackgroundColor,
            ";border:1px solid ",
            t.buttonBackgroundColor,
            ";transition:color 0.3s,background-color 0.3s,border 0.3s;&:hover{color:",
            t.buttonBackgroundColorHover,
            ";border:1px solid ",
            t.buttonBackgroundColorHover,
            ";}&:active{color:",
            t.buttonBackgroundColorActive,
            ";border:1px solid ",
            t.buttonBackgroundColorActive,
            ";}"
          ),
        " ",
        ({ variant: e, theme: t }) =>
          "fixed" === e &&
          Object(r.c)(
            "background-color:",
            t.appColor,
            ";box-shadow:0px 4px 12px rgba(0,0,0,0.1);position:absolute;bottom:",
            t.newConversationButtonBottomPx,
            "px;left:50%;transform:translateX(-50%);&:hover{box-shadow:0 8px 24px rgba(0,0,0,0.2);}&:active{transform:translateX(-50%) translateY(2px);box-shadow:0px 4px 12px rgba(0,0,0,0.1);}"
          )
      ),
      o = Object(r.d)("div", { target: "e1prtmiu1" })({
        name: "18biwo",
        styles: "display:inline-flex;align-items:center;",
      });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    function r(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function i(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? r(Object(n), !0).forEach(function (t) {
              o(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : r(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function o(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function s(e, t, n) {
      return e.map((e, r) => (r === t ? i(i({}, e), n) : e));
    }
    function c(e, t, n) {
      let r = e.findIndex((e) => e[n] === t[n]);
      return -1 === r && (r = e.length), (e[r] = t), e;
    }
    function a(e, t) {
      const n = e.findIndex((e) => e === t);
      return e[(n + 1) % e.length];
    }
    n.d(t, "b", function () {
      return s;
    }),
      n.d(t, "c", function () {
        return c;
      }),
      n.d(t, "a", function () {
        return a;
      });
  },
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return o;
    }),
      n.d(t, "a", function () {
        return s;
      }),
      n.d(t, "b", function () {
        return c;
      });
    var r = n(3),
      i = n(0);
    function o(e) {
      const {
        activeSubscription: t,
        userHashVerified: n,
        secureInstallV2: r,
        messengerEnabledForVisitors: o,
        messengerEnabledForUsers: s,
      } = e;
      return {
        type: i.sc,
        activeSubscription: t,
        userHashVerified: n,
        secureInstallV2: r,
        messengerEnabledForVisitors: o,
        messengerEnabledForUsers: s,
      };
    }
    function s() {
      return { type: i.r };
    }
    function c() {
      return (e, t) => {
        const { session: n } = t();
        return r.c.disableInstallMode(n).then(() => {
          e(s());
        });
      };
    }
  },
  function (e, t, n) {
    "use strict";
    function r() {
      const e = window.document,
        t = e.createElement("div");
      (t.style.visibility = "hidden"),
        (t.style.width = "100px"),
        (t.style.msOverflowStyle = "scrollbar"),
        e.body.appendChild(t);
      const n = t.offsetWidth;
      t.style.overflow = "scroll";
      const r = e.createElement("div");
      (r.style.width = "100%"), t.appendChild(r);
      const i = r.offsetWidth;
      return t.parentNode.removeChild(t), n - i;
    }
    n.d(t, "a", function () {
      return r;
    });
  },
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return o;
      });
    const r = "Idempotency-Key";
    function i(e) {
      return Math.floor(4294967296 * (1 + e()))
        .toString(16)
        .substring(1);
    }
    function o(e = Math.random) {
      return i(e) + i(e);
    }
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    var r = n(18);
    var i = function (e, t, n, r, i, o) {
      const s = new XMLHttpRequest();
      (s.onerror = () => o()),
        (s.onabort = () => o()),
        (s.onload = () => {
          const { readyState: e, status: t, response: n } = s;
          4 === e && (t >= 200 && t < 300 ? i(n) : o(n));
        }),
        s.open(t, e, !0),
        (s.withCredentials = !0),
        Object.keys(n).forEach((e) => {
          s.setRequestHeader(e, n[e]);
        }),
        s.send(r);
    };
    const o = r.a.hasXhr2Support();
    t.a = {
      post: (e, t, n) =>
        new Promise((r, s) => {
          if (!o) throw new Error("Browser does not support XMLHttpRequest.");
          i(e, "POST", t, n, r, s);
        }),
    };
  },
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "e", function () {
      return s;
    }),
      n.d(t, "d", function () {
        return c;
      }),
      n.d(t, "c", function () {
        return a;
      }),
      n.d(t, "a", function () {
        return l;
      }),
      n.d(t, "b", function () {
        return d;
      });
    var r = n(14);
    const i = { s: 1e3, m: 60, h: 60, d: 24, w: 7 };
    function o(e) {
      const t = Date.now();
      let n = new Date(t) - e;
      n = Math.max(0, n);
      let r = "s";
      for (const e in i) {
        if (n < i[e]) break;
        (r = e), (n /= i[e]);
      }
      return (n = Math.floor(n)), { unit: r, delta: n };
    }
    function s(e) {
      if (!e) return "";
      if (
        !(function (e) {
          return "Invalid Date" !== e.toString();
        })(e)
      )
        return "";
      const { unit: t, delta: n } = o(e);
      return "s" === t
        ? Object(r.e)("time_just_now")
        : "m" === t
        ? Object(r.e)("time_minute_ago", { delta: n })
        : "h" === t
        ? Object(r.e)("time_hour_ago", { delta: n })
        : "d" === t
        ? Object(r.e)("time_day_ago", { delta: n })
        : "w" === t
        ? Object(r.e)("time_week_ago", { delta: n })
        : void 0;
    }
    function c(e) {
      const t = (new Date().getTime() - e.getTime()) / 6e4;
      if (t <= 15) return Object(r.e)("active_15m_ago", { minutes: 15 });
      if (t <= 37) return Object(r.e)("active_minute_ago", { minutes: 30 });
      if (t <= 52) return Object(r.e)("active_minute_ago", { minutes: 45 });
      if (t <= 90) return Object(r.e)("active_hour_ago", { hours: 1 });
      if (t <= 1410) {
        const e = Math.round((t - 1) / 60);
        return Object(r.e)("active_hour_ago", { hours: e });
      }
      if (t <= 1470) return Object(r.e)("active_day_ago", { days: 1 });
      if (t <= 8640) {
        const e = Math.round((t - 1) / 1440);
        return Object(r.e)("active_day_ago", { days: e });
      }
      return Object(r.e)("active_week_ago");
    }
    function a(e, t) {
      return e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
    }
    const u = (e) => `00${e}`.substr(-2);
    function l(e) {
      if (!e) return null;
      if ("en" !== Object(r.a)())
        return `${u(e.getHours())}:${u(e.getMinutes())}`;
      let t = e.getHours();
      0 === t && (t = 12), (t = t > 12 ? t % 12 : t);
      return `${t}:${u(e.getMinutes())} ${e.getHours() < 12 ? "am" : "pm"}`;
    }
    function d(e, t) {
      const n = e.valueOf() + 60 * e.getTimezoneOffset() * 1e3;
      return l(new Date(n + 1e3 * t));
    }
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n.n(r),
      o = n(230);
    t.a = () =>
      i.a.createElement(
        o.c,
        { focusable: "false", "aria-hidden": "true" },
        i.a.createElement(
          "g",
          {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd",
          },
          i.a.createElement(
            "g",
            {
              transform: "translate(-340.000000, -32.000000)",
              fill: "#ffffff",
            },
            i.a.createElement("polygon", {
              points:
                "350.656537 44 346 39.343463 341.343463 44 340 42.656537 344.656537 38 340 33.343463 341.343463 32 346 36.656537 350.656537 32 352 33.343463 347.343463 38 352 42.656537",
            })
          )
        )
      );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1);
    t.a = () =>
      r.createElement(
        "svg",
        {
          width: "16",
          height: "17",
          viewBox: "0 0 16 17",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        r.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M2.5 3.5C1.67157 3.5 1 4.17157 1 5V5.5V6.25C1 6.52614 1.22842 6.7428 1.4934 6.82052C2.21966 7.03354 2.75 7.70484 2.75 8.5C2.75 9.29516 2.21966 9.96646 1.4934 10.1795C1.22842 10.2572 1 10.4739 1 10.75V11.5V12C1 12.8284 1.67157 13.5 2.5 13.5H13.5C14.3284 13.5 15 12.8284 15 12V11.5V10.75C15 10.4739 14.7716 10.2572 14.5066 10.1795C13.7803 9.96646 13.25 9.29516 13.25 8.5C13.25 7.70484 13.7803 7.03354 14.5066 6.82052C14.7716 6.7428 15 6.52614 15 6.25V5.5V5C15 4.17157 14.3284 3.5 13.5 3.5H2.5ZM11 7L5 7C4.58579 7 4.25 6.66421 4.25 6.25C4.25 5.83579 4.58579 5.5 5 5.5H11C11.4142 5.5 11.75 5.83579 11.75 6.25C11.75 6.66421 11.4142 7 11 7Z",
          fill: "currentColor",
        })
      );
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var r = n(1),
      i = n(340);
    function o() {
      return r.createElement(
        i.a,
        { focusable: "false", "aria-hidden": "true" },
        r.createElement(
          "g",
          { fill: "none" },
          r.createElement(
            "g",
            { fill: "#FFF" },
            r.createElement("polygon", {
              transform:
                "translate(-40 -29)translate(47.071068 36.071068)rotate(-315)translate(-47.071068 -36.071068)",
              points:
                "44.3 38.8 44.3 31.1 42.1 31.1 42.1 40 42.1 41.1 52.1 41.1 52.1 38.8",
            })
          )
        )
      );
    }
  },
  function (e, t, n) {
    "use strict";
    var r = n(1);
    t.a = () =>
      r.createElement(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          role: "presentation",
        },
        r.createElement("path", {
          d: "M6.5 3.5L11 8L6.5 12.5",
          stroke: "#000000",
          strokeWidth: "1.75",
          strokeLinecap: "square",
        })
      );
  },
  function (e, t, n) {
    "use strict";
    t.a = (e) => {
      try {
        return window.btoa(unescape(encodeURIComponent(e)));
      } catch (t) {
        return e;
      }
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(1);
    t.a = () =>
      r.createElement(
        "svg",
        { focusable: "false", "aria-hidden": "true", viewBox: "0 0 16 18" },
        r.createElement("path", {
          d: "M14.154 6.918l-.004.003.001-.004-3.287 3.286-.006-.005-3.574 3.574c-.016.017-.03.036-.048.053l-.05.047-.043.041v-.002c-1.167 1.07-2.692 1.331-3.823.2-1.13-1.13-.89-2.677.18-3.843l-.005-.004.074-.073.016-.018c.006-.005.012-.009.017-.016l6.053-6.053.761.76-6.053 6.054-.029.028v.001l-.005.004-.073.074c.011-.01.025-.018.035-.03-.688.75-.93 1.636-.21 2.356.72.72 1.583.456 2.333-.232l-.03.034.04-.042.01-.008.008-.009.033-.03.031-.034.01-.009.007-.009 5.004-5.003.005.006 1.858-1.859c1.223-1.218 1.51-2.913.291-4.132C12.462.806 10.414.74 9.195 1.958L2.248 8.905c.003 0 .006-.002.008-.004-1.625 1.667-1.542 4.43.103 6.074 1.646 1.646 4.474 1.795 6.141.17-.003.002-.004.008-.008.012l.047-.047 6.053-6.054.042-.042.743.78-.025.021.001.002-6.05 6.05-.002.002-.002.001-.046.046h-.002c-2.094 2.04-5.578 1.894-7.652-.18-2.049-2.049-2.15-5.407-.183-7.505l-.006-.005h-.002l.076-.078 6.943-6.944.003-.002.004-.005c1.641-1.64 4.367-1.574 6.008.066 1.64 1.642 1.353 4.014-.288 5.655z",
          fillRule: "evenodd",
        })
      );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1);
    t.a = () =>
      r.createElement(
        "svg",
        { focusable: "false", "aria-hidden": "true", viewBox: "0 0 18 18" },
        r.createElement("path", {
          d: "M9 0a9 9 0 1 1 0 18A9 9 0 0 1 9 0zm0 1C4.589 1 1 4.589 1 9s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM5 6.999a1 1 0 1 1 2.002.004A1 1 0 0 1 5 6.999zm5.999 0a1.002 1.002 0 0 1 2.001 0 1 1 0 1 1-2.001 0zM8.959 13.5c-.086 0-.173-.002-.26-.007-2.44-.132-4.024-2.099-4.09-2.182l-.31-.392.781-.62.312.39c.014.017 1.382 1.703 3.37 1.806 1.306.072 2.61-.554 3.882-1.846l.351-.356.712.702-.35.356c-1.407 1.427-2.886 2.15-4.398 2.15z",
          fillRule: "evenodd",
        })
      );
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return i;
    }),
      n.d(t, "a", function () {
        return o;
      });
    var r = n(5);
    const i = (e = !0) => Object(r.d)("conversationDemoModeEnabled", e),
      o = () => {
        var e;
        return !(
          null === (e = Object(r.b)()) ||
          void 0 === e ||
          !e.conversationDemoModeEnabled
        );
      };
  },
  function (e, t) {
    e.exports = {
      source_map: "hidden-source-map",
      api_base: "https://api-iam.intercom.io",
      public_path: "https://js.intercomcdn.com/",
      sheets_proxy_path: "https://intercom-sheets.com/sheets_proxy",
      sentry_proxy_path: "https://www.intercom-reporting.com/sentry/index.html",
      install_mode_base: "https://app.intercom.com",
      sentry_dsn:
        "https://f305de69cac64a84a494556d5303dc2d@app.getsentry.com/24287",
      intersection_js: "https://js.intercomcdn.com/intersection/assets/app.js",
      intersection_styles:
        "https://js.intercomcdn.com/intersection/assets/styles.js",
      article_search_messenger_app_id: 27,
      mode: "production",
    };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var r = n(1),
      i = n(269);
    function o() {
      return r.createElement(
        i.a,
        {
          focusable: "false",
          "aria-hidden": "true",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          xmlns: "http://www.w3.org/2000/svg",
        },
        r.createElement("path", {
          d: "M13.933 3.09a.35.35 0 0 0-.495.026l-7.236 8.012-3.757-3.393a.35.35 0 0 0-.495.025l-.86.951a.35.35 0 0 0 .026.495l4.96 4.48a.34.34 0 0 0 .17.082.346.346 0 0 0 .34-.107l8.324-9.217a.35.35 0 0 0-.026-.494l-.951-.86z",
        })
      );
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    }),
      n.d(t, "b", function () {
        return c;
      }),
      n.d(t, "c", function () {
        return a;
      });
    var r = n(7),
      i = n(96),
      o = { name: "13o7eu2", styles: "display:block;" };
    const s = Object(r.d)("div", { target: "e1jjo5ve0" })(
        "z-index:",
        Object(i.n)(3),
        ";position:absolute;width:51px;height:51px;top:0;right:0;background-position:center;margin:12px 8px 12px 2px;display:none;cursor:pointer;*{cursor:pointer;}",
        ({ enabled: e }) => e && o
      ),
      c = Object(r.d)("div", { target: "e1jjo5ve1" })(
        "width:51px;height:51px;margin:0 auto;border-radius:",
        Object(r.g)("messengerBorderRadiusPx"),
        "px;display:flex;align-items:center;transform:translateZ(0);transition:background-color ease 200ms;&:hover{background-color:rgba(0,0,0,0.5);}"
      ),
      a = Object(r.d)("svg", { target: "e1jjo5ve2" })(
        "margin:0 auto;width:12px;height:12px;> g > g{fill:",
        Object(r.g)("headerTitleColor"),
        ";}"
      );
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return s;
    }),
      n.d(t, "a", function () {
        return c;
      }),
      n.d(t, "c", function () {
        return a;
      });
    var r = n(4),
      i = n(25),
      o = n(0);
    function s(e, t = i.n, n = i.E) {
      return (s, c) => {
        const { user: a } = c(),
          u = e ? "expanded" : "collapsed";
        let l = {};
        var d;
        t === i.j &&
          (l = {
            article_id:
              null === (d = c().article) || void 0 === d
                ? void 0
                : d.activeArticleId,
          });
        Object(r.h)(a, u, t, n, "messenger", l),
          s({ type: o.wd, shouldExpand: e });
      };
    }
    function c() {
      return { type: o.nb };
    }
    function a(e, t, n) {
      return { type: o.qe, spaceId: e, height: t, isOverlay: n };
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    });
    const r = (e) =>
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        e
      );
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "d", function () {
      return p;
    }),
      n.d(t, "c", function () {
        return f;
      }),
      n.d(t, "b", function () {
        return b;
      }),
      n.d(t, "a", function () {
        return h;
      });
    const r = /\s+/g,
      i = /^(00)|(\+)/i,
      o = /[^(\d|\s|\+|\.|\(|\)|\-)]/g,
      s = /\D/g,
      c = "that_number_needs_a_prefix",
      a = "that_number_doesnt_look_quite_right",
      u = "that_country_code_doesnt_look_quite_right",
      l = "that_number_is_missing_a_few_digits",
      d = "that_number_has_too_many_digits",
      p = (e) => void 0 === f(e),
      f = (e) => {
        if (!g(e)) return c;
        if ((e = e.replace(i, "")).match(o)) return a;
        if ((e = e.replace(s, "")).length > 15) return d;
        const t = h(e);
        return (
          t && (e = e.substring(t.dialCode.length)),
          e.length < 6 ? l : t ? void 0 : u
        );
      },
      b = (e) => {
        const t = w[e];
        return t ? `+${t.dialCode}` : "+1";
      },
      h = (e) => {
        if ((e = m(e)).length < 4) return;
        const t = v(e);
        return _(t);
      },
      g = (e) => e.match(i),
      m = (e) =>
        (e = (e = (e = e.replace(r, "")).replace(i, "")).replace(o, "")).slice(
          0,
          4
        ),
      v = (e) => {
        const t = [],
          n = Object.keys(w);
        for (let r = 0; r <= n.length - 1; r++) {
          const i = y(n[r]),
            o = O(i);
          if (o.indexOf(e) > -1) {
            t.push(i);
            break;
          }
          o.some((t) => e.startsWith(t)) && t.push(i);
        }
        return t;
      },
      y = (e) => Object.assign(w[e], { code: e }),
      O = (e) => {
        const { dialCode: t, areaCodes: n } = e;
        return n ? n.map((e) => `${t}${e}`) : [t];
      },
      _ = (e) => {
        if (1 === e.length) return e[0];
        if (e.length > 1) {
          if (1 === new Set(e.map((e) => e.dialCode)).size)
            return e.find((e) => 0 === e.priority);
        }
      },
      w = {
        af: { dialCode: "93", areaCodes: null, priority: 0 },
        al: { dialCode: "355", areaCodes: null, priority: 0 },
        dz: { dialCode: "213", areaCodes: null, priority: 0 },
        as: { dialCode: "1684", areaCodes: null, priority: 0 },
        ad: { dialCode: "376", areaCodes: null, priority: 0 },
        ao: { dialCode: "244", areaCodes: null, priority: 0 },
        ai: { dialCode: "1264", areaCodes: null, priority: 0 },
        ag: { dialCode: "1268", areaCodes: null, priority: 0 },
        ar: { dialCode: "54", areaCodes: null, priority: 0 },
        am: { dialCode: "374", areaCodes: null, priority: 0 },
        aw: { dialCode: "297", areaCodes: null, priority: 0 },
        au: { dialCode: "61", areaCodes: null, priority: 0 },
        at: { dialCode: "43", areaCodes: null, priority: 0 },
        az: { dialCode: "994", areaCodes: null, priority: 0 },
        bs: { dialCode: "1242", areaCodes: null, priority: 0 },
        bh: { dialCode: "973", areaCodes: null, priority: 0 },
        bd: { dialCode: "880", areaCodes: null, priority: 0 },
        bb: { dialCode: "1246", areaCodes: null, priority: 0 },
        by: { dialCode: "375", areaCodes: null, priority: 0 },
        be: { dialCode: "32", areaCodes: null, priority: 0 },
        bz: { dialCode: "501", areaCodes: null, priority: 0 },
        bj: { dialCode: "229", areaCodes: null, priority: 0 },
        bm: { dialCode: "1441", areaCodes: null, priority: 0 },
        bt: { dialCode: "975", areaCodes: null, priority: 0 },
        bo: { dialCode: "591", areaCodes: null, priority: 0 },
        ba: { dialCode: "387", areaCodes: null, priority: 0 },
        bw: { dialCode: "267", areaCodes: null, priority: 0 },
        br: { dialCode: "55", areaCodes: null, priority: 0 },
        io: { dialCode: "246", areaCodes: null, priority: 0 },
        vg: { dialCode: "1284", areaCodes: null, priority: 0 },
        bn: { dialCode: "673", areaCodes: null, priority: 0 },
        bg: { dialCode: "359", areaCodes: null, priority: 0 },
        bf: { dialCode: "226", areaCodes: null, priority: 0 },
        bi: { dialCode: "257", areaCodes: null, priority: 0 },
        kh: { dialCode: "855", areaCodes: null, priority: 0 },
        cm: { dialCode: "237", areaCodes: null, priority: 0 },
        ca: {
          dialCode: "1",
          areaCodes: [
            "204",
            "226",
            "236",
            "249",
            "250",
            "289",
            "306",
            "343",
            "365",
            "387",
            "403",
            "416",
            "418",
            "431",
            "437",
            "438",
            "450",
            "506",
            "514",
            "519",
            "548",
            "579",
            "581",
            "587",
            "604",
            "613",
            "639",
            "647",
            "672",
            "705",
            "709",
            "742",
            "778",
            "780",
            "782",
            "807",
            "819",
            "825",
            "867",
            "873",
            "902",
            "905",
          ],
          priority: 1,
        },
        cv: { dialCode: "238", areaCodes: null, priority: 0 },
        bq: { dialCode: "599", areaCodes: null, priority: 1 },
        ky: { dialCode: "1345", areaCodes: null, priority: 0 },
        cf: { dialCode: "236", areaCodes: null, priority: 0 },
        td: { dialCode: "235", areaCodes: null, priority: 0 },
        cl: { dialCode: "56", areaCodes: null, priority: 0 },
        cn: { dialCode: "86", areaCodes: null, priority: 0 },
        cx: { dialCode: "61", areaCodes: null, priority: 2 },
        cc: { dialCode: "61", areaCodes: null, priority: 1 },
        co: { dialCode: "57", areaCodes: null, priority: 0 },
        km: { dialCode: "269", areaCodes: null, priority: 0 },
        cd: { dialCode: "243", areaCodes: null, priority: 0 },
        cg: { dialCode: "242", areaCodes: null, priority: 0 },
        ck: { dialCode: "682", areaCodes: null, priority: 0 },
        cr: { dialCode: "506", areaCodes: null, priority: 0 },
        ci: { dialCode: "225", areaCodes: null, priority: 0 },
        hr: { dialCode: "385", areaCodes: null, priority: 0 },
        cu: { dialCode: "53", areaCodes: null, priority: 0 },
        cw: { dialCode: "599", areaCodes: null, priority: 0 },
        cy: { dialCode: "357", areaCodes: null, priority: 0 },
        cz: { dialCode: "420", areaCodes: null, priority: 0 },
        dk: { dialCode: "45", areaCodes: null, priority: 0 },
        dj: { dialCode: "253", areaCodes: null, priority: 0 },
        dm: { dialCode: "1767", areaCodes: null, priority: 0 },
        do: { dialCode: "1", areaCodes: ["809", "829", "849"], priority: 2 },
        ec: { dialCode: "593", areaCodes: null, priority: 0 },
        eg: { dialCode: "20", areaCodes: null, priority: 0 },
        sv: { dialCode: "503", areaCodes: null, priority: 0 },
        gq: { dialCode: "240", areaCodes: null, priority: 0 },
        er: { dialCode: "291", areaCodes: null, priority: 0 },
        ee: { dialCode: "372", areaCodes: null, priority: 0 },
        et: { dialCode: "251", areaCodes: null, priority: 0 },
        fk: { dialCode: "500", areaCodes: null, priority: 0 },
        fo: { dialCode: "298", areaCodes: null, priority: 0 },
        fj: { dialCode: "679", areaCodes: null, priority: 0 },
        fi: { dialCode: "358", areaCodes: null, priority: 0 },
        fr: { dialCode: "33", areaCodes: null, priority: 0 },
        gf: { dialCode: "594", areaCodes: null, priority: 0 },
        pf: { dialCode: "689", areaCodes: null, priority: 0 },
        ga: { dialCode: "241", areaCodes: null, priority: 0 },
        gm: { dialCode: "220", areaCodes: null, priority: 0 },
        ge: { dialCode: "995", areaCodes: null, priority: 0 },
        de: { dialCode: "49", areaCodes: null, priority: 0 },
        gh: { dialCode: "233", areaCodes: null, priority: 0 },
        gi: { dialCode: "350", areaCodes: null, priority: 0 },
        gr: { dialCode: "30", areaCodes: null, priority: 0 },
        gl: { dialCode: "299", areaCodes: null, priority: 0 },
        gd: { dialCode: "1473", areaCodes: null, priority: 0 },
        gp: { dialCode: "590", areaCodes: null, priority: 0 },
        gu: { dialCode: "1671", areaCodes: null, priority: 0 },
        gt: { dialCode: "502", areaCodes: null, priority: 0 },
        gg: { dialCode: "44", areaCodes: null, priority: 1 },
        gn: { dialCode: "224", areaCodes: null, priority: 0 },
        gw: { dialCode: "245", areaCodes: null, priority: 0 },
        gy: { dialCode: "592", areaCodes: null, priority: 0 },
        ht: { dialCode: "509", areaCodes: null, priority: 0 },
        hn: { dialCode: "504", areaCodes: null, priority: 0 },
        hk: { dialCode: "852", areaCodes: null, priority: 0 },
        hu: { dialCode: "36", areaCodes: null, priority: 0 },
        is: { dialCode: "354", areaCodes: null, priority: 0 },
        in: { dialCode: "91", areaCodes: null, priority: 0 },
        id: { dialCode: "62", areaCodes: null, priority: 0 },
        ir: { dialCode: "98", areaCodes: null, priority: 0 },
        iq: { dialCode: "964", areaCodes: null, priority: 0 },
        ie: { dialCode: "353", areaCodes: null, priority: 0 },
        im: { dialCode: "44", areaCodes: null, priority: 2 },
        il: { dialCode: "972", areaCodes: null, priority: 0 },
        it: { dialCode: "39", areaCodes: null, priority: 0 },
        jm: { dialCode: "1876", areaCodes: null, priority: 0 },
        jp: { dialCode: "81", areaCodes: null, priority: 0 },
        je: { dialCode: "44", areaCodes: null, priority: 3 },
        jo: { dialCode: "962", areaCodes: null, priority: 0 },
        kz: { dialCode: "7", areaCodes: null, priority: 1 },
        ke: { dialCode: "254", areaCodes: null, priority: 0 },
        ki: { dialCode: "686", areaCodes: null, priority: 0 },
        xk: { dialCode: "383", areaCodes: null, priority: 0 },
        kw: { dialCode: "965", areaCodes: null, priority: 0 },
        kg: { dialCode: "996", areaCodes: null, priority: 0 },
        la: { dialCode: "856", areaCodes: null, priority: 0 },
        lv: { dialCode: "371", areaCodes: null, priority: 0 },
        lb: { dialCode: "961", areaCodes: null, priority: 0 },
        ls: { dialCode: "266", areaCodes: null, priority: 0 },
        lr: { dialCode: "231", areaCodes: null, priority: 0 },
        ly: { dialCode: "218", areaCodes: null, priority: 0 },
        li: { dialCode: "423", areaCodes: null, priority: 0 },
        lt: { dialCode: "370", areaCodes: null, priority: 0 },
        lu: { dialCode: "352", areaCodes: null, priority: 0 },
        mo: { dialCode: "853", areaCodes: null, priority: 0 },
        mk: { dialCode: "389", areaCodes: null, priority: 0 },
        mg: { dialCode: "261", areaCodes: null, priority: 0 },
        mw: { dialCode: "265", areaCodes: null, priority: 0 },
        my: { dialCode: "60", areaCodes: null, priority: 0 },
        mv: { dialCode: "960", areaCodes: null, priority: 0 },
        ml: { dialCode: "223", areaCodes: null, priority: 0 },
        mt: { dialCode: "356", areaCodes: null, priority: 0 },
        mh: { dialCode: "692", areaCodes: null, priority: 0 },
        mq: { dialCode: "596", areaCodes: null, priority: 0 },
        mr: { dialCode: "222", areaCodes: null, priority: 0 },
        mu: { dialCode: "230", areaCodes: null, priority: 0 },
        yt: { dialCode: "262", areaCodes: null, priority: 1 },
        mx: { dialCode: "52", areaCodes: null, priority: 0 },
        fm: { dialCode: "691", areaCodes: null, priority: 0 },
        md: { dialCode: "373", areaCodes: null, priority: 0 },
        mc: { dialCode: "377", areaCodes: null, priority: 0 },
        mn: { dialCode: "976", areaCodes: null, priority: 0 },
        me: { dialCode: "382", areaCodes: null, priority: 0 },
        ms: { dialCode: "1664", areaCodes: null, priority: 0 },
        ma: { dialCode: "212", areaCodes: null, priority: 0 },
        mz: { dialCode: "258", areaCodes: null, priority: 0 },
        mm: { dialCode: "95", areaCodes: null, priority: 0 },
        na: { dialCode: "264", areaCodes: null, priority: 0 },
        nr: { dialCode: "674", areaCodes: null, priority: 0 },
        np: { dialCode: "977", areaCodes: null, priority: 0 },
        nl: { dialCode: "31", areaCodes: null, priority: 0 },
        nc: { dialCode: "687", areaCodes: null, priority: 0 },
        nz: { dialCode: "64", areaCodes: null, priority: 0 },
        ni: { dialCode: "505", areaCodes: null, priority: 0 },
        ne: { dialCode: "227", areaCodes: null, priority: 0 },
        ng: { dialCode: "234", areaCodes: null, priority: 0 },
        nu: { dialCode: "683", areaCodes: null, priority: 0 },
        nf: { dialCode: "672", areaCodes: null, priority: 0 },
        kp: { dialCode: "850", areaCodes: null, priority: 0 },
        mp: { dialCode: "1670", areaCodes: null, priority: 0 },
        no: { dialCode: "47", areaCodes: null, priority: 0 },
        om: { dialCode: "968", areaCodes: null, priority: 0 },
        pk: { dialCode: "92", areaCodes: null, priority: 0 },
        pw: { dialCode: "680", areaCodes: null, priority: 0 },
        ps: { dialCode: "970", areaCodes: null, priority: 0 },
        pa: { dialCode: "507", areaCodes: null, priority: 0 },
        pg: { dialCode: "675", areaCodes: null, priority: 0 },
        py: { dialCode: "595", areaCodes: null, priority: 0 },
        pe: { dialCode: "51", areaCodes: null, priority: 0 },
        ph: { dialCode: "63", areaCodes: null, priority: 0 },
        pl: { dialCode: "48", areaCodes: null, priority: 0 },
        pt: { dialCode: "351", areaCodes: null, priority: 0 },
        pr: { dialCode: "1", areaCodes: ["787", "939"], priority: 3 },
        qa: { dialCode: "974", areaCodes: null, priority: 0 },
        re: { dialCode: "262", areaCodes: null, priority: 0 },
        ro: { dialCode: "40", areaCodes: null, priority: 0 },
        ru: { dialCode: "7", areaCodes: null, priority: 0 },
        rw: { dialCode: "250", areaCodes: null, priority: 0 },
        bl: { dialCode: "590", areaCodes: null, priority: 1 },
        sh: { dialCode: "290", areaCodes: null, priority: 0 },
        kn: { dialCode: "1869", areaCodes: null, priority: 0 },
        lc: { dialCode: "1758", areaCodes: null, priority: 0 },
        mf: { dialCode: "590", areaCodes: null, priority: 2 },
        pm: { dialCode: "508", areaCodes: null, priority: 0 },
        vc: { dialCode: "1784", areaCodes: null, priority: 0 },
        ws: { dialCode: "685", areaCodes: null, priority: 0 },
        sm: { dialCode: "378", areaCodes: null, priority: 0 },
        st: { dialCode: "239", areaCodes: null, priority: 0 },
        sa: { dialCode: "966", areaCodes: null, priority: 0 },
        sn: { dialCode: "221", areaCodes: null, priority: 0 },
        rs: { dialCode: "381", areaCodes: null, priority: 0 },
        sc: { dialCode: "248", areaCodes: null, priority: 0 },
        sl: { dialCode: "232", areaCodes: null, priority: 0 },
        sg: { dialCode: "65", areaCodes: null, priority: 0 },
        sx: { dialCode: "1721", areaCodes: null, priority: 0 },
        sk: { dialCode: "421", areaCodes: null, priority: 0 },
        si: { dialCode: "386", areaCodes: null, priority: 0 },
        sb: { dialCode: "677", areaCodes: null, priority: 0 },
        so: { dialCode: "252", areaCodes: null, priority: 0 },
        za: { dialCode: "27", areaCodes: null, priority: 0 },
        kr: { dialCode: "82", areaCodes: null, priority: 0 },
        ss: { dialCode: "211", areaCodes: null, priority: 0 },
        es: { dialCode: "34", areaCodes: null, priority: 0 },
        lk: { dialCode: "94", areaCodes: null, priority: 0 },
        sd: { dialCode: "249", areaCodes: null, priority: 0 },
        sr: { dialCode: "597", areaCodes: null, priority: 0 },
        sj: { dialCode: "47", areaCodes: null, priority: 1 },
        sz: { dialCode: "268", areaCodes: null, priority: 0 },
        se: { dialCode: "46", areaCodes: null, priority: 0 },
        ch: { dialCode: "41", areaCodes: null, priority: 0 },
        sy: { dialCode: "963", areaCodes: null, priority: 0 },
        tw: { dialCode: "886", areaCodes: null, priority: 0 },
        tj: { dialCode: "992", areaCodes: null, priority: 0 },
        tz: { dialCode: "255", areaCodes: null, priority: 0 },
        th: { dialCode: "66", areaCodes: null, priority: 0 },
        tl: { dialCode: "670", areaCodes: null, priority: 0 },
        tg: { dialCode: "228", areaCodes: null, priority: 0 },
        tk: { dialCode: "690", areaCodes: null, priority: 0 },
        to: { dialCode: "676", areaCodes: null, priority: 0 },
        tt: { dialCode: "1868", areaCodes: null, priority: 0 },
        tn: { dialCode: "216", areaCodes: null, priority: 0 },
        tr: { dialCode: "90", areaCodes: null, priority: 0 },
        tm: { dialCode: "993", areaCodes: null, priority: 0 },
        tc: { dialCode: "1649", areaCodes: null, priority: 0 },
        tv: { dialCode: "688", areaCodes: null, priority: 0 },
        vi: { dialCode: "1340", areaCodes: null, priority: 0 },
        ug: { dialCode: "256", areaCodes: null, priority: 0 },
        ua: { dialCode: "380", areaCodes: null, priority: 0 },
        ae: { dialCode: "971", areaCodes: null, priority: 0 },
        gb: { dialCode: "44", areaCodes: null, priority: 0 },
        us: { dialCode: "1", areaCodes: null, priority: 0 },
        uy: { dialCode: "598", areaCodes: null, priority: 0 },
        uz: { dialCode: "998", areaCodes: null, priority: 0 },
        vu: { dialCode: "678", areaCodes: null, priority: 0 },
        va: { dialCode: "39", areaCodes: null, priority: 1 },
        ve: { dialCode: "58", areaCodes: null, priority: 0 },
        vn: { dialCode: "84", areaCodes: null, priority: 0 },
        wf: { dialCode: "681", areaCodes: null, priority: 0 },
        eh: { dialCode: "212", areaCodes: null, priority: 1 },
        ye: { dialCode: "967", areaCodes: null, priority: 0 },
        zm: { dialCode: "260", areaCodes: null, priority: 0 },
        zw: { dialCode: "263", areaCodes: null, priority: 0 },
        ax: { dialCode: "358", areaCodes: null, priority: 1 },
      };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var r = n(1);
    function i() {
      return (
        (i = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        i.apply(this, arguments)
      );
    }
    function o(e) {
      return r.createElement(
        "svg",
        i(
          {
            focusable: "false",
            "aria-hidden": "true",
            width: "8",
            height: "8",
            viewBox: "0 0 8 8",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        r.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M8 7.23251L7.23251 8L4 4.76749L0.767492 8L0 7.23251L3.23251 4L0 0.767492L0.767492 0L4 3.23251L7.23251 0L8 0.767492L4.76749 4L8 7.23251Z",
          fill: "white",
        })
      );
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return u;
    }),
      n.d(t, "b", function () {
        return l;
      }),
      n.d(t, "c", function () {
        return d;
      });
    var r = n(1),
      i = n.n(r),
      o = n(24),
      s = n(14);
    const c = {
        [o.b.submitted]: { key: "tickets_status_submitted" },
        [o.b.inProgress]: { key: "tickets_status_in_progress" },
        [o.b.waiting]: { key: "tickets_status_waiting_on_you" },
        [o.b.resolved]: { key: "tickets_status_resolved" },
      },
      a = {
        [o.b.submitted]: {
          key: "tickets_status_description_well_pick_up_soon",
        },
        [o.b.inProgress]: { key: "tickets_status_description_working_on" },
        [o.b.waiting]: { key: "tickets_status_description_more_info" },
        [o.b.resolved]: { key: "tickets_status_description_completed" },
      };
    const u = (e, t) =>
      t
        ? i.a.createElement(
            "span",
            null,
            e
              .split(t)
              .reduce(
                (e, n, r) =>
                  r
                    ? [
                        ...e,
                        i.a.createElement("b", { key: t + n }, t),
                        i.a.createElement("span", null, " ", n),
                      ]
                    : [n],
                []
              )
          )
        : e;
    function l(e) {
      var t;
      return Object(s.e)(null === (t = c[e]) || void 0 === t ? void 0 : t.key);
    }
    function d(e) {
      var t;
      return Object(s.e)(null === (t = a[e]) || void 0 === t ? void 0 : t.key);
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return r;
    }),
      n.d(t, "a", function () {
        return i;
      });
    const r = 300,
      i = "ease-in-out";
  },
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    function r(e) {
      return void 0 !== e.AndroidHost
        ? e.AndroidHost
        : void 0 !== e.iOSHost
        ? e.iOSHost
        : void 0;
    }
    function i(e) {
      return void 0 !== e.AndroidHost
        ? "android"
        : void 0 !== e.iOSHost
        ? "ios"
        : void 0;
    }
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return i;
      });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var r = n(1),
      i = n(165);
    function o({ variant: e }) {
      return r.createElement(
        i.a,
        {
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 15 16",
          variant: e,
        },
        r.createElement("path", {
          d: "M7.32625 0C11.2345 0 14.4025 3.168 14.4025 7.07625C14.4025 14.1525 7.333 16.875 7.333 16.875V14.1525H7.32625C3.418 14.1525 0.25 10.9845 0.25 7.07625C0.25 3.168 3.418 0 7.32625 0ZM7.97875 10.2409C7.97875 9.88087 7.68625 9.59062 7.3285 9.59062C6.9685 9.59062 6.67825 9.88312 6.67825 10.2409C6.67825 10.6009 6.97075 10.8911 7.3285 10.8911C7.6885 10.8911 7.97875 10.6009 7.97875 10.242V10.2409ZM7.3285 3.81713C6.19225 3.81713 5.2585 4.69463 5.16288 5.80838L6.2395 5.96025C6.25637 5.37525 6.73787 4.90275 7.3285 4.90275C7.92925 4.90275 8.41975 5.391 8.41975 5.99175C8.41975 7.07625 6.89538 7.07625 6.89538 8.59275V8.71425H7.76163V8.59275C7.76163 7.7265 9.502 7.50938 9.502 5.99175C9.502 4.79363 8.52775 3.81825 7.3285 3.81825V3.81713Z",
        })
      );
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    });
    var r = n(1),
      i = n(338),
      o = n(166);
    function s({ disabled: e, loading: t }) {
      return r.createElement(
        i.a,
        { "aria-hidden": "true", disabled: e, isLoading: t },
        r.createElement(o.a, null)
      );
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    });
    var r = n(1);
    function i() {
      return r.createElement(
        "svg",
        {
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 16 16",
          height: "16",
        },
        r.createElement("path", {
          fill: "#FFF",
          d: "M1,14 L15,14 L15,16 L1,16 L1,14 Z M8,12 L2,5.68965517 L3.37704918,4.24137931 L6.99543762,8.00158691 L6.99543762,0 L8.99861145,0 L8.99861145,8.00158691 L12.6229508,4.24137931 L14,5.68965517 L8,12 Z",
        })
      );
    }
  },
  function (e, t, n) {
    "use strict";
    var r = n(1);
    t.a = () =>
      r.createElement(
        "svg",
        {
          focusable: "false",
          "aria-hidden": "true",
          width: "18",
          height: "18",
          xmlns: "http://www.w3.org/2000/svg",
        },
        r.createElement("path", {
          d: "M9 0a9 9 0 1 1 0 18A9 9 0 0 1 9 0zM5 6.999a1 1 0 1 0 2.001 0A1 1 0 0 0 5 7zm5.999 0a1.001 1.001 0 0 0 2.001 0 1 1 0 0 0-2.001 0zm-2.3 6.494c.087.005.174.007.26.007 1.513 0 2.99-.722 4.398-2.149l.35-.356.482-.702-10.326.006.435.62.31.392c.068.083 1.652 2.05 4.092 2.182z",
          fill: "#ADADAD",
          fillRule: "evenodd",
        })
      );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1);
    t.a = () =>
      r.createElement(
        "svg",
        { focusable: "false", "aria-hidden": "true" },
        r.createElement(
          "g",
          { fill: "none", fillRule: "evenodd", strokeLinejoin: "round" },
          r.createElement("path", {
            d: "M9 10.995V5.672M16.652 15.652H1.348L9 .348z",
            strokeLinecap: "round",
          }),
          r.createElement("path", {
            d: "M9.348 13.217a.348.348 0 1 1-.696 0 .348.348 0 0 1 .696 0z",
          })
        )
      );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1);
    t.a = () =>
      r.createElement(
        "svg",
        { focusable: "false", "aria-hidden": "true", viewBox: "0 0 29 18" },
        r.createElement(
          "g",
          { fillRule: "evenodd" },
          r.createElement("path", {
            d: "M9 1a8 8 0 1 0 0 16h11a8 8 0 1 0 0-16H9zm0-1h11a9 9 0 0 1 0 18H9A9 9 0 0 1 9 0z",
            fillRule: "nonzero",
          }),
          r.createElement("path", {
            d: "M6.561 9.337c0-2.277 1.683-3.795 3.773-3.795 1.298 0 2.2.572 2.849 1.375l-.726.451c-.462-.594-1.243-1.012-2.123-1.012-1.606 0-2.827 1.232-2.827 2.981 0 1.738 1.221 2.992 2.827 2.992.88 0 1.606-.429 1.969-.792v-1.496H9.784v-.814h3.432v2.651a3.822 3.822 0 0 1-2.882 1.265c-2.09 0-3.773-1.529-3.773-3.806zM14.701 13V5.663h.913V13h-.913zm2.629 0V5.663h4.807v.814h-3.894v2.365h3.817v.814h-3.817V13h-.913z",
          })
        )
      );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1);
    t.a = () =>
      r.createElement(
        "svg",
        {
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 28 32",
          width: "28",
          height: "32",
        },
        r.createElement("path", {
          d: "M28,32 C28,32 23.2863266,30.1450667 19.4727818,28.6592 L3.43749107,28.6592 C1.53921989,28.6592 0,27.0272 0,25.0144 L0,3.6448 C0,1.632 1.53921989,0 3.43749107,0 L24.5615088,0 C26.45978,0 27.9989999,1.632 27.9989999,3.6448 L27.9989999,22.0490667 L28,22.0490667 L28,32 Z M23.8614088,20.0181333 C23.5309223,19.6105242 22.9540812,19.5633836 22.5692242,19.9125333 C22.5392199,19.9392 19.5537934,22.5941333 13.9989999,22.5941333 C8.51321617,22.5941333 5.48178311,19.9584 5.4277754,19.9104 C5.04295119,19.5629428 4.46760991,19.6105095 4.13759108,20.0170667 C3.97913051,20.2124916 3.9004494,20.4673395 3.91904357,20.7249415 C3.93763774,20.9825435 4.05196575,21.2215447 4.23660523,21.3888 C4.37862552,21.5168 7.77411059,24.5386667 13.9989999,24.5386667 C20.2248893,24.5386667 23.6203743,21.5168 23.7623946,21.3888 C23.9467342,21.2215726 24.0608642,20.9827905 24.0794539,20.7254507 C24.0980436,20.4681109 24.0195551,20.2135019 23.8614088,20.0181333 Z",
        })
      );
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    });
    var r = n(1);
    function i() {
      return r.createElement(
        "svg",
        {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        r.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M18.601 8.39897C18.269 8.06702 17.7309 8.06702 17.3989 8.39897L12 13.7979L6.60099 8.39897C6.26904 8.06702 5.73086 8.06702 5.39891 8.39897C5.06696 8.73091 5.06696 9.2691 5.39891 9.60105L11.3989 15.601C11.7309 15.933 12.269 15.933 12.601 15.601L18.601 9.60105C18.9329 9.2691 18.9329 8.73091 18.601 8.39897Z",
          fill: "white",
        })
      );
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    });
    var r = n(1);
    function i(e) {
      return r.createElement(
        "svg",
        {
          focusable: "false",
          "aria-hidden": "true",
          className: e.className,
          width: "16px",
          height: "12px",
          viewBox: "0 0 16 12",
        },
        r.createElement(
          "g",
          { stroke: "none", strokeWidth: "1", fillRule: "evenodd" },
          r.createElement(
            "g",
            { transform: "translate(-257.000000, -529.000000)" },
            r.createElement(
              "g",
              { transform: "translate(100.000000, 187.000000)" },
              r.createElement(
                "g",
                { transform: "translate(94.000000, 0.000000)" },
                r.createElement(
                  "g",
                  { transform: "translate(16.000000, 169.000000)" },
                  r.createElement(
                    "g",
                    { transform: "translate(24.000000, 159.000000)" },
                    r.createElement(
                      "g",
                      { transform: "translate(23.000000, 14.000000)" },
                      r.createElement("path", {
                        d: "M10.8401488,6.224907 L15.6817765,11.0665347 C15.51005,11.3499528 15.2722574,11.5748794 14.9768457,11.7328673 C14.6509198,11.9071744 14.3276335,12 13.4361148,12 L2.5638852,12 C1.67236646,12 1.34908022,11.9071744 1.0231543,11.7328673 C0.72877254,11.5754302 0.491608869,11.3515205 0.320022148,11.069497 L5.16278101,6.22673813 L7.26933188,7.54333242 C7.55321179,7.72075737 7.66665987,7.76662232 7.80054357,7.79679663 C7.93442727,7.82697094 8.06557273,7.82697094 8.19945643,7.79679663 C8.33334013,7.76662232 8.44678821,7.72075737 8.73066812,7.54333242 L10.8401488,6.224907 Z M11.7104341,5.6809787 L15.6940002,3.19124987 C15.7876675,3.1327078 15.9110576,3.16118243 15.9695997,3.25484974 C15.9894661,3.28663606 16,3.32336558 16,3.36084953 L16,9.4361148 C16,9.63606843 15.9953306,9.80743801 15.9861196,9.95666428 L11.7104341,5.6809787 Z M4.29249574,5.68280984 L0.0141588143,9.96114676 C0.0047635636,9.81087199 2.47328067e-17,9.63807348 0,9.4361148 L1.24567172e-16,3.36084953 C1.11040097e-16,3.25039258 0.08954305,3.16084953 0.2,3.16084953 C0.237483943,3.16084953 0.274213468,3.17138342 0.305999788,3.19124987 L4.29249574,5.68280984 Z M1,-2.48689958e-14 L15,-2.48689958e-14 C15.5522847,-2.49704488e-14 16,0.44771525 16,1 L16,1.8763932 C16,1.95214761 15.9571995,2.02140024 15.8894427,2.05527864 L8.4472136,5.7763932 C8.1656861,5.91715695 7.8343139,5.91715695 7.5527864,5.7763932 L0.110557281,2.05527864 C0.0428004752,2.02140024 3.97855298e-16,1.95214761 3.88578059e-16,1.8763932 L0,1 C-6.76353751e-17,0.44771525 0.44771525,-2.47675427e-14 1,-2.48689958e-14 Z",
                      })
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  },
  function (e, t, n) {
    "use strict";
    var r = n(1);
    t.a = () =>
      r.createElement(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        r.createElement("path", {
          className: "box",
          d: "M7.18421 4.5H3C2.17157 4.5 1.5 5.17157 1.5 6V13C1.5 13.8284 2.17157 14.5 3 14.5H10C10.8284 14.5 11.5 13.8284 11.5 13V9.5",
          stroke: "#737373",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        r.createElement("path", {
          className: "arrow",
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M13.9621 2.30861C13.9377 2.24964 13.9015 2.19439 13.8536 2.14645C13.8056 2.09851 13.7504 2.06234 13.6914 2.03794C13.6324 2.01349 13.5678 2 13.5 2H13.4999H9.5C9.22386 2 9 2.22386 9 2.5C9 2.77614 9.22386 3 9.5 3H12.2929L5.14645 10.1464C4.95118 10.3417 4.95118 10.6583 5.14645 10.8536C5.34171 11.0488 5.65829 11.0488 5.85355 10.8536L13 3.70711V6.5C13 6.77614 13.2239 7 13.5 7C13.7761 7 14 6.77614 14 6.5V2.50049V2.5C14 2.499 14 2.498 14 2.497C13.9996 2.4303 13.9861 2.36669 13.9621 2.30861Z",
          fill: "#737373",
        })
      );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1);
    t.a = () =>
      r.createElement(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        r.createElement("circle", {
          cx: "7.5",
          cy: "7.5",
          r: "4.625",
          stroke: "#8F8F91",
          strokeWidth: "1.75",
        }),
        r.createElement("path", {
          d: "M13.3813 14.6187C13.723 14.9604 14.277 14.9604 14.6187 14.6187C14.9604 14.277 14.9604 13.723 14.6187 13.3813L13.3813 14.6187ZM10.3813 11.6187L13.3813 14.6187L14.6187 13.3813L11.6187 10.3813L10.3813 11.6187Z",
          fill: "#8F8F91",
        })
      );
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    });
    var r = n(1);
    function i() {
      return r.createElement(
        "svg",
        { "aria-hidden": "true", viewBox: "1 1 60 60" },
        r.createElement("path", {
          d: "M27.765 42.244c-8.614 0-15.622-7.008-15.622-15.622S19.151 11 27.765 11s15.622 7.008 15.622 15.622-7.007 15.622-15.622 15.622zm0-28.398c-7.045 0-12.775 5.73-12.775 12.775s5.73 12.775 12.775 12.775 12.775-5.73 12.775-12.775-5.73-12.775-12.775-12.775z",
        }),
        r.createElement("path", {
          d: "M34.869 39.146l4.014-3.738 9.286 9.114a3.164 3.164 0 01-.07 4.562l-.071.066a3.163 3.163 0 01-4.561-.257l-8.598-9.747zM27.77 34.173c-2.882 0-5.412-.876-7.656-2.526a1.002 1.002 0 01-.35-.81c.008-.461.445-.969 1.02-.959.284.005.493.153.713.308 1.837 1.302 3.832 1.971 6.275 1.971 1.875 0 4.492-.476 6.314-2.118a.98.98 0 01.638-.261.92.92 0 01.686.241c.222.209.33.527.336.735a1.02 1.02 0 01-.318.775c-1.333 1.237-4.262 2.644-7.658 2.644z",
        })
      );
    }
  },
  function (e, t, n) {
    "use strict";
    var r = n(1);
    t.a = () =>
      r.createElement(
        "svg",
        { focusable: "false", "aria-hidden": "true", viewBox: "0 0 16 16" },
        r.createElement("path", {
          d: "M1.388 15.77c-.977.518-1.572.061-1.329-1.019l1.033-4.585c.123-.543.659-1.034 1.216-1.1l6.195-.72c1.648-.19 1.654-.498 0-.687l-6.195-.708c-.55-.063-1.09-.54-1.212-1.085L.056 1.234C-.187.161.408-.289 1.387.231l12.85 6.829c.978.519.98 1.36 0 1.88l-12.85 6.83z",
          fillRule: "evenodd",
        })
      );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(14),
      o = n(177);
    t.a = ({ onClick: e }) =>
      r.createElement(
        o.b,
        { viewBox: "0 0 24 24", "aria-label": Object(i.e)("play"), onClick: e },
        r.createElement("path", {
          d: "M7 17.6942V6.30578C7 5.72693 7.62791 5.36628 8.1279 5.65794L17.5192 11.1362C18.1807 11.5221 18.1807 12.4779 17.5192 12.8638L8.1279 18.3421C7.62791 18.6337 7 18.2731 7 17.6942Z",
        })
      );
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return c;
    });
    var r = n(1);
    function i() {
      return (
        (i = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        i.apply(this, arguments)
      );
    }
    var o = r.createElement("rect", {
        width: 16,
        height: 16,
        rx: 4,
        fill: "#737373",
      }),
      s = r.createElement("path", {
        d: "M6.181 11.6H7.9L6.142 5.4H4.213L2.46 11.6h1.564l.297-1.362h1.572l.288 1.362zM5.077 6.796h.082l.49 2.308h-1.08l.508-2.308zm7.635 4.804v-1.268h-1.306V6.667h1.306V5.4H8.527v1.267h1.307v3.665H8.527V11.6h4.185z",
        fill: "#fff",
      });
    function c(e) {
      return r.createElement(
        "svg",
        i(
          {
            width: 16,
            height: 16,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        o,
        s
      );
    }
    n.p;
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return m;
    }),
      n.d(t, "d", function () {
        return y;
      }),
      n.d(t, "a", function () {
        return O;
      }),
      n.d(t, "b", function () {
        return w;
      });
    var r = n(47),
      i = n.n(r),
      o = n(3),
      s = n(10),
      c = n(33),
      a = n(65),
      u = n(4),
      l = n(42),
      d = n(28),
      p = n(13),
      f = n(0);
    let b = 0,
      h = "",
      g = !1;
    function m(e, t) {
      return (n, r) => {
        const i = r(),
          { composerSuggestions: o } = Object(l.d)(i);
        if (!o || !o.isDismissed) return (h = e), v(n, r, t);
      };
    }
    const v = i()(
      function e(t, n, r) {
        const i = ++b,
          s = h,
          c = n(),
          { session: a } = c,
          { composerSuggestions: d } = Object(l.d)(c);
        if (!d || !d.loading)
          return (
            (g = !1),
            t(_(!0, r)),
            Object(o.d)(a, s, 3).then((o) => {
              if ((t(_(!1, r)), t(O(o, r, i)), g && h !== s))
                return v.cancel(), void e(t, n, r);
              const c = Object.assign({}, { query: s, conversation_id: r }, o);
              Object(u.e)(
                "received",
                "composer_smart_suggestions",
                "messenger",
                {},
                c
              );
            })
          );
        g = !0;
      },
      150,
      { leading: !1, trailing: !0 }
    );
    function y(e, t, n, r = !1, i, o) {
      return async (u, l) => {
        const f = l(),
          b = (null == t ? void 0 : t.id) || null,
          { session: h, newConversation: g, user: m } = f,
          v = Object(c.b)(),
          y = new Date();
        if ((u(O(null, b)), b)) {
          const c = {
            conversationId: b,
            clientId: v,
            createdAt: y,
            body: Object(a.c)(n.text),
            composerSuggestionItem: n,
          };
          try {
            u(Object(s.e)(b, c, r)),
              await e.fireComposerSuggestion(h, {
                conversationId: b,
                suggestion: n,
                clientId: v,
              }),
              u(Object(s.f)(b, c, i, t.lastParticipatingAdmin, o, !1, y, !0));
          } catch (e) {
            u(Object(s.d)(b, c, e));
          }
        } else {
          const t = {
            clientId: v,
            body: Object(a.c)(n.text),
            createdAt: y,
            composerSuggestionItem: n,
          };
          try {
            u(Object(s.h)(t, r));
            const i = await e.fireComposerSuggestion(h, {
              conversationId: b,
              suggestion: n,
              clientId: v,
              botIntro: g ? g.botIntroId : null,
              articleUrl: g ? g.articleUrl : null,
              resolutionBotBehaviorVersionId: m
                ? m.resolutionBotBehaviorVersionId
                : null,
            });
            u(Object(s.i)(i, null, null, y, "resolution_bot_auto_suggest"));
            Object(p.i)(f) && u(Object(d.c)(i.id, !0));
          } catch (e) {
            u(Object(s.g)(null));
          }
        }
      };
    }
    function O(e, t, n = ++b) {
      return {
        type: f.td,
        conversationId: t,
        composerSuggestions: e,
        priority: n,
      };
    }
    function _(e, t) {
      return { type: f.vd, conversationId: t, loadingStatus: e };
    }
    function w(e) {
      return { type: f.ud, conversationId: e };
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return s;
    }),
      n.d(t, "c", function () {
        return a;
      }),
      n.d(t, "d", function () {
        return u;
      }),
      n.d(t, "a", function () {
        return l;
      });
    var r = n(2),
      i = n(9),
      o = n.n(i);
    const s = Object(r.createSelector)(
        [(e) => e.tooltipGroups],
        (e) => !o()(e)
      ),
      c = Object(r.createSelector)([(e) => e.tooltipGroups], (e) =>
        o()(e) ? [] : e
      ),
      a = Object(r.createSelector)(
        c,
        (e) =>
          !o()(e) &&
          e.reduce((e, t) => e || t.tooltips.some((e) => e.isOpen), !1)
      ),
      u = Object(r.createSelector)(c, (e) =>
        e.flatMap((e) => e.tooltips.filter((e) => e && !o()(e.urlPredicates)))
      ),
      l = Object(r.createSelector)(c, (e) =>
        e.flatMap((e) => e.tooltips.filter((e) => e && e.isMatched))
      );
  },
  function (e, t, n) {
    "use strict";
    var r = n(281),
      i = n(45),
      o = n(236),
      s = n(115),
      c = n(349),
      a = n(170),
      u = n(15),
      l = n(17),
      d = n(4),
      p = n(181),
      f = n(73),
      b = n(13),
      h = n(19),
      g = n(0),
      m = n(23);
    function v(e, t) {
      return (n, r) => {
        const { intercomSheet: i } = t.data || {},
          o = r(),
          u = Object(a.g)(o);
        if (!i) return null;
        switch (i.type) {
          case c.b:
            n(C());
            break;
          case s.g:
            n(j());
            break;
          case s.b:
            n(C());
            break;
          case s.a:
            n(_("sheet_api_close"));
            break;
          case s.f:
            if (!i.payload) return;
            n(w(i.payload.title));
            break;
          case s.h:
            if (!u) return null;
            n(j()), n(O(e, i.payload));
        }
      };
    }
    function y(e, t, n, r, i) {
      return (o, s) => {
        const {
          app: { isMessengerOpen: c },
          session: a,
        } = s();
        return (
          c || o(Object(u.m)()),
          o(
            (function (e, t, n) {
              return (r, i) => {
                Object(b.i)(i()) && r(Object(h.push)(`/${m.b.id}/sheet`)),
                  r({ type: g.xc, url: e, cardUri: t, componentId: n });
              };
            })(r, t, n)
          ),
          o(E()),
          o(Object(f.a)()),
          e
            .fetchMessengerSheetData(a, t, n, i)
            .then((e) => {
              o(I(e));
            })
            .catch(() => {
              o(A());
            })
        );
      };
    }
    function O(e, t) {
      return (n, s) => {
        const c = s(),
          { cardUri: u } = Object(a.g)(c),
          { session: l } = c;
        return e
          .submitSheet(l, u, t)
          .then((t) => {
            n(Object(r.b)(t)), n(Object(i.a)(e, t));
          })
          .then(() => new Promise((e) => setTimeout(e, 2 * o.b)))
          .then(() => {
            n(C()), n(_("sheet_api_submit"));
          })
          .catch(() => {
            n(Object(p.a)("MessengerSheetSubmitError", { sheetValues: t }));
          });
      };
    }
    function _(e) {
      return (t, n) => {
        var r;
        const i = n(),
          o = Object(a.g)(i),
          { cardUri: s } = o,
          c =
            null === (r = i.messengerCards[s]) || void 0 === r
              ? void 0
              : r.card;
        if (c) {
          const { url: t } = i.messengerSheet,
            {
              user: n,
              app: { conversationId: r },
            } = i;
          !(function (e, t, n, r, i, o) {
            d.k.buildAndAddMetric(
              e,
              "closed",
              "messenger_sheet",
              "messenger",
              t,
              {
                url: n,
                messenger_card_uri: r,
                messenger_app_id: i,
                conversation_id: o,
              }
            );
          })(
            n,
            "sheet_api_submit" === e || "sheet_api_close" === e
              ? e
              : Object(l.i)(i),
            t,
            s,
            c.messenger_app_id,
            r
          );
        }
        t({ type: g.x }), Object(b.i)(i) && t(Object(h.goBack)());
      };
    }
    function w(e) {
      return { type: g.Bd, sheetTitle: e };
    }
    function j() {
      return { type: g.Nd };
    }
    function C() {
      return { type: g.Gb };
    }
    function S(e = !1) {
      return { type: g.Ad, isLoaded: e };
    }
    n.d(t, "d", function () {
      return v;
    }),
      n.d(t, "b", function () {
        return y;
      }),
      n.d(t, "h", function () {
        return O;
      }),
      n.d(t, "a", function () {
        return _;
      }),
      n.d(t, "f", function () {
        return w;
      }),
      n.d(t, "g", function () {
        return j;
      }),
      n.d(t, "c", function () {
        return C;
      }),
      n.d(t, "e", function () {
        return S;
      });
    const E = () => ({ type: g.wb }),
      I = (e) => ({ type: g.xb, data: e }),
      A = () => ({ type: g.vb });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(7);
    const o = Object(i.d)("svg", { target: "e1wc1ivq0" })(
      "width:12px;height:12px;fill:",
      Object(i.g)("errorText"),
      ";"
    );
    function s() {
      return r.createElement(
        o,
        { focusable: "false", "aria-hidden": "true", viewBox: "0 0 12 12" },
        r.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          fill: "currentColor",
          d: "M6 11.25A5.25 5.25 0 106 .75a5.25 5.25 0 000 10.5zm0-4.563a.526.526 0 01-.522-.465L5.17 3.556a.836.836 0 111.66 0l-.308 2.666A.526.526 0 016 6.687zm0 2.688a.916.916 0 01-.938-.938c0-.535.403-.937.938-.937.535 0 .938.402.938.938A.916.916 0 016 9.374z",
        })
      );
    }
    n.d(t, "a", function () {
      return s;
    });
  },
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return o;
    }),
      n.d(t, "d", function () {
        return c;
      }),
      n.d(t, "b", function () {
        return a;
      }),
      n.d(t, "a", function () {
        return u;
      });
    var r = n(51),
      i = n(0);
    function o(e, t) {
      return (n, i) => {
        const { session: o } = i();
        return (
          n(s(o, t)),
          e.createOrUpdateUser(o, null, t, void 0, "apiUpdate").then((i) => {
            var o;
            n(c(i, t)),
              (null === (o = i.unreadConversationIds) || void 0 === o
                ? void 0
                : o.length) > 0 && n(Object(r.d)(e, "updateUserSuppliedEmail"));
          })
        );
      };
    }
    function s(e, t) {
      return { type: i.se, session: e, userSuppliedEmail: t };
    }
    function c(e, t) {
      return { type: i.te, user: e, userSuppliedEmail: t };
    }
    function a(e, t) {
      return (n, r) => {
        const { session: o } = r();
        return (
          n({ type: i.ke }),
          e
            .updatePhoneNumber(o, t)
            .then(() => {
              n(
                (function (e) {
                  return { type: i.le, phoneNumber: e };
                })(t)
              );
            })
            .catch((e) => {
              let t;
              e && (t = JSON.parse(e).message),
                n(
                  (function (e) {
                    return { type: i.je, message: e };
                  })(t)
                );
            })
        );
      };
    }
    function u() {
      return { type: i.ac };
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    });
    var r = n(1);
    function i() {
      return (
        (i = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        i.apply(this, arguments)
      );
    }
    var o = r.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.5 5.5a4.5 4.5 0 019 0V8l2.293 2.293c.63.63.184 1.707-.707 1.707H1.914c-.89 0-1.337-1.077-.707-1.707L3.5 8V5.5zm6.5 8.08a2 2 0 11-3.998-.08h3.996l.002.08z",
      fill: "#222",
    });
    function s(e) {
      return r.createElement(
        "svg",
        i(
          {
            width: 16,
            height: 16,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        o
      );
    }
    n.p;
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(112);
    t.a = () =>
      r.createElement(
        i.a,
        {
          isBio: !0,
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 16 13",
        },
        r.createElement(
          "g",
          { strokeWidth: "1", fillRule: "evenodd", fill: "none" },
          r.createElement(
            "g",
            { stroke: "#FFF" },
            r.createElement("path", {
              d: "M5.1 0.9L6.9 2.4C5.3 3.5 3.9 5.5 3.7 7.1 3.8 7.1 4.1 7 4.4 7 5.8 7 6.8 8.1 6.8 9.6 6.8 11.1 5.6 12.3 4.1 12.3 2.5 12.3 1 10.9 1 8.4 1 5.4 2.8 2.6 5.1 0.9ZM13.1 0.9L15 2.4C13.4 3.5 12 5.5 11.8 7.1 11.8 7.1 12.2 7 12.4 7 13.8 7 14.9 8.1 14.9 9.6 14.9 11.1 13.7 12.3 12.2 12.3 10.5 12.3 9.1 10.9 9.1 8.4 9.1 5.4 10.8 2.6 13.1 0.9Z",
            })
          )
        )
      );
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var r = n(1),
      i = n(267);
    function o() {
      return r.createElement(
        i.a,
        { focusable: "false", "aria-hidden": "true" },
        r.createElement("path", {
          d: "M1 5.485l5.194 4.706L13.36.874",
          strokeWidth: "2.5",
          fill: "none",
          fillRule: "evenodd",
        })
      );
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    });
    var r = n(7);
    const i = Object(r.d)("svg", { target: "e1sbdodo0" })(
      "position:absolute;height:12px;width:15px;top:14px;right:14px;stroke:",
      Object(r.g)("inputButtonSuccessIcon"),
      ";z-index:0;"
    );
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var r = n(1),
      i = n(339);
    function o() {
      return r.createElement(
        i.a,
        {
          focusable: "false",
          "aria-hidden": "true",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
        },
        r.createElement("path", {
          d: "M7.357 1.071c.34-.035.679-.071.982-.071 3 0 6.304 2.054 6.625 5.59.018.214.036.428.036.642 0 3.054-2.518 6.179-6.357 6.697A6.958 6.958 0 0 1 7.75 14c-.357 0-.357 0-.75-.071-.91 1.178-1.982 1.482-3.16 1.696a3.184 3.184 0 0 1-.536.054c-.304 0-.733-.143-.536-.34.928-.785 1.036-1.303 1.036-2.214 0-.09 0-.179-.018-.268-1.625-1.107-2.536-2.571-2.75-4.446A7.753 7.753 0 0 1 1 7.768C1 4.714 3.518 1.589 7.357 1.07z",
        })
      );
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    });
    var r = n(7);
    const i = Object(r.d)("svg", { target: "el7q6ip0" })();
  },
  function (e, t, n) {
    "use strict";
    var r = n(1);
    t.a = () =>
      r.createElement(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        r.createElement("path", {
          d: "M1 1.00073L6 6.00073",
          stroke: "#8F8F91",
          strokeWidth: "1.7",
        }),
        r.createElement("path", {
          d: "M1.5 6.50073L6.5 6.50073L6.5 1.50073",
          stroke: "#8F8F91",
          strokeWidth: "1.75",
        }),
        r.createElement("path", {
          d: "M10 10.0017L15 15.0017",
          stroke: "#8F8F91",
          strokeWidth: "1.75",
        }),
        r.createElement("path", {
          d: "M9.5 14.5017L9.5 9.50171L14.5 9.50171",
          stroke: "#8F8F91",
          strokeWidth: "1.75",
        })
      );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1);
    t.a = () =>
      r.createElement(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        r.createElement("path", {
          d: "M1.99902 2.00073L6.99903 7.00073",
          stroke: "#8F8F91",
          strokeWidth: "1.7",
        }),
        r.createElement("path", {
          d: "M6.49902 1.50073L1.49902 1.50073L1.49902 6.50073",
          stroke: "#8F8F91",
          strokeWidth: "1.75",
        }),
        r.createElement("path", {
          d: "M8.99902 9.00074L13.999 14.0007",
          stroke: "#8F8F91",
          strokeWidth: "1.75",
        }),
        r.createElement("path", {
          d: "M14.499 9.50073L14.499 14.5007L9.49902 14.5007",
          stroke: "#8F8F91",
          strokeWidth: "1.75",
        })
      );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1);
    t.a = () =>
      r.createElement(
        "svg",
        { focusable: "false", "aria-hidden": "true", viewBox: "0 0 29 18" },
        r.createElement("path", {
          d: "M9 0h11a9 9 0 0 1 0 18H9A9 9 0 0 1 9 0zM6.561 9.337c0 2.277 1.683 3.806 3.773 3.806 1.199 0 2.2-.506 2.882-1.265V9.227H9.784v.814h2.519v1.496a2.895 2.895 0 0 1-1.969.792c-1.606 0-2.827-1.254-2.827-2.992 0-1.749 1.221-2.981 2.827-2.981.88 0 1.661.418 2.123 1.012l.726-.451c-.649-.803-1.551-1.375-2.849-1.375-2.09 0-3.773 1.518-3.773 3.795zM14.701 13h.913V5.663h-.913V13zm2.629 0h.913V9.656h3.817v-.814h-3.817V6.477h3.894v-.814H17.33V13z",
          fillRule: "nonzero",
        })
      );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(112);
    t.a = () =>
      r.createElement(
        i.a,
        { focusable: "false", "aria-hidden": "true", viewBox: "0 0 17 15" },
        r.createElement(
          "g",
          {
            strokeWidth: "1",
            fillRule: "evenodd",
            strokeLinejoin: "round",
            fill: "none",
          },
          r.createElement(
            "g",
            { stroke: "#FFF" },
            r.createElement(
              "g",
              {
                transform:
                  "translate(-1073 -120)translate(1002 30)translate(72 90)translate(0 1)",
              },
              r.createElement("path", {
                d: "M0.4 6.7L6.7 6.7",
                strokeLinecap: "round",
              }),
              r.createElement("path", {
                d: "M8.9 6.7L15.2 6.7",
                strokeLinecap: "round",
              }),
              r.createElement("polygon", {
                points: "15.2 3.2 0.4 3.2 0.4 13.1 15.2 13.1",
              }),
              r.createElement("polygon", {
                points: "8.9 8.9 6.7 8.9 6.7 6 8.9 6",
              }),
              r.createElement("path", {
                d: "M5 3.2C5 1.6 6.2 0.4 7.8 0.4 9.4 0.4 10.6 1.6 10.6 3.2",
              })
            )
          )
        )
      );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(112);
    t.a = () =>
      r.createElement(
        i.a,
        { focusable: "false", "aria-hidden": "true", viewBox: "0 0 18 18" },
        r.createElement(
          "g",
          {
            strokeWidth: "1",
            fillRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fill: "none",
          },
          r.createElement(
            "g",
            { stroke: "#FFF" },
            r.createElement("path", {
              d: "M16.7 9C16.7 13.2 13.2 16.7 9 16.7 4.8 16.7 1.3 13.2 1.3 9 1.3 4.8 4.8 1.3 9 1.3 13.2 1.3 16.7 4.8 16.7 9L16.7 9Z",
            }),
            r.createElement("path", {
              d: "M14.7 3.8C14.7 3.8 14.3 5.7 13 6.3 11.7 6 10.3 7 10.7 7 11 7 11.3 8.3 11.3 8.3 11.7 8.7 12.3 8.3 12.3 8.3 13.2 9.2 11 10.7 11 11 11 11.3 11.8 11.5 11.3 12 10.8 12.5 10.3 12.7 10.3 12.7 10.3 14.3 8.7 14.3 8.3 14.3 8 14.3 7.3 13 7.3 12.7 7.3 12.3 7.7 12 7.7 11.7 7.7 11.3 7 10.7 7 10.7 7 9.3 6 9.7 5 9.7 4 9.7 4 8.3 4 8.3 4 8.3 4 6 5.7 5.7 7.3 5.3 7.3 6 7.3 6 8 6.7 9.3 6 10 6 10 6 10.3 3.7 9.7 4 9 4.3 8.4 4.1 8.3 3.3 8.2 2.3 11.2 1.7 11.2 1.7",
            })
          )
        )
      );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(341);
    t.a = () =>
      r.createElement(
        i.a,
        {
          focusable: "false",
          "aria-hidden": "true",
          width: "16",
          height: "13.59",
          viewBox: "0 0 16 13.59",
          xmlns: "http://www.w3.org/2000/svg",
        },
        r.createElement("path", {
          d: "M4 6.2c0-.22.18-.4.4-.4h7.2c.22 0 .4.18.4.4v.6a.4.4 0 01-.4.4H4.4a.4.4 0 01-.4-.4v-.6zm.4 2.6a.4.4 0 00-.4.4v.6c0 .221.18.4.4.4h5.2a.4.4 0 00.4-.4v-.6a.4.4 0 00-.4-.4H4.4z",
        }),
        r.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M6 2H4.8c-1.68 0-2.52 0-3.162.327A3 3 0 00.327 3.638C0 4.28 0 5.12 0 6.8v2.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C2.28 14 3.12 14 4.8 14h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311C16 11.72 16 10.88 16 9.2V6.8c0-1.68 0-2.52-.327-3.162a3 3 0 00-1.311-1.311C13.72 2 12.88 2 11.2 2H10l-.869-.869C8.735.735 8.537.537 8.31.463a1 1 0 00-.618 0c-.228.074-.426.272-.822.668L6 2zm4.083 1.4c-.245 0-.367 0-.482-.028a1 1 0 01-.29-.12c-.1-.061-.187-.148-.36-.32l-.81-.81L8 1.98l-.141.141-.81.81c-.173.173-.26.26-.36.322a1 1 0 01-.29.12c-.115.027-.237.027-.482.027H4.8c-.863 0-1.426.001-1.856.036-.414.034-.58.092-.67.138a1.6 1.6 0 00-.7.7c-.046.09-.104.256-.138.67-.035.43-.036.993-.036 1.856v2.4c0 .863.001 1.426.036 1.856.034.414.092.58.138.67a1.6 1.6 0 00.7.7c.09.046.256.104.67.138.43.035.993.036 1.856.036h6.4c.863 0 1.426-.001 1.856-.036.414-.034.58-.092.67-.138a1.6 1.6 0 00.7-.7c.046-.09.104-.256.138-.67.035-.43.036-.993.036-1.856V6.8c0-.863-.001-1.426-.036-1.856-.034-.414-.092-.58-.138-.67a1.6 1.6 0 00-.7-.7c-.09-.046-.256-.104-.67-.138-.43-.035-.993-.036-1.856-.036h-1.117z",
        })
      );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(105);
    t.a = ({ color: e }) => {
      const t = Object(i.a)(),
        n = (t && e && t[e]) || "#000";
      return r.createElement(
        "svg",
        {
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        r.createElement("path", {
          d: "M6.25 11.5L9.75 8L6.25 4.5",
          stroke: n,
          strokeWidth: "1.7",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        })
      );
    };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var r = n(1),
      i = n.n(r);
    function o() {
      return i.a.createElement(
        "svg",
        { viewBox: "0 0 30 30", xmlns: "http://www.w3.org/2000/svg" },
        i.a.createElement("path", {
          className: "star-body",
          d: "M14.1577 3.34761C14.4958 2.63413 15.5042 2.63413 15.8423 3.3476L18.8139 9.61888C18.9499 9.90602 19.221 10.1043 19.5342 10.1459L26.3751 11.054C27.1534 11.1574 27.465 12.1232 26.8957 12.6675L21.8913 17.4515C21.6622 17.6705 21.5587 17.9914 21.6162 18.3042L22.8725 25.1368C23.0154 25.9141 22.1996 26.511 21.5096 26.1339L15.4452 22.8193C15.1675 22.6676 14.8325 22.6676 14.5548 22.8193L8.49037 26.1339C7.80044 26.511 6.98456 25.9141 7.12749 25.1368L8.38382 18.3042C8.44134 17.9914 8.3378 17.6705 8.10868 17.4515L3.10432 12.6675C2.53499 12.1232 2.84662 11.1574 3.6249 11.054L10.4658 10.1459C10.779 10.1043 11.0501 9.90602 11.1861 9.61888L14.1577 3.34761Z",
          fill: "currentColor",
        }),
        i.a.createElement("path", {
          className: "star-stroke",
          d: "M10.7343 9.40478L11.1861 9.61888L10.7343 9.40478C10.6703 9.53973 10.544 9.63116 10.4 9.65028L3.5591 10.5584C2.35983 10.7176 1.88996 12.1983 2.75882 13.0289L7.76317 17.8129C7.87006 17.9151 7.91926 18.0659 7.89206 18.2138L6.63574 25.0463C6.41821 26.2294 7.66346 27.1557 8.73018 26.5727L14.7946 23.2581C14.9228 23.188 15.0772 23.188 15.2054 23.2581L21.2698 26.5727C22.3365 27.1557 23.5818 26.2294 23.3643 25.0463L22.1079 18.2138C22.0807 18.0659 22.1299 17.9151 22.2368 17.8129L27.2412 13.0289C28.11 12.1983 27.6402 10.7176 26.4409 10.5584L19.6 9.65028C19.456 9.63116 19.3297 9.53973 19.2657 9.40478L16.2942 3.1335C15.7755 2.03883 14.2245 2.03884 13.7058 3.13351L10.7343 9.40478Z",
          stroke: "black",
          strokeOpacity: "0.2",
        })
      );
    }
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(14),
      o = n(177);
    t.a = ({ onClick: e }) =>
      r.createElement(
        o.a,
        {
          viewBox: "0 0 24 24",
          "aria-label": Object(i.e)("pause"),
          onClick: e,
        },
        r.createElement("rect", {
          x: "7",
          y: "6",
          width: "3",
          height: "12",
          rx: "1",
        }),
        r.createElement("rect", {
          x: "14",
          y: "6",
          width: "3",
          height: "12",
          rx: "1",
        })
      );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1);
    t.a = () =>
      r.createElement(
        "svg",
        {
          focusable: "false",
          "aria-hidden": "true",
          width: "30",
          height: "30",
          viewBox: "0 0 30 30",
        },
        r.createElement("path", {
          d: "M15 8v3.793a.491.491 0 0 1-.268.444.496.496 0 0 1-.585-.09L9.354 7.353a.5.5 0 0 1 0-.708l4.793-4.792a.5.5 0 0 1 .854.353V6a9 9 0 1 1-8.945 9.998C5.994 15.45 6.447 15 7 15c.552 0 .992.45 1.07.997A7 7 0 1 0 15 8z",
        })
      );
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    });
    var r = n(1);
    function i() {
      return (
        (i = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        i.apply(this, arguments)
      );
    }
    var o = r.createElement("path", {
      d: "M0 8.96c0-.336 0-.504.065-.632a.6.6 0 01.263-.263C.456 8 .624 8 .96 8h9.08c.336 0 .504 0 .632.065a.6.6 0 01.263.263c.065.128.065.296.065.632v.08c0 .336 0 .504-.065.632a.6.6 0 01-.263.263c-.128.065-.296.065-.632.065H.96c-.336 0-.504 0-.632-.065a.6.6 0 01-.263-.263C0 9.544 0 9.376 0 9.04v-.08zM0 4.96c0-.336 0-.504.065-.632a.6.6 0 01.263-.263C.456 4 .624 4 .96 4h5.08c.336 0 .504 0 .632.065a.6.6 0 01.263.263C7 4.456 7 4.624 7 4.96v.08c0 .336 0 .504-.065.632a.6.6 0 01-.263.263C6.544 6 6.376 6 6.04 6H.96c-.336 0-.504 0-.632-.065a.6.6 0 01-.263-.263C0 5.544 0 5.376 0 5.04v-.08zM.065.328C0 .456 0 .624 0 .96v.08c0 .336 0 .504.065.632a.6.6 0 00.263.263C.456 2 .624 2 .96 2h12.08c.336 0 .504 0 .632-.065a.6.6 0 00.263-.263C14 1.544 14 1.376 14 1.04V.96c0-.336 0-.504-.065-.632a.6.6 0 00-.263-.263C13.544 0 13.376 0 13.04 0H.96C.624 0 .456 0 .328.065a.6.6 0 00-.263.263z",
      fill: "#286EFA",
    });
    function s(e) {
      return r.createElement(
        "svg",
        i(
          {
            width: 14,
            height: 10,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          e
        ),
        o
      );
    }
    n.p;
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return c;
    }),
      n.d(t, "b", function () {
        return u;
      });
    var r = n(78),
      i = n(45),
      o = n(181),
      s = n(0);
    const c = (e, t, n, r) => (s, c) => {
        const { session: d } = c();
        return (
          s(a(t, n)),
          e
            .submitMessengerCardAction(d, t, n, r)
            .then((t) => {
              s(u(t)), s(Object(i.a)(e, t));
            })
            .catch(() => {
              s(l(t, n)),
                s(
                  Object(o.a)("MessengerCardSubmitError", {
                    cardUri: t,
                    componentId: n,
                    inputValues: r,
                  })
                );
            })
        );
      },
      a = (e, t) => ({ type: s.Ud, cardUri: e, componentId: t }),
      u = (e) => ({ type: s.Vd, card: Object(r.c)(e) }),
      l = (e, t) => ({ type: s.Td, cardUri: e, componentId: t });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return c;
    }),
      n.d(t, "c", function () {
        return a;
      }),
      n.d(t, "a", function () {
        return u;
      });
    var r = n(2),
      i = n(17),
      o = n(63),
      s = n(62);
    const c = Object(r.createSelector)(
        [o.f, (e) => e.help.searchPerformed],
        (e, t) => null !== e || t
      ),
      a = Object(r.createSelector)(
        [c, i.v, s.l, i.a, i.b, o.f],
        (e, t, n, r, i, o) => null === o && !!t && !n && !(t && !e) && r && i
      ),
      u = Object(r.createSelector)([o.e, o.b], (e, t) => e && !t);
  },
  function (e, t, n) {
    "use strict";
    var r = n(2);
    t.a = Object(r.createSelector)([(e) => e.app], (e) => e.isMessengerOpen);
  },
  function (e, t, n) {
    "use strict";
    var r = n(44),
      i = n(11),
      o = n(2);
    const s = Object(o.createSelector)(
      [r.a, (e) => e.dismissedPointers],
      (e, t) => e.filter((e) => !(e.read && t[e.id]) && Object(i.p)(e))
    );
    t.a = Object(o.createSelector)(
      (e) => {
        const {
          conversations: { byId: t },
          pointerMessage: { conversationId: n },
        } = e;
        return t[n];
      },
      s,
      (e, t) => {
        return (
          (n = t),
          void 0 !== (r = e) &&
          !((e, t) => void 0 !== e.find((e) => e.id === t.id))(n, r) &&
          Object(i.p)(r)
            ? n.concat(r)
            : n
        );
        var n, r;
      }
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(18);
    const i =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    n.d(t, "a", function () {
      return o;
    }),
      n.d(t, "b", function () {
        return s;
      });
    const o = (e) => {
        const t = (e = e || "").match(/[^\x00-\x7F]/);
        if (!e || (r.a.isSafari() && t)) {
          const t = e.split(".");
          (e = `File${new Date().getTime()}`),
            t.length > 1 && (e += `.${t[t.length - 1]}`);
        }
        return e;
      },
      s = (e, t, n) => {
        if (!e) return;
        let r;
        if (e.split(",")[0].indexOf("base64") >= 0) {
          const t = e.split(",")[1];
          r = window.atob
            ? atob(t)
            : ((e) => {
                if (!e || e.length % 4 != 0)
                  throw new Error(
                    "Invalid string. Length must be a multiple of 4"
                  );
                let t = 0;
                const n = e.length,
                  r = e.indexOf("=") > 0 ? e.length - e.indexOf("=") : 0,
                  o = new Uint8Array((3 * n) / 4 - r),
                  s = new Array(4);
                for (let n = 0; n < e.length; n += 4)
                  (s[0] = i.indexOf(e[n])),
                    (s[1] = i.indexOf(e[n + 1])),
                    (s[2] = i.indexOf(e[n + 2])),
                    (s[3] = i.indexOf(e[n + 3])),
                    (o[t++] = 255 & ((s[0] << 2) | (s[1] >> 4))),
                    s[2] < 64 &&
                      ((o[t++] = 255 & ((s[1] << 4) | (s[2] >> 2))),
                      s[3] < 64 && (o[t++] = 255 & ((s[2] << 6) | s[3])));
                let c = "";
                for (let e = 0; e < o.length; e++)
                  c += String.fromCharCode(parseInt(o[e]));
                return c;
              })(t);
        } else r = unescape(e.split(",")[1]);
        const o = new Uint8Array(r.length);
        for (let e = 0; e < r.length; e++) o[e] = r.charCodeAt(e);
        const s = new Blob([o], { type: n });
        return (s.lastModifiedDate = new Date()), (s.name = t), s;
      };
  },
  function (e, t, n) {
    "use strict";
    var r = n(256),
      i = n(138),
      o = n(81),
      s = n(10),
      c = n(15),
      a = n(65),
      u = n(33);
    function l(e, t, n, r, i = null, o = !1, l = !1, d, p) {
      return (f, b) => {
        const h = b(),
          { session: g, borderless: m } = h;
        let v;
        v = "message" === n.partType ? null : n.id;
        const y = (function (e) {
            if (e && e.clientId) return e.clientId;
            return Object(u.b)();
          })(i),
          O = new Date(),
          _ = Object(a.c)(r.text),
          w = {
            conversationId: t,
            clientId: y,
            createdAt: O,
            body: _,
            selectedReplyOption: { replyOption: r, quickReplyPart: n },
          };
        return (
          f(Object(s.e)(t, w, o)),
          (m && m.conversationId) || f(Object(c.f)(t)),
          e
            .quickReply(g, t, v, r, y)
            .then((e) => {
              f(Object(s.f)(t, e, l, d, p, !1, O));
            })
            .catch((e) => {
              f(Object(s.d)(t, w, e));
            })
        );
      };
    }
    var d = n(4);
    function p(e, t, n, s = !1, c, a, u) {
      return "messenger_suggested_content" === n.type
        ? Object(r.d)(e, t, n, s, a, u)
        : "quick_reply" === n.type
        ? (c.replyOptions &&
            -1 === c.replyOptions.map((e) => e.uuid).indexOf(n.uuid) &&
            (Object(d.c)("quick_reply_uuid_mismatch"),
            Object(d.g)("quick_reply_uuid_mismatch"),
            Object(d.b)(
              `quick_reply_uuid_mismatch partId=${c.id} uuid=${n.uuid}`
            )),
          l(e, t.id, c, n))
        : "predictive_answer" === n.type
        ? Object(i.b)(e, n, s)
        : Object(o.c)(e, n, s);
    }
    n.d(t, "a", function () {
      return p;
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(218),
      i = n.n(r),
      o = n(1),
      s = n(7);
    const c = Object(s.d)("svg", { target: "e1tfcp060" })(
      "fill:",
      Object(s.g)("buttonBackgroundColor"),
      ";"
    );
    function a({ size: e }) {
      return o.createElement(
        c,
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: e,
          height: e,
          viewBox: "0 0 14 14",
        },
        o.createElement("path", {
          fillRule: "evenodd",
          d: "M12.5 7c0 3.0376-2.4624 5.5-5.5 5.5-3.03757 0-5.5-2.4624-5.5-5.5 0-3.03757 2.46243-5.5 5.5-5.5 3.0376 0 5.5 2.46243 5.5 5.5zM14 7c0 3.866-3.134 7-7 7-3.86599 0-7-3.134-7-7 0-3.86599 3.13401-7 7-7 3.866 0 7 3.13401 7 7zM6.27844 3.48219v3.78093l.00105.00104c.00305.07805.03658.1518.09341.20546l.07452.0566L9.6706 9.69708l.15009.03773h.05667c.09341-.01886.14904-.07442.20574-.13102l.4125-.65514c.0355-.04926.0552-.10809.0566-.16876 0-.09329-.0566-.14885-.1501-.20545L7.62817 6.68345V3.48219c0-.14989-.1312-.29979-.30017-.29979h-.74938c-.16898 0-.30018.1499-.30018.29979z",
          clipRule: "evenodd",
        })
      );
    }
    n.d(t, "a", function () {
      return a;
    }),
      (a.defaultProps = { size: 14 }),
      (a.propTypes = { size: i.a.number });
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(7);
    const o = Object(i.d)("svg", { target: "e1tmkw1z0" })(
      "fill:",
      Object(i.g)("linkColor"),
      " !important;height:13px;width:13px;padding-right:5px;"
    );
    n.d(t, "a", function () {
      return s;
    });
    const s = () =>
      r.createElement(
        o,
        {
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 15 15",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
        },
        r.createElement(
          "g",
          { strokeWidth: "1", fillRule: "evenodd" },
          r.createElement(
            "g",
            { fillRule: "nonzero" },
            r.createElement(
              "g",
              null,
              r.createElement("path", {
                d: "M1,14 L1,4 L8.11538462,4 C8.39152699,4 8.61538462,3.77614237 8.61538462,3.5 C8.61538462,3.22385763 8.39152699,3 8.11538462,3 L0.5,3 C0.223857625,3 0,3.22385763 0,3.5 L0,14.5 C0,14.7761424 0.223857625,15 0.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 L12,7.73076923 C12,7.45462686 11.7761424,7.23076923 11.5,7.23076923 C11.2238576,7.23076923 11,7.45462686 11,7.73076923 L11,14 L1,14 Z",
              }),
              r.createElement("path", {
                d: "M5.35355339,10.3535534 L12.8535534,2.85355339 C13.0488155,2.65829124 13.0488155,2.34170876 12.8535534,2.14644661 C12.6582912,1.95118446 12.3417088,1.95118446 12.1464466,2.14644661 L4.64644661,9.64644661 C4.45118446,9.84170876 4.45118446,10.1582912 4.64644661,10.3535534 C4.84170876,10.5488155 5.15829124,10.5488155 5.35355339,10.3535534 Z",
              }),
              r.createElement("path", {
                d: "M14,5.5 C14,5.77614237 14.2238576,6 14.5,6 C14.7761424,6 15,5.77614237 15,5.5 L15,0.5 C15,0.223857625 14.7761424,9.43689571e-16 14.5,8.8817842e-16 L9.5,0 C9.22385763,-4.90527396e-17 9,0.223857625 9,0.5 C9,0.776142375 9.22385763,1 9.5,1 L14,1 L14,5.5 Z",
              })
            )
          )
        )
      );
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      i = n(7),
      o = { name: "540lu8", styles: "width:14px;height:14px;" };
    const s = Object(i.d)("svg", { target: "e1fpiznc0" })(
      "width:16px;height:16px;color:",
      Object(i.g)("weRunOnIntercomText"),
      ";vertical-align:sub;padding-right:8px;",
      ({ theme: e }) =>
        Object(i.c)("> g{fill:", e.m5Enabled ? "#737373" : "#081d34", ";}"),
      " ",
      ({ displayAsCompact: e }) => e && o
    );
    t.a = ({ displayAsCompact: e }) =>
      r.createElement(
        s,
        {
          displayAsCompact: e,
          focusable: "false",
          "aria-hidden": "true",
          viewBox: "0 0 16 16",
        },
        r.createElement(
          "g",
          null,
          r.createElement("path", {
            d: "M13.9 8.8C13.9 9.1 13.6 9.3 13.3 9.3 13 9.3 12.8 9.1 12.8 8.8L12.8 4C12.8 3.7 13 3.5 13.3 3.5 13.6 3.5 13.9 3.7 13.9 4L13.9 8.8 13.9 8.8ZM13.7 12.1C13.6 12.2 11.6 13.9 8 13.9 4.4 13.9 2.4 12.2 2.3 12.1 2.1 11.9 2.1 11.6 2.3 11.4 2.5 11.2 2.8 11.1 3 11.3 3 11.4 4.8 12.8 8 12.8 11.2 12.8 13 11.3 13 11.3 13.2 11.1 13.5 11.2 13.7 11.4 13.9 11.6 13.9 11.9 13.7 12.1L13.7 12.1ZM2.1 4C2.1 3.7 2.4 3.5 2.7 3.5 3 3.5 3.2 3.7 3.2 4L3.2 8.8C3.2 9.1 3 9.3 2.7 9.3 2.4 9.3 2.1 9.1 2.1 8.8L2.1 4 2.1 4ZM4.8 2.9C4.8 2.6 5 2.4 5.3 2.4 5.6 2.4 5.9 2.6 5.9 2.9L5.9 10.1C5.9 10.4 5.6 10.6 5.3 10.6 5 10.6 4.8 10.4 4.8 10.1L4.8 2.9 4.8 2.9ZM7.5 2.7C7.5 2.4 7.7 2.1 8 2.1 8.3 2.1 8.5 2.4 8.5 2.7L8.5 10.4C8.5 10.7 8.3 10.9 8 10.9 7.7 10.9 7.5 10.7 7.5 10.4L7.5 2.7 7.5 2.7ZM10.1 2.9C10.1 2.6 10.4 2.4 10.7 2.4 11 2.4 11.2 2.6 11.2 2.9L11.2 10.1C11.2 10.4 11 10.6 10.7 10.6 10.4 10.6 10.1 10.4 10.1 10.1L10.1 2.9 10.1 2.9ZM14 0L2 0C0.9 0 0 0.9 0 2L0 14C0 15.1 0.9 16 2 16L14 16C15.1 16 16 15.1 16 14L16 2C16 0.9 15.1 0 14 0L14 0Z",
          })
        )
      );
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    t.a = function (e) {
      var t;
      e &&
        e.Element &&
        ("function" != typeof (t = e.Element.prototype).matches &&
          (t.matches =
            t.msMatchesSelector ||
            t.mozMatchesSelector ||
            t.webkitMatchesSelector ||
            function (e) {
              const t = this,
                n = (t.document || t.ownerDocument).querySelectorAll(e);
              let r = 0;
              for (; n[r] && n[r] !== t; ) ++r;
              return Boolean(n[r]);
            }),
        "function" != typeof t.closest &&
          (t.closest = function (e) {
            let t = this;
            for (; t && 1 === t.nodeType; ) {
              if (t.matches(e)) return t;
              t = t.parentNode;
            }
            return null;
          }));
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    var r = n(2);
    t.a = Object(r.createSelector)(
      [(e) => e.session],
      (e) => !(!e || !e.token)
    );
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    });
    var r = n(0);
    const i = (e) => ({ type: r.ib, conversationId: e });
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    });
    var r = n(7),
      i = n(96),
      o = { name: "gyp8mm", styles: "visibility:hidden;" };
    const s = Object(r.d)("span", { target: "e1fq35ii0" })(
      "position:absolute;height:16px;width:16px;top:0;right:0;bottom:0;left:0;margin:auto;& > svg > path{fill:",
      Object(r.g)("inputButtonSubmitIcon"),
      ";}",
      ({ disabled: e, theme: t }) =>
        e && Object(r.c)("& > svg > path{fill:", t.disabledInputText, ";}"),
      " ",
      ({ isLoading: e }) => e && o,
      " ",
      i.j
    );
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    });
    var r = n(7);
    const i = Object(r.d)("svg", { target: "e16k30l00" })();
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    });
    var r = n(7);
    const i = Object(r.d)("svg", { target: "ea0dzra0" })(
      "margin:0 auto;width:9px;height:15px;> g > g{fill:",
      Object(r.g)("headerTitleColor"),
      ";}"
    );
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    });
    var r = n(7);
    const i = Object(r.d)("svg", { target: "e1budwm30" })();
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return d;
    }),
      n.d(t, "a", function () {
        return f;
      });
    var r = n(47),
      i = n.n(r),
      o = n(3),
      s = n(4),
      c = n(25),
      a = n(0),
      u = n(13),
      l = n(113);
    function d(e, t = !0) {
      return (n, r) => {
        const i = r(),
          { session: d } = i;
        return (
          (function (e, t) {
            const { user: n } = e,
              r = Object(u.i)(e),
              i = r ? "searched" : "submitted",
              o = r ? c.q : c.t,
              a = r ? c.E : c.F,
              l = r ? c.b : c.f;
            Object(s.h)(n, i, o, a, l, { phrase: t });
          })(i, e),
          n(
            (function (e, t) {
              return { type: a.fd, phrase: e, immediate: t };
            })(e, t)
          ),
          o.c
            .searchArticles(d, e)
            .then((t) => {
              n(
                (function (e, t) {
                  return { type: a.gd, searchResults: t.articles, phrase: e };
                })(e, t)
              );
            })
            .catch(() => {
              n(
                (function (e) {
                  return { type: a.ed, phrase: e };
                })(e)
              );
            })
            .finally(() => {
              n(Object(l.b)());
            })
        );
      };
    }
    const p = i()((e, t) => e(d(t, !1)), 500, { leading: !1, trailing: !0 });
    function f(e) {
      return (t) => {
        p(t, e);
      };
    }
  },
  function (e, t, n) {
    "use strict";
    var r = n(2),
      i = n(344);
    t.a = Object(r.createSelector)(i.a, ({ recentConversations: e }) =>
      e.filter((e) => !e.preventEndUserReplies)
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(107),
      i = n.n(r),
      o = n(2),
      s = n(44),
      c = n(11),
      a = n(345);
    function u(e) {
      const t = Date.now() - 2592e5;
      return e.lastPartCreatedAt > t;
    }
    t.a = Object(o.createSelector)(
      s.a,
      (e) => e.newConversation,
      a.a,
      (e, t, n) => {
        const r = Object(c.w)(e),
          o = i()([...n, ...r.filter(u)], (e) => e.id);
        return (
          t &&
            1 === t.parts.length &&
            "saving" === t.parts[0].saveState &&
            o.unshift(t),
          { recentConversations: o }
        );
      }
    );
  },
  function (e, t, n) {
    "use strict";
    var r = n(2),
      i = n(44),
      o = n(11),
      s = n(176);
    t.a = Object(r.createSelector)(
      (e) => e.user,
      i.a,
      (e) => e.openInboundConversationIds,
      s.a,
      (e, t, n, r) => {
        const i = Object(o.w)(t);
        return r &&
          e.preventMultipleInboundConversation &&
          (null == i ? void 0 : i.length) > 0
          ? i.filter(((s = n), (e) => -1 !== s.indexOf(e.id)))
          : [];
        var s;
      }
    );
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var r = n(2);
    const i = (e) => e.checklist,
      o = () =>
        Object(r.createSelector)(
          i,
          (e) => (null == e ? void 0 : e.currentlyResolvingTaskId) || null
        );
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    }),
      n.d(t, "b", function () {
        return s;
      }),
      n.d(t, "c", function () {
        return c;
      });
    var r = n(0),
      i = n(114);
    function o(e, t, n) {
      return async (i, o) => {
        const { app: s, session: c } = o(),
          { conversationId: a } = s;
        i(
          (function (e) {
            return { type: r.W, ticketTypeId: e };
          })(t)
        );
        try {
          const o = await e.createTicket(c, {
            ticketTypeId: t,
            conversationId: a,
            attributes: n,
          });
          return (
            i(
              (function (e) {
                return { type: r.X, ticketTypeId: e };
              })(t)
            ),
            o
          );
        } catch (e) {
          return (
            i(
              (function (e) {
                return { type: r.V, ticketTypeId: e };
              })(t)
            ),
            null
          );
        }
      };
    }
    function s(e) {
      return async (t, n) => {
        const { session: r } = n();
        try {
          const n = await e.getTicketTypes(r);
          return t(Object(i.b)(n)), n;
        } catch (e) {
          return null;
        }
      };
    }
    const c = (e) => ({ type: r.Pc, tickets: e });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    });
    var r = n(137),
      i = n.n(r),
      o = n(108),
      s = n.n(o),
      c = n(2);
    const a = Object(c.createSelector)(
      (e) => e.inboundSuggestions,
      (e) => {
        if (!e) return null;
        if (e.previewSuggestions) return e.previewSuggestions;
        return e.allSuggestions && e.allSuggestions.length > 0
          ? i()(s()(e.allSuggestions, "priority", "asc"))
          : null;
      }
    );
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return i;
      });
    const r = "html-loaded",
      i = "sheet-loaded";
  },
  ,
  function (e, t, n) {
    var r = {
      "./failed.mp3": 554,
      "./notification.mp3": 555,
      "./operator.mp3": 556,
      "./submit.mp3": 557,
    };
    function i(e) {
      var t = o(e);
      return n(t);
    }
    function o(e) {
      if (!n.o(r, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return r[e];
    }
    (i.keys = function () {
      return Object.keys(r);
    }),
      (i.resolve = o),
      (e.exports = i),
      (i.id = 351);
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return b;
    }),
      n.d(t, "b", function () {
        return h;
      });
    var r = n(174),
      i = n.n(r),
      o = n(83),
      s = n.n(o),
      c = n(45),
      a = n(51),
      u = n(3),
      l = n(97),
      d = n(64),
      p = n(0),
      f = n(114);
    const b = () => (e, t) => {
        const {
          matchedSlots: n,
          fetchedSlots: r,
          isFetched: o,
          isFetching: c,
        } = t().homeScreen;
        if (c) return;
        const a = !s()(
          n,
          r.map((e) => i()(e, "uri"))
        );
        return !o || a ? e(h(u.c)) : void 0;
      },
      h = (e) => async (t, n) => {
        t(g());
        const r = n(),
          { session: i, app: o, homeScreen: s } = r;
        Object(l.c)(r) && t(Object(d.d)());
        const u = await e.getHomeScreenCards(i, {
          homeScreenSlots: s.matchedSlots,
          selfServeSuggestionsMatch: o.selfServeSuggestionsMatch,
        });
        if ((t(Object(a.f)(u)), !1 === u.cardsSuccess))
          return t(v(u.conversations)), t(y("Couldn't load apps"));
        const p = u.cards || u;
        return (
          p.forEach((n) => t(Object(c.a)(e, n))),
          u.ticketTypes && t(Object(f.b)(u.ticketTypes)),
          t(
            m(
              p.map((e) => ({
                uri: e.uri,
                messengerCardId: e.messenger_card_id,
              })),
              u.conversations,
              u.hasMoreConversations,
              u.openInboundConversationIds
            )
          )
        );
      },
      g = () => ({ type: p.Tb }),
      m = (e, t, n, r) => ({
        type: p.Ub,
        cards: e,
        conversations: t,
        hasMoreConversations: n,
        openInboundConversationIds: r,
      }),
      v = (e) => ({ type: p.Vb, conversations: e }),
      y = (e) => ({ type: p.Sb, error: e });
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    e.exports = n(377);
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    n(378);
    void 0 !== window &&
      void 0 !== window.Object &&
      (window.parent.__INTERCOM_REACT_DEV_TOOLS__ &&
        (window.__REACT_DEVTOOLS_GLOBAL_HOOK__ =
          window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__),
      n(562));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    var r = {
      "./ar.json": [563, 21],
      "./bg.json": [564, 22],
      "./bn.json": [565, 23],
      "./bs.json": [566, 24],
      "./ca.json": [567, 25],
      "./cs.json": [568, 26],
      "./da.json": [569, 8],
      "./de-form.json": [570, 27],
      "./de.json": [571, 28],
      "./el.json": [572, 29],
      "./en.json": [331],
      "./es.json": [573, 30],
      "./et.json": [574, 9],
      "./fa-IR.json": [575, 31],
      "./fi.json": [576, 32],
      "./fr.json": [577, 33],
      "./he.json": [578, 34],
      "./hr.json": [579, 35],
      "./hu.json": [580, 36],
      "./id.json": [581, 37],
      "./it.json": [582, 38],
      "./ja.json": [583, 39],
      "./ko.json": [584, 40],
      "./lt.json": [585, 41],
      "./lv.json": [586, 42],
      "./mn.json": [587, 43],
      "./ms.json": [588, 44],
      "./nb.json": [589, 10],
      "./nl.json": [590, 45],
      "./package.json": [591, 11],
      "./pl.json": [592, 46],
      "./pt-BR.json": [593, 47],
      "./pt.json": [594, 48],
      "./ro.json": [595, 49],
      "./ru.json": [596, 50],
      "./sl.json": [597, 51],
      "./sr.json": [598, 52],
      "./sv.json": [599, 12],
      "./th.json": [600, 53],
      "./tr.json": [601, 54],
      "./uk.json": [602, 55],
      "./vi.json": [603, 56],
      "./zh-CN.json": [604, 13],
      "./zh-TW.json": [605, 14],
    };
    function i(e) {
      if (!n.o(r, e))
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        });
      var t = r[e],
        i = t[0];
      return Promise.all(t.slice(1).map(n.e)).then(function () {
        return n.t(i, 3);
      });
    }
    (i.keys = function () {
      return Object.keys(r);
    }),
      (i.id = 510),
      (e.exports = i);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    e.exports = n.p + "audio/failed.4da3027c.mp3";
  },
  function (e, t, n) {
    e.exports = n.p + "audio/notification.20576730.mp3";
  },
  function (e, t, n) {
    e.exports = n.p + "audio/operator.2b750c4a.mp3";
  },
  function (e, t, n) {
    e.exports = n.p + "audio/submit.3abafccd.mp3";
  },
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(302),
      i = n(184),
      o = n.n(i),
      s = n(19),
      c = n(17),
      a = n(61),
      u = n(46),
      l = n(36),
      d = n(144),
      p = n(37),
      f = n(81),
      b = n(180),
      h = n(48),
      g = n(109),
      m = n(258),
      v = n(3),
      y = n(2);
    const O = (e) => e.operator,
      _ = Object(y.createSelector)(O, (e) => e.lastComposerEvent),
      w = Object(y.createSelector)(O, (e) => e.clientsideMessageConditions);
    var j = n(173);
    class predicates_matcher_PredicatesMatcher {
      constructor(e) {
        (this.callback = e), (this.isStarted = !1), (this.context = {});
      }
      start(e) {
        this.isStarted && this.shutdown(),
          (this.conditions = e),
          this._setupPredicates(e),
          (this.isStarted = !0);
      }
      shutdown() {
        this.predicateChains && this.predicateChains.forEach((e) => e.cancel()),
          (this.isStarted = !1);
      }
      setContext(e) {
        this.predicateChains &&
          this.predicateChains.forEach((t) => t.setContext(e));
      }
      _setupPredicates(e) {
        this.predicateChains = e.map((e) => new j.a(e, this.callback));
      }
    }
    var C = n(10),
      S = n(45),
      E = n(11),
      I = n(0);
    function A(e) {
      return (t, n) => {
        const { session: r } = n();
        return v.c.visitorAutoMessageConditionSatisfied(r, e).then(
          (e) => {
            e &&
              (Object(E.v)(e).forEach((e) => t(Object(S.a)(v.c, e, !1))),
              t({ type: I.Be }),
              t(Object(C.p)(v.c, e, !1, Date.now())));
          },
          () => t({ type: I.Ae })
        );
      };
    }
    const P = Object(y.createStructuredSelector)({
      clientsideMessageConditions: w,
    });
    var k = function (e) {
        const t = new predicates_matcher_PredicatesMatcher((t) => {
          e.dispatch(A(t));
        });
        return () => {
          const { clientsideMessageConditions: n } = P(e.getState()),
            { conditions: r } = t;
          ((e, t) => {
            if (!t) return !1;
            if (!e && t) return !0;
            if (e.length !== t.length) return !0;
            const n = e.map((e) => e.id),
              r = t.map((e) => e.id);
            return !n.every((e) => r.indexOf(e) >= 0);
          })(r, n) && t.start(n);
        };
      },
      T = n(83),
      R = n.n(T),
      M = n(106),
      x = n(68);
    var L = n(32),
      D = n(4),
      N = n(18);
    function U(e) {
      return e.reduce(
        (e, t) => (Object(E.o)(t) || (e[Object(E.i)(t)] = !0), e),
        {}
      );
    }
    function z(e, t) {
      const n =
        Object(x.a)(t).length > 0 &&
        (function (e, t) {
          const { forceSnippet: n } = t.notificationTypeOverrides;
          return e.filter((e) => {
            if (Object(E.o)(e)) return !1;
            const t = `${e.id}-${Object(L.a)(e.parts).id}`;
            return void 0 === n[t];
          });
        })(e, t).length > 0;
      if (Object(N.k)() && void 0 !== e.find((e) => Object(E.k)(e))) return !0;
      const r = new Date();
      r.setDate(r.getDate() - 2);
      return (
        !((t.user ? new Date(t.user.lastContactedAt) : new Date()) < r) &&
        (e.length > 1 || n)
      );
    }
    var B = function (e) {
        return () => {
          const t = e.getState(),
            n = U(Object(x.a)(t).slice(0, -3)),
            r = Object(M.a)(t),
            i = U(z(r, t) ? r : []);
          var o, s;
          (Object.keys(n).length > 0 || Object.keys(i).length > 0) &&
            (function (e, t, n) {
              const r = ((e) => e.notificationTypeOverrides.suppress)(e),
                i = ((e) => e.notificationTypeOverrides.forceSnippet)(e);
              return !R()(r, t) || !R()(i, n);
            })(t, n, i) &&
            e.dispatch(
              ((o = n), (s = i), { type: I.ie, suppress: o, forceSnippet: s })
            ),
            (function (e, t, n) {
              if (Object.keys(e).length <= 1) return;
              const r = t.filter((e) => !e.dismissed);
              if (1 !== r.length || "full" !== r[0].parts[0].notificationType)
                return;
              Object(D.g)("fullMessageSuppressed", {
                messageType: r[0].parts[0].messageType,
                dismissedCount: t.length - r.length,
                isLauncherEnabled: n.isLauncherEnabled,
              });
            })(i, r, t.launcher);
        };
      },
      V = n(26);
    function H(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function F(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? H(Object(n), !0).forEach(function (t) {
              $(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : H(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function $(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const { assign: G } = Object,
      W = {
        isBooting: !1,
        isBooted: !1,
        bootFailed: !1,
        isRehydrated: !1,
        isMessengerOpen: !1,
        isWaitingForOpenContent: !1,
        isErrorReportingDisabled: !1,
        isOverrideSamplingEnabled: !1,
        isIntercomLinkEnabled: !1,
        conversationId: null,
        features: {
          anonymousInboundMessages: !1,
          googleAnalytics: !1,
          inboundMessages: !1,
          outboundMessages: !1,
          googleAnalytics4Integration: !1,
        },
        boundWebEvents: [],
        isInstantBootEnabled: !0,
        cookieDomain: void 0,
        viewStack: [],
        userConversationAttachmentsEnabled: !0,
        userConversationGifsEnabled: !0,
        isDeveloperWorkspace: !1,
        upfrontEmailCollection: {
          upfrontEmailCollectionSubmitted: !1,
          upfrontEmailCollectionSetting: "never",
          upfrontEmailCollectorShowing: !1,
        },
        launcherLogoUrl: void 0,
        customGoogleAnalyticsTrackerId: void 0,
        temporaryExpectationsMessage: void 0,
        hideLightweightAppMessenger: !1,
        hasTheMessengerBeenOpened: !1,
        navigateToPath: null,
        openConfig: {
          layout: void 0,
          openTo: void 0,
          spaces: [],
          userHasReceivedChecklists: !1,
          userHasLiveNewsfeed: !1,
        },
        officeHoursResponse: void 0,
        path: "/",
      };
    function q(e, t) {
      if (t === Object(c.e)(e)) return G({}, e);
      const n = [].concat(e.viewStack, [t]);
      return G({}, e, { viewStack: n });
    }
    function J(e) {
      return G({}, e, { viewStack: [] });
    }
    function K(e) {
      return G({}, e, { viewStack: e.viewStack.slice(0, -1) });
    }
    var Z = n(12);
    function Y(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Q(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Y(Object(n), !0).forEach(function (t) {
              X(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Y(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function X(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const ee = "intercom-expanded-mode",
      { assign: te } = Object;
    function ne() {
      const e = Z.a.get(ee);
      return !e || !!JSON.parse(e);
    }
    const { assign: re } = Object,
      ie = { isLauncherEnabled: !1, launcherEnabledOverride: "not-present" };
    const { assign: oe } = Object,
      se = { isPresent: !1 };
    const { assign: ce } = Object;
    function ae(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function ue(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ae(Object(n), !0).forEach(function (t) {
              le(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ae(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function le(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const de = { id: null, parts: [], operator: null };
    const pe = {};
    const fe = {};
    function be(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function he(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? be(Object(n), !0).forEach(function (t) {
              ge(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : be(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function ge(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const me = {};
    function ve(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function ye(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ve(Object(n), !0).forEach(function (t) {
              Oe(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ve(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Oe(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const _e = {
      activeArticleId: null,
      isLoaded: !1,
      viewStack: [],
      transitioningBack: !1,
      inSearchBrowse: !1,
      hash: "",
      articleLocale: null,
      isStandalone: !1,
      fromHomeScreenSuggestions: !1,
    };
    function we(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function je(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? we(Object(n), !0).forEach(function (t) {
              Ce(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : we(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Ce(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const Se = {};
    const Ee = [];
    var Ie = n(53),
      Ae = n.n(Ie),
      Pe = n(167),
      ke = n.n(Pe),
      Te = n(111),
      Re = n.n(Te),
      Me = n(82);
    var xe = function (e, t) {
      switch (t.type) {
        case I.ce:
        case I.L:
        case I.Rb:
          return Object.assign({}, e, {
            attributes: e.attributes.map((t) => {
              let n = Ae()(t.value) || "" === t.value ? "unsaved" : "saved";
              return (
                "bot_workflow" === e.type &&
                  "saved" === n &&
                  (n =
                    e.attribute_collector_locked ||
                    t.attribute_collection_disabled ||
                    !t.attribute_collection_overwritable
                      ? "saved"
                      : "unsaved"),
                Object.assign({}, t, { saveState: n })
              );
            }),
          });
        case I.ge: {
          const { identifier: n, value: r } = t;
          return Object.assign({}, e, {
            attributes: e.attributes.map((e) =>
              e.identifier === n
                ? Object.assign({}, e, { value: r, saveState: "saving" })
                : e
            ),
          });
        }
        case I.he:
          return Object.assign({}, e, {
            attributes: e.attributes.map((e) =>
              e.identifier === t.identifier
                ? Object.assign({}, e, { saveState: "saved" })
                : e
            ),
          });
        case I.fe: {
          const n = Object(Me.c)(t.error),
            r = n ? Object(Me.b)(n) : void 0;
          return Object.assign({}, e, {
            attributes: e.attributes.map((e) =>
              e.identifier === t.identifier
                ? Object.assign({}, e, { saveState: "failed", errorCode: r })
                : e
            ),
          });
        }
        default:
          return e;
      }
    };
    const { assign: Le } = Object;
    function De({
      createdAt: e,
      body: t,
      clientId: n,
      file: r,
      isMessage: i,
      selectedReplyOption: o,
      composerSuggestionItem: s,
    }) {
      return {
        body: t,
        createdAt: e,
        clientId: n,
        isMessage: i,
        file: r,
        selectedReplyOption: o,
        composerSuggestionItem: s,
        partType: i ? "message" : "comment",
        eventData: {},
        saveState: "saving",
        seenState: "not-seen-yet",
        replyOptions: [],
        author: { isAdmin: !1, isSelf: !0 },
      };
    }
    var Ne = function (e = [], t) {
        switch (t.type) {
          case I.K: {
            const {
              body: n,
              createdAt: r,
              file: i,
              composerSuggestionItem: o,
              clientId: s,
            } = t.part;
            return t.isRetry
              ? e.map((e) => Le({}, e, { saveState: "saving" }))
              : e.concat(
                  De({
                    createdAt: r,
                    body: n,
                    file: i,
                    isMessage: !0,
                    composerSuggestionItem: o,
                    clientId: s,
                  })
                );
          }
          case I.J:
            return e.map((e) =>
              Le({}, e, { saveState: "failed", saveFailureReason: t.reason })
            );
          case I.H: {
            const {
              body: n,
              createdAt: r,
              clientId: i,
              file: o,
              selectedReplyOption: s,
            } = t.part;
            return t.isRetry
              ? e.map((e) =>
                  i === e.clientId ? Le({}, e, { saveState: "saving" }) : e
                )
              : e.concat(
                  De({
                    createdAt: r,
                    body: n,
                    clientId: i,
                    file: o,
                    isMessage: !1,
                    selectedReplyOption: s,
                  })
                );
          }
          case I.I:
            return e.map((e) =>
              t.part.clientId === e.clientId
                ? Le({}, e, t.part, { saveState: "saved" })
                : e
            );
          case I.G:
            return e.map((e) =>
              t.part.clientId === e.clientId
                ? Le({}, e, {
                    saveState: "failed",
                    saveFailureReason: t.reason,
                  })
                : e
            );
          case I.ce:
          case I.Rb:
          case I.L:
            return t.conversation.parts.map((e) =>
              e.form
                ? Le({}, e, {
                    form: xe(e.form, t),
                    saveState: e.saveState || "saved",
                  })
                : Le({}, e, { saveState: e.saveState || "saved" })
            );
          case I.S:
          case I.T:
            return e.map((e) =>
              e.reactionsReply
                ? Le({}, e, {
                    reactionsReply: {
                      reactionIndex: t.reactionIndex,
                      reactionSet: e.reactionsReply.reactionSet,
                    },
                  })
                : e
            );
          case I.k:
            return e.map((e) =>
              "conversationRating" === e.messageType
                ? Le({}, e, {
                    conversationRating: { chosenRating: t.ratingIndex },
                  })
                : e
            );
          case I.c:
            return e.map((e) =>
              "conversationRating" === e.messageType
                ? Le({}, e, {
                    conversationRating: Le({}, e.conversationRating, {
                      remark: t.remark,
                      submitted: !0,
                    }),
                  })
                : e
            );
          case I.re:
            return e.map((e) =>
              t.part.clientId === e.clientId
                ? Le({}, e, {
                    body: [Le({}, e.body[0], { progress: t.progress })],
                  })
                : e
            );
          case I.ve:
          case I.f:
            return e.map((e) =>
              "not-seen-yet" === e.seenState
                ? Le({}, e, { seenState: "seen" })
                : e
            );
          case I.ge:
          case I.he:
          case I.fe:
            return e.map((e) =>
              e.id === t.partId ? Le({}, e, { form: xe(e.form, t) }) : e
            );
          default:
            return e;
        }
      },
      Ue = function (e = {}, t) {
        if (t.type === I.f) {
          const {
            lastActiveAt: e,
            firstName: n,
            avatarUrl: r,
            adminId: i,
            isBot: o,
          } = t;
          return {
            id: i,
            lastActiveAt: e,
            firstName: n,
            avatar: { square128: r },
            isBot: o,
          };
        }
        return e;
      },
      ze = n(116);
    const Be = ["ticket"];
    function Ve(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function He(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Ve(Object(n), !0).forEach(function (t) {
              Fe(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Ve(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Fe(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function $e(e, t) {
      if (null == e) return {};
      var n,
        r,
        i = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            i = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (i[n] = e[n]));
      }
      return i;
    }
    const { assign: Ge } = Object,
      We = {
        fetchState: "partial",
        isFetching: !1,
        isUpdating: !1,
        read: !0,
        dismissed: !1,
        preventEndUserReplies: !1,
        parts: [],
        participants: [],
        isEmailAttributeCollectorInserted: !1,
        composerSuggestions: ze.b,
      };
    function qe(e, t) {
      return void 0 !== e ? e : t;
    }
    var Je = function (e = We, t) {
        switch (t.type) {
          case I.Qb: {
            const { conversationId: n, isUpdating: r } = t;
            return Ge({}, e, {
              id: qe(e.id, n),
              fetchState: qe(e.fetchState, "partial"),
              isFetching: !0,
              isUpdating: r,
              read: qe(e.read, !0),
              dismissed: qe(e.dismissed, !1),
              preventEndUserReplies: qe(e.preventEndUserReplies, !1),
              parts: qe(e.parts, []),
            });
          }
          case I.ce:
          case I.Rb: {
            const { conversation: n } = t,
              r = n.parts.some((e) => !e.author.isAdmin);
            (n.parts = Object(E.t)(n, e)),
              (n.composerState = Object(E.s)(n, e));
            const { ticket: i } = n,
              o = $e(n, Be),
              s = He(
                He(He({}, e), o),
                {},
                {
                  fetchState: "all",
                  isFetching: !1,
                  isUpdating: !1,
                  userParticipated: r,
                  parts: Ne(e.parts, t),
                }
              );
            return i && (s.ticketId = i.id), s;
          }
          case I.fe:
          case I.he:
          case I.L: {
            const { conversation: n } = t;
            return (
              n &&
                ((n.parts = Object(E.t)(n, e)),
                (n.composerState = Object(E.s)(n, e))),
              Ge({}, e, n, {
                fetchState: "all",
                isFetching: !1,
                isUpdating: !1,
                userParticipated: !0,
                parts: Ne(e.parts, t),
              })
            );
          }
          case I.D:
          case I.ec:
            return Ge({}, e, { read: !0 });
          case I.gb:
            return Ge({}, e, { dismissed: !0 });
          case I.I:
          case I.H: {
            const { createdAt: n } = t.part;
            return Ge({}, e, {
              userParticipated: !0,
              lastPartCreatedAt: n,
              parts: Ne(e.parts, t),
            });
          }
          case I.ge:
          case I.T:
          case I.re:
          case I.k:
          case I.c:
          case I.ve:
            return Ge({}, e, { parts: Ne(e.parts, t) });
          case I.G:
            return Object(E.q)(t.reason)
              ? Ge({}, e, {
                  parts: Ne(e.parts, t),
                  preventEndUserReplies: !0,
                  state: "state_closed",
                })
              : Ge({}, e, { parts: Ne(e.parts, t) });
          case I.f:
            return Ge({}, e, {
              lastTypingAdmin: Ue(e.lastTypingAdmin, t),
              parts: Ne(e.parts, t),
            });
          case I.kb:
            return Ge({}, e, { isEmailAttributeCollectorInserted: !0 });
          case I.B:
          case I.td:
          case I.ud:
          case I.vd:
            return null == t.conversationId
              ? e
              : He(
                  He({}, e),
                  {},
                  {
                    composerSuggestions: Object(ze.a)(e.composerSuggestions, t),
                  }
                );
          default:
            return e;
        }
      },
      Ke = n(79);
    const Ze = ["ticket"];
    function Ye(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Qe(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Ye(Object(n), !0).forEach(function (t) {
              Xe(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Ye(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Xe(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function et(e, t) {
      if (null == e) return {};
      var n,
        r,
        i = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            i = {},
            o = Object.keys(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (i[n] = e[n]));
      }
      return i;
    }
    const { assign: tt } = Object,
      nt = { isFetching: !1, pagesFetched: 0, scrollPosition: 0, byId: {} };
    function rt(e = {}, t, n, r) {
      const { fetchState: i } = e;
      return tt({}, e, {
        id: t,
        fetchState: i || "partial",
        dismissed: n,
        read: r,
      });
    }
    function it(e = {}, t) {
      switch (t.type) {
        case I.R:
        case I.te: {
          const {
            unreadConversationIds: n,
            unreadDismissedConversationIds: r,
          } = t.user || {};
          if (Ae()(n) && Ae()(r)) return e;
          const i = {};
          return (
            r && r.forEach((t) => (i[t] = rt(e[t], t, !0, !1))),
            n && n.forEach((t) => (i[t] = rt(e[t], t, !1, !1))),
            tt({}, e, i)
          );
        }
        case I.Yb: {
          const {
              unreadConversationIds: n,
              unreadDismissedConversationIds: r,
            } = t.unreadConversations || {},
            i = {};
          return (
            null == r || r.forEach((t) => (i[t] = rt(e[t], t, !0, !1))),
            null == n || n.forEach((t) => (i[t] = rt(e[t], t, !1, !1))),
            tt({}, e, i)
          );
        }
        case I.Ob:
        case I.Vb:
        case I.Ub:
        case I.Wb: {
          var n;
          const r = (
            (null == t || null === (n = t.conversations) || void 0 === n
              ? void 0
              : n.conversations) || t.conversations
          ).reduce((n, r) => {
            const { id: i, updatedAt: o, lastPartCreatedAt: s } = r;
            return (
              (e[i] &&
                "all" === e[i].fetchState &&
                !(function (e, t, n) {
                  var r, i;
                  const o = Re()(t, [e, "parts"]).filter(
                      (e) => !Object(Ke.c)(e)
                    ),
                    s = Re()(n, "parts");
                  return (
                    (null === (r = ke()(o)) || void 0 === r ? void 0 : r.id) !==
                    (null === (i = ke()(s)) || void 0 === i ? void 0 : i.id)
                  );
                })(i, e, r)) ||
                (e[i] && t.type === I.Wb && o <= e[i].updatedAt) ||
                (e[i] && t.type === I.Ob && s <= e[i].lastPartCreatedAt) ||
                (n[i] = (function (e = {}) {
                  const { ticket: t } = e,
                    n = Qe(
                      Qe({}, et(e, Ze)),
                      {},
                      {
                        fetchState: "summary",
                        isFetching: !1,
                        isUpdating: !1,
                        parts: e.parts.map((e) =>
                          Qe(Qe({}, e), {}, { saveState: "saved" })
                        ),
                      }
                    );
                  return t && (n.ticketId = t.id), n;
                })(r)),
              n
            );
          }, {});
          return Qe(Qe({}, e), r);
        }
        case I.he:
        case I.L:
        case I.Rb:
        case I.ce: {
          const { id: n } = t.conversation || {},
            r = { [n]: Je(e[n], t) };
          return tt({}, e, r);
        }
        case I.ge:
        case I.T:
        case I.U:
        case I.Qb:
        case I.H:
        case I.I:
        case I.G:
        case I.D:
        case I.ec:
        case I.k:
        case I.fe:
        case I.c:
        case I.ud:
        case I.td:
        case I.vd: {
          const n = t.conversationId;
          if (null == n) return e;
          const r = { [n]: Je(e[n], t) };
          return tt({}, e, r);
        }
        case I.f:
        case I.ve: {
          const n = t.conversationId;
          if (void 0 === e[n]) return e;
          const r = { [n]: Je(e[n], t) };
          return tt({}, e, r);
        }
        case I.re: {
          const n = t.conversationId;
          if (void 0 === n) return e;
          const r = { [n]: Je(e[n], t) };
          return tt({}, e, r);
        }
        case I.gb: {
          var r;
          const n =
            null == t || null === (r = t.conversationIds) || void 0 === r
              ? void 0
              : r.reduce((n, r) => ((n[r] = Je(e[r], t)), n), {});
          return tt({}, e, n);
        }
        case I.kb: {
          const n = t.conversationId;
          if (void 0 === e[n]) return e;
          const r = { [n]: Je(e[n], t) };
          return tt({}, e, r);
        }
        default:
          return e;
      }
    }
    function ot(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function st(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ot(Object(n), !0).forEach(function (t) {
              ct(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ot(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function ct(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const { assign: at } = Object,
      ut = {
        isFetching: !1,
        isUpdating: !1,
        fetchState: "all",
        read: !0,
        intercomLinkSolution: "live-chat",
        parts: [],
        participants: [],
        composerState: { visible: !0 },
        composerSuggestions: ze.b,
        botIntroId: null,
        articleUrl: null,
        fromArticleId: null,
        fromStandaloneArticle: null,
      };
    const lt = {};
    const dt = { suppress: {}, forceSnippet: {} };
    const { assign: pt } = Object,
      ft = { isSaving: !1, showErrorMessage: !1, errorMessage: null };
    const { assign: bt } = Object,
      ht = {
        isInstallModeOpen: !1,
        installModeConfig: {
          activeSubscription: !1,
          userHashVerified: !1,
          secureInstallV2: !1,
          messengerEnabledForVisitors: !0,
          messengerEnabledForUsers: !0,
        },
      };
    const { assign: gt } = Object,
      mt = { isFetching: !1, gifs: [], fetchingFailed: !1, searchTerm: null };
    var vt = n(9),
      yt = n.n(vt);
    const { assign: Ot } = Object,
      _t = {
        isLauncherDiscoveryModeEnabled: !1,
        isLauncherDiscoveryModeOpening: !1,
        isLauncherDiscoveryModeClosing: !1,
        hasDiscoveredLauncher: !1,
      };
    function wt(e) {
      const {
        app: {
          features: t,
          inboundConversationsDisabled: n,
          officeHoursResponse: r,
        },
        clientsideMessageConditions: i,
        clientsideRulesetConditions: o,
        role: s,
      } = e;
      return (
        !!t.launcherDiscoveryMode &&
        !n &&
        !(!yt()(i) || !yt()(o)) &&
        !!Ae()(r) &&
        "visitor" === s
      );
    }
    var jt = n(133),
      Ct = n.n(jt),
      St = n(95),
      Et = n.n(St),
      It = n(39),
      At = n.n(It),
      Pt = n(78);
    function kt(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Tt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? kt(Object(n), !0).forEach(function (t) {
              Rt(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : kt(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Rt(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const Mt = {};
    const xt = {
      isFetching: !1,
      isFetched: !1,
      isFailed: !1,
      matchedSlots: [],
      fetchedSlots: [],
      hasMoreConversations: !1,
      articleSuggestions: null,
      mixedSuggestions: null,
    };
    function Lt(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Dt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Lt(Object(n), !0).forEach(function (t) {
              Nt(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Lt(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Nt(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const Ut = {
      isOpen: !1,
      isSheetsDataLoading: !1,
      isSheetsDataLoaded: !1,
      isProxyLoaded: !1,
      isNavigating: !1,
      sourceCard: null,
      data: null,
      url: null,
      sheetTitle: "",
    };
    function zt(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Bt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? zt(Object(n), !0).forEach(function (t) {
              Vt(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : zt(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Vt(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const Ht = {
      composerHasContent: !1,
      lastComposerEvent: 0,
      lastArticleClosedAt: null,
      conversationIdOfLastViewedArticle: null,
      clientsideMessageConditions: null,
      clientsideRulesetConditions: null,
      lastTriggerTransitionTimestamp: null,
      userCreatedConversationAt: null,
    };
    function Ft(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function $t(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Ft(Object(n), !0).forEach(function (t) {
              Gt(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Ft(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Gt(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const Wt = { isShown: !1, alertType: void 0, alertPayload: void 0 };
    function qt(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Jt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? qt(Object(n), !0).forEach(function (t) {
              Kt(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : qt(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Kt(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const Zt = {};
    function Yt(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Qt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Yt(Object(n), !0).forEach(function (t) {
              Xt(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Yt(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Xt(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const en = {
      tabNavigation: !1,
      accessibilityTheme: "default",
      secondaryAccessibilityTheme: "light",
    };
    function tn(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function nn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? tn(Object(n), !0).forEach(function (t) {
              rn(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : tn(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function rn(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const on = {
      isFetching: !1,
      isFetched: !1,
      isPreviewing: !1,
      fetchingFailed: !1,
      activeTour: void 0,
      updateFailed: !1,
      videoAudioMuted: !0,
      userHasInteractedWithVideo: !1,
      endTourAnimation: "",
      isAwaitingProgress: !1,
    };
    function sn(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function cn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? sn(Object(n), !0).forEach(function (t) {
              an(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : sn(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function an(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const un = { triggers: {}, active: null, failed: !1 };
    var ln = n(107),
      dn = n.n(ln),
      pn = n(136),
      fn = n.n(pn);
    function bn(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function hn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? bn(Object(n), !0).forEach(function (t) {
              gn(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : bn(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function gn(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const mn = {
      allSuggestions: [],
      isDismissed: !1,
      serverSideSuggestions: null,
      previewSuggestions: null,
    };
    const vn = [];
    function yn(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function On(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? yn(Object(n), !0).forEach(function (t) {
              _n(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : yn(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function _n(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const wn = { content: null };
    function jn(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Cn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? jn(Object(n), !0).forEach(function (t) {
              Sn(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : jn(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Sn(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const En = { composerSuggestions: null };
    function In(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function An(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? In(Object(n), !0).forEach(function (t) {
              Pn(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : In(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Pn(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const kn = { isActive: !1 };
    function Tn(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Rn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Tn(Object(n), !0).forEach(function (t) {
              Mn(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Tn(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Mn(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const xn = { type: null, metadata: {} };
    function Ln(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Dn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Ln(Object(n), !0).forEach(function (t) {
              Nn(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Ln(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Nn(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const Un = {
      isOpen: !1,
      isFetching: !0,
      fetchedCollections: !1,
      fetchingFailed: !1,
      phrase: "",
      searchResults: [],
      selectedArticleCollectionId: null,
      showArticleCollection: !1,
      navigationStackCollectionIds: [],
      showSearchResults: !1,
      hasSearchResults: !1,
      routedToNewConversation: !1,
      immediateSearch: !1,
      hideResultsWithDelay: !1,
      closeTransitionEnded: !0,
      searchedPhrase: "",
      hasViewedAnArticle: !1,
      skipOpenAnimation: !1,
      isViewingArticle: !1,
      isSearchFocused: !1,
      isFetchingSearchResults: !1,
    };
    var zn = n(76);
    const Bn = [];
    function Vn(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Hn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Vn(Object(n), !0).forEach(function (t) {
              Fn(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Vn(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Fn(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function $n(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Gn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? $n(Object(n), !0).forEach(function (t) {
              Wn(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : $n(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Wn(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const qn = [];
    var Jn = n(179),
      Kn = n(114),
      Zn = n(24);
    function Yn(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Qn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Yn(Object(n), !0).forEach(function (t) {
              Xn(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Yn(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Xn(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const { assign: er } = Object;
    function tr(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function nr(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? tr(Object(n), !0).forEach(function (t) {
              rr(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : tr(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function rr(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const ir = { activeNewsItem: null, detailsFetchingStatus: Zn.a.notStarted },
      { assign: or } = Object;
    function sr(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function cr(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? sr(Object(n), !0).forEach(function (t) {
              ar(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : sr(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function ar(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const ur = {},
      { assign: lr } = Object;
    var dr = n(113),
      pr = n(134);
    function fr(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function br(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? fr(Object(n), !0).forEach(function (t) {
              hr(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : fr(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function hr(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const gr = { isBooted: !1, isTooltipPreview: !1 };
    var mr = n(171);
    function vr(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function yr(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? vr(Object(n), !0).forEach(function (t) {
              Or(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : vr(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Or(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const _r = [];
    function wr(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function jr(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? wr(Object(n), !0).forEach(function (t) {
              Cr(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : wr(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Cr(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const Sr = {
      currentlyResolvingTaskId: null,
      openChecklistProgressId: null,
    };
    var Er = n(178),
      Ir = n(60);
    const Ar = { connectionState: Ir.c },
      Pr = Object(V.createSlice)({
        name: "realtimeConnection",
        initialState: Ar,
        reducers: {
          setRealtimeConnectionStatus(e, t) {
            e.connectionState = t.payload;
          },
        },
      }),
      { setRealtimeConnectionStatus: kr } = Pr.actions;
    var Tr = Pr.reducer,
      Rr = Object(V.combineReducers)({
        app: function (e = W, t) {
          switch (t.type) {
            case I.Q: {
              const { cookieDomain: n } = t.customizationAttributes;
              return G({}, e, {
                bootFailed: !1,
                isBooting: !e.isBooted,
                cookieDomain: n,
              });
            }
            case I.R: {
              var n;
              const {
                  activeAdmins: r,
                  alignment: i,
                  backgroundImage: o,
                  boundWebEvents: s,
                  color: c,
                  customGoogleAnalyticsTrackerId: a,
                  expectedResponseDelay: u,
                  expectedResponseDelayTranslationKey: l,
                  features: d,
                  helpCenterSiteUrl: p,
                  horizontalPadding: f,
                  accessToTeammateEnabled: b,
                  isAudioEnabled: h,
                  isDeveloperWorkspace: g,
                  isErrorReportingDisabled: m,
                  isInstantBootEnabled: v,
                  isIntercomLinkEnabled: y,
                  isOverrideSamplingEnabled: O,
                  lastActiveAt: _,
                  launcherExpectedResponseDelayTranslationKey: w,
                  launcherLogoUrl: j,
                  logoUrl: C,
                  name: S,
                  officeHoursResponse: E,
                  originCookieDomain: I,
                  realtimeConfig: A,
                  secondaryColor: P,
                  selfServeSuggestionsMatch: k,
                  smsEnabled: T,
                  teamGreeting: R,
                  teamIntro: M,
                  temporaryExpectationsMessage: x,
                  upfrontEmailCollectionSetting: L,
                  useCacheFor: D,
                  userConversationAttachmentsEnabled: N,
                  userConversationGifsEnabled: U,
                  verticalPadding: z,
                  openConfig: B,
                  localizedExpectedResponseDelayShortText: V,
                  localizedExpectedResponseDelayLongText: H,
                } = t.user.app,
                $ =
                  null != D &&
                  -1 !== D.indexOf("inbound_conversations_disabled") &&
                  (e.isRehydrated || e.isBooted)
                    ? e.inboundConversationsDisabled
                    : t.user.app.inboundConversationsDisabled,
                W =
                  null === (n = e.features) || void 0 === n
                    ? void 0
                    : n.noRbBehaviorInPing;
              return G({}, e, {
                activeAdmins: W ? e.activeAdmins : r,
                alignment: i,
                backgroundImage: o,
                bootFailed: !1,
                boundWebEvents: s,
                color: c,
                customGoogleAnalyticsTrackerId: a,
                expectedResponseDelay: u,
                expectedResponseDelayTranslationKey: l,
                features: d,
                helpCenterSiteUrl: p,
                horizontalPadding: f,
                inboundConversationsDisabled: $,
                accessToTeammateEnabled: W ? e.accessToTeammateEnabled : b,
                isAudioEnabled: h,
                isBooted: !0,
                isBooting: !1,
                isDeveloperWorkspace: g,
                isErrorReportingDisabled: m,
                isInstantBootEnabled: v,
                isIntercomLinkEnabled: y,
                isOverrideSamplingEnabled: O,
                lastActiveAt: _,
                launcherExpectedResponseDelayTranslationKey: w,
                launcherLogoUrl: j,
                logoUrl: C,
                name: S,
                officeHoursResponse: E,
                originCookieDomain: I,
                realtimeConfig: A,
                secondaryColor: P,
                selfServeSuggestionsMatch: W ? e.selfServeSuggestionsMatch : k,
                smsEnabled: T,
                teamGreeting: R,
                teamIntro: M,
                temporaryExpectationsMessage: x,
                userConversationAttachmentsEnabled: N,
                userConversationGifsEnabled: U,
                verticalPadding: z,
                upfrontEmailCollection: F(
                  F({}, e.upfrontEmailCollection),
                  {},
                  { upfrontEmailCollectionSetting: L }
                ),
                openConfig: B,
                localizedExpectedResponseDelayShortText: V,
                localizedExpectedResponseDelayLongText: H,
              });
            }
            case I.P:
              return t.isIdentityVerificationError
                ? G({}, e, { bootFailed: !0, isBooting: !1, isBooted: !1 })
                : G({}, e, { bootFailed: e.isBooting });
            case I.kc:
              return G({}, e, { isWaitingForOpenContent: !0 });
            case I.ic:
            case I.jc:
              return G({}, e, { isWaitingForOpenContent: !1 });
            case I.vc:
              return G({}, e, {
                isMessengerOpen: !0,
                viewStack: Object(c.o)(e) ? ["home-screen"] : e.viewStack,
                hideLightweightAppMessenger: t.hideLightweightAppMessenger,
                hasTheMessengerBeenOpened: !0,
              });
            case I.u:
              return G({}, e, { isMessengerOpen: !1 });
            case I.Jd:
              return G(q(t.replaceCurrentView ? K(e) : e, "new-conversation"), {
                conversationId: null,
              });
            case I.Kd:
              return G(e, { conversationId: null });
            case I.Ed:
              return G(q(t.replaceCurrentView ? K(e) : e, "conversation"), {
                conversationId: t.conversationId,
              });
            case I.Fd:
              return t.resetNavigationHistory
                ? q(J(e), "conversations")
                : q(e, "conversations");
            case I.Pb:
              if (e.conversationId === t.conversationId) {
                let t = G(e, { conversationId: null });
                return (
                  "conversation" === t.viewStack.slice(-1)[0] && (t = K(t)),
                  Object(c.o)(t) && (t = G(t, { viewStack: ["home-screen"] })),
                  t
                );
              }
              return e;
            case I.Gd:
              return q(e, "empty-screen");
            case I.Id:
              return q(t.replaceCurrentView ? K(e) : e, "messenger-trigger");
            case I.Hd:
              return G(q(e, "home-screen"), { conversationId: null });
            case I.L:
              return "new-conversation" === Object(c.e)(e)
                ? G({}, q(K(e), "conversation"), {
                    conversationId: t.conversation.id,
                  })
                : e;
            case I.qc:
              return G({}, e, { conversationId: t.conversationId });
            case I.Wc:
              return G({}, e, t.state.app, {
                features: G({}, e.features, t.state.app.features),
                isRehydrated: !0,
              });
            case I.hc:
              return G(
                (function (e) {
                  return R()(e.viewStack.slice(-2), [
                    "browse-mode",
                    "conversation",
                  ])
                    ? q(J(e), "home-screen")
                    : K(e);
                })(e),
                { conversationId: null }
              );
            case I.Xd:
              return G({}, e, {
                upfrontEmailCollection: F(
                  F({}, e.upfrontEmailCollection),
                  {},
                  {
                    upfrontEmailCollectorShowing:
                      !e.upfrontEmailCollection.upfrontEmailCollectorShowing,
                  }
                ),
              });
            case I.ne:
              return G({}, e, {
                accessToTeammateEnabled: t.accessToTeammateEnabled,
                botTargetedConversations: t.botTargetedConversations,
                botAdmin: t.botAdmin,
                selfServeSuggestionsMatch: t.selfServeSuggestionsMatch,
                activeAdmins: t.activeAdmins,
              });
            case I.ue:
              return G({}, e, {
                upfrontEmailCollection: F(
                  F({}, e.upfrontEmailCollection),
                  {},
                  { upfrontEmailCollectionSubmitted: !0 }
                ),
              });
            default:
              return e;
          }
        },
        chrome: function (
          e = (function () {
            return {
              shouldExpand: ne(),
              expansionTransitionComplete: !1,
              spaceHeaders: {},
            };
          })(),
          t
        ) {
          switch (t.type) {
            case I.wd:
              return (
                Z.a.set(ee, JSON.stringify(t.shouldExpand)),
                te({}, e, { shouldExpand: t.shouldExpand })
              );
            case I.nb:
              return Q(Q({}, e), {}, { expansionTransitionComplete: !0 });
            case I.qe: {
              const { spaceId: n, isOverlay: r } = t;
              let { height: i } = t;
              return n
                ? (0 === i &&
                    e.spaceHeaders[n] &&
                    (i = e.spaceHeaders[n].height),
                  Q(
                    Q({}, e),
                    {},
                    {
                      spaceHeaders: Q(
                        Q({}, e.spaceHeaders),
                        {},
                        { [n]: { height: i, isOverlay: r } }
                      ),
                    }
                  ))
                : e;
            }
            default:
              return e;
          }
        },
        launcher: function (e = ie, t) {
          switch (t.type) {
            case I.Q: {
              const n =
                t.launcherEnabledOverride &&
                "not-present" !== t.launcherEnabledOverride
                  ? t.launcherEnabledOverride
                  : e.launcherEnabledOverride;
              return re({}, e, { launcherEnabledOverride: n });
            }
            case I.R: {
              const { isLauncherEnabled: n } = t.user.app;
              return re({}, e, { isLauncherEnabled: n });
            }
            case I.P:
              return t.isIdentityVerificationError
                ? re({}, e, { isLauncherEnabled: !1 })
                : e;
            case I.Wc:
              return re({}, e, t.state.launcher);
            default:
              return e;
          }
        },
        botIntro: function (e = de, t) {
          if (t.type === I.ee) {
            const n = t.botIntro;
            return n
              ? ue(
                  ue({}, e),
                  {},
                  { id: n.id, parts: n.parts, operator: n.operator }
                )
              : ue(ue({}, e), de);
          }
          return e;
        },
        user: function (e = se, t) {
          var n;
          switch (t.type) {
            case I.Q: {
              const {
                url: n,
                customAttributes: r,
                anonymousSessionDuration: i,
                activeCompanyId: o,
              } = t;
              return oe({}, e, {
                url: n,
                customAttributes: r,
                anonymousSessionDuration: i,
                activeCompanyId: o,
              });
            }
            case I.R: {
              var r;
              const {
                  id: n,
                  locale: i,
                  countryCode: o,
                  role: s,
                  name: c,
                  userSuppliedEmail: a,
                  unreadConversationIds: u,
                  unreadDismissedConversationIds: l,
                  notificationLinkConversationId: d,
                  phoneNumber: p,
                  articleConversationId: f,
                  cdasBreachingLimit: b,
                  lastContactedAt: h,
                  requiresCookieConsent: g,
                  resolutionBotBehaviorVersionId: m,
                  searchRequiredBeforeConversation: v,
                  preventMultipleInboundConversation: y,
                  testAssignments: O,
                  newsfeedId: _,
                  unreadNewsItemsCount: w,
                  lastUnreadNewsItemId: j,
                  newsfeedLastVisit: C,
                } = t.user,
                S =
                  (null == t || null === (r = t.user) || void 0 === r
                    ? void 0
                    : r.hasConversations) ||
                  ((null == u ? void 0 : u.length) || 0) > 0 ||
                  ((null == l ? void 0 : l.length) || 0) > 0,
                E = oe({}, e.testAssignments, O);
              return oe({}, e, {
                id: n,
                locale: i,
                countryCode: o,
                role: s,
                name: c,
                userSuppliedEmail: a,
                hasConversations: S,
                phoneNumber: p,
                articleConversationId: f,
                notificationLinkConversationId: d,
                cdasBreachingLimit: b,
                lastContactedAt: h,
                requiresCookieConsent: g,
                resolutionBotBehaviorVersionId: m,
                searchRequiredBeforeConversation: v,
                preventMultipleInboundConversation: y,
                testAssignments: E,
                newsfeedId: _,
                unreadNewsItemsCount: w,
                lastUnreadNewsItemId: j,
                newsfeedLastVisit: C,
              });
            }
            case I.K:
            case I.Be:
            case I.Rb:
              return oe({}, e, { hasConversations: !0 });
            case I.Ob: {
              const { conversations: n } = t.conversations || {},
                r = void 0 !== n && n.length > 0;
              return oe({}, e, { hasConversations: r });
            }
            case I.te: {
              const { userSuppliedEmail: n } = t;
              return oe({}, e, { userSuppliedEmail: n });
            }
            case I.le: {
              const { phoneNumber: n } = t;
              return oe({}, e, { phoneNumber: n });
            }
            case I.ye:
              return oe({}, e, { isPresent: !0 });
            case I.we:
              return oe({}, e, { isPresent: !1 });
            case I.Wc:
              return oe(
                {},
                e,
                null == t || null === (n = t.state) || void 0 === n
                  ? void 0
                  : n.user
              );
            case I.lc: {
              var i, o;
              const n = oe(
                {},
                e.testAssignments,
                null == t || null === (i = t.response) || void 0 === i
                  ? void 0
                  : i.testAssignments
              );
              return oe({}, e, {
                testAssignments: n,
                resolutionBotBehaviorVersionId:
                  null == t || null === (o = t.response) || void 0 === o
                    ? void 0
                    : o.resolutionBotBehaviorVersionId,
              });
            }
            case I.nc:
              return oe({}, e, {
                newsfeedLastVisit: t.newsfeedLastVisit,
                unreadNewsItemsCount: 0,
              });
            default:
              return e;
          }
        },
        session: function (e = null, t) {
          switch (t.type) {
            case I.Q: {
              const {
                appId: n,
                userId: r,
                email: i,
                userHash: o,
                anonymousId: s,
                anonymousSession: c,
                sessionId: a,
              } = t.session;
              return ce({}, e, {
                appId: n,
                userId: r,
                email: i,
                userHash: o,
                anonymousId: s,
                anonymousSession: c,
                sessionId: a,
              });
            }
            case I.R: {
              const {
                anonymousId: n,
                anonymousSession: r,
                activeCompanyId: i,
                newSession: o,
              } = t.user;
              return ce({}, e, {
                anonymousId: n || (null == e ? void 0 : e.anonymousId),
                anonymousSession:
                  r || (null == e ? void 0 : e.anonymousSession),
                activeCompanyId: i,
                newSession: o,
              });
            }
            case I.bb:
              return null;
            case I.g:
              return ce({}, e, { anonymousSession: t.anonymousSession });
            case I.te:
              return ce({}, e, { didUserSupplyEmail: !0 });
            default:
              return e;
          }
        },
        openOnBoot: function (e = xn, t) {
          var n;
          switch (t.type) {
            case I.u:
              return e.metadata.isViewingArticle ? e : xn;
            case I.hc:
            case I.Hd:
            case I.Zb:
            case I.m:
            case I.bb:
              return xn;
            case I.Ed:
              return {
                type: "conversation",
                metadata: { conversationId: t.conversationId },
              };
            case s.LOCATION_CHANGE: {
              var r, i;
              const n =
                null === (r = t.payload) ||
                void 0 === r ||
                null === (i = r.location) ||
                void 0 === i
                  ? void 0
                  : i.pathname;
              return n.startsWith("/messages/conversation/") ||
                n.startsWith("/tasks/checklists/")
                ? e
                : xn;
            }
            case I.L:
              return {
                type: "conversation",
                metadata: { conversationId: t.conversation.id },
              };
            case I.Jd:
              return { type: "new_conversation", metadata: {} };
            case I.xc:
              if ("article-link" === t.componentId) {
                const n = Rn({}, e);
                return {
                  type: "article",
                  metadata: {
                    url: t.url,
                    cardUri: t.cardUri,
                    componentId: t.componentId,
                    previousState: n,
                  },
                };
              }
              return e;
            case I.x:
              return null !== (n = e.metadata) &&
                void 0 !== n &&
                n.previousState
                ? Rn({}, e.metadata.previousState)
                : Rn({}, xn);
            case I.pc: {
              const { articleIds: n } = e.metadata;
              return t.fromBrowseMode
                ? {
                    type: "search_browse_article",
                    metadata: {
                      articleIds: n
                        ? [...n, t.articleId].filter(Boolean)
                        : [t.articleId].filter(Boolean),
                    },
                  }
                : Rn(
                    Rn({}, e),
                    {},
                    {
                      metadata: Rn(
                        Rn({}, e.metadata),
                        {},
                        {
                          articleIds: n
                            ? [...n, t.articleId].filter(Boolean)
                            : [t.articleId].filter(Boolean),
                          openArticleStandalone: !0,
                        }
                      ),
                    }
                  );
            }
            case I.p:
              return "search_browse_article" === e.type &&
                e.metadata.articleIds.length > 1
                ? {
                    type: "search_browse_article",
                    metadata: {
                      articleIds: e.metadata.articleIds.slice(
                        0,
                        e.metadata.articleIds.length - 1
                      ),
                    },
                  }
                : xn;
            case I.rc:
              return {
                type: "open_checklist",
                metadata: { checklistProgressId: t.checklistProgressId },
              };
            case I.q:
              return xn;
            case I.Wc:
              return Rn(Rn({}, e), t.state.openOnBoot);
            default:
              return e;
          }
        },
        operator: (e = Ht, t) => {
          switch (t.type) {
            case I.Jd:
            case I.Ed:
              return Bt(
                Bt({}, e),
                {},
                {
                  lastArticleClosedAt: null,
                  conversationIdOfLastViewedArticle: null,
                }
              );
            case I.B:
              return Bt(
                Bt({}, e),
                {},
                {
                  lastComposerEvent: t.lastActiveAt.getTime(),
                  composerHasContent: "" !== t.composerContent,
                }
              );
            case I.K:
              return Bt(
                Bt({}, e),
                {},
                { userCreatedConversationAt: t.timestamp }
              );
            case I.pc:
              return Bt(
                Bt({}, e),
                {},
                {
                  lastArticleClosedAt: null,
                  conversationIdOfLastViewedArticle: t.conversationId,
                }
              );
            case I.p:
              return Bt(Bt({}, e), {}, { lastArticleClosedAt: t.closedAt });
            case I.R:
            case I.te:
              return Bt(
                Bt({}, e),
                {},
                {
                  clientsideMessageConditions:
                    t.user.clientsideMessageConditions,
                  clientsideRulesetConditions:
                    t.user.clientsideRulesetConditions,
                }
              );
            case I.be:
              return Bt(
                Bt({}, e),
                {},
                { lastTriggerTransitionTimestamp: t.payload.timestamp }
              );
            case I.Wc:
              return Bt(Bt({}, e), t.state.operator);
            default:
              return e;
          }
        },
        message: function (e = pe, t) {
          switch (t.type) {
            case I.uc: {
              const { conversationId: e, partId: n } = t;
              return { conversationId: e, partId: n };
            }
            case I.t:
              return pe;
            default:
              return e;
          }
        },
        pointerMessage: function (e = fe, t) {
          switch (t.type) {
            case I.wc: {
              const { conversationId: e, partId: n } = t;
              return { conversationId: e, partId: n };
            }
            case I.v:
              return fe;
            default:
              return e;
          }
        },
        dismissedPointers: function (e = me, t) {
          return t.type === I.ib
            ? he(he({}, e), {}, { [t.conversationId]: !0 })
            : e;
        },
        article: function (e = _e, t) {
          switch (t.type) {
            case I.pc:
              return parseInt(e.activeArticleId || "") ===
                parseInt(t.articleId || "")
                ? e
                : ye(
                    ye({}, e),
                    {},
                    {
                      activeArticleId: t.articleId,
                      inSearchBrowse: t.fromBrowseMode,
                      fromHomeScreenSuggestions: t.fromHomeScreenSuggestions,
                      viewStack: [...(e.viewStack || []), t.articleId],
                      isLoaded: !1,
                      hash: t.hash,
                    }
                  );
            case I.j:
              var n, r;
              return (null == e ||
              null === (n = e.articleLocale) ||
              void 0 === n
                ? void 0
                : n.url) ===
                (null == t || null === (r = t.articleLocale) || void 0 === r
                  ? void 0
                  : r.url)
                ? e
                : ye(
                    ye({}, e),
                    {},
                    {
                      activeArticleId: t.articleId,
                      isLoaded: !1,
                      articleLocale: t.articleLocale,
                    }
                  );
            case I.p: {
              const { viewStack: t = [] } = e;
              return (
                t.pop(),
                t.length > 0
                  ? ye(
                      ye({}, e),
                      {},
                      {
                        activeArticleId: t[t.length - 1],
                        isLoaded: !1,
                        transitioningBack: !1,
                      }
                    )
                  : _e
              );
            }
            case I.id:
            case I.Kd:
              return _e;
            case I.i:
              return ye(ye({}, e), {}, { isLoaded: !0 });
            case I.h:
              return ye(ye({}, e), {}, { transitioningBack: !0 });
            case I.mb:
              return ye(ye({}, e), {}, { isStandalone: !0, isLoaded: !1 });
            case I.Jd:
              return _e;
            default:
              return e;
          }
        },
        articles: function (e = Se, t) {
          switch (t.type) {
            case I.Hc:
              return je(je({}, e), {}, { [t.article.id]: t.article });
            case I.E: {
              const { articleId: n, reactionIndex: r } = t;
              if (!e.hasOwnProperty(n)) return e;
              const i = e[n];
              return je(
                je({}, e),
                {},
                {
                  [n]: je(
                    je({}, i),
                    {},
                    {
                      reactionsReply: je(
                        je({}, i.reactionsReply),
                        {},
                        { reactionIndex: r }
                      ),
                    }
                  ),
                }
              );
            }
          }
          return e;
        },
        articleCollections: function (e = Ee, t) {
          if (t.type === I.Ic)
            if (t.articleCollections.length > 0) return t.articleCollections;
          return e;
        },
        conversations: function (e = nt, t) {
          switch (t.type) {
            case I.R:
            case I.te:
            case I.Yb:
              return tt({}, e, { byId: it(e.byId, t) });
            case I.Nb:
              return tt({}, e, { isFetching: !0 });
            case I.Ob: {
              var n;
              const { page: r, totalPages: i } =
                (null == t || null === (n = t.conversations) || void 0 === n
                  ? void 0
                  : n.pages) || {};
              return tt({}, e, {
                isFetching: !1,
                pagesFetched: r,
                totalPages: i,
                byId: it(e.byId, t),
              });
            }
            case I.Mb:
              return tt({}, e, { isFetching: !1 });
            case I.ge:
            case I.T:
            case I.S:
            case I.Qb:
            case I.Rb:
            case I.H:
            case I.I:
            case I.G:
            case I.D:
            case I.ec:
            case I.gb:
            case I.L:
            case I.f:
            case I.re:
            case I.k:
            case I.c:
            case I.he:
            case I.ve:
            case I.fe:
            case I.ce:
            case I.Ub:
            case I.Vb:
            case I.Wb:
            case I.ud:
            case I.B:
            case I.td:
            case I.vd:
              return tt({}, e, { byId: it(e.byId, t) });
            case I.C:
              return tt({}, e, { scrollPosition: t.scrollPosition });
            case I.kb:
              return tt({}, e, { byId: it(e.byId, t) });
            default:
              return e;
          }
        },
        newConversation: function (e = ut, t) {
          switch (t.type) {
            case I.Jd:
              return at({}, e, {
                defaultMessage: t.defaultMessage,
                articleUrl: t.articleUrl || null,
                fromArticleId: t.fromArticleId,
                fromStandaloneArticle: t.fromStandaloneArticle,
              });
            case I.hc:
              return at({}, e, { articleUrl: null });
            case I.K:
            case I.J:
              return at({}, e, { userParticipated: !0, parts: Ne(e.parts, t) });
            case I.yd:
              return at({}, e, { composerState: t.composerState });
            case I.L:
              return at({}, ut, { composerState: e.composerState });
            case I.re: {
              const { conversationId: n } = t;
              return void 0 !== n ? e : at({}, e, { parts: Ne(e.parts, t) });
            }
            case I.B:
            case I.td:
            case I.ud:
            case I.vd:
              return st(
                st({}, e),
                {},
                { composerSuggestions: Object(ze.a)(e.composerSuggestions, t) }
              );
            case I.Z:
              var n, r;
              return st(
                st({}, e),
                {},
                {
                  parts:
                    null == t || null === (n = t.botIntro) || void 0 === n
                      ? void 0
                      : n.parts.map((e, n) => {
                          var r;
                          return {
                            id: `bot-intro-${n}`,
                            author:
                              null == t ||
                              null === (r = t.botIntro) ||
                              void 0 === r
                                ? void 0
                                : r.operator,
                            createdAt: t.createdAt,
                            partType: "bot_intro",
                            body: e,
                            showCreatedAt: !0,
                          };
                        }),
                  botIntroId:
                    null == t || null === (r = t.botIntro) || void 0 === r
                      ? void 0
                      : r.id,
                }
              );
            case I.zc:
              return st(
                st({}, e),
                {},
                {
                  previewWorkflowInstanceId: t.workflowInstanceId,
                  previewResolutionBotBehaviorVersionId:
                    t.resolutionBotBehaviorVersionId,
                }
              );
            default:
              return e;
          }
        },
        borderless: function (e = lt, t) {
          switch (t.type) {
            case I.qc:
              return Object.assign({}, e, { conversationId: t.conversationId });
            case I.t:
              return lt;
            default:
              return e;
          }
        },
        notificationChannels: function (e = ft, t) {
          switch (t.type) {
            case I.se:
              return pt({}, e, { isSaving: !0 });
            case I.R:
            case I.te:
              return pt({}, e, { isSaving: !1 });
            case I.ke:
              return pt({}, e, {
                isSaving: !0,
                errorMessage: null,
                showErrorMessage: !1,
              });
            case I.le:
              return pt({}, e, { phoneNumber: t.phoneNumber, isSaving: !1 });
            case I.je:
              return pt({}, e, {
                errorMessage: t.message,
                isSaving: !1,
                showErrorMessage: !0,
              });
            case I.ac:
              return pt({}, e, { errorMessage: null, showErrorMessage: !1 });
            default:
              return e;
          }
        },
        notificationTypeOverrides: function (e = dt, t) {
          return t.type === I.ie
            ? Object.assign({}, e, {
                suppress: Object.assign({}, e.suppress, t.suppress),
                forceSnippet: Object.assign({}, e.forceSnippet, t.forceSnippet),
              })
            : e;
        },
        install: function (e = ht, t) {
          switch (t.type) {
            case I.sc: {
              const {
                activeSubscription: n,
                userHashVerified: r,
                secureInstallV2: i,
                messengerEnabledForVisitors: o,
                messengerEnabledForUsers: s,
              } = t;
              return bt({}, e, {
                isInstallModeOpen: !0,
                installModeConfig: {
                  activeSubscription: n,
                  userHashVerified: r,
                  secureInstallV2: i,
                  messengerEnabledForVisitors: o,
                  messengerEnabledForUsers: s,
                },
              });
            }
            case I.r:
              return bt({}, e, { isInstallModeOpen: !1 });
            default:
              return e;
          }
        },
        gifs: function (e = mt, t) {
          switch (t.type) {
            case I.nd: {
              const { searchTerm: n } = t;
              return gt({}, e, {
                isFetching: !0,
                fetchingFailed: !1,
                searchTerm: n,
              });
            }
            case I.od: {
              const { gifs: n, searchTerm: r } = t;
              return r !== e.searchTerm
                ? e
                : gt({}, e, {
                    isFetching: !1,
                    gifs: n,
                    fetchingFailed: !1,
                    searchTerm: r,
                  });
            }
            case I.md: {
              const { searchTerm: n } = t;
              return n !== e.searchTerm
                ? e
                : gt({}, e, {
                    isFetching: !1,
                    fetchingFailed: !0,
                    searchTerm: n,
                  });
            }
            default:
              return e;
          }
        },
        launcherDiscoveryMode: (e = _t, t) => {
          const { isLauncherDiscoveryModeEnabled: n } = e;
          switch (t.type) {
            case I.R: {
              const { user: n } = t;
              return Ot({}, e, { isLauncherDiscoveryModeEnabled: wt(n) });
            }
            case I.Nb:
              return Ot({}, e, {
                isLauncherDiscoveryModeEnabled: !1,
                hasDiscoveredLauncher: !0,
              });
            case I.vc:
              return Ot({}, e, {
                hasDiscoveredLauncher: !0,
                isLauncherDiscoveryModeEnabled: !1,
              });
            case I.tc:
              return Ot({}, e, {
                isLauncherDiscoveryModeOpening: n,
                hasDiscoveredLauncher: !0,
              });
            case I.s:
              return Ot({}, e, {
                isLauncherDiscoveryModeOpening: !1,
                isLauncherDiscoveryModeClosing: n,
              });
            case I.Jd:
            case I.oc:
              return Ot({}, e, {
                isLauncherDiscoveryModeClosing: !1,
                isLauncherDiscoveryModeOpening: !1,
              });
            case I.cb:
              return Ot({}, e, {
                isLauncherDiscoveryModeEnabled: !1,
                isLauncherDiscoveryModeClosing: !1,
              });
            case I.Wc: {
              const { launcherDiscoveryMode: n } = t.state;
              return Ot({}, e, n);
            }
            default:
              return e;
          }
        },
        messengerCards: (e = Mt, t) => {
          switch (t.type) {
            case I.Td: {
              const n = t.componentId,
                r = Tt({}, e);
              return (
                At()(r, `${t.cardUri}.isFetching`, !1),
                Et()(r, `${t.cardUri}.card.canvas.content.components`, (e) =>
                  Object(Pt.d)(n, e, !1)
                )
              );
            }
            case I.Vd: {
              const n = Tt({}, e);
              return (
                At()(n, `${t.card.uri}.isFetching`, !1),
                At()(n, `${t.card.uri}.isFetched`, !0),
                At()(n, `${t.card.uri}.partialCard`, t.card)
              );
            }
            case I.Ud: {
              const n = t.componentId,
                r = Tt({}, e);
              return (
                At()(r, `${t.cardUri}.isFetching`, !0),
                Et()(r, `${t.cardUri}.card.canvas.content.components`, (e) =>
                  Object(Pt.d)(n, e, !0)
                )
              );
            }
            case I.Jb: {
              const n = Tt({}, e);
              return At()(n, `${t.card.uri}.isContentFetching`, !0);
            }
            case I.Kb: {
              const n = Tt({}, e);
              At()(n, `${t.card.uri}.isFetching`, !1),
                At()(n, `${t.card.uri}.isFetched`, !0),
                At()(n, `${t.card.uri}.isContentFetched`, !0),
                At()(n, `${t.card.uri}.isContentError`, !1),
                At()(n, `${t.card.uri}.isContentFetching`, !1);
              const r = Ct()(t.card),
                i = Ct()(t.content);
              return (
                At()(n, `${t.card.uri}.card`, r),
                At()(n, `${t.card.uri}.card.canvas.content`, i),
                Et()(n, `${t.card.uri}.card`, Pt.e)
              );
            }
            case I.Ib: {
              const n = Tt({}, e);
              return (
                At()(n, `${t.card.uri}.isContentError`, !0),
                At()(n, `${t.card.uri}.isContentFetching`, !1),
                At()(n, `${t.card.uri}.partialCard`, t.card)
              );
            }
            default:
              return e;
          }
        },
        homeScreen: (e = xt, t) => {
          var n, r, i;
          switch (t.type) {
            case I.R:
              return Object.assign({}, e, {
                matchedSlots:
                  null == t || null === (n = t.user) || void 0 === n
                    ? void 0
                    : n.homeScreenSlots,
              });
            case I.Tb:
              return Object.assign({}, e, {
                isFetching: !0,
                isFetched: !1,
                isFailed: !1,
              });
            case I.Ub:
              return Object.assign({}, e, {
                isFetching: !1,
                isFetched: !0,
                isFailed: !1,
                fetchedSlots:
                  ((r = e.matchedSlots),
                  (i = t.cards),
                  r.map((e) => {
                    if ("messenger_app" !== e.slotType)
                      return Object.assign({}, e);
                    const t =
                      null == i
                        ? void 0
                        : i.find(
                            (t) => t.messengerCardId === e.messengerCardId
                          );
                    return Object.assign({}, e, {
                      uri: (null == t ? void 0 : t.uri) || null,
                    });
                  })),
                hasMoreConversations: t.hasMoreConversations,
              });
            case I.Lc:
              return Object.assign({}, e, {
                articleSuggestions: t.articleSuggestions,
              });
            case I.Mc:
              return Object.assign({}, e, {
                mixedSuggestions: t.mixedSuggestions,
              });
            case I.Sb:
              return Object.assign({}, e, {
                isFetching: !1,
                isFetched: !1,
                isFailed: !0,
                fetchedSlots: e.matchedSlots.filter(
                  (e) => "new_conversation_card" === e.slotType
                ),
                error: t.error,
              });
            default:
              return e;
          }
        },
        messengerSheet: (e = Ut, t) => {
          switch (t.type) {
            case I.Nd:
              return Dt(Dt({}, e), {}, { isNavigating: !0 });
            case I.Gb:
              return Dt(Dt({}, e), {}, { isNavigating: !1 });
            case I.Ad:
              return Dt(Dt({}, e), {}, { isProxyLoaded: t.isLoaded });
            case I.xc:
              return Dt(
                Dt({}, e),
                {},
                {
                  url: t.url,
                  isOpen: !0,
                  sourceCard: {
                    cardUri: t.cardUri,
                    componentId: t.componentId,
                  },
                }
              );
            case I.yc:
              return Dt(
                Dt({}, e),
                {},
                {
                  url: t.url,
                  isOpen: !0,
                  sourceCard: { token: t.token, componentId: t.componentId },
                }
              );
            case I.x:
              return Ut;
            case I.Bd:
              return Dt(Dt({}, e), {}, { sheetTitle: t.sheetTitle });
            case I.wb:
              return Dt(Dt({}, e), {}, { isSheetsDataLoading: !0 });
            case I.xb:
              return Dt(
                Dt({}, e),
                {},
                {
                  isSheetsDataLoading: !1,
                  isSheetsDataLoaded: !0,
                  data: t.data,
                }
              );
            case I.vb:
              return Dt(Dt({}, e), {}, { isSheetsDataLoading: !1 });
            default:
              return e;
          }
        },
        messengerAlerts: function (e = Wt, t) {
          switch (t.type) {
            case I.Dd:
              return $t(
                $t({}, e),
                {},
                {
                  isShown: !0,
                  alertType: t.payload.alertType,
                  alertPayload: t.payload.alertPayload,
                }
              );
            case I.o:
              return Wt;
            default:
              return e;
          }
        },
        customizationOverrides: function (e = Zt, t) {
          switch (t.type) {
            case I.M:
              return Jt(Jt({}, e), t.customizationAttributes);
            case I.F:
              return Jt(
                Jt(Jt({}, e), t.customizationAttributes),
                {},
                { isSetByBanner: !0 }
              );
            default:
              return e;
          }
        },
        accessibility: function (e = en, t) {
          switch (t.type) {
            case I.Cd:
              return Qt(Qt({}, e), {}, { tabNavigation: t.tabNavigation });
            case I.sd:
              return Qt(
                Qt({}, e),
                {},
                {
                  accessibilityTheme: t.accessibilityTheme,
                  secondaryAccessibilityTheme: t.secondaryAccessibilityTheme,
                }
              );
            default:
              return e;
          }
        },
        tour: (e = on, t) => {
          switch (t.type) {
            case I.Eb:
              return nn(
                nn({}, e),
                {},
                { isFetching: !0, isFetched: !1, fetchingFailed: !1 }
              );
            case I.Zd:
              return nn(nn({}, e), {}, { updateFailed: !0 });
            case I.Fb:
              return nn(
                nn({}, e),
                {},
                {
                  isFetching: !1,
                  isFetched: !0,
                  fetchingFailed: !1,
                  isPreviewing: t.isPreviewingTour,
                  activeTour: t.tour,
                }
              );
            case I.Db:
              return nn(
                nn({}, e),
                {},
                { isFetching: !1, isFetched: !1, fetchingFailed: !0 }
              );
            case I.Ac:
              return e.activeTour
                ? nn(
                    nn({}, e),
                    {},
                    {
                      activeTour: nn(
                        nn({}, e.activeTour),
                        {},
                        { activeStepId: t.activeStepId }
                      ),
                    }
                  )
                : nn({}, e);
            case I.Qd:
              return nn(
                nn({}, e),
                {},
                { isFetched: !0, isPreviewing: !0, activeTour: t.tour }
              );
            case I.Sd:
              return nn(
                nn({}, e),
                {},
                { isFetched: !1, isPreviewing: !1, activeTour: void 0 }
              );
            case I.A:
            case I.Zc:
            case I.Md:
            case I.Rd:
              return on;
            case I.cc:
              return e.activeTour
                ? nn(
                    nn({}, e),
                    {},
                    {
                      activeTour: nn(
                        nn({}, e.activeTour),
                        {},
                        { isCompleted: !0 }
                      ),
                    }
                  )
                : nn({}, e);
            case I.l:
              return nn(
                nn({}, e),
                {},
                { videoAudioMuted: t.muted, userHasInteractedWithVideo: !0 }
              );
            case I.Cc:
              return nn(nn({}, e), {}, { isAwaitingProgress: !0 });
            case I.Bc:
              return nn(nn({}, e), {}, { isAwaitingProgress: !1 });
            default:
              return e;
          }
        },
        triggers: function (e = un, t) {
          const n = cn({}, e.triggers);
          switch (t.type) {
            case I.e:
              return (
                (n[t.trigger.id] = t.trigger),
                cn(cn({}, e), {}, { triggers: n })
              );
            case I.Yc:
              return delete n[t.triggerId], cn(cn({}, e), {}, { triggers: n });
            case I.a:
              return cn(cn({}, e), {}, { active: t.triggerId, failed: !1 });
            case I.Y:
              return cn(cn({}, e), {}, { active: null });
            case I.b:
              return cn(cn({}, e), {}, { failed: !0 });
            default:
              return e;
          }
        },
        inboundSuggestions: function (e = mn, t) {
          switch (t.type) {
            case I.d:
              return hn(
                hn({}, e),
                {},
                { allSuggestions: [...e.allSuggestions, t.composerSuggestions] }
              );
            case I.Xc:
              return hn(
                hn({}, e),
                {},
                {
                  allSuggestions: fn()(
                    e.allSuggestions,
                    (e) => e.rulesetId !== t.rulesetId
                  ),
                }
              );
            case I.pe: {
              let n = e.allSuggestions;
              return (
                e.serverSideSuggestions &&
                  (n = fn()(
                    n,
                    (t) =>
                      e.serverSideSuggestions &&
                      t.rulesetId !== e.serverSideSuggestions.rulesetId
                  )),
                t.composerSuggestions &&
                  (n = dn()([...n, t.composerSuggestions], "rulesetId")),
                hn(
                  hn({}, e),
                  {},
                  {
                    allSuggestions: n,
                    serverSideSuggestions: t.composerSuggestions,
                  }
                )
              );
            }
            case I.me:
              return hn(
                hn({}, e),
                {},
                { previewSuggestions: t.composerSuggestions }
              );
            default:
              return e;
          }
        },
        banners: function (e = vn, t) {
          switch (t.type) {
            case I.Jc:
              if (t.banners) return t.banners;
              break;
            case I.Fc:
              if (t.bannerId && t.reaction)
                return e.map((e) =>
                  e.banner_id === t.bannerId
                    ? Object.assign({}, e, { selected_reaction: t.reaction })
                    : e
                );
          }
          return e;
        },
        composer: (e = wn, t) =>
          t.type === I.B
            ? On(On({}, e), {}, { content: t.composerContent })
            : e,
        predictiveAnswers: (e = En, t) =>
          t.type === I.zd
            ? Cn(
                Cn({}, e),
                {},
                { composerSuggestions: t.predictiveAnswersSuggestions }
              )
            : e,
        lightweightApp: (e = kn, t) =>
          t.type === I.xd ? An(An({}, e), {}, { isActive: t.isActive }) : e,
        browseMode: function (e = Un, t) {
          switch (t.type) {
            case I.Kd:
              return Dn(
                Dn({}, Un),
                {},
                {
                  isOpen: !0,
                  closeTransitionEnded: !1,
                  isFetching: e.isFetching,
                  hasViewedAnArticle: e.hasViewedAnArticle,
                  skipOpenAnimation: t.skipOpenAnimation,
                }
              );
            case I.Ld:
              return Dn(Dn({}, e), {}, { isOpen: !0 });
            case I.w:
              return Dn(Dn({}, e), {}, { isOpen: !1 });
            case I.id:
              return Dn(Dn({}, e), {}, { closeTransitionEnded: !0 });
            case I.jd:
              return e.navigationStackCollectionIds.length > 0 &&
                !e.showSearchResults &&
                !e.hasSearchResults
                ? Dn(
                    Dn({}, e),
                    {},
                    {
                      phrase: "",
                      searchResults: [],
                      showSearchResults: !1,
                      hasSearchResults: !1,
                      showArticleCollection: !1,
                      navigationStackCollectionIds:
                        e.navigationStackCollectionIds.slice(0, -1),
                    }
                  )
                : Dn(
                    Dn({}, Un),
                    {},
                    {
                      closeTransitionEnded: !1,
                      isFetching: e.isFetching,
                      hasViewedAnArticle: e.hasViewedAnArticle,
                      fetchedCollections: e.fetchedCollections,
                    }
                  );
            case I.hd:
              return Dn(
                Dn({}, e),
                {},
                {
                  isOpen: !1,
                  searchedPhrase: "",
                  phrase: "",
                  hasSearchResults: !1,
                  showSearchResults: !1,
                  searchResults: [],
                  showArticleCollection: !1,
                }
              );
            case I.kd:
              return e.showSearchResults || e.hasSearchResults
                ? Dn(Dn({}, e), {}, { closeTransitionEnded: !0 })
                : Dn(Dn({}, e), {}, { selectedArticleCollectionId: null });
            case I.ld: {
              const { value: n } = t;
              return Dn(Dn({}, e), {}, { isSearchFocused: n });
            }
            case I.Jd:
              return e.isOpen
                ? Dn(Dn({}, e), {}, { isOpen: !1, routedToNewConversation: !0 })
                : Dn(Dn({}, e), {}, { routedToNewConversation: !1 });
            case I.oe: {
              const { phrase: n, hideResultsWithDelay: r } = t,
                i =
                  e.hasSearchResults &&
                  0 === (null == n ? void 0 : n.trim().length);
              return Dn(
                Dn({}, e),
                {},
                {
                  phrase: n,
                  hideResultsWithDelay: r,
                  showSearchResults: !i && e.showSearchResults,
                  hasSearchResults: !i && e.hasSearchResults,
                }
              );
            }
            case I.fd: {
              const n = e.immediateSearch || t.immediate;
              return Dn(
                Dn({}, e),
                {},
                { immediateSearch: n, isFetchingSearchResults: !0 }
              );
            }
            case I.gd: {
              const { searchResults: n, phrase: r } = t,
                i = Dn(Dn({}, e), {}, { isFetchingSearchResults: !1 });
              return r !== i.phrase
                ? i
                : Dn(
                    Dn({}, i),
                    {},
                    {
                      fetchingFailed: !1,
                      hasSearchResults: !0,
                      showSearchResults: e.immediateSearch,
                      searchResults: n,
                      immediateSearch: !1,
                      searchedPhrase: r,
                    }
                  );
            }
            case I.ed: {
              const { phrase: n } = t,
                r = Dn(Dn({}, e), {}, { isFetchingSearchResults: !1 });
              return n !== r.phrase
                ? r
                : Dn(
                    Dn({}, r),
                    {},
                    { isFetching: !1, fetchingFailed: !0, immediateSearch: !1 }
                  );
            }
            case I.qd:
              return Dn(
                Dn({}, e),
                {},
                {
                  selectedArticleCollectionId: t.collectionId,
                  showArticleCollection: !0,
                  navigationStackCollectionIds: [
                    ...e.navigationStackCollectionIds,
                    t.collectionId,
                  ],
                }
              );
            case I.Ic:
              var n;
              return 1 ===
                (null == t ||
                null === (n = t.articleCollections) ||
                void 0 === n
                  ? void 0
                  : n.length)
                ? Dn(
                    Dn({}, e),
                    {},
                    {
                      selectedArticleCollectionId: t.articleCollections[0].id,
                      stackMultilevelCollections: [t.articleCollections[0].id],
                      showArticleCollection: !0,
                      navigationStackCollectionIds: [
                        t.articleCollections[0].id,
                      ],
                      fetchedCollections: !0,
                      isFetching: !1,
                    }
                  )
                : Dn(Dn({}, e), {}, { fetchedCollections: !0, isFetching: !1 });
            case I.i:
              return Dn(Dn({}, e), {}, { isViewingArticle: !0 });
            case I.p:
              return e.isOpen
                ? Dn(
                    Dn({}, e),
                    {},
                    { hasViewedAnArticle: !0, isViewingArticle: !1 }
                  )
                : e;
            case I.hc:
              return Dn(
                Dn({}, Un),
                {},
                {
                  isFetching: e.isFetching,
                  hasViewedAnArticle: e.hasViewedAnArticle,
                }
              );
            case I.vc:
              if (e.isViewingArticle && e.isOpen)
                return Dn(Dn({}, e), {}, { skipOpenAnimation: !0 });
              if (!e.skipOpenAnimation)
                return Dn(Dn({}, Un), {}, { isFetching: e.isFetching });
              break;
            case I.u:
              return e.isOpen
                ? e
                : Dn(Dn({}, e), {}, { skipOpenAnimation: !1 });
          }
          return e;
        },
        openInboundConversationIds: function (e = Bn, t) {
          switch (t.type) {
            case I.Ub:
              return (null == t ? void 0 : t.openInboundConversationIds) || [];
            case zn.c.type:
              if (!t.payload.cards) return [];
              const n = t.payload.cards.find(
                (e) => "new_conversation" === e.type
              );
              return (
                (n &&
                  n.prevent_multiple_inbound_conversations_enabled &&
                  (null == n ? void 0 : n.open_inbound_conversation_ids)) ||
                []
              );
            case I.L:
            case I.Rb:
              const { conversation: r } = t;
              return r.isInbound
                ? "state_closed" === r.state
                  ? e.filter((e) => e !== r.id)
                  : -1 === e.indexOf(r.id)
                  ? [...e, r.id]
                  : e
                : e;
            case I.G:
              const { conversationId: i, reason: o } = t;
              if (Object(E.q)(o)) return e.filter((e) => e !== i);
            default:
              return e;
          }
        },
        survey: function (e = null, t) {
          switch (t.type) {
            case I.Nc:
              return t.survey
                ? Hn(Hn({}, t.survey), {}, { isSubmitting: !1 })
                : e;
            case I.Oc:
              var n;
              return t.surveyId !== (null == e ? void 0 : e.id)
                ? e
                : Hn(
                    Hn({}, e),
                    {},
                    {
                      steps: [
                        ...((null == e ? void 0 : e.steps) || []),
                        t.surveyStep,
                      ],
                      activeStepId:
                        null == t || null === (n = t.surveyStep) || void 0 === n
                          ? void 0
                          : n.id,
                      completed: t.completed,
                    }
                  );
            case I.Od:
              return t.surveyId !== (null == e ? void 0 : e.id)
                ? e
                : Hn(Hn({}, e), {}, { isSubmitting: !0 });
            case I.Hb:
              return t.surveyId !== (null == e ? void 0 : e.id)
                ? e
                : Hn(Hn({}, e), {}, { isSubmitting: !1 });
            case I.Uc:
              var r;
              return Hn(
                Hn({}, e),
                {},
                {
                  steps:
                    null == e || null === (r = e.steps) || void 0 === r
                      ? void 0
                      : r.map((e) =>
                          Hn(
                            Hn({}, e),
                            {},
                            {
                              questions: e.questions.map((e) =>
                                e.id !== t.questionId
                                  ? Hn({}, e)
                                  : Hn(Hn({}, e), {}, { response: t.response })
                              ),
                            }
                          )
                        ),
                }
              );
            case I.Vc:
              var i;
              return Hn(
                Hn({}, e),
                {},
                {
                  steps:
                    null == e || null === (i = e.steps) || void 0 === i
                      ? void 0
                      : i.map((e) =>
                          e.id !== t.stepId
                            ? Hn({}, e)
                            : Hn(
                                Hn({}, e),
                                {},
                                {
                                  questions: e.questions.map((e) =>
                                    Hn(
                                      Hn({}, e),
                                      {},
                                      {
                                        validationError:
                                          (null == t
                                            ? void 0
                                            : t.validationResult)[e.id] || null,
                                      }
                                    )
                                  ),
                                }
                              )
                        ),
                }
              );
            case I.Sc:
              return Hn(
                Hn({}, e),
                {},
                {
                  firstFailedValidationQuestion:
                    null == t ? void 0 : t.questionId,
                }
              );
            case I.n:
              var o;
              return Hn(
                Hn({}, e),
                {},
                {
                  steps:
                    null == e || null === (o = e.steps) || void 0 === o
                      ? void 0
                      : o.map((e) =>
                          Hn(
                            Hn({}, e),
                            {},
                            {
                              questions: e.questions.map((e) =>
                                e.id !== t.questionId
                                  ? Hn({}, e)
                                  : Hn(Hn({}, e), {}, { validationError: null })
                              ),
                            }
                          )
                        ),
                }
              );
            case I.jb:
              return t.surveyId && (null == e ? void 0 : e.id) === t.surveyId
                ? Hn(Hn({}, e), {}, { dismissed: !0 })
                : e;
            case I.z:
              return e ? Hn(Hn({}, e), {}, { completed: !0 }) : e;
            case I.vc:
              return e ? Hn(Hn({}, e), {}, { hidden: !0 }) : e;
            case I.u:
              return e && e.hidden ? Hn(Hn({}, e), {}, { hidden: !1 }) : e;
            default:
              return e;
          }
        },
        tooltipGroups: function (e = qn, t) {
          switch (t.type) {
            case I.Rc:
              if (t.tooltipGroups) {
                const n = e.map((e) => e.id),
                  r = [];
                return (
                  t.tooltipGroups.map((e) => {
                    -1 === n.indexOf(e.id) &&
                      r.push(
                        Gn(
                          Gn({}, e),
                          {},
                          {
                            tooltips: e.tooltips.map((t) =>
                              Gn(
                                Gn({}, t),
                                {},
                                { displayBehavior: e.displayBehavior }
                              )
                            ),
                          }
                        )
                      );
                  }),
                  [...e, ...r]
                );
              }
              return e;
            case I.Wd:
              return e.map((e) =>
                Gn(
                  Gn({}, e),
                  {},
                  {
                    tooltips: e.tooltips.map((e) =>
                      Gn(
                        Gn({}, e),
                        {},
                        { isOpen: e.id === t.tooltipId && !e.isOpen }
                      )
                    ),
                  }
                )
              );
            case I.Yd:
              return e.map((e) =>
                Gn(
                  Gn({}, e),
                  {},
                  {
                    tooltips: e.tooltips.map((e) =>
                      Gn(
                        Gn({}, e),
                        {},
                        { isViewed: e.isViewed || e.id === t.tooltipId }
                      )
                    ),
                  }
                )
              );
            case I.gc:
              return e.map((e) =>
                Gn(
                  Gn({}, e),
                  {},
                  {
                    tooltips: e.tooltips.map((e) => {
                      var n, r;
                      let { isMatched: i } = e;
                      return (
                        null != t &&
                        null !== (n = t.matches) &&
                        void 0 !== n &&
                        -1 !== n.matched.indexOf(e.id)
                          ? (i = !0)
                          : null != t &&
                            null !== (r = t.matches) &&
                            void 0 !== r &&
                            -1 !== r.unmatched.indexOf(e.id) &&
                            (i = !1),
                        Gn(Gn({}, e), {}, { isMatched: i })
                      );
                    }),
                  }
                )
              );
            case I.Pd:
              if (t.tooltipGroup) {
                return [
                  ...e.filter((e) => {
                    var n;
                    return (
                      Number(e.id) !==
                      Number(
                        null === (n = t.tooltipGroup) || void 0 === n
                          ? void 0
                          : n.id
                      )
                    );
                  }),
                  t.tooltipGroup,
                ];
              }
              return e;
            default:
              return e;
          }
        },
        tickets: Jn.a,
        ticketTypes: Kn.a,
        newsItems: function (e = null, t) {
          var n, r;
          switch (t.type) {
            case I.pb:
              return er({}, e, {
                data: [],
                nextPage: null,
                fetchingStatus: Zn.a.inProgress,
              });
            case I.Bb:
              return er({}, e, {
                nextPage: null,
                fetchingStatus: Zn.a.inProgress,
              });
            case I.qb:
              return er({}, e, {
                data: t.newsItems || [],
                nextPage: t.nextPage,
                fetchingStatus: Zn.a.success,
                newsfeedVisited: !1,
              });
            case I.Cb:
              return er({}, e, {
                data: dn()(
                  [
                    ...((null == e ? void 0 : e.data) || []),
                    ...(t.newsItems || []),
                  ],
                  "id"
                ),
                nextPage: t.nextPage,
                fetchingStatus: Zn.a.success,
              });
            case I.ob:
              return { data: null, fetchingStatus: Zn.a.failure };
            case I.nc:
              return er({}, e, { newsfeedVisited: !0 });
            case I.Ab:
              return er({}, e, {
                data:
                  null == e || null === (n = e.data) || void 0 === n
                    ? void 0
                    : n.map((e) => {
                        var n;
                        return (null === (n = t.newsItem) || void 0 === n
                          ? void 0
                          : n.id) === e.id
                          ? t.newsItem
                          : e;
                      }),
              });
            case I.Gc:
              return er({}, e, {
                data:
                  null == e || null === (r = e.data) || void 0 === r
                    ? void 0
                    : r.map((e) =>
                        t.newsItemId === e.id
                          ? Qn(
                              Qn({}, e),
                              {},
                              {
                                reactionsReply: Qn(
                                  Qn({}, e.reactionsReply),
                                  {},
                                  { reactionIndex: t.reactionIndex }
                                ),
                              }
                            )
                          : e
                      ),
              });
            case I.mc: {
              const { newsfeedId: n } = t,
                r = n !== (null == e ? void 0 : e.newsfeedId);
              return er({}, e, {
                newsfeedId: n,
                data: r ? null : null == e ? void 0 : e.data,
              });
            }
            default:
              return e;
          }
        },
        newsItem: function (e = ir, t) {
          var n;
          switch (t.type) {
            case I.rd:
              return nr(nr({}, e), {}, { activeNewsItem: t.newsItem });
            case I.zb:
              return nr(
                nr({}, e),
                {},
                { detailsFetchingStatus: Zn.a.inProgress }
              );
            case I.Ab:
              return t.newsItem
                ? {
                    activeNewsItem: t.newsItem,
                    detailsFetchingStatus: Zn.a.success,
                  }
                : { activeNewsItem: null, detailsFetchingStatus: Zn.a.failure };
            case I.Gc:
              if (
                (null === (n = e.activeNewsItem) || void 0 === n
                  ? void 0
                  : n.id) === t.newsItemId
              )
                return nr(
                  nr({}, e),
                  {},
                  {
                    activeNewsItem: nr(
                      nr({}, e.activeNewsItem),
                      {},
                      {
                        reactionsReply: nr(
                          nr({}, e.activeNewsItem.reactionsReply),
                          {},
                          { reactionIndex: t.reactionIndex }
                        ),
                      }
                    ),
                  }
                );
          }
          return e;
        },
        answers: function (e = ur, t) {
          var n, r, i;
          switch (t.type) {
            case I.sb:
              return lr({}, e, {
                fetchingStatus: Zn.a.inProgress,
                activeAnswer: e.activeAnswer,
              });
            case I.rb:
              return lr({}, e, {
                fetchingStatus: Zn.a.failure,
                activeAnswer: e.activeAnswer,
              });
            case I.tb:
              return lr({}, e, {
                fetchingStatus: Zn.a.success,
                activeAnswer: t.answer,
              });
            case I.pd:
              return Object.assign({}, e, {
                fetchingStatus:
                  (null === (n = e.activeAnswer) || void 0 === n
                    ? void 0
                    : n.id) ===
                  (null === (r = t.answer) || void 0 === r ? void 0 : r.id)
                    ? e.fetchingStatus
                    : void 0,
                activeAnswer: t.answer,
              });
            case I.Ec:
              var o;
              return (null === (i = e.activeAnswer) || void 0 === i
                ? void 0
                : i.id) === t.answerId
                ? cr(
                    cr({}, e),
                    {},
                    {
                      activeAnswer: cr(
                        cr({}, e.activeAnswer),
                        {},
                        {
                          reactionsReply: cr(
                            cr(
                              {},
                              null === (o = e.activeAnswer) || void 0 === o
                                ? void 0
                                : o.reactionsReply
                            ),
                            {},
                            { reactionIndex: t.reactionIndex }
                          ),
                        }
                      ),
                    }
                  )
                : e;
            default:
              return e;
          }
        },
        spaces: pr.a,
        home: zn.a,
        help: dr.a,
        intersection: function (e = gr, t) {
          switch (t.type) {
            case I.bc:
              return br(br({}, e), {}, { isBooted: !0 });
            case I.Pd:
              return br(br({}, e), {}, { isTooltipPreview: !0 });
            case I.lb:
              return br(br({}, e), {}, { isTooltipPreview: !1 });
            default:
              return e;
          }
        },
        router: mr.c,
        checklists: function (e = _r, t) {
          switch (t.type) {
            case I.Kc:
              return t.checklists;
            case I.eb: {
              const { checklistProgressId: n } = t,
                r = e.findIndex((e) => e.checklistProgressId === n);
              if (r > -1) {
                return [
                  ...e.slice(0, r),
                  yr(yr({}, e[r]), {}, { dismissed: !0 }),
                  ...e.slice(r + 1),
                ];
              }
              return e;
            }
            case I.de: {
              const { checklistProgressId: n } = t,
                r = e.findIndex((e) => e.checklistProgressId === n);
              if (r > -1) {
                return [
                  ...e.slice(0, r),
                  yr(yr({}, e[r]), {}, { hasUpdatedNotificationDetails: !0 }),
                  ...e.slice(r + 1),
                ];
              }
              return e;
            }
            case I.ad: {
              var n, r;
              const { checklistProgressId: i, taskId: o } = t,
                s = e.findIndex((e) => e.checklistProgressId === i),
                c =
                  null === (n = e[s]) || void 0 === n
                    ? void 0
                    : n.taskGroups.findIndex((e) =>
                        e.tasks.find((e) => e.id === o)
                      ),
                a =
                  null === (r = e[s]) || void 0 === r
                    ? void 0
                    : r.taskGroups[c].tasks.findIndex((e) => e.id === o);
              if ((s || c || a) < 0) return e;
              const u = e[s].taskGroups,
                l = yr(
                  yr({}, u[c]),
                  {},
                  {
                    tasks: [
                      ...u[c].tasks.slice(0, a),
                      yr(yr({}, u[c].tasks[a]), {}, { isComplete: !0 }),
                      ...u[c].tasks.slice(a + 1),
                    ],
                  }
                );
              return [
                ...e.slice(0, s),
                yr(
                  yr({}, e[s]),
                  {},
                  { taskGroups: [...u.slice(0, c), l, ...u.slice(c + 1)] }
                ),
                ...e.slice(s + 1),
              ];
            }
            case I.Dc: {
              const { checklistProgressId: n, taskId: r } = t;
              return e.map(
                (e) => (
                  e.checklistProgressId === n
                    ? (e.queuedTaskId = r)
                    : (e.queuedTaskId = void 0),
                  e
                )
              );
            }
            case I.ab:
              return e.map((e) => ((e.queuedTaskId = void 0), e));
            default:
              return e;
          }
        },
        checklist: function (e = Sr, t) {
          switch (t.type) {
            case I.cd:
              return jr(jr({}, e), {}, { currentlyResolvingTaskId: t.taskId });
            case I.bd:
              return jr(jr({}, e), {}, { currentlyResolvingTaskId: null });
            case I.rc:
              return jr(
                jr({}, e),
                {},
                { openChecklistProgressId: t.checklistProgressId }
              );
            case I.q:
              return jr(jr({}, e), {}, { openChecklistProgressId: null });
            default:
              return e;
          }
        },
        tasks: Er.a,
        realtimeConnection: Tr,
      });
    function Mr(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function xr(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Mr(Object(n), !0).forEach(function (t) {
              Lr(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Mr(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Lr(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const Dr = /^(UA|YT|MO)-\d+-\d+$/i,
      Nr = /^G-[0-9A-Z]{10}$/,
      Ur = [I.vc, I.u, I.L, I.I, I.te, I.Vd, I.Tc, I.ec, I.ue];
    function zr(e, t, n) {
      switch (e.type) {
        case I.vc:
          return { name: "Opened Messenger" };
        case I.u:
          return { name: "Closed Messenger" };
        case I.L:
          return { name: "Started New Conversation" };
        case I.I: {
          const n = t.byId[e.conversationId],
            { customBotId: r, messageId: i } = Vr(n),
            o = xr({}, r ? { "Custom Bot ID": r || i } : { "Message ID": i });
          return { name: "Sent a Reply", metadata: i || r ? o : void 0 };
        }
        case I.ue:
        case I.te:
          return { name: "Provided Email Address" };
        case I.Vd:
          return {
            name: e.card.completed
              ? "Completed App Flow"
              : "Interacted with App",
            metadata: { "App Name": e.card.app_package_name, Location: Fr(n) },
          };
        case I.Tc: {
          const n = t.byId[e.conversationId],
            { customBotId: r, messageId: i } = Hr(n, e.partId);
          return i
            ? {
                name: "Triggered Message",
                metadata: xr(
                  {},
                  r ? { "Custom Bot ID": r || i } : { "Message ID": i }
                ),
                nonInteraction: !0,
              }
            : void 0;
        }
        case I.ec: {
          if (t.byId[e.conversationId].read) return;
          const n = t.byId[e.conversationId],
            { customBotId: r, messageId: i } = Vr(n);
          return {
            name: "Viewed Message",
            metadata: xr(
              {},
              r ? { "Custom Bot ID": r || i } : { "Message ID": i }
            ),
            nonInteraction: !0,
          };
        }
      }
    }
    const Br = (e) =>
        Object.entries(e).reduce((e, [t, n]) => {
          if (n) return e ? e + `, ${t}: ${n}` : `${t}: '${n}'`;
        }, null),
      Vr = (e) => {
        var t;
        const { parts: n } = e,
          r = n[0],
          i = r && r.rulesetId;
        return {
          customBotId:
            null === (t = e.analyticsMetadata) || void 0 === t
              ? void 0
              : t.customBotId,
          messageId: i,
        };
      },
      Hr = (e, t) => {
        const n = t && -1 !== t.indexOf("message-"),
          { customBotId: r, messageId: i } = Vr(e);
        return xr({ customBotId: r }, n ? { messageId: i } : {});
      },
      Fr = (e) =>
        e.length > 0
          ? { "home-screen": "Home", conversation: "Conversation" }[
              e[e.length - 1]
            ]
          : "Conversation";
    var $r = n(22);
    function Gr(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Wr(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Gr(Object(n), !0).forEach(function (t) {
              qr(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Gr(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function qr(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function Jr(e) {
      const t = {};
      return (
        Object.keys(e).forEach(function (n) {
          if (!e[n]) return;
          const r = n.toLowerCase().replace(/ /g, "_");
          t[r] = e[n];
        }),
        t
      );
    }
    function Kr(e, t, n, r, i) {
      const o = n
          ? (
              (e, t) =>
              ({ name: n, metadata: r = {}, nonInteraction: i = !1 } = {}) => {
                try {
                  e(
                    "event",
                    n,
                    Wr(
                      Wr(
                        Wr(
                          {
                            eventCategory: "Intercom Messenger",
                            eventLabel: Br(r),
                          },
                          Jr(r)
                        ),
                        i ? { nonInteraction: i } : {}
                      ),
                      t ? { send_to: t } : {}
                    )
                  );
                } catch (e) {
                  Object($r.b)(
                    "Intercom - Something went wrong sending the Google Analytics event via gtag",
                    e
                  );
                }
              }
            )(n, r)
          : (
              (e, t) =>
              ({ name: n, metadata: r = {}, nonInteraction: i = !1 } = {}) => {
                try {
                  e.push(
                    Wr(
                      Wr(
                        Wr(
                          {
                            event: n,
                            eventCategory: "Intercom Messenger",
                            eventLabel: Br(r),
                          },
                          Jr(r)
                        ),
                        i ? { nonInteraction: i } : {}
                      ),
                      t ? { send_to: t } : {}
                    )
                  );
                } catch (e) {
                  Object($r.b)(
                    "Intercom - Something went wrong pushing the Google Analytics event to GTM",
                    e
                  );
                }
              }
            )(i, r),
        s = zr(e, t.conversations, t.app.viewStack);
      s && o(s);
    }
    var Zr = n(350),
      Yr = n.n(Zr),
      Qr = n(35),
      Xr = n.n(Qr);
    function ei(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function ti(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const ni = (e) => {
        if (
          !(() => {
            var e, t;
            const n =
              null === (e = window) ||
              void 0 === e ||
              null === (t = e.parent) ||
              void 0 === t
                ? void 0
                : t.ga;
            return (
              "function" == typeof n &&
              "function" == typeof (null == n ? void 0 : n.getAll) &&
              (null == n ? void 0 : n.loaded)
            );
          })()
        )
          return;
        const t = window.parent.ga.getAll();
        if (Xr()(t) && t.length) {
          if (e) {
            const n = ri(t, e);
            return (
              n ||
              (window.parent.ga("create", e, "auto", "intercomMessenger"),
              ri(window.parent.ga.getAll(), e))
            );
          }
          return t[0];
        }
      },
      ri = (e, t) =>
        Yr()(e, function (e) {
          try {
            return e.b.data.values[":trackingId"] === t;
          } catch (n) {
            if ("function" == typeof e.get) return t === e.get("trackingId");
          }
        }),
      ii =
        (e) =>
        ({ name: t, metadata: n = {}, nonInteraction: r = !1 } = {}) => {
          try {
            e.send(
              "event",
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? ei(Object(n), !0).forEach(function (t) {
                        ti(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : ei(Object(n)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              })(
                {
                  eventCategory: "Intercom Messenger",
                  eventAction: t,
                  eventLabel: Br(n),
                },
                r ? { nonInteraction: r } : {}
              )
            );
          } catch (e) {
            Object($r.b)(
              "Intercom - Something went wrong sending the Google Analytics event",
              e
            );
          }
        };
    var oi = (e) => (t) => (n) => {
        const r = e.getState(),
          i = t(n);
        if (-1 === Ur.indexOf(n.type) || !r.app.features.googleAnalytics)
          return i;
        const o = r.app.customGoogleAnalyticsTrackerId;
        let s, c, a;
        var u, l, d;
        return (
          (((u = o) && u.match(Dr)) || !o) &&
            ((s = ni(o)),
            s &&
              (function (e, t, n) {
                const r = ii(n),
                  i = zr(e, t.conversations, t.app.viewStack);
                i && r(i);
              })(n, r, s)),
          (!(function (e) {
            return e && e.match(Nr);
          })(o) &&
            o) ||
            !r.app.features.googleAnalytics4Integration ||
            ((c = (function () {
              var e, t;
              const n =
                null === (e = window) ||
                void 0 === e ||
                null === (t = e.parent) ||
                void 0 === t
                  ? void 0
                  : t.gtag;
              if (n && "function" == typeof n) return n;
            })()),
            (a =
              null === (l = window) ||
              void 0 === l ||
              null === (d = l.parent) ||
              void 0 === d
                ? void 0
                : d.dataLayer),
            (c || a) && Kr(n, r, c, o, a)),
          s ||
            c ||
            a ||
            Object($r.b)(
              "Intercom - Google Analytics is not installed or configured, have you forgotten to include it?"
            ),
          i
        );
      },
      si = n(27),
      ci = n(131),
      ai = n(69),
      ui = n(33);
    function li(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function di(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? li(Object(n), !0).forEach(function (t) {
              pi(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : li(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function pi(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const fi = "/",
      bi = 2333e7;
    function hi(e, t) {
      return void 0 !== t && t !== e;
    }
    function gi(e, t, n, r, i, o, s) {
      e.write(t, n, {
        domain: i,
        path: fi,
        expires: new Date(si.b.now() + r),
        sameSite: o ? "none" : "lax",
        secure: o || s,
      });
    }
    function mi(e, t) {
      return (function (e) {
        return null != e;
      })(e)
        ? e
        : t;
    }
    function vi({ domainSetting: e, originCookieDomain: t, meta: n = {} }) {
      if ("none" !== e) {
        if (
          (void 0 !== e &&
            Object($r.b)(
              "Intercom Messenger error: cookie_domain attribute supports only `none` option"
            ),
          t)
        )
          return `.${t}`;
        {
          const e = Object(ci.a)(),
            t = (e || "").split(":")[0];
          return (
            Object(D.g)(
              "missingOriginDomain",
              di(di({}, n), {}, { host: t, rawHost: e })
            ),
            "localhost" === t ? "" : t
          );
        }
      }
    }
    var yi = n(86),
      Oi = n(47),
      _i = n.n(Oi),
      wi = n(359),
      ji = n.n(wi),
      Ci = n(42),
      Si = n(44);
    const Ei = Object(y.createSelector)(
      (e) => e.app.hasTheMessengerBeenOpened,
      Si.a,
      (e, t) => e && !!t.length
    );
    var Ii = n(80),
      Ai = n(31),
      Pi = n(49),
      ki = n(139),
      Ti = n(182),
      Ri = n(59);
    const Mi = "ConversationSeen",
      xi = "NewComment",
      Li = "ConversationPartUpdated",
      Di = "UserIsTyping",
      Ni = "MessengerCardUpdated",
      Ui = { increment: D.c, count: D.a, timing: D.f },
      zi = { info: D.d, error: D.b };
    function Bi(e, t, n, r, i) {
      let o;
      try {
        o = new t(
          e.endpoints,
          zi,
          Ui,
          n,
          r,
          () => {},
          () => {},
          i
        );
      } catch (e) {
        Object(D.b)(e), Vi(o);
      }
      return o;
    }
    function Vi(e) {
      if (void 0 !== e)
        try {
          e.shutdown();
        } catch (e) {
          Object(D.b)(e);
        }
    }
    function Hi(e, t, n, r, i, o, s, c, a, u) {
      if (!Qi(t, n, a)) return e;
      if ((Vi(e), !Ki(n))) return;
      let l = Ir.c;
      const d = Bi(
        n,
        ji.a,
        () => {
          l = Gi(l, r);
        },
        () => {
          l = Wi(r);
        },
        u
      );
      try {
        d.subscribeToAllTopics(), qi(d, r, i, o, s, c, h.g, Ii.c, Pi.f, Ri.b);
      } catch (e) {
        Object(D.b)(e), Vi(d);
      }
      return d;
    }
    const Fi = _i()((e) => e(), 5e3, { leading: !0, trailing: !0 }),
      $i = _i()((e) => e(), 1e3);
    function Gi(e, t) {
      return (
        e === Ir.b &&
          Ei(t.getState()) &&
          (Object(D.g)("nexusReconnectedGettingConversations"),
          Fi(() => t.dispatch(Object(Ti.b)(v.c)))),
        Object(p.c)() || (Object(D.g)("realTimeConnected"), Object(p.l)(!0)),
        t.dispatch(kr(Ir.a)),
        Ir.a
      );
    }
    function Wi(e) {
      return e.dispatch(kr(Ir.b)), Ir.b;
    }
    function qi(e, t, n, r, i, o, s, c, a, u) {
      const l = _i()((e) => e(), 5e3);
      e.addListener(xi, (e) => {
        const {
            deliveryChannel: r,
            conversationId: i,
            createdByUserId: o,
            createdAt: s,
            clientAssignedUuid: c,
            customBotState: a,
          } = e.eventData,
          u = e.webSocketEnqueuedAt;
        if (r && -1 === r.indexOf("web")) return;
        const { user: d } = t.getState(),
          p = () => t.dispatch(n(v.c, i, !0, s, c, u, a));
        o === d.id ? l(p) : p();
      }),
        e.addListener("UserContentSeenByAdmin", (e) => {
          const { conversationId: n } = e.eventData;
          t.dispatch(r(n));
        }),
        e.addListener(Mi, (e) => {
          const { conversationId: n } = e.eventData;
          t.dispatch(o(n));
        }),
        e.addListener("AdminIsTyping", (e) => {
          const {
            conversationId: n,
            adminId: r,
            adminName: o,
            adminAvatar: s,
            hasDefaultAvatar: c,
            isBot: a,
          } = e.eventData;
          t.dispatch(i(n, r, o, Ji(s, c), a));
        }),
        e.addListener(Ni, (e) => {
          const { cardUri: r } = e.eventData,
            i = Object(Ci.d)(t.getState());
          i && Object(E.j)(i, r) && t.dispatch(n(v.c, i.id, !0));
        }),
        e.addListener(Li, (e) => {
          const { conversationId: r } = e.eventData;
          Object(Ci.d)(t.getState()).id === String(r) &&
            t.dispatch(n(v.c, r, !0));
        }),
        e.addListener("StartTour", (e) => {
          const { tour: n } = e.eventData,
            { user: r } = t.getState();
          Object(D.h)(r, "received_nexus", "tour", "messenger", null, {
            tour_id: n.id,
          }),
            r.isPresent && t.dispatch(s(n.id));
        }),
        e.addListener("NewContent", (e) => {
          const { entity_id: n, entity_type: r } = e.eventData,
            { user: i } = t.getState();
          Object(D.h)(i, "received_nexus", "new_content", "messenger", null, {
            entity_id: n,
            entity_type: r,
          }),
            r === ki.a.BANNER_VIEW
              ? t.dispatch(c(n))
              : r === ki.a.SURVEY_PROGRESS && t.dispatch(a(n, r));
        }),
        e.addListener("PingHint", () => {
          const { session: e } = t.getState();
          $i(() => {
            t.dispatch(
              u(
                v.c,
                e,
                window.parent.location.href,
                null,
                null,
                null,
                {},
                !0,
                void 0,
                "apiUpdate"
              )
            );
          });
        }),
        e.addListener("ChecklistTaskCompleted", (e) => {
          const {
            checklist_id: n,
            checklist_progress_id: r,
            task_id: i,
          } = e.eventData;
          t.dispatch(Object(Ai.a)(n, Number(r), i));
        }),
        e.addListener("ChecklistsResolveHint", () => {
          $i(() => {
            t.dispatch(Object(Ai.o)());
          });
        });
    }
    const Ji = (e, t) => (t || 0 !== e.indexOf("http") ? void 0 : e),
      Ki = (e) =>
        void 0 !== e && Array.isArray(e.endpoints) && e.endpoints.length > 0,
      Zi = (e) => Object(L.a)(e.split("/")).split("-")[0],
      Yi = (e, t) => Zi(e) !== Zi(t),
      Qi = (e, t, n) =>
        Ki(e) && Ki(t)
          ? n || Yi(e.endpoints[0], t.endpoints[0])
          : (!Ki(e) && Ki(t)) || (Ki(e) && !Ki(t));
    const Xi = (e) => {
        const {
            app: {
              color: t,
              secondaryColor: n,
              selfServeSuggestionsMatch: r,
              openConfig: i,
              name: o,
              features: {
                anonymousInboundMessages: s,
                googleAnalytics: c,
                hubspotInstalled: a,
                inboundMessages: u,
                marketoEnrichmentInstalled: l,
                outboundMessages: d,
                googleAnalytics4Integration: p,
              },
              launcherLogoUrl: f,
              boundWebEvents: b,
              helpCenterSiteUrl: h,
              inboundConversationsDisabled: g,
              isInstantBootEnabled: m,
              alignment: v,
              horizontalPadding: y,
              verticalPadding: O,
              isDeveloperWorkspace: w,
              upfrontEmailCollectionSetting: j,
              customGoogleAnalyticsTrackerId: C,
            },
            launcher: { isLauncherEnabled: S },
            launcherDiscoveryMode: { hasDiscoveredLauncher: E },
            message: { conversationId: I },
            openOnBoot: { type: A, metadata: P },
            user: { role: k, locale: T, hasConversations: R },
            router: M,
          } = e,
          { conversations: x } = e,
          L = x ? x.byId : {};
        return {
          app: {
            color: t,
            secondaryColor: n,
            openConfig: i,
            selfServeSuggestionsMatch: r,
            name: o,
            features: {
              anonymousInboundMessages: s,
              googleAnalytics: c,
              hubspotInstalled: a,
              inboundMessages: u,
              marketoEnrichmentInstalled: l,
              outboundMessages: d,
              googleAnalytics4Integration: p,
            },
            launcherLogoUrl: f,
            boundWebEvents: b,
            helpCenterSiteUrl: h,
            inboundConversationsDisabled: g,
            isInstantBootEnabled: m,
            alignment: v,
            horizontalPadding: y,
            verticalPadding: O,
            isDeveloperWorkspace: w,
            upfrontEmailCollectionSetting: j,
            customGoogleAnalyticsTrackerId: C,
          },
          launcher: { isLauncherEnabled: S },
          launcherDiscoveryMode: { hasDiscoveredLauncher: E },
          user: { role: k, locale: T, hasConversations: R },
          message: { conversationId: I },
          conversations: { byId: eo(L) },
          openOnBoot: { type: A, metadata: P },
          operator: { lastComposerEvent: _(e) },
          router: M,
        };
      },
      eo = (e) => {
        const t = Object.keys(e),
          n = {};
        return (
          t.forEach((t) => {
            const { dismissed: r, read: i } = e[t];
            n[t] = { fetchState: "partial", dismissed: r, read: i };
          }),
          n
        );
      };
    var to =
      !0 === parent.__INTERCOM_REDUX_DEV_TOOLS__ &&
      parent.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? parent.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            trace: !1,
            traceLimit: 25,
          })
        : () => (e) => e;
    let no, ro, io;
    var oo =
      ({
        updateRealtimeClient: e,
        shutdownRealtimeClient: t,
        getConversation: n,
        userContentSeenByAdmin: r,
        adminIsTyping: i,
        conversationReadElsewhere: o,
        retryRealtimeClient: s,
      }) =>
      (c) =>
      (a) =>
      (u) => {
        const l = a(u);
        switch (u.type) {
          case I.R: {
            const t = u.user.app.realtimeConfig,
              s = u.user.id;
            (no = e(no, ro, t, c, n, r, i, o, s !== io, u.user.role)),
              (ro = t),
              (io = s);
            break;
          }
          case I.bb:
            t(no), (no = void 0), (ro = void 0), (io = void 0);
            break;
          case I.dd:
            s(no, c);
        }
        if (!no) return l;
        switch (u.type) {
          case I.ec:
            no.sendEvent(Mi, { conversationId: u.conversationId });
            break;
          case I.ze:
            no.throttleSendEvent(Di, { conversationId: u.conversationId }, !0);
            break;
          case I.Vd:
            no.sendEvent(Ni, { cardUri: u.card.uri });
        }
        return l;
      };
    const so = (e) => {
        if (
          window.parent &&
          window.parent.intercomSettings &&
          window.parent.intercomSettings.app_id
        ) {
          const t = window.parent.intercomSettings.app_id;
          -1 === e.indexOf(t) && (e = `${e}-${t}`);
        }
        return e;
      },
      co = (e) => {
        try {
          return JSON.parse(Z.a.get(e));
        } catch (e) {
          Object(D.c)("hydrate_read_error");
        }
      },
      ao = (e, t) => {
        try {
          Z.a.set(e, JSON.stringify(t));
        } catch (e) {
          Object(D.c)("hydrate_write_error");
        }
      };
    const uo = (e) => ({ type: I.Wc, state: e });
    var lo =
      (e, t = "intercom-state") =>
      (n) =>
      (...r) => {
        const i = n(...r);
        if (((t = so(t)), !Object(N.d)())) return i;
        const o = co(t);
        if (o) {
          const e = i.getState();
          try {
            i.dispatch(uo(o));
          } catch (n) {
            Object(D.c)("hydrate_error"),
              (function (e) {
                try {
                  Z.a.remove(e);
                } catch (e) {
                  Object(D.c)("hydrate_remove_error");
                }
              })(t),
              i.dispatch(uo(e));
          }
        }
        return (
          i.subscribe(() => {
            const n = i.getState(),
              { session: r } = n;
            r && ao(t, e(n));
          }),
          i
        );
      };
    var po = () => (e) => (t) => {
        const n = e(t);
        if (t.type === I.bb)
          Object(N.d)() && t.clearCookies && Z.a.remove(so("intercom-state"));
        return n;
      },
      fo = {
        play(e) {
          if (!N.a.hasAudioSupport()) return;
          const t = this.load(e);
          if (t) {
            const e = t.play();
            e && e.catch(() => {});
          }
        },
        playFile(e) {
          e && N.a.hasAudioSupport() && this.play(n(351)(`./${e}`));
        },
        load(e) {
          return this.audio[e] || (this.audio[e] = new Audio(e)), this.audio[e];
        },
        playNotification: _i()(
          function (e) {
            this.play(n(351)(`./${e}`));
          },
          3e3,
          { leading: !0, trailing: !1 }
        ),
        audio: {},
      },
      bo = n(143);
    const ho = "played-notifications";
    let go = (() => {
      const e = Z.b.get(ho);
      return e ? JSON.parse(e) : {};
    })();
    const mo = (e, t) => {
        (go[e] = t), Z.b.set(ho, JSON.stringify(go));
      },
      vo = (e, t) => {
        const n = Object(L.a)(e.parts);
        return (
          !((e, t) => {
            const n = go[e];
            return n === t || -1 === n;
          })(e.id, n.id) ||
          ((e, t) => {
            const { notificationStatus: n } = e;
            return "renotifying" === n && t;
          })(e, t)
        );
      },
      yo = (e, t, n) => {
        let r = !1;
        e.forEach((e) => {
          const n = Object(L.a)(e.parts);
          vo(e, t) && (r = !0), mo(e.id, n.id);
        }),
          r && fo.playNotification(n);
      },
      Oo = (e, t) => {
        switch (e) {
          case I.G:
          case I.J:
            return "failed.mp3";
          case I.H:
          case I.K:
            return "submit.mp3";
          default:
            return t && t.author.isBot ? "operator.mp3" : "notification.mp3";
        }
      };
    var _o = (e) => (t) => (n) => {
        const r = t(n),
          i = e.getState();
        if (i.app.isAudioEnabled) {
          switch (n.type) {
            case I.H:
            case I.K:
            case I.G:
            case I.J:
              fo.playFile(Oo(n.type));
              break;
            case I.uc: {
              const e = i.conversations.byId[n.conversationId];
              yo([e], i.session.newSession, Oo(n.type));
              break;
            }
            case I.Rb: {
              const { conversation: e, skipNotification: t } = n;
              if (e.read) return;
              const r = Object(L.a)(e.parts);
              if (!0 === t || Object(bo.a)(r.partType))
                return void mo(e.id, r.id);
              yo([e], i.session.newSession, Oo(n.type, r));
              break;
            }
            case I.Ob: {
              const e = Object(x.a)(i);
              yo(e, i.session.newSession, Oo(n.type));
              break;
            }
            case I.R: {
              const { unreadDismissedConversationIds: e } = n.user;
              e &&
                e.forEach((e) => {
                  mo(e, -1);
                });
              break;
            }
          }
          return r;
        }
      },
      wo = n(25);
    const jo = [],
      Co = [];
    var So =
      ({ getState: e }) =>
      (t) =>
      (n) => (
        (function (e, t) {
          const { user: n, app: r, article: i } = e();
          switch (t.type) {
            case I.tc:
              return [
                Object(D.j)(
                  n,
                  "received",
                  "message",
                  "messenger",
                  "from_launcher_discovery_mode"
                ),
              ];
            case I.I:
              return [
                Object(D.j)(
                  n,
                  "sent",
                  "reply",
                  t.isBorderless ? "borderless" : "messenger",
                  "in_conversation",
                  {
                    conversation_id: t.conversationId,
                    comment_id: t.part.id,
                    is_attachment: Object(p.f)(t.part.body),
                    is_annotated: t.isAnnotatedImage || !1,
                    within_office_hours: Object(p.h)(t.officeHoursResponse),
                    teammate_status: Object(p.d)(t.lastParticipatingAdmin),
                    time_since_last_active_in_minutes: Object(p.e)(
                      t.lastParticipatingAdmin
                    ),
                    from_messenger_suggested_content:
                      t.fromMessengerSuggestedContent,
                  }
                ),
              ];
            case I.L:
              const e =
                  -1 !==
                  ["custom_bot", "resolution_bot_auto_suggest"].indexOf(
                    t.conversationTriggerType
                  ),
                o = "resolution_bot_auto_suggest" === t.conversationTriggerType;
              return [
                Object(D.j)(
                  n,
                  "sent",
                  "message",
                  "messenger",
                  "in_new_conversation",
                  {
                    conversation_id: t.conversation.id,
                    is_attachment: Object(p.f)(t.conversation.parts[0].body),
                    is_annotated: t.isAnnotatedImage || !1,
                    within_office_hours: Object(p.h)(t.officeHoursResponse),
                    from_suggestion: e,
                    from_messenger_suggested_content: o,
                    trigger_type: t.conversationTriggerType,
                  }
                ),
              ];
            case I.ge:
              return [
                Object(D.j)(
                  n,
                  "sent",
                  "reply",
                  "messenger",
                  "in_conversation",
                  {
                    type: "automated_lead_qualification",
                    conversation_id: t.conversationId,
                    part_id: t.partId,
                    attribute_identifier: t.identifier,
                    reply: t.value,
                    attribute_type: t.identifierType,
                    form_type: t.formType,
                    attribute_is_custom_data: t.isCustomData,
                  }
                ),
              ];
            case I.T:
              return [
                Object(D.j)(
                  n,
                  "sent",
                  "reaction",
                  t.isFromConversation ? "messenger" : "in_app",
                  t.isFromConversation ? "in_conversation" : "from_full",
                  { conversation_id: t.conversationId }
                ),
              ];
            case I.pc:
              if (t.fromHomeScreenSuggestions) return [];
              const s = Object.assign(
                {
                  owner: "educate",
                  article_id: t.articleId,
                  conversation_id: t.conversationId,
                },
                t.metricMetadata || {},
                !t.fromBrowseMode && {
                  article_channel: "messenger",
                  article_source: "conversation",
                }
              );
              return [
                t.fromBrowseMode &&
                  Object(D.j)(n, "clicked", wo.j, wo.F, "messenger", s),
                !!t.metricMetadata &&
                  !t.fromBrowseMode &&
                  Object(D.i)(
                    n,
                    "viewed",
                    "article",
                    "in_app",
                    "from_conversation",
                    s
                  ),
              ].filter(Boolean);
            case I.E:
              const { activeArticle: c } = i,
                a =
                  c &&
                  c.reactionsReply &&
                  c.reactionsReply.reactionSet[t.reactionIndex] &&
                  c.reactionsReply.reactionSet[t.reactionIndex].emoji;
              return [
                Object(D.i)(n, "sent", "reaction", "in_app", "on_article", {
                  owner: "educate",
                  reaction: a,
                  article_id: t.articleId,
                  conversation_id: r.conversationId,
                }),
              ];
            default:
              return [];
          }
        })(e, n).forEach((e) => Object(D.o)(e)),
        "DESTROY_SESSION" === n.type && (jo.splice(0), Co.splice(0)),
        t(n)
      );
    const Eo = oo({
        updateRealtimeClient: Hi,
        shutdownRealtimeClient: Vi,
        getConversation: C.m,
        userContentSeenByAdmin: C.u,
        adminIsTyping: C.a,
        conversationReadElsewhere: C.c,
        retryRealtimeClient: function (e, t) {
          if (void 0 !== e)
            try {
              t.dispatch(kr(Ir.d)), e.retryConnection();
            } catch (e) {
              Object(D.b)(e);
            }
        },
      }),
      Io = (function (e) {
        let t, n;
        return (r) => (i) => (o) => {
          const s = r.getState();
          switch (o.type) {
            case I.R: {
              if (!s.session) return;
              const { appId: r } = s.session,
                { anonymousSessionDuration: i } = s.user,
                { anonymousId: c, anonymousSession: a } = o.user,
                { originCookieDomain: u } = o.user.app,
                { crossSiteCookies: d, cookieSecureFlag: p } =
                  o.user.app.features,
                f = vi({
                  domainSetting: s.app.cookieDomain,
                  originCookieDomain: u,
                  meta: { action: o.type, role: o.user && o.user.role },
                });
              if (hi(t, c)) {
                const n = mi(i, Object(ai.b)(o.user) ? 6048e5 : bi);
                gi(e, Object(l.a)(r), c, n, f, d, p), (t = c);
              }
              if (hi(n, a)) {
                const t = mi(i, 6048e5);
                gi(e, Object(l.b)(r), a, t, f, d, p), (n = a);
              }
              const b = e.read(Object(l.c)(r)) || ui.a.generateUUID();
              gi(e, Object(l.c)(r), b, bi, f, d, p);
              break;
            }
            case I.bb: {
              const { session: t } = s,
                { originCookieDomain: n } = s.app,
                r = vi({
                  domainSetting: s.app.cookieDomain,
                  originCookieDomain: n,
                  meta: { action: o.type, role: o.user && o.user.role },
                });
              if (t && o.clearCookies) {
                const { appId: n } = t;
                e.clear(Object(l.b)(n), { domain: r, path: fi }),
                  e.clear(Object(l.a)(n), { domain: r, path: fi }),
                  e.clear(Object(l.e)(n), { domain: r, path: fi });
              }
              break;
            }
          }
          return i(o);
        };
      })(u.a),
      Ao = lo(Xi);
    var Po = (e) =>
      Object(V.configureStore)({
        reducer: Rr,
        preloadedState: e,
        devTools: !1,
        middleware: (e) =>
          e({ thunk: !0, immutableCheck: !1, serializableCheck: !1 }).concat([
            So,
            _o,
            oi,
            Eo,
            Io,
            po,
            yi.d,
            mr.b,
          ]),
        enhancers: [Ao, to()],
      });
    var ko = n(15),
      To = n(94),
      Ro = n(74);
    const Mo = 0,
      xo = 12,
      Lo = 14;
    var Do = n(13),
      No = n(64),
      Uo = n(360),
      zo = n.n(Uo),
      Bo = n(361),
      Vo = n.n(Bo);
    const Ho = "#IntercomDefaultWidget",
      Fo = [
        "app_id",
        "user_id",
        "email",
        "user_hash",
        "session_duration",
        "custom_data",
        "user_data",
        "widget",
        "custom_launcher_selector",
        "hide_default_launcher",
        "alignment",
        "horizontal_padding",
        "vertical_padding",
        "cookie_domain",
        "background_color",
        "action_color",
        "api_base",
      ];
    function $o(e) {
      return !yt()(e);
    }
    function Go(e) {
      return Fo.indexOf(e) < 0;
    }
    function Wo(e) {
      return Object.keys(e)
        .filter(Go)
        .filter($o)
        .reduce((t, n) => ((t[n] = e[n]), t), {});
    }
    function qo(e) {
      return Object.keys(e)
        .filter($o)
        .reduce((t, n) => {
          const r = e[n];
          return (
            (function (e) {
              return null != e;
            })(r) && (t[n] = r),
            t
          );
        }, {});
    }
    function Jo(e) {
      return Object.assign(
        (function (e) {
          return e.custom_data ? Wo(e.custom_data) : {};
        })(e),
        Wo(e)
      );
    }
    function Ko(e) {
      return (
        (function (e) {
          if (!e.user_data) return;
          return qo({
            appId: e.app_id,
            email: e.user_data.email,
            userId: e.user_data.user_id,
            userHash: e.user_data.user_hash,
          });
        })(e) ||
        (function (e) {
          return qo({
            appId: e.app_id,
            email: e.email,
            userId: e.user_id,
            userHash: e.user_hash,
          });
        })(e)
      );
    }
    function Zo(e) {
      return e &&
        e.widget &&
        !yt()(e.widget.activator) &&
        e.widget.activator !== Ho
        ? e.widget.activator
        : null;
    }
    function Yo(e) {
      return yt()(e.custom_launcher_selector)
        ? Zo(e)
        : e.custom_launcher_selector;
    }
    function Qo(e) {
      return Vo()(e.hide_default_launcher)
        ? e.hide_default_launcher
          ? "hide"
          : "show"
        : (function (e) {
            return e.widget && e.widget.activator === Ho
              ? "show"
              : "not-present";
          })(e);
    }
    function Xo(e) {
      return e.session_duration || null;
    }
    function es(e) {
      const t = {
        alignment: e.alignment,
        horizontalPadding: e.horizontal_padding,
        verticalPadding: e.vertical_padding,
        cookieDomain: e.cookie_domain,
        color: e.action_color,
        secondaryColor: e.background_color,
      };
      return zo()(t, (e) => void 0 !== e);
    }
    var ts = n(30),
      ns = n(29),
      rs = n.n(ns);
    const is = rs()("intercom.client-matching.client-match-object.base");
    class base_BaseClientMatchObject {
      constructor(e) {
        (this._ruleset = void 0),
          (this._predicateChain = void 0),
          (this._ruleset = e),
          (this._predicateChain = new j.a(e, () => {}));
      }
      getRuleset() {
        return this._ruleset;
      }
      getRulesetId() {
        return this._ruleset.ruleset_id;
      }
      getObjectType() {
        return this._ruleset.ruleset_link_object_type;
      }
      getSerializedObject() {
        return this._ruleset.serialized_object;
      }
      isMatchableInLocation(e) {
        return (
          !this._ruleset.matching_locations ||
          -1 !== this._ruleset.matching_locations.indexOf(e)
        );
      }
      evaluatePredicates() {
        return (
          !(!this.matchOnMobileBrowser() && Object(N.k)()) &&
          this._predicateChain.evaluate()
        );
      }
      canRematch() {
        return "transient_match" === this.getRuleset().ruleset_match_behavior;
      }
      matchOnMobileBrowser() {
        return !0;
      }
      refreshActiveMatch(e) {
        this.onRefreshActiveMatch(this._ruleset.serialized_object, e);
      }
      async match(e, t) {
        is(`.match called [${this.getObjectType()}]`, this.getRuleset());
        const n = e.getState(),
          r = this.getRuleset(),
          i = this.onPreMatch(e);
        let o;
        try {
          const e = v.c
              .rulesetConditionSatisfied(
                n.session,
                r.ruleset_id,
                r.ruleset_link_id,
                r.user_id,
                r.company_id,
                r.predicates,
                r.checkpoint_id,
                r.notification_record_id,
                r.extra_context
              )
              .then((e) => this.selectMatchObject(e)),
            t = this.getSerializedObject();
          o = t ? await Promise.resolve(t) : await e;
        } catch (e) {
          return Object(D.b)(
            `Call to /match failed, unable to complete client match rulesetId=${this.getRulesetId()}`
          );
        }
        this.onMatch(o, e, i, t);
      }
      selectMatchObject(e) {
        return e;
      }
      onPreMatch(e) {}
      onMatch(e, t, n, r) {}
      onRefreshActiveMatch(e, t) {}
      unmatch(e) {
        is(`.unmatch called [${this.getObjectType()}]`, this.getRuleset()),
          this.onUnmatch(e);
      }
      onUnmatch(e) {}
    }
    class banner_BannerClientMatchObject extends base_BaseClientMatchObject {
      selectMatchObject(e) {
        return e.banner;
      }
      onMatch(e, t) {
        if (!e) return;
        const n = v.c.buildBanner(e);
        let { banners: r } = t.getState();
        (r = r.concat(n)), t.dispatch(Object(Ii.f)(r));
      }
      canRematch() {
        return !0;
      }
      onUnmatch(e) {
        let { banners: t } = e.getState();
        (t = t.filter((e) => e.ruleset_id !== this.getRuleset().ruleset_id)),
          e.dispatch(Object(Ii.f)(t));
      }
    }
    class tour_TourClientMatchObject extends base_BaseClientMatchObject {
      selectMatchObject(e) {
        return e.tour;
      }
      matchOnMobileBrowser() {
        return !1;
      }
      onPreMatch() {
        var e, t, n;
        return {
          currentUrl:
            null === (e = window) ||
            void 0 === e ||
            null === (t = e.parent) ||
            void 0 === t ||
            null === (n = t.location) ||
            void 0 === n
              ? void 0
              : n.pathname,
        };
      }
      onMatch(e, t, n) {
        var r, i, o;
        t.dispatch(Object(h.l)(v.c.buildTour(e))),
          n.currentUrl !==
            (null === (r = window) ||
            void 0 === r ||
            null === (i = r.parent) ||
            void 0 === i ||
            null === (o = i.location) ||
            void 0 === o
              ? void 0
              : o.pathname) &&
            (Object(D.c)("tour_match_url_mismatch"),
            Object(D.b)(
              `tour_match_url_mismatch rulesetId=${this.getRulesetId()}`
            ));
      }
    }
    class inbound_trigger_InboundTriggerClientMatchObject extends base_BaseClientMatchObject {
      selectMatchObject(e) {
        return e.composerSuggestions;
      }
      onMatch(e, t) {
        t.dispatch(Object(f.a)(e));
      }
      onUnmatch(e) {
        e.dispatch(Object(f.b)(this.getRulesetId()));
      }
    }
    var os = n(138);
    class answerbot_predictive_context_AnswerbotPredictiveContextClientMatchObject extends base_BaseClientMatchObject {
      selectMatchObject(e) {
        return e.answerbotPredictiveContexts;
      }
      onMatch(e, t) {
        t.dispatch(Object(os.a)(e));
      }
      onUnmatch(e) {
        e.dispatch(Object(os.a)(null));
      }
    }
    const ss = rs()("intercom.client-match-object.messenger-trigger");
    class messenger_trigger_MessengerTriggerClientMatchObject extends base_BaseClientMatchObject {
      constructor(...e) {
        super(...e), (this._node = void 0);
      }
      selectMatchObject() {
        return null;
      }
      onMatch(e, t) {
        (this._node = this._findDOMNode(e)), t.dispatch(Object(To.a)(e, v.c));
      }
      onUnmatch(e) {
        e.dispatch(Object(To.b)(this.messengerTriggerId()));
      }
      onRefreshActiveMatch(e, t) {
        this._shouldRefreshActiveMatch() &&
          (ss(
            `TriggerId=${e.id} (${e.selector}) is missing from the page, re-attaching listener`
          ),
          this.onUnmatch(t),
          this.onMatch(e, t));
      }
      messengerTriggerId() {
        return this.getSerializedObject().id;
      }
      _shouldRefreshActiveMatch() {
        return Boolean(this._node && !this._documentContains(this._node));
      }
      _findDOMNode(e) {
        return window.parent.document.querySelector(e.selector);
      }
      _documentContains(e) {
        return window.parent.document.contains
          ? window.parent.document.contains(e)
          : window.parent.document.body.contains(e);
      }
    }
    class chat_ChatClientMatchObject extends base_BaseClientMatchObject {
      selectMatchObject(e) {
        return e.chat;
      }
      onMatch(e, t) {
        e && t.dispatch(Object(C.p)(v.c, Object(v.a)(e)));
      }
    }
    class custom_bot_CustomBotClientMatchObject extends base_BaseClientMatchObject {
      selectMatchObject(e) {
        return e.customBot;
      }
      onMatch(e, t) {
        e && t.dispatch(Object(C.p)(v.c, Object(v.a)(e)));
      }
    }
    class post_PostClientMatchObject extends base_BaseClientMatchObject {
      selectMatchObject(e) {
        return e.post;
      }
      onMatch(e, t) {
        e && t.dispatch(Object(C.p)(v.c, Object(v.a)(e)));
      }
    }
    var cs = n(8);
    class survey_SurveyClientMatchObject extends base_BaseClientMatchObject {
      selectMatchObject(e) {
        return e.survey;
      }
      onMatch(e, t) {
        if (!e) return;
        const n = Object(cs.x)(e);
        t.dispatch(Object(Pi.g)(n));
      }
    }
    class seriesCondition_SeriesConditionClientMatchObject extends base_BaseClientMatchObject {
      selectMatchObject(e) {
        return e.seriesCondition;
      }
      onMatch(e, t, n, r) {
        r.createOrUpdateUser({}, "apiUpdate", !0);
      }
    }
    class checklist_ChecklistClientMatchObject extends base_BaseClientMatchObject {
      selectMatchObject(e) {
        return e.checklist;
      }
      onMatch(e, t) {
        if (e) {
          const n = t.getState().checklists || [];
          t.dispatch(Object(Ai.k)(v.c.buildChecklists([...n, e])));
        }
      }
    }
    function as(e) {
      switch (e.ruleset_link_object_type) {
        case "banner":
          return new banner_BannerClientMatchObject(e);
        case "tour":
          return new tour_TourClientMatchObject(e);
        case "survey":
          return new survey_SurveyClientMatchObject(e);
        case "inbound_trigger":
        case "inbound_custom_bot":
          return new inbound_trigger_InboundTriggerClientMatchObject(e);
        case "chat":
          return new chat_ChatClientMatchObject(e);
        case "checklist":
          return new checklist_ChecklistClientMatchObject(e);
        case "custom_bot":
          return new custom_bot_CustomBotClientMatchObject(e);
        case "post":
          return new post_PostClientMatchObject(e);
        case "messenger_trigger":
        case "button_custom_bot":
          return new messenger_trigger_MessengerTriggerClientMatchObject(e);
        case "answerbot_predictive_context":
          return new answerbot_predictive_context_AnswerbotPredictiveContextClientMatchObject(
            e
          );
        case "series_condition":
          return new seriesCondition_SeriesConditionClientMatchObject(e);
        default:
          return new base_BaseClientMatchObject(e);
      }
    }
    const us = rs()("intercom.client-matching.client-match-runner");
    class client_match_runner_ClientMatchRunner {
      constructor(e, t) {
        (this.clientMatches = []),
          (this.activeClientMatchIds = {}),
          (this.evalLoop = void 0),
          (this.store = void 0),
          (this.session = void 0),
          (this.store = e),
          (this.session = t);
      }
      start() {
        void 0 === this.evalLoop &&
          (us("Starting evaluation loop"),
          (this.evalLoop = setInterval(
            () => this.performClientMatching(),
            500
          )));
      }
      stop() {
        void 0 !== this.evalLoop &&
          (us("Stopping evaluation loop"),
          window.clearInterval(this.evalLoop),
          (this.evalLoop = void 0));
      }
      updateClientMatches(e, t) {
        this._removeMissingMatches(e, t),
          this._addNewMatches(e),
          this.performClientMatching();
      }
      performClientMatching() {
        const e = this._evaluateClientMatches();
        this._processResults(e);
      }
      _evaluateClientMatches() {
        const e = { positiveMatches: [], negativeMatches: [] };
        return (
          this.clientMatches.forEach((t) => {
            t.evaluatePredicates()
              ? e.positiveMatches.push(t)
              : e.negativeMatches.push(t);
          }),
          e
        );
      }
      _processResults(e) {
        e.negativeMatches.forEach((e) => {
          const t = e.getRulesetId();
          this.activeClientMatchIds[t] &&
            (e.unmatch(this.store),
            delete this.activeClientMatchIds[t],
            e.canRematch() || this._removeClientMatch(e));
        }),
          e.positiveMatches.forEach((e) => {
            const t = e.getRulesetId();
            this.activeClientMatchIds[t]
              ? e.refreshActiveMatch(this.store)
              : (e.match(this.store, this.session),
                (this.activeClientMatchIds[t] = !0));
          });
      }
      _addNewMatches(e) {
        for (const t of e)
          this.clientMatches.find((e) => e.getRulesetId() === t.ruleset_id) ||
            this.clientMatches.push(as(t));
        this._evaluateClientMatches();
      }
      _removeMissingMatches(e, t) {
        for (const n of this.clientMatches)
          n.isMatchableInLocation(t) &&
            !e.find((e) => e.ruleset_id === n.getRulesetId()) &&
            (this.activeClientMatchIds[n.getRulesetId()] &&
              n.unmatch(this.store),
            this._removeClientMatch(n));
      }
      _removeClientMatch(e) {
        this.clientMatches.splice(this.clientMatches.indexOf(e), 1);
      }
    }
    var ls = n(77);
    const ds = (e) => {
        try {
          return e.self !== e.top;
        } catch (e) {
          return !1;
        }
      },
      ps = (e) => {
        try {
          return e.document.body.text.length > 0;
        } catch (e) {
          return !1;
        }
      };
    var fs = n(352),
      bs = n(141),
      hs = n(97),
      gs = n(172),
      ms = n(92);
    var vs = n(23),
      ys = n(75),
      Os = n(140),
      _s = n(28);
    function ws(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function js(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ws(Object(n), !0).forEach(function (t) {
              Cs(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ws(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Cs(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const { assign: Ss } = Object;
    function Es(e, t, n) {
      let r = t(e.getState());
      return () => {
        const i = t(e.getState());
        r !== i && ((r = i), n(i));
      };
    }
    function Is(e) {
      const t = {},
        n = u.a.read(Object(l.a)(e)) || u.a.read(Object(l.e)(e)),
        r = u.a.read(Object(l.b)(e));
      return (
        n && Ss(t, { anonymousId: n }), r && Ss(t, { anonymousSession: r }), t
      );
    }
    function As(e) {
      return e.intercomSettings;
    }
    var Ps = class session_Session {
        constructor(e, t, n) {
          (this.handleCustomLauncherClick = (e) => {
            e.preventDefault(),
              this.toggleMessenger(),
              this.addLauncherClickedMetric();
            return (
              Zo(As(this.window)) &&
                (D.k.addIncrementOpMetric("legacyCustomLauncherClick"),
                D.k.buildAndAddHcMetric("legacyCustomLauncherClick")),
              !1
            );
          }),
            (this.handleMessengerChange = (e) => {
              (e
                ? this.messengerOpenCallbacks
                : this.messengerCloseCallbacks
              ).forEach((e) => e()),
                e && this.sendMessengerOpenRequest(),
                e ||
                  "messenger-trigger" !== Object(c.i)(this.store.getState()) ||
                  this.store.dispatch(ko.b.navigateBack());
            }),
            (this.handleUnreadConversationCountChange = (e) => {
              this.unreadConversationCountChangeCallbacks.forEach((t) => t(e));
            }),
            (this.handleUserEmailSupplied = (e) => {
              e && this.userEmailSuppliedCallbacks.forEach((e) => e());
            }),
            (this.window = e),
            (this.store =
              t ||
              ((e) => {
                const t = Po(e);
                return t.subscribe(k(t)), t.subscribe(B(t)), t;
              })()),
            (this.destroyApp = n),
            (this.isReady = !1),
            (this.hasScrapedCookies = !1),
            (this.readyCallbacks = []),
            (this.messengerOpenCallbacks = []),
            (this.messengerCloseCallbacks = []),
            (this.userEmailSuppliedCallbacks = []),
            (this.unreadConversationCountChangeCallbacks = []),
            (this.storeSubscribers = []),
            (this.clientMatchRunner = new client_match_runner_ClientMatchRunner(
              this.store,
              this
            )),
            this.startClientMatchRunner(),
            this.createMessengerChangeSubscriber(),
            this.createUserEmailSuppliedSubscriber(),
            this.createUnreadConversationCountChangeSubscriber();
        }
        createOrUpdateUser(e = {}, t, n = !1) {
          const r = this.getSettings(e),
            i = this.window.intercomEncryptedPayload;
          const o = this.store.getState().app;
          let { session: s } = this.store.getState();
          const c = Ko(r);
          if (
            ((s = Ss({}, s, c)),
            !(function (e) {
              return e && e.appId;
            })(s))
          )
            return (
              D.k.addIncrementOpMetric(
                "bailed_ping_request_because_of_invalid_session"
              ),
              Promise.resolve()
            );
          const { appId: a } = s;
          (({ appWindow: e, appId: t }) => {
            if (ds(e)) {
              const n = ds(e.parent),
                r = ps(e),
                { referrer: i } = e.document;
              Object(D.d)(`messenger_sandboxed - referrer=${i}`),
                Object(D.c)("messenger_sandboxed", {
                  appId: t,
                  appSandboxed: n,
                  hasBodyText: r,
                });
            }
          })({ appWindow: this.window, appId: a }),
            (s = Ss({}, s, Is(a)));
          const d = Jo(r),
            p = {};
          if (Object(l.g)())
            (p.marketo_tracking_cookie = null),
              (p.hubspot_tracking_cookie = null);
          else {
            if (o.features.marketoEnrichmentInstalled) {
              this.hasScrapedCookies = !0;
              const e = u.a.read(Object(l.f)());
              e && (p.marketo_tracking_cookie = e);
            }
            if (o.features.hubspotInstalled) {
              this.hasScrapedCookies = !0;
              const e = u.a.read(Object(l.d)());
              e && (p.hubspot_tracking_cookie = e);
            }
          }
          const f = Yo(r);
          f && this.enableCustomLauncher(f),
            (this.stopMetricsPolling = D.k.startMetricsPolling(s, this.window));
          const b = this.window.document.URL,
            h = es(r);
          return this.store
            .dispatch(
              Ri.c.createOrUpdateUser(
                v.c,
                s,
                b,
                d,
                Qo(r),
                Xo(r),
                h,
                n,
                i,
                t,
                p,
                Object(ls.a)(),
                this.destroyApp
              )
            )
            .then((e) => e && this.handleUserCreateOrUpdate(e, r));
        }
        sendMessengerOpenRequest() {
          this.whenReady(() =>
            this.store
              .dispatch(Ri.c.sendMessengerOpen(v.c))
              .then((e) => e && this.handleMessengerOpen(e))
              .then(() => this.store.dispatch(Ri.c.messengerOpenHandled()))
          );
        }
        handleMessengerOpen(e) {
          const {
            clientsideRulesetConditions: t,
            composerSuggestions: n,
            botIntro: r,
            accessToTeammateEnabled: i,
            botTargetedConversations: s,
            botAdmin: c,
            selfServeSuggestionsMatch: a,
            activeAdmins: u,
            composerState: l,
          } = e;
          this.store.dispatch(Object(f.e)(n)),
            this.clientMatchRunner.updateClientMatches(t, Lo),
            this.store.dispatch(Object(gs.b)(r));
          const d = this.store.getState().app;
          this.store.dispatch(
            ko.b.updateResolutionBotStateFromOpen(
              o()(i, d.accessToTeammateEnabled),
              o()(a, d.selfServeSuggestionsMatch),
              o()(u, d.activeAdmins),
              s,
              c
            )
          ),
            l && this.store.dispatch(Object(C.s)(l));
        }
        createCustomizationOverride(e) {
          const t = es(this.getSettings(e));
          return this.store.dispatch(Object(b.b)(t));
        }
        destroy(e = !0) {
          this.store.dispatch(Ri.c.destroySession(e)),
            this.stopMetricsPolling && this.stopMetricsPolling(),
            this.disableCustomLauncher(),
            this.removeStoreSubscribers(),
            this.stopClientMatchRunner(),
            Ri.c.setupDefaultCreateOrUpdateUserRateLimiting(),
            Ri.c.isDuplicateCreateOrUpdateUserRequest.reset();
        }
        openMessenger() {
          this.whenReady(() => {
            const { borderless: e } = this.store.getState();
            e.conversationId
              ? this.store.dispatch(
                  ko.b.openConversationInMessenger(e.conversationId)
                )
              : (this.store.dispatch(ko.b.showInitialScreen()),
                this.store.dispatch(ko.b.openMessenger()));
          });
        }
        openOnBoot() {
          const { getState: e, dispatch: t } = this.store,
            n = e().openOnBoot;
          if (!Object(a.c)() && n)
            switch (n.type) {
              case "conversation":
                const e = n.metadata.conversationId;
                e && t(ko.b.openConversationInMessenger(e));
                break;
              case "new_conversation":
                t(ko.b.openMessenger()), t(ko.b.showNewConversation());
                break;
              case "article":
                if (
                  "article-link" === n.metadata.componentId &&
                  n.metadata.url
                ) {
                  var r, i;
                  const e =
                    null === (r = n.metadata) ||
                    void 0 === r ||
                    null === (i = r.previousState) ||
                    void 0 === i
                      ? void 0
                      : i.metadata;
                  if (e) {
                    const n = e.conversationId;
                    n && t(ko.b.openConversationInMessenger(n));
                  }
                  t(
                    Object(m.b)(
                      v.c,
                      n.metadata.cardUri,
                      n.metadata.componentId,
                      n.metadata.url,
                      {}
                    )
                  );
                }
                break;
              case "open_checklist":
                const o = n.metadata.checklistProgressId;
                t(ko.b.openMessenger()), t(Object(_s.b)(o));
            }
          n.metadata.openArticleStandalone &&
            this.showArticle(
              n.metadata.articleIds[n.metadata.articleIds.length - 1]
            );
        }
        openOnBootAfterUserLoaded() {
          const { getState: e } = this.store,
            t = e().openOnBoot;
          if (!Object(a.c)() && t && "search_browse_article" === t.type)
            return this.openIntoSearchBrowseArticle(t);
        }
        async openIntoSearchBrowseArticle(e) {
          const { dispatch: t, getState: n } = this.store,
            { articleIds: r } = e.metadata,
            i = r.pop();
          if (!Object(hs.c)(n())) return void t({ type: I.m });
          const o = Object(Do.i)(n());
          await t(Object(fs.b)(v.c)),
            t(o ? Object(s.push)("/help") : Object(No.l)(!0)),
            t(Object(bs.h)(i, null, !0, !0)),
            t(ko.b.openMessenger(!0)),
            t(Object(bs.g)(i, null, !0));
        }
        async showConversation(e) {
          this.whenReady(async () => {
            this.store.dispatch(ko.b.getAndOpenConversation(e));
          });
        }
        closeMessenger() {
          this.whenReady(() => {
            this.store.dispatch(ko.b.closeMessenger());
          });
        }
        toggleMessenger() {
          this.whenReady(() => {
            this.store.dispatch(ko.b.toggleMessenger());
          });
        }
        showConversations() {
          this.whenReady(() => {
            this.store.dispatch(ko.b.openConversations());
          });
        }
        showNewConversation(e) {
          this.whenReady(() => {
            this.store.dispatch(ko.b.openNewConversation(e));
          });
        }
        sendMessage(e) {
          this.whenReady(() => {
            const t = this.store.getState(),
              n = Object(ys.a)(t),
              r = Object(Os.matchPath)(
                `/${vs.c.id}/conversation/:conversationId`,
                n
              ),
              i = (null == r ? void 0 : r.params.conversationId) || "",
              o = Object(Ci.c)(t, i);
            "state_closed" === (null == o ? void 0 : o.state) &&
              (this.store.dispatch(ko.b.showNewConversation()), (i = void 0));
            const s = {
              body: [{ type: "paragraph", text: e }],
              clientId: Object(ui.b)(),
              createdAt: new Date(),
            };
            this.store.dispatch(Object(C.j)(v.c, i, s));
          });
        }
        startSurvey(e) {
          this.whenReady(() => {
            this.store.dispatch(Object(Pi.e)(e, ms.a.triggered_from_code));
          });
        }
        startChecklist(e) {
          this.whenReady(() => {
            this.store.dispatch(Object(Ai.e)(e, ms.a.triggered_from_code, !0));
          });
        }
        startTour(e) {
          this.whenReady(() => {
            this.store.dispatch(Object(h.d)(e));
          });
        }
        createEvent(e, t) {
          this.whenReady(() => {
            this.store.dispatch(Ri.c.createEvent(v.c, e, t)).then((e) => {
              if (!e) return;
              const { clientsideRulesetConditions: t } = e;
              t &&
                t.length > 0 &&
                this.clientMatchRunner.updateClientMatches(t, xo);
            });
          });
        }
        createArticleReaction(e, t, n) {
          this.whenReady(() => {
            const {
                session: r,
                app: { isMessengerOpen: i },
              } = this.store.getState(),
              o = !("conversation" === Object(c.i)(this.store.getState()) && i);
            v.c.createArticleReaction(r, e, t, o, n);
          });
        }
        previewInboundCustomBot(e) {
          this.whenReady(() => {
            (e = v.c.buildComposerSuggestions(e)),
              this.store.dispatch(Object(f.d)(e));
          });
        }
        previewOutboundCustomBot(e) {
          this.store.dispatch(Object(To.d)(v.c, e));
        }
        previewWorkflow(e) {
          this.store.dispatch(Object(To.f)(v.c, e));
        }
        createMetric(e, t) {
          this.whenReady(() => {
            const { session: n, user: r } = this.store.getState();
            t = Ss(
              {
                anonymous_id: n.anonymousId,
                end_user_id: r.id,
                user_id: r.id,
                user_role: r.role,
              },
              t
            );
            const i = n.appId,
              o = [
                {
                  name: e.toString(),
                  id: ui.a.generateUUID(),
                  app_id_code: i,
                  created_at: Math.round(Date.now() / 1e3),
                  metadata: t,
                },
              ];
            Object(ai.a)(r) && v.c.createMetrics(n, o);
          });
        }
        trigger(e) {
          return this.store.dispatch(Object(To.c)(e, v.c));
        }
        triggerBot(e) {
          var t;
          const { operator: n } = this.store.getState(),
            r = n.clientsideRulesetConditions.find((t) => t.ruleset_id === e);
          if (!r || "button_custom_bot" !== r.ruleset_link_object_type) return;
          const i =
            null == r || null === (t = r.serialized_object) || void 0 === t
              ? void 0
              : t.id;
          return i ? this.trigger(i) : void 0;
        }
        getSettings(e) {
          return Ss({}, As(this.window), e);
        }
        setSetting(e, t) {
          As(this.window)[e] = t;
        }
        getArticleReaction(e, t, n) {
          this.whenReady(() => {
            const { session: r } = this.store.getState();
            v.c.getArticleReaction(r, e, t, n);
          });
        }
        enterTourPreviewMode(e) {
          this.whenReady(() => {
            this.store.dispatch(Object(h.j)(v.c.buildTour(e), !0));
          });
        }
        exitTourPreviewMode() {
          this.whenReady(() => {
            this.store.dispatch(Object(h.k)());
          });
        }
        previewSurvey(e) {
          this.whenReady(() => {
            this.store.dispatch(Object(Pi.k)(e));
          });
        }
        fetchTooltips(e) {
          const { session: t } = this.store.getState(),
            n = this.getSettings(e),
            r = Ko(n),
            i =
              (null == t ? void 0 : t.appId) || (null == r ? void 0 : r.appId);
          if (!i) return;
          const o = Is(i),
            s = js(js(js({}, t), r), o);
          if (!s) return;
          s.sessionId || (s.sessionId = ui.a.generateUUID());
          const c = Jo(n);
          this.store.dispatch(Object(g.b)({ session: s, customAttributes: c }));
        }
        previewTooltipGroup(e) {
          this.whenReady(() => {
            this.store.dispatch(Object(g.e)(v.c.buildTooltipGroup(e)));
          });
        }
        exitPreviewTooltipGroup() {
          this.whenReady(() => {
            this.store.dispatch(Object(g.a)());
          });
        }
        getVisitorId() {
          const { session: e } = this.store.getState();
          if (!e) return;
          const { appId: t } = e;
          return u.a.read(Object(l.a)(t)) || u.a.read(Object(l.e)(t));
        }
        onMessengerOpen(e) {
          this.messengerOpenCallbacks.push(e);
        }
        onMessengerClose(e) {
          this.messengerCloseCallbacks.push(e);
        }
        onUnreadConversationCountChange(e) {
          const t = this.store.getState(),
            n = Object(Ro.b)(t);
          this.unreadConversationCountChangeCallbacks.push(e), e(n);
        }
        onUserEmailSupplied(e) {
          this.userEmailSuppliedCallbacks.push(e);
        }
        enableCustomLauncher(e) {
          this.disableCustomLauncher();
          const t = this.window.document.getElementsByTagName("body")[0];
          (this.customLauncherClickHandler = Object(ts.g)(
            t,
            e,
            this.handleCustomLauncherClick
          )),
            Object(ts.c)(t, "click", this.customLauncherClickHandler);
        }
        disableCustomLauncher() {
          if (!this.customLauncherClickHandler) return;
          const e = this.window.document.getElementsByTagName("body")[0];
          Object(ts.C)(e, "click", this.customLauncherClickHandler),
            (this.customLauncherClickHandler = null);
        }
        whenReady(e) {
          if (this.isReady) return setTimeout(e, 1);
          this.readyCallbacks.push(e);
        }
        executeReadyCallbacks() {
          const { readyCallbacks: e } = this;
          for (; e.length; ) e.shift()();
          this.readyCallbacks = [];
        }
        addLauncherClickedMetric() {
          this.whenReady(() => {
            const {
                user: e,
                app: { isMessengerOpen: t },
              } = this.store.getState(),
              n = { is_messenger_open: t, is_custom_launcher: !0 };
            D.k.buildAndAddMetric(e, "clicked", "launcher", "in_app", "", n);
          });
        }
        handleUserCreateOrUpdate(e, t) {
          if (
            (Object(p.a)() ||
              (D.k.buildAndAddHcMetric("apiBoot"), Object(p.m)(!0)),
            this.shouldSendTrackingCookies() &&
              this.createOrUpdateUser(t, "apiUpdate"),
            e.clientsideRulesetConditions &&
              this.clientMatchRunner.updateClientMatches(
                e.clientsideRulesetConditions,
                Mo
              ),
            this.isReady)
          )
            return e;
          if (
            (this.executeReadyCallbacks(),
            (this.isReady = !0),
            Object(ls.a)() &&
              this.window.parent.postMessage("messenger_session_ready", "*"),
            !Object(p.b)())
          ) {
            const e = this.store.getState(),
              t = Object(d.a)(e),
              n = Object(N.n)();
            D.k.buildAndAddHcMetric("createOrUpdateUser", {
              messengerIsVisible: Object(p.g)(t),
              isLauncherEnabled: t,
              hasDisplayNoneSet: n,
            }),
              Object(p.k)(!0);
          }
          return this.openOnBootAfterUserLoaded(), e;
        }
        showArticle(e) {
          const { dispatch: t, getState: n } = this.store;
          this.whenReady(async () => {
            const {
              app: { isMessengerOpen: r },
            } = n();
            r || this.openMessenger(),
              this.whenReady(() => {
                t(Object(bs.f)(e, {}));
              });
          });
        }
        showNews(e) {
          if (!e) return void this.showSpace("news");
          const { dispatch: t, getState: n } = this.store;
          this.whenReady(async () => {
            const {
              app: { isMessengerOpen: r },
            } = n();
            r || t(ko.b.openMessenger()),
              t(Object(s.push)(`/news/details/${e}`));
          });
        }
        showSpace(e) {
          var t;
          const { dispatch: n, getState: r } = this.store,
            i = r(),
            o =
              null === (t = Object(Do.a)(i).find((t) => t.id === e)) ||
              void 0 === t
                ? void 0
                : t.path;
          o &&
            this.whenReady(async () => {
              const {
                app: { isMessengerOpen: e },
              } = i;
              e || n(ko.b.openMessenger()), n(Object(s.push)(o));
            });
        }
        shouldSendTrackingCookies() {
          const e = this.store.getState().app;
          return (
            !this.hasScrapedCookies &&
            (e.features.hubspotInstalled ||
              e.features.marketoEnrichmentInstalled)
          );
        }
        startClientMatchRunner() {
          this.clientMatchRunner.start();
        }
        stopClientMatchRunner() {
          this.clientMatchRunner.stop();
        }
        createMessengerChangeSubscriber() {
          this.addStoreSubscriber(
            Es(
              this.store,
              (e) => e.app.isMessengerOpen,
              this.handleMessengerChange
            )
          );
        }
        createUnreadConversationCountChangeSubscriber() {
          this.addStoreSubscriber(
            Es(this.store, Ro.b, this.handleUnreadConversationCountChange)
          );
        }
        createUserEmailSuppliedSubscriber() {
          this.addStoreSubscriber(
            Es(
              this.store,
              (e) => {
                var t;
                return null === (t = e.session) || void 0 === t
                  ? void 0
                  : t.didUserSupplyEmail;
              },
              this.handleUserEmailSupplied
            )
          );
        }
        addStoreSubscriber(e) {
          this.storeSubscribers.push(this.store.subscribe(e));
        }
        removeStoreSubscribers() {
          this.storeSubscribers.forEach((e) => !!e && e());
        }
        handleIntersectionBoot() {
          this.whenReady(() => {
            this.store.dispatch({ type: I.bc });
          });
        }
      },
      ks = n(216),
      Ts = n.n(ks),
      Rs = n(283),
      Ms = n(98),
      xs = Object(y.createSelector)([(e) => e.accessibility], (e) => e),
      Ls = n(67),
      Ds = n.n(Ls);
    var Ns = Object(y.createSelector)(
        Ms.b,
        Do.i,
        ({ color: e, secondaryColor: t }, n) => {
          if (!e || !t) return {};
          const {
            gradient_start_color: r,
            gradient_end_color: i,
            launcher_icon_color: o,
          } = Ds()({
            primaryColor: e,
            secondaryColor: t,
            darkenAmount: 20,
            pureBlackActionColors: n,
          });
          return {
            primaryColor: e,
            secondaryColor: t,
            gradientStartColor: r,
            gradientEndColor: i,
            launcherIconColor: o,
          };
        }
      ),
      Us = n(135),
      zs = n(90);
    const Bs = (e) => (e ? zs.c : zs.a),
      Vs = ({
        isLauncherEnabled: e,
        customization: { verticalPadding: t },
        m5Enabled: n,
      }) => (e ? t + Bs(n) + 20 : t),
      Hs = (e) => (e.isCompact ? "250px" : `calc(100% - ${20 + Vs(e)}px)`);
    var Fs = (e) => {
        return `\n  @keyframes intercom-lightweight-app-launcher {\n    from {\n      opacity: 0;\n      transform: scale(0.5);\n    }\n    to {\n      opacity: 1;\n      transform: scale(1);\n    }\n  }\n\n  @keyframes intercom-lightweight-app-gradient {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  @keyframes intercom-lightweight-app-messenger {\n    ${
          e.m5Enabled
            ? "\n        0% {\n          opacity: 0;\n          transform: scale(0);\n        }\n        40% {\n          opacity: 1;\n        }\n        100% {\n          transform: scale(1);\n        }\n        "
            : "\n        from {\n          opacity: 0;\n          transform: translateY(20px);\n        }\n        to {\n          opacity: 1;\n          transform: translateY(0);\n        }\n        "
        }\n  }\n\n  .intercom-lightweight-app {\n    position: fixed;\n    z-index: 2147483001;\n    width: 0;\n    height: 0;\n    font-family: intercom-font, "Helvetica Neue", "Apple Color Emoji", Helvetica, Arial, sans-serif;\n  }\n\n  .intercom-lightweight-app-gradient {\n    position: fixed;\n    z-index: 2147483002;\n    width: 500px;\n    height: 500px;\n    bottom: 0;\n    ${
          e.customization.alignment
        }: 0;\n    pointer-events: none;\n    background: radial-gradient(\n      ellipse at bottom ${
          e.customization.alignment
        },\n      rgba(29, 39, 54, 0.16) 0%,\n      rgba(29, 39, 54, 0) 72%);\n    animation: intercom-lightweight-app-gradient 200ms ease-out;\n  }\n\n  .intercom-lightweight-app-launcher {\n    position: fixed;\n    z-index: 2147483003;\n    padding: 0 !important;\n    margin: 0 !important;\n    border: none;\n    bottom: ${(({
          isMobile: e,
          customization: t,
        }) => (e ? 20 : t.verticalPadding))(e)}px;\n    ${
          e.customization.alignment
        }: ${(({ isMobile: e, customization: t }) =>
          e ? 20 : t.horizontalPadding)(e)}px;\n    max-width: ${Bs(
          e.m5Enabled
        )}px;\n    width: ${Bs(e.m5Enabled)}px;\n    max-height: ${Bs(
          e.m5Enabled
        )}px;\n    height: ${Bs(
          e.m5Enabled
        )}px;\n    border-radius: 50%;\n    background: ${
          e.colors.primaryColor
        };\n    cursor: pointer;\n    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.06), 0 2px 32px 0 rgba(0, 0, 0, 0.16);\n    transition: transform 167ms cubic-bezier(0.33, 0.00, 0.00, 1.00);\n    box-sizing: content-box;\n  }\n\n  ${
          e.m5Enabled
            ? "\n        .intercom-lightweight-app-launcher:hover {\n          transition: transform 250ms cubic-bezier(0.33, 0.00, 0.00, 1.00);\n          transform: scale(1.1)\n        }\n\n        .intercom-lightweight-app-launcher:active {\n          transform: scale(0.85);\n          transition: transform 134ms cubic-bezier(0.45, 0, 0.2, 1);\n        }\n      "
            : ""
        }\n\n\n  .intercom-lightweight-app-launcher:focus {\n    outline: none;\n\n    ${
          e.accessibility.tabNavigation
            ? `box-shadow: inset 0 0 0 5px ${(({ accessibility: e }) =>
                Us.a[e.accessibilityTheme])(e)};`
            : ""
        }\n  }\n\n  .intercom-lightweight-app-launcher-icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: ${Bs(
          e.m5Enabled
        )}px;\n    height: ${Bs(
          e.m5Enabled
        )}px;\n    transition: transform 100ms linear, opacity 80ms linear;\n  }\n\n  .intercom-lightweight-app-launcher-icon-open {\n    ${
          e.isMessengerOpen && !e.hideLightweightAppMessenger
            ? "\n        opacity: 0;\n        transform: rotate(30deg) scale(0);\n      "
            : "\n        opacity: 1;\n        transform: rotate(0deg) scale(1);\n      "
        }\n  }\n\n  .intercom-lightweight-app-launcher-icon-open svg {\n    width: ${
          e.m5Enabled ? zs.b : 28
        }px;\n    height: ${
          e.m5Enabled ? zs.b : 32
        }px;\n  }\n\n  .intercom-lightweight-app-launcher-icon-open svg path {\n    fill: ${
          e.colors.launcherIconColor
        };\n  }\n\n  .intercom-lightweight-app-launcher-icon-self-serve {\n    ${
          e.isMessengerOpen && !e.hideLightweightAppMessenger
            ? "\n        opacity: 0;\n        transform: rotate(30deg) scale(0);\n      "
            : "\n        opacity: 1;\n        transform: rotate(0deg) scale(1);\n      "
        }\n  }\n\n  .intercom-lightweight-app-launcher-icon-self-serve svg {\n    height: ${
          Bs(e.m5Enabled) - 4
        }px;\n  }\n\n  .intercom-lightweight-app-launcher-icon-self-serve svg path {\n    fill: ${
          e.colors.launcherIconColor
        };\n  }\n\n  .intercom-lightweight-app-launcher-custom-icon-open {\n    max-height: ${
          e.m5Enabled ? zs.b : 36
        }px;\n    max-width: ${e.m5Enabled ? zs.b : 36}px;\n\n    ${
          e.isMessengerOpen && !e.hideLightweightAppMessenger
            ? "\n        opacity: 0;\n        transform: rotate(30deg) scale(0);\n      "
            : "\n        opacity: 1;\n        transform: rotate(0deg) scale(1);\n      "
        }\n  }\n\n  .intercom-lightweight-app-launcher-icon-minimize {\n    ${
          e.isMessengerOpen && !e.hideLightweightAppMessenger
            ? "\n        opacity: 1;\n        transform: rotate(0deg) scale(1);\n      "
            : "\n        opacity: 0;\n        transform: rotate(-60deg) scale(0);\n      "
        }\n  }\n\n  .intercom-lightweight-app-launcher-icon-minimize svg path {\n    fill: ${
          e.colors.launcherIconColor
        };\n  }\n\n  .intercom-lightweight-app-messenger {\n    position: fixed;\n    z-index: 2147483003;\n    overflow: hidden;\n    background-color: white;\n    animation: intercom-lightweight-app-messenger 250ms cubic-bezier(0, 1.2, 1, 1);\n    transform-origin: ${
          e.isMobile && e.isCompact ? "bottom" : "bottom right"
        };\n    height: ${Hs(e)};\n    ${
          e.isMobile
            ? `\n        ${
                e.isCompact ? "" : "top: 0;"
              }\n        left: 0;\n        right: 0;\n        bottom: 0;\n      `
            : `\n        width: ${
                ((t = e.m5Enabled), (n = e.isCompact), n ? 300 : t ? 400 : 376)
              }px;\n        height: ${Hs(
                e
              )};\n        max-height: 704px;\n        min-height: 250px;\n        ${
                e.customization.alignment
              }: ${e.customization.horizontalPadding}px;\n        bottom: ${Vs(
                e
              )}px;\n        box-shadow: 0 5px 40px rgba(0,0,0,0.16);\n      `
        }\n\n    border-radius: ${
          e.m5Enabled ? "15px" : "8px"
        };\n  }\n\n  .intercom-lightweight-app-messenger-header {\n    height: ${((
          e,
          t
        ) => (t ? 48 : e ? 64 : 75))(
          e.m5Enabled,
          e.isCompact
        )}px;\n    border-bottom: ${
          e.isCompact ? "rgba(0,0,0,0.06) solid 1px" : "none"
        };\n    background: ${((e) =>
          e.isCompact
            ? "white"
            : e.m5Enabled
            ? e.colors.secondaryColor
            : `linear-gradient(\n      135deg,\n      ${e.colors.gradientStartColor} 0%,\n      ${e.colors.gradientEndColor} 100%\n    );`)(
          e
        )}\n  }\n\n  .intercom-lightweight-app-messenger-footer{\n    position:absolute;\n    bottom:0;\n    width: 100%;\n    min-height: 81px;\n    background: #fff;\n    font-size: 14px;\n    line-height: 21px;\n    border-top: 1px solid rgba(0, 0, 0, 0.05);\n    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.05);\n  }\n\n  @media print {\n    .intercom-lightweight-app {\n      display: none;\n    }\n  }\n`;
        var t, n;
      },
      $s = n(14);
    const Gs = (e, t) => {
        const {
            onLauncherClick: n,
            onLauncherHover: r,
            launcherLogoUrl: i,
            allowSelfServeIcon: o,
          } = t,
          s = Js(t),
          c = e.document.createElement("div");
        c.addEventListener("click", n, !0),
          c.addEventListener("mouseover", r, !0),
          c.addEventListener("keydown", s, !0),
          c.setAttribute(
            "class",
            "intercom-lightweight-app-launcher intercom-launcher"
          ),
          c.setAttribute("role", "button"),
          c.setAttribute("tabindex", "0"),
          c.setAttribute("aria-label", Object($s.e)("open_intercom_messenger")),
          c.setAttribute("aria-live", "polite");
        const a = e.document.createElement("div");
        if (
          (a.setAttribute(
            "class",
            "intercom-lightweight-app-launcher-icon intercom-lightweight-app-launcher-icon-open"
          ),
          i)
        ) {
          const t = e.document.createElement("img");
          t.setAttribute("src", i),
            t.setAttribute("alt", ""),
            t.setAttribute(
              "class",
              "intercom-lightweight-app-launcher-custom-icon-open"
            ),
            a.appendChild(t);
        } else
          o
            ? (a.setAttribute(
                "class",
                "intercom-lightweight-app-launcher-icon intercom-lightweight-app-launcher-icon-self-serve"
              ),
              (a.innerHTML =
                '<svg aria-hidden="true" viewBox="1 1 60 60"><path d="M27.765 42.244c-8.614 0-15.622-7.008-15.622-15.622S19.151 11 27.765 11s15.622 7.008 15.622 15.622-7.007 15.622-15.622 15.622zm0-28.398c-7.045 0-12.775 5.73-12.775 12.775s5.73 12.775 12.775 12.775 12.775-5.73 12.775-12.775-5.73-12.775-12.775-12.775z"/><path d="M34.869 39.146l4.014-3.738 9.286 9.114a3.164 3.164 0 01-.07 4.562l-.071.066a3.163 3.163 0 01-4.561-.257l-8.598-9.747zM27.77 34.173c-2.882 0-5.412-.876-7.656-2.526a1.002 1.002 0 01-.35-.81c.008-.461.445-.969 1.02-.959.284.005.493.153.713.308 1.837 1.302 3.832 1.971 6.275 1.971 1.875 0 4.492-.476 6.314-2.118a.98.98 0 01.638-.261.92.92 0 01.686.241c.222.209.33.527.336.735a1.02 1.02 0 01-.318.775c-1.333 1.237-4.262 2.644-7.658 2.644z"/></svg>\n'))
            : (a.innerHTML =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 32"><path d="M28 32s-4.714-1.855-8.527-3.34H3.437C1.54 28.66 0 27.026 0 25.013V3.644C0 1.633 1.54 0 3.437 0h21.125c1.898 0 3.437 1.632 3.437 3.645v18.404H28V32zm-4.139-11.982a.88.88 0 00-1.292-.105c-.03.026-3.015 2.681-8.57 2.681-5.486 0-8.517-2.636-8.571-2.684a.88.88 0 00-1.29.107 1.01 1.01 0 00-.219.708.992.992 0 00.318.664c.142.128 3.537 3.15 9.762 3.15 6.226 0 9.621-3.022 9.763-3.15a.992.992 0 00.317-.664 1.01 1.01 0 00-.218-.707z"/></svg>');
        c.appendChild(a);
        const u = e.document.createElement("div");
        return (
          u.setAttribute(
            "class",
            "intercom-lightweight-app-launcher-icon intercom-lightweight-app-launcher-icon-minimize"
          ),
          (u.innerHTML =
            '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.601 8.39897C18.269 8.06702 17.7309 8.06702 17.3989 8.39897L12 13.7979L6.60099 8.39897C6.26904 8.06702 5.73086 8.06702 5.39891 8.39897C5.06696 8.73091 5.06696 9.2691 5.39891 9.60105L11.3989 15.601C11.7309 15.933 12.269 15.933 12.601 15.601L18.601 9.60105C18.9329 9.2691 18.9329 8.73091 18.601 8.39897Z" fill="white"/>\n</svg>\n'),
          c.appendChild(u),
          c
        );
      },
      Ws = (e, t, n, r, i, o) => (s) => {
        if (
          ((o.textContent = Fs(s)),
          t.locale !== s.locale && Object($s.d)(s.locale),
          !t.isAppActive && s.isAppActive
            ? e.document.body.appendChild(n)
            : t.isAppActive && !s.isAppActive && e.document.body.removeChild(n),
          !t.isLauncherEnabled && s.isLauncherEnabled)
        ) {
          const t = Gs(e, s);
          n.appendChild(t);
        } else if (t.isLauncherEnabled && !s.isLauncherEnabled) {
          const t = ((e) =>
            e.document.querySelector(".intercom-lightweight-app-launcher"))(e);
          t && n.contains(t) && n.removeChild(t);
        }
        t.isMessengerOpen || !s.isMessengerOpen || s.hideLightweightAppMessenger
          ? t.isMessengerOpen &&
            !s.isMessengerOpen &&
            (n.removeChild(r), n.removeChild(i))
          : (n.appendChild(r), n.appendChild(i)),
          (t = s);
      },
      qs = (e, t) => () => {
        const { body: n } = e.document;
        t && n.contains(t) && n.removeChild(t);
      },
      Js =
        ({ onLauncherKeypress: e }) =>
        ({ keyCode: t }) => {
          (t !== ts.a.ENTER && t !== ts.a.SPACE) || e();
        },
      Ks =
        ({ onTabKeyDown: e }) =>
        ({ keyCode: t }) => {
          t === ts.a.TAB && e();
        },
      Zs =
        ({ onClick: e }) =>
        () => {
          e();
        };
    var Ys = (e, t) => {
        const {
          isAppActive: n,
          isLauncherEnabled: r,
          isMessengerOpen: i,
          locale: o,
          isCompact: s,
        } = t;
        void 0 !== o && Object($s.d)(o);
        const c = Ks(t),
          a = Zs(t);
        e.document.addEventListener("keydown", c, !0),
          e.document.addEventListener("click", a, !1);
        const u = e.document.createElement("div");
        if (
          (u.setAttribute("class", "intercom-lightweight-app"),
          n && e.document.body.appendChild(u),
          r)
        ) {
          const n = Gs(e, t);
          u.appendChild(n);
        }
        const l = e.document.createElement("div");
        l.setAttribute(
          "class",
          "intercom-lightweight-app-messenger intercom-messenger"
        ),
          l.setAttribute("aria-live", "polite");
        const d = e.document.createElement("div");
        if (
          (d.setAttribute("class", "intercom-lightweight-app-messenger-header"),
          l.appendChild(d),
          t.m5Enabled && !s)
        ) {
          const t = e.document.createElement("div");
          t.setAttribute("class", "intercom-lightweight-app-messenger-footer"),
            l.appendChild(t);
        }
        const p = e.document.createElement("div");
        p.setAttribute("class", "intercom-lightweight-app-gradient"),
          i && (u.appendChild(l), u.appendChild(p));
        const f = e.document.createElement("style");
        f.setAttribute("id", "intercom-lightweight-app-style"),
          f.setAttribute("type", "text/css");
        const b = e.document.createTextNode(Fs(t));
        f.appendChild(b), u.appendChild(f);
        return {
          updateLightweightApp: Ws(e, t, u, l, p, b),
          removeLightweightApp: qs(e, u),
        };
      },
      Qs = Object(y.createSelector)(
        [(e) => e.app],
        (e) =>
          e.isBooted || e.bootFailed || (e.isBooting && e.isInstantBootEnabled)
      ),
      Xs = Object(y.createSelector)([(e) => e.user], (e) =>
        e ? e.locale : void 0
      );
    const ec = (e) => ({ type: I.xd, isActive: e });
    var tc = n(110);
    function nc(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function rc(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? nc(Object(n), !0).forEach(function (t) {
              ic(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : nc(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function ic(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    const oc = Object(y.createStructuredSelector)({
        isAppActive: Qs,
        m5Enabled: Do.i,
        isLauncherEnabled: d.a,
        isMessengerOpen: Rs.a,
        customization: Ms.b,
        accessibility: xs,
        colors: Ns,
        launcherLogoUrl: c.s,
        allowSelfServeIcon: c.c,
        locale: Xs,
        hideLightweightAppMessenger: c.m,
        isCompact: Do.h,
      }),
      sc = (e) => {
        const t = Object(Do.e)(e.getState());
        Object(D.e)("clicked", "launcher", "in_app", "", {
          is_messenger_open: !1,
          is_custom_launcher: !1,
          is_borderless_open: !1,
          space_opened: t,
        }),
          e.dispatch(Object(ko.m)());
      };
    var cc = (e, t) => {
        const n = ((e, t) => ({
            isMobile: Object(a.c)(),
            onLauncherClick: () => {
              const { tabNavigation: e } = t.getState().accessibility;
              e && t.dispatch(Object(tc.b)(!1)), sc(t);
            },
            onLauncherHover: () => {
              t.dispatch(Object(pr.c)()), t.dispatch(Object(pr.d)());
            },
            onLauncherKeypress: () => {
              sc(t);
            },
            onClick: () => {
              const { tabNavigation: e } = t.getState().accessibility;
              e && t.dispatch(Object(tc.b)(!1));
            },
            onTabKeyDown: () => {
              const { tabNavigation: e } = t.getState().accessibility;
              e || t.dispatch(Object(tc.b)(!0));
            },
          }))(0, t),
          r = oc(t.getState()),
          i = rc(rc({}, r), n),
          { updateLightweightApp: o, removeLightweightApp: s } = Ys(e, i);
        t.dispatch(ec(!0));
        const c = t.subscribe(() => {
          const e = oc(t.getState());
          if (e === r) return;
          const i = rc(rc({}, e), n);
          o(i);
        });
        return () => {
          c(), s(e), t.dispatch(ec(!1));
        };
      },
      ac = n(284),
      uc = n(145);
    const lc = Object(y.createSelector)(
        [(e) => e.app.isMessengerOpen],
        (e) => e
      ),
      dc = Object(y.createSelector)([M.a], (e) => e.length > 0),
      pc = Object(y.createSelector)([x.a], (e) => e.length > 0),
      fc = Object(y.createSelector)([ac.a], (e) => e.length > 0),
      bc = Object(y.createSelector)(
        [(e) => e.install.isInstallModeOpen],
        (e) => e
      ),
      hc = Object(y.createSelector)([(e) => e.banners], (e) => e.length > 0),
      gc = Object(y.createSelector)([uc.b], (e) => e),
      mc = Object(y.createSelector)(
        [(e) => e.launcherDiscoveryMode.isLauncherDiscoveryModeOpening],
        (e) => e
      ),
      vc = Object(y.createSelector)(
        [(e) => e.tour.activeTour],
        (e) => null != e
      ),
      yc = Object(y.createSelector)([(e) => e.survey], (e) => !!e);
    var Oc = Object(y.createSelector)(
        [lc, dc, pc, fc, bc, hc, gc, mc, vc, yc],
        (e, t, n, r, i, o, s, c, a, u) =>
          Boolean(e || t || n || r || i || o || s || c || a || u)
      ),
      _c = n(257);
    const wc = async (e = 3) => {
        try {
          const t = Date.now(),
            r = await Ts()(
              async () =>
                await Promise.all([n.e(1), n.e(20), n.e(0), n.e(2)]).then(
                  n.bind(null, 1045)
                ),
              { retries: e }
            ),
            i = Date.now();
          return Object(D.f)("load_app_bundle_duration", i - t), r.default;
        } catch (e) {
          throw (Object(D.c)("load_app_bundle_failed"), e);
        }
      },
      jc = async (e = 3) => {
        try {
          return (
            await Ts()(
              async () =>
                await Promise.all([n.e(1), n.e(59), n.e(0), n.e(18)]).then(
                  n.bind(null, 1047)
                ),
              { retries: e }
            )
          ).default;
        } catch (e) {
          throw e;
        }
      },
      Cc = async (e) => {
        try {
          const n = e.getState(),
            { launcherLogoUrl: r } = n.app;
          if (!r) return;
          await ((t = r),
          new Promise((e, n) => {
            const r = new Image();
            r.addEventListener("load", () => e(r)),
              r.addEventListener("error", () => n(r)),
              (r.src = t);
          }));
        } catch (e) {
          Object(D.c)("load_launcher_image_failed");
        }
        var t;
      };
    var Sc = async (e, t) => {
      await Cc(t);
      const n = cc(e, t);
      let r,
        i,
        o = !0;
      return (
        ((e) =>
          new Promise((t) => {
            const n = e.subscribe(() => {
              Object(_c.b)(e.getState()) && (n(), t());
            });
          }))(t).then(async () => {
          const n = await jc();
          r = n(e, t);
        }),
        ((e) =>
          new Promise((t) => {
            const n = e.subscribe(() => {
              Oc(e.getState()) && (n(), t());
            });
          }))(t).then(async () => {
          if (!o) return;
          const [, r] = await Promise.all([
            ((s = 250),
            new Promise((e) => {
              setTimeout(e, s);
            })),
            wc(),
          ]);
          var s;
          (i = await r(e, t)), n();
        }),
        () => {
          o && (i ? i() : n(), r && r(), (o = !1));
        }
      );
    };
    var Ec = class app_App {
        constructor(e) {
          (this.destroySession = (e) => {
            this.session.destroy(e),
              (this.session = new Ps(this.window)),
              this.renderApp && this.renderApp.then((e) => e()),
              (this.renderApp = void 0);
          }),
            (this.window = e),
            (this.session = new Ps(this.window, null, this.destroySession));
        }
        createOrUpdateUser(e, t) {
          const n = this.session.createOrUpdateUser(e, t);
          return (
            this.renderApp ||
              (this.renderApp = Sc(this.window, this.session.store)),
            n
          );
        }
        openOnBoot() {
          this.session.openOnBoot();
        }
        createCustomizationOverride(e) {
          return this.session.createCustomizationOverride(e);
        }
        openMessenger() {
          this.session.openMessenger();
        }
        openMessengerFromAPI() {
          this.session.openMessenger();
          const { user: e } = this.session.store.getState();
          Object(D.h)(e, "opened", "messenger", "in_app", "from_api");
        }
        showArticle(e) {
          this.session.showArticle(e);
        }
        showNews(e) {
          this.session.showNews(e);
        }
        showSpace(e) {
          this.session.showSpace(e);
        }
        closeMessenger() {
          this.session.closeMessenger();
        }
        closeMessengerFromAPI() {
          this.session.closeMessenger();
          const { user: e } = this.session.store.getState();
          Object(D.h)(e, "closed", "messenger", "messenger", "from_api");
        }
        showConversations() {
          this.session.showConversations();
        }
        showNewConversation(e) {
          this.session.showNewConversation(e);
        }
        sendMessage(e) {
          this.session.sendMessage(e);
        }
        showConversation(e) {
          this.session.showConversation(e);
        }
        startSurvey(e) {
          const t = parseInt(e, 10);
          if (isNaN(t))
            return void Object($r.a)(
              "Invalid surveyId passed to startSurvey. surveyId must be a number"
            );
          this.session.startSurvey(t);
          const { user: n } = this.session.store.getState();
          Object(D.h)(n, "requested", "messenger", "survey", "from_api", {
            ruleset_id: t,
          });
        }
        startChecklist(e) {
          const t = parseInt(e, 10);
          isNaN(t)
            ? Object($r.a)(
                "Invalid checklistId passed to startChecklist. ChecklistId must be a number"
              )
            : this.session.startChecklist(t);
        }
        startTour(e) {
          const t = parseInt(e, 10);
          if (isNaN(t))
            return void Object($r.a)(
              "Invalid tourId passed to startTour. tourId must be a number"
            );
          this.session.startTour(t);
          const { user: n } = this.session.store.getState();
          Object(D.h)(n, "requested", "messenger", "tour", "from_api", {
            tour_id: t,
          });
        }
        createEvent(e, t) {
          this.session.createEvent(e, t);
        }
        onMessengerOpen(e) {
          this.session.onMessengerOpen(e);
        }
        onMessengerClose(e) {
          this.session.onMessengerClose(e);
        }
        onUserEmailSupplied(e) {
          this.session.onUserEmailSupplied(e);
        }
        onUnreadConversationCountChange(e) {
          this.session.onUnreadConversationCountChange(e);
        }
        getArticleReaction(e, t, n) {
          this.session.getArticleReaction(e, t, n);
        }
        createArticleReaction(e, t, n) {
          this.session.createArticleReaction(e, t, n);
        }
        previewInboundCustomBot(e) {
          this.session.previewInboundCustomBot(e);
        }
        previewOutboundCustomBot(e) {
          this.session.previewOutboundCustomBot(e);
        }
        previewWorkflow(e) {
          this.session.previewWorkflow(e);
        }
        createMetric(e, t) {
          this.session.createMetric(e, t);
        }
        getVisitorId() {
          return this.session.getVisitorId();
        }
        enterTourPreviewMode(e) {
          return this.session.enterTourPreviewMode(e);
        }
        exitTourPreviewMode() {
          return this.session.exitTourPreviewMode();
        }
        previewSurvey(e) {
          return this.session.previewSurvey(e);
        }
        fetchTooltips(e) {
          try {
            const t = 864e5,
              n = Z.a.get("lastTooltipsReceivedAt");
            if (!n || n < new Date().getTime() - t) return;
            return this.session.fetchTooltips(e);
          } catch (e) {
            return;
          }
        }
        previewTooltipGroup(e) {
          return this.session.previewTooltipGroup(e);
        }
        exitPreviewTooltipGroup() {
          return this.session.exitPreviewTooltipGroup();
        }
        handleIntersectionBoot() {
          this.session.handleIntersectionBoot();
        }
        trigger(e) {
          if (this.session.isReady) return this.session.trigger(e);
          Object($r.a)(
            "Intercom is not ready. Aborting MessengerTrigger request"
          );
        }
        triggerBot(e) {
          if (this.session.isReady) return this.session.triggerBot(e);
        }
      },
      Ic = n(5),
      Ac = n(163),
      Pc = n(227);
    function kc(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Tc(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? kc(Object(n), !0).forEach(function (t) {
              Rc(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : kc(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Rc(e, t, n) {
      return (
        (t = (function (e) {
          var t = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return ("string" === t ? String : Number)(e);
          })(e, "string");
          return "symbol" == typeof t ? t : String(t);
        })(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function Mc(e) {
      return (...t) => {
        const n = (t = {}, n = () => {}) => {
            t.api_base && Object(Ic.d)("api_base", t.api_base);
            const r = e.session.getSettings();
            Tc(Tc({}, r), t).disabled ||
              (r.disabled && e.session.setSetting("disabled", !1),
              e.fetchTooltips(t),
              e.createCustomizationOverride(t),
              e.createOrUpdateUser(t, "apiBoot").then(() => n()),
              e.openOnBoot());
          },
          r = {
            boot(e = {}) {
              n(e);
            },
            update(t) {
              e.createCustomizationOverride(t),
                e.createOrUpdateUser(t, "apiUpdate");
            },
            shutdown(t = !0) {
              e.destroySession(t);
            },
            show() {
              e.openMessengerFromAPI();
            },
            showSpace(t) {
              e.showSpace(t);
            },
            showArticle(t) {
              e.showArticle(t);
            },
            showNews(t) {
              e.showNews(t);
            },
            showMessages() {
              e.showConversations();
            },
            showNewMessage(t) {
              e.showNewConversation(t);
            },
            startSurvey(t) {
              e.startSurvey(t);
            },
            startChecklist(t) {
              e.startChecklist(t);
            },
            startTour(t) {
              e.startTour(t);
            },
            hide() {
              e.closeMessengerFromAPI();
            },
            trackEvent(t, n) {
              e.createEvent(t, n);
            },
            onShow(t) {
              e.onMessengerOpen(t);
            },
            onHide(t) {
              e.onMessengerClose(t);
            },
            onUnreadCountChange(t) {
              e.onUnreadConversationCountChange(t);
            },
            onUserEmailSupplied(t) {
              e.onUserEmailSupplied(t);
            },
            trigger: (t) => e.trigger(t),
            triggerBot: (t) => e.triggerBot(t),
            getVisitorId: () => e.getVisitorId(),
            version: () => "40aa21812316e8710032e9f8c8acd0e01be0964f",
            "private:getArticleReaction": (t, n, r) => {
              e.getArticleReaction(t, n, r);
            },
            "private:createMetric": (t, n) => {
              e.createMetric(t, n);
            },
            "private:createArticleReaction": (t, n, r) => {
              e.createArticleReaction(t, n, r);
            },
            "private:enterTourPreviewMode": (t) => {
              e.enterTourPreviewMode(t);
            },
            "private:exitTourPreviewMode": () => {
              e.exitTourPreviewMode();
            },
            "private:bootPreviewOutboundCustomBot": (e = {}, t = () => {}) => {
              n(e, t);
            },
            "private:bootWithCallback": (e = {}, t = () => {}) => {
              n(e, t);
            },
            "private:previewInboundCustomBot": (t) => {
              e.previewInboundCustomBot(t);
            },
            "private:previewOutboundCustomBot": (t) => {
              e.previewOutboundCustomBot(t);
            },
            "private:previewWorkflow": (t) => {
              e.previewWorkflow(t);
            },
            "private:showConversation": (t) => {
              e.showConversation(t);
            },
            "private:previewSurvey": (t) => {
              e.previewSurvey(t);
            },
            "private:handleIntersectionBooted": () => {
              e.handleIntersectionBoot();
            },
            "private:previewTooltipGroup": (t) => {
              Object(Ac.b)("Previewing tooltip group", t),
                e.previewTooltipGroup(t);
            },
            "private:exitPreviewTooltipGroup": () => {
              e.exitPreviewTooltipGroup();
            },
            "private:bootConversationDemoMode": (t = {}) => {
              Object(Pc.b)(), n(t), e.showNewConversation();
            },
            "private:sendMessage": (t) => {
              e.sendMessage(t);
            },
          },
          i = t[0];
        if (!i || !r[i]) return;
        return e.session.getSettings().disabled && "boot" !== i
          ? void 0
          : r[i](...t.slice(1));
      };
    }
    function xc(e, t) {
      (t.Intercom = e), (t.Intercom.booted = !0);
    }
    function Lc(e) {
      const t = (function (e) {
        return e.Intercom;
      })(e);
      return (t && t.q) || [];
    }
    function Dc(e) {
      return Lc(e).some((e) => "boot" === e[0] || "shutdown" === e[0]);
    }
    function Nc(e, t) {
      const n = Lc(t);
      for (; n.length; ) e(...n.shift());
    }
    var Uc = n(142),
      zc = n(89),
      Bc = n.n(zc);
    const Vc = n(228),
      Hc = "intercom-snippet__intersection-mode",
      Fc = "intersection-frame",
      $c = "intersection-container";
    var Gc = n(38);
    Object(Gc.g)(window.parent),
      Object(r.a)(window),
      (function (e) {
        if (void 0 !== e)
          try {
            const t = new e.CustomEvent("test", { cancelable: !0 });
            if ((t.preventDefault(), !0 !== t.defaultPrevented))
              throw new Error("Could not prevent default");
          } catch (t) {
            const n = function (e, t) {
              ((t = t || {}).bubbles = !!t.bubbles),
                (t.cancelable = !!t.cancelable);
              const n = document.createEvent("CustomEvent");
              n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail);
              const r = n.preventDefault;
              return (
                (n.preventDefault = function () {
                  r.call(this);
                  try {
                    Object.defineProperty(this, "defaultPrevented", {
                      get: function () {
                        return !0;
                      },
                    });
                  } catch (e) {
                    this.defaultPrevented = !0;
                  }
                }),
                n
              );
            };
            (n.prototype = e.Event.prototype), (e.CustomEvent = n);
          }
      })(window),
      (window.requestAnimationFrame =
        window.parent.requestAnimationFrame || window.requestAnimationFrame);
    const Wc = parent;
    Object(yi.a)(window);
    const qc = new Ec(Wc);
    Object(yi.b)(qc.session.store);
    const Jc = Mc(qc),
      Kc = Dc(Wc);
    Nc(Jc, Wc),
      xc(Jc, Wc),
      Kc || Jc("boot"),
      new (class intersection_Intersection {
        constructor(e) {
          (this.intercomDomains = [
            "http://intercom.test",
            "http://app.intercom.test",
            "https://app.intercom.com",
            "https://app.intercom.io",
            "https://app.eu.intercom.com",
            "https://app.au.intercom.com",
            "https://intercomrades.intercom.io",
            "https://intercomrades.intercom.com",
            "https://intercomrades.eu.intercom.com",
            "https://intercomrades.au.intercom.com",
            "http://intercomrades.intercom.test",
          ]),
            (this.window = e),
            this.window === this.window.parent ||
              this.window.opener ||
              (this.window.opener = this.window.parent),
            this.setupIntersection();
        }
        setupIntersection() {
          this.openerExists() &&
            (this.modeExists()
              ? this.injectIntersection()
              : (this.setupMessageListener(),
                this.sendMessageToOpener({ type: "intercom-snippet__ready" })));
        }
        sendMessageToOpener(e) {
          Object(Uc.i)(this.window.opener) &&
            this.window.opener.postMessage(e, "*");
        }
        openerExists() {
          return !!this.window.opener;
        }
        modeExists() {
          return !!Z.b.get(Hc);
        }
        setupMessageListener() {
          this.window.addEventListener(
            "message",
            this.bootIntersection.bind(this)
          );
        }
        getMode() {
          return Z.b.get(Hc);
        }
        getAppId() {
          return Z.b.get("intercom-snippet__intersection-app-id");
        }
        getLocale() {
          return Z.b.get("intercom-snippet__intersection-locale");
        }
        bootIntersection(e) {
          -1 !== this.intercomDomains.indexOf(e.origin) &&
            "intercom-snippet__boot-intersection" === e.data.type &&
            (this.removeMessageListener(),
            this.saveOpenerOrigin(e.origin),
            this.injectIntersection(e.data.mode, e.data.appId, e.data.locale));
        }
        removeMessageListener() {
          this.window.removeEventListener(
            "message",
            this.bootIntersection.bind(this)
          );
        }
        saveOpenerOrigin(e) {
          Z.b.set("intercom-snippet__intersection-opener-origin", e);
        }
        injectIntersection(e, t, n) {
          this.window.document.getElementById($c) ||
            (this.injectIntersectionFrame(), this.injectEmberApp(e, t, n));
        }
        injectIntersectionFrame() {
          const e = this.window.document.createElement("div"),
            t = this.window.document.createElement("iframe");
          (e.id = $c),
            (t.id = Fc),
            (t.frameBorder = 0),
            e.appendChild(t),
            this.window.document.body.insertAdjacentElement("beforeend", e);
        }
        createScriptTag(e) {
          const t = document.createElement("script");
          return (
            (t.type = "text/javascript"), (t.charset = "utf-8"), (t.src = e), t
          );
        }
        injectFrameTemplate(
          e,
          t = this.getMode(),
          n = this.getAppId(),
          r = this.getLocale()
        ) {
          const i = Bc()(t),
            o = Bc()(n),
            s = Bc()(r);
          e.open(),
            e.write(
              `\n    <!DOCTYPE html>\n      <head>\n        <title>Intersection </title>\n        <meta name="intersection-mode" content=${i}>\n        <meta name="intersection-appId" content=${o}>\n        <meta name="intersection-locale" content=${s}>\n      </head>\n      <body></body>\n    </html>\n    `
            ),
            e.close();
        }
        injectIntersectionScripts(e) {
          const t = this.createScriptTag(Vc.intersection_js),
            n = this.createScriptTag(Vc.intersection_styles);
          e.contentWindow.document.head.appendChild(t),
            e.contentWindow.document.head.appendChild(n);
        }
        injectEmberApp(e, t, n) {
          const r = this.window.document.getElementById(Fc);
          this.injectFrameTemplate(r.contentDocument, e, t, n),
            this.injectIntersectionScripts(r);
        }
      })(Wc);
  },
]);
