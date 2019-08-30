// import { async } from "q";

// export const fetchNewsApi = () => {

//     return new Promise((resolve)=>{
//             setTimeout(function(){ 
//                 resolve( [
//                     {'title': 'noticia1', 'img': 'img1'},
//                     {'title': 'noticia2', 'img': 'img2'},
//                     {'title': 'noticia3', 'img': 'img3'},
//                 ])
//             }, 3000);
//         }
//     );
// }
export const fetchNewsApi = async () => {
    const data = await fetch('./news.json');
    return data.json();
}