import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Burgers.module.css";

export const imageStyle = {
    "objectFit": "cover", 
    "width": "100%", 
    "height": "100%"
}

async function getBurgers() {
    const res = await fetch("http://localhost:5000/items");
    return res.json();
}

const Burgers = async () => {
    const burgers = await getBurgers();
    const renderBurgers = () => burgers.map(({id, name, desc, image}) => (
        <Link href={`/burgers/${id}`} key={id} className={styles.burgerCard}>
            <div className={styles.imageContainer}>
                <Image src={image} alt={name} width={1000} height={1000} style={imageStyle}/>
            </div>
            <div>
                <h3>{name}</h3>
                <p>{desc}</p>
            </div>
        </Link>
    ));
    const elements = renderBurgers();

    return (
        <div>
            <h1>Наши бургеры</h1>
            {elements}
        </div>
    );
}

export default Burgers;