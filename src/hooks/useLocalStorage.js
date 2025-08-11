const getStoredData = (storedName) => {
    try {
        const item = localStorage.getItem(storedName);
        if (item === null || item === undefined) {
            return null;  // Nothing stored yet
        }
        return JSON.parse(item);
    } catch (error) {
        console.error("Error reading from localStorage:", error);
        return null;
    }
}


const setLocalStorageData = (storedName, data) => {
    try {
        localStorage.setItem(storedName, JSON.stringify(data));
    } catch (error) {
        console.error("Error writing to localStorage:", error);
    }
}

export { getStoredData, setLocalStorageData };
