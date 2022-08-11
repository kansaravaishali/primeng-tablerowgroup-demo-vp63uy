export interface Country {
  name?: string;
  code?: string;
}

export interface Representative {
  name?: string;
  image?: string;
}

export interface Customer {
  id?: number;
  name?: number;
  yearCode: string;
  country?: Country;
  company?: string;
  date?: string;
  status?: string;
  representative?: Representative;
}