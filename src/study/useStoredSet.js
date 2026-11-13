import { useCallback, useState } from 'react'

function read(key) {
  try {
    return new Set(JSON.parse(localStorage.getItem(key)) ?? [])
  } catch {
    return new Set()
  }
}

// Ensemble d'identifiants conservé dans le navigateur (leçons terminées, tâches cochées).
export function useStoredSet(key) {
  const [set, setSet] = useState(() => read(key))

  const toggle = useCallback(
    (id) => {
      setSet((previous) => {
        const next = new Set(previous)
        if (next.has(id)) next.delete(id)
        else next.add(id)
        try {
          localStorage.setItem(key, JSON.stringify([...next]))
        } catch {
          // stockage indisponible : la progression reste valable pour la session
        }
        return next
      })
    },
    [key],
  )

  return [set, toggle]
}
