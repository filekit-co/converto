export interface HeaderProps {
  title: string;
  author: string;
  keywords: string;
  siteName: string;
  url: string;
  image: string;
  description: string;
}

export type UpdateHeaderProps = Partial<HeaderProps>

export interface FileWithPath extends Blob {
  readonly path?: string;
  readonly webkitRelativePath: string;
}