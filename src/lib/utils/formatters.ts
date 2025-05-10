export function formatNumber(num: number): string {
    if (num < 1000000) {
        return num.toLocaleString();
    } else {
        const millions = num / 1000000;
        return `${millions.toFixed(1)} million`;
    }
}
