import BoxStatistcs from "@/components/shared/BoxStatistcs";
import { getTranslations, setRequestLocale } from "next-intl/server";
import BasicInfo from "@/components/shared/BasicInfo";
import ClientDetailsDemo from "@/components/shared/ClientDetailsDemo";
import BalanceCardDemo from "@/components/shared/BalanceCardDemo";
import InvoiceCardDemo from "@/components/shared/InvoiceCardDemo";
import SearchBarDemo from "@/components/shared/SearchBarDemo";
import RecentTransactionDemo from "@/components/shared/RecentTransactionDemo";

type IDashboardPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IDashboardPageProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: "Dashboard",
  });
  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}



export default async function DashboardPage(props: IDashboardPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  

  return (
    <div className="p-8">
      <BoxStatistcs
        icon={"/images/icons/dashboard/box-states.svg"}
        title={"Total Orders"}
        value={"100"}
      />
      <BasicInfo />
      <div className="flex gap-4">
        <ClientDetailsDemo />
        <BalanceCardDemo />
      </div>
      <div className="mt-8">
        <InvoiceCardDemo />
      </div>
      <div className="mt-8">
        <SearchBarDemo />
      </div>
      <div className="mt-8">
        <RecentTransactionDemo />
      </div>
    </div>
  );
}
