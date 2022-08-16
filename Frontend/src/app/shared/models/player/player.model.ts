export interface Player
{
    id: number;
    name: string;
    description: string;
    firstMatches: number[];
    secondMatches: number[];
    won: number;
}