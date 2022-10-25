const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
};

const bootstrap = (app) => {
  console.log(app);
};

import favicon from "./extensions/favicon.ico";
import AuthLogo from "./extensions/authlogo.png";

export default {
  config: {
    head: {
      favicon: favicon,
    },
    auth: {
      logo: AuthLogo,
    },
    theme: {
      colors: {
        buttonPrimary500: "#A6631B",
        buttonPrimary600: "#A6631B",
      },
    },
    notifications: { release: false },
  },
  bootstrap,
};
