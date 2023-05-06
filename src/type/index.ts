export interface IResponse {
  id: number;
  date: string;
  hours: {
    hour: string;
    description: string;
    isFitness: boolean;
  }[];
}
