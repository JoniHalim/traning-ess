"use client"

import React from "react";
import Image from "next/image";
import Notif from "@/public/images/notif.png"
import User from "@/public/images/user.png"
import Logo from "@/public/images/logo.png"
import LogoOnly from "@/public/images/logoOnly.png"
import {useStateContext} from "@/context";

interface props {
    children: React.ReactNode
}

const Layout: React.FC<props> = ({children}) => {

    const [{navigation}, Dispatch] = useStateContext()

    return (
        <div className={'w-full h-[100vh] bg-gray-100 relative'}>
            <div className={`fixed ${navigation ? 'w-[80px]' : ' min-w-[240px]'} bg-white shadow h-full p-4 py-8`}>

                <div className={`w-full ${!navigation? 'text-start':'text-center'}`}>
                    <button
                        className={'mb-8 mx-auto'}
                        onClick={() => {
                            Dispatch({
                                type: "SET_NAVIGATION",
                                payload: !navigation
                            })
                        }}
                    >
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="30" height="30" rx="15" fill="#51B15C"/>
                            <path
                                d="M21.5 19.1381V20.5065H9.18421V19.1381H21.5ZM11.6446 9.49347L12.6121 10.4609L10.4349 12.6381L12.6121 14.8153L11.6446 15.7827L8.5 12.6381L11.6446 9.49347ZM21.5 14.3486V15.717H15.3421V14.3486H21.5ZM21.5 9.55915V10.9276H15.3421V9.55915H21.5Z"
                                fill="white"/>
                        </svg>
                    </button>
                </div>

                {navigation?
                    <Image
                        src={LogoOnly}
                        alt={'notif'}
                        width={80}
                        height={35}
                        className={'object-contain'}
                    />
                    :<Image
                        src={Logo}
                        alt={'notif'}
                        width={93}
                        height={40}
                        className={'object-contain'}
                    />
                }

                <ul className={'mt-8 font-bold'}>
                    <li className={'border-l-4 border-green-500 flex items-center gap-2 pl-2 bg-green-50 py-2 rounded text-green-500'}>
                        <span>
                            <svg width="25" height="20" viewBox="0 0 25 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.64286 12.4103V10.696H7.35714V12.4103H5.64286ZM0.5 3.83888C0.5 2.92957 0.861224 2.0575 1.50421 1.41451C2.14719 0.771532 3.01926 0.410309 3.92857 0.410309H15.9286C16.8379 0.410309 17.71 0.771532 18.3529 1.41451C18.9959 2.0575 19.3571 2.92957 19.3571 3.83888V14.9817C19.3571 15.2091 19.4474 15.4271 19.6082 15.5878C19.7689 15.7486 19.987 15.8389 20.2143 15.8389C20.4416 15.8389 20.6596 15.7486 20.8204 15.5878C20.9811 15.4271 21.0714 15.2091 21.0714 14.9817V3.83888C21.9807 3.83888 22.8528 4.2001 23.4958 4.84309C24.1388 5.48607 24.5 6.35814 24.5 7.26745V14.9817C24.5 16.1184 24.0485 17.2085 23.2447 18.0122C22.441 18.8159 21.3509 19.2675 20.2143 19.2675H4.78571C3.64907 19.2675 2.55898 18.8159 1.75526 18.0122C0.951529 17.2085 0.5 16.1184 0.5 14.9817V3.83888ZM4.78571 5.55317C4.55839 5.55317 4.34037 5.64347 4.17962 5.80422C4.01888 5.96496 3.92857 6.18298 3.92857 6.41031C3.92857 6.63764 4.01888 6.85565 4.17962 7.0164C4.34037 7.17715 4.55839 7.26745 4.78571 7.26745H15.0714C15.2988 7.26745 15.5168 7.17715 15.6775 7.0164C15.8383 6.85565 15.9286 6.63764 15.9286 6.41031C15.9286 6.18298 15.8383 5.96496 15.6775 5.80422C15.5168 5.64347 15.2988 5.55317 15.0714 5.55317H4.78571ZM4.78571 8.98174C4.55839 8.98174 4.34037 9.07204 4.17962 9.23279C4.01888 9.39353 3.92857 9.61155 3.92857 9.83888V13.2675C3.92857 13.4948 4.01888 13.7128 4.17962 13.8735C4.34037 14.0343 4.55839 14.1246 4.78571 14.1246H8.21429C8.44161 14.1246 8.65963 14.0343 8.82038 13.8735C8.98112 13.7128 9.07143 13.4948 9.07143 13.2675V9.83888C9.07143 9.61155 8.98112 9.39353 8.82038 9.23279C8.65963 9.07204 8.44161 8.98174 8.21429 8.98174H4.78571ZM11.6429 8.98174C11.4155 8.98174 11.1975 9.07204 11.0368 9.23279C10.876 9.39353 10.7857 9.61155 10.7857 9.83888C10.7857 10.0662 10.876 10.2842 11.0368 10.445C11.1975 10.6057 11.4155 10.696 11.6429 10.696H15.0714C15.2988 10.696 15.5168 10.6057 15.6775 10.445C15.8383 10.2842 15.9286 10.0662 15.9286 9.83888C15.9286 9.61155 15.8383 9.39353 15.6775 9.23279C15.5168 9.07204 15.2988 8.98174 15.0714 8.98174H11.6429ZM11.6429 12.4103C11.4155 12.4103 11.1975 12.5006 11.0368 12.6614C10.876 12.8221 10.7857 13.0401 10.7857 13.2675C10.7857 13.4948 10.876 13.7128 11.0368 13.8735C11.1975 14.0343 11.4155 14.1246 11.6429 14.1246H15.0714C15.2988 14.1246 15.5168 14.0343 15.6775 13.8735C15.8383 13.7128 15.9286 13.4948 15.9286 13.2675C15.9286 13.0401 15.8383 12.8221 15.6775 12.6614C15.5168 12.5006 15.2988 12.4103 15.0714 12.4103H11.6429Z"
                                    fill="#51B15C"/>
                                </svg>
                        </span>
                        {!navigation && "Article"}
                    </li>
                </ul>

            </div>

            <div className={`fixed top-0 p-4 py-4 bg-white shadow ${navigation?'w-[calc(100vw-80px)]':'w-[calc(100vw-240px)]'} right-0 z-10`}>
                <div className="flex items-center justify-between">
                    <p className={'font-bold'}>Article</p>
                    <div className="flex items-center gap-2">
                        <Image
                            src={Notif}
                            alt={'notif'}
                            width={27}
                            height={24}
                            className={'object-contain'}
                        />

                        |

                        <Image
                            src={User}
                            alt={'notif'}
                            width={40}
                            height={40}
                            className={'object-contain'}
                        />

                    </div>
                </div>
            </div>

            <div
                className={`fixed top-16 p-4 py-8 shadow ${navigation? 'w-[calc(100vw-80px)]':'w-[calc(100vw-240px)]'} h-[calc(100vh-64px)] overflow-auto right-0`}>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout