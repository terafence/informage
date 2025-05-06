import { Metadata } from "next";

interface MetadataProps {
    title?: string;
    description?: string;
    icons?: Metadata["icons"];
    noIndex?: boolean;
    keywords?: string[];
    author?: string;
    twitterHandle?: string;
    type?: "website" | "article" | "profile";
    locale?: string;
    alternates?: Record<string, string>;
    publishedTime?: string;
    modifiedTime?: string;
}

export const generateMetadata = ({
    title = `Informage Techno Group Solutions Pvt Ltd`,
    description = `Informage Techno Group Solutions is a leading Indian defense, cybersecurity, and IT solutions provider specializing in counter-unmanned systems (C-UxS), anti-drone technologies, military communications, and advanced SOC services. Our Made-in-India solutions serve defense, government, and enterprise sectors with combat-proven technologies that enhance security posture against evolving threats. With expertise in networking, RCIED jammers, anti-IED devices, and military-grade communications, we deliver comprehensive security solutions tailored to protect critical assets and infrastructure.`,
    icons = [
        {
            rel: "icon",
            url: "/icons/icon-dark.png",
            media: "(prefers-color-scheme: light)",
        },
        {
            rel: "icon",
            url: "/icons/icon.png",
            media: "(prefers-color-scheme: dark)",
        },
    ],
    keywords = [
        // Core Brand & Identity
        "Informage",
        "Informage Techno Solutions",
        "Informage Group",
        "Informage Techno Group Solutions",
        "Informage Gurgaon",
        "Informage India",
        "Informage Defense",
        "Informage Cybersecurity",
        "Informage IT Solutions",
        "Informage Military Solutions",
        
        // Defense & Military Keywords
        "Defense Solutions India",
        "Military Technology India",
        "Indian Defense Company",
        "Defense Contractor India",
        "Military Communications Provider",
        "Made in India Defense",
        "Indigenous Defense Solutions",
        "Strategic Defense Technology",
        "Military Grade Security",
        "Defense Electronics India",
        "Tactical Communication Systems",
        "Defense R&D India",
        
        // Anti-Drone Technology
        "Anti-Drone Systems",
        "Anti-Drone Technology",
        "Anti-Drone Solutions",
        "Anti-Drone Devices",
        "Drone Detection Systems",
        "Drone Neutralization",
        "Drone Jamming Systems",
        "Anti-Drone Missiles",
        "Counter-Drone Technology",
        "Drone Countermeasures",
        "UAV Defense Systems",
        "Anti-UAV Solutions",
        "Drone Threat Mitigation",
        "Drone Defense India",
        
        // Counter Unmanned Systems
        "Counter Unmanned Systems",
        "C-UxS Solutions",
        "Ring C-UxS",
        "Combat-Proven C-UxS",
        "Next Generation C-UxS",
        "Strategic C-UxS Solutions",
        "Tactical C-UxS",
        "Multi-Domain C-UxS",
        "Directional C-UxS",
        "GNSS Manipulation Technology",
        "Soft-Kill C-UxS",
        "RF Detection Systems",
        "Anti-FPV Technology",
        "Uncrewed Systems Defense",
        "Multi-Platform C-UxS",
        
        // Anti-IED Technology
        "Anti IED Devices",
        "RCIED Jammer",
        "IED Countermeasures",
        "Roadside Bomb Protection",
        "IED Detection Systems",
        "Explosive Device Neutralization",
        "Anti-IED Solutions",
        "IED Jamming Technology",
        "Counter-IED Systems",
        "Military IED Protection",
        "Convoy Protection Systems",
        "Route Clearance Technology",
        "RF Jammers for IED",
        "Remote IED Neutralization",
        
        // Cybersecurity Core Terms
        "Cybersecurity India",
        "Network Security",
        "Information Security",
        "IT Security",
        "OT Security",
        "Industrial Cybersecurity",
        "Critical Infrastructure Security",
        "Enterprise Cybersecurity",
        "Hardware Security",
        "Embedded Security",
        "Edge Security",
        "Perimeter Security",
        "Defense-in-Depth",
        "Cyber Defense Solutions",
        "Indian Cybersecurity Provider",
        
        // SOC Services
        "Security Operations Center",
        "SOC Services India",
        "SOC as a Service",
        "Managed SOC",
        "24/7 SOC Monitoring",
        "SOC Analysts",
        "Enterprise SOC",
        "Threat Detection Services",
        "Incident Response Services",
        "Security Monitoring",
        "Threat Hunting Services",
        "SOC Implementation",
        "Security Event Management",
        "SOC Automation",
        "Advanced SOC Solutions",
        
        // Networking
        "Network Solutions India",
        "Enterprise Networking",
        "Network Infrastructure",
        "Routing Solutions",
        "Switching Solutions",
        "Network Security Devices",
        "Secure Network Design",
        "Network Architecture",
        "Military Grade Networks",
        "Tactical Networks",
        "Secure Communications Networks",
        "Network Integration Services",
        "WAN Solutions",
        "LAN Solutions",
        "Network Monitoring Solutions",
        
        // Military Communications
        "Military Communications",
        "Tactical Communications",
        "Battlefield Communications",
        "Secure Communications",
        "Military Radio Systems",
        "Encrypted Communications",
        "Tactical Radios",
        "Battlefield Network Solutions",
        "Secure Voice Communications",
        "Military Data Links",
        "Command & Control Communications",
        "Defense Communications India",
        "Combat Net Radio",
        "Software Defined Radio",
        "Satellite Communications",
        
        // GNSS Security
        "GNSS Security",
        "GNSS Spoofing Protection",
        "GNSS Jamming Protection",
        "GPS Security",
        "Navigation Security",
        "Positioning Security",
        "Timing Security",
        "GNSS Threat Detection",
        "Anti-Spoofing Solutions",
        "Anti-Jamming Systems",
        "GNSS Resilience",
        "Protected Navigation",
        "Secure Timing Solutions",
        "Military Navigation Security",
        
        // Security Technologies & Approaches
        "Zero Trust Architecture",
        "Air-Gapped Networks",
        "Network Segmentation",
        "Network Isolation",
        "Security Zoning",
        "Hardware-Based Security",
        "Security By Design",
        "Intrusion Detection System",
        "Intrusion Prevention System",
        "IDS/IPS",
        "Firewall",
        "Next-Gen Firewall",
        "Advanced Firewall",
        "Hardware Firewall",
        "Network Monitoring",
        "Threat Detection",
        "Threat Prevention",
        "Anti-Malware",
        "Anti-Virus",
        "Anti-Phishing",
        "Endpoint Protection",
        
        // Security Operations
        "CISO",
        "Chief Information Security Officer",
        "Security Information and Event Management",
        "SIEM",
        "Security Orchestration",
        "Security Automation",
        "Security Response",
        "Incident Response",
        "Threat Intelligence",
        "Vulnerability Management",
        "Penetration Testing",
        "Security Assessment",
        "Security Audit",
        "Red Team Services",
        "Blue Team Services",
        
        // Industry Applications
        "Defense Industry Cybersecurity",
        "Military Network Security",
        "Government Security Solutions",
        "Critical Infrastructure Protection",
        "Energy Sector Cybersecurity",
        "Power Grid Security",
        "Transportation Security",
        "Aviation Security",
        "Railway Cybersecurity",
        "Water Utility Cybersecurity",
        "Manufacturing Cybersecurity",
        "Smart Factory Security",
        "Smart Building Security",
        "Healthcare Cybersecurity",
        "Financial Security Solutions",
        
        // Compliance & Regulatory
        "Cybersecurity Compliance India",
        "ISO 27001 Compliance",
        "ISO 27002 Compliance",
        "CERT-In Guidelines",
        "Indian Data Protection",
        "Defense Procurement Standards",
        "Make in India Compliance",
        "Regulatory Compliance",
        "Government Security Standards",
        "Indian Military Standards",
        "Critical Information Infrastructure",
        "Indian Cybersecurity Regulations",
        "Defense Quality Standards",
        
        // India Specific Terms
        "Made in India",
        "Indian Cybersecurity Solutions",
        "Atmanirbhar Bharat",
        "India Defense Manufacturing",
        "Indian Military Supplier",
        "Indian Defense Technology",
        "Indigenous Defense Solutions",
        "Indian Security Provider",
        "Indian Military Technology",
        "Indian Critical Infrastructure Protection",
        "India Government Cybersecurity",
        "Indian Defense Cybersecurity",
        
        // Commercial & Procurement Terms
        "Cybersecurity Tenders",
        "Defense Procurement India",
        "Military Technology Tenders",
        "Government Cybersecurity Tenders",
        "Indian Military Tenders",
        "Critical Infrastructure Tenders",
        "Cybersecurity RFP",
        "Defense RFQ",
        "Enterprise Security Procurement",
        "Defense Contract Supplier",
        
        // Educational & Informational
        "Cybersecurity Glossary",
        "Network Security Concepts",
        "Cybersecurity Best Practices",
        "Defense Technology Guide",
        "Cybersecurity Solutions Guide",
        "Industrial Cybersecurity Guide",
        "OT Security Best Practices",
        "Critical Infrastructure Protection Guide",
        "Military Technology Guide",
        "C-UxS Implementation Guide",
        
        // Emerging Technologies & Concerns
        "Cloud Security",
        "Hybrid Cloud Security",
        "Edge Computing Security",
        "AI Security",
        "Machine Learning Security",
        "5G Network Security",
        "Quantum-Safe Security",
        "Post-Quantum Cryptography",
        "Supply Chain Security",
        "Zero-Day Protection",
        "Advanced Persistent Threat Protection",
        "Ransomware Protection",
        "Nation-State Threat Protection",
        "Cyber Warfare Defense",
        "Electronic Warfare Solutions"
    ],
    author = process.env.NEXT_PUBLIC_AUTHOR_NAME || "Informage Techno Group Solutions Pvt Ltd",
}: MetadataProps = {}): Metadata => {
    const metadataBase = new URL(process.env.NEXT_PUBLIC_APP_URL || "https://informagegroup.com");

    // Structured data for better SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Informage Techno Group Solutions Pvt Ltd",
        "url": metadataBase.href,
        "logo": `${metadataBase.href}images/og-image.png`,
        "description": description,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "209, Suncity Success Tower, Sector-65",
            "addressLocality": "Gurgaon",
            "addressRegion": "Haryana",
            "postalCode": "122005",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "email": "info@informagegroup.com",
            "telephone": "+911244284000",
            "availableLanguage": "English"
        },
        "sameAs": [
            "https://www.linkedin.com/company/informage-techno-solutions/",
            // Add other social profiles if available
        ],
        "knowsAbout": [
            "Cybersecurity",
            "Anti-Drone Technology",
            "Military Communications",
            "Network Security",
            "Counter Unmanned Systems",
            "RCIED Jammers",
            "Security Operations Center",
            "Critical Infrastructure Protection"
        ]
    };

    return {
        metadataBase,
        title: {
            template: `%s | ${process.env.NEXT_PUBLIC_APP_NAME || "Informage Techno Group Solutions"}`,
            default: title,
        },
        description,
        keywords,
        authors: [{ name: author }],
        creator: author,
        publisher: process.env.NEXT_PUBLIC_APP_NAME || "Informage Techno Group Solutions",
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        icons,
        openGraph: {
            type: "website",
            title,
            description,
            siteName: "Informage Techno Group Solutions | Leading Defense & Cybersecurity Provider in India",
            locale: "en_IN",
            url: metadataBase.href,
            images: [
                {
                    url: "/images/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: "Informage Techno Group Solutions - Advanced Defense, Military & Cybersecurity Solutions",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            site: author,
            title,
            description,
            images: [
                "/images/og-image.png"
            ],
        },
        alternates: {
            canonical: metadataBase.href,
            languages: {
                'en-IN': `${metadataBase.href}`,
            },
        },
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        applicationName: "Informage Techno Group Solutions",
        category: "Defense & Cybersecurity",
        verification: {
            // Add verification codes for search engines if available
            google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
            // bing verification is not supported by the Verification type
            // bing: process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
        },
        other: {
            'revisit-after': '7 days',
            'geo.region': 'IN-HR',
            'geo.position': '28.4081;77.0696',
            'ICBM': '28.4081, 77.0696',
            'og:video': process.env.NEXT_PUBLIC_COMPANY_VIDEO || "",
            'og:video:type': 'application/x-shockwave-flash',
            'og:video:width': '398',
            'og:video:height': '264',
            'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
            'yandex-verification': process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "",
            'facebook-domain-verification': process.env.NEXT_PUBLIC_FB_VERIFICATION || "",
            'format-detection': 'telephone=no',
            'structured-data': JSON.stringify(structuredData)
        }
    };
};