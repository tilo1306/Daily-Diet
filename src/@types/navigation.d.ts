export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      newMeat: undefined;
      feedbackpositive: undefined;
      feedbackbad: undefined;
      statistic: {
        percent: number;
      };
      meal: {
        idMeal: string;
        date: string;
      };
      editMeal: {
        idMeal: string;
        date: string;
      };
    }
  }
}
