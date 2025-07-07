import { useState } from 'react';

const QRModal = ({
  qrCodeImage,
  qrCodeString,
}: {
  qrCodeImage: string;
  qrCodeString: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(qrCodeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      setCopied(false);
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="qr-modal">
      <h2>Pagamento PIX</h2>
      <img src={qrCodeImage} alt="QR Code" />
      <p>Copie e cole o código abaixo para pagar:</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <code style={{ wordBreak: 'break-all' }}>{qrCodeString}</code>
        <button
          onClick={handleCopy}
          style={{ marginLeft: 8, cursor: 'pointer' }}
        >
          {copied ? 'Copiado!' : 'Copiar'}
        </button>
      </div>
    </div>
  );
};

export default QRModal;
