import React from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactMain from '@/components/contact/ContactMain';

import ContactMap from '@/components/contact/ContactMap';
import { siteConfig } from '@/data/siteData';

export const metadata = {
    title: `Contact | ${siteConfig.brandName}`,
    description: `Reach out to ${siteConfig.brandName} for your property needs in Ahmedabad, Gujarat.`,
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-bg">
            <ContactHero />
            <ContactMain />
            <ContactMap />
        </main>
    );
}
