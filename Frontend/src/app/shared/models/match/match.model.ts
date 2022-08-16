import { Player } from "../player/player.model";

export interface Match
{
    id: number;
    playerOneId: number;
    playerOne: Player;
    playerTwoId: number;
    playerTwo: Player;
    result: string;
}