export function mergeEntries(prevEntries, nextEntries, createdKey, removedKey) {
  const byDate = new Map()

  const cloneGroup = g => ({
    date: g.date,
    [createdKey]: Array.isArray(g[createdKey]) ? [...g[createdKey]] : [],
    [removedKey]: Array.isArray(g[removedKey]) ? [...g[removedKey]] : [],
  })

  prevEntries.forEach(e => byDate.set(e.date, cloneGroup(e)))

  nextEntries.forEach(e => {
    if (byDate.has(e.date)) {
      const ex = byDate.get(e.date)
      ex[createdKey] = ex[createdKey].concat(e[createdKey] || [])
      ex[removedKey] = ex[removedKey].concat(e[removedKey] || [])
    } else {
      byDate.set(e.date, cloneGroup(e))
    }
  })

  return Array.from(byDate.values()).sort((a, b) => (a.date < b.date ? 1 : -1))
}
