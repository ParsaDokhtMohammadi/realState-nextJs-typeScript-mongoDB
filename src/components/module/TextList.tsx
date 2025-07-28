import styles from "@/components/module/TextList.module.css"
import { ITextList } from "@/types/Interfaces"
import { AiOutlineDelete } from "react-icons/ai"
import { MdOutlineLibraryAdd } from "react-icons/md"


const TextList = ({title , profileData , setProfileData , type}:ITextList) => {
    const addHandler = ():void =>{
        setProfileData({...profileData , [type]:[...profileData[type]|| [] ,""]})
    }
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>,index:number):void=>{
      const {value} = e.target
      const list  = [...profileData[type]]
      list[index] = value
      setProfileData({...profileData,[type]:list})
    }
    const deleteHandler = (index:number):void => {
      const list = [...profileData[type]]
      list.splice(index,1)
      setProfileData({...profileData,[type]:list})
    }
  return (
    <div className={styles.container}>
    <p>{title}</p>
   
        {profileData[type]?.map((item:string,index:number)=>(
            <div key={index} className={styles.card}>
            <input type="text" value={item} onChange={e=>changeHandler(e,index)}></input>
            <button
              onClick={()=>deleteHandler(index)}
            >حذف <AiOutlineDelete/></button>
         </div> 
        ))}
        <button onClick={()=>addHandler()}>
            افزودن
            <MdOutlineLibraryAdd></MdOutlineLibraryAdd>
            </button>
     
    
    </div>

  )
}

export default TextList