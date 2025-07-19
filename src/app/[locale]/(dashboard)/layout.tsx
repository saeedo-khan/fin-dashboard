import { getTranslations, setRequestLocale } from 'next-intl/server';
import Layout from '@/components/Layout';

export default async function DashboardLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'Dashboard',
  });

  return (
    <Layout>
      {props.children}
    </Layout>
  );
}
