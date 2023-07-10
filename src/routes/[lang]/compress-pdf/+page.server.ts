import type { UpdateFeatureProps, UpdateHeaderProps } from '$lib/types';
import {canonicalUrl} from '$lib/utils'
import { getRuntimeFromLocals } from '@inlang/sdk-js/adapter-sveltekit/server';

export const load = (({route, locals}) => {
  const {i} = getRuntimeFromLocals(locals)

  const headerProps: UpdateHeaderProps = {
    title: i("Compress PDF online. Same PDF quality less file size"),
    url: canonicalUrl(route.id),
    description: i("Compress PDF file to get the same PDF quality but less filesize. Compress or optimize PDF files online, easily and free."),
    keywords: i("PDF compression, compress PDF, advanced compression technology, seamless experience, optimized file size, picture-perfect quality, crystal-clear images, sharp text, lossless compression, effortless efficiency, best compression techniques, enhanced compatibility, lightning-fast performance, trusted reliability, document management, future of PDF compression"),
  };
  const featureProps: UpdateFeatureProps = {
    head1: i("Embrace the future of PDF compression with our unparalleled technology."),
    head2: i("Effortless efficiency, picture-perfect quality, and enhanced compatibility merge to offer you the best PDF compression experience available"),
    description: i("Simplify your document management today and join the ranks of our satisfied users who have already experienced the power of our top-tier compression technology."),
    subHead: [
      i("Seamlessly Streamlined PDFs"),
      i("Picture-Perfect Quality"),
      i("Effortless Efficiency"),
      i("Enhanced File Compatibility"),
      i("Lightning-Fast Performance"),
      i("Trusted Reliability")
    ],
    subDescription: [
      i("With our advanced compression technology, PDF files are automatically optimized to their smallest possible size without any manual intervention. Say goodbye to bulky documents and enjoy the seamless experience of handling efficiently compressed files."),
      i("Our compression algorithm is designed to preserve every single detail of your documents. Enjoy crystal-clear images and sharp text, as our technology guarantees lossless compression, ensuring the highest quality even after compression."),
      i("Our service takes care of everything behind the scenes, so you don't have to worry about selecting compression options like deflate or deflate_images. Experience effortless efficiency as our technology automatically applies the best compression techniques for you."),
      i("Our compression technology goes the extra mile by automatically expanding images and fonts for better compatibility with various applications. Rest assured that your PDFs will be flawlessly displayed across different platforms and devices."),
      i("You'll be amazed at the lightning-fast performance of our service. Smaller file sizes mean quicker document uploads, downloads, and sharing, saving you valuable time and increasing overall productivity."),
      i("Our compression technology is not only cutting-edge but also trusted and proven to deliver consistent and reliable results. Countless satisfied users have experienced the benefits of our compression service, making it the go-to choice for all your document management needs.")
    ],

  }
  return {headerProps, featureProps}
})

