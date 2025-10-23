// ===== Tema claro/escuro =====
const savedTheme = localStorage.getItem('al_theme2');
if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
document.getElementById('themeToggle').addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', cur);
  localStorage.setItem('al_theme2', cur);
});

// ===== Traduções PT-BR (offline) =====
const tr1_pt = `Unidade 10, página 96, Leitura, Exercício 3

Impressão 3D — ela pode mudar vidas.

As próteses são partes artificiais do corpo. Elas são usadas pelos médicos para substituir membros — braços ou pernas — que estejam ausentes ou danificados. Por anos, os cientistas vinham fazendo próteses de metal, aço no começo e, mais tarde, de materiais mais leves. Recentemente, as pessoas têm usado impressoras 3D para fabricar próteses. Aqui estão duas histórias de como a vida de pessoas foi mudada por próteses feitas em 3D.

A. Quando Millie, a greyhound (galgo), era filhote, sofreu um acidente e perdeu a pata dianteira esquerda. A primeira empresa a deixou em um centro de resgate, onde Ed e Nora Dieppe a encontraram e a levaram. Para que Millie pudesse andar, a nova empresa colocou uma prótese em sua perna. Mas Millie logo a desgastou e eles tiveram que substituí-la. Ed e Nora compraram outra prótese, mas logo tiveram que substituí-la também. Depois de alguns anos, tiveram que gastar R$ 10.000 em próteses. Eles queriam ajudar Millie, mas precisavam encontrar uma forma diferente de fazer isso. Ed trabalha como arquiteto. Ele trabalhou por um tempo com modelagem 3D e teve uma ideia. Ele conversou com uma empresa que o ajudou a projetar uma pata que pudesse se ajustar perfeitamente à Millie. Em seguida, eles imprimiram a perna em uma impressora 3D. Eles precisaram fazer duas ou três até que ficasse perfeita, mas logo Millie tinha uma perna para usar. Agora Millie pode correr como outros cães.

B. Um dia, ele analisou quais braços protéticos estavam disponíveis. Ele viu que não haviam mudado muito desde que ele era jovem. Era possível comprar modelos melhores, mas eram extremamente caros. Isso é aceitável para adultos, porque eles podem usar o mesmo braço protético por anos. Crianças, porém, precisam trocar o braço protético todos os meses, porque crescem muito rápido. Steven decidiu fazer algo. Ele vinha criando muitas invenções em seu jardim. Ele leu que era possível imprimir próteses em 3D e perguntou se poderia fazê-las ele mesmo. Ele experimentou braços e pernas simples, mas muito coloridos. Descobriu que conseguia fazer próteses. Agora, ele e sua empresa e seu sócio produzem próteses legais. A empresa deles se chama Team Unlimited, e eles entregam próteses para crianças que precisam. Eles pedem dinheiro na internet para ajudar a cobrir o custo de fabricação dos membros. Uma das primeiras crianças a receber um membro bacana foi Isabella Jennings, de nove anos. Ela havia esperado a vida inteira por algo assim. Um vídeo dela usando o braço protético pela primeira vez foi colocado no YouTube. Ele foi assistido por mais de dois milhões de pessoas.`;

// Observação: mantive termos próprios com esclarecimento entre parênteses quando útil.
// “woodrail” traduzido como “saracura-de-garganta-ruiva” (nome comum em PT-BR).
const tr2_pt = `Unidade 10, página 92, Leitura, Exercício 6

8.000 aves para ver antes de morrer

Phoebe Snetzinger tinha acabado de voltar de uma viagem ao Alasca quando seus médicos lhe disseram que ela tinha câncer. Ela tinha menos de um ano de vida. Phoebe tinha 50 anos. Assim que ouviu a notícia, decidiu passar o resto da vida fazendo o que amava: observar aves. O interesse de Phoebe pela observação de aves começou em Minneapolis. Depois, ela se mudou para o Missouri com a família. Lá, juntou-se a um grupo de pessoas interessadas em aves, insetos e plantas ao redor do rio Mississippi. Ela passou a se preocupar muito com a poluição e seu impacto no meio ambiente. “Precisamos proteger a natureza”, disse ela. “Se não fizermos isso, as futuras gerações não poderão aproveitar a beleza dessas aves.”

Quando descobriu que tinha câncer, Phoebe partiu imediatamente para alguns dos paraísos naturais mais incríveis do mundo. Suas viagens foram extremamente difíceis, mas ela surpreendeu seus médicos e sua família ao continuar viajando. O tempo foi passando, e ela continuava viva — fazendo algo de que gostava. Isso a ajudou a manter a saúde por mais 10 anos. O câncer voltou, mas, mesmo assim, Phoebe Snetzinger decidiu não parar. À medida que continuou a viajar, a doença voltou a regredir. Nessa altura, ela estava se tornando internacionalmente famosa no mundo da observação de aves. Aos 61 anos, quando já havia registrado 7.530 espécies, foi chamada pelo Guinness Book de a principal observadora de aves do mundo. Quatro anos depois, durante uma viagem ao México, ela estabeleceu um novo recorde ao observar a espécie de número 8.000 — o raríssimo saracura-de-garganta-ruiva (rufous-necked wood-rail). Snetzinger havia se tornado uma lenda. Ninguém tinha visto tantas espécies diferentes de aves antes. Na verdade, naquela época, apenas 12 pessoas no mundo tinham mais de 7.000 espécies registradas.

Aos 68 anos, Phoebe morreu em um acidente de carro na ilha de Madagascar — ainda perseguindo o hobby que provavelmente a manteve viva por mais tempo. Ela estava lá havia dois meses e somara mais de cinco espécies à sua lista, que passara de 8.400. Quatro anos após sua morte, a American Birding Association publicou suas memórias, *Birding on Borrowed Time*. Muitas pessoas gostaram de ler esse livro comovente. Não é apenas a história das viagens de uma observadora de aves, mas um tocante relato humano de como seu hobby a ajudou a viver muito mais do que o esperado.`;

// ===== Helpers & Bind =====
function byId(id){ return document.getElementById(id); }

function toggleTranslate(id){
  const grid = byId('grid-'+id);
  const col  = byId('col-tr-'+id);
  const btn  = document.querySelector('[data-action="toggle-translate"][data-target="'+id+'"]');
  const on   = col.style.display === 'none';

  if (on) {
    if (id === '1') byId('tr-1').textContent = tr1_pt;
    if (id === '2') byId('tr-2').textContent = tr2_pt;
  }
  col.style.display = on ? 'flex' : 'none';
  grid.className    = on ? 'grid-2' : 'grid-1';
  btn.textContent   = on ? 'Ocultar tradução' : 'Traduzir';
}

document.querySelectorAll('[data-action="toggle-translate"]').forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    const id = e.currentTarget.getAttribute('data-target');
    toggleTranslate(id);
  });
});
