import { __ } from '@wordpress/i18n';
import { gutenbergTabIcon, shortcodeTabIcon } from './icons';

const slug = 'streamcast';

export const dashboardInfo = (info) => {
  const { version, isPremium, hasPro, licenseActiveNonce, adminUrl = '' } = info;

  const proSuffix = isPremium ? ' Pro' : '';

  return {
    name: `StreamCast${proSuffix}`,
    displayName: `StreamCast${proSuffix} - Live Radio Streaming Player`,
    description: "A simple, accessible, user-friendly and fully customizable radio player for WordPress. You can play iceCast, Shoutcast, Radionomy, Radiojar, RadioCo Live stream in WordPress website using shortcode.",
    slug,
    version,
    isPremium,
    hasPro,
    adminUrl,
    displayOurPlugins: true,
    media: {
      logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
      banner: `https://ps.w.org/${slug}/assets/banner-772x250.png`,
      thumbnail: `https://bplugins.com/wp-content/themes/b-technologies/assets/images/products/${slug}.png`,
    },
    pages: {
      org: `https://wordpress.org/plugins/${slug}/`,
      landing: `https://bplugins.com/products/${slug}/`,
      docs: `https://bplugins.com/docs/${slug}/`,
      pricing: `https://bplugins.com/products/${slug}/pricing`,
    },
    freemius: {
      product_id: '6433',
      plan_id: '10492',
      public_key: 'pk_a19d159db561c020210345da466f1',
    },
    licenseActiveNonce,
    startButton: {
      label: 'Start Now',
      url: `post-new.php?post_type=streamcast`
    }
  }
}

export const welcomeInfo = (adminUrl) => {
  const base = adminUrl ? adminUrl.replace( /\/+$/, '' ) : '';
  return {
    keywords: ['Radio', 'Live', 'Stream', 'Shoutcast', 'Icecast'],
    keywordsLabel: 'Features',
    gettingStarted: {
      tabs: [
        {
          key: 'gutenberg',
          label: 'Gutenberg',
          icon: gutenbergTabIcon,
          steps: [
            {
              num: 1,
              title: 'Add the StreamCast Block',
              body: 'Open the block editor on any page or post. Click the <strong>+</strong> icon in the top-left corner or type <strong>/StreamCast</strong> to find and insert the StreamCast Block.',
              link: {
                url: `${base}/post-new.php?post_type=page`,
                label: 'Open Editor',
              },
            },
            {
              num: 2,
              title: 'Configure Block Settings',
              body: 'Select the block to open settings in the sidebar. Enter your live stream URL, select stream provider, skin, custom colors, and artwork.',
            },
            {
              num: 3,
              title: 'Publish Page',
              body: 'Publish the page when ready. Your visitors can now play your live radio stream directly from your site.',
            },
          ],
        },
        {
          key: 'shortcode',
          label: 'ShortCode',
          icon: shortcodeTabIcon,
          steps: [
            {
              num: 1,
              title: 'Copy StreamCast Shortcode',
              body: 'You can use the shortcode anywhere on your site: <code>[stream url="YOUR_STREAM_URL"]</code>. Customize options like background color by adding attributes.',
            },
            {
              num: 2,
              title: 'Paste Shortcode',
              body: 'Paste the shortcode into any post, page, widget, or page builder template.',
            },
          ],
        },
      ],
    },
    changelogs: [
      {
        version: "2.4.3 - 5 July 2026",
        type: "update",
        list: [
          "Refactored plugin directory structure to align admin dashboard and blocks under src/.",
          "Upgraded admin dashboard welcome layout to use the unified bpl-tools Admin welcome panel."
        ]
      },
      {
        version: "2.3.9 - 23 February 2026",
        type: "update",
        list: ["Redesigned the dashboard with a modern and improved user interface, replacing the previous outdated layout."],
      },
      {
        version: "2.3.7 - 22 November 2025",
        type: "update",
        list: ["Updated readme.txt and fixed issues"],
      },
      {
        version: "2.3.6 - 2 September 2025",
        type: "update",
        list: ["Updated Advanced Radio Player"],
      },
      {
        version: "2.3.5 - 23 September 2025",
        type: "update",
        list: [
          "Accessibility: Add screen reader support across all audio players.",
        ],
      },
      {
        version: "2.3.4 - 17 September 2025",
        type: "update",
        list: ["Added Modern Dashboard."],
      },
      {
        version: "2.3.1 - 17 May, 2025",
        type: "update",
        list: ["Added a new radio skin."],
      },
      {
        version: "2.3.0 - 19 Feb, 2025",
        type: "update",
        list: ["Added gutenberg block and re-customize whole plugin."],
      },
      {
        version: "2.2.4 - 30 July, 2024",
        type: "update",
        list: ["Fixed: Cross Site Scripting"],
      },
      {
        version: "2.2.3 - 4 July, 2024",
        type: "update",
        list: ["Update: WordPress SDK"],
      },
      {
        version: "2.2.2 - 1 Jan, 2024",
        type: "update",
        list: ["Fixed: Unexpected number"],
      },
      {
        version: "2.2.0 - 26 Aug, 2023",
        type: "update",
        list: ["Added new skin name ‘B Circle’ (Premium)"],
      },
    ],
    changelogsLimit: 5,
    changelogsReadMoreLabel: 'View More Changelogs',
    proFeatures: [
      __("Customize You Player with some awesome options", "streamcast"),
      __("Enhance your player using 85+ radio player skins.", "streamcast"),
      __("Works great with Shoutcast, Icecast, and other compatible streaming servers.", "streamcast"),
      __("This plugin creates ShortCode for Each radio. So that you can play radio anywhere without coding.", "streamcast"),
      __("Collect Stream Name or Title or Artist Name from you streaming name.", "streamcast"),
      __("Alignment your player like left, center, right.", "streamcast"),
      __("Set image for player background, player poster or art image.", "streamcast"),
    ],
  };
};

export const demoInfo = {
  allInOneLabel: 'See All Demos',
  allInOneLink: 'https://wpradioplayer.com/demo/all-radio-player/',
  demos: [
    {
      icon: "",
      title: "Minimal Player (Default)",
      type: "iframe",
      url: "https://wpradioplayer.com/demo/demo-6-minimal-default/",
    },
    {
      icon: "",
      title: "Standard Player Skins (80+ Skins)",
      type: "image",
      url: "https://i.ibb.co.com/nsgPvyzT/bg.png",
    },
    {
      icon: "",
      title: "Ultimate Player (Customized)",
      type: "iframe",
      url: "https://wpradioplayer.com/demo/demo-1-ultimate-default/",
    },
    {
      icon: "",
      title: "Ultimate Bittersweet Theme",
      type: "iframe",
      url: "https://wpradioplayer.com/demo/demo-2-ultimate-bittersweet-theme/",
    },
    {
      icon: "",
      title: "Ultimate Lightsea Green Theme",
      type: "iframe",
      url: "https://wpradioplayer.com/demo/demo-3-ultimate-lightsea-green-theme/",
    },
    {
      icon: "",
      title: "Ultimate Custom Color",
      type: "iframe",
      url: "https://wpradioplayer.com/demo/demo-4-ultimate-custom-color/",
    },
    {
      icon: "",
      title: "Ultimate Icecast Station",
      type: "iframe",
      url: "https://wpradioplayer.com/demo/demo-5-ultimate-icecast-station/",
    },
    {
      icon: "",
      title: "Advanced Default",
      type: "iframe",
      url: "https://wpradioplayer.com/demo/demo-7-advanced-default/",
    },
    {
      icon: "",
      title: "Advanced Custom Color & Align Right",
      type: "iframe",
      url: "https://wpradioplayer.com/demo/demo-8-advanced-custom-color-and-align-right/",
    },
    {
      icon: "",
      title: "EchoPlayer",
      description: "",
      type: "iframe",
      url: "https://wpradioplayer.com/demo/demo-13/",
    },
    {
      icon: "",
      title: "AuroraPlay",
      type: "iframe",
      url: "https://wpradioplayer.com/demo/demo-14-aurora-play/",
    },
    {
      icon: "",
      title: "Wooden Player",
      type: "iframe",
      url: "https://wpradioplayer.com/demo/demo-15-wooden-player/",
    },
  ]
}

export const pricingInfo = {
  logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`, // Optional
  pluginId: 6433,
  planId: 10492,
  licenses: [
    1,
    3,
    null
  ],
  button: {
    label: 'Buy Now ➜'
  },
  featured: {
    selected: 3, // choose from licenses item
  }
}
