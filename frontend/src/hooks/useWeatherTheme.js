// src/hooks/useWeatherTheme.js
import { useEffect, useState } from "react";

const MAIN_THEME = {
  accent: "#F6F8F6",
  text: "#F6F8F6",
  page: {
    bg: "linear-gradient(180deg, #050505 0%, #101512 55%, #090C0B 100%)",
    text: "#F6F8F6",
  },
  hero: {
    bg: "#E7E9EC",
    text: "#121415",
  },
  footer: {
    bg: "linear-gradient(135deg, #050806 0%, #101612 100%)",
    text: "#E5F0E8",
  },
  sections: {
    about: {
      bg: "linear-gradient(135deg, #0B0D0C 0%, #151B17 100%)",
      text: "#F6F8F6",
      palette: {
        heading: "#F9FBF9",
        accent: "#F6F8F6",
        muted: "#C8D4CD",
        divider: "rgba(67, 104, 80, 0.45)",
        card: {
          bg: "rgba(17, 24, 20, 0.9)",
          border: "rgba(67, 104, 80, 0.38)",
          text: "#F6F8F6",
          muted: "#CAD6CF",
        },
        cardAlt: {
          bg: "rgba(21, 29, 24, 0.88)",
          border: "rgba(67, 104, 80, 0.3)",
          text: "#F6F8F6",
          muted: "#BECAC3",
        },
      },
    },
    portfolio: {
      bg: "linear-gradient(135deg, #090C0B 0%, #141B16 70%, #0B100D 100%)",
      text: "#F6F8F6",
      palette: {
        overlay: "radial-gradient(circle at top, rgba(67,104,80,0.18), transparent 62%)",
        heading: "#F9FBF9",
        accent: "#F6F8F6",
        muted: "#C1CDC6",
        divider: "rgba(67, 104, 80, 0.5)",
        card: {
          bg: "rgba(9, 13, 11, 0.94)",
          border: "rgba(67, 104, 80, 0.42)",
          text: "#F6F8F6",
          muted: "#CBD7CF",
        },
        cardAlt: {
          bg: "rgba(13, 18, 16, 0.9)",
          border: "rgba(67, 104, 80, 0.35)",
          text: "#F6F8F6",
          muted: "#C3D0C8",
        },
        featureCard: {
          bg: "rgba(12, 17, 15, 0.92)",
          border: "rgba(67, 104, 80, 0.48)",
          text: "#F6F8F6",
          muted: "#D2DCD6",
        },
        projectCard: {
          bg: "rgba(8, 12, 10, 0.9)",
          border: "rgba(67, 104, 80, 0.4)",
          text: "#F6F8F6",
          muted: "#C5D1CA",
          mediaBg: "linear-gradient(135deg, rgba(67, 104, 80, 0.45), rgba(18, 24, 20, 0.7))",
        },
        button: {
          bg: "#436850",
          text: "#F6F8F6",
          hover: "#2C4739",
        },
        deepDive: {
          bg: "rgba(10, 14, 12, 0.88)",
          border: "rgba(67, 104, 80, 0.32)",
          text: "#F6F8F6",
          accent: "#E6F2EA",
          tabs: {
            bg: "rgba(14, 20, 17, 0.72)",
            border: "rgba(67, 104, 80, 0.28)",
            text: "#D6E6DA",
            activeBg: "#436850",
            activeText: "#F6F8F6",
            activeBorder: "#436850",
          },
        },
      },
    },
    certifications: {
      bg: "linear-gradient(135deg, #0C0E0D 0%, #161C17 60%, #0A0E0B 100%)",
      text: "#F6F8F6",
      palette: {
        heading: "#F9FBF9",
        accent: "#F6F8F6",
        muted: "#C8D4CD",
        divider: "rgba(67, 104, 80, 0.45)",
        card: {
          bg: "rgba(28, 36, 32, 0.92)",
          border: "rgba(67, 104, 80, 0.32)",
          text: "#F6F8F6",
          muted: "#CEDAD3",
        },
        cardAlt: {
          bg: "rgba(21, 29, 25, 0.88)",
          border: "rgba(67, 104, 80, 0.28)",
          text: "#F6F8F6",
        },
        skillDeck: {
          labelBg: "rgba(67, 104, 80, 0.26)",
          labelText: "#F6F8F6",
          sublabelText: "#C4D1C9",
          countText: "#C4D1C9",
          groupBadgeBg: "rgba(67, 104, 80, 0.22)",
          groupBadgeText: "#E6F2EA",
          groupBadgeBorder: "rgba(67, 104, 80, 0.34)",
          itemBg: "rgba(19, 26, 22, 0.9)",
          itemBorder: "rgba(67, 104, 80, 0.36)",
          itemText: "#F6F8F6",
          tagBg: "rgba(67, 104, 80, 0.24)",
          tagBorder: "rgba(67, 104, 80, 0.36)",
          tagText: "#F6F8F6",
        },
      },
    },
    contact: {
      bg: "linear-gradient(135deg, #080A09 0%, #141A16 100%)",
      text: "#F6F8F6",
      buttonContrast: "#F6F8F6",
    },
  },
  blog: {
    bg: "#0A0F0D",
    text: "#F6F8F6",
    cardBg: "rgba(16, 23, 19, 0.9)",
    cardText: "#F6F8F6",
    listBg: "rgba(12, 18, 16, 0.92)",
    palette: {
      nav: "#E6F2EA",
      navMuted: "#9DB3A6",
      heading: "#F9FBF9",
      body: "#E9F3ED",
      muted: "#C0CEC6",
      divider: "rgba(67, 104, 80, 0.4)",
      date: "#C9D9D0",
      cardBorder: "rgba(67, 104, 80, 0.32)",
      buttonBg: "#436850",
      buttonText: "#F6F8F6",
      buttonHover: "#2C4739",
      pillBorder: "rgba(67, 104, 80, 0.4)",
    },
  },
};

const THEMES = {
  main: MAIN_THEME,
  clear: {
    accent: "#9C7B57",
    text: "#2C4739",
    sections: {
      about: {
        bg: "linear-gradient(135deg, #f2e6d5 0%, #e0c9a9 100%)",
        text: "#2C4739",
        palette: {
          heading: "#4C2E15",
          accent: "#B07A3F",
          muted: "#876748",
          divider: "#C99555",
          card: {
            bg: "rgba(255,247,232,0.92)",
            border: "#E4C49C",
            text: "#4A3423",
            muted: "#7C6045",
          },
          cardAlt: {
            bg: "rgba(255,239,215,0.9)",
            border: "#DEC093",
            text: "#4A3423",
            muted: "#7C6045",
          },
        },
      },
      portfolio: {
        bg: "linear-gradient(135deg, #e9dcc7 0%, #d4b892 100%)",
        text: "#2C4739",
        palette: {
          heading: "#4C331E",
          accent: "#B07A3F",
          muted: "#7F6247",
          divider: "#C99555",
          card: {
            bg: "rgba(255,244,226,0.9)",
            border: "#E1C29A",
            text: "#433122",
            muted: "#755940",
          },
          featureCard: {
            bg: "rgba(255,240,220,0.94)",
            border: "#D8B78B",
            text: "#3F2C1E",
          },
          projectCard: {
            bg: "rgba(255,245,230,0.92)",
            border: "#E2C49A",
            text: "#3F2C1E",
            muted: "#74573B",
          },
          button: {
            bg: "#9C7B57",
            text: "#FFF8F0",
            hover: "#815E3B",
          },
        },
      },
      certifications: {
        bg: "linear-gradient(135deg, #f1e4d2 0%, #ddc29a 100%)",
        text: "#2C4739",
        palette: {
          heading: "#4B311A",
          accent: "#B07A3F",
          muted: "#7F6348",
          divider: "#C99555",
          card: {
            bg: "rgba(255,242,223,0.92)",
            border: "#E3C59B",
            text: "#422F1F",
            muted: "#715337",
          },
        cardAlt: {
          bg: "rgba(255,236,214,0.9)",
          border: "#DCBA8F",
          text: "#422F1F",
        },
        skillDeck: {
          labelBg: "rgba(176, 122, 63, 0.2)",
          labelText: "#B07A3F",
          sublabelText: "#7F6247",
          countText: "#836246",
          groupBadgeBg: "rgba(176, 122, 63, 0.18)",
          groupBadgeText: "#B07A3F",
          groupBadgeBorder: "rgba(176, 122, 63, 0.3)",
          itemBg: "rgba(255, 244, 226, 0.88)",
          itemBorder: "rgba(193, 149, 85, 0.4)",
          itemText: "#74573B",
          tagBg: "rgba(176, 122, 63, 0.18)",
          tagBorder: "rgba(176, 122, 63, 0.35)",
          tagText: "#4C331E",
        },
      },
    },
      skills: {
        bg: "linear-gradient(135deg, #F5EBDD 0%, #E4CFA9 100%)",
        text: "#2C4739",
        palette: {
          heading: "#4C331E",
          accent: "#B07A3F",
          muted: "#836246",
          divider: "#C99555",
          badges: {
            languages: { gradient: ["#F3E2C2", "#E0C49A"], text: "#3F2C1E" },
            frameworks: { gradient: ["#F1D5AE", "#DBAF7A"], text: "#3F2C1E" },
            tools: { gradient: ["#E7C59B", "#CF9D62"], text: "#3F2C1E" },
            other: { gradient: ["#F5EAD3", "#DEC49A"], text: "#3F2C1E" },
          },
        },
      },
      contact: {
        bg: "linear-gradient(135deg, #b99364 0%, #926c40 100%)",
        text: "#F5EDE1",
        buttonContrast: "#2C4739",
        palette: {
          heading: "#FDF8F2",
          body: "#F4E6D4",
          muted: "#E8D3B9",
          divider: "rgba(248,240,228,0.25)",
          buttonBg: "#F5EDE1",
          buttonText: "#6F4F2D",
          buttonHover: "#DFCBB2",
        },
      },
    },
    footer: {
      bg: "linear-gradient(135deg, #9C7B57 0%, #6F4F2D 100%)",
      text: "#F5EDE1",
    },
    blog: {
      bg: "linear-gradient(135deg, #f3e6d4 0%, #e1c8a2 100%)",
      text: "#2C4739",
      cardBg: "rgba(248, 236, 218, 0.92)",
      cardText: "#2C4739",
      listBg: "linear-gradient(135deg, rgba(243,230,212,0.9) 0%, rgba(225,200,162,0.6) 100%)",
      palette: {
        nav: "#755534",
        navMuted: "#9F7B53",
        heading: "#4B311A",
        body: "#513721",
        muted: "#7D6243",
        divider: "#C99555",
        date: "#B07A3F",
        cardBorder: "#E1C29A",
        buttonBg: "#9C7B57",
        buttonText: "#FFF8F0",
        buttonHover: "#815E3B",
        pillBorder: "rgba(156,123,87,0.4)",
      },
    },
  },
  clouds: {
    accent: "#7a8896",
    text: "#1f2730",
    sections: {
      about: {
        bg: "linear-gradient(135deg, #e6eaef 0%, #d7dde3 100%)",
        text: "#1f2730",
        palette: {
          heading: "#2B3440",
          accent: "#6D7A88",
          muted: "#58626C",
          divider: "#AAB4C1",
          card: {
            bg: "rgba(236,240,245,0.95)",
            border: "#C9D1DA",
            text: "#24303A",
            muted: "#58626C",
          },
          cardAlt: {
            bg: "rgba(228,233,240,0.92)",
            border: "#BFC8D3",
            text: "#24303A",
            muted: "#58626C",
          },
        },
      },
      portfolio: {
        bg: "linear-gradient(135deg, #dfe4ea 0%, #cbd2d9 100%)",
        text: "#1f2730",
        palette: {
          heading: "#2B3440",
          accent: "#718093",
          muted: "#5B6774",
          divider: "#A8B3C1",
          card: {
            bg: "rgba(234,238,243,0.94)",
            border: "#C6CED7",
            text: "#24303A",
            muted: "#5B6774",
          },
          featureCard: {
            bg: "rgba(228,233,240,0.94)",
            border: "#BAC4CF",
            text: "#1F2933",
          },
          projectCard: {
            bg: "rgba(237,241,245,0.94)",
            border: "#C2CBD5",
            text: "#1F2933",
            muted: "#56616C",
          },
          button: {
            bg: "#6F8093",
            text: "#F6FAFF",
            hover: "#556577",
          },
        },
      },
      certifications: {
        bg: "linear-gradient(135deg, #e5eaef 0%, #d1d7dd 100%)",
        text: "#1f2730",
        palette: {
          heading: "#2B3440",
          accent: "#6F7C8A",
          muted: "#5A6571",
          divider: "#9FABB9",
          card: {
            bg: "rgba(237,241,245,0.95)",
            border: "#C5CED8",
            text: "#22303A",
            muted: "#58626C",
          },
        cardAlt: {
          bg: "rgba(229,235,240,0.92)",
          border: "#B9C3CF",
          text: "#22303A",
        },
        skillDeck: {
          labelBg: "rgba(111, 128, 147, 0.18)",
          labelText: "#6F8093",
          sublabelText: "#5B6774",
          countText: "#5B6774",
          groupBadgeBg: "rgba(164, 173, 186, 0.2)",
          groupBadgeText: "#6D7A88",
          groupBadgeBorder: "rgba(170, 180, 193, 0.28)",
          itemBg: "rgba(234, 238, 243, 0.88)",
          itemBorder: "rgba(170, 180, 193, 0.35)",
          itemText: "#58626C",
          tagBg: "rgba(164, 173, 186, 0.22)",
          tagBorder: "rgba(170, 180, 193, 0.4)",
          tagText: "#2B3440",
        },
      },
    },
      skills: {
        bg: "linear-gradient(135deg, #E9EDF2 0%, #CED5DE 100%)",
        text: "#1f2730",
        palette: {
          heading: "#2B3440",
          accent: "#6D7A88",
          muted: "#58626C",
          divider: "#AAB4C1",
          badges: {
            languages: { gradient: ["#D9E0EA", "#C2CBD8"], text: "#24313F" },
            frameworks: { gradient: ["#D2DAE5", "#BBC5D1"], text: "#24313F" },
            tools: { gradient: ["#CBD4E0", "#B4BECB"], text: "#24313F" },
            other: { gradient: ["#E1E6ED", "#CED5DE"], text: "#24313F" },
          },
        },
      },
      contact: {
        bg: "linear-gradient(135deg, #8b97a2 0%, #707a86 100%)",
        text: "#f8fafc",
        buttonContrast: "#f8fafc",
        palette: {
          heading: "#F5FAFF",
          body: "#E5ECF4",
          muted: "#D4DEE9",
          divider: "rgba(245,250,255,0.2)",
          buttonBg: "#F5FAFF",
          buttonText: "#576675",
          buttonHover: "#D8E3F0",
        },
      },
    },
    footer: {
      bg: "linear-gradient(135deg, #6C7886 0%, #4A5563 100%)",
      text: "#F5FAFF",
    },
    blog: {
      bg: "linear-gradient(135deg, #e4e8ed 0%, #cfd5dc 100%)",
      text: "#1f2730",
      cardBg: "rgba(245,247,250,0.92)",
      cardText: "#1f2730",
      listBg: "linear-gradient(135deg, rgba(228,232,237,0.9) 0%, rgba(207,213,220,0.6) 100%)",
      palette: {
        nav: "#516071",
        navMuted: "#7A8999",
        heading: "#2B3440",
        body: "#2C3743",
        muted: "#5D6A78",
        divider: "#9FABB9",
        date: "#6F8093",
        cardBorder: "#C3CCD6",
        buttonBg: "#6F8093",
        buttonText: "#F6FAFF",
        buttonHover: "#56667A",
        pillBorder: "rgba(111,128,147,0.35)",
      },
    },
  },
  rain: {
    accent: "#6D8F81",
    text: "#1F2C33",
    sections: {
      about: {
        bg: "linear-gradient(135deg, #e2edf4 0%, #c6dce7 100%)",
        text: "#1F2C33",
        palette: {
          heading: "#1D2F36",
          accent: "#5F8F99",
          muted: "#446066",
          divider: "#8DB3BA",
          card: {
            bg: "rgba(225,236,241,0.94)",
            border: "#B6CFD7",
            text: "#1D2F36",
            muted: "#446066",
          },
          cardAlt: {
            bg: "rgba(218,232,238,0.92)",
            border: "#ABC7CF",
            text: "#1D2F36",
          },
        },
      },
      portfolio: {
        bg: "linear-gradient(135deg, #d7e6ef 0%, #bdd5e2 100%)",
        text: "#1F2C33",
        palette: {
          heading: "#1D2F36",
          accent: "#5F8F99",
          muted: "#446066",
          divider: "#8CB2BA",
          card: {
            bg: "rgba(220,234,240,0.94)",
            border: "#B3CAD2",
            text: "#1D2F36",
            muted: "#3F5A60",
          },
          featureCard: {
            bg: "rgba(214,229,236,0.94)",
            border: "#A8C1CA",
            text: "#1A2B31",
          },
          projectCard: {
            bg: "rgba(224,236,241,0.94)",
            border: "#B6CFD7",
            text: "#1A2B31",
            muted: "#3F5A60",
          },
          button: {
            bg: "#5E8A6D",
            text: "#F5F9F7",
            hover: "#436850",
          },
        },
      },
      certifications: {
        bg: "linear-gradient(135deg, #deeaf2 0%, #c2d8e4 100%)",
        text: "#1F2C33",
        palette: {
          heading: "#1D2F36",
          accent: "#5F8F99",
          muted: "#446066",
          divider: "#88AEBA",
          card: {
            bg: "rgba(222,235,242,0.94)",
            border: "#B2CBD5",
            text: "#1C2D33",
            muted: "#3F5A60",
          },
        cardAlt: {
          bg: "rgba(215,229,237,0.92)",
          border: "#A9C3CD",
          text: "#1C2D33",
        },
        skillDeck: {
          labelBg: "rgba(95, 143, 153, 0.2)",
          labelText: "#5F8F99",
          sublabelText: "#3F5A60",
          countText: "#3F5A60",
          groupBadgeBg: "rgba(95, 143, 153, 0.18)",
          groupBadgeText: "#5F8F99",
          groupBadgeBorder: "rgba(95, 143, 153, 0.28)",
          itemBg: "rgba(220, 234, 240, 0.88)",
          itemBorder: "rgba(95, 143, 153, 0.32)",
          itemText: "#3F5A60",
          tagBg: "rgba(95, 143, 153, 0.22)",
          tagBorder: "rgba(95, 143, 153, 0.35)",
          tagText: "#1D2F36",
        },
      },
    },
      skills: {
        bg: "linear-gradient(135deg, #DCE9F0 0%, #BCCFD9 100%)",
        text: "#1F2C33",
        palette: {
          heading: "#1D2F36",
          accent: "#5F8F99",
          muted: "#3F5A60",
          divider: "#8BB0BA",
          badges: {
            languages: { gradient: ["#CFE4EC", "#AFCFDB"], text: "#1D2F36" },
            frameworks: { gradient: ["#C6DEE8", "#A1C4D1"], text: "#1D2F36" },
            tools: { gradient: ["#BFD9E2", "#98C0CA"], text: "#1D2F36" },
            other: { gradient: ["#D6E8EE", "#B5CFD8"], text: "#1D2F36" },
          },
        },
      },
      contact: {
        bg: "linear-gradient(135deg, #cfe1e7 0%, #b2c9ce 100%)",
        text: "#1F2C33",
        buttonContrast: "#1F2C33",
        palette: {
          heading: "#1F2C33",
          body: "#2B3C42",
          muted: "#4A656B",
          divider: "rgba(31,44,51,0.15)",
          buttonBg: "#5E8A6D",
          buttonText: "#F5F9F7",
          buttonHover: "#436850",
        },
      },
    },
    footer: {
      bg: "linear-gradient(135deg, #3D5F67 0%, #244248 100%)",
      text: "#E8F4F6",
    },
    blog: {
      bg: "linear-gradient(135deg, #e0ecf3 0%, #c5dbe6 100%)",
      text: "#1F2C33",
      cardBg: "rgba(255,255,255,0.94)",
      cardText: "#1F2C33",
      listBg: "linear-gradient(135deg, rgba(224,236,243,0.9) 0%, rgba(197,219,230,0.6) 100%)",
      palette: {
        nav: "#34515A",
        navMuted: "#5F7B82",
        heading: "#1D2F36",
        body: "#1E3238",
        muted: "#4A666C",
        divider: "#8BB0BA",
        date: "#5F8F99",
        cardBorder: "#B3CAD2",
        buttonBg: "#5E8A6D",
        buttonText: "#F5F9F7",
        buttonHover: "#436850",
        pillBorder: "rgba(94,138,109,0.35)",
      },
    },
  },
  snow: {
    accent: "#58779d",
    text: "#24324a",
    sections: {
      about: {
        bg: "linear-gradient(135deg, #f9fbfd 0%, #ecf2f9 100%)",
        text: "#24324a",
        palette: {
          heading: "#223049",
          accent: "#5F7AA4",
          muted: "#4A5E7A",
          divider: "#92A8C5",
          card: {
            bg: "rgba(236,243,251,0.95)",
            border: "#C5D5EB",
            text: "#213048",
            muted: "#4A5E7A",
          },
          cardAlt: {
            bg: "rgba(229,239,248,0.92)",
            border: "#B9CBDF",
            text: "#213048",
          },
        },
      },
      portfolio: {
        bg: "linear-gradient(135deg, #f1f5fa 0%, #dfe9f5 100%)",
        text: "#24324a",
        palette: {
          heading: "#223049",
          accent: "#5F7AA4",
          muted: "#4C607D",
          divider: "#90A8C6",
          card: {
            bg: "rgba(238,244,251,0.95)",
            border: "#C5D5EB",
            text: "#213048",
            muted: "#4C607D",
          },
          featureCard: {
            bg: "rgba(231,239,249,0.94)",
            border: "#BBD0E7",
            text: "#1F2E47",
          },
          projectCard: {
            bg: "rgba(240,245,252,0.95)",
            border: "#C8D7EB",
            text: "#1F2E47",
            muted: "#4C607D",
          },
          button: {
            bg: "#58779d",
            text: "#F3F7FD",
            hover: "#435E83",
          },
        },
      },
      certifications: {
        bg: "linear-gradient(135deg, #f6f8fc 0%, #e5edf7 100%)",
        text: "#24324a",
        palette: {
          heading: "#223049",
          accent: "#5F7AA4",
          muted: "#4A5E7A",
          divider: "#97B0CF",
          card: {
            bg: "rgba(240,246,252,0.95)",
            border: "#CAD9EE",
            text: "#1F2E47",
            muted: "#4A5E7A",
          },
        cardAlt: {
          bg: "rgba(234,242,251,0.94)",
          border: "#BFD2E8",
          text: "#1F2E47",
        },
        skillDeck: {
          labelBg: "rgba(95, 122, 164, 0.2)",
          labelText: "#5F7AA4",
          sublabelText: "#4A5E7A",
          countText: "#4A5E7A",
          groupBadgeBg: "rgba(95, 122, 164, 0.18)",
          groupBadgeText: "#5F7AA4",
          groupBadgeBorder: "rgba(95, 122, 164, 0.28)",
          itemBg: "rgba(236, 243, 251, 0.88)",
          itemBorder: "rgba(95, 122, 164, 0.32)",
          itemText: "#4D6282",
          tagBg: "rgba(95, 122, 164, 0.22)",
          tagBorder: "rgba(95, 122, 164, 0.35)",
          tagText: "#223049",
        },
      },
    },
      skills: {
        bg: "linear-gradient(135deg, #F3F7FC 0%, #DCE6F3 100%)",
        text: "#24324a",
        palette: {
          heading: "#223049",
          accent: "#5F7AA4",
          muted: "#4D6282",
          divider: "#94AAC9",
          badges: {
            languages: { gradient: ["#E6EFF8", "#CAD9F0"], text: "#20304A" },
            frameworks: { gradient: ["#DEE8F4", "#C0D0EC"], text: "#20304A" },
            tools: { gradient: ["#D7E3F2", "#B7C9E6"], text: "#20304A" },
            other: { gradient: ["#EDF3FA", "#D2DFF2"], text: "#20304A" },
          },
        },
      },
      contact: {
        bg: "linear-gradient(135deg, #d7e4f3 0%, #bacce3 100%)",
        text: "#24324a",
        buttonContrast: "#24324a",
        palette: {
          heading: "#1F2E47",
          body: "#273758",
          muted: "#4F6384",
          divider: "rgba(31,46,71,0.18)",
          buttonBg: "#58779d",
          buttonText: "#F3F7FD",
          buttonHover: "#445E86",
        },
      },
    },
    footer: {
      bg: "linear-gradient(135deg, #3C506A 0%, #24324A 100%)",
      text: "#F3F7FD",
    },
    blog: {
      bg: "linear-gradient(135deg, #f8fafc 0%, #e7edf5 100%)",
      text: "#24324a",
      cardBg: "rgba(255,255,255,0.94)",
      cardText: "#24324a",
      listBg: "linear-gradient(135deg, rgba(248,250,252,0.92) 0%, rgba(231,237,245,0.6) 100%)",
      palette: {
        nav: "#3A4B67",
        navMuted: "#637693",
        heading: "#223049",
        body: "#233555",
        muted: "#4D6282",
        divider: "#94AAC9",
        date: "#5F7AA4",
        cardBorder: "#C3D3E9",
        buttonBg: "#58779d",
        buttonText: "#F3F7FD",
        buttonHover: "#435E83",
        pillBorder: "rgba(88,119,157,0.35)",
      },
    },
  },
};

const themeFor = (condition) => {
  if (!condition) return MAIN_THEME;
  const key = (condition || "").toLowerCase();
  return THEMES[key] || MAIN_THEME;
};

const STORAGE_KEY = "wxData";
const TIMESTAMP_KEY = "wxFetchedAt";
const MANUAL_KEY = "wxManualCondition";
const TTL = 10 * 60 * 1000; // 10 minutes per session

export default function useWeatherTheme() {
  const [weather, setWeather] = useState(null);
  const [theme, setTheme] = useState(MAIN_THEME);
  const [manualCondition, setManualCondition] = useState(() => {
    if (typeof window === "undefined") return null;
    return sessionStorage.getItem(MANUAL_KEY);
  });

  useEffect(() => {
    if (typeof window === "undefined" || manualCondition) return;

    try {
      const cachedRaw = sessionStorage.getItem(STORAGE_KEY);
      if (cachedRaw) {
        const cached = JSON.parse(cachedRaw);
        setWeather(cached);
        setTheme(themeFor(cached.condition));
      }

      const last = Number(sessionStorage.getItem(TIMESTAMP_KEY) || 0);
      const now = Date.now();
      if (now - last < TTL && cachedRaw) {
        return;
      }

      (async () => {
        try {
          const res = await fetch("/api/weather", { cache: "no-store" });
          if (!res.ok) throw new Error("weather");
          const data = await res.json();
          setWeather(data);
          setTheme(themeFor(data.condition));

          sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
          sessionStorage.setItem(TIMESTAMP_KEY, String(Date.now()));
        } catch {
          // Optional: leave default theme
        }
      })();
    } catch {
      // Ignore JSON parse issues and fall back to network attempt next load.
    }
  }, [manualCondition]);

  useEffect(() => {
    if (!manualCondition) return;
    const mock = {
      city: null,
      condition: manualCondition,
      tempC: 20,
      updatedAt: new Date().toISOString(),
    };
    setWeather(mock);
    setTheme(themeFor(manualCondition));
  }, [manualCondition]);

  const setManualOverride = (condition) => {
    if (typeof window === "undefined") return;
    if (condition) {
      sessionStorage.setItem(MANUAL_KEY, condition);
      sessionStorage.removeItem(STORAGE_KEY);
      sessionStorage.removeItem(TIMESTAMP_KEY);
      setManualCondition(condition);
    } else {
      sessionStorage.removeItem(MANUAL_KEY);
      setManualCondition(null);
      // force re-fetch next time by clearing cached data
      sessionStorage.removeItem(STORAGE_KEY);
      sessionStorage.removeItem(TIMESTAMP_KEY);
    }
  };

  return { weather, theme, manualCondition, setManualOverride, mainTheme: MAIN_THEME }; // weather: { city, condition, tempC, updatedAt }
}
