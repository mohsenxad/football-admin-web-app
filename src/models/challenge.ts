import { ChallengeOption } from "./challengeOption";

export interface Challenge
{
    _id?: string,
    title?: string,
    description?: string,
    isActive?: boolean,
    registerDate?: number,
    startDateTime?: number,
    endDateTime?: number,
    event?:string,
    optionList?:ChallengeOption[],
    channelMessageId?:number,
    cost?:number,
    revenue?:number
}