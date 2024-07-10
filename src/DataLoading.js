let currentStartIndex = 0;

export async function fetchData(category, isLoadMore) {
    
    if(isLoadMore) {
        currentStartIndex += 6
    } else {
        currentStartIndex = 0
    }

    try {
        const response = await fetch(`
            https://www.googleapis.com/books/v1/volumes?q="subject:${category}"&key=AIzaSyCdqmPUn-aR5mTXRW-zlUmyyGlWdibKHGk&printType=books&startIndex=${currentStartIndex}&maxResults=6&langRestrict=en
        `);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}