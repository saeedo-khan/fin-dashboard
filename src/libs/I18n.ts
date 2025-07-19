import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./I18nRouting";




export default getRequestConfig(async ({ requestLocale}) => {
    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requested)
    ? requested : routing.defaultLocale;

    return {
        locale,
        messages: (await import(`../locales/${locale}.json`)).default,
    }
} );