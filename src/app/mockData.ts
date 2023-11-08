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

export const mockBodyWeightData = [
  {
    weight: 70, // Initial body weight
    date: new Date("2023-11-01"),
  },
  {
    weight: 71,
    date: new Date("2023-10-01"),
  },
  {
    weight: 70.5,
    date: new Date("2023-09-02"),
  },
  {
    weight: 70.2,
    date: new Date("2023-08-02"),
  },
  {
    weight: 70.8,
    date: new Date("2023-12-27"),
  },
  {
    weight: 71.2,
    date: new Date("2023-11-04"),
  },
  {
    weight: 71.5,
    date: new Date("2023-10-20"),
  },
  {
    weight: 71.3,
    date: new Date("2023-09-15"),
  },
  {
    weight: 71.8,
    date: new Date("2023-08-30"),
  },
  {
    weight: 71.1,
    date: new Date("2023-08-15"),
  },
  {
    weight: 71.7,
    date: new Date("2023-12-14"),
  },
  {
    weight: 71.4, // Most recent body weight
    date: new Date("2023-11-12"),
  },
];
