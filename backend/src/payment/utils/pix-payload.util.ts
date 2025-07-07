interface PixPayloadParams {
  chave: string;
  valor: number;
  nomeRecebedor: string;
  cidade: string;
  infoAdicional?: string;
}

function formatField(id: string, value: string) {
  return id + value.length.toString().padStart(2, '0') + value;
}

export function gerarPayloadPix({
  chave,
  valor,
  nomeRecebedor,
  cidade,
  infoAdicional = '',
}: PixPayloadParams): string {
  const payloadFormatIndicator = '000201';
  const merchantAccountInfo = formatField(
    '26',
    formatField('00', 'br.gov.bcb.pix') +
      formatField('01', chave) +
      (infoAdicional ? formatField('02', infoAdicional) : ''),
  );
  const merchantCategoryCode = '52040000';
  const transactionCurrency = '5303986';
  const transactionAmount = valor ? formatField('54', valor.toFixed(2)) : '';
  const countryCode = '5802BR';
  const merchantName = formatField('59', nomeRecebedor);
  const merchantCity = formatField('60', cidade);
  const additionalDataField = formatField('62', formatField('05', '***'));

  const payloadSemCRC = [
    payloadFormatIndicator,
    merchantAccountInfo,
    merchantCategoryCode,
    transactionCurrency,
    transactionAmount,
    countryCode,
    merchantName,
    merchantCity,
    additionalDataField,
    '6304',
  ]
    .filter(Boolean)
    .join('');

  const crc = crc16(payloadSemCRC).toUpperCase();
  return payloadSemCRC + crc;
}

function crc16(str: string): string {
  let crc = 0xffff;
  for (const c of str) {
    crc ^= c.charCodeAt(0) << 8;
    for (let i = 0; i < 8; i++) {
      if ((crc & 0x8000) !== 0) {
        crc = (crc << 1) ^ 0x1021;
      } else {
        crc = crc << 1;
      }
      crc &= 0xffff;
    }
  }
  return crc.toString(16).padStart(4, '0');
}
