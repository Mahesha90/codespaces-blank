// f3.ts

// Function to calculate the average speed of a two-kilometer distance
export function keskmineKiirus(km1Speed: number, km2Speed: number): number {
    // Average speed calculation: total distance / total time
    const timeForKm1 = 1 / km1Speed; // Time for the first kilometer (distance/speed)
    const timeForKm2 = 1 / km2Speed; // Time for the second kilometer (distance/speed)

    const totalTime = timeForKm1 + timeForKm2; // Total time for 2 kilometers
    const averageSpeed = 2 / totalTime; // Total distance (2 km) divided by total time

    return averageSpeed;
}
