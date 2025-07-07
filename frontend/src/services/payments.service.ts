import api from '../config/axios.config';

class PaymentsService {
  async createPaymentIntent(
    amount: number,
    currency: string
  ): Promise<unknown> {
    try {
      const response = await api.post('/payments/pix', {
        data: { amount, currency },
      });

      if (response.status !== 200) {
        throw new Error('Failed to create payment intent');
      }

      return response.data;
    } catch (error) {
      console.error('Error creating payment intent:', error);
      throw error;
    }
  }
}

export default new PaymentsService();
