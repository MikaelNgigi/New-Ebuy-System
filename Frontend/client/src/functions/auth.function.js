import axios from "axios";

 export const userCreateUpdate = async (authtoken) => {
    return await axios.post(`${process.env.REACT_APP_API}/user-create-or-update`, {},{
        headers: {
            authtoken,
        },
    });
};

export const currentUser = async (authtoken) => {
    return await axios.post(`${process.env.REACT_APP_API}/current-user`, {},{
        headers: {
            authtoken,
        },
    });
};
export const currentAdmin = async (authtoken) => {
    return await axios.post(`${process.env.REACT_APP_API}/current-admin`, {},{
        headers: {
            authtoken,
        },
    });
};
