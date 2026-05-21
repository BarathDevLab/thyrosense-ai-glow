import type { DashboardSummary, Report, UserProfile } from "@/lib/types";

export const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

async function apiRequest<T>(path: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      ...getAuthHeader(),
      ...(options.headers || {})
    }
  });

  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    const message = payload?.message || payload?.error || "Server error";
    throw new Error(message);
  }

  return response.json() as Promise<T>;
}

export const getDashboardSummary = () => apiRequest<DashboardSummary>("/api/reports/summary");

export const getReportHistory = () => apiRequest<Report[]>("/api/reports");

export const createReport = (payload: {
  fileName: string;
  fileUrl: string;
  analysis: Record<string, unknown>;
  sourceType?: string;
  status?: string;
}) => apiRequest<Report>("/api/reports", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload)
});

export const getMe = () => apiRequest<UserProfile>("/api/users/me");
