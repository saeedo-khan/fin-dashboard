import { LocalePrefixMode } from "next-intl/routing";

const localePrefix: LocalePrefixMode =  'as-needed';


export const routing = {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    localePrefix
}