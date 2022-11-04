module.exports = {
  "rest-cache": {
    config: {
      provider: {
        name: "memory",
        options: {
          max: 32767,
          maxAge: 3600,
        },
      },
      strategy: {
        contentTypes: [
          // list of Content-Types UID to cache
          "api::room.room",
          "api::home-page.home-page",
          "plugin::navigation.navigation",
        ],
      },
    },
  },
};
