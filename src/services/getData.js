export const getData = async (category, widget, query) => {
    const url = `https://apidatos.ree.es/es/datos/${category}/${widget}?start_date=2019-01-01T00:00&end_date=2019-01-31T23:59&time_trunc=${query}`

    const resp = await fetch(url)


    const { included } = await resp.json()

    const data = included.map(elm => {
        return {
            type: elm.type,
            values: elm.attributes.values
        }
    })

    return data
}