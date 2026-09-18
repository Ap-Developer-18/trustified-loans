import { apiClient } from "@/lib/api-client";


export interface Consultation {
  _id: string;
  fullName: string;
  state: string;
  phone: string;
  loanType: string;
  createdAt: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  total: number;
  totalPages: number;
  page: number;
  loanTypes?: string[];
}

export const adminService = {
  getConsultations: async (
    page: number,
    limit: number,
    search: string,
    loanType: string
  ) => {
    const params = new URLSearchParams({
      page: String(page),
      limit: String(limit),
    });
    
    if (search) params.set("search", search);
    if (loanType && loanType !== "all") params.set("loanType", loanType);

    return apiClient<PaginatedResponse<Consultation>>(
      `/api/consultation?${params.toString()}`
    );
  },

  getNewsletters: async (page: number, limit: number, search: string) => {
    const params = new URLSearchParams({
      page: String(page),
      limit: String(limit),
    });
    
    if (search) params.set("search", search);

    return apiClient<PaginatedResponse<{ _id: string; email: string; subscribedAt: string }>>(
      `/api/newsletter?${params.toString()}`
    );
  },
};