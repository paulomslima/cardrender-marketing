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
    
    // If API is not available (404), use mock data
    if (response.status === 404 || !response.ok) {
      console.warn('Plans API not available, using mock data');
      return getMockPlans();
    }
    
    const data = (await response.json()) as PlansResponse;
    return { plans: data.plans ?? [], error: null };
  } catch (error) {
    console.warn('Plans API error, using mock data:', error);
    return getMockPlans();
  }
}

function getMockPlans(): PlansResult {
  return {
    plans: [
      {
        id: "starter",
        name: "Starter",
        description: "Perfect for individuals and small teams getting started",
        monthlyPriceCents: 0,
        yearlyPriceCents: 0,
        maxSeats: 5,
        maxCards: 10,
        maxSignatures: 5,
        maxLinks: 10,
        maxStorageMb: 100,
        customBranding: false,
        customDomain: false,
        directoryEnabled: true,
        analyticsEnabled: true,
        advancedAnalytics: false,
        leadCapture: false,
        apiAccess: false,
        webhooks: false,
        ssoEnabled: false,
        prioritySupport: false,
        whiteLabel: false,
        premiumTemplates: false,
        headerCustomization: false,
        isActive: true,
        displayOrder: 1,
      },
      {
        id: "professional",
        name: "Professional",
        description: "Advanced features for growing teams and businesses",
        monthlyPriceCents: 1200,
        yearlyPriceCents: 11520,
        maxSeats: 50,
        maxCards: -1,
        maxSignatures: -1,
        maxLinks: -1,
        maxStorageMb: 1000,
        customBranding: true,
        customDomain: true,
        directoryEnabled: true,
        analyticsEnabled: true,
        advancedAnalytics: true,
        leadCapture: true,
        apiAccess: true,
        webhooks: false,
        ssoEnabled: false,
        prioritySupport: true,
        whiteLabel: false,
        premiumTemplates: true,
        headerCustomization: true,
        isActive: true,
        displayOrder: 2,
      },
      {
        id: "enterprise",
        name: "Enterprise",
        description: "Custom solutions for large organizations",
        monthlyPriceCents: null,
        yearlyPriceCents: null,
        maxSeats: -1,
        maxCards: -1,
        maxSignatures: -1,
        maxLinks: -1,
        maxStorageMb: -1,
        customBranding: true,
        customDomain: true,
        directoryEnabled: true,
        analyticsEnabled: true,
        advancedAnalytics: true,
        leadCapture: true,
        apiAccess: true,
        webhooks: true,
        ssoEnabled: true,
        prioritySupport: true,
        whiteLabel: true,
        premiumTemplates: true,
        headerCustomization: true,
        isActive: true,
        displayOrder: 3,
      },
    ],
    error: null,
  };
}

export function formatPrice(cents: number | null) {
  if (!cents || cents <= 0) return "Free";
  return `$${(cents / 100).toFixed(0)}`;
}

// Note: When the app API endpoint `/api/public/plans` is ready,
// remove the getMockPlans() function and update fetchPlans() to handle errors properly
