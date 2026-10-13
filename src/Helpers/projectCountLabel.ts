export function projectCountLabel(count: number) {
    if (count === 0) {
        return 'Nog geen projecten';
    }

    return count === 1 ? '1 project' : `${count} projecten`;
}
