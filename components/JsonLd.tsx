import { siteConfig } from '@/lib/site-config';

export function JsonLd() {
  const personId = `${siteConfig.domain}/#widmison-francois`;
  const orgId = `${siteConfig.domain}/#royol-technology`;
  const websiteId = `${siteConfig.domain}/#website`;

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${siteConfig.domain}/#profile`,
        url: siteConfig.domain,
        name: `${siteConfig.name} | Full-Stack Web Developer, Digital Marketer & Founder of Royol Technology`,
        description:
          'Official portfolio of Widmison Francois — Florida-based Full-Stack Web Developer, AI Digital Marketing Strategist, creator of Mex509, and Founder of Royol Technology (1M+ cross-platform followers).',
        mainEntity: { '@id': personId },
        about: { '@id': personId },
        isPartOf: { '@id': websiteId },
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: siteConfig.name,
        url: siteConfig.domain,
        image: `${siteConfig.domain}/images/widmison-francois.jpg`,
        jobTitle: siteConfig.jobTitle,
        email: `mailto:${siteConfig.email}`,
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: siteConfig.alumniOf.name,
          description: `${siteConfig.alumniOf.program}, ${siteConfig.alumniOf.year}`,
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Port St. Lucie',
          addressRegion: 'FL',
          addressCountry: 'US',
        },
        knowsAbout: [...siteConfig.knowsAbout],
        sameAs: [...siteConfig.sameAs],
        founder: { '@id': orgId },
        worksFor: { '@id': orgId },
        interactionStatistic: siteConfig.socials.map((s) => ({
          '@type': 'InteractionCounter',
          interactionType: 'https://schema.org/FollowAction',
          userInteractionCount: s.followers,
          description: `${s.label} ${s.metricLabel} for Royol Technology`,
          url: s.url,
        })),
      },
      {
        '@type': 'Organization',
        '@id': orgId,
        name: siteConfig.organization.name,
        url: siteConfig.organization.url,
        sameAs: [
          siteConfig.organization.url,
          siteConfig.organization.linksUrl,
          ...siteConfig.socials.map((s) => s.url),
        ],
        founder: { '@id': personId },
        interactionStatistic: [
          ...siteConfig.socials.map((s) => ({
            '@type': 'InteractionCounter',
            interactionType: 'https://schema.org/FollowAction',
            userInteractionCount: s.followers,
            description: `${s.label} ${s.metricLabel}`,
            url: s.url,
          })),
          {
            '@type': 'InteractionCounter',
            interactionType: 'https://schema.org/FollowAction',
            userInteractionCount: siteConfig.totalAudience.value,
            description: siteConfig.totalAudience.label,
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: siteConfig.domain,
        name: siteConfig.name,
        description:
          'Official portfolio of Widmison Francois — Full-Stack Web Developer, AI Digital Marketing Strategist, and Founder of Royol Technology.',
        publisher: { '@id': personId },
        inLanguage: 'en-US',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
