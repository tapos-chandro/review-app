
const getStoredData = (storedName) => {
    console.log("getStoredData", storedName);
    try {
        const item = localStorage.getItem(storedName);
        console.log("getStoredData item", item);
        // return
        return  JSON.parse(item) ;
    } catch (error) {
        console.error(error);
    }
}

const setLocalStorageData = ( storedName , data ) => {
    try {
        localStorage.setItem(storedName, JSON.stringify(data));
    } catch (error) {
        console.error(error);
    }
}


export  { getStoredData , setLocalStorageData};

