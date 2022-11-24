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
        name: 'Thomas Fabian',
    },
    {
        image: 'p2.jpg',
        name: 'Miriam Fabian',
    },
    {
        image: 'p3.jpg',
        name: 'Dani Cosmescu',
    },
    {
        image: 'p4.jpg',
        name: 'Mali Cosmescu',
    },
    {
        image: 'p5.jpg',
        name: 'Darius Rusu',
    },
    {
        image: 'p6.jpg',
        name: 'Doariana Minzat',
    },
    {
        image: 'p7.jpg',
        name: 'Liam Minzat',
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
        name: 'Nati Hedean',
    },
    {
        image: 'p11.jpg',
        name: 'Alina Hedean',
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
        name: 'Hany Hedean',
    },
    {
        image: 'p20.jpg',
        name: 'Nydia Hedean',
    },
    {
        image: 'p21.jpg',
        name: 'Ayilin Hedean',
    },
];
