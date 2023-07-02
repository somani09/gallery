import styles from './home.module.scss'
import { getRandomInt } from '@/utils/getRandomInt'
import { filterArtistListData, filterSliderData } from '@/utils/filterData'
import { getData } from '@/services/getData'
import { randFirstName } from '@ngneat/falso';
import getArtistList from '@/cache/artistList/artistListPreCache'
import HomeClient from './homeClient'

const numberOfImages = 5;
const numberOfArtists = 5;

export const metadata = {
    title: 'Home page',
    description: 'Landing page / Home page for the project',
}

// export const revalidate = 86400;
export const revalidate = 60000*10;

export default async function Home() {
    const key = process.env.API_KEY;
    const baseURL = process.env.BASE_URL;
    
    const topPicksURL =`${baseURL}/collections/${getRandomInt(1,5)}/photos?per_page=${numberOfImages}&client_id=${key}`;
    const topPicks = await getData(topPicksURL,filterSliderData )
  
    const recentURL =`${baseURL}/photos?page=1&per_page=${numberOfImages}&client_id=${key}`;
    const recent = await getData(recentURL, filterSliderData);
    
    const artistsListFromCache = await getArtistList(key,baseURL)
    const artistList =artistsListFromCache;

  return (
    <>
      <main className={styles.main}>
        <HomeClient artistList={artistList} topPicks={topPicks} recent={recent}/>
      </main>
    </>
  )
}
