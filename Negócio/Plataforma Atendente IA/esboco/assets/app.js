/* Atende: esboço navegável. Só visual, sem sistema por trás. */
(function () {
  "use strict";

  /* ---------- Ícones de linha (24x24) ---------- */
  var ICONES = {
    "mensagem": '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.7-.8L3 21l1.9-4.6A8.4 8.4 0 1 1 21 11.5z"/>',
    "telefone": '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2z"/>',
    "microfone": '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/>',
    "microfone-off": '<path d="M2 2l20 20"/><path d="M18.9 13.6A7 7 0 0 0 19 12v-2"/><path d="M5 10v2a7 7 0 0 0 12 5"/><path d="M15 9.3V5a3 3 0 0 0-5.9-.7"/><path d="M9 9v3a3 3 0 0 0 5.1 2.1"/><path d="M12 19v3"/>',
    "alto-falante": '<path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a9 9 0 0 1 0 14"/>',
    "teclado": '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',
    "casa": '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
    "pedidos": '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M9 12h6M9 16h6"/>',
    "sacola": '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
    "pessoas": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
    "pessoa": '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    "robo": '<rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 8V4"/><circle cx="12" cy="3" r="1"/><path d="M9 14h.01M15 14h.01"/><path d="M9.5 17.5h5"/><path d="M2 13v3M22 13v3"/>',
    "brilho": '<path d="M12 3l1.9 5.6L19.5 10.5l-5.6 1.9L12 18l-1.9-5.6L4.5 10.5l5.6-1.9z"/><path d="M19 17l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/>',
    "grafico": '<path d="M3 3v18h18"/><rect x="7" y="11" width="3" height="7" rx="1"/><rect x="12" y="7" width="3" height="11" rx="1"/><rect x="17" y="13" width="3" height="5" rx="1"/>',
    "calendario": '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    "ajustes": '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3"/><path d="M1 14h6M9 8h6M17 16h6"/>',
    "menu": '<path d="M4 6h16M4 12h16M4 18h16"/>',
    "mais-pontos": '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
    "seta-direita": '<path d="m9 18 6-6-6-6"/>',
    "seta-baixo": '<path d="m6 9 6 6 6-6"/>',
    "seta-esquerda": '<path d="m15 18-6-6 6-6"/>',
    "voltar": '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
    "fechar": '<path d="M18 6 6 18M6 6l12 12"/>',
    "enviar": '<path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>',
    "tocar": '<path d="M6 4l14 8-14 8z"/>',
    "camera": '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z"/><circle cx="12" cy="13" r="3"/>',
    "imagem": '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',
    "mais": '<path d="M12 5v14M5 12h14"/>',
    "buscar": '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    "alerta": '<circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>',
    "duvida": '<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
    "sino": '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/>',
    "check": '<path d="M20 6 9 17l-5-5"/>',
    "check-duplo": '<path d="M18 6 7 17l-4-4"/><path d="m22 10-7.5 7.5L13 16"/>',
    "relogio": '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    "raio": '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
    "escudo": '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    "lapis": '<path d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/>',
    "filtro": '<path d="M22 3H2l8 9.5V19l4 2v-8.5z"/>',
    "compartilhar": '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="m16 6-4-4-4 4"/><path d="M12 2v13"/>',
    "lixeira": '<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
    "info": '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    "olho": '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    "estrela": '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
    "etiqueta": '<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z"/><path d="M7 7h.01"/>',
    "dinheiro": '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 12h.01M18 12h.01"/>',
    "mapa": '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    "repetir": '<path d="M3 12a9 9 0 0 1 15.5-6.3L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.5 6.3L3 16"/><path d="M3 21v-5h5"/>',
    "cerebro": '<path d="M12 5a3 3 0 1 0-5.9 1A3 3 0 0 0 4 9a3 3 0 0 0 1 5.8A3 3 0 0 0 8 19a3 3 0 0 0 4 1.5V5z"/><path d="M12 5a3 3 0 1 1 5.9 1A3 3 0 0 1 20 9a3 3 0 0 1-1 5.8 3 3 0 0 1-3 4.2 3 3 0 0 1-4 1.5V5z"/>',
    "sair": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
    "cadeado": '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    "bloquear": '<circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/>',
    "tesoura": '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.1 15.9"/><path d="M14.5 14.5 20 20"/><path d="M8.1 8.1 12 12"/>',
    "caixa": '<path d="m21 8-9-5-9 5v8l9 5 9-5z"/><path d="m3.3 7.5 8.7 5 8.7-5"/><path d="M12 22V12.5"/>',
    "pausa": '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',
    "mao": '<path d="M18 11V6a2 2 0 0 0-4 0v5"/><path d="M14 10V4a2 2 0 0 0-4 0v2"/><path d="M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-5.8-2.3L3 15.5a2 2 0 0 1 2.9-2.8L8 14.5"/>',
    "download": '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>'
  };

  function svgIcone(nome) {
    var d = ICONES[nome] || ICONES["alerta"];
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + d + "</svg>";
  }
  function pintarIcones(raiz) {
    (raiz || document).querySelectorAll("i[data-icone]").forEach(function (el) {
      if (el.firstChild) return;
      el.classList.add("ic");
      el.innerHTML = svgIcone(el.getAttribute("data-icone"));
    });
  }
  window.svgIcone = svgIcone;
  window.pintarIcones = pintarIcones;

  /* ---------- Fotos de produto (ilustrações de demonstração) ---------- */
  var FORMAS = {
    camisola: '<path d="M38 26 l-8 -12 M62 26 l8 -12" /><path d="M38 26 h24 c6 18 10 36 10 56 H28 c0 -20 4 -38 10 -56 z" /><path d="M42 26 c4 6 12 6 16 0" />',
    conjunto: '<path d="M22 40 c0 -14 14 -14 18 -4 c4 -10 18 -10 18 4 c0 10 -8 16 -18 18 c-10 -2 -18 -8 -18 -18 z"/><path d="M30 30 l-6 -14 M66 30 l6 -14"/><path d="M30 68 h36 l-6 18 c-6 4 -18 4 -24 0 z"/>',
    robe: '<path d="M30 20 h40 l8 22 -8 2 v40 H30 V44 l-8 -2 z"/><path d="M50 20 v64 M42 20 c3 8 13 8 16 0"/><path d="M22 42 l8 -2 M78 42 l-8 -2"/>',
    pijama: '<path d="M30 18 h40 l8 20 -8 2 v26 H30 V40 l-8 -2 z"/><path d="M34 70 h32 v16 H54 l-4 -8 -4 8 H34 z"/><path d="M43 18 c2 6 12 6 14 0"/>',
    calcinha: '<path d="M22 32 h56 l-4 12 c-8 16 -16 24 -24 36 c-8 -12 -16 -20 -24 -36 z"/><path d="M26 44 c10 2 18 6 24 12 c6 -6 14 -10 24 -12"/>',
    vestido: '<path d="M38 20 h24 l4 20 -4 2 c8 14 10 30 10 44 H28 c0 -14 2 -30 10 -44 l-4 -2 z"/><path d="M42 20 c3 6 13 6 16 0"/>'
  };
  function produtoSVG(tipo, cor, cor2) {
    cor = cor || "#9ab7d8"; cor2 = cor2 || "#f1efe7";
    var id = "g" + Math.random().toString(36).slice(2, 8);
    return (
      '<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ilustração de produto">' +
      '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + cor2 + '"/><stop offset="1" stop-color="' + cor + '" stop-opacity=".35"/></linearGradient></defs>' +
      '<rect width="100" height="100" fill="url(#' + id + ')"/>' +
      '<g fill="' + cor + '" fill-opacity=".9" stroke="#1b1b1a" stroke-opacity=".55" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round">' +
      (FORMAS[tipo] || FORMAS.camisola) + "</g></svg>"
    );
  }
  function pintarProdutos(raiz) {
    (raiz || document).querySelectorAll("[data-produto]").forEach(function (el) {
      if (el.firstChild) return;
      el.innerHTML = produtoSVG(el.getAttribute("data-produto"), el.getAttribute("data-cor"), el.getAttribute("data-cor2"));
    });
  }
  window.produtoSVG = produtoSVG;

  /* ---------- Faixa de demonstração e mapa das telas ---------- */
  var raiz = document.body.getAttribute("data-raiz") || "";
  var TELAS = [
    { g: "Para o cliente final" },
    { n: 1, t: "Página de venda", u: "index.html" },
    { n: 2, t: "Simulação do WhatsApp", u: "whatsapp.html" },
    { n: 3, t: "Simulação de ligação", u: "ligacao.html" },
    { g: "Painel do dono" },
    { n: 4, t: "Início", u: "painel/inicio.html" },
    { n: 5, t: "Pedidos", u: "painel/pedidos.html" },
    { n: 6, t: "Conversas", u: "painel/conversas.html" },
    { n: 7, t: "Catálogo", u: "painel/catalogo.html" },
    { n: 8, t: "Clientes", u: "painel/clientes.html" },
    { n: 9, t: "Minha atendente", u: "painel/atendente.html" },
    { n: 10, t: "Relatórios", u: "painel/relatorios.html" },
    { n: 11, t: "Agenda", u: "painel/agenda.html" }
  ];
  function montarFaixa() {
    if (document.body.hasAttribute("data-sem-faixa")) return;
    var faixa = document.createElement("div");
    faixa.className = "demo-faixa";
    faixa.innerHTML =
      '<span><strong>Demonstração.</strong> Dados fictícios<span class="longo"> do Ateliê Maria. Nada aqui é real</span>.</span>' +
      '<button type="button" data-abrir="mapa-telas"><i data-icone="mapa"></i>Mapa das telas</button>';
    document.body.insertBefore(faixa, document.body.firstChild);

    var veu = document.createElement("div");
    veu.className = "veu"; veu.id = "mapa-telas";
    var html = '<div class="folha" role="dialog" aria-label="Mapa das telas"><div class="folha-alca"></div><h2>Mapa das telas</h2><p class="sub">Esboço navegável. Clique para ir a cada tela.</p><div class="mapa-lista">';
    TELAS.forEach(function (t) {
      if (t.g) { html += '<div class="mapa-grupo">' + t.g + "</div>"; return; }
      html += '<a href="' + raiz + t.u + '"><span class="num">' + t.n + "</span>" + t.t + '<i data-icone="seta-direita"></i></a>';
    });
    html += '</div><div style="margin-top:16px"><button type="button" class="btn btn-secundario btn-bloco" data-fechar>Fechar</button></div></div>';
    veu.innerHTML = html;
    document.body.appendChild(veu);
  }

  /* ---------- Folhas, modais, avisos ---------- */
  function abrir(id) { var v = document.getElementById(id); if (v) { v.classList.add("aberto"); } }
  function fechar(v) { v.classList.remove("aberto"); }
  function fecharTodos() { document.querySelectorAll(".veu.aberto").forEach(fechar); }
  var avisoEl;
  function avisar(msg) {
    if (!avisoEl) { avisoEl = document.createElement("div"); avisoEl.className = "aviso"; document.body.appendChild(avisoEl); }
    avisoEl.innerHTML = svgIcone("check").replace("<svg", '<svg class="ic" style="width:18px;height:18px;stroke:#fff;fill:none;stroke-width:2"') + "<span>" + msg + "</span>";
    avisoEl.classList.add("visivel");
    clearTimeout(avisoEl._t);
    avisoEl._t = setTimeout(function () { avisoEl.classList.remove("visivel"); }, 2600);
  }
  window.abrirFolha = abrir; window.fecharFolhas = fecharTodos; window.avisar = avisar;

  document.addEventListener("click", function (e) {
    var alvo = e.target.closest("[data-abrir]");
    if (alvo) { e.preventDefault(); abrir(alvo.getAttribute("data-abrir")); return; }
    if (e.target.closest("[data-fechar]")) { fecharTodos(); return; }
    var veu = e.target.classList && e.target.classList.contains("veu") ? e.target : null;
    if (veu) { fechar(veu); return; }
    var av = e.target.closest("[data-aviso]");
    if (av) { avisar(av.getAttribute("data-aviso")); }
    var inter = e.target.closest(".interruptor");
    if (inter) { inter.setAttribute("aria-checked", inter.getAttribute("aria-checked") === "true" ? "false" : "true"); }
    var ficha = e.target.closest(".ficha[data-grupo]");
    if (ficha) {
      document.querySelectorAll('.ficha[data-grupo="' + ficha.getAttribute("data-grupo") + '"]').forEach(function (f) { f.setAttribute("aria-pressed", "false"); });
      ficha.setAttribute("aria-pressed", "true");
    }
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") fecharTodos(); });

  /* ---------- Painel: menu lateral e barra inferior ---------- */
  var NAV = [
    { id: "inicio", t: "Início", i: "casa" },
    { id: "pedidos", t: "Pedidos", i: "pedidos" },
    { id: "conversas", t: "Conversas", i: "mensagem" },
    { id: "catalogo", t: "Catálogo", i: "sacola" },
    { id: "clientes", t: "Clientes", i: "pessoas" },
    { id: "atendente", t: "Minha atendente", i: "robo" },
    { id: "relatorios", t: "Relatórios", i: "grafico" },
    { id: "agenda", t: "Agenda", i: "calendario" }
  ];
  function montarPainel() {
    var painel = document.querySelector(".painel");
    if (!painel) return;
    var atual = document.body.getAttribute("data-tela");
    var lateral = document.createElement("aside");
    lateral.className = "painel-lateral";
    var h = '<a class="lateral-marca" href="../index.html"><span class="marca-selo"><i data-icone="mensagem"></i></span>Atende</a><nav class="lateral-nav">';
    NAV.forEach(function (n) {
      h += '<a href="' + n.id + '.html"' + (n.id === atual ? ' class="ativo"' : "") + '><i data-icone="' + n.i + '"></i>' + n.t + "</a>";
    });
    h += '</nav><div class="lateral-loja"><span class="avatar a-4">AM</span><div><div class="nome">Ateliê Maria</div><div class="sub">Plano Essencial</div></div></div>';
    lateral.innerHTML = h;
    painel.insertBefore(lateral, painel.firstChild);

    var barra = document.createElement("nav");
    barra.className = "barra-inferior";
    var principais = NAV.slice(0, 4);
    var b = "";
    principais.forEach(function (n) {
      b += '<a href="' + n.id + '.html"' + (n.id === atual ? ' class="ativo"' : "") + '><i data-icone="' + n.i + '"></i>' + n.t + "</a>";
    });
    var maisAtivo = ["clientes", "atendente", "relatorios", "agenda"].indexOf(atual) >= 0;
    b += '<button type="button" data-abrir="folha-mais"' + (maisAtivo ? ' class="ativo"' : "") + '><i data-icone="menu"></i>Mais</button>';
    barra.innerHTML = b;
    document.body.appendChild(barra);

    var veu = document.createElement("div");
    veu.className = "veu"; veu.id = "folha-mais";
    var m = '<div class="folha" role="dialog" aria-label="Mais opções"><div class="folha-alca"></div><h2>Mais</h2><div class="mapa-lista">';
    NAV.slice(4).forEach(function (n) {
      m += '<a href="' + n.id + '.html"><i data-icone="' + n.i + '" style="margin:0;color:var(--verde-900)"></i>' + n.t + '<i data-icone="seta-direita"></i></a>';
    });
    m += '<a href="../index.html"><i data-icone="sair" style="margin:0;color:var(--verde-900)"></i>Sair do painel<i data-icone="seta-direita"></i></a>';
    m += "</div></div>";
    veu.innerHTML = m;
    document.body.appendChild(veu);
  }

  document.addEventListener("DOMContentLoaded", function () {
    montarFaixa();
    montarPainel();
    pintarIcones();
    pintarProdutos();
    if (window.aoIniciar) window.aoIniciar();
  });
})();
