// 21 persons, photos names as p{1..21}.jpg
export enum Rezultat {
    Corect = 1,
    Gresit = 2
};
export type Person = {
    image: string;
    name: string;
    raspuns?: string;
    result?: Rezultat;
}
export const persoane = [
    {
        image: 'p1.jpg',
        name: '1',
    },
    {
        image: 'p2.jpg',
        name: '2',
    },
    {
        image: 'p3.jpg',
        name: '3',
    },
    {
        image: 'p4.jpg',
        name: '4',
    },
    {
        image: 'p5.jpg',
        name: '5',
    },
    {
        image: 'p6.jpg',
        name: '6',
    },
    {
        image: 'p7.jpg',
        name: '7',
    },
    {
        image: 'p8.jpg',
        name: 'Oty Minzat',
    },
    {
        image: 'p9.jpg',
        name: 'Beni Fabian',
    },
    {
        image: 'p10.jpg',
        name: '10',
    },
    {
        image: 'p11.jpg',
        name: '11',
    },
    {
        image: 'p12.jpg',
        name: 'Cristina Hedean',
    },
    {
        image: 'p13.jpg',
        name: 'Marius Hedean',
    },
    {
        image: 'p14.jpg',
        name: 'Daria Rusu',
    },
    {
        image: 'p15.jpg',
        name: 'Catalina Pacurar',
    },
    {
        image: 'p16.jpg',
        name: 'Iosua Pacurar',
    },
    {
        image: 'p17.jpg',
        name: 'Filip Pacurar',
    },
    {
        image: 'p18.jpg',
        name: 'Caleb Pacurar',
    },
    {
        image: 'p19.jpg',
        name: '19',
    },
    {
        image: 'p20.jpg',
        name: '20',
    },
    {
        image: 'p21.jpg',
        name: '21',
    },
];
