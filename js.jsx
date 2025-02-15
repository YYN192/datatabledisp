import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>My Image</h1>
      <Image src="/my-image.png" alt="Optimized Image" width={300} height={300} />
    </div>
  );
}
