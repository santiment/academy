export function mergeEntries(
  prevEntries: any[],
  nextEntries: any[],
  keys: { created: string; removed: string },
) {
  if (!prevEntries.length) return nextEntries
  if (!nextEntries.length) return prevEntries

  const lastPrev = prevEntries[prevEntries.length - 1]
  const firstNext = nextEntries[0]

  if (lastPrev.date === firstNext.date) {
    const mergedGroup = {
      ...lastPrev,
      [keys.created]: [
        ...(lastPrev[keys.created] || []),
        ...(firstNext[keys.created] || []),
      ],
      [keys.removed]: [
        ...(lastPrev[keys.removed] || []),
        ...(firstNext[keys.removed] || []),
      ],
    }
    return [...prevEntries.slice(0, -1), mergedGroup, ...nextEntries.slice(1)]
  }

  return [...prevEntries, ...nextEntries]
}
