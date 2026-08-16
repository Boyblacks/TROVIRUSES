// TROVIRUSES
// Central storage layer.
//
// Feature modules should use this layer instead of
// directly accessing browser storage.

const STORAGE_PREFIX = "troviruses:";

function saveData(key, value) {
    try {
        const serializedValue = JSON.stringify(value);
        localStorage.setItem(
            STORAGE_PREFIX + key,
            serializedValue
        );

        return true;
    } catch (error) {
        console.error("TROVIRUSES: Failed to save data.", error);
        return false;
    }
}

function loadData(key, fallback = null) {
    try {
        const storedValue = localStorage.getItem(
            STORAGE_PREFIX + key
        );

        if (storedValue === null) {
            return fallback;
        }

        return JSON.parse(storedValue);
    } catch (error) {
        console.error("TROVIRUSES: Failed to load data.", error);
        return fallback;
    }
}

function removeData(key) {
    try {
        localStorage.removeItem(
            STORAGE_PREFIX + key
        );

        return true;
    } catch (error) {
        console.error("TROVIRUSES: Failed to remove data.", error);
        return false;
    }
}
