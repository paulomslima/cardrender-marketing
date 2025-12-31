# Plans API Documentation

## Overview

This document describes how to fetch plan configurations from the Worktude API. The Plans API is a public endpoint that returns all active pricing plans configured by the super admin.

## Endpoint

```
GET /api/public/plans
```

**Base URL (Production):** `https://cardrender.pages.dev`

**Full URL:** `https://cardrender.pages.dev/api/public/plans`

## Authentication

No authentication required - this is a public endpoint.

## CORS Support

This API supports Cross-Origin Resource Sharing (CORS) with the following headers:
- `Access-Control-Allow-Origin: *`
- `Access-Control-Allow-Methods: GET, OPTIONS`
- `Access-Control-Allow-Headers: Content-Type`

## Caching

The API returns a `Cache-Control` header with `public, max-age=300` (5 minutes). Clients can safely cache the response for up to 5 minutes.

## Request

### Method
`GET`

### Headers
No special headers required.

### Query Parameters
None.

### Example Request

#### Using cURL
```bash
curl https://cardrender.pages.dev/api/public/plans
```

#### Using JavaScript (Fetch API)
```javascript
fetch('https://cardrender.pages.dev/api/public/plans')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

#### Using JavaScript (Async/Await)
```javascript
async function getPlans() {
  try {
    const response = await fetch('https://cardrender.pages.dev/api/public/plans');
    const data = await response.json();
    return data.plans;
  } catch (error) {
    console.error('Error fetching plans:', error);
    return [];
  }
}

const plans = await getPlans();
```

#### Using Axios
```javascript
import axios from 'axios';

const response = await axios.get('https://cardrender.pages.dev/api/public/plans');
const plans = response.data.plans;
```

## Response

### Success Response (200 OK)

```json
{
  "plans": [
    {
      "id": "free",
      "name": "Free",
      "description": "Perfect for individuals getting started",
      "monthlyPriceCents": 0,
      "yearlyPriceCents": 0,
      "maxSeats": 1,
      "maxCards": 1,
      "maxSignatures": 0,
      "maxLinks": 5,
      "maxStorageMb": 10,
      "customBranding": false,
      "customDomain": false,
      "directoryEnabled": false,
      "analyticsEnabled": false,
      "advancedAnalytics": false,
      "leadCapture": false,
      "apiAccess": false,
      "webhooks": false,
      "ssoEnabled": false,
      "prioritySupport": false,
      "whiteLabel": false,
      "premiumTemplates": false,
      "headerCustomization": false,
      "isActive": true,
      "displayOrder": 1
    },
    {
      "id": "starter",
      "name": "Starter",
      "description": "For small teams and professionals",
      "monthlyPriceCents": 1999,
      "yearlyPriceCents": 19990,
      "maxSeats": 5,
      "maxCards": 10,
      "maxSignatures": 100,
      "maxLinks": 20,
      "maxStorageMb": 100,
      "customBranding": true,
      "customDomain": false,
      "directoryEnabled": true,
      "analyticsEnabled": true,
      "advancedAnalytics": false,
      "leadCapture": true,
      "apiAccess": false,
      "webhooks": false,
      "ssoEnabled": false,
      "prioritySupport": false,
      "whiteLabel": false,
      "premiumTemplates": true,
      "headerCustomization": true,
      "isActive": true,
      "displayOrder": 2
    }
  ]
}
```

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique plan identifier (e.g., "free", "starter", "professional", "enterprise") |
| `name` | string | Display name of the plan |
| `description` | string | Brief description of the plan |
| `monthlyPriceCents` | number | Monthly price in cents (e.g., 1999 = $19.99) |
| `yearlyPriceCents` | number | Yearly price in cents (e.g., 19990 = $199.90) |
| `maxSeats` | number | Maximum number of team members |
| `maxCards` | number | Maximum number of business cards |
| `maxSignatures` | number | Maximum number of email signatures |
| `maxLinks` | number | Maximum number of social/custom links per card |
| `maxStorageMb` | number | Maximum storage in megabytes |
| `customBranding` | boolean | Whether custom branding is enabled |
| `customDomain` | boolean | Whether custom domain is supported |
| `directoryEnabled` | boolean | Whether team directory is enabled |
| `analyticsEnabled` | boolean | Whether basic analytics are available |
| `advancedAnalytics` | boolean | Whether advanced analytics are available |
| `leadCapture` | boolean | Whether lead capture forms are enabled |
| `apiAccess` | boolean | Whether API access is granted |
| `webhooks` | boolean | Whether webhooks are supported |
| `ssoEnabled` | boolean | Whether Single Sign-On is enabled |
| `prioritySupport` | boolean | Whether priority support is included |
| `whiteLabel` | boolean | Whether white-label branding is available |
| `premiumTemplates` | boolean | Whether premium card templates are accessible |
| `headerCustomization` | boolean | Whether header customization is allowed |
| `isActive` | boolean | Whether the plan is currently active |
| `displayOrder` | number | Sort order for displaying plans (1, 2, 3, ...) |

### Price Formatting

Prices are returned in cents to avoid floating-point precision issues. To display prices:

```javascript
function formatPrice(cents) {
  if (cents === 0) return 'Free';
  if (cents === null) return 'Custom';
  return `$${(cents / 100).toFixed(2)}`;
}

// Example usage
const monthlyPrice = formatPrice(plan.monthlyPriceCents); // "$19.99"
```

## Response Behavior

- Only **active plans** (`isActive: true`) are returned
- Plans are sorted by `displayOrder` in ascending order
- The response is cached for 5 minutes
- If no plans are configured, returns an empty array: `{ "plans": [] }`

## Error Handling

### 500 Internal Server Error

If the database is unavailable or there's a server error:

```json
{
  "error": "Internal server error"
}
```

### Best Practices for Error Handling

```javascript
async function fetchPlansWithErrorHandling() {
  try {
    const response = await fetch('https://cardrender.pages.dev/api/public/plans');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.plans || !Array.isArray(data.plans)) {
      throw new Error('Invalid response format');
    }
    
    return data.plans;
  } catch (error) {
    console.error('Failed to fetch plans:', error);
    // Return empty array or default plans
    return [];
  }
}
```

## Integration Examples

### React Component

```jsx
import { useState, useEffect } from 'react';

function PricingPlans() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPlans() {
      try {
        const response = await fetch('https://cardrender.pages.dev/api/public/plans');
        const data = await response.json();
        setPlans(data.plans);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    loadPlans();
  }, []);

  if (loading) return <div>Loading plans...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="pricing-plans">
      {plans.map(plan => (
        <div key={plan.id} className="plan-card">
          <h3>{plan.name}</h3>
          <p>{plan.description}</p>
          <div className="price">
            {plan.monthlyPriceCents === 0 
              ? 'Free' 
              : `$${(plan.monthlyPriceCents / 100).toFixed(2)}/mo`
            }
          </div>
          <ul>
            <li>{plan.maxSeats} team members</li>
            <li>{plan.maxCards} business cards</li>
            {plan.customBranding && <li>✓ Custom branding</li>}
            {plan.analyticsEnabled && <li>✓ Analytics</li>}
            {plan.apiAccess && <li>✓ API access</li>}
          </ul>
        </div>
      ))}
    </div>
  );
}
```

### Next.js Server Component

```tsx
// app/pricing/page.tsx
async function getPlans() {
  const response = await fetch('https://cardrender.pages.dev/api/public/plans', {
    next: { revalidate: 300 } // Cache for 5 minutes
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch plans');
  }
  
  const data = await response.json();
  return data.plans;
}

export default async function PricingPage() {
  const plans = await getPlans();
  
  return (
    <div>
      <h1>Pricing Plans</h1>
      <div className="grid grid-cols-3 gap-4">
        {plans.map(plan => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}
```

### Vue.js Component

```vue
<template>
  <div class="pricing-plans">
    <div v-if="loading">Loading plans...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-else class="plans-grid">
      <div v-for="plan in plans" :key="plan.id" class="plan-card">
        <h3>{{ plan.name }}</h3>
        <p>{{ plan.description }}</p>
        <div class="price">{{ formatPrice(plan.monthlyPriceCents) }}/mo</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const plans = ref([]);
const loading = ref(true);
const error = ref(null);

const formatPrice = (cents) => {
  if (cents === 0) return 'Free';
  return `$${(cents / 100).toFixed(2)}`;
};

onMounted(async () => {
  try {
    const response = await fetch('https://cardrender.pages.dev/api/public/plans');
    const data = await response.json();
    plans.value = data.plans;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});
</script>
```

## Testing the API

### Using Browser DevTools

Open your browser console and run:

```javascript
fetch('https://cardrender.pages.dev/api/public/plans')
  .then(r => r.json())
  .then(console.log);
```

### Using Postman

1. Create a new request
2. Set method to `GET`
3. Set URL to `https://cardrender.pages.dev/api/public/plans`
4. Click "Send"

### Using HTTPie

```bash
http GET https://cardrender.pages.dev/api/public/plans
```

## Rate Limiting

Currently, there are no rate limits on this public endpoint. However, we recommend:
- Implementing client-side caching (respect the `Cache-Control` header)
- Not making more than 1 request per minute
- Using conditional requests when appropriate

## Plan Management

Plans are configured by super administrators through the admin panel at:

```
https://cardrender.pages.dev/admin/plans
```

When a super admin:
- Creates a new plan
- Updates an existing plan
- Activates/deactivates a plan
- Changes the display order

The API will reflect these changes immediately (subject to the 5-minute cache).

## Support

For API issues or questions, please contact support or file an issue in the repository.

## Changelog

### v1.0.0 (December 31, 2025)
- Initial public release
- Support for all plan configuration fields
- CORS enabled for cross-origin requests
- 5-minute cache for performance
