import styles from "./home.css"
const Home = () => {
    return (
        <div className="intro">
            <div className="introLeft">
                <div className="introRight">
                    <h2>Hello, My name is</h2>
                    <h1>Nikita Saini</h1>
                    <div className="introsection">
                        <div className="title-wrapper">
                            <div className="title-item">
                                Web Developer
                            </div>
                            <div className="title-item">
                                UI Designer
                            </div>
                            <div className="title-item">
                                Sketch Artist
                            </div>
                        </div>
                    </div>
                    <div className="description">
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem aperiam laborum dolorem facere provident recusandae expedita quas dicta labore molestias!
                    </div>
                </div>
            </div>
                <div className="profileimg">
                    <div className="profileimginner">
                    <img src="https://avatars.githubusercontent.com/u/67872006?v=4" alt="" />
                    </div>
                </div>
        </div>
    )
}
export default Home;