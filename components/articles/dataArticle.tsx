"use client"

import React, {useEffect, useState} from "react";
import Table from "@/components/common/table";
import Pagination from "@/components/common/pagination";
import axios from "axios";


interface props {
    page: string
    page_size: string
}

const DataArticle: React.FC<props> = ({page, page_size}) => {

    const [data, setData] = useState<any>()

    useEffect(() => {
        if (page && page_size) {
            axios.get(`https://api-trials.x5.com.au/api/articles?search&page=${page}&page_size=${page_size}`).then((res) => {
                setData(res?.data.data)
            })
        }

    }, [page, page_size])


    return (
        <>
            <Table data={data?.articles}/>
            <Pagination total={data?.page_info?.total}/>
        </>
    )
}

export default DataArticle