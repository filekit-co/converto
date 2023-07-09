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

export type ConversionProps = {
  headerProps: UpdateHeaderProps;
  xToy?: string;
  exts: [string, string];
};


export interface FileWithPath extends Blob {
  readonly path?: string;
  readonly webkitRelativePath: string;
}

export interface FeatureProps {
  head1: string;
  head2: string;
  description: string;
  subHead: string[];
  subDescription: string[];
}

export type UpdateFeatureProps = Partial<FeatureProps>

export type DivFocusEvent = FocusEvent & { currentTarget: HTMLDivElement };

export type ImgSlugToHex = {
  [slug: string]: string;
};