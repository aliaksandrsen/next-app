import Image from 'next/image';
import homeImg from '/public/home.jpg';
import Hero from '@/components/hero';

export default function HomePage() {
  return (
    <Hero
      imgData={homeImg}
      imagAlt="car factory"
      title="Professional Cloud Hosting"
    />
  );
}
