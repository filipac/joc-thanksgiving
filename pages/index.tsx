import dynamic from 'next/dynamic';
import { persoane } from '../data';

export async function getStaticProps(context) {
  const random = () => Math.random() - 0.5;
  return {
    props: {
      options: [...persoane].map((p) => p.name),
      all_persons: [...persoane].map((p) => ({ ...p, raspuns: '' })),
      // .sort(random),
    }, // will be passed to the page component as props
  };
}

const ComponentWithNoSSR = dynamic(() => import('./joc'), { ssr: false });

export default function Home({ all_persons, options }) {
  return (
    <ComponentWithNoSSR
      all_persons={all_persons}
      options={options}
    ></ComponentWithNoSSR>
  );
}
