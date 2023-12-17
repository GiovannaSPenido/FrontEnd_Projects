export function isFloat(value) {
    return (
    typeof value === 'number' &&
    !Number.isNaN(value) &&
    !Number.isInteger(value)
    )
    }
export function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
    }