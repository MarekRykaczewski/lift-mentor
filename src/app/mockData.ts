interface TrainingData {
  muscle: string;
  weight: number;
  sets: number;
  reps: number;
  date: Date;
}

export const mockTrainingData: TrainingData[] = [
  {
    muscle: "Chest",
    weight: 100,
    sets: 3,
    reps: 10,
    date: new Date("2023-11-01"),
  },
  {
    muscle: "Back",
    weight: 80,
    sets: 3,
    reps: 8,
    date: new Date("2023-10-01"),
  },
  {
    muscle: "Legs",
    weight: 120,
    sets: 3,
    reps: 12,
    date: new Date("2023-09-02"),
  },
  {
    muscle: "Chest",
    weight: 110,
    sets: 4,
    reps: 10,
    date: new Date("2023-08-02"),
  },
  {
    muscle: "Back",
    weight: 90,
    sets: 3,
    reps: 10,
    date: new Date("2023-12-27"),
  },
  {
    muscle: "Legs",
    weight: 130,
    sets: 4,
    reps: 12,
    date: new Date("2023-11-04"),
  },
];
