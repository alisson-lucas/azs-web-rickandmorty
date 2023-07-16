'use client'
import { createContext, useContext, useState, useEffect } from 'react';
import { useQuery } from '@/utils/graphql';
import { usePathname, useParams, useRouter } from 'next/navigation'


export const AppContext = createContext();

const QUERY = `
  query {
    episodes {
      results{
        id,
        name,
        air_date,
        episode,
        characters {
          name,
          status,
          species,
          image,
        }
      }
    }
  }
`

function AppWrapper({ children }) {
  const { data } = useQuery(QUERY)
  const [items, setItems] = useState(data)
  const [search, setSearch] = useState('')

  let storage = JSON.parse(localStorage.getItem("favorites")) || []
  const [favorites, setFavorites] = useState(storage || []);


  const params = useParams()
  const id = params.id


  const content = data?.episodes.results

  console.log(content);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
    let favoriteStoragedData = localStorage.getItem("favorites") || [];
    console.log('storage data:', JSON.parse(favoriteStoragedData));

  }, [favorites])

  // console.log('favorite context:', favorites);

  return (
    <AppContext.Provider value={{ items, setItems, content, search, setSearch, favorites, setFavorites, data }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  const { items, setItems, content, search, setSearch, favorites, setFavorites, data } = context
  return { items, setItems, content, search, setSearch, favorites, setFavorites, data };
}

export default AppWrapper;