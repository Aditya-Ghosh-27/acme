import { Inter } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

type Font = {
    weight: string[];
    subsets: string[];
};

export const lusitana : Font = {
    weight: ['400', '700'],
    subsets: ['latin']
}