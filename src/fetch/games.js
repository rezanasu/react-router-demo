import instance from "../modules/axios.js"

export const listGames = async () => {
    try {

        const response = await instance({
            method: "GET",
            url: "/games"
        })

        return response.data;
    } catch(err) {
        throw new Error(err)
    }
}

export const createGame = async (params) => {
    try {

        const response = await instance.postForm("/games", params)
    
        return response.data;
    } catch(err) {
        throw new Error(err);
    }
}

export const deleteGame = async (id) => {
    try {
        const response = await instance({
            method: "DELETE",
            url: `/games/${id}`
        })

        return response.data;
    } catch(err) {
        throw new Error(err);
    }
}