// const apis = (props)=>{
//     const {method,url,data} = props

    
//         switch (method) {
//             case 'GET':
//                     return fetch(method,url).then(resp=>resp.json()).then(resp=>resp).catch(err=>err).finally(()=>'no response')
//                 break;
            
//             default:
//                 break;
//         }

// }

export const apis = (...parms)=>{
console.log(parms)
}

// export default apis