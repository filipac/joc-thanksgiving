import Head from 'next/head';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { persoane, Rezultat } from '../data';
import { Props } from './index';

export const Joc = ({ all_persons, options }: Props) => {
  const [pers, setPers] = useState(all_persons);
  const [done, setDone] = useState(false);
  const [puncte, setPuncte] = useState(0);

  const evalueaza = useCallback(() => {
    const new_pers = [...pers];
    let puncte = 0;
    for (let person of new_pers) {
      if (!person.raspuns) {
        return;
      }
      if (person.raspuns === person.name) {
        person.result = Rezultat.Corect;
        puncte++;
      } else {
        person.result = Rezultat.Gresit;
      }
    }
    setPers(new_pers);
    setPuncte(puncte);
    setDone(true);
  }, [pers]);

  const allHasResult = pers.every((p) => p.raspuns && p.respuns.length > 0);

  return (
    <div suppressHydrationWarning>
      <Head>
        <title>Joc</title>
      </Head>
      <div
        className="grid columns-1 items-center justify-center mt-12"
        suppressHydrationWarning
      >
        {pers.map((person, key) => {
          return (
            <div key={person.image} suppressHydrationWarning>
              <div className="mb-2">
                Persoana {key + 1} {false && <span>({person.name})</span>}
              </div>
              <div>
                <Image
                  src={`/img/${person.image}`}
                  width={300}
                  height={200}
                  alt={person.image}
                />
              </div>
              <div className="mt-2">
                {!done && (
                  <select
                    className="w-full my-2"
                    value={person.raspuns}
                    onChange={(e) => {
                      const raspuns = e.target.value;
                      const newPers = [...pers];
                      newPers[key].raspuns = raspuns;
                      setPers(newPers);
                    }}
                  >
                    <option value="">Alege</option>
                    {options.map((option) => {
                      return (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      );
                    })}
                  </select>
                )}
                {done && (
                  <div
                    className={`${
                      person.result === Rezultat.Corect
                        ? 'bg-green-200'
                        : 'bg-red-200'
                    } p-2`}
                  >
                    {person.name} -{' '}
                    {person.result === Rezultat.Corect ? 'Corect' : 'Gresit'}
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div className="py-4">
          {/* allHasResult */}
          {!done && (
            <button
              className={`${
                allHasResult ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-500'
              } text-white font-bold py-2 px-4 rounded w-full`}
              onClick={evalueaza}
            >
              {allHasResult ? 'Evalueaza' : 'Raspunde la toate inainte'}
            </button>
          )}
          {done && (
            <div className="text-center">
              <div className="text-2xl">Ai obtinut {puncte} puncte</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Joc;
