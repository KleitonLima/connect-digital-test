const SaleCheckout = () => {
  const products = [
    { id: 1, name: 'Produto 1', price: 100 },
    { id: 2, name: 'Produto 2', price: 200 },
    { id: 3, name: 'Produto 3', price: 300 },
  ];
  const totalPrice = products.reduce((acc, product) => acc + product.price, 0);

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
              margin: '10px',
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
        }}
      >
        <h2>Total</h2>
        <p>R$ {totalPrice.toFixed(2)}</p>
      </section>
      <footer
        style={{
          marginTop: '20px',
          padding: '10px',
          backgroundColor: '#e0e0e0',
          borderRadius: '5px',
          textAlign: 'center',
        }}
      >
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s ease',
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
          Pagar com PIX
        </button>
      </footer>
    </main>
  );
};

export default SaleCheckout;
