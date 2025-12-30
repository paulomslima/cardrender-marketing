import { API_BASE_URL } from "./config";

export type Plan = {
  id: string;
  name: string;
  description: string | null;
  monthlyPriceCents: number | null;
  yearlyPriceCents: number | null;
  maxSeats: number | null;
  maxCards: number | null;
  maxSignatures: number | null;
  maxLinks: number | null;
  maxStorageMb: number | null;
  customBranding: boolean;
  customDomain: boolean;
  directoryEnabled: boolean;
  analyticsEnabled: boolean;
  advancedAnalytics: boolean;
  leadCapture: boolean;
  apiAccess: boolean;
  webhooks: boolean;
  ssoEnabled: boolean;
  prioritySupport: boolean;
  whiteLabel: boolean;
  premiumTemplates: boolean;
  headerCustomization: boolean;
  isActive: boolean;
  displayOrder: number | null;
};

type PlansResponse = {
  plans: Plan[];
};

export type PlansResult = {
  plans: Plan[];
  error: string | null;
};

export async function fetchPlans(): Promise<PlansResult> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/public/plans`, {
      headers: { Accept: "application/json" },
    });
    if (!response.ok) {
      return { plans: [], error: "Failed to load plans" };
    }
    const data = (await response.json()) as PlansResponse;
    return { plans: data.plans ?? [], error: null };
  } catch (error) {
    return { plans: [], error: "Failed to load plans" };
  }
}

export function formatPrice(cents: number | null) {
  if (!cents || cents <= 0) return "Free";
  return `$${(cents / 100).toFixed(0)}`;
}
