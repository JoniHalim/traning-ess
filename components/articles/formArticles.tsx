"use client"

import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useRouter} from "next/navigation";

interface props {
    id?: number
}

const FormArticles: React.FC<props> = ({id}) => {

    const {handleSubmit, register, reset} = useForm()
    const router = useRouter()
    const PostArticle = async (e: any) => {

        if (id) {
            await axios.put(`https://api-trials.x5.com.au/api/articles/${id}`, {
                ...e
            }).then((res) => {
                router.refresh()
                router.push('/')
            })
        } else {
            await axios.post('https://api-trials.x5.com.au/api/articles', {
                ...e
            }).then((res) => {
                router.refresh()
                router.push('/')
            })
        }
    }

    useEffect(() => {

        if (id) {
            axios.get(`https://api-trials.x5.com.au/api/articles/${id}`).then((res) => {
                reset({
                    title: res?.data.data.title,
                    content: res?.data.data.content,
                })
            })
        }

    }, [id])


    return (
        <>
            <form onSubmit={handleSubmit(PostArticle)}>
                <div className="mt-4">
                    <label htmlFor="title">Title</label>
                    <input
                        {...register('title')}
                        type="text"
                        className={'w-full mt-2 p-2 border-2 border-green-500 focus:outline-green-600 rounded'}
                        id={'title'}
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="content">Content</label>
                    <textarea
                        {...register('content')}
                        rows={6}
                        className={'w-full mt-2 p-2 border-2 border-green-500 focus:outline-green-600 rounded'}
                        id={'content'}
                    />
                </div>

                <button type={"submit"} className={'bg-green-500 text-white p-1.5 px-4 rounded-lg mt-4'}>
                    Save
                </button>

            </form>
        </>
    )
}
export default FormArticles