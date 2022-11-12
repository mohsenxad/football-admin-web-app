export interface Event
{
    _id?: string,
    title?: string,
    description?: string,
    isActive?: boolean,
    registerDate?: number,
    startDateTime?: number,
    endDateTime?: number,
    tagList?:string[],
    channelMessageId?:number,
    telegramGroupId?:number,
    telegramGroupInviteLink?:string,
}