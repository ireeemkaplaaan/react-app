import axios from "axios";

const baseUrl ="https://localhost:44364/api/"

export default{
    student(Url = baseUrl+'Student/'){
        return{
            fetchall: () => axios.get(Url),
            fetchById:id=>axios.get(Url+id),
            create: newRecord =>axios.post(Url,newRecord),
            update:(id,updateRecord)=>axios.put(Url+id,updateRecord),
            delete:id=>axios.delete(Url+id)
        }
    }
}