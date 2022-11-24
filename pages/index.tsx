import dynamic from 'next/dynamic';
import { persoane } from '../data';

export async function getStaticProps(context: any) {
  const random = () => Math.random() - 0.5;
  return {
    props: {
      options: [...persoane].sort(random).map((p) => p.name),
      all_persons: [...persoane]
        .map((p) => ({ ...p, raspuns: '' }))
        .sort(random),
    }, // will be passed to the page component as props
  };
}

const ComponentWithNoSSR = dynamic(() => import('./joc'), { ssr: false });

export type Props = {
  all_persons: any;
  options: any;
};
export default function Home({ all_persons, options }: Props) {
  return (
    <ComponentWithNoSSR
      all_persons={all_persons}
      options={options}
    ></ComponentWithNoSSR>
  );
}
