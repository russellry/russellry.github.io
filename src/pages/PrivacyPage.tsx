import {Link} from '@astryxdesign/core/Link';
import {Text} from '@astryxdesign/core/Text';
import {ContentPage, ContentSection, Paragraph} from '../components/ContentPage';

function Bullets({items}: {items: React.ReactNode[]}) {
  return (
    <ul className="bullet-list">
      {items.map((item, index) => (
        <li key={index}>
          <Text type="body" color="secondary" as="p" textWrap="pretty">
            {item}
          </Text>
        </li>
      ))}
    </ul>
  );
}

function Strong({children}: {children: React.ReactNode}) {
  return (
    <Text weight="semibold" color="primary">
      {children}
    </Text>
  );
}

export function PrivacyPage() {
  return (
    <ContentPage
      eyebrow="Privacy"
      title="Privacy Policy for Russell Ong apps."
      kicker="A consolidated policy covering current and future mobile applications published by Russell Ong."
      meta={['Last Updated: May 14, 2026', 'All Russell Ong apps']}>
      <ContentSection title="Introduction">
        <Paragraph>
          This Privacy Policy applies to all current and future mobile
          applications (collectively, the "Apps" or "Services") developed and
          published by Russell Ong ("I", "me", "my", or "Developer").
        </Paragraph>
        <Paragraph>
          I am committed to protecting your privacy. This Privacy Policy
          explains how I collect, use, disclose, and safeguard your information
          when you use my Apps. Please read this Privacy Policy carefully.{' '}
          <Strong>
            BY DOWNLOADING, ACCESSING, OR USING MY APPS, YOU AGREE TO THE TERMS
            OF THIS PRIVACY POLICY. IF YOU DO NOT AGREE WITH THE TERMS OF THIS
            PRIVACY POLICY, PLEASE DO NOT USE MY APPS.
          </Strong>
        </Paragraph>
        <Paragraph>
          I reserve the right to make changes to this Privacy Policy at any
          time and for any reason. I will alert you about any changes by
          updating the "Last Updated" date of this Privacy Policy. You are
          encouraged to periodically review this Privacy Policy to stay
          informed of updates. Your continued use of the Apps after such
          changes will constitute your acceptance of the new terms.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Information I Collect">
        <Paragraph>
          My general philosophy is to collect only the minimum information
          necessary to provide and improve my Apps. The specific information
          collected may vary slightly between Apps, but the principles outlined
          here will apply.
        </Paragraph>
        <Paragraph>
          <Strong>Information You Provide Voluntarily:</Strong>
        </Paragraph>
        <Bullets
          items={[
            <>
              <Strong>User-Generated Content:</Strong> Any data you voluntarily
              create, input, or store within an App for its core functionality
              (e.g., notes, tasks, calculations, journal entries, settings).
              This data is typically stored locally on your device and is not
              transmitted to me unless a feature explicitly requires it (such
              as an optional cloud synchronization feature, which would be
              clearly indicated and require your consent).
            </>,
            <>
              <Strong>Support and Feedback:</Strong> If you contact me for
              customer support, to provide feedback, or for other inquiries, I
              may collect your name, email address, and the content of your
              communication to effectively address your query.
            </>,
            <>
              <Strong>
                Personally Identifiable Information (for specific features):
              </Strong>{' '}
              For some features or services within an App (e.g., creating an
              account for premium features, if offered), I may require you to
              provide certain personally identifiable information. This will be
              clearly requested and its use explained at the point of
              collection.
            </>,
          ]}
        />
        <Paragraph>
          <Strong>Information Collected Automatically:</Strong>
        </Paragraph>
        <Paragraph>
          My Apps are designed to minimize automatic data collection. Where
          data is collected automatically, it is typically for essential
          operational purposes or to improve the user experience, and is
          handled as follows:
        </Paragraph>
        <Bullets
          items={[
            <>
              <Strong>Device and Usage Data (Non-Personal/Aggregated):</Strong>{' '}
              Some Apps may collect non-personally identifiable information
              about your device (e.g., device model, operating system version)
              and how you use the App. This data is typically aggregated and
              anonymized and may be collected through standard platform
              services (like Apple App Analytics) or privacy-conscious
              third-party analytics tools.
            </>,
            <>
              <Strong>Crash Reporting:</Strong> To maintain and improve app
              stability, Apps may utilize services to automatically collect
              diagnostic information when an App crashes. This data does not
              typically contain personally identifiable information.
            </>,
            <>
              <Strong>No Precise Location Tracking:</Strong> My Applications
              generally do not gather precise information about the location of
              your mobile device unless a specific feature requires it and you
              grant explicit permission.
            </>,
          ]}
        />
        <Paragraph>
          <em>
            For specific details on data collection for a particular App,
            please refer to its App Store listing or any in-app information
            provided. However, the principles in this policy will always
            govern.
          </em>
        </Paragraph>
      </ContentSection>

      <ContentSection title="Advertising and Google AdMob">
        <Paragraph>
          Some of my Apps may display advertisements to support the free
          versions of the applications. I use <Strong>Google AdMob</Strong> as
          my advertising network provider. This applies to all of my Apps that
          show ads; Apps that are paid or ad-free are excluded from ad
          collection entirely.
        </Paragraph>
        <Paragraph>
          <Strong>Data Collected for Advertising:</Strong>
        </Paragraph>
        <Bullets
          items={[
            <>
              <Strong>Device Information:</Strong> Device identifiers (such as
              advertising IDs like IDFA on iOS), device type, operating system,
              and device settings.
            </>,
            <>
              <Strong>Usage Data:</Strong> Information about how you interact
              with ads, including ad views, clicks, and interactions.
            </>,
            <>
              <Strong>Location Data:</Strong> General location information
              (approximate location based on IP address) may be used for ad
              targeting, though precise location is not collected without your
              explicit permission.
            </>,
            <>
              <Strong>App Activity:</Strong> Information about the app you're
              using and general usage patterns to help deliver relevant
              advertisements.
            </>,
            <>
              <Strong>IP Address:</Strong> Your IP address may be collected and
              used for ad delivery and fraud prevention purposes.
            </>,
          ]}
        />
        <Paragraph>
          For more detailed information, please review{' '}
          <Link href="https://policies.google.com/privacy" isExternalLink>
            Google's Privacy Policy
          </Link>{' '}
          and{' '}
          <Link
            href="https://support.google.com/admob/answer/6128543"
            isExternalLink>
            Google AdMob's privacy information
          </Link>
          .
        </Paragraph>
      </ContentSection>

      <ContentSection title="How I Use Your Information">
        <Bullets
          items={[
            'To provide, operate, maintain, and enhance the functionality of the Apps.',
            'To personalize your experience where appropriate.',
            'To develop new Apps, features, and services.',
            'To improve the Apps, including fixing bugs and addressing performance issues.',
            'To respond to your inquiries, support requests, and feedback.',
            'To comply with legal obligations and protect my legal rights.',
          ]}
        />
        <Paragraph>
          <Strong>Emphasis on Local Data Storage:</Strong> A core principle for
          many of my Apps is to store your primary user-generated content
          locally on your device. This means I generally do not have access to
          this data unless you explicitly choose to share it.
        </Paragraph>
      </ContentSection>

      <ContentSection
        title="BioSignal: Health Report and Journal Data Handling"
        id="biosignal">
        <Paragraph>
          <Strong>BioSignal</Strong> helps you import lab reports, review
          extracted biomarkers, and log optional journal check-ins. BioSignal
          is intended for informational tracking only and does not provide
          medical advice, diagnosis, or treatment guidance.
        </Paragraph>
        <Bullets
          items={[
            <>
              <Strong>Data collected and how it is collected:</Strong> BioSignal
              stores the lab report PDFs or images you choose from Files,
              Photos, the document picker, or the iOS share sheet; text
              extracted from those reports; extracted biomarker values; report
              dates; source snippets; optional journal notes and check-ins; and
              optional sex at birth and date of birth that you enter for
              reference-interval personalization.
            </>,
            <>
              <Strong>On-device report processing:</Strong> Lab report files,
              extracted report text, biomarker values, source snippets, journal
              notes, daily check-ins, sex at birth, and date of birth are
              stored and processed on your device. BioSignal uses Apple Vision
              OCR, deterministic rule-based parsing, and Apple's on-device
              Foundation Models framework when available. This Apple OS
              framework runs on the user's device; BioSignal does not transmit
              report contents to Apple, OpenAI, Google Gemini, Anthropic,
              BioSignal servers, or any other cloud AI endpoint for parsing.
            </>,
            <>
              <Strong>How BioSignal uses this data:</Strong> BioSignal uses
              report and journal data to extract and save biomarkers, show
              trends, compare reports, support optional journal summaries,
              apply age-aware and sex-aware reference intervals when available,
              schedule local reminders you enable, and let you review or delete
              saved local data.
            </>,
            <>
              <Strong>Subscriptions:</Strong> BioSignal uses RevenueCat to
              manage BioSignal Pro purchase status. RevenueCat may receive app
              user identifiers, product identifiers, purchase metadata, and
              related diagnostics needed to process and restore purchases.
              RevenueCat does not receive your lab report contents, extracted
              biomarker values, journals, sex at birth, or date of birth from
              BioSignal.
            </>,
            <>
              <Strong>Advertising:</Strong> The free version of BioSignal may
              show Google AdMob ads and may use Google's User Messaging
              Platform for ad consent. If personalized ads or tracking are
              used, BioSignal requests permission through Apple's App Tracking
              Transparency prompt before accessing the device advertising
              identifier. Google AdMob and User Messaging Platform do not
              receive your lab report contents, extracted biomarker values,
              journals, sex at birth, or date of birth from BioSignal.
            </>,
            <>
              <Strong>Third-party protection:</Strong> RevenueCat, Google
              AdMob, and Google's User Messaging Platform provide their own
              privacy and security protections for the limited purchase,
              advertising, consent, device, and diagnostic data they process.
              BioSignal does not share lab report contents or health profile
              details with those services or with a third-party AI service.
            </>,
            <>
              <Strong>Notifications:</Strong> Daily journal reminders are
              scheduled only after you enable them. Notification content is
              reminder-oriented and does not upload your health report data to
              me.
            </>,
            <>
              <Strong>Data deletion:</Strong> You can clear BioSignal's local
              app data from inside the app. Deleting the app also removes its
              local app container data from the device, subject to normal iOS
              behavior.
            </>,
          ]}
        />
      </ContentSection>

      <ContentSection title="ContactSweeper: Contacts Data Handling">
        <Paragraph>
          <Strong>ContactSweeper</Strong> is a contact management app that
          helps you clean up and organize your device's contacts. Here is how
          your contacts data is handled:
        </Paragraph>
        <Bullets
          items={[
            <>
              <Strong>No Server Upload:</Strong> Your contacts are{' '}
              <Strong>never uploaded</Strong> to any server.
            </>,
            <>
              <Strong>No Server Storage:</Strong> I do <Strong>not store</Strong>{' '}
              your contacts on any server.
            </>,
            <>
              <Strong>On-Device Processing Only:</Strong> All operations are
              performed entirely on your device using Apple's Contacts
              framework.
            </>,
          ]}
        />
        <Paragraph>
          <em>
            In summary: ContactSweeper operates entirely on-device. Your
            contacts never leave your device.
          </em>
        </Paragraph>
      </ContentSection>

      <ContentSection title="Contact Me">
        <Paragraph>
          If you have any questions, concerns, comments, or suggestions about
          this Privacy Policy, please contact me at:{' '}
          <Link href="mailto:russellongdev@gmail.com">
            russellongdev@gmail.com
          </Link>
        </Paragraph>
        <Text type="supporting" as="p" textWrap="pretty">
          <Strong>Disclaimer:</Strong> This privacy policy provides a general
          overview of my approach to privacy. While it aims to be
          comprehensive, specific Apps may have slight variations or additional
          details provided within their App Store listings. For legal
          assurance, consulting with a legal professional is strongly
          recommended.
        </Text>
      </ContentSection>
    </ContentPage>
  );
}
