import styles from "@/components/module/ItemList.module.css"


const ItemList = ({data}:{data:string[] | undefined}) => {
    
    return (
        <>
            {
                data?.length ? (<ul>
                    {data?.map((item, index) => (<i key={index}>{item}</i>))}
                </ul>) : (<p>هیج موردی ذکر نشده است</p>)
            }
        </>
    )
}

export default ItemList