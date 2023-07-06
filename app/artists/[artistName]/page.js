import React from 'react'
import { filterSliderData, filterUserData } from '@/utils/filterData';
import { getData } from '@/services/getData';
import Error404 from '@/components/errors/error404';
import ArtistNameClient from './artistNameClient';
import { useParams } from 'next/navigation';
import { fetchPathList } from '@/cache/artistList/artistListPreCache';

const photosPerPage = 10

export const metadata = {
    title:"Artists",
    description: "Artist Page - displays information about an artist"
}

export const dynamicParams = true;
export async function generateStaticParams() {
    return fetchPathList()
  }

const Artist = async (context) => {
    const {params} = context;
    const key = process.env.API_KEY;
    const baseURL = process.env.BASE_URL;
    const userURL = `${baseURL}/users/${params.artistName}?client_id=${key}`;
    const user = await getData(userURL, filterUserData);
    const photosURL = `${baseURL}/users/${params.artistName}/photos?per_page=${photosPerPage}&client_id=${key}`
    const photos = await getData(photosURL, filterSliderData);


    return (
        <>
        {
        user.status==200?
        <ArtistNameClient user={user} photos={photos} />:<Error404/>
        }
        </>
  )
}

export default Artist