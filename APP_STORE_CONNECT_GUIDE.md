# App Store Connect Privacy Configuration Guide

This guide outlines the steps required to complete the App Privacy questionnaire in App Store Connect for apps using Google AdMob.

## Overview

Apple requires all apps to complete the App Privacy questionnaire, which discloses what data is collected and how it's used. This is mandatory for apps that use advertising networks like Google AdMob.

## Steps to Complete

### 1. Access App Privacy Section

1. Log in to [App Store Connect](https://appstoreconnect.apple.com/)
2. Navigate to your app
3. Go to the **App Privacy** section (usually found in the left sidebar or under the app's settings)

### 2. Complete the App Privacy Questionnaire

#### Step 1: Data Collection Disclosure

For each app that uses Google AdMob, you need to disclose the following data types:

**Data Types to Disclose:**

1. **Identifiers**
   - **Advertising Data (IDFA)**: Select "Yes"
     - Purpose: Third-Party Advertising
     - Linked to User: Yes
     - Used to Track You: Yes
     - Collected from App: Yes

2. **Usage Data**
   - **Product Interaction**: Select "Yes" (if applicable)
     - Purpose: Third-Party Advertising, Analytics
     - Linked to User: Yes
     - Used to Track You: Yes
     - Collected from App: Yes
   - **Advertising Data**: Select "Yes"
     - Purpose: Third-Party Advertising
     - Linked to User: Yes
     - Used to Track You: Yes
     - Collected from App: Yes

3. **Location**
   - **Coarse Location** (if collected): Select "Yes" (if AdMob collects approximate location via IP)
     - Purpose: Third-Party Advertising
     - Linked to User: Yes
     - Used to Track You: Yes
     - Collected from App: Yes

4. **Device ID**
   - **Device ID**: Select "Yes"
     - Purpose: Third-Party Advertising
     - Linked to User: Yes
     - Used to Track You: Yes
     - Collected from App: Yes

#### Step 2: Add Google AdMob as Third-Party Advertising Network

1. In the App Privacy section, find the **"Third-Party Advertising"** section
2. Click **"Add Advertising Network"** or **"Edit"**
3. Search for and select **"Google AdMob"** from the list
4. If Google AdMob is not in the list, you may need to:
   - Select "Other" or "Custom"
   - Enter "Google AdMob" as the network name
   - Provide Google's privacy policy URL: `https://policies.google.com/privacy`

#### Step 3: Enable Tracking Disclosure

1. In the App Privacy section, find **"Tracking"** or **"Data Used to Track You"**
2. Enable the disclosure that your app uses tracking for advertising purposes
3. This will trigger the App Tracking Transparency (ATT) requirement for iOS 14.5+

### 3. App Tracking Transparency (ATT) Implementation

**Important:** If you're collecting IDFA and using it for tracking, you MUST implement App Tracking Transparency in your app code:

```swift
// iOS Example (Swift)
import AppTrackingTransparency
import AdSupport

func requestTrackingPermission() {
    if #available(iOS 14, *) {
        ATTrackingManager.requestTrackingAuthorization { status in
            switch status {
            case .authorized:
                // Tracking authorized
                let idfa = ASIdentifierManager.shared().advertisingIdentifier
            case .denied, .restricted, .notDetermined:
                // Tracking denied or not determined
                break
            @unknown default:
                break
            }
        }
    }
}
```

**When to Request Permission:**
- Request permission only when you're about to use tracking data
- Show a clear explanation of why you need tracking permission
- Respect the user's choice

### 4. Privacy Policy Link

Ensure your app's App Store listing includes a link to your privacy policy:
- URL: `https://russellry.github.io/privacy.html`
- This should be added in the App Information section of App Store Connect

### 5. Review and Submit

1. Review all disclosures to ensure accuracy
2. Make sure all data types collected by AdMob are disclosed
3. Verify that Google AdMob is listed as a third-party advertising network
4. Save your changes
5. Submit your app for review (if applicable)

## Important Notes

- **Accuracy is Critical**: Incorrect disclosures can lead to app rejection or removal
- **Regular Updates**: Update disclosures whenever you add new data collection or change ad networks
- **User Transparency**: The disclosures you make will be visible to users on the App Store
- **Compliance**: This is required for App Store compliance and helps build user trust

## Data Collection Summary for Google AdMob

Based on Google AdMob's data collection practices, you should disclose:

| Data Type | Purpose | Linked to User | Used to Track |
|-----------|---------|----------------|---------------|
| Advertising Data (IDFA) | Third-Party Advertising | Yes | Yes |
| Device ID | Third-Party Advertising | Yes | Yes |
| Product Interaction | Third-Party Advertising, Analytics | Yes | Yes |
| Advertising Data | Third-Party Advertising | Yes | Yes |
| Coarse Location (if collected) | Third-Party Advertising | Yes | Yes |

## Resources

- [Apple App Privacy Documentation](https://developer.apple.com/app-store/app-privacy-details/)
- [Google AdMob Privacy Information](https://support.google.com/admob/answer/6128543)
- [Google Privacy Policy](https://policies.google.com/privacy)
- [App Tracking Transparency Framework](https://developer.apple.com/documentation/apptrackingtransparency)

## Checklist

- [ ] Completed App Privacy questionnaire
- [ ] Disclosed all data types collected by AdMob
- [ ] Added Google AdMob as third-party advertising network
- [ ] Enabled tracking disclosure
- [ ] Implemented App Tracking Transparency (ATT) in app code (if using IDFA)
- [ ] Added privacy policy URL to App Store listing
- [ ] Reviewed all disclosures for accuracy
- [ ] Tested ATT permission flow in app

---

**Last Updated:** January 2025

