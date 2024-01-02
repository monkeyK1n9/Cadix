export async function getUser() {
    const data = localStorage.getItem("userInfo");

    if(data) {
        const userData = JSON.parse(data);
        return userData;
    }
    return null;
}

export async function fetchUser() {
    const cookie = getCookie("accessToken");
    const data = localStorage.getItem("userInfo");

    if(data) {
        const userData = JSON.parse(data);
        return userData;
    }
}

// Function to retrieve a cookie value by name
export function getCookie(name: string) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}

// Delete a cookie by name
export function deleteCookie(name: string) {
    document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}