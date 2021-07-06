export const fetchNewsApi = async () => {
    const data = await fetch('./news.json');
    return data.json();
}