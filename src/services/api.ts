import axios from 'axios';
import { Employee } from '../types/employee';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;


// Create axios instance with default config
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${AUTH_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

export const employeeAPI = {
  async getEmployeeById(id: number): Promise<Employee | null> {
    try {
      const response = await apiClient.get<Employee[]>('/employees');
      const employee = response.data.find(emp => emp.id === id);
      return employee || null;
    } catch (error) {
      console.error('Error fetching employee:', error);
      throw error;
    }
  },

  getImageUrl(path: string | null): string {
    if (!path) return '';
    return `http://185.216.132.28:80${path}`;
  }
};
