export interface Employee {
  id: number;
  full_name: string;
  position: string;
  department_name: string | null;
  branch_name: string | null;
  id_card_number: string;
  national_id: string;
  fingerprint_id: string;
  date_of_birth: string | null;
  place_of_birth: string;
  blood_type: string;
  residence: string;
  mobile_1: string | null;
  mobile_2: string | null;
  mobile_3: string | null;
  contact_number: string | null;
  photo_path: string | null;
  logo_path: string | null;
  barcode_image_path: string;
  card_expiry_date: string;
  employee_type: string;
  salary: number;
  allowances: number;
  insurance_deduction: number;
  date_of_joining: string | null;
  profession: string | null;
  notes: string | null;
}
