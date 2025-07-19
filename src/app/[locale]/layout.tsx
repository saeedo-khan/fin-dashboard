import { routing } from "@/libs/I18nRouting";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from 'next-intl/server';
import { ThemeProvider } from '@/components/ThemeProvider';
import '@/styles/globals.css'

export function generateStaticParams() {
    return routing.locales.map(locale => ({ locale}))
}

export default async function RootLayout(props: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await props.params;
    
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    
    setRequestLocale(locale);

    let messages;
    try {
        messages = (await import(`@/locales/${locale}.json`)).default;
    } catch (error) {
        messages = {};
    }

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider>
                        {props.children}
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}