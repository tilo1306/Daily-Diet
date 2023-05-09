export interface IResponse {
  id: string;
  date: string;
  hours: IHours[];
}

export interface IHours {
  id: string;
  hour: string;
  name: string;
  description: string;
  isFitness: boolean;
}
