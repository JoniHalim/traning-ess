import React from "react";

interface props {
    children: React.ReactNode
}

const Layout: React.FC<props> = ({children}) => {
    return (
        <div className={'w-full h-[100vh] bg-gray-100 relative'}>
            <div className="fixed min-w-[240px] bg-white shadow h-full">

            </div>

            <div className={'fixed top-0 p-4 py-8 bg-white shadow w-[calc(100vw-240px)] right-0 z-10'}>
            </div>

            <div className={'fixed top-16 p-4 py-8 shadow w-[calc(100vw-240px)] h-full right-0'}>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout