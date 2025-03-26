export const imgArray = Array.from({ length: 100 }, (_, index) => {
    return {
        id: index,
        img: `https://picsum.photos/id/${index}/600/400`,
    };
});
