import { v4 as uuidv4 } from "uuid";
import {
  MdOutlineQueuePlayNext,
  MdOutlineFileDownload,
  MdOutlinePlayForWork,
  MdOutlineCreditCard,
  MdCalendarViewDay,
  MdOutlineWeb,
  MdOutlineBrandingWatermark,
  MdOutlineVideoLabel,
  MdOutlineViewInAr,
  MdOutlineSubtitles,
  MdOutlineCallToAction,
  MdOutlineInbox,
} from "react-icons/md";

export const displayUnitList = [
  {
    id: uuidv4(),
    name: "In Image",
    urlName: "in-image",
    url: "https://gallery.bidsxchange.com/demo/in-image-mobile-320x50.html",
    image: MdOutlineSubtitles,
    availableSizes: {
      desktop: [
        [
          uuidv4(),
          "728X90",
          "https://gallery.bidsxchange.com/demo/in-image-desktop-728x90.html",
        ],
        [
          uuidv4(),
          "468X60",
          "https://gallery.bidsxchange.com/demo/in-image-desktop-468x60.html",
        ],
      ],
      mobile: [
        [
          uuidv4(),
          "300X50",
          "https://gallery.bidsxchange.com/demo/in-image-mobile-300x50.html",
        ],
        [
          uuidv4(),
          "320X50",
          "https://gallery.bidsxchange.com/demo/in-image-mobile-320x50.html",
        ],
      ],
      tablet: [
        [
          uuidv4(),
          "300X50",
          "https://gallery.bidsxchange.com/demo/in-image-mobile-300x50.html",
        ],
        [
          uuidv4(),
          "320X50",
          "https://gallery.bidsxchange.com/demo/in-image-mobile-320x50.html",
        ],
        [
          uuidv4(),
          "468X60",
          "https://gallery.bidsxchange.com/demo/in-image-mobile-468x60.html",
        ],
      ],
    },
  },
  {
    id: uuidv4(),
    name: "Under Image",
    urlName: "under-image",
    url: "https://gallery.bidsxchange.com/demo/under-image-mobile-300x50.html",
    image: MdOutlineCallToAction,
    availableSizes: {
      desktop: [
        [
          uuidv4(),
          "728X90",
          "https://gallery.bidsxchange.com/demo/under-image.html",
        ],
        [
          uuidv4(),
          "468X60",
          "https://gallery.bidsxchange.com/demo/under-image-desktop-468x60.html",
        ],
      ],
      mobile: [
        [
          uuidv4(),
          "300X50",
          "https://gallery.bidsxchange.com/demo/under-image-mobile-300x50.html",
        ],
        [
          uuidv4(),
          "320X50",
          "https://gallery.bidsxchange.com/demo/under-image-mobile-320x50.html",
        ],
      ],
      tablet: [
        [
          uuidv4(),
          "300X50",
          "https://gallery.bidsxchange.com/demo/under-image-mobile-300x50.html",
        ],
        [
          uuidv4(),
          "320X50",
          "https://gallery.bidsxchange.com/demo/under-image-mobile-320x50.html",
        ],
        [
          uuidv4(),
          "468X60",
          "https://gallery.bidsxchange.com/demo/under-image-mobile-468x60.html",
        ],
      ],
    },
  },
  {
    id: uuidv4(),
    name: "In Content",
    urlName: "incontent",
    url: "https://gallery.bidsxchange.com/demo/incontent-mobile-320x50.html",
    image: MdOutlineInbox,
    availableSizes: {
      desktop: [
        [
          uuidv4(),
          "728X90",
          "https://gallery.bidsxchange.com/demo/in-content-desktop-728x90.html",
        ],
        [
          uuidv4(),
          "300X250",
          "https://gallery.bidsxchange.com/demo/in-content-desktop-300x250.html",
        ],
      ],
      mobile: [
        [
          uuidv4(),
          "320X50",
          "https://gallery.bidsxchange.com/demo/incontent-mobile-320x50.html",
        ],
        [
          uuidv4(),
          "300X250",
          "https://gallery.bidsxchange.com/demo/incontent-mobile-300x250.html",
        ],
      ],
      tablet: [
        [
          uuidv4(),
          "320X50",
          "https://gallery.bidsxchange.com/demo/incontent-mobile-320x50.html",
        ],
        [
          uuidv4(),
          "300X250",
          "https://gallery.bidsxchange.com/demo/incontent-mobile-300x250.html",
        ],
      ],
    },
  },
  {
    id: uuidv4(),
    name: "Infobot",
    urlName: "infoBot",
    url: "https://gallery.bidsxchange.com/demo/infoBot-mobile-320x50.html",
    image: MdOutlineViewInAr,
    availableSizes: {
      desktop: [
        [
          uuidv4(),
          "320X50",
          "https://gallery.bidsxchange.com/demo/infoBot-desktop-320x50.html",
        ],
      ],
      mobile: [
        [
          uuidv4(),
          "320X50",
          "https://gallery.bidsxchange.com/demo/infoBot-mobile-320x50.html",
        ],
      ],
      tablet: [
        [
          uuidv4(),
          "320X50",
          "https://gallery.bidsxchange.com/demo/infoBot-mobile-320x50.html",
        ],
      ],
    },
  },
  {
    id: uuidv4(),
    name: "StayOn",
    urlName: "catfish",
    url: "https://gallery.bidsxchange.com/demo/catfish-mobile-320x50.html",
    image: MdOutlineVideoLabel,
    availableSizes: {
      desktop: [
        [
          uuidv4(),
          "728X90",
          "https://gallery.bidsxchange.com/demo/catfish-desktop-728x90.html",
        ],
        [
          uuidv4(),
          "970X90",
          "https://gallery.bidsxchange.com/demo/catfish-desktop-970x90.html",
        ],
      ],
      mobile: [
        [
          uuidv4(),
          "320X50",
          "https://gallery.bidsxchange.com/demo/catfish-mobile-320x50.html",
        ],
        [
          uuidv4(),
          "320X100",
          "https://gallery.bidsxchange.com/demo/catfish-mobile-320x100.html",
        ],
      ],
      tablet: [
        [
          uuidv4(),
          "320X50",
          "https://gallery.bidsxchange.com/demo/catfish-mobile-320x50.html",
        ],
        [
          uuidv4(),
          "320X100",
          "https://gallery.bidsxchange.com/demo/catfish-mobile-320x100.html",
        ],
      ],
    },
  },
  {
    id: uuidv4(),
    name: "Slider",
    urlName: "slider",
    url: "https://gallery.bidsxchange.com/demo/slider-mobile-right.html",
    image: MdOutlineBrandingWatermark,
    availableSizes: {
      desktop: [
        [
          uuidv4(),
          "Left Hand Side",
          "https://gallery.bidsxchange.com/demo/slider-left.html",
        ],
        [
          uuidv4(),
          "Right Hand Side",
          "https://gallery.bidsxchange.com/demo/slider-right.html",
        ],
      ],
      mobile: [
        [
          uuidv4(),
          "Left Hand Side",
          "https://gallery.bidsxchange.com/demo/slider-mobile-left.html",
        ],
        [
          uuidv4(),
          "Right Hand Side",
          "https://gallery.bidsxchange.com/demo/slider-mobile-right.html",
        ],
      ],
      tablet: [
        [
          uuidv4(),
          "Left Hand Side",
          "https://gallery.bidsxchange.com/demo/slider-mobile-left.html",
        ],
        [
          uuidv4(),
          "Right Hand Side",
          "https://gallery.bidsxchange.com/demo/slider-mobile-right.html",
        ],
      ],
    },
  },
  {
    id: uuidv4(),
    name: "Hybrid Slider",
    urlName: "hybrid",
    url: "https://gallery.bidsxchange.com/demo/hybrid-mobile-right.html",
    image: MdOutlineWeb,
    availableSizes: {
      desktop: [
        [
          uuidv4(),
          "Left Hand Side",
          "https://gallery.bidsxchange.com/demo/hybrid-left.html",
        ],
        [
          uuidv4(),
          "Right Hand Side",
          "https://gallery.bidsxchange.com/demo/hybrid-right.html",
        ],
      ],
      mobile: [
        [
          uuidv4(),
          "Left Hand Side",
          "https://gallery.bidsxchange.com/demo/hybrid-mobile-left.html",
        ],
        [
          uuidv4(),
          "Right Hand Side",
          "https://gallery.bidsxchange.com/demo/hybrid-mobile-right.html",
        ],
      ],
      tablet: [
        [
          uuidv4(),
          "Left Hand Side",
          "https://gallery.bidsxchange.com/demo/hybrid-mobile-left.html",
        ],
        [
          uuidv4(),
          "Right Hand Side",
          "https://gallery.bidsxchange.com/demo/hybrid-mobile-right.html",
        ],
      ],
    },
  },
  {
    id: uuidv4(),
    name: "Parallax",
    urlName: "parallax",
    url: "https://gallery.bidsxchange.com/demo/parallax-mobile-300x600.html",
    image: MdCalendarViewDay,
    availableSizes: {
      desktop: [
        [
          uuidv4(),
          "300X600",
          "https://gallery.bidsxchange.com/demo/parallax-desktop-300x600.html",
        ],
        [
          uuidv4(),
          "320X480",
          "https://gallery.bidsxchange.com/demo/parallax-desktop-320x480.html",
        ],
      ],
      mobile: [
        [
          uuidv4(),
          "300X600",
          "https://gallery.bidsxchange.com/demo/parallax-mobile-300x600.html",
        ],
        [
          uuidv4(),
          "320X480",
          "https://gallery.bidsxchange.com/demo/parallax-mobile-320x480.html",
        ],
      ],
      tablet: [
        [
          uuidv4(),
          "300X600",
          "https://gallery.bidsxchange.com/demo/parallax-mobile-300x600.html",
        ],
        [
          uuidv4(),
          "320X480",
          "https://gallery.bidsxchange.com/demo/parallax-mobile-320x480.html",
        ],
      ],
    },
  },
  {
    id: uuidv4(),
    name: "Interstitial",
    urlName: "interstitial",
    url: "https://gallery.bidsxchange.com/demo/interstitial-mobile-300x250.html",
    image: MdOutlineCreditCard,
    availableSizes: {
      desktop: [
        [
          uuidv4(),
          "300X250",
          "https://gallery.bidsxchange.com/demo/interstitial-desktop-300x250.html",
        ],
      ],
      mobile: [
        [
          uuidv4(),
          "300X600",
          "https://gallery.bidsxchange.com/demo/interstitial-mobile-300x250.html",
        ],
        [
          uuidv4(),
          "320X480",
          "https://gallery.bidsxchange.com/demo/interstitial-mobile-320x480.html",
        ],
      ],
      tablet: [
        [
          uuidv4(),
          "300X250",
          "https://gallery.bidsxchange.com/demo/interstitial-mobile-300x250.html",
        ],
        [
          uuidv4(),
          "320X480",
          "https://gallery.bidsxchange.com/demo/interstitial-mobile-320x480.html",
        ],
      ],
    },
  },
  {
    id: uuidv4(),
    name: "Page Push Down",
    urlName: "page-push-down",
    url: "https://gallery.bidsxchange.com/demo/page-push-down-desktop-728x90.html",
    image: MdOutlinePlayForWork,
    availableSizes: {
      desktop: [
        [
          uuidv4(),
          "728X90",
          "https://gallery.bidsxchange.com/demo/page-push-down-desktop-728x90.html",
        ],
        [
          uuidv4(),
          "970X90",
          "https://gallery.bidsxchange.com/demo/page-push-down-desktop-970x90.html",
        ],
        [
          uuidv4(),
          "970X250",
          "https://gallery.bidsxchange.com/demo/page-push-down-desktop-970x250.html",
        ],
      ],
      mobile: [
        [
          uuidv4(),
          "320X50",
          "https://gallery.bidsxchange.com/demo/page-push-down-mobile-320x50.html",
        ],
        [
          uuidv4(),
          "320X100",
          "https://gallery.bidsxchange.com/demo/page-push-down-mobile-320x100.html",
        ],
      ],
      tablet: [
        [
          uuidv4(),
          "320X50",
          "https://gallery.bidsxchange.com/demo/page-push-down-mobile-320x50.html",
        ],
        [
          uuidv4(),
          "320X100",
          "https://gallery.bidsxchange.com/demo/page-push-down-mobile-320x100.html",
        ],
        [
          uuidv4(),
          "468X60",
          "https://gallery.bidsxchange.com/demo/page-push-down-mobile-460x60.html",
        ],
      ],
    },
  },
  {
    id: uuidv4(),
    name: "Ad Push Down",
    urlName: "ad-push-down",
    url: "https://gallery.bidsxchange.com/demo/ad-push-down-mobile-320x50.html",
    image: MdOutlineFileDownload,
    availableSizes: {
      desktop: [
        [
          uuidv4(),
          "728X90",
          "https://gallery.bidsxchange.com/demo/ad-push-down-desktop-728x90.html",
        ],
        [
          uuidv4(),
          "480X60",
          "https://gallery.bidsxchange.com/demo/ad-push-down-desktop-468x60.html",
        ],
      ],
      mobile: [
        [
          uuidv4(),
          "320X50",
          "https://gallery.bidsxchange.com/demo/ad-push-down-mobile-320x50.html",
        ],
        [
          uuidv4(),
          "320X100",
          "https://gallery.bidsxchange.com/demo/ad-push-down-mobile-320x100.html",
        ],
      ],
      tablet: [
        [
          uuidv4(),
          "320X50",
          "https://gallery.bidsxchange.com/demo/ad-push-down-mobile-320x50.html",
        ],
        [
          uuidv4(),
          "320X100",
          "https://gallery.bidsxchange.com/demo/ad-push-down-mobile-320x100.html",
        ],
        [
          uuidv4(),
          "468X60",
          "https://gallery.bidsxchange.com/demo/ad-push-down-mobile-460x60.html",
        ],
      ],
    },
  },
];
export const videoUnitList = [
  {
    id: uuidv4(),
    name: "Contextual Video",
    urlName: "video-floating",
    url: "https://gallery.bidsxchange.com/demo/video-floating-mobile.html",
    image: MdOutlineQueuePlayNext,
    availableSizes: {
      desktop: [
        [
          uuidv4(),
          "Floating",
          "https://gallery.bidsxchange.com/demo/video-floating.html",
        ],
        [
          uuidv4(),
          "Slider",
          "https://gallery.bidsxchange.com/demo/video-slider.html",
        ],
        [
          uuidv4(),
          "In Read",
          "https://gallery.bidsxchange.com/demo/video-inread.html",
        ],
        [
          uuidv4(),
          "Sidebar",
          "https://gallery.bidsxchange.com/demo/video-sidebar.html",
        ],
      ],
      mobile: [
        [
          uuidv4(),
          "Floating",
          "https://gallery.bidsxchange.com/demo/video-floating-mobile.html",
        ],
        [
          uuidv4(),
          "Slider",
          "https://gallery.bidsxchange.com/demo/video-slider-mobile.html",
        ],
        [
          uuidv4(),
          "In Read",
          "https://gallery.bidsxchange.com/demo/video-inread-mobile.html",
        ],
      ],
      tablet: [
        [
          uuidv4(),
          "Floating",
          "https://gallery.bidsxchange.com/demo/video-floating-mobile.html",
        ],
        [
          uuidv4(),
          "Slider",
          "https://gallery.bidsxchange.com/demo/video-slider-mobile.html",
        ],
        [
          uuidv4(),
          "In Read",
          "https://gallery.bidsxchange.com/demo/video-inread-mobile.html",
        ],
      ],
    },
  },
  {
    id: uuidv4(),
    name: "Web Stories",
    urlName: "video-stories",
    url: "https://gallery.bidsxchange.com/demo/video-stories.html",
    image: MdOutlineQueuePlayNext,
    availableSizes: {
      desktop: [],
      mobile: [],
      tablet: [],
    },
  },
  {
    id: uuidv4(),
    name: "In App Rewarded",
    urlName: "demo-games",
    url: "https://gallery.bidsxchange.com/demo-games/index.html",
    image: MdOutlineQueuePlayNext,
    availableSizes: {
      desktop: [],
      mobile: [],
      tablet: [],
    },
  },
];
export const audioUnitList = [
  {
    id: uuidv4(),
    name: "Audio Flashes (Beta)",
    urlName: "audio-flash-mobile",
    url: "https://gallery.bidsxchange.com/demo/audio-flash-mobile.html",
    image: MdOutlineQueuePlayNext,
    availableSizes: {
      desktop: [],
      mobile: [],
      tablet: [],
    },
  },
];
export const nativeUnitList = [
  {
    id: uuidv4(),
    name: "Standard Native Unit",
    urlName: "native-ad",
    url: "https://gallery.bidsxchange.com/demo/native-ad-mobile-320x50.html",
    image: MdOutlineQueuePlayNext,
    availableSizes: {
      desktop: [
        [
          uuidv4(),
          "300X250",
          "https://gallery.bidsxchange.com/demo/native-ad-desktop-300x250.html",
        ],
        [
          uuidv4(),
          "160X600",
          "https://gallery.bidsxchange.com/demo/native-ad-desktop-160x600.html",
        ],
        [
          uuidv4(),
          "300X600",
          "https://gallery.bidsxchange.com/demo/native-ad-desktop-300x600.html",
        ],
        [
          uuidv4(),
          "728X90",
          "https://gallery.bidsxchange.com/demo/native-ad-desktop-728x90.html",
        ],
        [
          uuidv4(),
          "970X90",
          "https://gallery.bidsxchange.com/demo/native-ad-desktop-970x90.html",
        ],
      ],
      mobile: [
        [
          uuidv4(),
          "320X50",
          "https://gallery.bidsxchange.com/demo/native-ad-mobile-320x50.html",
        ],
        [
          uuidv4(),
          "300X100",
          "https://gallery.bidsxchange.com/demo/native-ad-mobile-300x100.html",
        ],
        [
          uuidv4(),
          "320X100",
          "https://gallery.bidsxchange.com/demo/native-ad-mobile-320x100.html",
        ],
      ],
      tablet: [
        [
          uuidv4(),
          "320X50",
          "https://gallery.bidsxchange.com/demo/native-ad-mobile-320x50.html",
        ],
        [
          uuidv4(),
          "300X100",
          "https://gallery.bidsxchange.com/demo/native-ad-mobile-300x100.html",
        ],
        [
          uuidv4(),
          "320X100",
          "https://gallery.bidsxchange.com/demo/native-ad-mobile-320x100.html",
        ],
      ],
    },
  },
];
