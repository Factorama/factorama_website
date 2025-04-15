import axios from 'axios';
import { createLead } from '../createLead';

// Mock de axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('createLead', () => {
    beforeEach(() => {
        // Limpiar todos los mocks antes de cada test
        jest.clearAllMocks();
    });

    it('should return true when API returns 200', async () => {
        // Configurar el mock para retornar status 200
        mockedAxios.post.mockResolvedValueOnce({ status: 200 });

        const result = await createLead(
            'test@example.com',
            'Test User',
            '1234567890',
            'customer',
            'product1',
            100,
            1000,
            5000
        );

        expect(result).toBe(true);
        expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    });

    it('should return true when API returns 201', async () => {
        // Configurar el mock para retornar status 201
        mockedAxios.post.mockResolvedValueOnce({ status: 201 });

        const result = await createLead(
            'test@example.com',
            'Test User',
            '1234567890',
            'customer',
            'product1',
            100,
            1000,
            5000
        );

        expect(result).toBe(true);
        expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    });

    it('should return false when API returns error status', async () => {
        // Configurar el mock para retornar status 400
        mockedAxios.post.mockResolvedValueOnce({ status: 400 });

        const result = await createLead(
            'test@example.com',
            'Test User',
            '1234567890',
            'customer',
            'product1',
            100,
            1000,
            5000
        );

        expect(result).toBe(false);
        expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    });


}); 