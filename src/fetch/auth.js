import instance from "../modules/axios.js"

export const login = async (params) => {
    try {

        const {username, password} = params;

        const response = await instance({
            method: "POST",
            url: "/login",
            data: {
                username,
                password
            }
        })

        const {accessToken} = response.data

        localStorage.setItem("accessToken", accessToken);

        return response.data;
    } catch(err) {
        throw new Error(err)
    }
}