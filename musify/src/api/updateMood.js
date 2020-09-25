import axios from "axios";
export const updateMood = async (tn, nm) => {
    const response = await axios({
        method: "post",
        url: `https://creedorians.000webhostapp.com/moodUpdate.php`,
        headers: { "Content-Type": "text/plain" },
        data: {
            trackname: tn,
            newmood: nm
        },
    });
    return response.data;
};

export default updateMood;