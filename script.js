// ===== Tema claro/escuro =====
const savedTheme = localStorage.getItem('al_theme2');
if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
document.getElementById('themeToggle').addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', cur);
  localStorage.setItem('al_theme2', cur);
});

// ===== Traduções PT-BR (offline) =====
const tr1_pt = `Unidade 10, p. 96 — Leitura, Ex. 3: A impressão 3D pode mudar vidas
Próteses são partes artificiais do corpo. Os médicos as usam para substituir membros ausentes ou danificados.

Por muitos anos, os cientistas fizeram próteses de metal e, mais tarde, de outros materiais. Recentemente, as pessoas têm usado impressoras 3D para fazer próteses. Aqui estão duas histórias de como próteses feitas em 3D mudaram vidas.

Quando Millie, a galgo, era filhote, sofreu um acidente e perdeu a perna esquerda. Seu primeiro dono a deixou em um centro de resgate, onde Ed e Nora Dieppe a encontraram e a levaram para casa. Para ajudar Millie a andar, eles colocaram nela uma perna protética, mas ela se desgastou rapidamente e precisou ser substituída.

Ed e Nora compraram outra prótese, mas logo tiveram que substituí-la também. Depois de alguns anos, já tinham gasto mais de US$ 10.000. Eles queriam ajudar Millie, mas precisavam de uma solução diferente.

Ed, um arquiteto que trabalhava com modelagem 3D, teve uma ideia. Ele entrou em contato com uma empresa para ajudar a projetar uma perna que se ajustasse perfeitamente à Millie.

A perna foi impressa em 3D. Foram necessárias algumas iterações para acertar o encaixe, mas logo Millie tinha uma prótese confortável. Agora ela pode correr como outros cães e, se a perna se desgastar, Ed e Nora podem simplesmente imprimir outra.

Steven Davies nasceu sem a parte inferior da perna esquerda. Na escola, ele usava uma prótese de que não gostava e, por muitos anos, não usou prótese nenhuma. Um dia, pesquisou o que existia disponível e percebeu que pouca coisa havia mudado desde a sua infância. Havia modelos melhores, mas eram extremamente caros.

Isso pode ser administrável para adultos, que podem usar a mesma prótese por anos. Crianças, porém, crescem rapidamente e precisam de substituições a cada poucos meses. Steven decidiu agir. Ele vinha inventando coisas em seu quintal e descobriu que era possível imprimir próteses em 3D em casa.

Ele experimentou designs simples e coloridos e descobriu que conseguia fazer boas pernas protéticas a baixo custo. Agora, junto com um sócio, ele fabrica pernas bonitas por meio de uma empresa chamada Team Unlimited, fornecendo próteses para crianças necessitadas. Eles arrecadam dinheiro online para cobrir os custos de produção.

Uma das primeiras crianças a receber uma perna colorida foi Isabella Jennings, de nove anos. Ela havia esperado a vida inteira por algo assim. Um vídeo dela usando a prótese pela primeira vez foi postado no YouTube — já foi assistido por mais de dois milhões de pessoas.`;

const tr2_pt = `Unidade 10, p. 92 — Leitura, Ex. 6: Oito mil aves para ver antes de morrer
Phoebe Snetsinger tinha acabado de voltar de uma viagem ao Alasca quando seus médicos lhe disseram que ela tinha câncer. Disseram que ela tinha menos de um ano de vida.

Phoebe tinha cinquenta anos. Assim que ouviu a notícia, decidiu passar o resto da vida fazendo o que mais amava: observar aves. Seu interesse começou em Minneapolis. Mais tarde, quando se mudou para o Missouri com a família, juntou-se a um grupo de pessoas que estudavam as aves, insetos e plantas ao longo do rio Mississippi. Ela passou a se preocupar profundamente com a poluição e seu impacto sobre o meio ambiente.

“Precisamos proteger a natureza”, disse ela. “Caso contrário, as futuras gerações não poderão desfrutar dessas aves lindas.” Quando Phoebe descobriu que tinha câncer, partiu para visitar alguns dos lugares naturais mais extraordinários do mundo.

Suas viagens foram extremamente desafiadoras, mas ela surpreendeu médicos e familiares ao continuar viajando. Um ano veio e passou, e ela ainda estava viva — fazendo o que amava. Essa paixão a ajudou a manter-se saudável por muitos anos. Mesmo quando o câncer voltou, Phoebe decidiu não parar. À medida que continuava viajando, sua saúde melhorou novamente.

Nessa altura, ela estava se tornando internacionalmente conhecida na comunidade de observadores de aves. Aos sessenta e um anos, depois de ver 7.530 espécies, foi reconhecida como uma das observadoras de aves mais bem-sucedidas do mundo. Quatro anos depois, em uma viagem ao México, ela estabeleceu um novo recorde pessoal quando registrou a espécie de número 8.000 — uma ave incomum e raramente vista.

Snetsinger tornou-se uma lenda. Ninguém jamais havia registrado tantas espécies diferentes de aves. Na verdade, naquela época, apenas um punhado de pessoas no mundo tinha visto mais de 7.000 espécies.

Infelizmente, quando Phoebe tinha sessenta e oito anos, morreu em um acidente de carro na ilha de Madagascar — ainda perseguindo o hobby que provavelmente prolongara sua vida. Ela estava lá há duas semanas e havia acrescentado mais cinco espécies à sua lista, levando-a a mais de 8.400.

Alguns anos após sua morte, uma organização de observação de aves publicou suas memórias. Muitas pessoas apreciaram esse livro comovente — não apenas um registro de viagens, mas uma poderosa história humana sobre como sua paixão a ajudou a viver muito mais do que o esperado.`;

// ===== Helpers =====
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

// Bind
document.querySelectorAll('[data-action="toggle-translate"]').forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    const id = e.currentTarget.getAttribute('data-target');
    toggleTranslate(id);
  });
});
