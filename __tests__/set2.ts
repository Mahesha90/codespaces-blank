// __tests__/set2.ts

import { keskmineKiirus } from "../f2";

test("keskmine kiirus (average speed)", () => {
    // Test case: speed for the first kilometer = 30 km/h, second kilometer = 60 km/h
    const km1Speed = 30;
    const km2Speed = 60;

    // Expected result: average speed = 40 km/h
    const result = keskmineKiirus(km1Speed, km2Speed);
    expect(result).toBeCloseTo(40, 1); // 40 km/h with 1 decimal place precision
});
