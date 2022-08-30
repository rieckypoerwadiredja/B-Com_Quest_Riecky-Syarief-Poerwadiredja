class Subscribe {
    async postSubscribe(Subscribe, name, email) {
        const subscribeFormData = new Subscribe({ // create new subscribe
            name: name,
            email: email
        });

        await subscribeFormData.save().then(() => {
            console.log('subscribe data berhasil di simpan');
            console.log(subscribeFormData);
        }).catch((err) => {
            console.log(err);
        });

    }
}


const SubscribeClass = new Subscribe;
module.exports = SubscribeClass;