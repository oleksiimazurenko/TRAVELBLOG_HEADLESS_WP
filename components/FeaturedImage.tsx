import Image from 'next/image';
import Link from 'next/link';

type imgParams = {
  src: string;
  width: number;
  height: number;
};

export default function FeaturedImage({ post }) {
  let img: imgParams = {
    src: 'https://wp.abhinavr.com/wp-content/uploads/2022/12/travel_icy-polar_022K.jpg',
    width: 300,
    height: 200,
  };

  if (post.featuredImage) {
    let size = post.featuredImage.node.mediaDetails.sizes[0];
    img = {
      src: size.sourceUrl,
      width: +size.width,
      height: +size.height,
    };
  }

  return (
    <Link href={`/blog/${post.slug}`}>
      <Image
        src={img.src}
        width={img.width}
        height={img.height}
        alt={post.title}
        className="h-full object-cover rounded-xl"
      />
    </Link>
  );
}
