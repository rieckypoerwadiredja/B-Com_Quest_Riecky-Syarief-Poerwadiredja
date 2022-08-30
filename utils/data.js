// form data
const formSubscribeLayouts = {
    title: 'Subscribe Form',
    desc: 'Fill in required customs info',
    action: '/',
    method: 'POST',
    questions: [

        {
            label: 'Company Name',
            idClassName: 'name',
            type: 'text',
            placeholder: 'PT.Example',
        },
        {
            label: 'Company Email',
            idClassName: 'email',
            type: 'email',
            placeholder: 'example@gmail.com',
        }
    ]
}

module.exports = formSubscribeLayouts;