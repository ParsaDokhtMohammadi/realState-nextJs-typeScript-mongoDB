import React from 'react'
import styles from "@/components/module/RadioList.module.css"
import { CATEGORY, IProfileData } from '@/types/Interfaces'

const RadioList = ({ profileData, setProfileData }: IProfileData) => {
    const { category } = profileData
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target
        setProfileData({ ...profileData, [name]: value })
    }
    return (
        <div className={styles.container}>
            <p>دسته بندی</p>
            <div className={styles.main}>
                <div>
                    <label htmlFor={CATEGORY.VILLA}>ویلا</label>
                    <input
                        type='radio'
                        id={CATEGORY.VILLA}
                        value={CATEGORY.VILLA}
                        name='category'
                        checked={category === CATEGORY.VILLA}
                        onChange={changeHandler}
                    ></input>
                </div>
                <div>
                    <label htmlFor={CATEGORY.APARTMENT}>آپارتمان</label>
                    <input
                        type='radio'
                        id={CATEGORY.APARTMENT}
                        value={CATEGORY.APARTMENT}
                        name='category'
                        checked={category === CATEGORY.APARTMENT}
                        onChange={changeHandler}
                    ></input>
                </div>
                <div>
                    <label htmlFor={CATEGORY.APARTMENT}>مغازه</label>
                    <input
                        type='radio'
                        id={CATEGORY.STORE}
                        value={CATEGORY.STORE}
                        name='category'
                        checked={category === CATEGORY.STORE}
                        onChange={changeHandler}
                    ></input>
                </div>
                <div>
                    <label htmlFor={CATEGORY.OFFICE}>دفتر</label>
                    <input
                        type='radio'
                        id={CATEGORY.OFFICE}
                        value={CATEGORY.OFFICE}
                        name='category'
                        checked={category === CATEGORY.OFFICE}
                        onChange={changeHandler}
                    ></input>
                </div>

            </div>
        </div>
    )
}

export default RadioList