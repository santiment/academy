export function mergeEntries<T extends { date: string }>(
  prevEntries: T[],
  nextEntries: T[],
  keys: { created: keyof T; removed: keyof T },
): T[] {
  if (!prevEntries.length) return nextEntries
  if (!nextEntries.length) return prevEntries

  const lastPrev = prevEntries[prevEntries.length - 1]
  const firstNext = nextEntries[0]

  if (lastPrev.date === firstNext.date) {
    const mergedGroup = {
      ...lastPrev,
      [keys.created]: [
        ...((lastPrev[keys.created] as unknown as any[]) || []),
        ...((firstNext[keys.created] as unknown as any[]) || []),
      ],
      [keys.removed]: [
        ...((lastPrev[keys.removed] as unknown as any[]) || []),
        ...((firstNext[keys.removed] as unknown as any[]) || []),
      ],
    }

    return [...prevEntries.slice(0, -1), mergedGroup, ...nextEntries.slice(1)]
  }

  return [...prevEntries, ...nextEntries]
}
