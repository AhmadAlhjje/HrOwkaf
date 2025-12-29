import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import EmployeeCard from './components/EmployeeCard';
import { Employee } from './types/employee';
import { employeeAPI } from './services/api';

const EmployeePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      if (!id) {
        setError('معرّف الموظف غير موجود');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const employeeData = await employeeAPI.getEmployeeById(Number(id));

        if (employeeData) {
          setEmployee(employeeData);
          setError(null);
        } else {
          setError('الموظف غير موجود');
        }
      } catch (err) {
        setError('حدث خطأ أثناء تحميل بيانات الموظف');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-4"></div>
          <p className="text-xl text-gray-700 font-semibold">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
          <div className="text-center">
            <svg
              className="mx-auto h-16 w-16 text-red-500 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">خطأ</h2>
            <p className="text-lg text-gray-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!employee) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
          <div className="text-center">
            <svg
              className="mx-auto h-16 w-16 text-yellow-500 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">غير موجود</h2>
            <p className="text-lg text-gray-600">لم يتم العثور على بيانات الموظف</p>
          </div>
        </div>
      </div>
    );
  }

  return <EmployeeCard employee={employee} />;
};

const HomePage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-gray-100">
      <div className="bg-white rounded-lg shadow-2xl p-12 max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          نظام بطاقات الهوية الوظيفية
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          الجمهورية العربية السورية
        </p>
        <p className="text-lg text-gray-500 mb-4">
          للوصول إلى بطاقة الموظف، يرجى استخدام رمز الاستجابة السريعة (QR Code)
        </p>
        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6 mt-8">
          <p className="text-gray-700">
            أو استخدم الرابط المباشر:
            <br />
            <code className="text-blue-600 font-mono text-sm">
              /employee/[رقم_الموظف]
            </code>
          </p>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/employee/:id" element={<EmployeePage />} />
      </Routes>
    </Router>
  );
};

export default App;
