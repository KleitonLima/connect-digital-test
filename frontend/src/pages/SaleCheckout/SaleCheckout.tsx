import { useState } from 'react';
import paymentsService from '../../services/payments.service';
import { IconLoader2 } from '@tabler/icons-react';

const SaleCheckout = () => {
  const products = [
    { id: 1, name: 'Produto 1', price: 100 },
    { id: 2, name: 'Produto 2', price: 200 },
    { id: 3, name: 'Produto 3', price: 300 },
  ];
  const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
  const [isLoading, setIsLoading] = useState(false);

  const handleGoToPayment = async () => {
    try {
      setIsLoading(true);
      const paymentIntent = (await paymentsService.createPaymentIntent(
        totalPrice
      )) as { id: string };

      window.location.href = `/payment/${paymentIntent.id}`;
    } catch (error) {
      console.error('Error creating payment intent:', error);
    }
  };

  return (
    <main>
      <header>
        <h1>Sua compra</h1>
      </header>
      <section>
        {products?.map((product) => (
          <div
            key={product.id}
            className="product"
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              margin: '10px 0',
              borderRadius: '5px',
              backgroundColor: '#f9f9f9',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <h2>{product.name}</h2>
            <p>R$ {product.price.toFixed(2)}</p>
          </div>
        ))}
      </section>
      <section
        style={{
          marginTop: '20px',
          padding: '10px',
          backgroundColor: '#f0f0f0',
          borderRadius: '5px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2>Total</h2>
        <p style={{ fontWeight: 'bold', fontSize: '1.1em' }}>
          R$ {totalPrice.toFixed(2)}
        </p>
      </section>
      <footer
        style={{
          marginTop: '20px',
          padding: '10px',
          borderRadius: '5px',
          textAlign: 'center',
        }}
      >
        <button
          onClick={handleGoToPayment}
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s ease',
            height: '50px',
            width: '170px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#45a020';
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            e.currentTarget.style.transition = 'all 0.3s ease';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#4CAF50';
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {!isLoading ? (
            'Pagar com PIX'
          ) : (
            <IconLoader2
              style={{
                animation: 'spin 1s linear infinite',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            />
          )}
        </button>
      </footer>
    </main>
  );
};

export default SaleCheckout;
