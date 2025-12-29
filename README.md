# نظام بطاقات الهوية الوظيفية

مشروع React + TypeScript + Tailwind CSS لعرض بطاقات الهوية الوظيفية على النمط السوري.

## المميزات

- تصميم بطاقة هوية وزارية سورية احترافية
- عرض البيانات الأساسية للموظف
- رمز QR للوصول السريع
- واجهة مستخدم بالعربية
- تصميم متجاوب ومتوافق مع الطباعة

## التثبيت والتشغيل

1. تثبيت المتطلبات:
```bash
npm install
```

2. تشغيل المشروع:
```bash
npm run dev
```

3. بناء المشروع للإنتاج:
```bash
npm run build
```

## الاستخدام

للوصول إلى بطاقة موظف معين، استخدم الرابط التالي:
```
http://localhost:3000/employee/[رقم_الموظف]
```

مثال:
```
http://localhost:3000/employee/4
```

## API

يتصل المشروع بـ API الخاص بإدارة الموظفين:
- Base URL: `http://185.216.132.28:80/api`
- Endpoint: `/employees`

## البنية

```
employee-id-card/
├── src/
│   ├── components/
│   │   ├── EmployeeCard.tsx    # مكون بطاقة الموظف
│   │   └── SyrianFlag.tsx      # مكون العلم السوري
│   ├── services/
│   │   └── api.ts              # خدمات API
│   ├── types/
│   │   └── employee.ts         # تعريفات TypeScript
│   ├── App.tsx                 # المكون الرئيسي
│   ├── main.tsx                # نقطة الدخول
│   └── index.css               # التنسيقات العامة
├── index.html
├── package.json
└── vite.config.ts
```

## التقنيات المستخدمة

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router
- Axios
