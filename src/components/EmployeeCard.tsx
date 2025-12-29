import React, { useState } from 'react';
import { Employee } from '../types/employee';
import { employeeAPI } from '../services/api';
import SyrianFlag from './SyrianFlag';

interface EmployeeCardProps {
  employee: Employee;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-2 sm:p-4">
      {/* Flip Button */}
      <button
        onClick={() => setIsFlipped(!isFlipped)}
        className="mb-4 sm:mb-6 bg-green-700 hover:bg-green-800 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg shadow-md transition-all hover:shadow-lg border-2 border-green-800 text-sm sm:text-base"
      >
        {isFlipped ? 'عرض الوجه الأمامي' : 'عرض الوجه الخلفي'}
      </button>

      {/* Card Container */}
      <div className="relative w-full max-w-[856px] h-auto sm:h-[620px]">
        {/* Front side of the card */}
        <div
          className={`transition-all duration-500 ${
            isFlipped ? 'hidden sm:opacity-0 sm:pointer-events-none sm:absolute sm:inset-0' : 'block sm:opacity-100 sm:absolute sm:inset-0'
          }`}
        >
          <div className="w-full h-full bg-white rounded-lg shadow-xl overflow-hidden border-2 border-gray-200">
            {/* Top Border - Syrian Flag Colors */}
            <div className="h-1.5 sm:h-2 flex">
              <div className="flex-1 bg-green-700"></div>
              <div className="flex-1 bg-white"></div>
              <div className="flex-1 bg-black"></div>
            </div>

            {/* Top Section with Flag and Headers */}
            <div className="bg-gray-50 py-3 sm:py-6 px-3 sm:px-6 border-b-2 border-gray-200">
              <div className="flex justify-between items-center gap-2">
                {/* Logo */}
                <div className="w-12 h-12 sm:w-20 sm:h-20">
                  <img
                    src="/Emblem_of_Syria_(2025–present).svg"
                    alt="Syrian Emblem"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Center Text */}
                <div className="flex-1 text-center px-2 sm:px-4">
                  <h1 className="text-sm sm:text-xl font-bold text-gray-900">الجمهورية العربية السورية</h1>
                  <h2 className="text-xs sm:text-lg font-semibold text-gray-700 mt-0.5 sm:mt-1">وزارة الأوقاف</h2>
                  <h3 className="text-xs sm:text-base font-medium text-gray-600 mt-0.5 sm:mt-1">شركة أوقاف للخلوي</h3>
                </div>

                {/* Flag Icon */}
                <div className="w-12 h-10 sm:w-20 sm:h-16 shadow-sm rounded">
                  <SyrianFlag />
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 px-3 sm:px-6 py-3 sm:py-4 pb-4 sm:pb-6">
              {/* Left Section - Photo */}
              <div className="flex flex-col items-center sm:items-start">
                {/* Employee Photo */}
                <div className="w-32 h-40 sm:w-40 sm:h-52 bg-gray-50 rounded overflow-hidden shadow-md border-2 border-gray-300">
                  {employee.photo_path ? (
                    <img
                      src={employeeAPI.getImageUrl(employee.photo_path)}
                      alt={employee.full_name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI1MCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE2IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+2KjYr9mI2YYg2LXZiNix2Kk8L3RleHQ+PC9zdmc+';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-xs sm:text-sm">
                      بدون صورة
                    </div>
                  )}
                </div>
              </div>

              {/* Right Section - Information */}
              <div className="flex-1 space-y-1.5 sm:space-y-2.5">
                {/* Name */}
                <div className="py-1.5 sm:py-2 border-b-2 border-green-700">
                  <div className="flex items-baseline gap-2 sm:gap-3">
                    <span className="text-xs sm:text-sm text-gray-600 font-semibold min-w-[70px] sm:min-w-[90px]">الاسم:</span>
                    <span className="text-base sm:text-xl font-bold text-gray-900">{employee.full_name}</span>
                  </div>
                </div>

                {/* Family Name / Tribe */}
                <div className="py-1.5 sm:py-2 border-b border-gray-300">
                  <div className="flex items-baseline gap-2 sm:gap-3">
                    <span className="text-xs sm:text-sm text-gray-600 font-semibold min-w-[70px] sm:min-w-[90px]">النسبة:</span>
                    <span className="text-sm sm:text-base font-semibold text-gray-800">{employee.profession || employee.department_name || 'غير محدد'}</span>
                  </div>
                </div>

                {/* Father's Name */}
                <div className="py-1.5 sm:py-2 border-b border-gray-300">
                  <div className="flex items-baseline gap-2 sm:gap-3">
                    <span className="text-xs sm:text-sm text-gray-600 font-semibold min-w-[70px] sm:min-w-[90px]">اسم الأب:</span>
                    <span className="text-sm sm:text-base font-semibold text-gray-800">{employee.place_of_birth}</span>
                  </div>
                </div>

                {/* Position */}
                <div className="py-1.5 sm:py-2 border-b-2 border-green-700">
                  <div className="flex items-baseline gap-2 sm:gap-3">
                    <span className="text-xs sm:text-sm text-gray-600 font-semibold min-w-[70px] sm:min-w-[90px]">الوظيفة:</span>
                    <span className="text-sm sm:text-base font-bold text-gray-900">{employee.position}</span>
                  </div>
                </div>

                {/* Department / Division */}
                <div className="py-1.5 sm:py-2 border-b border-gray-300">
                  <div className="flex items-baseline gap-2 sm:gap-3">
                    <span className="text-xs sm:text-sm text-gray-600 font-semibold min-w-[70px] sm:min-w-[90px]">الدائرة:</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">{employee.department_name || employee.branch_name || 'غير محدد'}</span>
                  </div>
                </div>

                {/* Three Column Grid for IDs and Blood Type */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-3 pt-1 sm:pt-2">
                  {/* ID Number */}
                  <div className="bg-gray-50 rounded p-1.5 sm:p-2.5 text-center border border-gray-300">
                    <div className="text-[10px] sm:text-xs text-gray-600 font-semibold mb-0.5 sm:mb-1">رقم البطاقة</div>
                    <div className="text-[10px] sm:text-sm font-bold text-gray-900 font-mono">{employee.id_card_number}</div>
                  </div>

                  {/* Blood Type */}
                  <div className="bg-gray-50 rounded p-1.5 sm:p-2.5 text-center border border-gray-300">
                    <div className="text-[10px] sm:text-xs text-gray-600 font-semibold mb-0.5 sm:mb-1">فصيلة الدم</div>
                    <div className="text-sm sm:text-lg font-bold text-red-600">{employee.blood_type}</div>
                  </div>

                  {/* National ID */}
                  <div className="bg-gray-50 rounded p-1.5 sm:p-2.5 text-center border border-gray-300">
                    <div className="text-[10px] sm:text-xs text-gray-600 font-semibold mb-0.5 sm:mb-1">الرقم الوطني</div>
                    <div className="text-[9px] sm:text-xs font-bold text-gray-900 font-mono leading-tight">{employee.national_id}</div>
                  </div>
                </div>

                {/* Residence */}
                <div className="py-1.5 sm:py-2 border-b border-gray-300">
                  <div className="flex items-baseline gap-2 sm:gap-3">
                    <span className="text-xs sm:text-sm text-gray-600 font-semibold min-w-[70px] sm:min-w-[90px]">مكان الإقامة:</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">{employee.residence}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back side of the card */}
        <div
          className={`transition-all duration-500 ${
            isFlipped ? 'block sm:opacity-100 sm:absolute sm:inset-0' : 'hidden sm:opacity-0 sm:pointer-events-none sm:absolute sm:inset-0'
          }`}
        >
          <div className="w-full h-full bg-white rounded-lg shadow-xl overflow-hidden border-2 border-gray-200">
            {/* Top Border - Syrian Flag Colors */}
            <div className="h-1.5 sm:h-2 flex">
              <div className="flex-1 bg-green-700"></div>
              <div className="flex-1 bg-white"></div>
              <div className="flex-1 bg-black"></div>
            </div>

            {/* Header with Logo and Text */}
            <div className="bg-gray-50 py-3 sm:py-6 px-3 sm:px-6 border-b-2 border-gray-200">
              <div className="flex justify-between items-center gap-2">
                {/* Logo */}
                <div className="w-12 h-12 sm:w-20 sm:h-20">
                  <img
                    src="/Emblem_of_Syria_(2025–present).svg"
                    alt="Syrian Emblem"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Center Text */}
                <div className="flex-1 text-center px-2 sm:px-4">
                  <h2 className="text-base sm:text-2xl font-bold text-gray-900">تعليمات خاصة</h2>
                </div>

                {/* Flag Icon */}
                <div className="w-12 h-10 sm:w-20 sm:h-16 shadow-sm rounded">
                  <SyrianFlag />
                </div>
              </div>
            </div>

            {/* Instructions Content */}
            <div className="px-3 sm:px-6 py-3 sm:py-4 pb-4 sm:pb-6">
              <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-2.5 sm:p-4 mb-3 sm:mb-4">
                <ul className="space-y-1.5 sm:space-y-2.5">
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <span className="text-green-700 font-bold text-sm sm:text-base mt-0.5">●</span>
                    <span className="text-xs sm:text-sm text-gray-800 leading-relaxed">تعتبر هذه البطاقة شخصية وسرية ويمنع استعمالها لغير حاملها</span>
                  </li>
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <span className="text-green-700 font-bold text-sm sm:text-base mt-0.5">●</span>
                    <span className="text-xs sm:text-sm text-gray-800 leading-relaxed">لا تبرز هذه البطاقة إلا للغاية المخصصة لها من قبل صاحبها فقط</span>
                  </li>
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <span className="text-green-700 font-bold text-sm sm:text-base mt-0.5">●</span>
                    <span className="text-xs sm:text-sm text-gray-800 leading-relaxed">عند ضياع أو فقدان هذه البطاقة يعلم صاحبها الجهة التي منحتها له</span>
                  </li>
                  <li className="flex items-start gap-1.5 sm:gap-2">
                    <span className="text-green-700 font-bold text-sm sm:text-base mt-0.5">●</span>
                    <span className="text-xs sm:text-sm text-gray-800 leading-relaxed">تعاد هذه البطاقة إلى مصدرها في حال تصريح أو نقل أو توريث الوظيفة</span>
                  </li>
                </ul>
              </div>

              {/* Contact Information */}
              {(employee.mobile_1 || employee.mobile_2 || employee.mobile_3 || employee.contact_number) && (
                <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-2.5 sm:p-4 mb-3 sm:mb-4">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 sm:mb-3 text-center pb-1.5 sm:pb-2 border-b-2 border-green-700">
                    معلومات الاتصال
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                    {employee.mobile_1 && (
                      <div className="flex items-center gap-1.5 sm:gap-2 bg-white p-2 sm:p-2.5 rounded border border-gray-300">
                        <span className="font-semibold text-gray-600 text-[10px] sm:text-xs">جوال 1:</span>
                        <span className="font-mono text-gray-900 font-semibold text-xs sm:text-sm">{employee.mobile_1}</span>
                      </div>
                    )}
                    {employee.mobile_2 && (
                      <div className="flex items-center gap-1.5 sm:gap-2 bg-white p-2 sm:p-2.5 rounded border border-gray-300">
                        <span className="font-semibold text-gray-600 text-[10px] sm:text-xs">جوال 2:</span>
                        <span className="font-mono text-gray-900 font-semibold text-xs sm:text-sm">{employee.mobile_2}</span>
                      </div>
                    )}
                    {employee.mobile_3 && (
                      <div className="flex items-center gap-1.5 sm:gap-2 bg-white p-2 sm:p-2.5 rounded border border-gray-300">
                        <span className="font-semibold text-gray-600 text-[10px] sm:text-xs">جوال 3:</span>
                        <span className="font-mono text-gray-900 font-semibold text-xs sm:text-sm">{employee.mobile_3}</span>
                      </div>
                    )}
                    {employee.contact_number && (
                      <div className="flex items-center gap-1.5 sm:gap-2 bg-white p-2 sm:p-2.5 rounded border border-gray-300">
                        <span className="font-semibold text-gray-600 text-[10px] sm:text-xs">هاتف:</span>
                        <span className="font-mono text-gray-900 font-semibold text-xs sm:text-sm">{employee.contact_number}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Issue and Expiry Dates */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-2 sm:p-3">
                  <div className="text-center">
                    <div className="text-[10px] sm:text-xs text-gray-600 font-semibold mb-1 sm:mb-1.5">تاريخ الإصدار</div>
                    <div className="text-xs sm:text-base font-bold text-gray-900 font-mono">
                      {new Date().toLocaleDateString('ar-SY')}
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-2 sm:p-3">
                  <div className="text-center">
                    <div className="text-[10px] sm:text-xs text-gray-600 font-semibold mb-1 sm:mb-1.5">تاريخ الانتهاء</div>
                    <div className="text-xs sm:text-base font-bold text-gray-900 font-mono">
                      {new Date(employee.card_expiry_date).toLocaleDateString('ar-SY')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
