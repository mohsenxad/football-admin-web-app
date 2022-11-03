export interface Challenge
{
    _id: string,
    title: string,
    isActive: boolean,
    registerDate: Date,
    startDateTime: Date,
    endDateTime: Date,
    event:string,
    optionList:any[]
}