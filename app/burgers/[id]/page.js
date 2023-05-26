import Image from "next/image";
import styles from "../../../styles/Burgers.module.css";
import {imageStyle} from "../page";

export async function generateStaticParams() {
    const burgers = await fetch("http://localhost:5000/items").then(res => res.json());
    
    return burgers.map(item => ({
        id: item.id
    }));
}

async function getBurgerInfo(id) {
    const burger = await fetch(`http://localhost:5000/items/${id}`);
    return burger.json();
}

const SingleBurger = async ({params}) => {
    const {id} = params;
    const {name, image, desc} = await getBurgerInfo(id);

    return (
        <div className={styles.singleBurger}>
            <h1>{name}</h1>
            <div className={styles.imageContainer}>
                <Image src={image} alt={name} width={1000} height={1000} style={imageStyle}/>
            </div>
            <div>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default SingleBurger;