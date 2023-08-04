const storage = window.localStorage

export const setItem = (key, value) => {
    try {
        // { name: 'hi' }
        // => toString() => [Object Object]
        storage.setItem(key, JSON.stringify(value))
        console.log(key, value)
    } catch (e) {
        console.log(e)
    }
}

export const getItem = (key, defaultvalue) => {
    try {
        const storedValue = storage.getItem(key)

        if (!storedValue) {
            return defaultvalue
        }

        const parsedValue = JSON.parse(storedValue)
        return parsedValue
    } catch (e) {
        return defaultvalue
    }
}

export const removeItem = (key) => {
    storage.removeItem(key)
}