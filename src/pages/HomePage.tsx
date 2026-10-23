import {Badge} from '@astryxdesign/core/Badge';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {Carousel} from '@astryxdesign/core/Carousel';
import {Grid} from '@astryxdesign/core/Grid';
import {Icon} from '@astryxdesign/core/Icon';
import {Link} from '@astryxdesign/core/Link';
import {List, ListItem} from '@astryxdesign/core/List';
import {Section} from '@astryxdesign/core/Section';
import {HStack, VStack} from '@astryxdesign/core/Stack';
import {Heading, Text} from '@astryxdesign/core/Text';
import {Mail} from 'lucide-react';
import {APPS, SOCIALS} from '../data/apps';
import type {App} from '../data/apps';

const featured = APPS.find(app => app.featured) ?? APPS[0];
const portfolio = APPS.filter(app => app !== featured);

function SectionHeader({
  eyebrow,
  title,
  kicker,
}: {
  eyebrow: string;
  title: string;
  kicker?: string;
}) {
  return (
    <VStack gap={2}>
      <Text type="label" color="accent" as="p">
        {eyebrow}
      </Text>
      <Heading level={2} textWrap="balance">
        {title}
      </Heading>
      {kicker ? (
        <Text type="body" color="secondary" as="p" textWrap="pretty">
          {kicker}
        </Text>
      ) : null}
    </VStack>
  );
}

function Hero() {
  return (
    <div className="container">
      <div className="hero-grid">
        <VStack gap={5}>
          <VStack gap={3}>
            <Text type="label" color="accent" as="p">
              iOS App Developer
            </Text>
            <Heading level={1} type="display-2" textWrap="balance">
              Russell Ong
            </Heading>
            <Text type="large" color="secondary" as="p" textWrap="pretty">
              I build native iPhone and iPad apps end to end: product scope,
              SwiftUI interfaces, local-first architecture, App Store release,
              and ongoing support.
            </Text>
          </VStack>
          <HStack gap={3} wrap="wrap">
            <Button
              label="View Apps"
              variant="primary"
              onClick={() => {
                document
                  .getElementById('work')
                  ?.scrollIntoView({behavior: 'smooth'});
              }}
            />
            <Button
              label="See Expertise"
              variant="secondary"
              onClick={() => {
                document
                  .getElementById('expertise')
                  ?.scrollIntoView({behavior: 'smooth'});
              }}
            />
          </HStack>
          <HStack gap={2} wrap="wrap">
            <Badge variant="green" label="Swift and SwiftUI" />
            <Badge variant="teal" label="App Store shipping" />
            <Badge variant="blue" label="Privacy-first architecture" />
          </HStack>
        </VStack>

        <div className="hero-collage" aria-hidden="true">
          <img src="/assets/persona-screenshot-1.webp" alt="" loading="eager" />
          <img
            src="/assets/treasure-life-screenshot-1.webp"
            alt=""
            loading="eager"
          />
          <img src="/assets/riskm-screenshot-1.webp" alt="" loading="eager" />
        </div>
      </div>
    </div>
  );
}

function StudioStrip() {
  const items = [
    {
      stat: '5',
      copy: 'Published App Store apps across productivity, life tracking, finance, personality, and contacts.',
    },
    {
      stat: 'Native',
      copy: 'Swift and SwiftUI interfaces designed around Apple platform behavior.',
    },
    {
      stat: 'End-to-end',
      copy: 'Product decisions, implementation, release, support, and iteration handled directly.',
    },
  ];
  return (
    <Section variant="muted" padding={0} paddingBlock={8}>
      <div className="container">
        <Grid columns={{minWidth: 260}} gap={6}>
          {items.map(item => (
            <VStack key={item.stat} gap={1}>
              <Heading level={3} accessibilityLevel={2}>
                {item.stat}
              </Heading>
              <Text type="supporting" as="p">
                {item.copy}
              </Text>
            </VStack>
          ))}
        </Grid>
      </div>
    </Section>
  );
}

function FeaturedApp() {
  return (
    <Section variant="transparent" padding={0} paddingBlock={10}>
      <div className="container" id="work">
        <VStack gap={6}>
          <SectionHeader
            eyebrow="Released Work"
            title="Apps shipped, maintained, and improved over time."
            kicker="My portfolio shows the parts that matter in real app development: focused scope, fast native screens, low-permission data handling, and enough polish for people to keep using the product."
          />
          <Card padding={6}>
            <Grid columns={{minWidth: 320, max: 2}} gap={8} align="center">
              <Carousel
                aria-label={`${featured.name} screenshots`}
                gap={3}
                hasSnap>
                {featured.screenshots.map((shot, index) => (
                  <img
                    key={shot}
                    className="shot-img"
                    src={shot}
                    alt={`${featured.name} screenshot ${index + 1}`}
                    loading="lazy"
                  />
                ))}
              </Carousel>
              <VStack gap={4}>
                <HStack gap={3} vAlign="center">
                  <img
                    className="app-icon"
                    src={featured.icon}
                    alt=""
                    aria-hidden="true"
                  />
                  <VStack gap={0.5}>
                    <Heading level={3}>{featured.name}</Heading>
                    <Text type="supporting" as="p">
                      {featured.tagline} ·{' '}
                      {featured.platforms.join(' and ')}
                    </Text>
                  </VStack>
                </HStack>
                <Text type="body" color="secondary" as="p" textWrap="pretty">
                  {featured.description}
                </Text>
                <List density="compact">
                  {featured.bullets.map(bullet => (
                    <ListItem
                      key={bullet}
                      label={bullet}
                      startContent={
                        <Icon icon="check" color="accent" size="sm" />
                      }
                    />
                  ))}
                </List>
                <HStack gap={3}>
                  <Button
                    label="View on App Store"
                    variant="primary"
                    onClick={() => {
                      window.open(featured.appStoreUrl, '_blank', 'noopener');
                    }}
                  />
                </HStack>
              </VStack>
            </Grid>
          </Card>
        </VStack>
      </div>
    </Section>
  );
}

function AppCard({app}: {app: App}) {
  return (
    <Card padding={5}>
      <VStack gap={4} height="100%">
        <HStack gap={3} vAlign="center">
          <img className="app-icon" src={app.icon} alt="" aria-hidden="true" />
          <VStack gap={0.5}>
            <Heading level={4} accessibilityLevel={3}>
              {app.name}
            </Heading>
            <Text type="supporting" as="p">
              {app.tagline} · {app.platforms.join(' and ')}
            </Text>
          </VStack>
        </HStack>
        <img
          className="card-cover"
          src={app.screenshots[0]}
          alt={`${app.name} screenshot`}
          loading="lazy"
        />
        <Text type="body" color="secondary" as="p" textWrap="pretty">
          {app.description}
        </Text>
        <Link href={app.appStoreUrl} isExternalLink isStandalone>
          View on App Store
        </Link>
      </VStack>
    </Card>
  );
}

function Portfolio() {
  return (
    <Section variant="transparent" padding={0} paddingBlock={6}>
      <div className="container">
        <VStack gap={6}>
          <SectionHeader
            eyebrow="Portfolio"
            title="Current App Store projects."
            kicker="Each app is a complete product, not a mockup: real users, store listings, screenshots, support, and ongoing maintenance."
          />
          <Grid columns={{minWidth: 300}} gap={5}>
            {portfolio.map(app => (
              <AppCard key={app.slug} app={app} />
            ))}
          </Grid>
          <HStack hAlign="center">
            <Link href={SOCIALS.appstore} isExternalLink isStandalone>
              View Developer Page on the App Store
            </Link>
          </HStack>
        </VStack>
      </div>
    </Section>
  );
}

function Expertise() {
  const principles = [
    {
      title: 'Scope before code.',
      copy: 'Strong apps start with a clear job, a tight workflow, and fewer features competing for attention.',
    },
    {
      title: 'Build native where it counts.',
      copy: 'Navigation, state, gestures, typography, and system affordances should feel at home on iOS.',
    },
    {
      title: 'Ship and maintain.',
      copy: 'Release quality includes App Store readiness, support paths, privacy clarity, and iteration after launch.',
    },
  ];
  return (
    <Section variant="transparent" padding={0} paddingBlock={10}>
      <div className="container" id="expertise">
        <Grid columns={{minWidth: 320, max: 2}} gap={8}>
          <VStack gap={4}>
            <SectionHeader
              eyebrow="Expertise"
              title="Native app development with product judgment."
            />
            <Text type="body" color="secondary" as="p" textWrap="pretty">
              I work across the full iOS product loop: defining the narrow job,
              building the SwiftUI interface, choosing the data model,
              polishing interactions, preparing App Store assets, and
              supporting users after release.
            </Text>
            <Text type="body" color="secondary" as="p" textWrap="pretty">
              My strongest work is in practical apps where execution quality
              matters: clear information hierarchy, reliable local state,
              accessible controls, and privacy decisions that are reflected in
              the architecture.
            </Text>
            <HStack gap={2} wrap="wrap">
              <Badge variant="green" label="Native Swift" />
              <Badge variant="green" label="SwiftUI" />
              <Badge variant="teal" label="Local data" />
              <Badge variant="blue" label="App Store release" />
              <Badge variant="purple" label="Accessibility" />
            </HStack>
          </VStack>
          <Card padding={6}>
            <List listStyle="decimal" density="spacious" hasDividers>
              {principles.map(principle => (
                <ListItem
                  key={principle.title}
                  label={principle.title}
                  description={
                    <Text type="supporting" as="p" textWrap="pretty">
                      {principle.copy}
                    </Text>
                  }
                />
              ))}
            </List>
          </Card>
        </Grid>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section variant="muted" padding={0} paddingBlock={10}>
      <div className="container" id="contact">
        <Grid columns={{minWidth: 320, max: 2}} gap={8} align="center">
          <VStack gap={4}>
            <SectionHeader
              eyebrow="Contact"
              title="App work, support, or technical conversations."
              kicker="Reach out about iOS app development, product feedback, support questions, or a specific App Store project."
            />
            <HStack gap={3} wrap="wrap">
              <Button
                label="Email Russell"
                variant="primary"
                icon={<Icon icon={Mail} size="sm" color="inherit" />}
                onClick={() => {
                  window.location.href = SOCIALS.email;
                }}
              />
              <Button
                label="Support Page"
                variant="secondary"
                onClick={() => {
                  window.location.href = '/support.html';
                }}
              />
            </HStack>
            <HStack gap={4} vAlign="center">
              <Link href={SOCIALS.linkedin} isExternalLink isStandalone>
                LinkedIn
              </Link>
              <Link href={SOCIALS.appstore} isExternalLink isStandalone>
                App Store
              </Link>
            </HStack>
          </VStack>
          <Card padding={6}>
            <VStack gap={2}>
              <Heading level={3}>Direct from the developer.</Heading>
              <Text type="body" color="secondary" as="p" textWrap="pretty">
                No handoff layer. Product decisions, implementation details,
                support context, and release tradeoffs all stay close to the
                code.
              </Text>
            </VStack>
          </Card>
        </Grid>
      </div>
    </Section>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />
      <StudioStrip />
      <FeaturedApp />
      <Portfolio />
      <Expertise />
      <Contact />
    </>
  );
}
