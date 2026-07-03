import type {ReactNode} from 'react';
import {Card} from '@astryxdesign/core/Card';
import {Section} from '@astryxdesign/core/Section';
import {HStack, VStack} from '@astryxdesign/core/Stack';
import {Heading, Text} from '@astryxdesign/core/Text';

export function ContentPage({
  eyebrow,
  title,
  kicker,
  meta,
  children,
}: {
  eyebrow: string;
  title: string;
  kicker: string;
  meta: string[];
  children: ReactNode;
}) {
  return (
    <Section variant="transparent" padding={0} paddingBlock={10}>
      <div className="container container-narrow">
        <VStack gap={6}>
          <VStack gap={2}>
            <Text type="label" color="accent" as="p">
              {eyebrow}
            </Text>
            <Heading level={1} textWrap="balance">
              {title}
            </Heading>
            <Text type="body" color="secondary" as="p" textWrap="pretty">
              {kicker}
            </Text>
            <HStack gap={3} wrap="wrap">
              {meta.map(entry => (
                <Text key={entry} type="supporting">
                  {entry}
                </Text>
              ))}
            </HStack>
          </VStack>
          <Card padding={6}>
            <VStack gap={5} as="article">
              {children}
            </VStack>
          </Card>
        </VStack>
      </div>
    </Section>
  );
}

export function ContentSection({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: ReactNode;
}) {
  return (
    <VStack gap={3}>
      <Heading level={2} id={id}>
        {title}
      </Heading>
      {children}
    </VStack>
  );
}

export function Paragraph({children}: {children: ReactNode}) {
  return (
    <Text type="body" color="secondary" as="p" textWrap="pretty">
      {children}
    </Text>
  );
}
