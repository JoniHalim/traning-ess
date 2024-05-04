"use client"

import React, {useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

interface props {
    total: number
}

const Pagination: React.FC<props> = ({total}) => {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const page = searchParams.get('page') ?? 1
    const page_size = searchParams.get('page_size') ?? 10

    const addPage = () => {
        const params = new URLSearchParams()
        params.set('page', `${Number(page ?? 1) + 1}`)
        params.set('page_size', `${Number(page_size)}`)
        router.push(pathname + '?' + params.toString())
    }

    const minPage = () => {
        const params = new URLSearchParams()
        params.set('page', `${Number(page ?? 1) - 1}`)
        params.set('page_size', `${Number(page_size)}`)
        router.push(pathname + '?' + params.toString())
    }

    const changePageSize = (e: string) => {
        const params = new URLSearchParams()
        params.set('page', `${Number(page ?? 1)}`)
        params.set('page_size', `${e}`)
        router.push(pathname + '?' + params.toString())
    }

    return (
        <>
            <div className="flex items-center gap-4 justify-end mt-4">

                <select
                    className={'bg-gray-300 rounded px-4'}
                    onChange={(e) => {
                        changePageSize(e.target.value)
                    }}
                    defaultValue={10}
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select>

                {Number(page) > 1 &&
                    <button
                        onClick={() => minPage()}
                        className={'bg-gray-300 p-1.5 shadow drop-shadow'}
                    >
                        <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5 7.5L0 4L3.5 0.5L4.31667 1.31667L1.63333 4L4.31667 6.68333L3.5 7.5Z"
                                  fill="#171717"/>
                        </svg>
                    </button>
                }

                {Number(page) ?? 1}

                {(total / Number(page_size)) > Number(page) &&
                    <button
                        className={'bg-gray-300 p-1.5 shadow drop-shadow'}
                        onClick={() => addPage()}
                    >
                        <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.29999 0.5L4.79999 4L1.29999 7.5L0.483321 6.68333L3.16665 4L0.483321 1.31667L1.29999 0.5Z"
                                fill="#171717"/>
                        </svg>
                    </button>
                }
            </div>
        </>
    )
}

export default Pagination