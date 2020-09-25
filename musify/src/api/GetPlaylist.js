import axios from "axios";
export const GetPlaylist = async (moodName) => {
    const response = await axios({
        method: "post",
        url: `https://creedorians.000webhostapp.com/getPlaylist.php`,
        headers: { "Content-Type": "text/plain" },
        data: {
            mood: moodName,
        },
    });
    return response.data;
};

export default GetPlaylist;