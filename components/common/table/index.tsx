"use client"

import React, {useEffect, useState} from "react";
import Link from "next/link";
import Modal from "@/components/common/Modal";

interface props {
    data: any
}

const Table: React.FC<props> = ({data}) => {

    const [table, setTable] = useState({
        th: ["Date", "Title", "Content", "Action"],
        td: []
    })

    const [isOpen, setIsOpen] = useState(false)
    const [id, setId] = useState(-1)

    useEffect(() => {

        if (data) {
            const td: any = []
            data.forEach((row: any) => {
                const tr: any = []
                tr.push(new Date(row.created_at).toLocaleDateString('id-ID', {dateStyle: 'long'}))
                tr.push(row.title)
                tr.push(row.content)
                tr.push(
                    <div className={'flex gap-2'}>
                        <Link href={`/edit/${row.id}`}>
                            <button>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="24" height="24" rx="12" fill="#CF8812"/>
                                    <path
                                        d="M14.7992 6.0062C15.6623 5.95226 16.5134 6.25195 17.1548 6.83934C17.7422 7.48068 18.0418 8.3318 17.9939 9.2009V14.7991C18.0478 15.6682 17.7422 16.5193 17.1608 17.1607C16.5194 17.7481 15.6623 18.0477 14.7992 17.9938H9.20092C8.33181 18.0477 7.48069 17.7481 6.83935 17.1607C6.25195 16.5193 5.95226 15.6682 6.0062 14.7991V9.2009C5.95226 8.3318 6.25195 7.48068 6.83935 6.83934C7.48069 6.25195 8.33181 5.95226 9.20092 6.0062H14.7992ZM14.6433 8.74537C14.2717 8.37375 13.6723 8.37375 13.3007 8.74537L12.8991 9.15295C12.8392 9.21288 12.8392 9.31478 12.8991 9.37472C12.8991 9.37472 12.9109 9.38641 12.9318 9.40723L13.0793 9.55385C13.1645 9.6387 13.271 9.74467 13.3779 9.85122L13.7403 10.2135C13.816 10.2895 13.8661 10.3404 13.8701 10.3457C13.9361 10.4176 13.978 10.5135 13.978 10.6214C13.978 10.8372 13.8042 11.017 13.5824 11.017C13.4805 11.017 13.3846 10.9751 13.3187 10.9091L12.3177 9.91416C12.2698 9.86621 12.1859 9.86621 12.1379 9.91416L9.27884 12.7732C9.08104 12.971 8.96716 13.2347 8.96117 13.5164L8.9252 14.937C8.9252 15.0149 8.94918 15.0868 9.00312 15.1408C9.05707 15.1947 9.129 15.2247 9.20692 15.2247H10.6155C10.9032 15.2247 11.1789 15.1108 11.3887 14.907L15.4225 10.8612C15.7882 10.4896 15.7882 9.89018 15.4225 9.52456L14.6433 8.74537Z"
                                        fill="white"/>
                                </svg>
                            </button>
                        </Link>

                        <button
                            onClick={()=>{
                                setId(row.id)
                                setIsOpen(true)
                            }}
                        >
                            <svg width="23" height="24" viewBox="0 0 23 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect width="22.8" height="24" rx="11.4" fill="#FF1D1D"/>
                                <path
                                    d="M15.5634 10.0183C15.6831 10.0183 15.7916 10.0705 15.8774 10.1587C15.9573 10.2529 15.9976 10.3699 15.9859 10.4935C15.9859 10.5343 15.6661 14.5782 15.4835 16.2804C15.3691 17.325 14.6957 17.9592 13.6856 17.9766C12.909 17.994 12.1498 18 11.4023 18C10.6087 18 9.83258 17.994 9.07924 17.9766C8.10299 17.9532 7.42901 17.3076 7.32047 16.2804C7.13258 14.5722 6.81864 10.5343 6.8128 10.4935C6.80697 10.3699 6.84665 10.2529 6.92717 10.1587C7.00653 10.0705 7.12091 10.0183 7.24111 10.0183H15.5634ZM12.6388 6C13.1693 6 13.6431 6.3702 13.7802 6.89819L13.8783 7.33619C13.9576 7.69318 14.2669 7.94578 14.6228 7.94578H16.3723C16.6057 7.94578 16.8 8.13958 16.8 8.38618V8.61417C16.8 8.85477 16.6057 9.05457 16.3723 9.05457H6.42831C6.19432 9.05457 6 8.85477 6 8.61417V8.38618C6 8.13958 6.19432 7.94578 6.42831 7.94578H8.17774C8.53311 7.94578 8.84238 7.69318 8.92233 7.33679L9.01394 6.92759C9.15632 6.3702 9.6249 6 10.1612 6H12.6388Z"
                                    fill="white"/>
                            </svg>
                        </button>
                    </div>
                )
                td.push(tr)
            })

            setTable({
                ...table,
                td,
            })
        }

    }, [data,isOpen])

    return (
        <>
            <table className={'w-full mt-4'}>
                <thead className={'text-green-500'}>
                <tr>
                    {table.th.map((row: any, k) => (
                        <th className={'text-start border p-2'} key={k}>{row}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {table.td.map((tr: any, j) => (
                    <tr key={j}>
                        {tr.map((td: any, i: number) => (
                            <td key={i} className={'border p-2'}>
                                {td}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>

            <Modal id={id} isOpen={isOpen} setIsOpen={setIsOpen} />

        </>
    )
}

export default Table