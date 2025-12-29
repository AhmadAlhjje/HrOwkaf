import React from 'react';
import { Employee } from '../types/employee';
import { employeeAPI } from '../services/api';
import SyrianFlag from './SyrianFlag';

interface EmployeeCardProps {
  employee: Employee;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Front side of the card */}
      <div className="relative w-[856px] h-[540px] bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-200">

        {/* Background watermark */}
        <div className="absolute inset-0 opacity-5">
          <img
            src={employeeAPI.getImageUrl(employee.logo_path)}
            alt="watermark"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* Header section */}
        <div className="relative bg-gradient-to-r from-red-600 via-white to-black py-3 px-6">
          <div className="flex justify-between items-center">
            {/* Syrian Coat of Arms / Logo */}
            <div className="w-24 h-24 bg-white rounded-full p-2 shadow-lg">
              <img
                src={employeeAPI.getImageUrl(employee.logo_path)}
                alt="Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2RkZCIvPjwvc3ZnPg==';
                }}
              />
            </div>

            {/* Title */}
            <div className="flex-1 text-center">
              <h1 className="text-2xl font-bold text-gray-800">الجمهورية العربية السورية</h1>
              <h2 className="text-xl font-semibold text-gray-700 mt-1">وزارة الأوقاف</h2>
              <h3 className="text-lg font-medium text-gray-600">شركة أوقاف للخلوي</h3>
            </div>

            {/* Flag */}
            <div className="w-32 h-20 shadow-lg rounded">
              <SyrianFlag />
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="relative flex p-6 gap-6">
          {/* Photo section */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-48 h-56 bg-gray-200 rounded-lg overflow-hidden shadow-lg border-4 border-blue-600">
              {employee.photo_path ? (
                <img
                  src={employeeAPI.getImageUrl(employee.photo_path)}
                  alt={employee.full_name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1MCIgZmlsbD0iI2RkZCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Tm8gUGhvdG88L3RleHQ+PC9zdmc+';
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500">
                  بدون صورة
                </div>
              )}
            </div>

            {/* QR Code */}
            <div className="w-32 h-32 bg-white rounded-lg overflow-hidden shadow-md border-2 border-gray-300 p-1">
              {employee.barcode_image_path ? (
                <img
                  src={employeeAPI.getImageUrl(employee.barcode_image_path)}
                  alt="QR Code"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
                  QR Code
                </div>
              )}
            </div>
          </div>

          {/* Information section */}
          <div className="flex-1 grid grid-cols-2 gap-4 content-start">
            {/* Name */}
            <div className="col-span-2 bg-blue-50 p-3 rounded-lg border-r-4 border-blue-600">
              <p className="text-sm text-gray-600 mb-1">الاسم:</p>
              <p className="text-2xl font-bold text-gray-900">{employee.full_name}</p>
            </div>

            {/* Position */}
            <div className="bg-white p-3 rounded-lg shadow border-r-4 border-green-600">
              <p className="text-sm text-gray-600 mb-1">الوظيفة:</p>
              <p className="text-lg font-semibold text-gray-900">{employee.position}</p>
            </div>

            {/* Department */}
            <div className="bg-white p-3 rounded-lg shadow border-r-4 border-green-600">
              <p className="text-sm text-gray-600 mb-1">القسم:</p>
              <p className="text-lg font-semibold text-gray-900">{employee.department_name || 'غير محدد'}</p>
            </div>

            {/* ID Card Number */}
            <div className="bg-white p-3 rounded-lg shadow border-r-4 border-purple-600">
              <p className="text-sm text-gray-600 mb-1">رقم البطاقة:</p>
              <p className="text-lg font-semibold text-gray-900 font-mono">{employee.id_card_number}</p>
            </div>

            {/* National ID */}
            <div className="bg-white p-3 rounded-lg shadow border-r-4 border-purple-600">
              <p className="text-sm text-gray-600 mb-1">الرقم الوطني:</p>
              <p className="text-lg font-semibold text-gray-900 font-mono">{employee.national_id}</p>
            </div>

            {/* Blood Type */}
            <div className="bg-white p-3 rounded-lg shadow border-r-4 border-red-600">
              <p className="text-sm text-gray-600 mb-1">فصيلة الدم:</p>
              <p className="text-lg font-semibold text-red-700">{employee.blood_type}</p>
            </div>

            {/* Place of Birth */}
            <div className="bg-white p-3 rounded-lg shadow border-r-4 border-orange-600">
              <p className="text-sm text-gray-600 mb-1">مكان الولادة:</p>
              <p className="text-lg font-semibold text-gray-900">{employee.place_of_birth}</p>
            </div>

            {/* Residence */}
            <div className="col-span-2 bg-white p-3 rounded-lg shadow border-r-4 border-teal-600">
              <p className="text-sm text-gray-600 mb-1">مكان الإقامة:</p>
              <p className="text-lg font-semibold text-gray-900">{employee.residence}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-gray-800 to-gray-700 py-2 px-6">
          <div className="flex justify-between items-center text-white">
            <div className="text-sm">
              <span className="font-semibold">تاريخ الإصدار: </span>
              <span className="font-mono">{new Date().toLocaleDateString('ar-SY')}</span>
            </div>
            <div className="text-sm">
              <span className="font-semibold">تاريخ الانتهاء: </span>
              <span className="font-mono">{new Date(employee.card_expiry_date).toLocaleDateString('ar-SY')}</span>
            </div>
            <div className="text-sm">
              <span className="font-semibold">رقم الموظف: </span>
              <span className="font-mono">#{employee.id}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back side of the card */}
      <div className="relative w-[856px] h-[540px] bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-200 mt-8">

        {/* Header with logo */}
        <div className="relative bg-gradient-to-r from-red-600 via-white to-black py-4 px-6">
          <div className="flex justify-center items-center gap-4">
            <div className="w-20 h-20 bg-white rounded-full p-2 shadow-lg">
              <img
                src={employeeAPI.getImageUrl(employee.logo_path)}
                alt="Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2RkZCIvPjwvc3ZnPg==';
                }}
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">تعليمات خاصة</h2>
          </div>
        </div>

        {/* Instructions */}
        <div className="p-8">
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 mb-6">
            <ul className="space-y-4 text-lg text-gray-800">
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold text-xl">•</span>
                <span>تعتبر هذه البطاقة شخصية وسرية ويمنع استعمالها لغير حاملها</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold text-xl">•</span>
                <span>لا تبرز هذه البطاقة إلا للغاية المخصصة لها من قبل صاحبها فقط</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold text-xl">•</span>
                <span>عند ضياع أو فقدان هذه البطاقة يعلم صاحبها الجهة التي منحتها له</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold text-xl">•</span>
                <span>تعاد هذه البطاقة إلى مصدرها في حال تصريح أو نقل أو توريث الوظيفة</span>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          {(employee.mobile_1 || employee.mobile_2 || employee.mobile_3 || employee.contact_number) && (
            <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">معلومات الاتصال</h3>
              <div className="grid grid-cols-2 gap-4">
                {employee.mobile_1 && (
                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-700">جوال 1:</span>
                    <span className="font-mono text-gray-900">{employee.mobile_1}</span>
                  </div>
                )}
                {employee.mobile_2 && (
                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-700">جوال 2:</span>
                    <span className="font-mono text-gray-900">{employee.mobile_2}</span>
                  </div>
                )}
                {employee.mobile_3 && (
                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-700">جوال 3:</span>
                    <span className="font-mono text-gray-900">{employee.mobile_3}</span>
                  </div>
                )}
                {employee.contact_number && (
                  <div className="flex gap-2">
                    <span className="font-semibold text-gray-700">هاتف التواصل:</span>
                    <span className="font-mono text-gray-900">{employee.contact_number}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Issue Date */}
          <div className="mt-6 text-center">
            <div className="inline-block bg-white border-2 border-gray-300 rounded-lg px-8 py-3 shadow">
              <span className="text-gray-700 font-semibold">صالحة لغاية: </span>
              <span className="text-gray-900 font-bold font-mono text-lg">
                {new Date(employee.card_expiry_date).toLocaleDateString('ar-SY', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Syrian Flag at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16">
          <SyrianFlag />
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
