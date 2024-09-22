export class Service {
    getPhones = async () => {
        try {
            const res = await axios({
                url: "https://66ee0a8e380821644cde9c44.mockapi.io/product",
                method: "GET",
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    };
    getPhoneById = async (id) => {
        try {
            const res = await axios({
                url: `https://66ee0a8e380821644cde9c44.mockapi.io/product/${id}`,
                method: "GET",
            });

            return res.data;
        } catch (err) {
            console.log(err);
        }
    };
}
