"use server"

const apiBaseURL = 'https://api-trials.x5.com.au/api'

export const FetchApi = async (endpoint: string) => {
    try {
        const result = await fetch(`${apiBaseURL}${endpoint}`, {
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/json"
            },
            next:{
                revalidate:60
            }
        }).then((res) => res.json())

        if (result.status) {
            return {
                data: result.data
            }
        } else {
            return {
                data: result
            }
        }


    } catch (e) {
        return e
    }
}