import type { ImgSlugToHex } from "./types";

export const DEFAULT_FILE_NAME: string = 'file'
export const COUNTRIES: { [key: string]: string } = {
  us: 'English',
  kr: 'Korean',
  in: 'Indian',
  ch: 'Chinese',
  vn: 'Vietnamese',
  jp: 'Japanese',
};

export const COUNTRY_CODES = Object.keys(COUNTRIES)

interface Page {
  key: string;
  value: PageValue[]
}

interface PageValue {
  href: string
  text: string
  icon: string
  description: string  
}

export let pages: Page[] = [
  {
    key: "Format Kit",
    value: [
      { href: '/pdf-to-doc', text: 'PDF to DOC', icon: '🥁', description: 'Convert PDF to DOC.' },
      { href: '/pdf-to-docx', text: 'PDF to DOCX', icon: '📣', description: 'Convert PDF to DOCX.' },
      { href: '/pdf-to-word', text: 'PDF to WORD', icon: '🍞', description: 'Convert PDF to WORD.' },
      { href: '/xps-to-doc', text: 'XPS to DOC', icon: '🎹', description: 'Convert XPS to DOC.' },
      { href: '/xps-to-docx', text: 'XPS to DOCX', icon: '🎷', description: 'Convert XPS to DOCX.' },
      { href: '/xps-to-pdf', text: 'XPS to PDF', icon: '🎺', description: 'Convert XPS to PDF.' },
      { href: '/cbz-to-pdf', text: 'CBZ to PDF', icon: '🎻', description: 'Convert CBZ to PDF.' },
      { href: '/epub-to-doc', text: 'EPUB to DOC', icon: '🪕', description: 'Convert EPUB to DOC.' },
      { href: '/epub-to-docx', text: 'EPUB to DOCX', icon: '🎸', description: 'Convert EPUB to DOCX.' },
      { href: '/epub-to-pdf', text: 'EPUB to PDF', icon: '🎵', description: 'Convert EPUB to PDF.' },
      { href: '/fb2-to-pdf', text: 'FB2 to PDF', icon: '🎶', description: 'Convert FB2 to PDF.' },
      { href: '/oxps-to-pdf', text: 'OXPS to PDF', icon: '🎼', description: 'Convert OXPS to PDF.' },
    ]
  },
  {
    key: "PDF Kit",
    value: [
      { href: '/compress-pdf', text: 'Compress pdf', icon: '📦', description: 'Compress PDF files.' },
      { href: '/protect-pdf', text: 'Protect pdf', icon: '🔒', description: 'Protect PDF files with password.' },
      { href: '/unlock-pdf', text: 'Unlock pdf', icon: '🔓', description: 'Unlock password-protected PDF files.' },
    ],
  },
  {
    key: "Image Kit",
    value: [
      { href: '/remove-background', text: 'Remove Background', icon: '🖼️', description: 'Remove the background from images.' },
    ],
  }
]


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