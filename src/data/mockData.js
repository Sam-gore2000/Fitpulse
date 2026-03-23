import { COLORS } from './constants.js'

export const generateWeeklyData = () => [
  { day: 'Mon', calories: 420, steps: 7800,  active: 45, goal: 500 },
  { day: 'Tue', calories: 380, steps: 6200,  active: 32, goal: 500 },
  { day: 'Wed', calories: 610, steps: 11200, active: 68, goal: 500 },
  { day: 'Thu', calories: 290, steps: 5100,  active: 28, goal: 500 },
  { day: 'Fri', calories: 530, steps: 9800,  active: 55, goal: 500 },
  { day: 'Sat', calories: 720, steps: 13400, active: 82, goal: 500 },
  { day: 'Sun', calories: 180, steps: 3200,  active: 20, goal: 500 },
]

export const macroData = [
  { name: 'Protein', value: 35, color: COLORS.blue   },
  { name: 'Carbs',   value: 45, color: COLORS.orange },
  { name: 'Fat',     value: 20, color: COLORS.purple },
]

export const heartRateZones = [
  { zone: 'Rest',     value: 15, color: '#6ee7b7'      },
  { zone: 'Fat Burn', value: 30, color: COLORS.green  },
  { zone: 'Cardio',   value: 35, color: COLORS.orange },
  { zone: 'Peak',     value: 20, color: COLORS.red    },
]

export const heartRateData = [
  { time: '6am',  bpm: 62  },
  { time: '8am',  bpm: 142 },
  { time: '10am', bpm: 95  },
  { time: '12pm', bpm: 78  },
  { time: '2pm',  bpm: 88  },
  { time: '4pm',  bpm: 155 },
  { time: '6pm',  bpm: 72  },
  { time: '8pm',  bpm: 65  },
]

export const workoutFrequencyData = [
  { week: 'W1', cardio: 3, strength: 2, yoga: 1 },
  { week: 'W2', cardio: 4, strength: 3, yoga: 2 },
  { week: 'W3', cardio: 2, strength: 4, yoga: 1 },
  { week: 'W4', cardio: 5, strength: 3, yoga: 3 },
]

export const initialWorkouts = [
  { id: 1, name: 'Morning Run',  category: 'Cardio',   duration: 45, calories: 380, date: '2026-03-22', notes: '5K at steady pace'    },
  { id: 2, name: 'Push Day',     category: 'Strength', duration: 60, calories: 290, date: '2026-03-21', notes: 'Chest & triceps'       },
  { id: 3, name: 'Yoga Flow',    category: 'Yoga',     duration: 30, calories: 120, date: '2026-03-20', notes: 'Morning flexibility'   },
  { id: 4, name: 'HIIT Session', category: 'Cardio',   duration: 25, calories: 340, date: '2026-03-19', notes: 'Tabata intervals'      },
  { id: 5, name: 'Pull Day',     category: 'Strength', duration: 55, calories: 260, date: '2026-03-18', notes: 'Back & biceps'        },
  { id: 6, name: 'Cycling',      category: 'Cardio',   duration: 90, calories: 620, date: '2026-03-17', notes: 'Long outdoor ride'    },
]

export const initialGoals = [
  { id: 1, name: 'Daily Steps',     target: 10000, current: 8432, unit: 'steps',    icon: '👣', color: COLORS.blue   },
  { id: 2, name: 'Weekly Calories', target: 3500,  current: 2730, unit: 'kcal',     icon: '🔥', color: COLORS.orange },
  { id: 3, name: 'Water Intake',    target: 8,     current: 6,    unit: 'glasses',  icon: '💧', color: COLORS.blue   },
  { id: 4, name: 'Active Minutes',  target: 300,   current: 198,  unit: 'min',      icon: '⏱️', color: COLORS.green  },
  { id: 5, name: 'Workouts/Week',   target: 5,     current: 3,    unit: 'sessions', icon: '💪', color: COLORS.purple },
]

export const badges = [
  { id: 1, name: 'First Step',    icon: '👟', earned: true,  desc: 'Logged first workout'          },
  { id: 2, name: '7-Day Streak',  icon: '🔥', earned: true,  desc: '7 consecutive active days'     },
  { id: 3, name: '10K Steps',     icon: '🏃', earned: true,  desc: 'Hit 10,000 steps in a day'    },
  { id: 4, name: 'Iron Will',     icon: '💪', earned: false, desc: 'Complete 20 strength sessions' },
  { id: 5, name: 'Cardio King',   icon: '❤️', earned: true,  desc: '30 cardio sessions logged'    },
  { id: 6, name: 'Zen Master',    icon: '🧘', earned: false, desc: 'Complete 15 yoga sessions'    },
  { id: 7, name: 'Hydration Hero',icon: '💧', earned: false, desc: 'Hit water goal 14 days'       },
  { id: 8, name: 'Century',       icon: '🏆', earned: false, desc: '100 total workouts'            },
]

export const insightsPool = [
  '🔥 You are 20% more active this week than last week!',
  '📈 Best workout day: Wednesday — keep it up!',
  '💧 Drinking more water boosts metabolism by 30%',
  '🎯 You are on track to hit your weekly calorie goal',
  '⚡ Your average workout intensity increased by 15%',
  '🏆 You have completed 3 workouts this week — great job!',
  '🌅 Morning workouts show 40% better consistency for you',
  '💪 Strength training 3x/week reduces injury risk significantly',
]

export const initialProfile = {
  name:         'Alex Johnson',
  age:          28,
  height:       178,
  weight:       76,
  goal:         'Build Muscle',
  gender:       'Male',
  fitnessLevel: 'Intermediate',
}

export const lifetimeStats = [
  { label: 'Workouts Logged',       value: '47',    icon: '💪' },
  { label: 'Total Calories Burned', value: '18,420', icon: '🔥' },
  { label: 'Active Days',           value: '31',    icon: '📅' },
  { label: 'Personal Records',      value: '8',     icon: '🏆' },
]

// Re-export category lists here for convenience
export { WORKOUT_CATEGORIES, FILTER_CATEGORIES } from './constants.js'
