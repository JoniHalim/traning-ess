import React from "react";
import {FetchApi} from "@/utilities/fetch";

const getArticle = async () => {
    try {
        return await FetchApi('/articles?search&page=1&page_size=10')
    } catch (e) {
        return e
    }
}

export default async function Home() {

    const data = await getArticle()
    console.log(data)

    return (
        <>

        </>
    );
}
