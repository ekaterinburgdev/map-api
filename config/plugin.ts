export default ({ env }) => ({
    'import-export-entries': {
      enabled: true,
    },
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
            "api::dtp.dtp",
            "api::blue-line.blue-line",
            "api::blue-line-line.blue-line-line",
            "api::center-border.center-border",
            "api::center-construction.center-construction",
            "api::center-constructions-object.center-constructions-object",
            "api::houses.houses",
            "api::okn.okn",
            "api::okn-object.okn-object",
            "api::okn-protect-zone.okn-protect-zone",
            "api::okn-security-zone.okn-security-zone",
            "api::outside-center-construction.outside-center-construction",
            "api::outside-center-constructions-object.outside-center-constructions-object",
            "api::pink-line.pink-line",
            "api::pink-line-line.pink-line-line",
            "api::red-line.red-line",
            "api::red-line-line.red-line-line",
            "api::touristic-center-border.touristic-center-border",
            "api::touristic-center-construction.touristic-center-construction",
            "api::touristic-center-constructions-object.touristic-center-constructions-object",
          ],
        },
      },
    },
  });