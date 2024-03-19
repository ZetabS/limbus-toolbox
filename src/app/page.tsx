import Image from 'next/image';

export default function Home() {
  const lis = [];
  for (let i = 0; i < 100; i++) {
    lis.push(
      <div>
        asdf
        <br />
      </div>
    );
  }
  return lis;
}
