export const metadata = {
    title: 'Жирные бургеры | Отзывы',
    description: 'Страница с отзывами клиентов'
}

const getReviews = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=20', {cache: "no-store"});
    return response.json();
};

const Reviews = async () => {
    const reviews = await getReviews();
    const renderReviews = () => reviews.map(({id, body}) => <div key={id} className="review">{id} {body.slice(0, 90)}...</div>);
    const elements = renderReviews();

    return (
        <div>
            <h1>Отзывы клиентов</h1>
            <div className="reviews">
                {elements}
            </div>
        </div>
    );
}

export default Reviews;