import { extractExtsFromString } from "$lib/utils";
import type { ImgSlugToHex } from "../types";

export const imgExts = ['ps', 'png', 'pnm', 'pgm', 'ppm', 'pbm', 'pam', 'jpg','jpeg'];
// const imgSlugs = imgExts.flatMap((ext1) => {
//   if (ext1 === 'ps') return [];

//   return imgExts.filter((ext2) => ext1 !== ext2)
//     .map((ext2) => `${ext1}-to-${ext2}`);
// });
export const imgSlugs = ['png-to-ps', 'png-to-pnm', 'png-to-pgm', 'png-to-ppm', 'png-to-pbm', 'png-to-pam', 'png-to-jpg', 'png-to-jpeg', 'pnm-to-ps', 'pnm-to-png', 'pnm-to-pgm', 'pnm-to-ppm', 'pnm-to-pbm', 'pnm-to-pam', 'pnm-to-jpg', 'pnm-to-jpeg', 'pgm-to-ps', 'pgm-to-png', 'pgm-to-pnm', 'pgm-to-ppm', 'pgm-to-pbm', 'pgm-to-pam', 'pgm-to-jpg', 'pgm-to-jpeg', 'ppm-to-ps', 'ppm-to-png', 'ppm-to-pnm', 'ppm-to-pgm', 'ppm-to-pbm', 'ppm-to-pam', 'ppm-to-jpg', 'ppm-to-jpeg', 'pbm-to-ps', 'pbm-to-png', 'pbm-to-pnm', 'pbm-to-pgm', 'pbm-to-ppm', 'pbm-to-pam', 'pbm-to-jpg', 'pbm-to-jpeg', 'pam-to-ps', 'pam-to-png', 'pam-to-pnm', 'pam-to-pgm', 'pam-to-ppm', 'pam-to-pbm', 'pam-to-jpg', 'pam-to-jpeg', 'jpg-to-ps', 'jpg-to-png', 'jpg-to-pnm', 'jpg-to-pgm', 'jpg-to-ppm', 'jpg-to-pbm', 'jpg-to-pam', 'jpg-to-jpeg', 'jpeg-to-ps', 'jpeg-to-png', 'jpeg-to-pnm', 'jpeg-to-pgm', 'jpeg-to-ppm', 'jpeg-to-pbm', 'jpeg-to-pam', 'jpeg-to-jpg']
export const imgSlugToHex: ImgSlugToHex = {
  'png-to-ps' : '#785996',
  'png-to-pnm' : '#e1b007',
  'png-to-pgm' : '#9e7cf7',
  'png-to-ppm' : '#6095d7',
  'png-to-pbm' : '#7e8c0e',
  'png-to-pam' : '#896754',
  'png-to-jpg' : '#c920a7',
  'png-to-jpeg' : '#7cb91b',
  'pnm-to-ps' : '#b0042f',
  'pnm-to-png' : '#33a513',
  'pnm-to-pgm' : '#13ed4d',
  'pnm-to-ppm' : '#382f6d',
  'pnm-to-pbm' : '#bc022a',
  'pnm-to-pam' : '#f321f5',
  'pnm-to-jpg' : '#8e0f72',
  'pnm-to-jpeg' : '#a98cda',
  'pgm-to-ps' : '#a6b138',
  'pgm-to-png' : '#c74aa6',
  'pgm-to-pnm' : '#c1596c',
  'pgm-to-ppm' : '#ec93de',
  'pgm-to-pbm' : '#228517',
  'pgm-to-pam' : '#12dc5b',
  'pgm-to-jpg' : '#3ce833',
  'pgm-to-jpeg' : '#f8b186',
  'ppm-to-ps' : '#ff29d7',
  'ppm-to-png' : '#f15bda',
  'ppm-to-pnm' : '#332596',
  'ppm-to-pgm' : '#f9c6e1',
  'ppm-to-pbm' : '#13fec1',
  'ppm-to-pam' : '#3dc5a7',
  'ppm-to-jpg' : '#f34926',
  'ppm-to-jpeg' : '#16efff',
  'pbm-to-ps' : '#dc07ab',
  'pbm-to-png' : '#663afc',
  'pbm-to-pnm' : '#7fec15',
  'pbm-to-pgm' : '#bc46fc',
  'pbm-to-ppm' : '#b56698',
  'pbm-to-pam' : '#2d46fc',
  'pbm-to-jpg' : '#839213',
  'pbm-to-jpeg' : '#385410',
  'pam-to-ps' : '#7180f5',
  'pam-to-png' : '#7b388d',
  'pam-to-pnm' : '#cdc033',
  'pam-to-pgm' : '#476187',
  'pam-to-ppm' : '#a897f1',
  'pam-to-pbm' : '#cd10c9',
  'pam-to-jpg' : '#acdba2',
  'pam-to-jpeg' : '#be1945',
  'jpg-to-ps' : '#67962a',
  'jpg-to-png' : '#48293c',
  'jpg-to-pnm' : '#e2fb1c',
  'jpg-to-pgm' : '#14354f',
  'jpg-to-ppm' : '#edf205',
  'jpg-to-pbm' : '#aa5003',
  'jpg-to-pam' : '#a14465',
  'jpg-to-jpeg' : '#ea0aae',
  'jpeg-to-ps' : '#e83190',
  'jpeg-to-png' : '#42c410',
  'jpeg-to-pnm' : '#a413eb',
  'jpeg-to-pgm' : '#df4811',
  'jpeg-to-ppm' : '#b0b218',
  'jpeg-to-pbm' : '#b0c4f5',
  'jpeg-to-pam' : '#6d9d6e',
  'jpeg-to-jpg' : '#285567'
}

// const icons = ['🌟', '⚡', '🎉', '🔥', '💡', '🌈', '🌺', '🍄', '🌻', '🌸', '🌼', '🍀', '🌹', '🍁', '🌿', '🌴', '🌞', '🌙', '🌟', '⭐', '🌊', '🌍', '🌎', '🌏', '💦', '💧', '🌟', '✨', '🔑', '🗝', '🔒', '🔓', '🌟', '📦', '🎁', '📚', '📝', '✏️', '🖋️', '📐', '📏', '🔨', '🧰', '🛠️', '⚙️', '🌟', '🌱', '🌿', '🍃', '🌾', '🌵', '🌲', '🌳', '🎄', '🌟', '🚀', '🌠', '🛰️', '💫', '✨', '⚡', '🌟', '🎈', '🎀'];
// export const ImgConversionPages = imgSlugs.map((slug, index) => {
//   const [fromExt, toExt] = extractExtsFromString(slug)

//   const icon = icons[index];
//   const text = `${fromExt.toUpperCase()} to ${toExt.toUpperCase()}`;
//   const description = `Convert ${text}`;

//   return {
//     href: `/img/${slug}`,
//     text,
//     icon,
//     description
//   };
// });
export const ImgConversionPages = [
  {
    href: '/img/png-to-ps',
    text: 'PNG to PS',
    icon: '🌟',
    description: 'Convert PNG to PS'
  },
  {
    href: '/img/png-to-pnm',
    text: 'PNG to PNM',
    icon: '⚡',
    description: 'Convert PNG to PNM'
  },
  {
    href: '/img/png-to-pgm',
    text: 'PNG to PGM',
    icon: '🎉',
    description: 'Convert PNG to PGM'
  },
  {
    href: '/img/png-to-ppm',
    text: 'PNG to PPM',
    icon: '🔥',
    description: 'Convert PNG to PPM'
  },
  {
    href: '/img/png-to-pbm',
    text: 'PNG to PBM',
    icon: '💡',
    description: 'Convert PNG to PBM'
  },
  {
    href: '/img/png-to-pam',
    text: 'PNG to PAM',
    icon: '🌈',
    description: 'Convert PNG to PAM'
  },
  {
    href: '/img/png-to-jpg',
    text: 'PNG to JPG',
    icon: '🌺',
    description: 'Convert PNG to JPG'
  },
  {
    href: '/img/png-to-jpeg',
    text: 'PNG to JPEG',
    icon: '🍄',
    description: 'Convert PNG to JPEG'
  },
  {
    href: '/img/pnm-to-ps',
    text: 'PNM to PS',
    icon: '🌻',
    description: 'Convert PNM to PS'
  },
  {
    href: '/img/pnm-to-png',
    text: 'PNM to PNG',
    icon: '🌸',
    description: 'Convert PNM to PNG'
  },
  {
    href: '/img/pnm-to-pgm',
    text: 'PNM to PGM',
    icon: '🌼',
    description: 'Convert PNM to PGM'
  },
  {
    href: '/img/pnm-to-ppm',
    text: 'PNM to PPM',
    icon: '🍀',
    description: 'Convert PNM to PPM'
  },
  {
    href: '/img/pnm-to-pbm',
    text: 'PNM to PBM',
    icon: '🌹',
    description: 'Convert PNM to PBM'
  },
  {
    href: '/img/pnm-to-pam',
    text: 'PNM to PAM',
    icon: '🍁',
    description: 'Convert PNM to PAM'
  },
  {
    href: '/img/pnm-to-jpg',
    text: 'PNM to JPG',
    icon: '🌿',
    description: 'Convert PNM to JPG'
  },
  {
    href: '/img/pnm-to-jpeg',
    text: 'PNM to JPEG',
    icon: '🌴',
    description: 'Convert PNM to JPEG'
  },
  {
    href: '/img/pgm-to-ps',
    text: 'PGM to PS',
    icon: '🌞',
    description: 'Convert PGM to PS'
  },
  {
    href: '/img/pgm-to-png',
    text: 'PGM to PNG',
    icon: '🌙',
    description: 'Convert PGM to PNG'
  },
  {
    href: '/img/pgm-to-pnm',
    text: 'PGM to PNM',
    icon: '🌟',
    description: 'Convert PGM to PNM'
  },
  {
    href: '/img/pgm-to-ppm',
    text: 'PGM to PPM',
    icon: '⭐',
    description: 'Convert PGM to PPM'
  },
  {
    href: '/img/pgm-to-pbm',
    text: 'PGM to PBM',
    icon: '🌊',
    description: 'Convert PGM to PBM'
  },
  {
    href: '/img/pgm-to-pam',
    text: 'PGM to PAM',
    icon: '🌍',
    description: 'Convert PGM to PAM'
  },
  {
    href: '/img/pgm-to-jpg',
    text: 'PGM to JPG',
    icon: '🌎',
    description: 'Convert PGM to JPG'
  },
  {
    href: '/img/pgm-to-jpeg',
    text: 'PGM to JPEG',
    icon: '🌏',
    description: 'Convert PGM to JPEG'
  },
  {
    href: '/img/ppm-to-ps',
    text: 'PPM to PS',
    icon: '💦',
    description: 'Convert PPM to PS'
  },
  {
    href: '/img/ppm-to-png',
    text: 'PPM to PNG',
    icon: '💧',
    description: 'Convert PPM to PNG'
  },
  {
    href: '/img/ppm-to-pnm',
    text: 'PPM to PNM',
    icon: '🌟',
    description: 'Convert PPM to PNM'
  },
  {
    href: '/img/ppm-to-pgm',
    text: 'PPM to PGM',
    icon: '✨',
    description: 'Convert PPM to PGM'
  },
  {
    href: '/img/ppm-to-pbm',
    text: 'PPM to PBM',
    icon: '🔑',
    description: 'Convert PPM to PBM'
  },
  {
    href: '/img/ppm-to-pam',
    text: 'PPM to PAM',
    icon: '🗝',
    description: 'Convert PPM to PAM'
  },
  {
    href: '/img/ppm-to-jpg',
    text: 'PPM to JPG',
    icon: '🔒',
    description: 'Convert PPM to JPG'
  },
  {
    href: '/img/ppm-to-jpeg',
    text: 'PPM to JPEG',
    icon: '🔓',
    description: 'Convert PPM to JPEG'
  },
  {
    href: '/img/pbm-to-ps',
    text: 'PBM to PS',
    icon: '🌟',
    description: 'Convert PBM to PS'
  },
  {
    href: '/img/pbm-to-png',
    text: 'PBM to PNG',
    icon: '📦',
    description: 'Convert PBM to PNG'
  },
  {
    href: '/img/pbm-to-pnm',
    text: 'PBM to PNM',
    icon: '🎁',
    description: 'Convert PBM to PNM'
  },
  {
    href: '/img/pbm-to-pgm',
    text: 'PBM to PGM',
    icon: '📚',
    description: 'Convert PBM to PGM'
  },
  {
    href: '/img/pbm-to-ppm',
    text: 'PBM to PPM',
    icon: '📝',
    description: 'Convert PBM to PPM'
  },
  {
    href: '/img/pbm-to-pam',
    text: 'PBM to PAM',
    icon: '✏️',
    description: 'Convert PBM to PAM'
  },
  {
    href: '/img/pbm-to-jpg',
    text: 'PBM to JPG',
    icon: '🖋️',
    description: 'Convert PBM to JPG'
  },
  {
    href: '/img/pbm-to-jpeg',
    text: 'PBM to JPEG',
    icon: '📐',
    description: 'Convert PBM to JPEG'
  },
  {
    href: '/img/pam-to-ps',
    text: 'PAM to PS',
    icon: '📏',
    description: 'Convert PAM to PS'
  },
  {
    href: '/img/pam-to-png',
    text: 'PAM to PNG',
    icon: '🔨',
    description: 'Convert PAM to PNG'
  },
  {
    href: '/img/pam-to-pnm',
    text: 'PAM to PNM',
    icon: '🧰',
    description: 'Convert PAM to PNM'
  },
  {
    href: '/img/pam-to-pgm',
    text: 'PAM to PGM',
    icon: '🛠️',
    description: 'Convert PAM to PGM'
  },
  {
    href: '/img/pam-to-ppm',
    text: 'PAM to PPM',
    icon: '⚙️',
    description: 'Convert PAM to PPM'
  },
  {
    href: '/img/pam-to-pbm',
    text: 'PAM to PBM',
    icon: '🌟',
    description: 'Convert PAM to PBM'
  },
  {
    href: '/img/pam-to-jpg',
    text: 'PAM to JPG',
    icon: '🌱',
    description: 'Convert PAM to JPG'
  },
  {
    href: '/img/pam-to-jpeg',
    text: 'PAM to JPEG',
    icon: '🌿',
    description: 'Convert PAM to JPEG'
  },
  {
    href: '/img/jpg-to-ps',
    text: 'JPG to PS',
    icon: '🍃',
    description: 'Convert JPG to PS'
  },
  {
    href: '/img/jpg-to-png',
    text: 'JPG to PNG',
    icon: '🌾',
    description: 'Convert JPG to PNG'
  },
  {
    href: '/img/jpg-to-pnm',
    text: 'JPG to PNM',
    icon: '🌵',
    description: 'Convert JPG to PNM'
  },
  {
    href: '/img/jpg-to-pgm',
    text: 'JPG to PGM',
    icon: '🌲',
    description: 'Convert JPG to PGM'
  },
  {
    href: '/img/jpg-to-ppm',
    text: 'JPG to PPM',
    icon: '🌳',
    description: 'Convert JPG to PPM'
  },
  {
    href: '/img/jpg-to-pbm',
    text: 'JPG to PBM',
    icon: '🎄',
    description: 'Convert JPG to PBM'
  },
  {
    href: '/img/jpg-to-pam',
    text: 'JPG to PAM',
    icon: '🌟',
    description: 'Convert JPG to PAM'
  },
  {
    href: '/img/jpg-to-jpeg',
    text: 'JPG to JPEG',
    icon: '🚀',
    description: 'Convert JPG to JPEG'
  },
  {
    href: '/img/jpeg-to-ps',
    text: 'JPEG to PS',
    icon: '🌠',
    description: 'Convert JPEG to PS'
  },
  {
    href: '/img/jpeg-to-png',
    text: 'JPEG to PNG',
    icon: '🛰️',
    description: 'Convert JPEG to PNG'
  },
  {
    href: '/img/jpeg-to-pnm',
    text: 'JPEG to PNM',
    icon: '💫',
    description: 'Convert JPEG to PNM'
  },
  {
    href: '/img/jpeg-to-pgm',
    text: 'JPEG to PGM',
    icon: '✨',
    description: 'Convert JPEG to PGM'
  },
  {
    href: '/img/jpeg-to-ppm',
    text: 'JPEG to PPM',
    icon: '⚡',
    description: 'Convert JPEG to PPM'
  },
  {
    href: '/img/jpeg-to-pbm',
    text: 'JPEG to PBM',
    icon: '🌟',
    description: 'Convert JPEG to PBM'
  },
  {
    href: '/img/jpeg-to-pam',
    text: 'JPEG to PAM',
    icon: '🎈',
    description: 'Convert JPEG to PAM'
  },
  {
    href: '/img/jpeg-to-jpg',
    text: 'JPEG to JPG',
    icon: '🎀',
    description: 'Convert JPEG to JPG'
  }
]
