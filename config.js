/* =========================================================
   CONFIG.JS — datas, preços e links de pagamento do site.
   É o ÚNICO arquivo que você mexe para mudar preço, data ou link.
   Ele é usado pelo index.html e pelo boas-vindas.html.
   Todas as datas têm "-03:00" no final: horário de Brasília.
   ========================================================= */

// 1) DATAS ------------------------------------------------------------
// Quando a faixa do cronômetro começa a aparecer (22/11, 19h)
const INICIO_CONTAGEM = new Date('2026-11-22T19:00:00-03:00').getTime();
// Quando o cronômetro zera e as vendas abrem (23/11, 19h)
const LANCAMENTO      = new Date('2026-11-23T19:00:00-03:00').getTime();
// Quando acaba a oferta de lançamento: 1º/12 à meia-noite = fim do dia 30/11
const FIM_PROMO       = new Date('2026-12-01T00:00:00-03:00').getTime();

// 2) PREÇOS E LINKS -----------------------------------------------------
// "lancamento" = oferta até 30/11.  "normal" = preço cheio, a partir de 1º/12.
// Cada forma de pagamento tem: nome e detalhe (textos na tela), valor e link da Kiwify.
const OFERTAS = {
  lancamento: {
    precoDe: 'R$ 249,90',                                   // preço riscado ("de R$ 249,90")
    prazo:   'Oferta de lançamento (Black) · válida até 30/11',
    parcela: '12x de R$ 20,67',                             // aparece em "ou em até ..."
    cartao: {
      valor:   'R$ 199,99',
      nome:    'Cartão ou boleto · R$ 199,99',
      detalhe: 'cartão em até 12x de R$ 20,67, com juros',
      link:    'https://pay.kiwify.com.br/dxIMqQI?hidePix=true'                      // cartão ou boleto
    },
    pix: {
      valor:   'R$ 189,99',
      nome:    'Pix · R$ 189,99',
      detalhe: '5% de desconto',
      link:    'https://pay.kiwify.com.br/TrGsCbq?hideCard=true&hideBoleto=true'     // Pix
    }
  },

  // >>> CONFIRMAR ANTES DE 1º/12: estes valores e links são uma SUGESTÃO.
  // A Kiwify cobra o preço que está configurado na oferta dela, não o que aparece no site.
  // Até você criar as ofertas de R$ 249,90 na Kiwify e colar os links novos abaixo,
  // os links continuam sendo os da oferta de lançamento (R$ 199,99).
  normal: {
    precoDe: '',                                            // vazio = sem preço riscado
    prazo:   '',                                            // vazio = sem aviso de prazo
    parcela: '12x de R$ 25,83',                             // mesma taxa de juros (cerca de 3,48% ao mês)
    cartao: {
      valor:   'R$ 249,90',
      nome:    'Cartão ou boleto · R$ 249,90',
      detalhe: 'cartão em até 12x de R$ 25,83, com juros',
      link:    'https://pay.kiwify.com.br/dxIMqQI?hidePix=true'                      // TROCAR pelo link de R$ 249,90
    },
    pix: {
      valor:   'R$ 237,41',
      nome:    'Pix · R$ 237,41',
      detalhe: '5% de desconto',
      link:    'https://pay.kiwify.com.br/TrGsCbq?hideCard=true&hideBoleto=true'     // TROCAR pelo link do Pix de R$ 237,41
    }
  }
};

// Qual das duas tabelas de preço vale agora?
function periodoDaOferta(agora) {
  return agora < FIM_PROMO ? 'lancamento' : 'normal';
}

// 3) MODO DE TESTE ------------------------------------------------------
// Abra qualquer página com  ?hora=2026-11-23T20:00  no final do endereço
// e ela simula essa hora (sem esse trecho, usa a hora real).
const HORA_SIMULADA = new URLSearchParams(location.search).get('hora');
const DIFERENCA_DE_HORA = HORA_SIMULADA ? new Date(HORA_SIMULADA).getTime() - Date.now() : 0;
function agoraCerto() { return Date.now() + (isNaN(DIFERENCA_DE_HORA) ? 0 : DIFERENCA_DE_HORA); }
