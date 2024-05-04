"use client"

import React, {Fragment, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import axios from "axios";
import {useRouter} from "next/navigation";

interface props {
    id: number,
    isOpen: boolean
    setIsOpen: (e: boolean) => void

}

const Modal: React.FC<props> = ({id, isOpen, setIsOpen}) => {

    function closeModal() {
        setIsOpen(false)
    }

    const router = useRouter()

    const RemoveArticle = async () => {
        await axios.delete(`https://api-trials.x5.com.au/api/articles/${id}`).then((res) => {
            if (res.status) {
                setIsOpen(false)
                window.location.assign('/')
                // router.push('/')
                // router.refresh()
            }
        })
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                    <div className="flex gap-2 items-center">
                                        <svg className={'drop-shadow'} width="40" height="41" viewBox="0 0 40 41"
                                             fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect y="0.0338211" width="40" height="40" rx="20" fill="#F7F7F7"/>
                                            <path
                                                d="M26.1489 17.1788L25.8489 26.259C25.8234 27.0367 25.4958 27.7738 24.9357 28.3139C24.3755 28.854 23.627 29.1545 22.8489 29.1518H17.1489C16.3713 29.1546 15.6232 28.8544 15.0632 28.315C14.5032 27.7755 14.1752 27.0392 14.1489 26.262L13.8489 17.1788C13.8424 16.9799 13.9151 16.7865 14.0511 16.6412C14.1871 16.4959 14.3753 16.4106 14.5742 16.404C14.7731 16.3975 14.9665 16.4702 15.1118 16.6062C15.257 16.7422 15.3424 16.9304 15.3489 17.1293L15.6489 26.2118C15.6639 26.5995 15.8285 26.9664 16.1082 27.2353C16.3879 27.5042 16.7609 27.6543 17.1489 27.654H22.8489C23.2374 27.6543 23.6109 27.5038 23.8907 27.2342C24.1705 26.9646 24.3347 26.597 24.3489 26.2088L24.6489 17.1293C24.6555 16.9304 24.7408 16.7422 24.8861 16.6062C25.0314 16.4702 25.2248 16.3975 25.4237 16.404C25.6226 16.4106 25.8107 16.4959 25.9468 16.6412C26.0828 16.7865 26.1555 16.9799 26.1489 17.1788ZM27.1412 14.157C27.1412 14.3559 27.0622 14.5467 26.9215 14.6874C26.7808 14.828 26.5901 14.907 26.3912 14.907H13.6074C13.4085 14.907 13.2177 14.828 13.0771 14.6874C12.9364 14.5467 12.8574 14.3559 12.8574 14.157C12.8574 13.9581 12.9364 13.7674 13.0771 13.6267C13.2177 13.486 13.4085 13.407 13.6074 13.407H15.9324C16.1701 13.4077 16.3994 13.3199 16.5759 13.1607C16.7524 13.0016 16.8633 12.7825 16.8872 12.546C16.9425 11.9914 17.2024 11.4772 17.6161 11.1037C18.0298 10.7302 18.5678 10.5241 19.1252 10.5255H20.8727C21.4301 10.5241 21.968 10.7302 22.3818 11.1037C22.7955 11.4772 23.0553 11.9914 23.1107 12.546C23.1345 12.7825 23.2455 13.0016 23.4219 13.1607C23.5984 13.3199 23.8278 13.4077 24.0654 13.407H26.3904C26.5893 13.407 26.7801 13.486 26.9208 13.6267C27.0614 13.7674 27.1404 13.9581 27.1404 14.157H27.1412ZM18.1892 13.407H21.8102C21.7116 13.1818 21.6472 12.9432 21.6189 12.699C21.6003 12.5142 21.5138 12.3428 21.3761 12.2181C21.2383 12.0934 21.0592 12.0242 20.8734 12.024H19.1259C18.9401 12.0242 18.761 12.0934 18.6233 12.2181C18.4855 12.3428 18.399 12.5142 18.3804 12.699C18.3519 12.9433 18.2872 13.1819 18.1884 13.407H18.1892ZM18.9444 24.7703V18.384C18.9444 18.1851 18.8654 17.9944 18.7248 17.8537C18.5841 17.713 18.3933 17.634 18.1944 17.634C17.9955 17.634 17.8047 17.713 17.6641 17.8537C17.5234 17.9944 17.4444 18.1851 17.4444 18.384V24.7733C17.4444 24.9722 17.5234 25.163 17.6641 25.3036C17.8047 25.4443 17.9955 25.5233 18.1944 25.5233C18.3933 25.5233 18.5841 25.4443 18.7248 25.3036C18.8654 25.163 18.9444 24.9722 18.9444 24.7733V24.7703ZM22.5549 24.7703V18.384C22.5549 18.1851 22.4759 17.9944 22.3353 17.8537C22.1946 17.713 22.0038 17.634 21.8049 17.634C21.606 17.634 21.4152 17.713 21.2746 17.8537C21.1339 17.9944 21.0549 18.1851 21.0549 18.384V24.7733C21.0549 24.9722 21.1339 25.163 21.2746 25.3036C21.4152 25.4443 21.606 25.5233 21.8049 25.5233C22.0038 25.5233 22.1946 25.4443 22.3353 25.3036C22.4759 25.163 22.5549 24.9722 22.5549 24.7733V24.7703Z"
                                                fill="#F33A3A"/>
                                        </svg>
                                        <p className={'font-semibold text-lg'}>Delete Article</p>
                                    </div>

                                    <p className={'mt-4'}>Are you sure you want to delete it? You can’t undo this
                                        action.</p>

                                    <div className={'flex gap-2 justify-end items-center mt-4'}>
                                        <button
                                            onClick={closeModal}
                                            className={'p-2 text-gray-500 font-semibold'}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={RemoveArticle}
                                            className={'p-2 bg-red-500 text-white rounded-lg px-8'}
                                        >
                                            Delete
                                        </button>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>

                </Dialog>
            </Transition>
        </>
    )
}

export default Modal