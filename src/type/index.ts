export interface IResponse {
  id: number;
  date: string;
  hours: IHours[];
}

export interface IHours {
  hour: string;
  description: string;
  isFitness: boolean;
}
