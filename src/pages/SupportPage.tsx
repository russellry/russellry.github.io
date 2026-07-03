import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {Collapsible, CollapsibleGroup} from '@astryxdesign/core/Collapsible';
import {Icon} from '@astryxdesign/core/Icon';
import {Link} from '@astryxdesign/core/Link';
import {VStack} from '@astryxdesign/core/Stack';
import {Heading, Text} from '@astryxdesign/core/Text';
import {Mail} from 'lucide-react';
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

const FAQS = [
  {
    question: 'Bug Reports',
    answer: (
      <Paragraph>
        Send the steps that caused the issue and I will aim to patch
        reproducible bugs in a future update.
      </Paragraph>
    ),
  },
  {
    question: 'Billing and Subscriptions',
    answer: (
      <Paragraph>
        All payments are handled securely by Apple. For refunds, start with{' '}
        <Link
          href="https://support.apple.com/en-us/HT204084"
          isExternalLink>
          Apple's refund request page
        </Link>
        . If you get stuck, email me and I will guide you.
      </Paragraph>
    ),
  },
  {
    question: 'Privacy Questions',
    answer: (
      <Paragraph>
        See the <Link href="/privacy.html">Privacy Policy</Link>. If something
        still feels unclear, drop me a line.
      </Paragraph>
    ),
  },
  {
    question: 'Feature Requests',
    answer: (
      <Paragraph>
        Tell me why the feature matters to you: the use case, the pain point,
        and what a good outcome would look like.
      </Paragraph>
    ),
  },
];

export function SupportPage() {
  return (
    <ContentPage
      eyebrow="Support"
      title="Help for Russell Ong apps."
      kicker="Send app questions, bugs, billing confusion, or feature requests directly to the developer inbox."
      meta={['Last Updated: June 11, 2026', 'Singapore Time UTC+08:00']}>
      <ContentSection title="How to Reach Me">
        <Paragraph>
          For any questions, issues, or feedback regarding my apps, please
          email me directly at:
        </Paragraph>
        <Card padding={5}>
          <VStack gap={2} hAlign="start">
            <Button
              label="russellongdev@gmail.com"
              variant="primary"
              icon={<Icon icon={Mail} size="sm" color="inherit" />}
              onClick={() => {
                window.location.href = 'mailto:russellongdev@gmail.com';
              }}
            />
            <Text type="supporting" as="p">
              I usually respond when I can. Clear reproduction details make
              support much faster.
            </Text>
          </VStack>
        </Card>
      </ContentSection>

      <ContentSection title="Before You Email">
        <Paragraph>
          To help me assist you as quickly as possible, please include where
          relevant:
        </Paragraph>
        <Bullets
          items={[
            <>
              <Strong>App name and version</Strong> from the app settings or
              App Store listing.
            </>,
            <>
              <Strong>Device model and iOS version</Strong>.
            </>,
            <>
              <Strong>Steps to reproduce</Strong> the issue. Screenshots or
              screen recordings are very helpful.
            </>,
            <>
              Your <Strong>App Store purchase receipt</Strong> for billing or
              refund questions.
            </>,
          ]}
        />
      </ContentSection>

      <ContentSection title="Frequently Asked Questions">
        <CollapsibleGroup type="single">
          {FAQS.map(faq => (
            <Collapsible
              key={faq.question}
              value={faq.question}
              defaultIsOpen={false}
              trigger={<Heading level={3}>{faq.question}</Heading>}>
              {faq.answer}
            </Collapsible>
          ))}
        </CollapsibleGroup>
      </ContentSection>

      <ContentSection title="Quick Troubleshooting">
        <Bullets
          items={[
            'Force-quit and relaunch the app.',
            'Ensure you are on the latest version from the App Store.',
            'Restart your device to clear cached issues.',
            'Still broken? Email me with the details above.',
          ]}
        />
      </ContentSection>
    </ContentPage>
  );
}
