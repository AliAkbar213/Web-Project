import useFetch from "./useFetch";

function HomePage(){

    const {data, loading, error} = useFetch();

    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic omnis ab odio, modi adipisci excepturi. Unde, autem placeat? Ipsum alias dolor natus minima accusantium, odio nihil officiis provident ducimus beatae ipsa repudiandae nam labore nesciunt blanditiis officia, sint reiciendis quo in! Velit rem, distinctio quibusdam impedit error illo. Non, dolore.</p>
        </div>
    );
}

export default HomePage