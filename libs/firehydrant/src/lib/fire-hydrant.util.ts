// Fire Hydrant
// 💦💧🚰🚱🔥🧯🚒👨‍🚒

import { BehaviorSubject } from 'rxjs';

type WaterStream = '💦' | '💧' | '🚰';
const fireHydrant$ = new BehaviorSubject<WaterStream>('💦');

// Subscribe to fire hydrant observable
fireHydrant$.subscribe({
  next: (water: WaterStream) => {
    switch (water) {
      case '💦':
        console.log(`Fire hydrant has enough`, water);
        break;
      default:
        console.log(`Fire hydrant doesn't have enough`, water);
        break;
    }
  },
  error: (err) => {
    console.log(`Fire hydrant has no water 🚱`, err);
  },
  complete: () => {
    console.log(`We are done with this fire hydrant! 🧯`);
  },
});
