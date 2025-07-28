import React, { Dispatch, SetStateAction } from 'react'
import styles from "@/components/module/TextInput.module.css"
import { IProfile } from '@/types/Interfaces'
import { p2e } from '@/utils/replaceNumber'

interface ITextInput {
    title : string
    name : keyof IProfile
    profileData : IProfile
    setProfileData : Dispatch<SetStateAction<IProfile>>
    textArea ?: boolean
}

const TextInput = ({title,name,profileData,setProfileData,textArea=false}:ITextInput) => {
    const changeHandler = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>{
        const {name , value} = e.target
        setProfileData({...profileData , [name]:p2e(value)})
    }
  return (
    <div className={styles.container}>
        <p>{title}</p>
        {textArea ?(
        <textarea name={name} value={profileData[name] as string}
        onChange={changeHandler}
        ></textarea>
        ):(
        <input type='text' name={name} value={profileData[name] as string}
        onChange={changeHandler}
        ></input>
    )}
    </div>
  )
}

export default TextInput