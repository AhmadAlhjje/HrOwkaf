import axios from 'axios';
import { Employee } from '../types/employee';

const BASE_URL = 'http://185.216.132.28:80/api';
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwidXNlcl90eXBlIjoic3VwZXJfYWRtaW4iLCJlbXBsb3llZV9pZCI6bnVsbCwiZGVwYXJ0bWVudF9pZCI6bnVsbCwiYnJhbmNoX2lkIjpudWxsLCJleHAiOjE3OTgxMDgxNjV9.Lh18zYhe-st12zhfgajT8RITDTPmUTxsYjPKwJburJM';

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
