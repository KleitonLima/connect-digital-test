import { useState } from 'react';

const QRModal = ({
  qrCodeImage,
  qrCodeCopyPaste,
}: {
  qrCodeImage: string;
  qrCodeCopyPaste: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(qrCodeCopyPaste);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      setCopied(false);
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <dialog className="qr-modal">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          borderRadius: '8px',
          backgroundColor: '#fff',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          maxWidth: '400px',
          margin: 'auto',
        }}
      >
        <h2>Pagamento PIX</h2>
        <img src={qrCodeImage} alt="QR Code" />
        <p>Copie e cole o código abaixo para pagar:</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <code style={{ wordBreak: 'break-all' }}>{qrCodeCopyPaste}</code>
          <button
            onClick={handleCopy}
            style={{ marginLeft: 8, cursor: 'pointer' }}
          >
            {copied ? 'Copiado!' : 'Copiar'}
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default QRModal;
