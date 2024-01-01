export async function getUser() {
    return null;
}

// Function to set an HTTP-only cookie from the client side
export function setHttpOnlyCookie(name: string, value: string, expirationDays: number) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + expirationDays);
  
    const cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${expirationDate.toUTCString()}; path=/`;
  
    document.cookie = cookieString;
}