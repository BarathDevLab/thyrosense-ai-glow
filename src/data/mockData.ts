// ThyroSense Mock Data

export const tshTrendData = [
  { month: "Aug", TSH: 2.1, T3: 1.2, T4: 7.8 },
  { month: "Sep", TSH: 2.8, T3: 1.1, T4: 7.2 },
  { month: "Oct", TSH: 3.5, T3: 0.9, T4: 6.5 },
  { month: "Nov", TSH: 4.2, T3: 0.8, T4: 5.9 },
  { month: "Dec", TSH: 3.8, T3: 1.0, T4: 6.3 },
  { month: "Jan", TSH: 3.2, T3: 1.1, T4: 6.8 },
  { month: "Feb", TSH: 2.5, T3: 1.3, T4: 7.4 },
  { month: "Mar", TSH: 2.2, T3: 1.4, T4: 7.9 },
];

export const monthlyScanData = [
  { month: "Aug", scans: 12 },
  { month: "Sep", scans: 18 },
  { month: "Oct", scans: 25 },
  { month: "Nov", scans: 22 },
  { month: "Dec", scans: 30 },
  { month: "Jan", scans: 28 },
  { month: "Feb", scans: 35 },
  { month: "Mar", scans: 42 },
];

export const riskDistributionData = [
  { name: "Low Risk", value: 58, color: "#22c55e" },
  { name: "Moderate", value: 28, color: "#facc15" },
  { name: "High Risk", value: 14, color: "#ef4444" },
];

export const scanHistory = [
  {
    id: "SC-001",
    date: "2025-03-12",
    type: "Ultrasound",
    riskLevel: "Low",
    score: 87,
    status: "Complete",
    notes: "No abnormalities detected. TSH within normal range.",
    tsh: 2.2,
    t3: 1.4,
    t4: 7.9,
  },
  {
    id: "SC-002",
    date: "2025-02-18",
    type: "Blood Panel",
    riskLevel: "Moderate",
    score: 64,
    status: "Complete",
    notes: "Elevated TSH levels. Follow-up recommended.",
    tsh: 4.8,
    t3: 0.9,
    t4: 5.5,
  },
  {
    id: "SC-003",
    date: "2025-01-05",
    type: "MRI",
    riskLevel: "High",
    score: 34,
    status: "Complete",
    notes: "Nodule detected. Urgent specialist referral advised.",
    tsh: 6.2,
    t3: 0.7,
    t4: 4.8,
  },
  {
    id: "SC-004",
    date: "2024-12-20",
    type: "Ultrasound",
    riskLevel: "Low",
    score: 82,
    status: "Complete",
    notes: "Thyroid gland appears normal.",
    tsh: 2.5,
    t3: 1.3,
    t4: 7.5,
  },
  {
    id: "SC-005",
    date: "2024-11-14",
    type: "Blood Panel",
    riskLevel: "Moderate",
    score: 58,
    status: "Complete",
    notes: "Borderline T3 levels. Diet adjustment suggested.",
    tsh: 3.9,
    t3: 1.0,
    t4: 6.2,
  },
  {
    id: "SC-006",
    date: "2024-10-08",
    type: "Fine Needle Biopsy",
    riskLevel: "High",
    score: 28,
    status: "Complete",
    notes: "Cellular irregularities found. Oncology consult ordered.",
    tsh: 7.1,
    t3: 0.6,
    t4: 4.2,
  },
];

export const aiInsights = [
  { feature: "TSH Level", importance: 82, direction: "high", value: "2.2 mIU/L" },
  { feature: "T3 Free", importance: 68, direction: "normal", value: "1.4 pg/mL" },
  { feature: "T4 Free", importance: 54, direction: "normal", value: "7.9 ng/dL" },
  { feature: "Nodule Size", importance: 41, direction: "low", value: "Not detected" },
  { feature: "Anti-TPO", importance: 35, direction: "normal", value: "12 IU/mL" },
];

export const adminUserStats = [
  { month: "Aug", users: 320 },
  { month: "Sep", users: 450 },
  { month: "Oct", users: 620 },
  { month: "Nov", users: 810 },
  { month: "Dec", users: 1050 },
  { month: "Jan", users: 1280 },
  { month: "Feb", users: 1580 },
  { month: "Mar", users: 1920 },
];

export const adminRiskDistribution = [
  { name: "Low Risk", value: 1112, color: "#22c55e" },
  { name: "Moderate", value: 538, color: "#facc15" },
  { name: "High Risk", value: 270, color: "#ef4444" },
];

export const userProfile = {
  name: "Sarah Mitchell",
  email: "sarah.mitchell@email.com",
  age: 34,
  gender: "Female",
  bloodType: "A+",
  lastScan: "2025-03-12",
  totalScans: 6,
  healthScore: 87,
  riskLevel: "Low",
  doctor: "Dr. James Chen",
  location: "San Francisco, CA",
  avatar: null,
};

export const healthMetricsHistory = [
  { date: "Oct", score: 45 },
  { date: "Nov", score: 52 },
  { date: "Dec", score: 68 },
  { date: "Jan", score: 74 },
  { date: "Feb", score: 80 },
  { date: "Mar", score: 87 },
];
