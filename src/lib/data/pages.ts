import { ImgConversionPages } from "./image";

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
    key: "Hottest Kit",
    value: [
      { href: 'pdf-to-doc', text: 'PDF to DOC', icon: '🥁', description: 'Convert PDF to DOC.' },
      { href: 'pdf-to-docx', text: 'PDF to DOCX', icon: '📣', description: 'Convert PDF to DOCX.' },
      { href: 'pdf-to-word', text: 'PDF to WORD', icon: '🍞', description: 'Convert PDF to WORD.' },
      { href: 'compress-pdf', text: 'Compress pdf', icon: '📦', description: 'Compress PDF files.' },
      { href: 'protect-pdf', text: 'Protect pdf', icon: '🔒', description: 'Protect PDF files with password.' },
      { href: 'unlock-pdf', text: 'Unlock pdf', icon: '🔓', description: 'Unlock password-protected PDF files.' },
      { href: 'remove-background', text: 'Remove Background', icon: '🖼️', description: 'Remove the background from images.' },
    ]
  },
  {
    key: "Video Kit",
    value: [
      { href: 'youtube-to-mp3', text: 'Youtube to MP3', icon: '🧃', description: 'Convert Youtube to mp3' },
      { href: 'youtube-to-mp4', text: 'Youtube to MP4', icon: '🍺', description: 'Convert Youtube to mp4' },
      { href: 'tiktok-to-mp3', text: 'Tiktok to MP3', icon: '🖼️', description: 'Convert Tiktok to mp3' },
      { href: 'tiktok-to-mp4', text: 'Tiktok to MP4', icon: '🖼️', description: 'Convert Tiktok to mp4' },
    ]
  },
  {
    key: "Format Kit",
    value: [
      { href: 'xps-to-doc', text: 'XPS to DOC', icon: '🎹', description: 'Convert XPS to DOC.' },
      { href: 'xps-to-docx', text: 'XPS to DOCX', icon: '🎷', description: 'Convert XPS to DOCX.' },
      { href: 'xps-to-pdf', text: 'XPS to PDF', icon: '🎺', description: 'Convert XPS to PDF.' },
      { href: 'cbz-to-pdf', text: 'CBZ to PDF', icon: '🎻', description: 'Convert CBZ to PDF.' },
      { href: 'epub-to-doc', text: 'EPUB to DOC', icon: '🪕', description: 'Convert EPUB to DOC.' },
      { href: 'epub-to-docx', text: 'EPUB to DOCX', icon: '🎸', description: 'Convert EPUB to DOCX.' },
      { href: 'epub-to-pdf', text: 'EPUB to PDF', icon: '🎵', description: 'Convert EPUB to PDF.' },
      { href: 'fb2-to-pdf', text: 'FB2 to PDF', icon: '🎶', description: 'Convert FB2 to PDF.' },
      { href: 'oxps-to-pdf', text: 'OXPS to PDF', icon: '🎼', description: 'Convert OXPS to PDF.' },
    ]
  },
  {
    key: "Image Kit",
    value: [
      ...ImgConversionPages
    ],
  },
  {
    key: 'Help',
    value: [
      {href: 'terms', text: 'Terms', icon: '📜', description: 'Service Legal & Privacy'}
    ]
  }
]


const extractedHrefs = pages.flatMap((page) => page.value.map((item) => item.href))
export const allHrefs = ['', 'menu', 'send-email'].concat(extractedHrefs);

